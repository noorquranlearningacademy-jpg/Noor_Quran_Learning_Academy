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

const ROUTE_DESCRIPTIONS: Record<string, { en: string; ur: string }> = {
  [ROUTES.home]: {
    en: 'Join Noor Quran Learning Academy for structured 1-on-1 online Quran classes. Learn Noorani Qaida, Nazra, Hifz, Tajweed, Translation & Tafseer with certified male & female teachers. 3-Day Free Trial available worldwide.',
    ur: 'مستند مرد اور خواتین اساتذہ کے ساتھ آن لائن قرآن سیکھیں۔ نورانی قاعدہ، ناظرہ، حفظ، تجوید اور تفسیر کی کلاسز۔ 3 روزہ مفت ٹرائل حاصل کریں۔',
  },
  [ROUTES.courses]: {
    en: 'Explore structured Quran learning courses: Noorani Qaida, Quran Reading (Nazra), Hifz-ul-Quran, Tajweed, and Islamic Studies for all ages.',
    ur: 'ہمارے منظم قرآنی کورسز: نورانی قاعدہ، ناظرہ قرآن، حفظ، تجوید اور اسلامی تعلیمات۔',
  },
  [ROUTES.courseDetail]: {
    en: 'Detailed curriculum and syllabus for Noor Quran Learning Academy courses with certified tutors and interactive lessons.',
    ur: 'نور قرآن اکیڈمی کورسز کا تفصیلی نصاب اور طریقہ تدریس۔',
  },
  [ROUTES.readQuran]: {
    en: 'Read and listen to the Holy Quran online with 114 Surahs, Uthmani Arabic text, Urdu and English translations, and Mishary Alafasy audio recitation.',
    ur: 'مکمل 114 سورتیں، عثمانی عربی متن، اردو اور انگریزی ترجمہ اور قاری مشاری راشد العفاسی کی خوبصورت تلاوت سنیں اور پڑھیں۔',
  },
  [ROUTES.tafseer]: {
    en: 'Quran Tafseer and translation classes. Understand the divine wisdom and teachings of the Holy Quran in Urdu and English.',
    ur: 'قرآن کریم کا بامحاورہ ترجمہ اور مفصل تفسیر اردو اور انگریزی میں۔',
  },
  [ROUTES.teachers]: {
    en: 'Meet our qualified male and female Quran teachers. Experienced, gentle, and certified in Tajweed and Hifz for children and adults.',
    ur: 'ہمارے مستند اور تجربہ کار مرد و خواتین قرآنی اساتذہ سے ملیں۔ بچوں اور بڑوں کے لیے باوقار ماحول۔',
  },
  [ROUTES.fees]: {
    en: 'Affordable, transparent Quran class fee structure based on class frequency and family discounts. Contact for details.',
    ur: 'معیاری آن لائن قرآن تعلیم کے لیے مناسب اور لچکدار فیس پلانز۔',
  },
  [ROUTES.freeTrial]: {
    en: 'Book a 100% free 3-day online Quran trial class. No credit card required. Flexible timings for students worldwide.',
    ur: '3 روزہ مفت آن لائن قرآن ٹرائل کلاس بک کریں۔ کسی کارڈ کی ضرورت نہیں۔ پوری دنیا کے لیے لچکدار اوقات۔',
  },
  [ROUTES.onlineClasses]: {
    en: 'Interactive 1-on-1 online Quran classes via Zoom, Google Meet, WhatsApp, and IMO for kids and adults across the globe.',
    ur: 'زوم، گوگل میٹ، اور واٹس ایپ کے ذریعے ون آن ون آن لائن کلاسز۔',
  },
  [ROUTES.homeTuition]: {
    en: 'Personalized home Quran tuition in select locations with dedicated male tutors. Inquire for availability.',
    ur: 'گھر پر قرآن پڑھانے کی سہولت مخصوص علاقوں کے لیے۔',
  },
  [ROUTES.about]: {
    en: 'About Noor Quran Learning Academy: Our mission, teaching methodology, values, and dedication to authentic Quran education.',
    ur: 'نور قرآن لرننگ اکیڈمی کا تعارف، مشن اور تدریسی طریقہ کار۔',
  },
  [ROUTES.contact]: {
    en: 'Contact Noor Quran Learning Academy via WhatsApp (+92 331 444 6892) or official email for admission and queries.',
    ur: 'داخلے اور رہنمائی کے لیے نور قرآن لرننگ اکیڈمی سے واٹس ایپ یا ای میل پر رابطہ کریں۔',
  },
  [ROUTES.faqs]: {
    en: 'Frequently Asked Questions about our online Quran classes, teachers, trial sessions, and schedules.',
    ur: 'آن لائن کلاسز، اساتذہ اور نظام الاوقات سے متعلق عمومی سوالات اور ان کے جوابات۔',
  },
  [ROUTES.privacy]: {
    en: 'Privacy Policy of Noor Quran Learning Academy: How we protect your data and contact confidentiality.',
    ur: 'نور قرآن لرننگ اکیڈمی کی رازداری کی پالیسی۔',
  },
  [ROUTES.terms]: {
    en: 'Terms and conditions for enrolling in classes at Noor Quran Learning Academy.',
    ur: 'نور قرآن اکیڈمی کے قواعد اور ضوابط۔',
  },
  [ROUTES.studentDashboard]: {
    en: 'Student learning dashboard for progress tracking and schedule review.',
    ur: 'اسٹوڈنٹ لرننگ ڈیش بورڈ۔',
  },
};

function AppRouter() {
  const { currentPath, lang } = useApp();

  useEffect(() => {
    const titleObj = ROUTE_TITLES[currentPath] ?? ROUTE_TITLES[ROUTES.home];
    document.title = titleObj[lang];

    const descObj = ROUTE_DESCRIPTIONS[currentPath] ?? ROUTE_DESCRIPTIONS[ROUTES.home];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descObj[lang]);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const cleanPath = currentPath === ROUTES.home ? '' : currentPath.replace(/^\//, '');
      canonicalLink.setAttribute('href', `https://noor-quran-learning-academy.vercel.app/${cleanPath}`);
    }
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
