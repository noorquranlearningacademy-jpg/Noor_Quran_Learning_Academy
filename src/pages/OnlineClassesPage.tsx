import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES, ROUTES } from '../data/academy';
import { SafeImage } from '../components/SafeImage';

export function OnlineClassesPage() {
  const { t, navigate } = useApp();

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-light-surface-container-low border-b border-light-outline-variant py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
              {t('oc_badge')}
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
              {t('oc_title')}
            </h1>
            <p className="text-body-lg text-light-on-surface-variant max-w-prose">{t('oc_desc')}</p>
            <div className="pt-2">
              <a
                href={ROUTES.freeTrial}
                onClick={(e) => go(e, ROUTES.freeTrial)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
              >
                <span>{t('hero_cta_primary')}</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <SafeImage
              src={IMAGES.onlineClassLearning}
              alt="Child learning Quran online at home"
              className="w-full h-72 object-cover rounded-lg border border-light-outline-variant"
            />
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-8">
        <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
          {t('oc_plat_title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col gap-2 h-full">
            <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
              chat
            </span>
            <h3 className="font-title text-title-lg text-light-primary">WhatsApp</h3>
            <p className="text-body-md text-light-on-surface-variant">{t('oc_p1')}</p>
          </article>
          <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col gap-2 h-full">
            <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
              call
            </span>
            <h3 className="font-title text-title-lg text-light-primary">IMO</h3>
            <p className="text-body-md text-light-on-surface-variant">{t('oc_p2')}</p>
          </article>
          <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col gap-2 h-full">
            <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
              videocam
            </span>
            <h3 className="font-title text-title-lg text-light-primary">Zoom</h3>
            <p className="text-body-md text-light-on-surface-variant">{t('oc_p3')}</p>
          </article>
          <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col gap-2 h-full">
            <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
              laptop_chromebook
            </span>
            <h3 className="font-title text-title-lg text-light-primary">Google Meet</h3>
            <p className="text-body-md text-light-on-surface-variant">{t('oc_p4')}</p>
          </article>
        </div>

        {/* Weekly Schedule & Class Rules */}
        <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-title text-title-md text-light-primary">{t('oc_s1_t')}</h3>
            <p className="text-body-md text-light-on-surface-variant">{t('oc_s1_d')}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-title text-title-md text-light-primary">{t('oc_s2_t')}</h3>
            <p className="text-body-md text-light-on-surface-variant">{t('oc_s2_d')}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-title text-title-md text-light-primary">{t('oc_s3_t')}</h3>
            <p className="text-body-md text-light-on-surface-variant">{t('oc_s3_d')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
