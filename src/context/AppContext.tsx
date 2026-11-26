import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ROUTES, type Language } from '../data/academy';
import { TRANSLATIONS } from '../data/translations';

interface AppContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  currentPath: string;
  searchParams: URLSearchParams;
  navigate: (to: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const LEGACY_ROUTE_MAP: Record<string, string> = {
  '/home/home.html': ROUTES.home,
  '/home.html': ROUTES.home,
  '/courses/courses.html': ROUTES.courses,
  '/courses.html': ROUTES.courses,
  '/course-detail/coursedetail.html': ROUTES.courseDetail,
  '/coursedetail.html': ROUTES.courseDetail,
  '/read-quran/readquran.html': ROUTES.readQuran,
  '/readquran.html': ROUTES.readQuran,
  '/tafseer/qurantafseer.html': ROUTES.tafseer,
  '/qurantafseer.html': ROUTES.tafseer,
  '/teachers/teachers.html': ROUTES.teachers,
  '/teachers.html': ROUTES.teachers,
  '/fees/feeinformation.html': ROUTES.fees,
  '/feeinformation.html': ROUTES.fees,
  '/free-trial/freetrialbooking.html': ROUTES.freeTrial,
  '/freetrialbooking.html': ROUTES.freeTrial,
  '/online-classes/onlineclasses.html': ROUTES.onlineClasses,
  '/onlineclasses.html': ROUTES.onlineClasses,
  '/home-tuition/hometuition.html': ROUTES.homeTuition,
  '/hometuition.html': ROUTES.homeTuition,
  '/about/aboutus.html': ROUTES.about,
  '/aboutus.html': ROUTES.about,
  '/contact/contact.html': ROUTES.contact,
  '/contact.html': ROUTES.contact,
  '/faqs/faqs.html': ROUTES.faqs,
  '/faqs.html': ROUTES.faqs,
  '/privacy/privacypolicy.html': ROUTES.privacy,
  '/privacypolicy.html': ROUTES.privacy,
  '/terms/termsandconditions.html': ROUTES.terms,
  '/termsandconditions.html': ROUTES.terms,
  '/student-dashboard/studentdashboard.html': ROUTES.studentDashboard,
  '/studentdashboard.html': ROUTES.studentDashboard,
};

export function normalizeRoutePath(rawPath: string): string {
  const cleaned = rawPath.trim() || '/';
  const lower = cleaned.toLowerCase();
  if (LEGACY_ROUTE_MAP[lower]) {
    return LEGACY_ROUTE_MAP[lower];
  }
  if (cleaned.length > 1 && cleaned.endsWith('/')) {
    return cleaned.slice(0, -1);
  }
  return cleaned;
}

const VALID_ROUTES = new Set<string>(Object.values(ROUTES));

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem('noor_lang');
      return saved === 'ur' ? 'ur' : 'en';
    } catch {
      return 'en';
    }
  });

  const [locationState, setLocationState] = useState(() => ({
    pathname: normalizeRoutePath(window.location.pathname),
    search: window.location.search,
  }));

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
    try {
      window.localStorage.setItem('noor_lang', lang);
    } catch {
      // Ignore storage errors
    }
  }, [lang]);

  useEffect(() => {
    const handlePopState = () => {
      setLocationState({
        pathname: normalizeRoutePath(window.location.pathname),
        search: window.location.search,
      });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setLang = useCallback((nextLang: Language) => {
    setLangState(nextLang);
  }, []);

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin);
    const nextPath = normalizeRoutePath(url.pathname);
    const resolvedPath = VALID_ROUTES.has(nextPath) ? nextPath : ROUTES.home;
    const nextUrl = `${resolvedPath}${url.search}${url.hash}`;

    if (
      window.location.pathname !== resolvedPath ||
      window.location.search !== url.search ||
      window.location.hash !== url.hash
    ) {
      window.history.pushState({}, '', nextUrl);
    }

    setLocationState({
      pathname: resolvedPath,
      search: url.search,
    });

    if (url.hash) {
      const id = url.hash.slice(1);
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return TRANSLATIONS[lang][key] ?? TRANSLATIONS.en[key] ?? key;
    },
    [lang]
  );

  const searchParams = useMemo(() => new URLSearchParams(locationState.search), [locationState.search]);

  const currentPath = VALID_ROUTES.has(locationState.pathname)
    ? locationState.pathname
    : ROUTES.home;

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
      currentPath,
      searchParams,
      navigate,
    }),
    [lang, setLang, t, currentPath, searchParams, navigate]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return ctx;
}
