import React from 'react';
import { useApp } from '../context/AppContext';
import { IMAGES, ROUTES } from '../data/academy';
import { SafeImage } from '../components/SafeImage';

export function HomePage() {
  const { t, navigate } = useApp();

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-light-surface-container-low border-b border-light-outline-variant">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center self-start">
              <span
                role="status"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-light-secondary font-label text-label-sm border border-accent"
              >
                <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                  verified
                </span>
                <span>{t('hero_badge')}</span>
              </span>
            </div>

            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary text-balance">
              {t('hero_title')}
            </h1>

            <p className="text-body-lg text-light-on-surface-variant max-w-prose text-pretty">
              {t('hero_desc')}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={ROUTES.freeTrial}
                onClick={(e) => go(e, ROUTES.freeTrial)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
              >
                <span>{t('hero_cta_primary')}</span>
              </a>
              <a
                href={ROUTES.courses}
                onClick={(e) => go(e, ROUTES.courses)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-DEFAULT bg-light-surface-container-lowest text-light-primary border border-light-primary font-label text-label-lg hover:bg-light-surface-variant transition-colors duration-state-change"
              >
                <span>{t('hero_cta_secondary')}</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-light-outline-variant">
              <div>
                <p className="font-title text-title-md text-light-primary">{t('stat_1_title')}</p>
                <p className="text-label-sm text-light-on-surface-variant">{t('stat_1_sub')}</p>
              </div>
              <div>
                <p className="font-title text-title-md text-light-primary">{t('stat_2_title')}</p>
                <p className="text-label-sm text-light-on-surface-variant">{t('stat_2_sub')}</p>
              </div>
              <div>
                <p className="font-title text-title-md text-light-primary">{t('stat_3_title')}</p>
                <p className="text-label-sm text-light-on-surface-variant">{t('stat_3_sub')}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-light-outline-variant bg-light-surface-container-lowest p-2">
              <SafeImage
                src={IMAGES.heroQuranStudy}
                alt="Open Holy Quran on a wooden rehal beside a laptop in warm morning light"
                className="w-full h-72 md:h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction to Male & Female Teachers */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <SafeImage
              src={IMAGES.onlineClassLearning}
              alt="Child learning Quran online with parent guidance at home"
              className="w-full h-72 object-cover rounded-lg border border-light-outline-variant"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary text-balance">
              {t('teachers_intro_title')}
            </h2>
            <p className="text-body-lg text-light-on-surface-variant max-w-prose text-pretty">
              {t('teachers_intro_desc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-light-primary">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    person
                  </span>
                  <h3 className="font-title text-title-md">{t('teacher_male_label')}</h3>
                </div>
                <p className="text-body-md text-light-on-surface-variant">{t('teacher_male_desc')}</p>
              </div>
              <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-light-primary">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    diversity_3
                  </span>
                  <h3 className="font-title text-title-md">{t('teacher_female_label')}</h3>
                </div>
                <p className="text-body-md text-light-on-surface-variant">{t('teacher_female_desc')}</p>
              </div>
            </div>
            <div>
              <a
                href={ROUTES.teachers}
                onClick={(e) => go(e, ROUTES.teachers)}
                className="inline-flex items-center gap-2 font-label text-label-lg text-light-primary hover:underline"
              >
                <span>{t('teachers_intro_link')}</span>
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-section bg-light-surface-container-low border-y border-light-outline-variant">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-prose">
              <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
                {t('courses_sec_title')}
              </h2>
              <p className="text-body-md text-light-on-surface-variant">{t('courses_sec_desc')}</p>
            </div>
            <a
              href={ROUTES.courses}
              onClick={(e) => go(e, ROUTES.courses)}
              className="inline-flex items-center gap-2 font-label text-label-lg text-light-primary hover:underline shrink-0"
            >
              <span>{t('courses_view_all')}</span>
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <a
              href={`${ROUTES.courseDetail}?course=noorani-qaida`}
              onClick={(e) => go(e, `${ROUTES.courseDetail}?course=noorani-qaida`)}
              className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-4 hover:border-light-primary transition-colors duration-state-change h-full"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-title text-title-lg text-light-primary">{t('home_c1_title')}</h3>
                  <span className="material-symbols-outlined text-light-secondary" aria-hidden="true">
                    menu_book
                  </span>
                </div>
                <p className="text-body-md text-light-on-surface-variant">{t('home_c1_desc')}</p>
              </div>
              <span className="text-label-sm text-light-primary font-label">{t('c_level_beg')}</span>
            </a>

            <a
              href={`${ROUTES.courseDetail}?course=quran-with-tajweed`}
              onClick={(e) => go(e, `${ROUTES.courseDetail}?course=quran-with-tajweed`)}
              className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-4 hover:border-light-primary transition-colors duration-state-change h-full"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-title text-title-lg text-light-primary">{t('home_c2_title')}</h3>
                  <span className="material-symbols-outlined text-light-secondary" aria-hidden="true">
                    record_voice_over
                  </span>
                </div>
                <p className="text-body-md text-light-on-surface-variant">{t('home_c2_desc')}</p>
              </div>
              <span className="text-label-sm text-light-primary font-label">{t('c_level_all')}</span>
            </a>

            <a
              href={ROUTES.courses}
              onClick={(e) => go(e, ROUTES.courses)}
              className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-4 hover:border-light-primary transition-colors duration-state-change h-full"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-title text-title-lg text-light-primary">{t('home_c3_title')}</h3>
                  <span className="material-symbols-outlined text-light-secondary" aria-hidden="true">
                    auto_stories
                  </span>
                </div>
                <p className="text-body-md text-light-on-surface-variant">{t('home_c3_desc')}</p>
              </div>
              <span className="text-label-sm text-light-primary font-label">{t('c_level_int')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits & How Online Classes Work */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
            {t('benefits_title')}
          </h2>
          <div className="flex flex-col gap-4">
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-5 flex items-start gap-4">
              <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                schedule
              </span>
              <div>
                <h3 className="font-title text-title-md text-light-on-surface">{t('b1_title')}</h3>
                <p className="text-body-md text-light-on-surface-variant">{t('b1_desc')}</p>
              </div>
            </div>
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-5 flex items-start gap-4">
              <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                groups
              </span>
              <div>
                <h3 className="font-title text-title-md text-light-on-surface">{t('b2_title')}</h3>
                <p className="text-body-md text-light-on-surface-variant">{t('b2_desc')}</p>
              </div>
            </div>
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-5 flex items-start gap-4">
              <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                translate
              </span>
              <div>
                <h3 className="font-title text-title-md text-light-on-surface">{t('b3_title')}</h3>
                <p className="text-body-md text-light-on-surface-variant">{t('b3_desc')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
            {t('how_title')}
          </h2>
          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-accent-soft text-light-secondary border border-accent flex items-center justify-center shrink-0 font-label text-label-lg">
                1
              </span>
              <div>
                <h3 className="font-title text-title-md text-light-on-surface">{t('h1_title')}</h3>
                <p className="text-body-md text-light-on-surface-variant">{t('h1_desc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-accent-soft text-light-secondary border border-accent flex items-center justify-center shrink-0 font-label text-label-lg">
                2
              </span>
              <div>
                <h3 className="font-title text-title-md text-light-on-surface">{t('h2_title')}</h3>
                <p className="text-body-md text-light-on-surface-variant">{t('h2_desc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-accent-soft text-light-secondary border border-accent flex items-center justify-center shrink-0 font-label text-label-lg">
                3
              </span>
              <div>
                <h3 className="font-title text-title-md text-light-on-surface">{t('h3_title')}</h3>
                <p className="text-body-md text-light-on-surface-variant">{t('h3_desc')}</p>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={ROUTES.freeTrial}
                onClick={(e) => go(e, ROUTES.freeTrial)}
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
              >
                {t('hero_cta_primary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quran Ayah of the Day */}
      <section className="py-12 max-w-[1200px] mx-auto px-gutter-md md:px-page-margin">
        <div className="bg-light-surface-container-lowest border border-accent rounded-xl p-6 md:p-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
              <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                auto_awesome
              </span>
              <span>{t('ayah_badge')}</span>
            </span>
            <a
              href={ROUTES.readQuran}
              onClick={(e) => go(e, ROUTES.readQuran)}
              className="font-label text-label-lg text-light-primary hover:underline"
            >
              {t('ayah_link')}
            </a>
          </div>
          <p className="font-arabic text-headline-md md:text-headline-lg text-light-primary text-end leading-loose" dir="rtl" lang="ar">
            وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
          </p>
          <p className="text-body-lg text-light-on-surface">{t('ayah_en')}</p>
          <p className="text-label-sm text-light-on-surface-variant">{t('ayah_ref')}</p>
        </div>
      </section>

      {/* Testimonials (Clearly Marked Placeholders) */}
      <section className="py-section bg-light-surface-container-low border-y border-light-outline-variant">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-prose">
            <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
              {t('test_badge')}
            </span>
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
              {t('test_title')}
            </h2>
            <p className="text-body-md text-light-on-surface-variant">{t('test_desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-light-surface-container-lowest border border-dashed border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-4">
              <p className="text-body-md text-light-on-surface-variant italic">{t('test_p1')}</p>
              <div className="pt-3 border-t border-light-outline-variant">
                <p className="font-title text-title-md text-light-on-surface">{t('test_a1')}</p>
                <p className="text-label-sm text-light-on-surface-variant">{t('test_l1')}</p>
              </div>
            </article>
            <article className="bg-light-surface-container-lowest border border-dashed border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-4">
              <p className="text-body-md text-light-on-surface-variant italic">{t('test_p2')}</p>
              <div className="pt-3 border-t border-light-outline-variant">
                <p className="font-title text-title-md text-light-on-surface">{t('test_a2')}</p>
                <p className="text-label-sm text-light-on-surface-variant">{t('test_l2')}</p>
              </div>
            </article>
            <article className="bg-light-surface-container-lowest border border-dashed border-light-outline-variant rounded-lg p-6 flex flex-col justify-between gap-4">
              <p className="text-body-md text-light-on-surface-variant italic">{t('test_p3')}</p>
              <div className="pt-3 border-t border-light-outline-variant">
                <p className="font-title text-title-md text-light-on-surface">{t('test_a3')}</p>
                <p className="text-label-sm text-light-on-surface-variant">{t('test_l3')}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <div className="text-center flex flex-col gap-2">
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
              {t('home_faq_title')}
            </h2>
            <p className="text-body-md text-light-on-surface-variant">{t('home_faq_desc')}</p>
          </div>

          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map((num) => (
              <details
                key={num}
                name="faq-group"
                open={num === 1}
                className="group bg-light-surface-container-lowest border border-light-outline-variant rounded-md overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none hover:bg-light-surface-container-low transition-colors duration-state-change">
                  <span className="font-title text-title-md text-light-on-surface">{t(`home_faq_q${num}`)}</span>
                  <span
                    className="material-symbols-outlined text-light-primary group-open:rotate-180 transition-transform duration-state-change"
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-body-md text-light-on-surface-variant border-t border-light-outline-variant">
                  <p>{t(`home_faq_a${num}`)}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-12 bg-light-primary text-light-on-primary">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-prose">
            <h2 className="font-headline text-headline-md">{t('cta_banner_title')}</h2>
            <p className="text-body-md text-light-on-primary-container">{t('cta_banner_desc')}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={ROUTES.freeTrial}
              onClick={(e) => go(e, ROUTES.freeTrial)}
              className="px-6 py-3 rounded-DEFAULT bg-light-surface-container-lowest text-light-primary font-label text-label-lg hover:bg-accent-soft transition-colors duration-state-change"
            >
              {t('hero_cta_primary')}
            </a>
            <a
              href={ROUTES.contact}
              onClick={(e) => go(e, ROUTES.contact)}
              className="px-6 py-3 rounded-DEFAULT border border-light-on-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
            >
              {t('nav_contact')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
