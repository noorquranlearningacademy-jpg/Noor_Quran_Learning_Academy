import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { saveTrialSubmission } from '../data/academy';

const VALID_COURSES: string[] = [
  'Noorani Qaida',
  'Nazra Quran',
  'Hifz-ul-Quran',
  'Quran with Tajweed',
  'Quran with Urdu Translation',
  'Quran with English Translation',
  'Quran Tafseer',
];

const COURSE_LABELS_UR: Record<string, string> = {
  'Noorani Qaida': 'نورانی قاعدہ',
  'Nazra Quran': 'ناظرہ قرآن',
  'Hifz-ul-Quran': 'حفظِ قرآن',
  'Quran with Tajweed': 'قرآن مع تجوید',
  'Quran with Urdu Translation': 'قرآن مع اردو ترجمہ',
  'Quran with English Translation': 'قرآن مع انگریزی ترجمہ',
  'Quran Tafseer': 'تفسیرِ قرآن',
};

export function FreeTrialBookingPage() {
  const { lang, t, searchParams } = useApp();
  const formRef = useRef<HTMLFormElement>(null);

  const initialCourseParam = searchParams.get('course') || '';
  const initialTeacherParam = searchParams.get('teacher') || '';

  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [parentName, setParentName] = useState('');
  const [country, setCountry] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(
    VALID_COURSES.includes(initialCourseParam) ? initialCourseParam : 'Noorani Qaida'
  );
  const [preferredLanguage, setPreferredLanguage] = useState(lang === 'ur' ? 'Urdu' : 'English');
  const [preferredTeacher, setPreferredTeacher] = useState(
    initialTeacherParam === 'Male' || initialTeacherParam === 'Female' ? initialTeacherParam : 'Female'
  );
  const [classType, setClassType] = useState('One-to-One');
  const [preferredDays, setPreferredDays] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [preferredApp, setPreferredApp] = useState('WhatsApp');
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);

  const [submittedOnce, setSubmittedOnce] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successId, setSuccessId] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const cParam = searchParams.get('course');
    if (cParam && VALID_COURSES.includes(cParam)) {
      setCourse(cParam);
    }
    const tParam = searchParams.get('teacher');
    if (tParam === 'Male' || tParam === 'Female') {
      setPreferredTeacher(tParam);
    }
  }, [searchParams]);

  const inputClass = (fieldName: string) =>
    `w-full rounded-DEFAULT border ${
      invalidFields[fieldName] ? 'border-light-error' : 'border-light-outline-variant'
    } bg-light-surface-container-lowest px-4 py-2.5 text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary focus:outline-none`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmittedOnce(true);
    setServerError(null);

    const form = formRef.current;
    if (!form) return;

    const nextInvalid: Record<string, boolean> = {};
    const elements = Array.from(form.elements) as Array<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >;
    let firstInvalidEl:
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | null = null;

    for (const el of elements) {
      if (el.willValidate && !el.checkValidity()) {
        if (el.name) nextInvalid[el.name] = true;
        if (!firstInvalidEl) firstInvalidEl = el;
      }
    }

    setInvalidFields(nextInvalid);

    if (!form.checkValidity()) {
      setHasError(true);
      setSuccessId(null);
      firstInvalidEl?.focus();
      return;
    }

    setHasError(false);
    setIsSubmitting(true);

    const payload = {
      studentName: studentName.trim(),
      studentAge: studentAge.trim(),
      parentName: parentName.trim(),
      country: country.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim(),
      course,
      preferredLanguage,
      preferredTeacher,
      classType,
      preferredDays: preferredDays.trim(),
      preferredTime: preferredTime.trim(),
      preferredApp,
      notes: notes.trim(),
    };

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, lang }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        id?: string;
        submittedAt?: string;
        error?: string;
      } | null;

      if (!res.ok || !data?.ok || !data.id) {
        setServerError(
          data?.error ||
            (lang === 'ur'
              ? 'درخواست محفوظ نہیں ہو سکی۔ براہ کرم دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔'
              : 'Unable to submit booking right now. Please try again or contact us via WhatsApp.')
        );
        return;
      }

      const saved = saveTrialSubmission({
        ...payload,
        id: data.id,
        submittedAt: data.submittedAt,
      });
      setSuccessId(saved.id);
      setInvalidFields({});
      setStudentName('');
      setStudentAge('');
      setParentName('');
      setCountry('');
      setWhatsapp('');
      setEmail('');
      setPreferredDays('');
      setPreferredTime('');
      setNotes('');
      setConsent(false);
      setSubmittedOnce(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setServerError(
        lang === 'ur'
          ? 'نیٹ ورک کنکشن کا مسئلہ پیش آیا ہے۔ براہ کرم دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔'
          : 'Network error while submitting your booking. Please try again or reach us via WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-[1200px] mx-auto px-gutter-md md:px-page-margin grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Booking Form */}
        <section className="lg:col-span-8 bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 md:p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="inline-flex self-start px-3 py-1 rounded-full bg-accent-soft text-light-secondary border border-accent font-label text-label-sm">
              {t('badge_trial')}
            </span>
            <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-primary">
              {t('ft_title')}
            </h1>
            <p className="text-body-md text-light-on-surface-variant">{t('ft_desc')}</p>
          </div>

          {/* Notice Banner */}
          <div className="rounded-md bg-light-surface-container-low border border-light-outline-variant p-4 flex items-start gap-3">
            <span className="material-symbols-outlined text-light-secondary mt-0.5" aria-hidden="true">
              info
            </span>
            <p className="text-body-md text-light-on-surface-variant">{t('notice_text')}</p>
          </div>

          {/* Success Message */}
          {successId && (
            <div
              className="rounded-md bg-light-surface-variant border border-light-primary p-5 flex items-start gap-3"
              role="status"
            >
              <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                check_circle
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-title text-title-md text-light-primary">
                  {t('succ_title')} ({successId})
                </p>
                <p className="text-body-md text-light-on-surface">{t('succ_desc')}</p>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_student_name')}</span>
                <input
                  name="studentName"
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.studentName ? 'true' : undefined}
                  placeholder={lang === 'ur' ? 'طالب علم کا مکمل نام' : 'Full name of student'}
                  className={inputClass('studentName')}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_student_age')}</span>
                <input
                  name="studentAge"
                  type="number"
                  min={3}
                  max={99}
                  required
                  value={studentAge}
                  onChange={(e) => setStudentAge(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.studentAge ? 'true' : undefined}
                  placeholder={lang === 'ur' ? 'مثلاً 9' : 'e.g., 9'}
                  className={inputClass('studentAge')}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_parent_name')}</span>
                <input
                  name="parentName"
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder={lang === 'ur' ? 'والدین یا سرپرست کا نام' : 'Parent or guardian name'}
                  className={inputClass('parentName')}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_country')}</span>
                <input
                  name="country"
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.country ? 'true' : undefined}
                  placeholder={lang === 'ur' ? 'پاکستان، برطانیہ، امریکہ، کینیڈا وغیرہ' : 'Pakistan, UK, USA, Canada, etc.'}
                  className={inputClass('country')}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_whatsapp')}</span>
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.whatsapp ? 'true' : undefined}
                  placeholder="+92 3XX XXXXXXX"
                  dir="ltr"
                  className={inputClass('whatsapp')}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_email')}</span>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.email ? 'true' : undefined}
                  placeholder="you@example.com"
                  dir="ltr"
                  className={inputClass('email')}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_course')}</span>
                <select
                  name="course"
                  required
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className={inputClass('course')}
                >
                  {VALID_COURSES.map((c) => (
                    <option key={c} value={c}>
                      {lang === 'ur' ? COURSE_LABELS_UR[c] ?? c : c}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_lang')}</span>
                <select
                  name="preferredLanguage"
                  required
                  value={preferredLanguage}
                  onChange={(e) => setPreferredLanguage(e.target.value)}
                  className={inputClass('preferredLanguage')}
                >
                  <option value="English">{lang === 'ur' ? 'انگریزی (English)' : 'English'}</option>
                  <option value="Urdu">{lang === 'ur' ? 'اردو (Urdu)' : 'Urdu'}</option>
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_teacher')}</span>
                <select
                  name="preferredTeacher"
                  required
                  value={preferredTeacher}
                  onChange={(e) => setPreferredTeacher(e.target.value)}
                  className={inputClass('preferredTeacher')}
                >
                  <option value="Female">{lang === 'ur' ? 'خاتون استاد' : 'Female Teacher'}</option>
                  <option value="Male">{lang === 'ur' ? 'مرد استاد' : 'Male Teacher'}</option>
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_class_type')}</span>
                <select
                  name="classType"
                  required
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                  className={inputClass('classType')}
                >
                  <option value="One-to-One">
                    {lang === 'ur' ? 'انفرادی کلاس (One-to-One)' : 'One-to-One (Private)'}
                  </option>
                  <option value="Group">
                    {lang === 'ur' ? 'گروپ کلاس (زیادہ سے زیادہ 4 طلبہ)' : 'Group Class (Max 4 Students)'}
                  </option>
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_days')}</span>
                <input
                  name="preferredDays"
                  type="text"
                  required
                  value={preferredDays}
                  onChange={(e) => setPreferredDays(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.preferredDays ? 'true' : undefined}
                  placeholder={
                    lang === 'ur'
                      ? 'مثلاً پیر تا جمعرات (یا جمعہ تا اتوار کی درخواست)'
                      : 'e.g., Mon–Thu (or note Fri–Sun request)'
                  }
                  className={inputClass('preferredDays')}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-lg text-light-on-surface">{t('f_time')}</span>
                <input
                  name="preferredTime"
                  type="text"
                  required
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  aria-invalid={submittedOnce && invalidFields.preferredTime ? 'true' : undefined}
                  placeholder={lang === 'ur' ? 'مثلاً شام 5 بجے UK / رات 9 بجے پاکستان' : 'e.g., 5:00 PM UK / 9:00 PM PKT'}
                  className={inputClass('preferredTime')}
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-lg text-light-on-surface">{t('f_app')}</span>
              <select
                name="preferredApp"
                required
                value={preferredApp}
                onChange={(e) => setPreferredApp(e.target.value)}
                className={inputClass('preferredApp')}
              >
                <option value="WhatsApp">{lang === 'ur' ? 'واٹس ایپ (WhatsApp)' : 'WhatsApp'}</option>
                <option value="IMO">{lang === 'ur' ? 'ایمو (IMO)' : 'IMO'}</option>
                <option value="Zoom">{lang === 'ur' ? 'زوم (Zoom)' : 'Zoom'}</option>
                <option value="Google Meet">{lang === 'ur' ? 'گوگل میٹ (Google Meet)' : 'Google Meet'}</option>
                <option value="Other">{lang === 'ur' ? 'دیگر' : 'Other'}</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-lg text-light-on-surface">{t('f_notes')}</span>
              <textarea
                name="notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  lang === 'ur'
                    ? 'کلاس کے دورانیے کی ترجیح (معیاری 1 گھنٹہ یا کم/زیادہ)، ناظرہ کے ساتھ تجوید، یا کوئی خاص ہدایت درج کریں۔'
                    : 'Mention class duration preference (standard 1 hour, or shorter/longer), Tajweed with Nazra, or any specific needs.'
                }
                className={inputClass('notes')}
              />
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                name="consent"
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                aria-invalid={submittedOnce && invalidFields.consent ? 'true' : undefined}
                className={`mt-1 rounded-sm ${
                  invalidFields.consent ? 'border-light-error' : 'border-light-outline-variant'
                } text-light-primary focus:ring-light-primary`}
              />
              <span className="text-body-md text-light-on-surface-variant">{t('f_consent')}</span>
            </label>

            {hasError && (
              <p className="text-body-md text-light-error" role="alert">
                {t('ft_err_msg')}
              </p>
            )}

            {serverError && (
              <p className="text-body-md text-light-error" role="alert">
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container disabled:opacity-60 transition-colors duration-state-change"
            >
              <span>
                {isSubmitting
                  ? lang === 'ur'
                    ? 'درخواست بھیجی جا رہی ہے...'
                    : 'Submitting Request...'
                  : t('btn_submit')}
              </span>
            </button>
          </form>
        </section>

        {/* Sidebar Class System Summary */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-6 flex flex-col gap-4">
            <h2 className="font-headline text-headline-md text-light-primary">{t('side_title')}</h2>
            <ul className="flex flex-col gap-3 text-body-md text-light-on-surface-variant">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                  calendar_month
                </span>
                <span>{t('side_1')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                  schedule
                </span>
                <span>{t('side_2')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                  group
                </span>
                <span>{t('side_3')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-light-primary mt-0.5" aria-hidden="true">
                  videocam
                </span>
                <span>{t('side_4')}</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
