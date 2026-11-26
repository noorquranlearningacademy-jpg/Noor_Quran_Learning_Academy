import React from 'react';
import { useApp } from '../context/AppContext';
import {
  getContactSubmissions,
  getHomeTuitionSubmissions,
  getTrialSubmissions,
  ROUTES,
} from '../data/academy';

export function StudentDashboardPage() {
  const { lang, t, navigate } = useApp();

  const trials = getTrialSubmissions();
  const homeTuitions = getHomeTuitionSubmissions();
  const contacts = getContactSubmissions();
  const hasAnyRequests = trials.length > 0 || homeTuitions.length > 0 || contacts.length > 0;

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      <section className="bg-light-surface-container-low border-b border-light-outline-variant py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-4">
          <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
            {t('sd_badge')}
          </span>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
            {t('sd_title')}
          </h1>
          <p className="text-body-lg text-light-on-surface-variant max-w-prose">{t('sd_desc')}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={ROUTES.freeTrial}
              onClick={(e) => go(e, ROUTES.freeTrial)}
              className="px-5 py-2.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
            >
              {t('nav_cta')}
            </a>
            <a
              href={ROUTES.readQuran}
              onClick={(e) => go(e, ROUTES.readQuran)}
              className="px-5 py-2.5 rounded-DEFAULT border border-light-primary text-light-primary font-label text-label-lg hover:bg-light-surface-container-lowest transition-colors duration-state-change"
            >
              {t('nav_read_quran')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-section max-w-[1100px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-8">
        {/* Planned Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-light-surface-container-lowest border border-dashed border-light-outline-variant rounded-lg p-6 flex flex-col gap-2">
            <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
              calendar_month
            </span>
            <h2 className="font-title text-title-md text-light-primary">
              {lang === 'ur' ? 'کلاس شیڈول (زیرِ منصوبہ)' : 'Class Schedule (Planned)'}
            </h2>
            <p className="text-body-md text-light-on-surface-variant">
              {lang === 'ur'
                ? 'ہفتے میں 4 دن کے کلاس اوقات اور واٹس ایپ، ایمو، زوم یا گوگل میٹ لنکس کی تفصیلات۔'
                : 'View confirmed 4-day weekly lesson timings and WhatsApp, IMO, Zoom, or Google Meet details.'}
            </p>
          </article>

          <article className="bg-light-surface-container-lowest border border-dashed border-light-outline-variant rounded-lg p-6 flex flex-col gap-2">
            <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
              menu_book
            </span>
            <h2 className="font-title text-title-md text-light-primary">
              {lang === 'ur' ? 'سبق اور دہرائی ریکارڈ (زیرِ منصوبہ)' : 'Lesson & Hifz Progress (Planned)'}
            </h2>
            <p className="text-body-md text-light-on-surface-variant">
              {lang === 'ur'
                ? 'روزانہ سبق، سبقی، منزل اور تجوید میں پیش رفت پر اساتذہ کے تبصرے۔'
                : 'Track daily Sabaq, Sabqi, Manzil, and Tajweed milestones shared by your teacher.'}
            </p>
          </article>

          <article className="bg-light-surface-container-lowest border border-dashed border-light-outline-variant rounded-lg p-6 flex flex-col gap-2">
            <span className="material-symbols-outlined text-light-primary text-headline-md" aria-hidden="true">
              support_agent
            </span>
            <h2 className="font-title text-title-md text-light-primary">
              {lang === 'ur' ? 'کوآرڈینیٹر رابطہ (زیرِ منصوبہ)' : 'Coordinator Support (Planned)'}
            </h2>
            <p className="text-body-md text-light-on-surface-variant">
              {lang === 'ur'
                ? 'وقت کی تبدیلی، چھٹی یا اضافی کلاس کی درخواست کے لیے براہِ راست پیغام۔'
                : 'Request schedule adjustments or optional weekend classes when student and teacher agree.'}
            </p>
          </article>
        </div>

        {/* Browser-Saved Submissions */}
        <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-6 md:p-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-headline text-headline-md text-light-primary">{t('sd_submitted_title')}</h2>
            <p className="text-body-md text-light-on-surface-variant">{t('sd_submitted_desc')}</p>
          </div>

          {!hasAnyRequests ? (
            <p className="text-body-md text-light-on-surface-variant border border-dashed border-light-outline-variant rounded-md p-5">
              {t('sd_empty')}
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {trials.map((item) => (
                <div
                  key={item.id}
                  className="border border-light-outline-variant rounded-md p-4 bg-light-surface flex flex-col gap-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-title text-title-md text-light-primary">
                      {item.course} — {item.studentName}
                    </span>
                    <span className="font-mono text-mono-md text-light-secondary">{item.id}</span>
                  </div>
                  <p className="text-body-md text-light-on-surface-variant">
                    {item.preferredLanguage} • {item.preferredTeacher} • {item.classType} • {item.preferredApp} •{' '}
                    {item.preferredDays} ({item.preferredTime})
                  </p>
                </div>
              ))}

              {homeTuitions.map((item) => (
                <div
                  key={item.id}
                  className="border border-light-outline-variant rounded-md p-4 bg-light-surface flex flex-col gap-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-title text-title-md text-light-primary">
                      {t('nav_home_tuition')} — {item.name}
                    </span>
                    <span className="font-mono text-mono-md text-light-secondary">{item.id}</span>
                  </div>
                  <p className="text-body-md text-light-on-surface-variant">
                    {item.location} • {item.details}
                  </p>
                </div>
              ))}

              {contacts.map((item) => (
                <div
                  key={item.id}
                  className="border border-light-outline-variant rounded-md p-4 bg-light-surface flex flex-col gap-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-title text-title-md text-light-primary">
                      {item.topic} — {item.name}
                    </span>
                    <span className="font-mono text-mono-md text-light-secondary">{item.id}</span>
                  </div>
                  <p className="text-body-md text-light-on-surface-variant">{item.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
