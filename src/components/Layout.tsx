import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ACADEMY_CONFIG, COURSE_DATA, ROUTES, type CourseSlug } from '../data/academy';
import { AiAssistant } from './AiAssistant';

const DROPDOWN_COURSES: CourseSlug[] = [
  'noorani-qaida',
  'nazra-quran',
  'hifz-ul-quran',
  'quran-with-tajweed',
  'quran-with-urdu-translation',
  'quran-with-english-translation',
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { lang, setLang, t, currentPath, navigate } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(to);
  };

  const isCourseGroupActive =
    currentPath === ROUTES.courses || currentPath === ROUTES.courseDetail;

  const isLearningGroupActive =
    currentPath === ROUTES.readQuran ||
    currentPath === ROUTES.tafseer ||
    currentPath === ROUTES.onlineClasses ||
    currentPath === ROUTES.homeTuition;

  const desktopLinkClass = (active: boolean) =>
    active
      ? 'font-label text-label-lg text-light-primary border-b-2 border-light-primary pb-0.5'
      : 'font-label text-label-lg text-light-on-surface-variant hover:text-light-primary transition-colors duration-state-change';

  const footerLinkClass = (active: boolean) =>
    active
      ? 'text-body-md text-light-primary font-medium'
      : 'text-body-md text-light-on-surface-variant hover:text-light-primary';

  const mobileLinkClass = (active: boolean) =>
    active
      ? 'font-label text-label-lg text-light-primary py-1.5'
      : 'font-label text-label-lg text-light-on-surface-variant py-1.5';

  return (
    <div className="min-h-screen flex flex-col bg-light-surface text-light-on-surface font-body">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-light-surface-container-lowest border-b border-light-outline-variant">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin py-3 flex items-center justify-between gap-4">
          <a
            href={ROUTES.home}
            onClick={(e) => handleLinkClick(e, ROUTES.home)}
            className="flex items-center gap-3 shrink-0"
          >
            <span
              className="w-11 h-11 rounded-md overflow-hidden border border-accent bg-light-primary flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <img
                src="/src/assets/images/noor_quran_logo_1795678163454.jpg"
                alt=""
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="flex flex-col">
              <span className="font-headline text-title-md text-light-primary leading-tight">
                {t('brand_name')}
              </span>
              <span className="text-label-sm text-light-on-surface-variant leading-tight">
                {t('brand_sub')}
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-5" aria-label="Primary">
            <a
              href={ROUTES.home}
              onClick={(e) => handleLinkClick(e, ROUTES.home)}
              className={desktopLinkClass(currentPath === ROUTES.home)}
            >
              {t('nav_home')}
            </a>

            <div className="relative group">
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${desktopLinkClass(isCourseGroupActive)}`}
                aria-haspopup="true"
              >
                <span>{t('nav_courses')}</span>
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  expand_more
                </span>
              </button>
              <div className="hidden group-hover:flex group-focus-within:flex flex-col absolute top-full start-0 pt-2 w-60 z-50">
                <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md py-2 flex flex-col">
                  <a
                    href={ROUTES.courses}
                    onClick={(e) => handleLinkClick(e, ROUTES.courses)}
                    className="px-4 py-2 text-body-md text-light-primary font-medium hover:bg-light-surface-container-low"
                  >
                    {t('nav_all_courses')}
                  </a>
                  {DROPDOWN_COURSES.map((slug) => (
                    <a
                      key={slug}
                      href={`${ROUTES.courseDetail}?course=${slug}`}
                      onClick={(e) => handleLinkClick(e, `${ROUTES.courseDetail}?course=${slug}`)}
                      className="px-4 py-2 text-body-md text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary"
                    >
                      {COURSE_DATA[slug].tabLabel[lang]}
                    </a>
                  ))}
                  <a
                    href={ROUTES.tafseer}
                    onClick={(e) => handleLinkClick(e, ROUTES.tafseer)}
                    className="px-4 py-2 text-body-md text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary"
                  >
                    {t('nav_tafseer')}
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${desktopLinkClass(isLearningGroupActive)}`}
                aria-haspopup="true"
              >
                <span>{t('nav_learning')}</span>
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  expand_more
                </span>
              </button>
              <div className="hidden group-hover:flex group-focus-within:flex flex-col absolute top-full start-0 pt-2 w-56 z-50">
                <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md py-2 flex flex-col">
                  <a
                    href={ROUTES.readQuran}
                    onClick={(e) => handleLinkClick(e, ROUTES.readQuran)}
                    className="px-4 py-2 text-body-md text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary"
                  >
                    {t('nav_read_quran')}
                  </a>
                  <a
                    href={ROUTES.tafseer}
                    onClick={(e) => handleLinkClick(e, ROUTES.tafseer)}
                    className="px-4 py-2 text-body-md text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary"
                  >
                    {t('nav_tafseer')}
                  </a>
                  <a
                    href={ROUTES.onlineClasses}
                    onClick={(e) => handleLinkClick(e, ROUTES.onlineClasses)}
                    className="px-4 py-2 text-body-md text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary"
                  >
                    {t('nav_online')}
                  </a>
                  <a
                    href={ROUTES.homeTuition}
                    onClick={(e) => handleLinkClick(e, ROUTES.homeTuition)}
                    className="px-4 py-2 text-body-md text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary"
                  >
                    {t('nav_home_tuition')}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={ROUTES.teachers}
              onClick={(e) => handleLinkClick(e, ROUTES.teachers)}
              className={desktopLinkClass(currentPath === ROUTES.teachers)}
            >
              {t('nav_teachers')}
            </a>
            <a
              href={ROUTES.fees}
              onClick={(e) => handleLinkClick(e, ROUTES.fees)}
              className={desktopLinkClass(currentPath === ROUTES.fees)}
            >
              {t('nav_fees')}
            </a>
            <a
              href={ROUTES.about}
              onClick={(e) => handleLinkClick(e, ROUTES.about)}
              className={desktopLinkClass(currentPath === ROUTES.about)}
            >
              {t('nav_about')}
            </a>
            <a
              href={ROUTES.contact}
              onClick={(e) => handleLinkClick(e, ROUTES.contact)}
              className={desktopLinkClass(currentPath === ROUTES.contact)}
            >
              {t('nav_contact')}
            </a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <div
              className="inline-flex items-center rounded-full border border-light-outline-variant bg-light-surface-container-low p-0.5"
              role="group"
              aria-label="Language switcher"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={
                  lang === 'en'
                    ? 'px-3 py-1 rounded-full font-label text-label-sm bg-light-primary text-light-on-primary transition-colors duration-state-change'
                    : 'px-3 py-1 rounded-full font-label text-label-sm text-light-on-surface-variant hover:text-light-primary transition-colors duration-state-change'
                }
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('ur')}
                className={
                  lang === 'ur'
                    ? 'px-3 py-1 rounded-full font-label text-label-sm bg-light-primary text-light-on-primary transition-colors duration-state-change'
                    : 'px-3 py-1 rounded-full font-label text-label-sm text-light-on-surface-variant hover:text-light-primary transition-colors duration-state-change'
                }
              >
                اردو
              </button>
            </div>

            <a
              href={ROUTES.freeTrial}
              onClick={(e) => handleLinkClick(e, ROUTES.freeTrial)}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
            >
              <span>{t('nav_cta')}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-DEFAULT bg-light-surface-container-lowest border border-light-outline-variant text-light-on-surface hover:bg-light-surface-container"
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-light-outline-variant bg-light-surface-container-lowest px-gutter-md py-4">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              <a
                href={ROUTES.home}
                onClick={(e) => handleLinkClick(e, ROUTES.home)}
                className={mobileLinkClass(currentPath === ROUTES.home)}
              >
                {t('nav_home')}
              </a>
              <a
                href={ROUTES.courses}
                onClick={(e) => handleLinkClick(e, ROUTES.courses)}
                className={mobileLinkClass(isCourseGroupActive)}
              >
                {t('nav_courses')}
              </a>
              <a
                href={ROUTES.readQuran}
                onClick={(e) => handleLinkClick(e, ROUTES.readQuran)}
                className={mobileLinkClass(currentPath === ROUTES.readQuran)}
              >
                {t('nav_read_quran')}
              </a>
              <a
                href={ROUTES.tafseer}
                onClick={(e) => handleLinkClick(e, ROUTES.tafseer)}
                className={mobileLinkClass(currentPath === ROUTES.tafseer)}
              >
                {t('nav_tafseer')}
              </a>
              <a
                href={ROUTES.onlineClasses}
                onClick={(e) => handleLinkClick(e, ROUTES.onlineClasses)}
                className={mobileLinkClass(currentPath === ROUTES.onlineClasses)}
              >
                {t('nav_online')}
              </a>
              <a
                href={ROUTES.homeTuition}
                onClick={(e) => handleLinkClick(e, ROUTES.homeTuition)}
                className={mobileLinkClass(currentPath === ROUTES.homeTuition)}
              >
                {t('nav_home_tuition')}
              </a>
              <a
                href={ROUTES.teachers}
                onClick={(e) => handleLinkClick(e, ROUTES.teachers)}
                className={mobileLinkClass(currentPath === ROUTES.teachers)}
              >
                {t('nav_teachers')}
              </a>
              <a
                href={ROUTES.fees}
                onClick={(e) => handleLinkClick(e, ROUTES.fees)}
                className={mobileLinkClass(currentPath === ROUTES.fees)}
              >
                {t('nav_fees')}
              </a>
              <a
                href={ROUTES.about}
                onClick={(e) => handleLinkClick(e, ROUTES.about)}
                className={mobileLinkClass(currentPath === ROUTES.about)}
              >
                {t('nav_about')}
              </a>
              <a
                href={ROUTES.faqs}
                onClick={(e) => handleLinkClick(e, ROUTES.faqs)}
                className={mobileLinkClass(currentPath === ROUTES.faqs)}
              >
                {lang === 'ur' ? 'عمومی سوالات' : 'FAQs'}
              </a>
              <a
                href={ROUTES.contact}
                onClick={(e) => handleLinkClick(e, ROUTES.contact)}
                className={mobileLinkClass(currentPath === ROUTES.contact)}
              >
                {t('nav_contact')}
              </a>
              <a
                href={ROUTES.freeTrial}
                onClick={(e) => handleLinkClick(e, ROUTES.freeTrial)}
                className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg"
              >
                {t('nav_cta')}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Shared Multi-Page Footer */}
      <footer className="bg-light-surface-container-low border-t border-light-outline-variant py-12">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-headline text-title-lg text-light-primary">{t('footer_brand')}</p>
            <p className="text-body-md text-light-on-surface-variant">{t('footer_tagline')}</p>
            <p className="text-label-sm text-light-on-surface-variant">{t('footer_schedule')}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-title text-title-md text-light-on-surface">{t('footer_col_academy')}</h3>
            <a
              href={ROUTES.home}
              onClick={(e) => handleLinkClick(e, ROUTES.home)}
              className={footerLinkClass(currentPath === ROUTES.home)}
            >
              {t('nav_home')}
            </a>
            <a
              href={ROUTES.about}
              onClick={(e) => handleLinkClick(e, ROUTES.about)}
              className={footerLinkClass(currentPath === ROUTES.about)}
            >
              {t('nav_about')}
            </a>
            <a
              href={ROUTES.courses}
              onClick={(e) => handleLinkClick(e, ROUTES.courses)}
              className={footerLinkClass(isCourseGroupActive)}
            >
              {t('nav_courses')}
            </a>
            <a
              href={ROUTES.teachers}
              onClick={(e) => handleLinkClick(e, ROUTES.teachers)}
              className={footerLinkClass(currentPath === ROUTES.teachers)}
            >
              {t('nav_teachers')}
            </a>
            <a
              href={ROUTES.fees}
              onClick={(e) => handleLinkClick(e, ROUTES.fees)}
              className={footerLinkClass(currentPath === ROUTES.fees)}
            >
              {t('nav_fees')}
            </a>
            <a
              href={ROUTES.freeTrial}
              onClick={(e) => handleLinkClick(e, ROUTES.freeTrial)}
              className={footerLinkClass(currentPath === ROUTES.freeTrial)}
            >
              {t('nav_cta')}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-title text-title-md text-light-on-surface">{t('footer_col_learning')}</h3>
            <a
              href={ROUTES.readQuran}
              onClick={(e) => handleLinkClick(e, ROUTES.readQuran)}
              className={footerLinkClass(currentPath === ROUTES.readQuran)}
            >
              {t('nav_read_quran')}
            </a>
            <a
              href={ROUTES.tafseer}
              onClick={(e) => handleLinkClick(e, ROUTES.tafseer)}
              className={footerLinkClass(currentPath === ROUTES.tafseer)}
            >
              {t('nav_tafseer')}
            </a>
            <a
              href={ROUTES.onlineClasses}
              onClick={(e) => handleLinkClick(e, ROUTES.onlineClasses)}
              className={footerLinkClass(currentPath === ROUTES.onlineClasses)}
            >
              {t('nav_online')}
            </a>
            <a
              href={ROUTES.homeTuition}
              onClick={(e) => handleLinkClick(e, ROUTES.homeTuition)}
              className={footerLinkClass(currentPath === ROUTES.homeTuition)}
            >
              {t('nav_home_tuition')}
            </a>
            <a
              href={ROUTES.faqs}
              onClick={(e) => handleLinkClick(e, ROUTES.faqs)}
              className={footerLinkClass(currentPath === ROUTES.faqs)}
            >
              {lang === 'ur' ? 'عمومی سوالات' : 'FAQs'}
            </a>
            <a
              href={ROUTES.studentDashboard}
              onClick={(e) => handleLinkClick(e, ROUTES.studentDashboard)}
              className={footerLinkClass(currentPath === ROUTES.studentDashboard)}
            >
              {t('nav_dashboard')}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-title text-title-md text-light-on-surface">{t('footer_contact_title')}</h3>
            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-md text-light-on-surface-variant hover:text-light-primary"
            >
              WhatsApp: {ACADEMY_CONFIG.whatsappDisplay}
            </a>
            <a
              href={`mailto:${ACADEMY_CONFIG.email}`}
              className="text-body-md text-light-on-surface-variant hover:text-light-primary"
            >
              Email: {ACADEMY_CONFIG.email}
            </a>
            <a
              href={ROUTES.contact}
              onClick={(e) => handleLinkClick(e, ROUTES.contact)}
              className={footerLinkClass(currentPath === ROUTES.contact)}
            >
              {t('nav_contact')}
            </a>
            <a
              href={ROUTES.privacy}
              onClick={(e) => handleLinkClick(e, ROUTES.privacy)}
              className={footerLinkClass(currentPath === ROUTES.privacy)}
            >
              {t('nav_privacy')}
            </a>
            <a
              href={ROUTES.terms}
              onClick={(e) => handleLinkClick(e, ROUTES.terms)}
              className={footerLinkClass(currentPath === ROUTES.terms)}
            >
              {t('nav_terms')}
            </a>
          </div>
        </div>
      </footer>

      <AiAssistant />
    </div>
  );
}
