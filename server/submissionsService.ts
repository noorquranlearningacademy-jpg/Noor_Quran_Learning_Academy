import {
  insertContactInquiry,
  insertHomeTuitionInquiry,
  insertTrialBooking,
  MissingDatabaseConfigError,
  type ContactInquiryRecord,
  type HomeTuitionRecord,
  type TrialBookingRecord,
} from './db.js';
import { sendAcademyNotificationEmail } from './emailService.js';

function cleanStr(val: unknown, max = 500): string {
  return typeof val === 'string' ? val.trim().slice(0, max) : '';
}

function generateRefId(prefix: 'TR' | 'HT' | 'CT'): string {
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${Date.now().toString(36).toUpperCase()}-${random}`;
}

export async function handleTrialBooking(rawBody: unknown): Promise<{
  status: number;
  json: Record<string, unknown>;
}> {
  const b = (rawBody ?? {}) as Record<string, unknown>;
  const lang = b.lang === 'ur' ? 'ur' : 'en';

  const record: TrialBookingRecord = {
    id: generateRefId('TR'),
    submittedAt: new Date().toISOString(),
    studentName: cleanStr(b.studentName, 120),
    studentAge: cleanStr(b.studentAge, 10),
    parentName: cleanStr(b.parentName, 120),
    country: cleanStr(b.country, 120),
    whatsapp: cleanStr(b.whatsapp, 60),
    email: cleanStr(b.email, 160),
    course: cleanStr(b.course, 100),
    preferredLanguage: cleanStr(b.preferredLanguage, 40),
    preferredTeacher: cleanStr(b.preferredTeacher, 40),
    classType: cleanStr(b.classType, 40),
    preferredDays: cleanStr(b.preferredDays, 120),
    preferredTime: cleanStr(b.preferredTime, 120),
    preferredApp: cleanStr(b.preferredApp, 40),
    notes: cleanStr(b.notes, 1000),
  };

  if (
    !record.studentName ||
    !record.studentAge ||
    !record.country ||
    !record.whatsapp ||
    !record.email ||
    !record.course ||
    !record.preferredDays ||
    !record.preferredTime
  ) {
    return {
      status: 400,
      json: {
        code: 'VALIDATION_ERROR',
        error:
          lang === 'ur'
            ? 'براہ کرم تمام ضروری خانے پُر کریں۔'
            : 'Please complete all required trial booking fields.',
      },
    };
  }

  try {
    const storageMode = await insertTrialBooking(record);
    const emailResult = await sendAcademyNotificationEmail({
      subject: `[Noor Quran] New 3-Day Free Trial Request (${record.id})`,
      replyTo: record.email,
      text: [
        `Reference ID: ${record.id}`,
        `Submitted At: ${record.submittedAt}`,
        `Student Name: ${record.studentName} (Age: ${record.studentAge})`,
        `Parent/Guardian: ${record.parentName || 'N/A'}`,
        `Country: ${record.country}`,
        `WhatsApp: ${record.whatsapp}`,
        `Email: ${record.email}`,
        `Course: ${record.course}`,
        `Preferred Language: ${record.preferredLanguage}`,
        `Preferred Teacher: ${record.preferredTeacher}`,
        `Class Type: ${record.classType}`,
        `Preferred Days: ${record.preferredDays}`,
        `Preferred Time: ${record.preferredTime}`,
        `Preferred App: ${record.preferredApp}`,
        `Notes: ${record.notes || 'None'}`,
      ].join('\n'),
    });

    return {
      status: 201,
      json: {
        ok: true,
        id: record.id,
        submittedAt: record.submittedAt,
        storageMode,
        emailSent: emailResult.sent,
        emailStatus: emailResult.status,
      },
    };
  } catch (err) {
    if (err instanceof MissingDatabaseConfigError) {
      return {
        status: 503,
        json: {
          code: 'DATABASE_NOT_CONFIGURED',
          error:
            lang === 'ur'
              ? 'ڈیٹابیس ابھی ترتیب نہیں دیا گیا۔ براہ کرم واٹس ایپ یا ای میل پر براہِ راست رابطہ کریں۔'
              : err.message,
        },
      };
    }
    console.error('[api/bookings] Error saving trial booking:', err);
    return {
      status: 500,
      json: {
        code: 'SERVER_ERROR',
        error:
          lang === 'ur'
            ? 'درخواست محفوظ کرنے میں مسئلہ پیش آیا۔ براہ کرم دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔'
            : 'Unable to save your booking right now. Please try again or contact us via WhatsApp.',
      },
    };
  }
}

export async function handleHomeTuitionInquiry(rawBody: unknown): Promise<{
  status: number;
  json: Record<string, unknown>;
}> {
  const b = (rawBody ?? {}) as Record<string, unknown>;
  const lang = b.lang === 'ur' ? 'ur' : 'en';

  const record: HomeTuitionRecord = {
    id: generateRefId('HT'),
    submittedAt: new Date().toISOString(),
    name: cleanStr(b.name, 120),
    phone: cleanStr(b.phone, 60),
    location: cleanStr(b.location, 200),
    details: cleanStr(b.details, 1000),
  };

  if (!record.name || !record.phone || !record.location || !record.details) {
    return {
      status: 400,
      json: {
        code: 'VALIDATION_ERROR',
        error:
          lang === 'ur'
            ? 'براہ کرم ہوم ٹیوشن کے تمام ضروری خانے پُر کریں۔'
            : 'Please complete all required home tuition inquiry fields.',
      },
    };
  }

  try {
    const storageMode = await insertHomeTuitionInquiry(record);
    const emailResult = await sendAcademyNotificationEmail({
      subject: `[Noor Quran] New Home Tuition Inquiry (${record.id})`,
      text: [
        `Reference ID: ${record.id}`,
        `Submitted At: ${record.submittedAt}`,
        `Name: ${record.name}`,
        `WhatsApp / Phone: ${record.phone}`,
        `Location: ${record.location}`,
        `Details: ${record.details}`,
      ].join('\n'),
    });

    return {
      status: 201,
      json: {
        ok: true,
        id: record.id,
        submittedAt: record.submittedAt,
        storageMode,
        emailSent: emailResult.sent,
        emailStatus: emailResult.status,
      },
    };
  } catch (err) {
    if (err instanceof MissingDatabaseConfigError) {
      return {
        status: 503,
        json: { code: 'DATABASE_NOT_CONFIGURED', error: err.message },
      };
    }
    console.error('[api/home-tuition] Error saving inquiry:', err);
    return {
      status: 500,
      json: {
        code: 'SERVER_ERROR',
        error:
          lang === 'ur'
            ? 'درخواست محفوظ کرنے میں مسئلہ پیش آیا۔ براہ کرم واٹس ایپ پر رابطہ کریں۔'
            : 'Unable to save your home tuition inquiry right now. Please try again or contact us via WhatsApp.',
      },
    };
  }
}

export async function handleContactInquiry(rawBody: unknown): Promise<{
  status: number;
  json: Record<string, unknown>;
}> {
  const b = (rawBody ?? {}) as Record<string, unknown>;
  const lang = b.lang === 'ur' ? 'ur' : 'en';

  const record: ContactInquiryRecord = {
    id: generateRefId('CT'),
    submittedAt: new Date().toISOString(),
    name: cleanStr(b.name, 120),
    contact: cleanStr(b.contact, 160),
    topic: cleanStr(b.topic, 100),
    message: cleanStr(b.message, 1500),
  };

  if (!record.name || !record.contact || !record.topic || !record.message) {
    return {
      status: 400,
      json: {
        code: 'VALIDATION_ERROR',
        error:
          lang === 'ur'
            ? 'براہ کرم پیغام بھیجنے سے پہلے تمام ضروری خانے پُر کریں۔'
            : 'Please complete all required contact fields.',
      },
    };
  }

  try {
    const storageMode = await insertContactInquiry(record);
    const emailResult = await sendAcademyNotificationEmail({
      subject: `[Noor Quran] New Contact Inquiry: ${record.topic} (${record.id})`,
      replyTo: record.contact.includes('@') ? record.contact : undefined,
      text: [
        `Reference ID: ${record.id}`,
        `Submitted At: ${record.submittedAt}`,
        `Name: ${record.name}`,
        `Contact: ${record.contact}`,
        `Topic: ${record.topic}`,
        `Message:\n${record.message}`,
      ].join('\n'),
    });

    return {
      status: 201,
      json: {
        ok: true,
        id: record.id,
        submittedAt: record.submittedAt,
        storageMode,
        emailSent: emailResult.sent,
        emailStatus: emailResult.status,
      },
    };
  } catch (err) {
    if (err instanceof MissingDatabaseConfigError) {
      return {
        status: 503,
        json: { code: 'DATABASE_NOT_CONFIGURED', error: err.message },
      };
    }
    console.error('[api/contact] Error saving inquiry:', err);
    return {
      status: 500,
      json: {
        code: 'SERVER_ERROR',
        error:
          lang === 'ur'
            ? 'پیغام محفوظ کرنے میں مسئلہ پیش آیا۔ براہ کرم واٹس ایپ پر رابطہ کریں۔'
            : 'Unable to send your inquiry right now. Please try again or reach us via WhatsApp.',
      },
    };
  }
}
