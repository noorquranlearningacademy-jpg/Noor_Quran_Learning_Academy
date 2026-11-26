import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ROUTES } from '../data/academy';

type TeacherFilter = 'all' | 'male' | 'female';

interface TeacherPlaceholder {
  id: string;
  gender: 'male' | 'female';
  badgeKey: string;
  nameKey: string;
  coursesKey: string;
  agesKey: string;
  ctaKey: string;
  teacherQuery: 'Male' | 'Female';
}

const TEACHERS: TeacherPlaceholder[] = [
  {
    id: 'male-1',
    gender: 'male',
    badgeKey: 'g_male',
    nameKey: 't1_name',
    coursesKey: 'val_courses_m',
    agesKey: 'val_ages_all',
    ctaKey: 'req_male',
    teacherQuery: 'Male',
  },
  {
    id: 'female-1',
    gender: 'female',
    badgeKey: 'g_female',
    nameKey: 't2_name',
    coursesKey: 'val_courses_f1',
    agesKey: 'val_ages_sis',
    ctaKey: 'req_female',
    teacherQuery: 'Female',
  },
  {
    id: 'female-2',
    gender: 'female',
    badgeKey: 'g_female',
    nameKey: 't3_name',
    coursesKey: 'val_courses_f2',
    agesKey: 'val_ages_sis',
    ctaKey: 'req_female',
    teacherQuery: 'Female',
  },
];

export function TeachersPage() {
  const { t, navigate } = useApp();
  const [filter, setFilter] = useState<TeacherFilter>('all');

  const visibleTeachers = TEACHERS.filter((item) =>
    filter === 'all' ? true : item.gender === filter
  );

  const filterBtnClass = (active: boolean) =>
    active
      ? 'px-4 py-2 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg'
      : 'px-4 py-2 rounded-DEFAULT bg-light-surface-container-low text-light-on-surface border border-light-outline-variant font-label text-label-lg hover:border-light-primary';

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
              {t('t_badge')}
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
              {t('t_title')}
            </h1>
            <p className="text-body-lg text-light-on-surface-variant">{t('t_desc')}</p>
          </div>
        </div>
      </section>

      {/* Teacher Preference Filter / Selection Banner */}
      <section className="py-8 max-w-[1200px] mx-auto px-gutter-md md:px-page-margin">
        <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-title text-title-lg text-light-primary">{t('pref_title')}</h2>
            <p className="text-body-md text-light-on-surface-variant">{t('pref_desc')}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Teacher gender filter">
            <button type="button" onClick={() => setFilter('all')} className={filterBtnClass(filter === 'all')}>
              {t('f_all')}
            </button>
            <button type="button" onClick={() => setFilter('male')} className={filterBtnClass(filter === 'male')}>
              {t('f_male')}
            </button>
            <button
              type="button"
              onClick={() => setFilter('female')}
              className={filterBtnClass(filter === 'female')}
            >
              {t('f_female')}
            </button>
          </div>
        </div>
      </section>

      {/* Teacher Profile Placeholders */}
      <section className="pb-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {visibleTeachers.map((teacher) => {
            const trialUrl = `${ROUTES.freeTrial}?teacher=${teacher.teacherQuery}`;
            return (
              <article
                key={teacher.id}
                className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-6 h-full"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-full h-44 rounded-md bg-light-surface-container-low border border-dashed border-light-outline-variant flex flex-col items-center justify-center gap-2 text-light-on-surface-variant">
                    <span className="material-symbols-outlined text-headline-lg" aria-hidden="true">
                      person
                    </span>
                    <span className="text-label-sm font-label">{t('photo_ph')}</span>
                  </div>
                  <header className="flex flex-col gap-1">
                    <span
                      className={
                        teacher.gender === 'male'
                          ? 'inline-flex self-start px-2.5 py-0.5 rounded-full bg-light-surface-variant text-light-primary font-label text-label-sm'
                          : 'inline-flex self-start px-2.5 py-0.5 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm'
                      }
                    >
                      {t(teacher.badgeKey)}
                    </span>
                    <h3 className="font-headline text-title-lg text-light-primary">{t(teacher.nameKey)}</h3>
                  </header>
                  <dl className="flex flex-col gap-2 text-body-md">
                    <div className="flex justify-between gap-2 border-b border-light-outline-variant pb-1.5">
                      <dt className="text-light-on-surface-variant">{t('lbl_qual')}</dt>
                      <dd className="text-light-on-surface font-medium text-end">{t('val_pending')}</dd>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-light-outline-variant pb-1.5">
                      <dt className="text-light-on-surface-variant">{t('lbl_exp')}</dt>
                      <dd className="text-light-on-surface font-medium text-end">{t('val_pending')}</dd>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-light-outline-variant pb-1.5">
                      <dt className="text-light-on-surface-variant">{t('lbl_lang')}</dt>
                      <dd className="text-light-on-surface font-medium text-end">{t('val_lang')}</dd>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-light-outline-variant pb-1.5">
                      <dt className="text-light-on-surface-variant">{t('lbl_courses')}</dt>
                      <dd className="text-light-on-surface font-medium text-end">{t(teacher.coursesKey)}</dd>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-light-outline-variant pb-1.5">
                      <dt className="text-light-on-surface-variant">{t('lbl_ages')}</dt>
                      <dd className="text-light-on-surface font-medium text-end">{t(teacher.agesKey)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-light-on-surface-variant">{t('lbl_time')}</dt>
                      <dd className="text-light-on-surface font-medium text-end">{t('val_time')}</dd>
                    </div>
                  </dl>
                </div>
                <footer className="pt-4 border-t border-light-outline-variant">
                  <a
                    href={trialUrl}
                    onClick={(e) => go(e, trialUrl)}
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change text-center"
                  >
                    {t(teacher.ctaKey)}
                  </a>
                </footer>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
