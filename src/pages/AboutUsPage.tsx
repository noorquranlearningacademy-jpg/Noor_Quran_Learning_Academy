import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES, ROUTES } from '../data/academy';
import { SafeImage } from '../components/SafeImage';

export function AboutUsPage() {
  const { t, navigate } = useApp();

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      {/* Hero Intro */}
      <section className="bg-light-surface-container-low border-b border-light-outline-variant py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
              {t('ab_title')}
            </h1>
            <p className="text-body-lg text-light-on-surface-variant max-w-prose">{t('ab_intro')}</p>
          </div>
          <div className="lg:col-span-6">
            <SafeImage
              src={IMAGES.aboutQuranHeritage}
              alt="Holy Quran resting on warm cream linen with soft golden light"
              className="w-full h-72 object-cover rounded-lg border border-light-outline-variant"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-8 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-light-primary">
            <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
              flag
            </span>
            <h2 className="font-headline text-headline-md">{t('mission_title')}</h2>
          </div>
          <p className="text-body-md text-light-on-surface-variant">{t('mission_desc')}</p>
        </article>

        <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-8 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-light-primary">
            <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
              visibility
            </span>
            <h2 className="font-headline text-headline-md">{t('vision_title')}</h2>
          </div>
          <p className="text-body-md text-light-on-surface-variant">{t('vision_desc')}</p>
        </article>
      </section>

      {/* Teaching Approach & Importance of Quran Education */}
      <section className="py-section bg-light-surface-container-low border-y border-light-outline-variant">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
              {t('approach_title')}
            </h2>
            <p className="text-body-md text-light-on-surface-variant max-w-prose">{t('approach_desc')}</p>
            <ul className="flex flex-col gap-2 text-body-md text-light-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-light-primary text-title-md mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <span>{t('ap_1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-light-primary text-title-md mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <span>{t('ap_2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-light-primary text-title-md mt-0.5" aria-hidden="true">
                  check_circle
                </span>
                <span>{t('ap_3')}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
              {t('imp_title')}
            </h2>
            <p className="text-body-md text-light-on-surface-variant max-w-prose">{t('imp_desc')}</p>
            <div className="pt-2">
              <a
                href={ROUTES.freeTrial}
                onClick={(e) => go(e, ROUTES.freeTrial)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
              >
                {t('hero_cta_primary')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
