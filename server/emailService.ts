import nodemailer from 'nodemailer';

export interface EmailNotificationResult {
  sent: boolean;
  status: 'sent_resend' | 'sent_smtp' | 'not_configured' | 'failed';
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
    process.env.EMAIL_FROM?.trim() || 'Noor Quran Academy <onboarding@resend.dev>';

  if (!notifyTo) {
    return { sent: false, status: 'not_configured' };
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  if (resendApiKey && notifyTo) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
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
      return { sent: false, status: 'failed' };
    } catch (err) {
      console.error('[emailService] Resend request failed:', err);
      return { sent: false, status: 'failed' };
    }
  }

  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const smtpPort = Number(process.env.SMTP_PORT) || 587;

  if (smtpHost && smtpUser && smtpPass && notifyTo) {
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
        from: process.env.EMAIL_FROM?.trim() || smtpUser,
        to: notifyTo,
        subject: payload.subject,
        text: payload.text,
        ...(payload.replyTo ? { replyTo: payload.replyTo } : {}),
      });
      return { sent: true, status: 'sent_smtp' };
    } catch (err) {
      console.error('[emailService] SMTP send failed:', err);
      return { sent: false, status: 'failed' };
    }
  }

  return { sent: false, status: 'not_configured' };
}
