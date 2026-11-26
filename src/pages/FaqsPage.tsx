import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ROUTES } from '../data/academy';

type FaqCategory = 'all' | 'courses' | 'teachers' | 'schedule' | 'fees';

interface FaqEntry {
  id: number;
  category: Exclude<FaqCategory, 'all'>;
}

const FAQ_ITEMS: FaqEntry[] = [
  { id: 1, category: 'courses' },
  { id: 2, category: 'courses' },
  { id: 3, category: 'teachers' },
  { id: 4, category: 'teachers' },
  { id: 5, category: 'schedule' },
  { id: 6, category: 'schedule' },
  { id: 7, category: 'fees' },
];

const CATEGORIES: Array<{ key: FaqCategory; labelKey: string }> = [
  { key: 'all', labelKey: 'faq_cat_all' },
  { key: 'courses', labelKey: 'faq_cat_courses' },
  { key: 'teachers', labelKey: 'faq_cat_teachers' },
  { key: 'schedule', labelKey: 'faq_cat_schedule' },
  { key: 'fees', labelKey: 'faq_cat_fees' },
];

export function FaqsPage() {
  const { t, navigate } = useApp();
  const [category, setCategory] = useState<FaqCategory>('all');

  const visibleFaqs = FAQ_ITEMS.filter((item) =>
    category === 'all' ? true : item.category === category
  );

  const go = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      <section className="bg-light-surface-container-low border-b border-light-outline-variant py-12 md:py-16">
        <div className="max-w-[960px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-4">
          <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
            {t('faq_badge')}
          </span>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-primary">
            {t('faq_page_title')}
          </h1>
          <p className="text-body-lg text-light-on-surface-variant max-w-prose">{t('faq_page_desc')}</p>
        </div>
      </section>

      <section className="py-section max-w-[960px] mx-auto px-gutter-md md:px-page-margin flex flex-col gap-6">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
          {CATEGORIES.map((cat) => {
            const active = category === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(cat.key)}
                className={
                  active
                    ? 'px-4 py-2 rounded-full bg-light-primary text-light-on-primary font-label text-label-lg'
                    : 'px-4 py-2 rounded-full bg-light-surface-container-lowest border border-light-outline-variant text-light-on-surface-variant font-label text-label-lg hover:border-light-primary'
                }
              >
                {t(cat.labelKey)}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          {visibleFaqs.map((item, idx) => (
            <details
              key={item.id}
              open={idx === 0}
              className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-5"
            >
              <summary className="font-title text-title-md text-light-primary cursor-pointer">
                {t(`fq${item.id}_q`)}
              </summary>
              <p className="mt-3 text-body-md text-light-on-surface-variant">{t(`fq${item.id}_a`)}</p>
            </details>
          ))}
        </div>

        <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
          <div>
            <h2 className="font-title text-title-lg text-light-primary">{t('faq_cta_t')}</h2>
            <p className="text-body-md text-light-on-surface-variant">{t('faq_cta_d')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={ROUTES.contact}
              onClick={(e) => go(e, ROUTES.contact)}
              className="px-5 py-2.5 rounded-DEFAULT border border-light-outline-variant text-light-primary font-label text-label-lg hover:border-light-primary"
            >
              {t('nav_contact')}
            </a>
            <a
              href={ROUTES.freeTrial}
              onClick={(e) => go(e, ROUTES.freeTrial)}
              className="px-5 py-2.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container"
            >
              {t('nav_cta')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
