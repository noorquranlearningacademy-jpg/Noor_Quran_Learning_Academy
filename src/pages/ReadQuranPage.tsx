import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { QURAN_READER_CONFIG, ROUTES, SURAH_DATA, type AyahItem, type SurahKey } from '../data/academy';
import { ALL_SURAHS } from '../data/surahs';

const LOCAL_SURAH_BY_NUMBER: Record<number, SurahKey> = {
  1: 'fatiha',
  112: 'ikhlas',
  113: 'falaq',
  114: 'nas',
};

const BISMILLAH_PREFIX = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ';

interface AlQuranEdition {
  ayahs: Array<{ numberInSurah: number; text: string }>;
}

export function ReadQuranPage() {
  const { lang, t, navigate } = useApp();
  const [surahNumber, setSurahNumber] = useState<number>(1);
  const [surahSearch, setSurahSearch] = useState('');
  const [ayahs, setAyahs] = useState<AyahItem[]>(SURAH_DATA.fatiha.ayahs);
  const [isLoadingSurah, setIsLoadingSurah] = useState(false);
  const [surahError, setSurahError] = useState<string | null>(null);
  const [showUr, setShowUr] = useState(true);
  const [showEn, setShowEn] = useState(true);
  const [arabicSize, setArabicSize] = useState<'sm' | 'md' | 'lg'>('md');

  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [audioStatusMsg, setAudioStatusMsg] = useState<string | null>(null);
  const [audioIsError, setAudioIsError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioAttemptRef = useRef<number>(0);
  const surahCacheRef = useRef<Map<number, AyahItem[]>>(new Map());

  const currentMeta = useMemo(
    () => ALL_SURAHS.find((s) => s.number === surahNumber) ?? ALL_SURAHS[0],
    [surahNumber]
  );

  const filteredSurahs = useMemo(() => {
    const q = surahSearch.trim().toLowerCase();
    if (!q) return ALL_SURAHS;
    return ALL_SURAHS.filter(
      (s) =>
        String(s.number) === q ||
        s.englishName.toLowerCase().includes(q) ||
        s.englishMeaning.toLowerCase().includes(q) ||
        s.arabicName.includes(surahSearch.trim())
    );
  }, [surahSearch]);

  const surahTitle = `Surah ${currentMeta.englishName} (${currentMeta.englishMeaning}) — سورۃ ${currentMeta.arabicName}`;

  const loadSurah = useCallback(
    async (num: number) => {
      setSurahError(null);

      const cached = surahCacheRef.current.get(num);
      if (cached) {
        setAyahs(cached);
        return;
      }

      const localKey = LOCAL_SURAH_BY_NUMBER[num];
      if (localKey) {
        const localAyahs = SURAH_DATA[localKey].ayahs;
        surahCacheRef.current.set(num, localAyahs);
        setAyahs(localAyahs);
        return;
      }

      setIsLoadingSurah(true);
      try {
        const res = await fetch(
          `https://api.alquran.cloud/v1/surah/${num}/editions/${QURAN_READER_CONFIG.arabicEdition},${QURAN_READER_CONFIG.urduEdition},${QURAN_READER_CONFIG.englishEdition}`
        );
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const json = (await res.json()) as {
          code?: number;
          data?: [AlQuranEdition, AlQuranEdition, AlQuranEdition];
        };

        const editions = json?.data;
        if (!Array.isArray(editions) || editions.length < 3) {
          throw new Error('Unexpected Quran API format');
        }

        const [arEd, urEd, enEd] = editions;
        const merged: AyahItem[] = arEd.ayahs.map((arAyah, idx) => {
          let arText = arAyah.text;
          if (num !== 1 && num !== 9 && idx === 0 && arText.startsWith(BISMILLAH_PREFIX)) {
            arText = arText.slice(BISMILLAH_PREFIX.length).trim();
          }
          return {
            num: arAyah.numberInSurah,
            ar: arText,
            ur: urEd.ayahs[idx]?.text ?? '',
            en: enEd.ayahs[idx]?.text ?? '',
          };
        });

        surahCacheRef.current.set(num, merged);
        setAyahs(merged);
      } catch {
        setAyahs([]);
        setSurahError(
          lang === 'ur'
            ? 'سورۃ لوڈ نہیں ہو سکی۔ براہ کرم اپنا انٹرنیٹ کنکشن چیک کریں اور دوبارہ کوشش کریں۔'
            : 'Could not load this Surah right now. Please check your internet connection and try again.'
        );
      } finally {
        setIsLoadingSurah(false);
      }
    },
    [lang]
  );

  useEffect(() => {
    void loadSurah(surahNumber);
  }, [surahNumber, loadSurah]);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleEnded = () => {
      setIsPlaying(false);
      setIsAudioLoading(false);
      setAudioIsError(false);
      setAudioStatusMsg(null);
    };

    const handlePlaying = () => {
      setIsAudioLoading(false);
      setIsPlaying(true);
      setAudioIsError(false);
    };

    const handleError = () => {
      const [primaryUrl, fallbackUrl] = QURAN_READER_CONFIG.getAudioUrls(surahNumber);
      if (audioAttemptRef.current === 0 && audio.src === primaryUrl) {
        audioAttemptRef.current = 1;
        audio.src = fallbackUrl;
        void audio.play().catch(() => {
          setIsPlaying(false);
          setIsAudioLoading(false);
          setAudioIsError(true);
          setAudioStatusMsg(
            lang === 'ur'
              ? `تلاوت آڈیو اس وقت دستیاب نہیں ہے: سورۃ ${currentMeta.arabicName} (نیٹ ورک کنکشن چیک کریں)۔`
              : `Recitation audio could not be loaded right now for Surah ${currentMeta.englishName}. Please check your connection and try again.`
          );
        });
        return;
      }

      setIsPlaying(false);
      setIsAudioLoading(false);
      setAudioIsError(true);
      setAudioStatusMsg(
        lang === 'ur'
          ? `تلاوت آڈیو اس وقت دستیاب نہیں ہے: سورۃ ${currentMeta.arabicName} (نیٹ ورک کنکشن چیک کریں)۔`
          : `Recitation audio could not be loaded right now for Surah ${currentMeta.englishName}. Please check your connection and try again.`
      );
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('error', handleError);
    };
  }, [lang, surahNumber, currentMeta]);

  const handleSurahChange = (nextNum: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioAttemptRef.current = 0;
    setIsPlaying(false);
    setIsAudioLoading(false);
    setAudioIsError(false);
    setAudioStatusMsg(null);
    setSurahNumber(nextNum);
  };

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setIsAudioLoading(false);
      setAudioIsError(false);
      setAudioStatusMsg(null);
      return;
    }

    const [primaryUrl] = QURAN_READER_CONFIG.getAudioUrls(surahNumber);
    try {
      audioAttemptRef.current = 0;
      if (audio.src !== primaryUrl) {
        audio.src = primaryUrl;
      }
      setIsAudioLoading(true);
      setAudioIsError(false);
      setAudioStatusMsg(
        lang === 'ur'
          ? `تلاوت لوڈ کی جا رہی ہے: سورۃ ${currentMeta.arabicName} (${QURAN_READER_CONFIG.reciterLabel.ur})...`
          : `Loading recitation for Surah ${currentMeta.englishName} (${QURAN_READER_CONFIG.reciterLabel.en})...`
      );
      await audio.play();
      setIsPlaying(true);
      setIsAudioLoading(false);
      setAudioStatusMsg(
        lang === 'ur'
          ? `تلاوت جاری ہے: سورۃ ${currentMeta.arabicName}`
          : `Playing recitation for Surah ${currentMeta.englishName}`
      );
    } catch {
      // If primary URL rejects immediately, try fallback CDN
      const [, fallbackUrl] = QURAN_READER_CONFIG.getAudioUrls(surahNumber);
      try {
        audioAttemptRef.current = 1;
        audio.src = fallbackUrl;
        await audio.play();
        setIsPlaying(true);
        setIsAudioLoading(false);
        setAudioIsError(false);
        setAudioStatusMsg(
          lang === 'ur'
            ? `تلاوت جاری ہے: سورۃ ${currentMeta.arabicName}`
            : `Playing recitation for Surah ${currentMeta.englishName}`
        );
      } catch {
        setIsPlaying(false);
        setIsAudioLoading(false);
        setAudioIsError(true);
        setAudioStatusMsg(
          lang === 'ur'
            ? `تلاوت کا آڈیو پلے بیک دستیاب نہیں ہو سکا: سورۃ ${currentMeta.arabicName}۔`
            : `Recitation audio playback is currently unavailable for Surah ${currentMeta.englishName}.`
        );
      }
    }
  };

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      {/* Page Header & Controls */}
      <section className="bg-light-surface-container-low border-b border-light-outline-variant py-10">
        <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-6">
          <div className="flex flex-col gap-2 max-w-3xl">
            <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
              {t('rq_badge')}
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
              {t('rq_title')}
            </h1>
            <p className="text-body-lg text-light-on-surface-variant">{t('rq_desc')}</p>
            <p className="text-label-sm text-light-on-surface-variant">
              {QURAN_READER_CONFIG.editionsNote[lang]}
            </p>
          </div>

          {/* Surah Selector & Translation Toggles */}
          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <label className="md:col-span-3 flex flex-col gap-1.5">
              <span className="font-label text-label-lg text-light-on-surface">
                {lang === 'ur' ? 'سورۃ تلاش کریں' : 'Search Surah'}
              </span>
              <input
                type="search"
                value={surahSearch}
                onChange={(e) => setSurahSearch(e.target.value)}
                placeholder={lang === 'ur' ? 'نام یا نمبر (مثلاً 36 یا Yaseen)' : 'Name or number (e.g. 36)'}
                className="w-full rounded-DEFAULT border border-light-outline-variant bg-light-surface px-4 py-2.5 text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary focus:outline-none"
              />
            </label>

            <label className="md:col-span-4 flex flex-col gap-1.5">
              <span className="font-label text-label-lg text-light-on-surface">{t('rq_surah_lbl')}</span>
              <select
                value={surahNumber}
                onChange={(e) => handleSurahChange(Number(e.target.value))}
                className="w-full rounded-DEFAULT border border-light-outline-variant bg-light-surface px-4 py-2.5 text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary focus:outline-none"
              >
                {filteredSurahs.length === 0 ? (
                  <option value={surahNumber}>
                    {surahNumber}. {currentMeta.englishName} — {currentMeta.arabicName}
                  </option>
                ) : (
                  filteredSurahs.map((s) => (
                    <option key={s.number} value={s.number}>
                      {s.number}. {s.englishName} ({s.englishMeaning}) — {s.arabicName}
                    </option>
                  ))
                )}
              </select>
            </label>

            <div className="md:col-span-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showUr}
                    onChange={(e) => setShowUr(e.target.checked)}
                    className="rounded-sm border-light-outline-variant text-light-primary focus:ring-light-primary"
                  />
                  <span className="font-label text-label-lg text-light-on-surface">{t('rq_show_ur')}</span>
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showEn}
                    onChange={(e) => setShowEn(e.target.checked)}
                    className="rounded-sm border-light-outline-variant text-light-primary focus:ring-light-primary"
                  />
                  <span className="font-label text-label-lg text-light-on-surface">{t('rq_show_en')}</span>
                </label>
              </div>

              {/* Audio Recitation Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={isAudioLoading}
                  onClick={toggleAudio}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container disabled:opacity-60 transition-colors duration-state-change"
                >
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                  <span>
                    {isAudioLoading
                      ? lang === 'ur'
                        ? 'لوڈ ہو رہا ہے...'
                        : 'Loading...'
                      : isPlaying
                        ? t('rq_pause')
                        : t('rq_play')}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {audioStatusMsg && (
            <p
              className={
                audioIsError
                  ? 'text-body-md text-light-on-error-container bg-light-error-container border border-light-error rounded-md px-4 py-2.5'
                  : 'text-body-md text-light-secondary bg-accent-soft border border-accent rounded-md px-4 py-2.5'
              }
              role={audioIsError ? 'alert' : 'status'}
            >
              {audioStatusMsg}
            </p>
          )}
        </div>
      </section>

      {/* Surah Display */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-6">
        <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-6 md:p-8 flex flex-col gap-6">
          <div className="text-center border-b border-light-outline-variant pb-5 flex flex-col gap-2">
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
              {surahTitle}
            </h2>
            <p className="text-label-sm text-light-on-surface-variant">
              {lang === 'ur' ? `آیات: ${currentMeta.ayahCount}` : `${currentMeta.ayahCount} Ayahs`}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <button
                type="button"
                disabled={surahNumber <= 1}
                onClick={() => handleSurahChange(Math.max(1, surahNumber - 1))}
                className="px-3 py-1.5 rounded-DEFAULT border border-light-outline-variant text-label-sm font-label text-light-primary hover:border-light-primary disabled:opacity-40"
              >
                {lang === 'ur' ? 'پچھلی سورۃ' : '← Previous Surah'}
              </button>
              <div className="inline-flex items-center rounded-DEFAULT border border-light-outline-variant bg-light-surface p-0.5" role="group" aria-label={lang === 'ur' ? 'عربی خط کا سائز' : 'Arabic text size'}>
                {(['sm', 'md', 'lg'] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setArabicSize(sz)}
                    className={
                      arabicSize === sz
                        ? 'px-2.5 py-1 rounded-sm bg-light-primary text-light-on-primary text-label-sm font-label'
                        : 'px-2.5 py-1 rounded-sm text-light-on-surface-variant text-label-sm font-label hover:text-light-primary'
                    }
                  >
                    {sz === 'sm' ? (lang === 'ur' ? 'چھوٹا' : 'A-') : sz === 'md' ? (lang === 'ur' ? 'درمیانہ' : 'A') : (lang === 'ur' ? 'بڑا' : 'A+')}
                  </button>
                ))}
              </div>
              <button
                type="button"
                disabled={surahNumber >= 114}
                onClick={() => handleSurahChange(Math.min(114, surahNumber + 1))}
                className="px-3 py-1.5 rounded-DEFAULT border border-light-outline-variant text-label-sm font-label text-light-primary hover:border-light-primary disabled:opacity-40"
              >
                {lang === 'ur' ? 'اگلی سورۃ' : 'Next Surah →'}
              </button>
            </div>
            {surahNumber !== 1 && surahNumber !== 9 && (
              <p className="font-arabic text-title-lg text-light-secondary pt-1" dir="rtl" lang="ar">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
            )}
          </div>

          {isLoadingSurah ? (
            <div className="py-12 text-center text-body-lg text-light-on-surface-variant" role="status">
              {lang === 'ur' ? 'سورۃ لوڈ کی جا رہی ہے...' : 'Loading Surah text and translations...'}
            </div>
          ) : surahError ? (
            <div
              className="rounded-lg bg-light-error-container border border-light-error p-6 text-center flex flex-col items-center gap-3"
              role="alert"
            >
              <p className="text-body-md text-light-on-error-container">{surahError}</p>
              <button
                type="button"
                onClick={() => void loadSurah(surahNumber)}
                className="px-4 py-2 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container"
              >
                {lang === 'ur' ? 'دوبارہ کوشش کریں' : 'Try Again'}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {ayahs.map((ayah) => (
                <article
                  key={ayah.num}
                  className="border border-light-outline-variant rounded-lg p-5 bg-light-surface flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent-soft text-light-secondary border border-accent flex items-center justify-center shrink-0 font-label text-label-sm tabular-nums">
                      {ayah.num}
                    </span>
                    <p
                      className={`font-arabic text-light-primary text-end flex-1 ${
                        arabicSize === 'sm'
                          ? 'text-title-lg'
                          : arabicSize === 'lg'
                            ? 'text-display-lg-mobile md:text-headline-lg'
                            : 'text-headline-md'
                      }`}
                      dir="rtl"
                      lang="ar"
                    >
                      {ayah.ar}
                    </p>
                  </div>

                  {showUr && (
                    <p className="text-body-md text-light-on-surface border-t border-light-outline-variant pt-2.5" dir="rtl">
                      {ayah.ur}
                    </p>
                  )}

                  {showEn && (
                    <p className="text-body-md text-light-on-surface-variant" dir="ltr">
                      {ayah.en}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Study With a Teacher CTA */}
        <div className="bg-light-primary text-light-on-primary rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-headline text-headline-md">{t('rq_cta_title')}</h3>
            <p className="text-body-md text-light-on-primary-container">{t('rq_cta_desc')}</p>
          </div>
          <a
            href={`${ROUTES.freeTrial}?course=${encodeURIComponent('Nazra Quran')}`}
            onClick={(e) => go(e, `${ROUTES.freeTrial}?course=${encodeURIComponent('Nazra Quran')}`)}
            className="px-6 py-3 rounded-DEFAULT bg-light-surface-container-lowest text-light-primary font-label text-label-lg hover:bg-accent-soft transition-colors duration-state-change shrink-0"
          >
            {t('nav_cta')}
          </a>
        </div>
      </section>
    </>
  );
}
