/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Layout } from './components/Layout';
import { ROUTES } from './data/academy';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { ReadQuranPage } from './pages/ReadQuranPage';
import { QuranTafseerPage } from './pages/QuranTafseerPage';
import { TeachersPage } from './pages/TeachersPage';
import { FeeInformationPage } from './pages/FeeInformationPage';
import { FreeTrialBookingPage } from './pages/FreeTrialBookingPage';
import { OnlineClassesPage } from './pages/OnlineClassesPage';
import { HomeTuitionPage } from './pages/HomeTuitionPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { FaqsPage } from './pages/FaqsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';

const ROUTE_TITLES: Record<string, { en: string; ur: string }> = {
  [ROUTES.home]: {
    en: 'Noor Quran Learning Academy — Online Quran Classes',
    ur: 'نور قرآن لرننگ اکیڈمی — آن لائن قرآن کلاسز',
  },
  [ROUTES.courses]: {
    en: 'Courses — Noor Quran Learning Academy',
    ur: 'کورسز — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.courseDetail]: {
    en: 'Course Details — Noor Quran Learning Academy',
    ur: 'کورس کی تفصیلات — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.readQuran]: {
    en: 'Read Quran — Noor Quran Learning Academy',
    ur: 'قرآن پڑھیں — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.tafseer]: {
    en: 'Quran Tafseer — Noor Quran Learning Academy',
    ur: 'تفسیرِ قرآن — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.teachers]: {
    en: 'Teachers — Noor Quran Learning Academy',
    ur: 'اساتذہ — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.fees]: {
    en: 'Fee Information — Noor Quran Learning Academy',
    ur: 'فیس کی معلومات — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.freeTrial]: {
    en: 'Free Trial Booking — Noor Quran Learning Academy',
    ur: 'مفت ٹرائل بکنگ — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.onlineClasses]: {
    en: 'Online Classes — Noor Quran Learning Academy',
    ur: 'آن لائن کلاسز — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.homeTuition]: {
    en: 'Home Tuition — Noor Quran Learning Academy',
    ur: 'ہوم ٹیوشن — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.about]: {
    en: 'About Us — Noor Quran Learning Academy',
    ur: 'ہمارے بارے میں — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.contact]: {
    en: 'Contact — Noor Quran Learning Academy',
    ur: 'رابطہ — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.faqs]: {
    en: 'FAQs — Noor Quran Learning Academy',
    ur: 'عمومی سوالات — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.privacy]: {
    en: 'Privacy Policy — Noor Quran Learning Academy',
    ur: 'پرائیویسی پالیسی — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.terms]: {
    en: 'Terms & Conditions — Noor Quran Learning Academy',
    ur: 'شرائط و ضوابط — نور قرآن لرننگ اکیڈمی',
  },
  [ROUTES.studentDashboard]: {
    en: 'Student Dashboard (Planned) — Noor Quran Learning Academy',
    ur: 'اسٹوڈنٹ ڈیش بورڈ — نور قرآن لرننگ اکیڈمی',
  },
};

function AppRouter() {
  const { currentPath, lang } = useApp();

  useEffect(() => {
    const titleObj = ROUTE_TITLES[currentPath] ?? ROUTE_TITLES[ROUTES.home];
    document.title = titleObj[lang];
  }, [currentPath, lang]);

  let page;
  switch (currentPath) {
    case ROUTES.courses:
      page = <CoursesPage />;
      break;
    case ROUTES.courseDetail:
      page = <CourseDetailPage />;
      break;
    case ROUTES.readQuran:
      page = <ReadQuranPage />;
      break;
    case ROUTES.tafseer:
      page = <QuranTafseerPage />;
      break;
    case ROUTES.teachers:
      page = <TeachersPage />;
      break;
    case ROUTES.fees:
      page = <FeeInformationPage />;
      break;
    case ROUTES.freeTrial:
      page = <FreeTrialBookingPage />;
      break;
    case ROUTES.onlineClasses:
      page = <OnlineClassesPage />;
      break;
    case ROUTES.homeTuition:
      page = <HomeTuitionPage />;
      break;
    case ROUTES.about:
      page = <AboutUsPage />;
      break;
    case ROUTES.contact:
      page = <ContactPage />;
      break;
    case ROUTES.faqs:
      page = <FaqsPage />;
      break;
    case ROUTES.privacy:
      page = <PrivacyPolicyPage />;
      break;
    case ROUTES.terms:
      page = <TermsAndConditionsPage />;
      break;
    case ROUTES.studentDashboard:
      page = <StudentDashboardPage />;
      break;
    case ROUTES.home:
    default:
      page = <HomePage />;
      break;
  }

  return <Layout>{page}</Layout>;
}

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
