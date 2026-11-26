import React, { useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ACADEMY_CONFIG, saveHomeTuitionSubmission } from '../data/academy';

export function HomeTuitionPage() {
  const { t } = useApp();
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [successId, setSuccessId] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});

  const inputClass = (fieldName: string) =>
    `w-full rounded-DEFAULT border ${
      invalidFields[fieldName] ? 'border-light-error' : 'border-light-outline-variant'
    } bg-light-surface-container-lowest px-4 py-2.5 text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary focus:outline-none`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedOnce(true);

    const form = formRef.current;
    if (!form) return;

    const nextInvalid: Record<string, boolean> = {};
    const elements = Array.from(form.elements) as Array<
      HTMLInputElement | HTMLTextAreaElement
    >;
    let firstInvalidEl: HTMLInputElement | HTMLTextAreaElement | null = null;

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
    const saved = saveHomeTuitionSubmission({
      name: name.trim(),
      phone: phone.trim(),
      location: location.trim(),
      details: details.trim(),
    });
    setSuccessId(saved.id);
    setInvalidFields({});
    setName('');
    setPhone('');
    setLocation('');
    setDetails('');
    setSubmittedOnce(false);
  };

  return (
    <div className="py-12">
      <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Policy & Overview */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
              {t('ht_badge')}
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
              {t('ht_title')}
            </h1>
            <p className="text-body-lg text-light-on-surface-variant">{t('ht_desc')}</p>
          </div>

          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-light-primary">
              <span className="material-symbols-outlined" aria-hidden="true">
                info
              </span>
              <h2 className="font-headline text-title-lg">{t('ht_policy_title')}</h2>
            </div>
            <ul className="flex flex-col gap-2.5 text-body-md text-light-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-light-primary text-title-md mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <span>{t('ht_p1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-light-primary text-title-md mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <span>{t('ht_p2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-light-primary text-title-md mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <span>{t('ht_p3')}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20inquire%20about%20home%20tuition.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                chat
              </span>
              <span>{t('ht_wa')}</span>
            </a>
            <a
              href={`mailto:${ACADEMY_CONFIG.email}?subject=Home%20Tuition%20Inquiry`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-DEFAULT bg-light-surface-container-lowest text-light-primary border border-light-primary font-label text-label-lg hover:bg-light-surface-variant transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                mail
              </span>
              <span>{t('ht_email')}</span>
            </a>
          </div>
        </div>

        {/* Home Tuition Inquiry Form */}
        <section className="lg:col-span-7 bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 md:p-8 flex flex-col gap-5">
          <h2 className="font-headline text-headline-md text-light-primary">{t('ht_form_title')}</h2>

          {successId && (
            <div
              className="rounded-md bg-light-surface-variant border border-light-primary p-4 flex items-start gap-3"
              role="status"
            >
              <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                check_circle
              </span>
              <p className="text-body-md text-light-on-surface">
                {t('ht_succ')} ({successId})
              </p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('ht_name')}</span>
                <input
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.name ? 'true' : undefined}
                  placeholder="Full name"
                  className={inputClass('name')}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('ht_phone')}</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.phone ? 'true' : undefined}
                  placeholder="+92 300 0000000"
                  className={inputClass('phone')}
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-lg text-light-on-surface">{t('ht_loc')}</span>
              <input
                name="location"
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-invalid={submittedOnce && invalidFields.location ? 'true' : undefined}
                placeholder="e.g., City and sector/area"
                className={inputClass('location')}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-lg text-light-on-surface">{t('ht_details')}</span>
              <textarea
                name="details"
                rows={3}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                aria-invalid={submittedOnce && invalidFields.details ? 'true' : undefined}
                placeholder="Share student age, desired course, and preferred days/time."
                className={inputClass('details')}
              />
            </label>

            {hasError && (
              <p className="text-body-md text-light-error" role="alert">
                {t('ht_err')}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
            >
              <span>{t('ht_submit')}</span>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
