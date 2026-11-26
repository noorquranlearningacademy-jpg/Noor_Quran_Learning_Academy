import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES, ROUTES } from '../data/academy';
import { SafeImage } from '../components/SafeImage';

export function QuranTafseerPage() {
  const { t, navigate } = useApp();

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  const trialUrl = `${ROUTES.freeTrial}?course=${encodeURIComponent('Quran Tafseer')}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-light-surface-container-low border-b border-light-outline-variant py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
              {t('tf_badge')}
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
              {t('tf_title')}
            </h1>
            <p className="text-body-lg text-light-on-surface-variant max-w-prose">{t('tf_desc')}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={trialUrl}
                onClick={(e) => go(e, trialUrl)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
              >
                <span>{t('tf_cta')}</span>
              </a>
              <a
                href={ROUTES.readQuran}
                onClick={(e) => go(e, ROUTES.readQuran)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-DEFAULT bg-light-surface-container-lowest text-light-primary border border-light-primary font-label text-label-lg hover:bg-light-surface-variant transition-colors duration-state-change"
              >
                {t('tf_read_btn')}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <SafeImage
              src={IMAGES.aboutQuranHeritage}
              alt="Open Holy Quran in soft morning light"
              className="w-full h-72 object-cover rounded-lg border border-light-outline-variant"
            />
          </div>
        </div>
      </section>

      {/* Tafseer Tracks */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-prose">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
            {t('tf_tracks_title')}
          </h2>
          <p className="text-body-md text-light-on-surface-variant">{t('tf_tracks_desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-4 h-full">
            <div className="flex flex-col gap-2">
              <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
                menu_book
              </span>
              <h3 className="font-title text-title-lg text-light-primary">{t('tf_t1_title')}</h3>
              <p className="text-body-md text-light-on-surface-variant">{t('tf_t1_desc')}</p>
            </div>
            <a href={trialUrl} onClick={(e) => go(e, trialUrl)} className="font-label text-label-lg text-light-primary hover:underline">
              {t('nav_cta')}
            </a>
          </article>

          <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-4 h-full">
            <div className="flex flex-col gap-2">
              <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
                auto_stories
              </span>
              <h3 className="font-title text-title-lg text-light-primary">{t('tf_t2_title')}</h3>
              <p className="text-body-md text-light-on-surface-variant">{t('tf_t2_desc')}</p>
            </div>
            <a href={trialUrl} onClick={(e) => go(e, trialUrl)} className="font-label text-label-lg text-light-primary hover:underline">
              {t('nav_cta')}
            </a>
          </article>

          <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-4 h-full">
            <div className="flex flex-col gap-2">
              <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
                groups
              </span>
              <h3 className="font-title text-title-lg text-light-primary">{t('tf_t3_title')}</h3>
              <p className="text-body-md text-light-on-surface-variant">{t('tf_t3_desc')}</p>
            </div>
            <a href={trialUrl} onClick={(e) => go(e, trialUrl)} className="font-label text-label-lg text-light-primary hover:underline">
              {t('nav_cta')}
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
