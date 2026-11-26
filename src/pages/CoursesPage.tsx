import React from 'react';
import { useApp } from '../context/AppContext';
import { ROUTES } from '../data/academy';

interface CourseCardConfig {
  num: number;
  detailSlug: string;
  bookingValue: string;
}

const GRID_COURSES: CourseCardConfig[] = [
  { num: 1, detailSlug: 'noorani-qaida', bookingValue: 'Noorani Qaida' },
  { num: 2, detailSlug: 'nazra-quran', bookingValue: 'Nazra Quran' },
  { num: 3, detailSlug: 'hifz-ul-quran', bookingValue: 'Hifz-ul-Quran' },
  { num: 4, detailSlug: 'quran-with-tajweed', bookingValue: 'Quran with Tajweed' },
  { num: 5, detailSlug: 'quran-with-urdu-translation', bookingValue: 'Quran with Urdu Translation' },
  { num: 6, detailSlug: 'quran-with-english-translation', bookingValue: 'Quran with English Translation' },
];

export function CoursesPage() {
  const { t, navigate } = useApp();

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-light-surface-container-low border-b border-light-outline-variant py-12">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
              {t('courses_badge')}
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
              {t('courses_title')}
            </h1>
            <p className="text-body-lg text-light-on-surface-variant">{t('courses_desc')}</p>
          </div>
        </div>
      </section>

      {/* 7 Courses Grid */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {GRID_COURSES.map((course) => {
            const detailUrl = `${ROUTES.courseDetail}?course=${course.detailSlug}`;
            const trialUrl = `${ROUTES.freeTrial}?course=${encodeURIComponent(course.bookingValue)}`;

            return (
              <article
                key={course.num}
                className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-6 h-full"
              >
                <div className="flex flex-col gap-3">
                  <header className="flex flex-col gap-1">
                    <span className="text-label-sm text-light-secondary font-label">
                      {t(`c${course.num}_level`)}
                    </span>
                    <h2 className="font-headline text-title-lg text-light-primary">
                      {t(`c${course.num}_name`)}
                    </h2>
                  </header>
                  <p className="text-body-md text-light-on-surface-variant">{t(`c${course.num}_desc`)}</p>
                  <ul className="flex flex-col gap-1.5 text-body-md text-light-on-surface-variant pt-1">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-light-primary text-title-md mt-0.5" aria-hidden="true">
                        check_circle
                      </span>
                      <span>{t(`c${course.num}_b1`)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-light-primary text-title-md mt-0.5" aria-hidden="true">
                        check_circle
                      </span>
                      <span>{t(`c${course.num}_b2`)}</span>
                    </li>
                  </ul>
                </div>
                <footer className="pt-4 border-t border-light-outline-variant grid grid-cols-2 gap-2">
                  <a
                    href={detailUrl}
                    onClick={(e) => go(e, detailUrl)}
                    className="inline-flex items-center justify-center px-3 py-2.5 rounded-DEFAULT border border-light-primary text-light-primary font-label text-label-lg hover:bg-light-surface-container-low transition-colors duration-state-change text-center"
                  >
                    {t('view_details')}
                  </a>
                  <a
                    href={trialUrl}
                    onClick={(e) => go(e, trialUrl)}
                    className="inline-flex items-center justify-center px-3 py-2.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change text-center"
                  >
                    {t('book_btn')}
                  </a>
                </footer>
              </article>
            );
          })}

          {/* 7. Quran Tafseer */}
          <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-6 h-full md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 flex flex-col gap-3">
                <header className="flex flex-col gap-1">
                  <span className="text-label-sm text-light-secondary font-label">{t('c7_level')}</span>
                  <h2 className="font-headline text-title-lg text-light-primary">{t('c7_name')}</h2>
                </header>
                <p className="text-body-md text-light-on-surface-variant">{t('c7_desc')}</p>
                <div className="flex flex-wrap gap-4 text-body-md text-light-on-surface-variant pt-1">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-light-primary text-title-md" aria-hidden="true">
                      check_circle
                    </span>
                    <span>{t('c7_b1')}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-light-primary text-title-md" aria-hidden="true">
                      check_circle
                    </span>
                    <span>{t('c7_b2')}</span>
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={ROUTES.tafseer}
                  onClick={(e) => go(e, ROUTES.tafseer)}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-DEFAULT border border-light-primary text-light-primary font-label text-label-lg hover:bg-light-surface-container-low transition-colors duration-state-change"
                >
                  {t('view_details')}
                </a>
                <a
                  href={`${ROUTES.freeTrial}?course=${encodeURIComponent('Quran Tafseer')}`}
                  onClick={(e) => go(e, `${ROUTES.freeTrial}?course=${encodeURIComponent('Quran Tafseer')}`)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
                >
                  {t('book_btn')}
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
