import { useApp } from '../context/AppContext';
import { ACADEMY_CONFIG } from '../data/academy';

export function PrivacyPolicyPage() {
  const { lang, t } = useApp();

  return (
    <>
      <section className="bg-light-surface-container-low border-b border-light-outline-variant py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-4">
          <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
            {t('pp_badge')}
          </span>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
            {t('pp_title')}
          </h1>
          <p className="text-body-lg text-light-on-surface-variant max-w-prose">{t('pp_desc')}</p>
        </div>
      </section>

      <section className="py-section max-w-[900px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-6">
        <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-6 md:p-8 flex flex-col gap-6">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex flex-col gap-2">
              <h2 className="font-title text-title-lg text-light-primary">{t(`pp_s${num}_t`)}</h2>
              <p className="text-body-md text-light-on-surface-variant">{t(`pp_s${num}_d`)}</p>
            </div>
          ))}
          <div className="border-t border-light-outline-variant pt-4 flex flex-col gap-1 text-body-md text-light-on-surface-variant">
            <p>
              <strong className="text-light-on-surface">
                {lang === 'ur' ? 'قانونی مالک اور دائرہ اختیار:' : 'Legal Owner & Jurisdiction:'}
              </strong>{' '}
              {ACADEMY_CONFIG.legalOwnerAndJurisdiction[lang]}
            </p>
            <p>
              <strong className="text-light-on-surface">
                {lang === 'ur' ? 'رابطہ:' : 'Contact:'}
              </strong>{' '}
              <span dir="ltr">{ACADEMY_CONFIG.email}</span> •{' '}
              <span dir="ltr">{ACADEMY_CONFIG.whatsappDisplay}</span>
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
