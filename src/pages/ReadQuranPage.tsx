import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ROUTES, SURAH_DATA, type SurahKey } from '../data/academy';

const SURAH_KEYS: SurahKey[] = ['fatiha', 'ikhlas', 'falaq', 'nas'];

export function ReadQuranPage() {
  const { lang, t, navigate } = useApp();
  const [surahKey, setSurahKey] = useState<SurahKey>('fatiha');
  const [showUr, setShowUr] = useState(true);
  const [showEn, setShowEn] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioStatusMsg, setAudioStatusMsg] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const surah = SURAH_DATA[surahKey];

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleEnded = () => {
      setIsPlaying(false);
      setAudioStatusMsg(null);
    };

    const handleError = () => {
      setIsPlaying(false);
      setAudioStatusMsg(
        lang === 'ur'
          ? `تلاوت آڈیو اس وقت دستیاب نہیں ہے: ${SURAH_DATA[surahKey].title} (نیٹ ورک کنکشن چیک کریں)۔`
          : `Recitation audio could not be loaded right now for ${SURAH_DATA[surahKey].title}. Please check your connection and try again.`
      );
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [lang, surahKey]);

  const handleSurahChange = (nextKey: SurahKey) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setAudioStatusMsg(null);
    setSurahKey(nextKey);
  };

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setAudioStatusMsg(null);
      return;
    }

    try {
      if (audio.src !== surah.audioUrl) {
        audio.src = surah.audioUrl;
      }
      setAudioStatusMsg(
        lang === 'ur'
          ? `تلاوت لوڈ اور جاری کی جا رہی ہے: ${surah.title}`
          : `Playing recitation for ${surah.title}`
      );
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
      setAudioStatusMsg(
        lang === 'ur'
          ? `تلاوت کا آڈیو پلے بیک دستیاب نہیں ہو سکا: ${surah.title}۔`
          : `Recitation audio playback is currently unavailable for ${surah.title}.`
      );
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
          </div>

          {/* Surah Selector & Translation Toggles */}
          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <label className="md:col-span-5 flex flex-col gap-1.5">
              <span className="font-label text-label-lg text-light-on-surface">{t('rq_surah_lbl')}</span>
              <select
                value={surahKey}
                onChange={(e) => handleSurahChange(e.target.value as SurahKey)}
                className="w-full rounded-DEFAULT border border-light-outline-variant bg-light-surface px-4 py-2.5 text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary focus:outline-none"
              >
                {SURAH_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {SURAH_DATA[key].optionLabel}
                  </option>
                ))}
              </select>
            </label>

            <div className="md:col-span-7 flex flex-wrap items-center justify-between gap-3">
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
                  onClick={toggleAudio}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
                >
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                  <span>{isPlaying ? t('rq_pause') : t('rq_play')}</span>
                </button>
              </div>
            </div>
          </div>

          {audioStatusMsg && (
            <p
              className="text-body-md text-light-secondary bg-accent-soft border border-accent rounded-md px-4 py-2.5"
              role="status"
            >
              {audioStatusMsg}
            </p>
          )}
        </div>
      </section>

      {/* Surah Display */}
      <section className="py-section max-w-[1200px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-6">
        <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-6 md:p-8 flex flex-col gap-6">
          <div className="text-center border-b border-light-outline-variant pb-5 flex flex-col gap-1">
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
              {surah.title}
            </h2>
            <p className="font-arabic text-title-lg text-light-secondary" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {surah.ayahs.map((ayah) => (
              <article
                key={ayah.num}
                className="border border-light-outline-variant rounded-lg p-5 bg-light-surface flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent-soft text-light-secondary border border-accent flex items-center justify-center shrink-0 font-label text-label-sm tabular-nums">
                    {ayah.num}
                  </span>
                  <p className="font-arabic text-headline-md text-light-primary text-end flex-1" dir="rtl" lang="ar">
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
