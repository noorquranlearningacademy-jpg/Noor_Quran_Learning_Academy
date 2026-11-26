import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSE_ALIASES, COURSE_DATA, ROUTES, type CourseSlug } from '../data/academy';

const COURSE_SLUGS: CourseSlug[] = [
  'noorani-qaida',
  'nazra-quran',
  'hifz-ul-quran',
  'quran-with-tajweed',
  'quran-with-urdu-translation',
  'quran-with-english-translation',
  'quran-tafseer',
];

export function CourseDetailPage() {
  const { lang, t, searchParams, navigate } = useApp();

  const rawParam = (searchParams.get('course') || 'noorani-qaida').toLowerCase();
  const activeSlug: CourseSlug = COURSE_ALIASES[rawParam] ?? 'noorani-qaida';
  const course = COURSE_DATA[activeSlug];

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-light-surface-container-low border-b border-light-outline-variant py-10">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-5">
          <a
            href={ROUTES.courses}
            onClick={(e) => go(e, ROUTES.courses)}
            className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:underline self-start"
          >
            <span className="material-symbols-outlined text-title-md" aria-hidden="true">
              arrow_back
            </span>
            <span>{t('back_courses')}</span>
          </a>

          {/* Course Switcher Tabs */}
          <div className="flex flex-wrap gap-2" role="navigation" aria-label="Select course">
            {COURSE_SLUGS.map((slug) => {
              const isActive = slug === activeSlug;
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => navigate(`${ROUTES.courseDetail}?course=${slug}`)}
                  className={
                    isActive
                      ? 'px-3.5 py-1.5 rounded-full border border-light-primary bg-light-primary text-light-on-primary font-label text-label-sm'
                      : 'px-3.5 py-1.5 rounded-full border border-light-outline-variant bg-light-surface-container-lowest font-label text-label-sm text-light-on-surface-variant hover:border-light-primary'
                  }
                >
                  {COURSE_DATA[slug].tabLabel[lang]}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
              {course.level[lang]}
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
              {course.title[lang]}
            </h1>
            <p className="text-body-lg text-light-on-surface-variant">{course.summary[lang]}</p>
          </div>
        </div>
      </section>

      {/* Course Details Grid */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 md:p-8 flex flex-col gap-4">
            <h2 className="font-headline text-headline-md text-light-primary">{t('cd_what_title')}</h2>
            <ul className="flex flex-col gap-3 text-body-md text-light-on-surface-variant">
              {course.syllabus[lang].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-light-primary text-title-md mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 md:p-8 flex flex-col gap-4">
            <h2 className="font-headline text-headline-md text-light-primary">{t('cd_benefits_title')}</h2>
            <ul className="flex flex-col gap-3 text-body-md text-light-on-surface-variant">
              {course.benefits[lang].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-light-secondary text-title-md mt-0.5" aria-hidden="true">
                    star
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col gap-4">
            <h2 className="font-title text-title-lg text-light-primary">{t('cd_format_title')}</h2>
            <dl className="flex flex-col gap-3 text-body-md">
              <div className="flex justify-between gap-2 border-b border-light-outline-variant pb-2">
                <dt className="text-light-on-surface-variant">{t('cd_lbl_days')}</dt>
                <dd className="font-medium text-light-on-surface">{t('cd_val_days')}</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-light-outline-variant pb-2">
                <dt className="text-light-on-surface-variant">{t('cd_lbl_dur')}</dt>
                <dd className="font-medium text-light-on-surface">{t('cd_val_dur')}</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-light-outline-variant pb-2">
                <dt className="text-light-on-surface-variant">{t('cd_lbl_mode')}</dt>
                <dd className="font-medium text-light-on-surface">{t('cd_val_mode')}</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-light-outline-variant pb-2">
                <dt className="text-light-on-surface-variant">{t('cd_lbl_lang')}</dt>
                <dd className="font-medium text-light-on-surface">{t('cd_val_lang')}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-light-on-surface-variant">{t('cd_lbl_teachers')}</dt>
                <dd className="font-medium text-light-on-surface">{t('cd_val_teachers')}</dd>
              </div>
            </dl>

            <a
              href={`${ROUTES.freeTrial}?course=${encodeURIComponent(course.bookingValue)}`}
              onClick={(e) => go(e, `${ROUTES.freeTrial}?course=${encodeURIComponent(course.bookingValue)}`)}
              className="mt-2 inline-flex items-center justify-center w-full px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
            >
              <span>{t('cd_book_btn')}</span>
            </a>
            <a
              href={ROUTES.fees}
              onClick={(e) => go(e, ROUTES.fees)}
              className="inline-flex items-center justify-center w-full px-6 py-2.5 rounded-DEFAULT bg-light-surface-container-low text-light-primary border border-light-outline-variant font-label text-label-lg hover:border-light-primary transition-colors duration-state-change"
            >
              {t('cd_fee_btn')}
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
