import { GoogleGenAI, ThinkingLevel, type GenerateContentResponse } from '@google/genai';

export const MODEL_NAME = 'gemini-4-hydrogen';

interface ChatHistoryTurn {
  role: 'user' | 'model';
  text: string;
}

function getSystemInstruction(): string {
  const whatsapp = process.env.ACADEMY_WHATSAPP_DISPLAY || '+92 331 444 6892';
  const email = process.env.ACADEMY_EMAIL || 'noorquranlearningacademy@gmail.com';

  return `You are the official AI Assistant for Noor Quran Learning Academy ("نور قرآن لرننگ اکیڈمی").
Your tone is calm, respectful, welcoming, and clear—fitting an Islamic Quran education academy for parents, children, and adult learners.

STRICT ACCURACY & SAFETY RULES:
1. Only state facts provided below. NEVER invent or fabricate teacher names, teacher qualifications, years of experience, fixed monthly fees, currency prices, live slot availability, or automatic booking confirmations.
2. Submitting the Free Trial Booking form does NOT automatically confirm a booking; the academy coordinator contacts the family via WhatsApp or email to confirm teacher availability and schedule.
3. If the user asks for something unavailable here (such as exact fee quotes, teacher credentials/names/photos, live schedule availability, or personal account status), clearly explain that you cannot confirm those details directly and invite them to contact Noor Quran Learning Academy via WhatsApp (${whatsapp}), Email (${email}), or the Free Trial Booking page (/free-trial).
4. Language matching:
   - If the user's message is in Urdu (or written in Arabic/Urdu script) or if the interface language is set to Urdu ("ur") and the user asks in Urdu, reply naturally in clear, polite Urdu.
   - If the user writes in English, reply in English (even if the UI language is Urdu, unless they ask for Urdu).
   - Keep responses concise and well-structured (around 2–5 sentences, or short bullet points when listing courses).

VERIFIED ACADEMY FACTS:
- Brand & Motto: Noor Quran Learning Academy — "Learn the Quran. Understand the Quran. Live by the Quran."
- Languages of Instruction: Urdu and English.
- Students Served: Children and adults in Pakistan, UK, USA, Canada, Europe, and worldwide.
- Teachers: Currently 1 male teacher and 2 female teachers. Teacher names, photos, and detailed qualifications are temporary ("To be confirmed") until official profiles are published. Parents, sisters, and adult learners can select a Male or Female teacher preference in the Free Trial Booking form.
- Courses Offered (7 courses):
  1. Noorani Qaida (foundational Arabic letters, Harakat, joining rules, basic Makharij for children & beginners)
  2. Nazra Quran (complete Quran reading from Juz 1 to Juz 30 with fluency & stop rules; Tajweed can be integrated upon request)
  3. Hifz-ul-Quran (structured full-Quran or selected-Surah memorization with daily Sabaq, Sabqi, and Manzil revision)
  4. Quran with Tajweed (Makharij, Sifaat, Noon/Meem Sakinah, Qalqalah, Madd—offered as a separate course or alongside Nazra Quran)
  5. Quran with Urdu Translation (word-by-word and contextual Urdu translation)
  6. Quran with English Translation (clear English translation for international & English-medium students)
  7. Quran Tafseer (in-depth verse-by-verse explanation, historical context / Asbab al-Nuzul, and practical daily application; available for selected Surahs or complete Quran in Urdu or English)
- Class Formats: One-to-one private classes or small group classes (maximum 4 students).
- Weekly Schedule & Duration: Regular classes run 4 days per week, with a standard duration of 1 hour (shorter or longer durations can be requested). Friday, Saturday, and Sunday are regular off days, though classes may be arranged on those days if both the student and teacher mutually agree.
- Online Class Apps: WhatsApp, IMO, Zoom, and Google Meet. Class links or call details are shared directly once confirmed by the coordinator.
- Free Trial: 3-day free trial available before enrolling. Requested through the Free Trial Booking page (/free-trial). Coordinator confirms availability via WhatsApp or email.
- Fee Policy: Fees are not finalized and fixed prices are NOT published on the website (Pakistan and international students may have different fee plans). Monthly tuition depends on 5 factors: (1) Selected course, (2) One-to-one or group format (max 4 students), (3) Student's country, (4) Weekly schedule, and (5) Class duration (standard 1 hour or custom). Visitors should contact WhatsApp or Email for fee details.
- Home Tuition Policy: Available through MALE teachers ONLY, strictly subject to location and teacher availability. Provisional base location: Sialkot, Pakistan (to be confirmed before launch; specific coverage areas: To be confirmed). Female teachers are available for online classes only. Inquiries can be made via the Home Tuition page (/home-tuition), WhatsApp, or Email.
- Read Quran Page (/read-quran): Includes all 114 Surahs with Arabic text, Urdu and English translations, and recitation audio controls.
- Contact Channels:
  - WhatsApp: ${whatsapp}
  - Email: ${email}`;
}

export function getConfiguredApiKey(): string | null {
  const raw = process.env.GEMINI_API_KEY?.trim();
  if (!raw || raw === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return raw;
}

function getClient(apiKey: string): GoogleGenAI {
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function localizeError(code: string, lang: 'en' | 'ur', fallbackMsg: string): string {
  if (lang === 'ur') {
    switch (code) {
      case 'MISSING_API_KEY':
        return 'جیمنی اے آئی کی (GEMINI_API_KEY) ابھی ترتیب نہیں دی گئی۔ براہ کرم سرور کی سیٹنگز میں API key شامل کریں، یا نیچے واٹس ایپ اور ای میل کے ذریعے اکیڈمی سے رابطہ کریں۔';
      case 'INVALID_API_KEY':
        return 'فراہم کردہ GEMINI_API_KEY درست نہیں ہے یا اس کی اجازت نہیں ہے۔ براہ کرم سرور کی سیٹنگز میں API key چیک کریں۔';
      case 'RATE_LIMITED':
        return 'اس وقت بہت زیادہ درخواستیں موصول ہو رہی ہیں۔ براہ کرم کچھ لمحوں بعد دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔';
      case 'VALIDATION_ERROR':
        return 'براہ کرم چیٹ باکس میں اپنا سوال درج کریں۔';
      default:
        return 'اس وقت اے آئی اسسٹنٹ سے جواب حاصل کرنے میں دشواری پیش آ رہی ہے۔ براہ کرم دوبارہ کوشش کریں یا واٹس ایپ / ای میل پر رابطہ کریں۔';
    }
  }

  switch (code) {
    case 'MISSING_API_KEY':
      return 'GEMINI_API_KEY is not configured on the server yet. Please set GEMINI_API_KEY in your server environment, or contact the academy directly via WhatsApp or Email below.';
    case 'INVALID_API_KEY':
      return 'The configured GEMINI_API_KEY was rejected or lacks permission. Please verify your API key in the server environment.';
    case 'RATE_LIMITED':
      return 'The AI assistant is temporarily busy due to rate limits. Please try again shortly or reach out via WhatsApp or Email.';
    case 'VALIDATION_ERROR':
      return fallbackMsg;
    default:
      return 'Unable to reach the AI assistant right now. Please try again in a moment or contact the academy via WhatsApp or Email.';
  }
}

export function getChatHealth() {
  return {
    ok: true,
    geminiConfigured: Boolean(getConfiguredApiKey()),
    databaseConfigured: Boolean(process.env.DATABASE_URL?.trim()),
    emailConfigured: Boolean(
      process.env.RESEND_API_KEY?.trim() ||
        (process.env.SMTP_HOST?.trim() && process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim())
    ),
    model: MODEL_NAME,
  };
}

export async function handleChatRequest(rawBody: unknown): Promise<{
  status: number;
  json: Record<string, unknown>;
}> {
  const body = (rawBody ?? null) as {
    message?: unknown;
    lang?: unknown;
    history?: unknown;
  } | null;

  const lang: 'en' | 'ur' = body?.lang === 'ur' ? 'ur' : 'en';
  const rawMessage = typeof body?.message === 'string' ? body.message.trim() : '';

  if (!rawMessage) {
    return {
      status: 400,
      json: {
        code: 'VALIDATION_ERROR',
        error: localizeError('VALIDATION_ERROR', lang, 'Please enter a message before sending.'),
      },
    };
  }

  if (rawMessage.length > 1500) {
    return {
      status: 400,
      json: {
        code: 'VALIDATION_ERROR',
        error:
          lang === 'ur'
            ? 'آپ کا سوال 1500 حروف سے کم ہونا چاہیے۔'
            : 'Please keep your message under 1500 characters.',
      },
    };
  }

  const apiKey = getConfiguredApiKey();
  if (!apiKey) {
    return {
      status: 503,
      json: {
        code: 'MISSING_API_KEY',
        error: localizeError('MISSING_API_KEY', lang, 'GEMINI_API_KEY is missing.'),
      },
    };
  }

  const sanitizedHistory: ChatHistoryTurn[] = [];
  if (Array.isArray(body?.history)) {
    for (const turn of body.history.slice(-12)) {
      if (
        turn &&
        typeof turn === 'object' &&
        (turn.role === 'user' || turn.role === 'model') &&
        typeof turn.text === 'string'
      ) {
        const text = turn.text.trim();
        if (text) {
          sanitizedHistory.push({
            role: turn.role,
            text: text.slice(0, 1500),
          });
        }
      }
    }
  }

  const contents = [
    ...sanitizedHistory.map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.text }],
    })),
    {
      role: 'user' as const,
      parts: [
        {
          text: `[Preferred UI language: ${lang === 'ur' ? 'Urdu (اردو)' : 'English'}]\n${rawMessage}`,
        },
      ],
    },
  ];

  try {
    const ai = getClient(apiKey);
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents,
      config: {
        systemInstruction: getSystemInstruction(),
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      },
    });

    const replyText = response.text?.trim();
    if (!replyText) {
      return {
        status: 502,
        json: {
          code: 'EMPTY_RESPONSE',
          error: localizeError('UPSTREAM_ERROR', lang, 'Empty response from AI.'),
        },
      };
    }

    return { status: 200, json: { reply: replyText } };
  } catch (err: unknown) {
    const errObj = err as { status?: number; message?: string };
    const status = typeof errObj?.status === 'number' ? errObj.status : 500;
    const errMsg = typeof errObj?.message === 'string' ? errObj.message : 'Unknown error';

    console.error('[api/chat] Gemini error:', status, errMsg);

    if (
      status === 400 ||
      status === 403 ||
      errMsg.includes('API_KEY_INVALID') ||
      errMsg.includes('PERMISSION_DENIED')
    ) {
      return {
        status: status === 403 ? 403 : 400,
        json: {
          code: 'INVALID_API_KEY',
          error: localizeError('INVALID_API_KEY', lang, errMsg),
        },
      };
    }

    if (status === 429 || errMsg.includes('RESOURCE_EXHAUSTED')) {
      return {
        status: 429,
        json: {
          code: 'RATE_LIMITED',
          error: localizeError('RATE_LIMITED', lang, errMsg),
        },
      };
    }

    return {
      status: 502,
      json: {
        code: 'UPSTREAM_ERROR',
        error: localizeError('UPSTREAM_ERROR', lang, errMsg),
      },
    };
  }
}
