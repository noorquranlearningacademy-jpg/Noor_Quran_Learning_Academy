import React, { useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ACADEMY_CONFIG, getWhatsappUrl, ROUTES, saveContactSubmission } from '../data/academy';

export function ContactPage() {
  const { lang, t, navigate } = useApp();
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState('Fee Details');
  const [message, setMessage] = useState('');

  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successId, setSuccessId] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  const inputClass = (fieldName: string) =>
    `w-full rounded-DEFAULT border ${
      invalidFields[fieldName] ? 'border-light-error' : 'border-light-outline-variant'
    } bg-light-surface-container-lowest px-4 py-2.5 text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary focus:outline-none`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmittedOnce(true);
    setServerError(null);

    const form = formRef.current;
    if (!form) return;

    const nextInvalid: Record<string, boolean> = {};
    const elements = Array.from(form.elements) as Array<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >;
    let firstInvalidEl:
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | null = null;

    for (const el of elements) {
      if (el.willValidate && !el.checkValidity()) {
        if (el.name) nextInvalid[el.name] = true;
        if (!firstInvalidEl) firstInvalidEl = el;
      }
    }

    setInvalidFields(nextInvalid);

    if (!form.checkValidity()) {
      setHasError(true);
      setSuccessId(null);
      firstInvalidEl?.focus();
      return;
    }

    setHasError(false);
    setIsSubmitting(true);

    const payload = {
      name: name.trim(),
      contact: contact.trim(),
      topic,
      message: message.trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, lang }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        id?: string;
        submittedAt?: string;
        error?: string;
      } | null;

      if (!res.ok || !data?.ok || !data.id) {
        setServerError(
          data?.error ||
            (lang === 'ur'
              ? 'پیغام محفوظ نہیں ہو سکا۔ براہ کرم دوبارہ کوشش کریں۔'
              : 'Unable to send your message right now. Please try again.')
        );
        return;
      }

      const saved = saveContactSubmission({
        ...payload,
        id: data.id,
        submittedAt: data.submittedAt,
      });
      setSuccessId(saved.id);
      setInvalidFields({});
      setName('');
      setContact('');
      setMessage('');
      setSubmittedOnce(false);
    } catch {
      setServerError(
        lang === 'ur'
          ? 'نیٹ ورک کنکشن کا مسئلہ پیش آیا ہے۔ براہ کرم دوبارہ کوشش کریں۔'
          : 'Network error while sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Direct Channels & Home Tuition */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
              {t('ct_title')}
            </h1>
            <p className="text-body-lg text-light-on-surface-variant">{t('ct_desc')}</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={getWhatsappUrl(
                lang === 'ur'
                  ? 'السلام علیکم! میں نور قرآن لرننگ اکیڈمی کے بارے میں معلومات حاصل کرنا چاہتا/چاہتی ہوں۔'
                  : 'Assalamu Alaikum! I would like to inquire about Noor Quran Learning Academy.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                chat
              </span>
              <span>
                {lang === 'ur'
                  ? `واٹس ایپ: ${ACADEMY_CONFIG.whatsappDisplay}`
                  : `WhatsApp: ${ACADEMY_CONFIG.whatsappDisplay}`}
              </span>
            </a>

            <a
              href={`mailto:${ACADEMY_CONFIG.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-DEFAULT bg-light-surface-container-lowest text-light-primary border border-light-primary font-label text-label-lg hover:bg-light-surface-variant transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                mail
              </span>
              <span>
                {lang === 'ur' ? `ای میل: ${ACADEMY_CONFIG.email}` : `Email: ${ACADEMY_CONFIG.email}`}
              </span>
            </a>

            <a
              href={ROUTES.freeTrial}
              onClick={(e) => go(e, ROUTES.freeTrial)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-DEFAULT bg-accent-soft text-light-secondary border border-accent font-label text-label-lg hover:bg-light-surface-container-low transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                event_available
              </span>
              <span>{t('ct_btn_trial')}</span>
            </a>
          </div>

          {/* Home Tuition Inquiry Section */}
          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-light-primary">
              <span className="material-symbols-outlined" aria-hidden="true">
                home
              </span>
              <h2 className="font-headline text-title-lg">{t('home_title')}</h2>
            </div>
            <p className="text-body-md text-light-on-surface-variant">{t('home_loc')}</p>
            <p className="text-body-md text-light-on-surface font-medium">{t('home_note')}</p>
          </div>
        </div>

        {/* Contact Form */}
        <section className="lg:col-span-7 bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 md:p-8 flex flex-col gap-6">
          <h2 className="font-headline text-headline-md text-light-primary">{t('form_title')}</h2>

          {successId && (
            <div
              className="rounded-md bg-light-surface-variant border border-light-primary p-4 flex items-start gap-3"
              role="status"
            >
              <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                check_circle
              </span>
              <p className="text-body-md text-light-on-surface">
                {t('succ_msg')} ({successId})
              </p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('c_name')}</span>
                <input
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.name ? 'true' : undefined}
                  placeholder={lang === 'ur' ? 'مکمل نام' : 'Full name'}
                  className={inputClass('name')}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('c_email')}</span>
                <input
                  name="contact"
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.contact ? 'true' : undefined}
                  placeholder={lang === 'ur' ? '+92 300... یا email@example.com' : '+92 300... or email@example.com'}
                  dir="ltr"
                  className={inputClass('contact')}
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-lg text-light-on-surface">{t('c_topic')}</span>
              <select
                name="topic"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className={inputClass('topic')}
              >
                <option value="Fee Details">{lang === 'ur' ? 'فیس کی تفصیلات' : 'Fee Details'}</option>
                <option value="Course Question">{lang === 'ur' ? 'کورس سے متعلق سوال' : 'Course Question'}</option>
                <option value="Home Tuition (Male Teacher Only)">
                  {lang === 'ur' ? 'ہوم ٹیوشن انکوائری (صرف مرد استاد)' : 'Home Tuition Inquiry (Male Teacher Only)'}
                </option>
                <option value="General">{lang === 'ur' ? 'عمومی معلومات' : 'General Inquiry'}</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-lg text-light-on-surface">{t('c_msg')}</span>
              <textarea
                name="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={submittedOnce && invalidFields.message ? 'true' : undefined}
                placeholder={
                  lang === 'ur'
                    ? 'اپنا ملک، پسندیدہ زبان (اردو/انگریزی) اور سوال تحریر کریں۔'
                    : 'Share your country, preferred language (Urdu/English), and question.'
                }
                className={inputClass('message')}
              />
            </label>

            {hasError && (
              <p className="text-body-md text-light-error" role="alert">
                {t('ct_err_msg')}
              </p>
            )}

            {serverError && (
              <p className="text-body-md text-light-error" role="alert">
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container disabled:opacity-60 transition-colors duration-state-change"
            >
              {isSubmitting
                ? lang === 'ur'
                  ? 'پیغام بھیجا جا رہا ہے...'
                  : 'Sending...'
                : t('btn_send')}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
