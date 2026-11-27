import nodemailer from 'nodemailer';

export interface EmailNotificationResult {
  sent: boolean;
  status: 'sent_resend' | 'sent_smtp' | 'sent_relay' | 'not_configured' | 'failed';
}

interface NotificationPayload {
  subject: string;
  text: string;
  replyTo?: string;
}

export async function sendAcademyNotificationEmail(
  payload: NotificationPayload
): Promise<EmailNotificationResult> {
  const notifyTo =
    process.env.ACADEMY_NOTIFY_EMAIL?.trim() ||
    process.env.ACADEMY_EMAIL?.trim() ||
    'noorquranlearningacademy@gmail.com';
  const fromAddress =
    process.env.EMAIL_FROM?.trim() || 'Noor Quran Academy <noorquranlearningacademy@gmail.com>';

  if (!notifyTo) {
    return { sent: false, status: 'not_configured' };
  }

  // 1. Try Resend if RESEND_API_KEY is configured
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  if (resendApiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress.includes('@resend.dev') ? fromAddress : 'onboarding@resend.dev',
          to: [notifyTo],
          subject: payload.subject,
          text: payload.text,
          ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
        }),
      });
      if (res.ok) {
        return { sent: true, status: 'sent_resend' };
      }
      console.error('[emailService] Resend API error:', res.status, await res.text());
    } catch (err) {
      console.error('[emailService] Resend request failed:', err);
    }
  }

  // 2. Try Gmail SMTP if GMAIL_APP_PASSWORD or SMTP credentials are provided
  const gmailAppPass = process.env.GMAIL_APP_PASSWORD?.trim();
  const smtpHost = gmailAppPass ? 'smtp.gmail.com' : process.env.SMTP_HOST?.trim();
  const smtpUser = gmailAppPass ? notifyTo : process.env.SMTP_USER?.trim();
  const smtpPass = gmailAppPass || process.env.SMTP_PASS?.trim();
  const smtpPort = gmailAppPass ? 465 : Number(process.env.SMTP_PORT) || 587;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
      await transporter.sendMail({
        from: `"Noor Quran Learning Academy" <${smtpUser}>`,
        to: notifyTo,
        subject: payload.subject,
        text: payload.text,
        ...(payload.replyTo ? { replyTo: payload.replyTo } : {}),
      });
      return { sent: true, status: 'sent_smtp' };
    } catch (err) {
      console.error('[emailService] SMTP send failed:', err);
    }
  }

  // 3. Fallback to FormSubmit AJAX relay directly into Gmail inbox
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(notifyTo)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: payload.subject,
        _replyto: payload.replyTo || undefined,
        message: payload.text,
        _template: 'table',
      }),
    });
    if (res.ok) {
      return { sent: true, status: 'sent_relay' };
    }
    console.error('[emailService] Formsubmit relay failed:', res.status, await res.text());
  } catch (relayErr) {
    console.error('[emailService] Formsubmit relay request failed:', relayErr);
  }

  return { sent: false, status: 'failed' };
}
