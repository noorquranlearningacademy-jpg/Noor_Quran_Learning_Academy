import React from 'react';
import { useApp } from '../context/AppContext';
import { ACADEMY_CONFIG, ROUTES } from '../data/academy';

export function FeeInformationPage() {
  const { t, navigate } = useApp();

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-gutter-md md:px-page-margin flex flex-col gap-8">
        <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-8 md:p-10 flex flex-col gap-6 text-center items-center">
          <span className="inline-flex px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
            {t('badge_fee')}
          </span>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
            {t('fee_title')}
          </h1>
          <p className="text-body-lg text-light-on-surface-variant max-w-prose">{t('fee_desc')}</p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-start pt-2">
            <div className="bg-light-surface-container-low border border-light-outline-variant rounded-md p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-light-primary" aria-hidden="true">
                menu_book
              </span>
              <span className="font-title text-title-md text-light-on-surface">{t('fac_1')}</span>
            </div>
            <div className="bg-light-surface-container-low border border-light-outline-variant rounded-md p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-light-primary" aria-hidden="true">
                groups
              </span>
              <span className="font-title text-title-md text-light-on-surface">{t('fac_2')}</span>
            </div>
            <div className="bg-light-surface-container-low border border-light-outline-variant rounded-md p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-light-primary" aria-hidden="true">
                public
              </span>
              <span className="font-title text-title-md text-light-on-surface">{t('fac_3')}</span>
            </div>
            <div className="bg-light-surface-container-low border border-light-outline-variant rounded-md p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-light-primary" aria-hidden="true">
                calendar_today
              </span>
              <span className="font-title text-title-md text-light-on-surface">{t('fac_4')}</span>
            </div>
            <div className="sm:col-span-2 bg-light-surface-container-low border border-light-outline-variant rounded-md p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-light-primary" aria-hidden="true">
                schedule
              </span>
              <span className="font-title text-title-md text-light-on-surface">{t('fac_5')}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 w-full">
            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20request%20fee%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                chat
              </span>
              <span>{t('fee_btn_wa')}</span>
            </a>
            <a
              href={`mailto:${ACADEMY_CONFIG.email}?subject=Fee%20Details%20Inquiry`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-DEFAULT bg-accent-soft text-light-secondary border border-accent font-label text-label-lg hover:bg-light-surface-container-low transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                mail
              </span>
              <span>{t('fee_btn_email')}</span>
            </a>
            <a
              href={ROUTES.freeTrial}
              onClick={(e) => go(e, ROUTES.freeTrial)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-DEFAULT bg-light-surface-container-lowest text-light-primary border border-light-primary font-label text-label-lg hover:bg-light-surface-variant transition-colors duration-state-change"
            >
              <span>{t('fee_btn_trial')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
