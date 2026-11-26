import type { Language } from './academy';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Shared Header & Footer
    brand_name: 'Noor Quran',
    brand_sub: 'Learning Academy',
    nav_home: 'Home',
    nav_courses: 'Courses',
    nav_all_courses: 'All Courses',
    nav_learning: 'Quran Learning',
    nav_read_quran: 'Read Quran',
    nav_tafseer: 'Quran Tafseer',
    nav_online: 'Online Classes',
    nav_home_tuition: 'Home Tuition',
    nav_teachers: 'Teachers',
    nav_about: 'About Us',
    nav_fees: 'Fee Info',
    nav_contact: 'Contact',
    nav_cta: 'Book Free Trial',
    nav_dashboard: 'Student Dashboard (Planned)',
    nav_privacy: 'Privacy Policy',
    nav_terms: 'Terms & Conditions',
    footer_brand: 'Noor Quran Learning Academy',
    footer_tagline: 'Learn the Quran. Understand the Quran. Live by the Quran.',
    footer_schedule: 'Regular Schedule: 4 days/week (1 hour standard). Fri–Sun off (by mutual arrangement only).',
    footer_col_academy: 'Academy',
    footer_col_learning: 'Quran Learning & Support',
    footer_contact_title: 'Contact & Legal',

    // Home Page
    hero_badge: '3-Day Free Trial • Urdu & English',
    hero_title: 'Learn the Quran. Understand the Quran. Live by the Quran.',
    hero_desc:
      'Noor Quran Learning Academy provides calm, structured online Quran classes for children and adults in Pakistan, the UK, USA, Canada, Europe, and worldwide—taught by dedicated male and female teachers.',
    hero_cta_primary: 'Book Your 3-Day Free Trial',
    hero_cta_secondary: 'Explore Our Courses',
    stat_1_title: '1-on-1 & Group',
    stat_1_sub: 'Max 4 students in groups',
    stat_2_title: '4 Days / Week',
    stat_2_sub: '1-hour standard session',
    stat_3_title: 'Male & Female',
    stat_3_sub: 'Dedicated Quran teachers',
    teachers_intro_title: 'Dedicated Male & Female Quran Teachers',
    teachers_intro_desc:
      'We understand how important comfort and trust are for families. Noor Quran Learning Academy currently offers instruction with one male teacher and two female teachers, allowing parents, sisters, and adult learners to choose their preferred teacher in Urdu or English.',
    teacher_male_label: '1 Male Teacher',
    teacher_male_desc: 'Available for online classes worldwide and select local home tuition inquiries.',
    teacher_female_label: '2 Female Teachers',
    teacher_female_desc: 'Focused on online Quran education for children, sisters, and families.',
    teachers_intro_link: 'View Teacher Profiles & Preferences',
    courses_sec_title: 'Structured Quran Courses',
    courses_sec_desc:
      'From foundational Noorani Qaida for young beginners to Tajweed, Hifz, Translation, and Tafseer.',
    courses_view_all: 'Explore All 7 Courses',
    home_c1_title: 'Noorani Qaida & Nazra',
    home_c1_desc:
      'Step-by-step Arabic letter recognition, Makharij, and fluent Quran reading for children and beginners.',
    c_level_beg: 'Beginners & Children',
    home_c2_title: 'Quran with Tajweed',
    home_c2_desc:
      'Master proper articulation and recitation rules—offered as a standalone course or paired with Nazra Quran.',
    c_level_all: 'All Ages',
    home_c3_title: 'Hifz, Translation & Tafseer',
    home_c3_desc:
      'Guided Quran memorization, Urdu or English translation, and deeper understanding through Quran Tafseer.',
    c_level_int: 'Youth & Adults',
    benefits_title: 'Why Families Choose Noor Quran',
    b1_title: 'Consistent 4-Day Weekly Rhythm',
    b1_desc:
      'Regular classes run 4 days a week for 1 hour (adjustable by need). Friday, Saturday, and Sunday are off days, with optional arrangement if both student and teacher agree.',
    b2_title: 'One-to-One or Small Groups (Max 4)',
    b2_desc:
      'Choose private individual instruction or small group classes capped at four students so every learner receives direct attention.',
    b3_title: 'Bilingual Instruction in Urdu & English',
    b3_desc:
      'Clear explanations tailored for students in Pakistan as well as international families in the UK, USA, Canada, and Europe.',
    how_title: 'How Online Classes & Free Trial Work',
    h1_title: 'Request Your 3-Day Free Trial',
    h1_desc:
      'Complete the booking form with your preferred course, language (Urdu or English), teacher preference, and time.',
    h2_title: 'Academy Confirms Availability',
    h2_desc:
      'Submitting a form does not auto-book a slot. Our coordinator contacts you via WhatsApp or email to confirm teacher availability and share your class details.',
    h3_title: 'Join via WhatsApp, IMO, Zoom, or Google Meet',
    h3_desc:
      'Attend your three complimentary trial sessions on the platform most convenient for your family before deciding to enroll.',
    ayah_badge: 'Quran Ayah of the Day',
    ayah_link: 'Read Quran with Translation & Audio →',
    ayah_en:
      '“And We have certainly made the Quran easy for remembrance, so is there any who will remember?”',
    ayah_ref: 'Surah Al-Qamar (54:17)',
    test_badge: 'Placeholder Section — Verified Reviews Coming Soon',
    test_title: 'Student & Parent Testimonials',
    test_desc:
      'We only publish genuine feedback from real parents and students. These placeholders are reserved for verified testimonials as they are submitted.',
    test_p1: '“[Placeholder for genuine parent feedback on children\'s Noorani Qaida and Nazra progress.]”',
    test_a1: 'Parent Testimonial Placeholder',
    test_l1: 'Location & Course — Pending',
    test_p2: '“[Placeholder for genuine adult student feedback on Tajweed and Urdu/English Quran translation.]”',
    test_a2: 'Adult Learner Placeholder',
    test_l2: 'Location & Course — Pending',
    test_p3: '“[Placeholder for genuine international family feedback on flexible scheduling and teacher support.]”',
    test_a3: 'International Family Placeholder',
    test_l3: 'Location & Course — Pending',
    home_faq_title: 'Frequently Asked Questions',
    home_faq_desc: 'Clear answers about schedules, platforms, and our free trial process.',
    home_faq_q1: 'What is the regular weekly schedule and class duration?',
    home_faq_a1:
      'Regular classes are held four days per week, with a standard duration of one hour. Friday, Saturday, and Sunday are regular off days, though classes can be arranged on those days if both student and teacher agree. Shorter or longer sessions can also be requested.',
    home_faq_q2: 'Which apps are used for online classes?',
    home_faq_a2:
      'You can choose WhatsApp, IMO, Zoom, or Google Meet. Once our coordinator confirms your schedule and teacher, we send your class details directly to your WhatsApp or email.',
    home_faq_q3: 'How do I find out the monthly fee?',
    home_faq_a3:
      "Fees depend on the selected course, one-to-one or group format, student's country, weekly schedule, and class duration. Please contact us via WhatsApp or email for personalized fee details.",
    home_faq_q4: 'Is home tuition available?',
    home_faq_a4:
      'Home tuition inquiries are available through male teachers only, subject to your location and teacher availability.',
    cta_banner_title: 'Ready to Begin Your 3-Day Free Trial?',
    cta_banner_desc:
      'Reach out to confirm teacher availability in Urdu or English for yourself or your children.',

    // Courses Page
    courses_badge: 'Urdu & English • 1-on-1 or Small Groups',
    courses_title: 'Our Quran Courses',
    courses_desc:
      'Seven structured programs for children and adults. Tajweed may be taken as a dedicated course or integrated alongside Nazra Quran depending on your goals.',
    view_details: 'View Details',
    book_btn: 'Book Free Trial',
    c1_level: 'Suitable for: Young Children & Beginners',
    c1_name: 'Noorani Qaida',
    c1_desc:
      'Foundational course teaching Arabic letters, vowels (Harakat), joining rules, and correct pronunciation from the very first lesson.',
    c1_b1: 'Builds strong Makharij habits early',
    c1_b2: 'Patient, child-friendly pacing',
    c2_level: 'Suitable for: Children & Adults',
    c2_name: 'Nazra Quran',
    c2_desc:
      'Complete Quran reading from Juz 1 to Juz 30 with steady teacher correction. Can be paired with Tajweed rules upon request.',
    c2_b1: 'Develops fluent, confident recitation',
    c2_b2: 'Optional integrated Tajweed guidance',
    c3_level: 'Suitable for: Dedicated Children & Adults',
    c3_name: 'Hifz-ul-Quran',
    c3_desc:
      'Structured Quran memorization (full Quran or selected Surahs) with daily Sabaq, Sabqi, and Manzil revision tracking.',
    c3_b1: 'Systematic daily revision cycle',
    c3_b2: 'Personalized memorization targets',
    c4_level: 'Suitable for: All Levels (Separate or with Nazra)',
    c4_name: 'Quran with Tajweed',
    c4_desc:
      'Focused study of Noon Sakinah, Meem Sakinah, Madd, Qalqalah, and Makharij—offered separately or alongside Nazra Quran.',
    c4_b1: 'Practical recitation correction',
    c4_b2: 'Flexible standalone or combined track',
    c5_level: 'Suitable for: Urdu-Speaking Youth & Adults',
    c5_name: 'Quran with Urdu Translation',
    c5_desc:
      'Word-by-word and contextual Urdu translation so students understand the direct message of the verses they recite.',
    c5_b1: 'Clear Urdu vocabulary & meaning',
    c5_b2: 'Connects daily Salah with understanding',
    c6_level: 'Suitable for: English-Speaking Youth & Adults',
    c6_name: 'Quran with English Translation',
    c6_desc:
      'Accessible English translation designed for international students in the UK, USA, Canada, Europe, and English-medium learners.',
    c6_b1: 'Natural, accurate English rendering',
    c6_b2: 'Ideal for diaspora families',
    c7_level: 'Suitable for: Adults & Advanced Learners',
    c7_name: 'Quran Tafseer',
    c7_desc:
      'In-depth explanation of Quranic verses, historical context (Asbab al-Nuzul), and practical guidance for applying the Quran in daily life—available in Urdu or English.',
    c7_b1: 'Contextual verse-by-verse study',
    c7_b2: '1-on-1 or small group discussion (max 4)',

    // Course Detail Page
    back_courses: 'Back to All Courses',
    cd_what_title: 'What Students Will Learn',
    cd_benefits_title: 'Key Course Benefits',
    cd_format_title: 'Class Format & Schedule',
    cd_lbl_days: 'Weekly Schedule',
    cd_val_days: '4 Days / Week',
    cd_lbl_dur: 'Duration',
    cd_val_dur: '1 Hour (Adjustable)',
    cd_lbl_mode: 'Class Type',
    cd_val_mode: '1-on-1 or Group (Max 4)',
    cd_lbl_lang: 'Languages',
    cd_val_lang: 'Urdu & English',
    cd_lbl_teachers: 'Teachers',
    cd_val_teachers: 'Male & Female',
    cd_book_btn: 'Book 3-Day Free Trial',
    cd_fee_btn: 'Request Fee Details',

    // Read Quran Page
    rq_badge: 'Arabic • Urdu Translation • English Translation',
    rq_title: 'Read the Holy Quran',
    rq_desc:
      'Select a Surah below to read the Arabic text alongside Urdu and English translations, with interactive recitation playback controls.',
    rq_surah_lbl: 'Select Surah',
    rq_show_ur: 'Urdu Translation',
    rq_show_en: 'English Translation',
    rq_play: 'Play Recitation',
    rq_pause: 'Pause Recitation',
    rq_cta_title: 'Want to Recite with Proper Tajweed?',
    rq_cta_desc: 'Book a 3-day free trial with our male or female Quran teachers in Urdu or English.',

    // Quran Tafseer Page
    tf_badge: 'Adults & Youth • Urdu or English',
    tf_title: 'Quran Tafseer Program',
    tf_desc:
      'Go beyond recitation to understand the context, wisdom, and practical application of the Holy Quran in everyday life—taught in Urdu or English through one-to-one or small group classes.',
    tf_cta: 'Book Tafseer Free Trial',
    tf_read_btn: 'Read Quran Online',
    tf_tracks_title: 'Available Tafseer Learning Options',
    tf_tracks_desc: 'Choose a pace and scope that fits your schedule and background.',
    tf_t1_title: 'Selected Surahs Tafseer',
    tf_t1_desc:
      'Focused study of frequently recited chapters such as Juz Amma, Surah Yaseen, Surah Al-Kahf, and Surah Al-Mulk.',
    tf_t2_title: 'Complete Quran Tafseer',
    tf_t2_desc:
      'Systematic verse-by-verse study from Surah Al-Fatiha onward, covering Asbab al-Nuzul and core Quranic themes.',
    tf_t3_title: '1-on-1 or Small Group (Max 4)',
    tf_t3_desc:
      'Study privately with a dedicated male or female teacher, or join a small discussion group capped at four students.',

    // Teachers Page
    t_badge: 'Generic Profiles — Details To Be Confirmed',
    t_title: 'Our Quran Teachers',
    t_desc:
      'Noor Quran Learning Academy currently has one male teacher and two female teachers. Specific teacher names, qualifications, and photographs are currently set to "To be confirmed" until official profiles are finalized.',
    pref_title: 'Choose Your Preferred Teacher',
    pref_desc:
      'Filter profiles below or specify Male / Female teacher preference directly in your Free Trial Booking.',
    f_all: 'All (3)',
    f_male: 'Male Teacher (1)',
    f_female: 'Female Teachers (2)',
    photo_ph: 'Photo Placeholder',
    g_male: 'Male',
    g_female: 'Female',
    t1_name: 'Male Quran Teacher',
    t2_name: 'Female Quran Teacher 1',
    t3_name: 'Female Quran Teacher 2',
    lbl_qual: 'Qualifications',
    lbl_exp: 'Experience',
    lbl_lang: 'Languages',
    lbl_courses: 'Courses Taught',
    lbl_ages: 'Age Groups',
    lbl_time: 'Available Timings',
    val_pending: 'To be confirmed',
    val_lang: 'Urdu & English',
    val_courses_m: 'Qaida, Nazra, Tajweed, Hifz, Translation, Tafseer',
    val_courses_f1: 'Qaida, Nazra, Tajweed, Hifz, Translation',
    val_courses_f2: 'Qaida, Nazra, Tajweed, Translation, Tafseer',
    val_ages_all: 'Children & Adults',
    val_ages_sis: 'Children & Sisters',
    val_time: 'Confirmed upon inquiry',
    req_male: 'Request Male Teacher Trial',
    req_female: 'Request Female Teacher Trial',

    // Fee Information Page
    badge_fee: 'Pakistan & International • Custom Plans',
    fee_title: 'Contact for Fee Details',
    fee_desc:
      'Fees are not finalized yet, and Pakistan and international students may have different fee plans. Monthly tuition depends on the five factors below—please contact us for fee details:',
    fac_1: 'Selected Course',
    fac_2: 'One-to-One or Group Classes',
    fac_3: "Student's Country",
    fac_4: 'Weekly Schedule',
    fac_5: 'Class Duration (Standard 1 Hour, or Custom)',
    fee_btn_wa: 'Request via WhatsApp',
    fee_btn_email: 'Request via Email',
    fee_btn_trial: 'Start 3-Day Free Trial First',

    // Free Trial Booking Page
    badge_trial: '3-Day Free Trial Request',
    ft_title: 'Book Your 3-Day Free Trial',
    ft_desc:
      'Fill out the details below. Submitting this form does not automatically confirm a booking—our academy coordinator will contact you to confirm teacher availability and finalize your schedule.',
    notice_text:
      'Submitting this form does not automatically confirm the booking. Noor Quran Learning Academy will contact you on WhatsApp or email to confirm teacher availability and schedule.',
    succ_title: 'Trial Request Received',
    succ_desc:
      'Thank you! Your request has been recorded. Our academy coordinator will contact you shortly via WhatsApp or email to confirm teacher availability and finalize your 3-day trial schedule.',
    f_student_name: 'Student Name *',
    f_student_age: 'Student Age *',
    f_parent_name: 'Parent / Guardian Name (if applicable)',
    f_country: 'Country *',
    f_whatsapp: 'WhatsApp Number *',
    f_email: 'Email Address *',
    f_course: 'Course Selection *',
    f_lang: 'Preferred Language *',
    f_teacher: 'Preferred Teacher *',
    f_class_type: 'Class Type *',
    f_days: 'Preferred Class Days *',
    f_time: 'Preferred Class Time & Timezone *',
    f_app: 'Preferred Online Class Application *',
    f_notes: 'Additional Requirements',
    f_consent:
      'I consent to Noor Quran Learning Academy contacting me (or the parent/guardian) via WhatsApp or email to confirm teacher availability and schedule.',
    ft_err_msg: 'Please complete all required fields and accept the contact consent checkbox.',
    btn_submit: 'Request 3-Day Free Trial',
    side_title: 'Class System Overview',
    side_1:
      'Regular schedule: 4 days per week. Friday, Saturday & Sunday are off (classes may be arranged if student & teacher agree).',
    side_2: 'Standard duration: 1 hour (shorter or longer sessions available upon request).',
    side_3: 'One-to-one private classes or small groups (maximum 4 students).',
    side_4: 'Platforms: WhatsApp, IMO, Zoom, or Google Meet. Class details are shared after confirmation.',

    // Online Classes Page
    oc_badge: 'WhatsApp • IMO • Zoom • Google Meet',
    oc_title: 'How Online Quran Classes Work',
    oc_desc:
      'Learn from home on the platform your family already uses. Our classes are live, interactive, and scheduled around your timezone.',
    oc_plat_title: 'Supported Online Class Apps',
    oc_p1: 'Simple one-to-one video or audio calls on phone or tablet with easy lesson sharing.',
    oc_p2: 'Reliable low-bandwidth video calling for regions where IMO is preferred by families.',
    oc_p3: 'Screen-sharing of Noorani Qaida and Quran pages for clear visual guidance.',
    oc_p4: 'Browser-based sessions requiring no extra downloads on laptops and desktops.',
    oc_s1_t: '4 Days Per Week',
    oc_s1_d:
      'Regular classes run four days weekly. Friday, Saturday, and Sunday are off days (classes may be arranged if student and teacher agree).',
    oc_s2_t: '1-Hour Standard Duration',
    oc_s2_d:
      "Each standard class is one hour. Shorter or longer sessions can be requested based on the student's age and teacher availability.",
    oc_s3_t: 'Confirmed by Coordinator',
    oc_s3_d:
      'After submitting a Free Trial request, our academy confirms teacher availability and sends your meeting link or call details.',

    // Home Tuition Page
    ht_badge: 'Male Teachers Only • Subject to Availability',
    ht_title: 'Home Tuition Inquiries',
    ht_desc:
      'In addition to worldwide online Quran classes, Noor Quran Learning Academy accepts inquiries for in-person home tuition.',
    ht_policy_title: 'Important Home Tuition Policy',
    ht_p1: 'Home tuition is available through male teachers only.',
    ht_p2:
      'Provisional location: Sialkot, Pakistan (Please confirm location before launch). Coverage areas: To be confirmed (subject to male teacher availability).',
    ht_p3: 'Female teachers are available for online classes only.',
    ht_wa: 'Inquire via WhatsApp',
    ht_email: 'Inquire via Email',
    ht_form_title: 'Submit Home Tuition Inquiry',
    ht_succ:
      'Thank you! Your home tuition inquiry has been received. Our coordinator will check male teacher availability in your area and contact you.',
    ht_name: 'Parent / Student Name *',
    ht_phone: 'WhatsApp / Phone Number *',
    ht_loc: 'City & Neighborhood / Area *',
    ht_details: 'Student Age, Course & Preferred Time *',
    ht_err: 'Please complete all required fields before submitting.',
    ht_submit: 'Request Home Tuition',

    // About Us Page
    ab_title: 'About Noor Quran Learning Academy',
    ab_intro:
      'Noor Quran Learning Academy is an online Quran education academy dedicated to helping children and adults across Pakistan and around the world read, understand, and live by the Holy Quran with sincerity and clarity.',
    mission_title: 'Our Mission',
    mission_desc:
      'To make authentic, patient, and well-structured Quran education accessible to every home—offering both Urdu and English instruction through qualified male and female teachers in a respectful online environment.',
    vision_title: 'Our Vision',
    vision_desc:
      "To nurture a generation of confident Quran readers and thoughtful believers who not only recite with proper Tajweed, but also understand the meaning of Allah's words and apply them in daily character.",
    approach_title: 'Our Teaching Approach',
    approach_desc:
      'Every student learns at a different pace. Whether a young child is starting Noorani Qaida or an adult is returning to refine Tajweed and study Tafseer, our classes emphasize gentle correction, consistent four-day weekly practice, and clear communication with parents.',
    ap_1: 'One-to-one focus or small groups capped at 4 students',
    ap_2: '3-day free trial before any commitment',
    ap_3: 'Choice of WhatsApp, IMO, Zoom, or Google Meet',
    imp_title: 'Importance of Quran Education',
    imp_desc:
      'Learning the Quran is a lifelong spiritual anchor. Beyond fluent recitation, understanding its guidance brings peace to the household, strengthens faith for children growing up abroad, and helps adults build a meaningful daily connection with the Book of Allah.',

    // Contact Page
    ct_title: 'Contact Us',
    ct_desc:
      'Reach out on WhatsApp, phone, or email for fee details, schedule questions, or home tuition inquiries.',
    ct_btn_wa: 'WhatsApp: +92 331 444 6892',
    ct_btn_email: 'Email: noorquranlearningacademy@gmail.com',
    ct_btn_trial: 'Book 3-Day Free Trial',
    home_title: 'Location & Home Tuition Inquiries',
    home_loc:
      'Provisional Location: Sialkot, Pakistan (Please confirm location before launch). Serving online students across Pakistan and worldwide.',
    home_note:
      'Home tuition is available through male teachers only. Coverage areas: To be confirmed (subject to teacher availability).',
    form_title: 'Send Us a Message',
    succ_msg: 'Thank you for your message! Our coordinator will respond via WhatsApp or email shortly.',
    c_name: 'Your Name *',
    c_email: 'Email or WhatsApp *',
    c_topic: 'Inquiry Topic *',
    c_msg: 'Message *',
    ct_err_msg: 'Please fill out all required fields before sending.',
    btn_send: 'Send Inquiry',

    // FAQs Page
    faq_badge: 'Frequently Asked Questions',
    faq_page_title: 'Everything Parents & Students Ask',
    faq_page_desc:
      'Clear answers about our courses, male and female teachers, 3-day free trial, fee structure, and online learning apps.',
    faq_cat_all: 'All',
    faq_cat_courses: 'Courses & Trial',
    faq_cat_teachers: 'Teachers & Tuition',
    faq_cat_schedule: 'Schedule & Apps',
    faq_cat_fees: 'Fees',
    fq1_q: 'How does the 3-day free trial work?',
    fq1_a:
      'You submit your preferred course, teacher preference, and timezone through our Free Trial Booking form. Our coordinator contacts you directly to confirm teacher availability and arrange your 3 trial lessons—submitting the form does not auto-confirm a slot.',
    fq2_q: 'Which Quran courses do you offer, and in which languages?',
    fq2_a:
      'We offer 7 programs: Noorani Qaida, Nazra Quran, Hifz-ul-Quran, Quran with Tajweed, Quran with Urdu Translation, Quran with English Translation, and Quran Tafseer. All courses are taught in Urdu and English for children and adults.',
    fq3_q: 'Do you have both male and female teachers?',
    fq3_a:
      'Yes. We currently have 1 male teacher and 2 female teachers. Families can request a male or female teacher when booking their 3-day free trial.',
    fq4_q: 'Is home tuition available?',
    fq4_a:
      'Home tuition inquiries are accepted for male teachers only, subject to student location and teacher availability. Female teachers are available for online classes only.',
    fq5_q: 'What is the weekly class schedule and duration?',
    fq5_a:
      'Regular classes run 4 days per week with a standard 1-hour duration (shorter or longer sessions may be requested). Friday, Saturday, and Sunday are regular off days, though classes may be arranged if both student and teacher agree.',
    fq6_q: 'Which apps are used for online classes?',
    fq6_a:
      "Classes are conducted live via WhatsApp, IMO, Zoom, or Google Meet—whichever works best for your family's device and internet connection.",
    fq7_q: 'Why are fixed fees not listed on the website?',
    fq7_a:
      'Fees vary based on the selected course, one-to-one vs. group format (up to 4 students), country, weekly days, and session duration. Please message us on WhatsApp or Email for a transparent quote tailored to your family.',
    faq_cta_t: 'Still have a question?',
    faq_cta_d: 'Reach out directly or book your 3-day free trial to speak with our coordinator.',

    // Privacy Policy Page
    pp_badge: 'Legal & Trust',
    pp_title: 'Privacy Policy',
    pp_desc: 'How Noor Quran Learning Academy collects, uses, and protects student and parent information.',
    pp_s1_t: '1. Information We Collect',
    pp_s1_d:
      'When you submit a 3-Day Free Trial request, Home Tuition inquiry, or Contact form, we collect only the details needed to coordinate your classes: parent or student name, WhatsApp/phone number, email address, country/timezone, preferred course, and teacher preference.',
    pp_s2_t: '2. How We Use Your Information',
    pp_s2_d:
      'Your details are used solely to verify teacher availability, schedule trial or regular lessons on WhatsApp, IMO, Zoom, or Google Meet, and communicate with parents or adult students regarding classes and fee arrangements.',
    pp_s3_t: "3. Children's Privacy & Parent Supervision",
    pp_s3_d:
      'For students under 18, all enrollment, scheduling, and communication are handled through a parent or legal guardian. We never publish student photos, names, or contact information without explicit written consent.',
    pp_s4_t: '4. Data Sharing & Deletion Requests',
    pp_s4_d:
      'We never sell or rent student or family information to third parties. Parents and students may request updates or deletion of their contact records at any time via WhatsApp or Email.',

    // Terms & Conditions Page
    tc_badge: 'Legal & Guidelines',
    tc_title: 'Terms & Conditions',
    tc_desc:
      'Clear expectations for 3-day free trial classes, scheduling, teacher assignments, and respectful online conduct.',
    tc_s1_t: '1. Free Trial Booking & Confirmation',
    tc_s1_d:
      'Submitting the Free Trial Booking form records your request and preferences. It does not automatically guarantee or reserve a live time slot; our coordinator confirms teacher availability directly via WhatsApp or email.',
    tc_s2_t: '2. Regular Weekly Schedule',
    tc_s2_d:
      'Standard classes are conducted 4 days per week for 1 hour per session (shorter or longer durations may be arranged by request). Friday, Saturday, and Sunday are regular off days unless both student and teacher mutually agree.',
    tc_s3_t: '3. Tuition & Custom Fee Plans',
    tc_s3_d:
      "Monthly fees are shared individually after assessing the chosen course, 1-on-1 or group format (max 4 students), student's country, weekly schedule, and class length.",
    tc_s4_t: '4. Home Tuition Policy',
    tc_s4_d:
      'In-person home tuition inquiries are handled through male teachers only and depend on city, neighborhood, and teacher availability. Female teachers conduct online classes exclusively.',

    // Student Dashboard (Planned) Page
    sd_badge: 'Planned Feature Preview',
    sd_title: 'Student Dashboard (Planned)',
    sd_desc:
      'A dedicated portal is planned for enrolled families to review upcoming class schedules, teacher notes, and Hifz or Nazra progress.',
    sd_submitted_title: 'Your Recent Browser-Saved Requests',
    sd_submitted_desc:
      'Requests submitted from this device via the Free Trial, Home Tuition, or Contact forms appear below for your convenience.',
    sd_empty: 'No trial, home tuition, or contact requests have been submitted from this browser yet.',
  },
  ur: {
    // Shared Header & Footer
    brand_name: 'نور قرآن',
    brand_sub: 'لرننگ اکیڈمی',
    nav_home: 'ہوم',
    nav_courses: 'کورسز',
    nav_all_courses: 'تمام کورسز',
    nav_learning: 'تعلیمِ قرآن',
    nav_read_quran: 'قرآن پڑھیں',
    nav_tafseer: 'تفسیرِ قرآن',
    nav_online: 'آن لائن کلاسز',
    nav_home_tuition: 'ہوم ٹیوشن',
    nav_teachers: 'اساتذہ',
    nav_about: 'ہمارے بارے میں',
    nav_fees: 'فیس کی معلومات',
    nav_contact: 'رابطہ',
    nav_cta: 'مفت ٹرائل بک کریں',
    nav_dashboard: 'اسٹوڈنٹ ڈیش بورڈ (زیرِ منصوبہ)',
    nav_privacy: 'پرائیویسی پالیسی',
    nav_terms: 'شرائط و ضوابط',
    footer_brand: 'نور قرآن لرننگ اکیڈمی',
    footer_tagline: 'قرآن سیکھیں۔ قرآن سمجھیں۔ قرآن کے مطابق زندگی گزاریں۔',
    footer_schedule:
      'باقاعدہ شیڈول: ہفتے میں 4 دن (معیاری 1 گھنٹہ)۔ جمعہ تا اتوار چھٹی (باہمی اتفاق سے کلاس ممکن)۔',
    footer_col_academy: 'اکیڈمی',
    footer_col_learning: 'تعلیمِ قرآن اور معاونت',
    footer_contact_title: 'رابطہ اور قانونی امور',

    // Home Page
    hero_badge: '3 دن کا مفت ٹرائل • اردو اور انگریزی',
    hero_title: 'قرآن سیکھیں۔ قرآن سمجھیں۔ قرآن کے مطابق زندگی گزاریں۔',
    hero_desc:
      'نور قرآن لرننگ اکیڈمی پاکستان، برطانیہ، امریکہ، کینیڈا، یورپ اور دنیا بھر کے بچوں اور بڑوں کے لیے مرد اور خواتین اساتذہ کے ساتھ منظم آن لائن قرآن کلاسز فراہم کرتی ہے۔',
    hero_cta_primary: 'اپنا 3 دن کا مفت ٹرائل بک کریں',
    hero_cta_secondary: 'ہمارے کورسز دیکھیں',
    stat_1_title: 'انفرادی اور گروپ',
    stat_1_sub: 'گروپ میں زیادہ سے زیادہ 4 طلبہ',
    stat_2_title: 'ہفتے میں 4 دن',
    stat_2_sub: 'معیاری کلاس 1 گھنٹہ',
    stat_3_title: 'مرد اور خواتین',
    stat_3_sub: 'وقف شدہ قرآن اساتذہ',
    teachers_intro_title: 'مرد اور خواتین قرآن اساتذہ',
    teachers_intro_desc:
      'ہم جانتے ہیں کہ خاندانوں کے لیے اعتماد اور سہولت کتنی اہم ہے۔ اکیڈمی میں اس وقت ایک مرد استاد اور دو خواتین اساتذہ موجود ہیں، تاکہ والدین اور طلبہ اردو یا انگریزی میں اپنی پسند کے استاد کا انتخاب کر سکیں۔',
    teacher_male_label: '1 مرد استاد',
    teacher_male_desc: 'دنیا بھر میں آن لائن کلاسز اور مقامی سطح پر ہوم ٹیوشن کی انکوائری کے لیے دستیاب۔',
    teacher_female_label: '2 خواتین اساتذہ',
    teacher_female_desc: 'بچوں، خواتین اور خاندانوں کے لیے آن لائن قرآن تعلیم پر توجہ۔',
    teachers_intro_link: 'اساتذہ کے پروفائل اور ترجیحات دیکھیں',
    courses_sec_title: 'منظم قرآن کورسز',
    courses_sec_desc: 'بچوں کے لیے بنیادی نورانی قاعدہ سے لے کر تجوید، حفظ، ترجمہ اور تفسیر قرآن تک۔',
    courses_view_all: 'تمام 7 کورسز دیکھیں',
    home_c1_title: 'نورانی قاعدہ اور ناظرہ',
    home_c1_desc: 'بچوں اور مبتدی طلبہ کے لیے حروف کی پہچان، مخارج اور روانی سے قرآن پڑھنے کی مشق۔',
    c_level_beg: 'مبتدی اور بچے',
    home_c2_title: 'قرآن مع تجوید',
    home_c2_desc: 'درست ادائیگی اور تجوید کے قواعد سیکھیں—الگ کورس یا ناظرہ قرآن کے ساتھ دستیاب۔',
    c_level_all: 'تمام عمروں کے لیے',
    home_c3_title: 'حفظ، ترجمہ اور تفسیر',
    home_c3_desc: 'رہنمائی کے ساتھ حفظِ قرآن، اردو یا انگریزی ترجمہ اور تفسیرِ قرآن کے ذریعے گہرا فہم۔',
    c_level_int: 'نوجوان اور بڑے',
    benefits_title: 'والدین نور قرآن کا انتخاب کیوں کرتے ہیں',
    b1_title: 'ہفتے میں 4 دن کا مستقل شیڈول',
    b1_desc:
      'باقاعدہ کلاسز ہفتے میں 4 دن اور معیاری دورانیہ 1 گھنٹہ ہے۔ جمعہ، ہفتہ اور اتوار چھٹی ہوتی ہے، تاہم باہمی رضامندی سے کلاس ہو سکتی ہے۔',
    b2_title: 'انفرادی یا مختصر گروپ (زیادہ سے زیادہ 4)',
    b2_desc: 'ہر طالب علم پر مکمل توجہ کے لیے انفرادی کلاس یا زیادہ سے زیادہ 4 طلبہ کے گروپ کا انتخاب کریں۔',
    b3_title: 'اردو اور انگریزی میں تعلیم',
    b3_desc: 'پاکستان سمیت برطانیہ، امریکہ، کینیڈا اور یورپ کے طلبہ کے لیے واضح اور آسان فہم تعلیم۔',
    how_title: 'آن لائن کلاسز اور 3 دن کا مفت ٹرائل',
    h1_title: '3 دن کے مفت ٹرائل کی درخواست دیں',
    h1_desc: 'اپنے مطلوبہ کورس، زبان (اردو یا انگریزی)، استاد کی ترجیح اور وقت کے ساتھ فارم پُر کریں۔',
    h2_title: 'اکیڈمی وقت کی تصدیق کرے گی',
    h2_desc:
      'فارم جمع کرانے سے بکنگ خودکار طور پر پکی نہیں ہوتی۔ ہمارا کوآرڈینیٹر واٹس ایپ یا ای میل کے ذریعے دستیابی کی تصدیق کرے گا۔',
    h3_title: 'واٹس ایپ، ایمو، زوم یا گوگل میٹ پر کلاس لیں',
    h3_desc: 'داخلے کا فیصلہ کرنے سے پہلے اپنی پسندیدہ ایپ پر تین مفت ٹرائل کلاسز لیں۔',
    ayah_badge: 'آج کی قرآنی آیت',
    ayah_link: 'ترجمہ اور آڈیو کے ساتھ قرآن پڑھیں ←',
    ayah_en: '”اور بے شک ہم نے قرآن کو نصیحت حاصل کرنے کے لیے آسان کر دیا ہے، تو کیا کوئی نصیحت حاصل کرنے والا ہے؟“',
    ayah_ref: 'سورۃ القمر (54:17)',
    test_badge: 'پلیس ہولڈر سیکشن — مستند آراء جلد شامل کی جائیں گی',
    test_title: 'طلبہ اور والدین کی آراء',
    test_desc: 'ہم صرف حقیقی والدین اور طلبہ کی آراء شائع کرتے ہیں۔ یہ جگہیں تصدیق شدہ تبصروں کے لیے مختص ہیں۔',
    test_p1: '”[بچوں کے نورانی قاعدہ اور ناظرہ کی پیش رفت پر والدین کی حقیقی رائے کے لیے پلیس ہولڈر۔]“',
    test_a1: 'والدین کا تبصرہ (پلیس ہولڈر)',
    test_l1: 'مقام اور کورس — زیرِ التواء',
    test_p2: '”[تجوید اور اردو/انگریزی ترجمہ پر بالغ طالب علم کی حقیقی رائے کے لیے پلیس ہولڈر۔]“',
    test_a2: 'طالب علم کا تبصرہ (پلیس ہولڈر)',
    test_l2: 'مقام اور کورس — زیرِ التواء',
    test_p3: '”[بیرونِ ملک مقیم خاندان کے لچکدار اوقات اور اساتذہ کے تعاون پر رائے کے لیے پلیس ہولڈر۔]“',
    test_a3: 'بین الاقوامی خاندان (پلیس ہولڈر)',
    test_l3: 'مقام اور کورس — زیرِ التواء',
    home_faq_title: 'اکثر پوچھے جانے والے سوالات',
    home_faq_desc: 'اوقات، آن لائن ایپس اور مفت ٹرائل کے بارے میں واضح معلومات۔',
    home_faq_q1: 'ہفتہ وار شیڈول اور کلاس کا دورانیہ کیا ہے؟',
    home_faq_a1:
      'باقاعدہ کلاسز ہفتے میں 4 دن اور معیاری دورانیہ 1 گھنٹہ ہے۔ جمعہ، ہفتہ اور اتوار عام تعطیل ہوتی ہے، تاہم طالب علم اور استاد کے اتفاق سے کلاس رکھی جا سکتی ہے۔',
    home_faq_q2: 'آن لائن کلاسز کن ایپس پر ہوتی ہیں؟',
    home_faq_a2:
      'آپ واٹس ایپ، ایمو، زوم یا گوگل میٹ منتخب کر سکتے ہیں۔ اکیڈمی کی تصدیق کے بعد کلاس کی تفصیلات آپ کو بھیج دی جائیں گی۔',
    home_faq_q3: 'ماہانہ فیس کی تفصیل کیسے معلوم ہوگی؟',
    home_faq_a3:
      'فیس کا انحصار کورس، انفرادی یا گروپ کلاس، طالب علم کے ملک، ہفتہ وار شیڈول اور دورانیے پر ہوتا ہے۔ تفصیلات کے لیے واٹس ایپ یا ای میل پر رابطہ کریں۔',
    home_faq_q4: 'کیا ہوم ٹیوشن دستیاب ہے؟',
    home_faq_a4: 'ہوم ٹیوشن کی سہولت صرف مرد اساتذہ کے ذریعے، آپ کے علاقے اور استاد کی دستیابی سے مشروط ہے۔',
    cta_banner_title: 'کیا آپ 3 دن کا مفت ٹرائل شروع کرنے کے لیے تیار ہیں؟',
    cta_banner_desc: 'اپنے یا اپنے بچوں کے لیے اردو یا انگریزی میں استاد کی دستیابی معلوم کرنے کے لیے رابطہ کریں۔',

    // Courses Page
    courses_badge: 'اردو اور انگریزی • انفرادی یا مختصر گروپ',
    courses_title: 'ہمارے قرآن کورسز',
    courses_desc:
      'بچوں اور بڑوں کے لیے سات منظم پروگرام۔ تجوید الگ کورس کے طور پر یا ناظرہ قرآن کے ساتھ بھی پڑھی جا سکتی ہے۔',
    view_details: 'تفصیلات دیکھیں',
    book_btn: 'مفت ٹرائل بک کریں',
    c1_level: 'مناسب: چھوٹے بچے اور مبتدی',
    c1_name: 'نورانی قاعدہ',
    c1_desc: 'پہلے سبق سے ہی عربی حروف، حرکات، حروف جوڑنے کے قواعد اور درست تلفظ سکھانے کا بنیادی کورس۔',
    c1_b1: 'ابتداء ہی سے درست مخارج کی پختگی',
    c1_b2: 'بچوں کے مزاج کے مطابق نرم اور صبر آزما تدریس',
    c2_level: 'مناسب: بچے اور بڑے',
    c2_name: 'ناظرہ قرآن',
    c2_desc:
      'پہلے سپارے سے تیسویں سپارے تک استاد کی نگرانی میں مکمل قرآن پڑھنا۔ ضرورت کے مطابق تجوید بھی شامل کی جا سکتی ہے۔',
    c2_b1: 'روانی اور اعتماد کے ساتھ تلاوت',
    c2_b2: 'ناظرہ کے ساتھ تجوید کی سہولت',
    c3_level: 'مناسب: شوقین بچے اور بڑے',
    c3_name: 'حفظِ قرآن',
    c3_desc: 'روزانہ سبق، سبقی اور منزل کے منظم نظام کے ساتھ مکمل قرآن یا منتخب سورتوں کا حفظ۔',
    c3_b1: 'روزانہ دہرائی کا باقاعدہ نظام',
    c3_b2: 'طالب علم کی استعداد کے مطابق ہدف',
    c4_level: 'مناسب: تمام سطحیں (الگ یا ناظرہ کے ساتھ)',
    c4_name: 'قرآن مع تجوید',
    c4_desc: 'نون ساکن، میم ساکن، مد، قلقلہ اور مخارج کی عملی مشق—الگ کورس یا ناظرہ کے ساتھ دستیاب۔',
    c4_b1: 'تلاوت کی عملی اصلاح',
    c4_b2: 'الگ یا مشترکہ کورس کا اختیار',
    c5_level: 'مناسب: اردو بولنے والے نوجوان اور بڑے',
    c5_name: 'قرآن مع اردو ترجمہ',
    c5_desc: 'لفظ بہ لفظ اور با محاورہ اردو ترجمہ تاکہ طلبہ تلاوت کی جانے والی آیات کا پیغام سمجھ سکیں۔',
    c5_b1: 'آسان اور واضح اردو مفہوم',
    c5_b2: 'نماز اور روزمرہ زندگی میں فہمِ قرآن',
    c6_level: 'مناسب: انگریزی بولنے والے طلبہ',
    c6_name: 'قرآن مع انگریزی ترجمہ',
    c6_desc: 'برطانیہ، امریکہ، کینیڈا، یورپ اور انگریزی میڈیم طلبہ کے لیے مستند اور آسان فہم انگریزی ترجمہ۔',
    c6_b1: 'سلیس اور درست انگریزی ترجمہ',
    c6_b2: 'بیرونِ ملک مقیم خاندانوں کے لیے موزوں',
    c7_level: 'مناسب: بڑے اور اعلیٰ سطح کے طلبہ',
    c7_name: 'تفسیرِ قرآن',
    c7_desc:
      'آیاتِ قرآنی کی گہری تشریح، شانِ نزول اور عملی زندگی میں قرآن پر عمل کی رہنمائی—اردو یا انگریزی میں دستیاب۔',
    c7_b1: 'آیت بہ آیت سیاق و سباق کا مطالعہ',
    c7_b2: 'انفرادی یا 4 طلبہ تک گروپ بحث',

    // Course Detail Page
    back_courses: 'تمام کورسز پر واپس جائیں',
    cd_what_title: 'طلبہ کیا سیکھیں گے',
    cd_benefits_title: 'کورس کے اہم فوائد',
    cd_format_title: 'کلاس کا طریقہ کار اور شیڈول',
    cd_lbl_days: 'ہفتہ وار شیڈول',
    cd_val_days: 'ہفتے میں 4 دن',
    cd_lbl_dur: 'دورانیہ',
    cd_val_dur: '1 گھنٹہ (قابلِ تبدیلی)',
    cd_lbl_mode: 'کلاس کی قسم',
    cd_val_mode: 'انفرادی یا گروپ (زیادہ سے زیادہ 4)',
    cd_lbl_lang: 'زبانیں',
    cd_val_lang: 'اردو اور انگریزی',
    cd_lbl_teachers: 'اساتذہ',
    cd_val_teachers: 'مرد اور خواتین',
    cd_book_btn: '3 دن کا مفت ٹرائل بک کریں',
    cd_fee_btn: 'فیس کی تفصیلات معلوم کریں',

    // Read Quran Page
    rq_badge: 'عربی متن • اردو ترجمہ • انگریزی ترجمہ',
    rq_title: 'قرآنِ مجید پڑھیں',
    rq_desc: 'عربی متن کے ساتھ اردو اور انگریزی ترجمہ پڑھنے کے لیے ذیل میں سورۃ منتخب کریں۔',
    rq_surah_lbl: 'سورۃ منتخب کریں',
    rq_show_ur: 'اردو ترجمہ',
    rq_show_en: 'انگریزی ترجمہ',
    rq_play: 'تلاوت چلائیں',
    rq_pause: 'تلاوت روکیں',
    rq_cta_title: 'کیا آپ درست تجوید کے ساتھ تلاوت سیکھنا چاہتے ہیں؟',
    rq_cta_desc: 'اردو یا انگریزی میں مرد یا خواتین اساتذہ کے ساتھ 3 دن کا مفت ٹرائل بک کریں۔',

    // Quran Tafseer Page
    tf_badge: 'بڑے اور نوجوان • اردو یا انگریزی',
    tf_title: 'تفسیرِ قرآن پروگرام',
    tf_desc:
      'تلاوت سے آگے بڑھ کر قرآنِ مجید کا سیاق و سباق، حکمت اور عملی زندگی میں اطلاق سیکھیں—اردو یا انگریزی میں انفرادی یا مختصر گروپ کلاسز کے ذریعے۔',
    tf_cta: 'تفسیر کا مفت ٹرائل بک کریں',
    tf_read_btn: 'آن لائن قرآن پڑھیں',
    tf_tracks_title: 'تفسیر سیکھنے کے دستیاب طریقے',
    tf_tracks_desc: 'اپنے وقت اور تعلیمی پس منظر کے مطابق پروگرام منتخب کریں۔',
    tf_t1_title: 'منتخب سورتوں کی تفسیر',
    tf_t1_desc: 'عموماً پڑھی جانے والی سورتوں مثلاً عمّ پارہ، سورۃ یٰسین، سورۃ الکہف اور سورۃ الملک کا مطالعہ۔',
    tf_t2_title: 'مکمل تفسیرِ قرآن',
    tf_t2_desc: 'سورۃ الفاتحہ سے آیت بہ آیت منظم مطالعہ، شانِ نزول اور بنیادی قرآنی مضامین۔',
    tf_t3_title: 'انفرادی یا مختصر گروپ (زیادہ سے زیادہ 4)',
    tf_t3_desc: 'مرد یا خاتون استاد کے ساتھ انفرادی کلاس یا زیادہ سے زیادہ 4 طلبہ کے گروپ میں شرکت۔',

    // Teachers Page
    t_badge: 'عمومی پروفائلز — تفصیلات جلد تصدیق کی جائیں گی',
    t_title: 'ہمارے قرآن اساتذہ',
    t_desc:
      'نور قرآن لرننگ اکیڈمی میں فی الحال ایک مرد استاد اور دو خواتین اساتذہ موجود ہیں۔ اساتذہ کے نام، تعلیمی اسناد اور تصاویر باضابطہ اشاعت تک "جلد تصدیق کی جائے گی" کے طور پر درج ہیں۔',
    pref_title: 'اپنی پسند کے استاد کا انتخاب کریں',
    pref_desc: 'ذیل میں پروفائلز دیکھیں یا مفت ٹرائل فارم میں مرد یا خاتون استاد کی ترجیح منتخب کریں۔',
    f_all: 'تمام (3)',
    f_male: 'مرد استاد (1)',
    f_female: 'خواتین اساتذہ (2)',
    photo_ph: 'تصویر پلیس ہولڈر',
    g_male: 'مرد',
    g_female: 'خاتون',
    t1_name: 'مرد قرآن استاد',
    t2_name: 'خاتون قرآن استاد 1',
    t3_name: 'خاتون قرآن استاد 2',
    lbl_qual: 'تعلیمی قابلیت',
    lbl_exp: 'تدریسی تجربہ',
    lbl_lang: 'زبانیں',
    lbl_courses: 'کورسز',
    lbl_ages: 'طلبہ کی عمر',
    lbl_time: 'دستیاب اوقات',
    val_pending: 'جلد تصدیق کی جائے گی',
    val_lang: 'اردو اور انگریزی',
    val_courses_m: 'قاعدہ، ناظرہ، تجوید، حفظ، ترجمہ، تفسیر',
    val_courses_f1: 'قاعدہ، ناظرہ، تجوید، حفظ، ترجمہ',
    val_courses_f2: 'قاعدہ، ناظرہ، تجوید، ترجمہ، تفسیر',
    val_ages_all: 'بچے اور بڑے',
    val_ages_sis: 'بچے اور خواتین',
    val_time: 'انکوائری پر تصدیق ہوگی',
    req_male: 'مرد استاد کے ساتھ ٹرائل بک کریں',
    req_female: 'خاتون استاد کے ساتھ ٹرائل بک کریں',

    // Fee Information Page
    badge_fee: 'پاکستان اور بیرونِ ملک • حسبِ ضرورت فیس',
    fee_title: 'فیس کی تفصیلات کے لیے رابطہ کریں',
    fee_desc:
      'فیس ابھی حتمی نہیں ہے، اور پاکستان اور بیرونِ ملک مقیم طلبہ کے لیے فیس مختلف ہو سکتی ہے۔ ماہانہ فیس درج ذیل پانچ عوامل پر منحصر ہے—تفصیلات کے لیے ہم سے رابطہ کریں:',
    fac_1: 'منتخب کورس',
    fac_2: 'انفرادی یا گروپ کلاس',
    fac_3: 'طالب علم کا ملک',
    fac_4: 'ہفتہ وار شیڈول',
    fac_5: 'کلاس کا دورانیہ (معیاری 1 گھنٹہ یا حسبِ ضرورت)',
    fee_btn_wa: 'واٹس ایپ پر فیس معلوم کریں',
    fee_btn_email: 'ای میل پر فیس معلوم کریں',
    fee_btn_trial: 'پہلے 3 دن کا مفت ٹرائل شروع کریں',

    // Free Trial Booking Page
    badge_trial: '3 دن کے مفت ٹرائل کی درخواست',
    ft_title: 'اپنا 3 دن کا مفت ٹرائل بک کریں',
    ft_desc:
      'ذیل میں تفصیلات پُر کریں۔ فارم جمع کرانے سے بکنگ خودکار طور پر پکی نہیں ہوتی—ہمارا کوآرڈینیٹر استاد کی دستیابی اور شیڈول کی تصدیق کے لیے آپ سے رابطہ کرے گا۔',
    notice_text:
      'فارم جمع کرانے سے بکنگ خودکار طور پر پکی نہیں ہوتی۔ اکیڈمی استاد کی دستیابی اور وقت کی تصدیق کے لیے آپ سے واٹس ایپ یا ای میل پر رابطہ کرے گی۔',
    succ_title: 'ٹرائل کی درخواست موصول ہو گئی',
    succ_desc:
      'شکریہ! آپ کی درخواست موصول ہو گئی ہے۔ ہمارا کوآرڈینیٹر جلد ہی واٹس ایپ یا ای میل کے ذریعے استاد کی دستیابی اور 3 دن کے ٹرائل کی تصدیق کے لیے رابطہ کرے گا۔',
    f_student_name: 'طالب علم کا نام *',
    f_student_age: 'طالب علم کی عمر *',
    f_parent_name: 'والدین / سرپرست کا نام (اگر لاگو ہو)',
    f_country: 'ملک *',
    f_whatsapp: 'واٹس ایپ نمبر *',
    f_email: 'ای میل ایڈریس *',
    f_course: 'کورس کا انتخاب *',
    f_lang: 'پسندیدہ زبان *',
    f_teacher: 'پسندیدہ استاد *',
    f_class_type: 'کلاس کی قسم *',
    f_days: 'پسندیدہ دن *',
    f_time: 'پسندیدہ وقت اور ٹائم زون *',
    f_app: 'آن لائن کلاس ایپ کا انتخاب *',
    f_notes: 'مزید ضروریات یا ہدایات',
    f_consent:
      'میں نور قرآن لرننگ اکیڈمی کو استاد کی دستیابی اور شیڈول کی تصدیق کے لیے واٹس ایپ یا ای میل پر رابطہ کرنے کی اجازت دیتا/دیتی ہوں۔',
    ft_err_msg: 'براہ کرم تمام ضروری خانے پُر کریں اور رابطے کی اجازت کا باکس منتخب کریں۔',
    btn_submit: '3 دن کے مفت ٹرائل کی درخواست بھیجیں',
    side_title: 'کلاس سسٹم کا خلاصہ',
    side_1: 'باقاعدہ شیڈول: ہفتے میں 4 دن۔ جمعہ، ہفتہ اور اتوار چھٹی (باہمی اتفاق سے کلاس ممکن)۔',
    side_2: 'معیاری دورانیہ: 1 گھنٹہ (درخواست پر کم یا زیادہ وقت ممکن)۔',
    side_3: 'انفرادی کلاس یا مختصر گروپ (زیادہ سے زیادہ 4 طلبہ)۔',
    side_4: 'ایپس: واٹس ایپ، ایمو، زوم یا گوگل میٹ۔ تصدیق کے بعد کلاس کی تفصیلات دی جائیں گی۔',

    // Online Classes Page
    oc_badge: 'واٹس ایپ • ایمو • زوم • گوگل میٹ',
    oc_title: 'آن لائن قرآن کلاسز کیسے ہوتی ہیں',
    oc_desc: 'اپنے گھر بیٹھے اپنی پسندیدہ ایپ پر براہِ راست اور منظم کلاسز لیں، جو آپ کے ٹائم زون کے مطابق طے کی جاتی ہیں۔',
    oc_plat_title: 'آن لائن کلاسز کی ایپس',
    oc_p1: 'فون یا ٹیبلیٹ پر آسان انفرادی ویڈیو یا آڈیو کال اور سبق کی شیئرنگ۔',
    oc_p2: 'کم انٹرنیٹ اسپیڈ والے علاقوں میں خاندانوں کے لیے موزوں ویڈیو کالنگ۔',
    oc_p3: 'نورانی قاعدہ اور قرآنِ مجید کے صفحات کی اسکرین شیئرنگ۔',
    oc_p4: 'لیپ ٹاپ اور کمپیوٹر پر بغیر کسی اضافی انسٹالیشن کے براؤزر کلاسز۔',
    oc_s1_t: 'ہفتے میں 4 دن',
    oc_s1_d: 'باقاعدہ کلاسز ہفتے میں 4 دن ہوتی ہیں۔ جمعہ، ہفتہ اور اتوار چھٹی ہوتی ہے (باہمی اتفاق سے کلاس ممکن)۔',
    oc_s2_t: '1 گھنٹہ معیاری دورانیہ',
    oc_s2_d: 'معیاری کلاس 1 گھنٹے کی ہوتی ہے۔ طالب علم کی عمر اور استاد کی دستیابی کے مطابق وقت کم یا زیادہ ہو سکتا ہے۔',
    oc_s3_t: 'کوآرڈینیٹر کی تصدیق',
    oc_s3_d: 'مفت ٹرائل کی درخواست کے بعد اکیڈمی استاد کی دستیابی کی تصدیق کر کے لنک یا کال کی تفصیلات فراہم کرتی ہے۔',

    // Home Tuition Page
    ht_badge: 'صرف مرد اساتذہ • دستیابی سے مشروط',
    ht_title: 'ہوم ٹیوشن کی معلومات',
    ht_desc:
      'دنیا بھر میں آن لائن قرآن کلاسز کے ساتھ ساتھ، نور قرآن لرننگ اکیڈمی گھر پر تعلیم (ہوم ٹیوشن) کی انکوائریز بھی وصول کرتی ہے۔',
    ht_policy_title: 'ہوم ٹیوشن کی اہم پالیسی',
    ht_p1: 'ہوم ٹیوشن کی سہولت صرف مرد اساتذہ کے ذریعے دستیاب ہے۔',
    ht_p2:
      'عارضی مقام: سیالکوٹ، پاکستان (براہِ کرم لانچ سے پہلے مقام کی تصدیق کریں)۔ ہوم ٹیوشن کے علاقے: جلد تصدیق کی جائے گی (مرد استاد کی دستیابی سے مشروط)۔',
    ht_p3: 'خواتین اساتذہ صرف آن لائن کلاسز کے لیے دستیاب ہیں۔',
    ht_wa: 'واٹس ایپ پر رابطہ کریں',
    ht_email: 'ای میل پر رابطہ کریں',
    ht_form_title: 'ہوم ٹیوشن کی درخواست بھیجیں',
    ht_succ:
      'شکریہ! آپ کی ہوم ٹیوشن کی درخواست موصول ہو گئی ہے۔ ہمارا کوآرڈینیٹر آپ کے علاقے میں مرد استاد کی دستیابی چیک کر کے رابطہ کرے گا۔',
    ht_name: 'والدین / طالب علم کا نام *',
    ht_phone: 'واٹس ایپ / فون نمبر *',
    ht_loc: 'شہر اور علاقہ *',
    ht_details: 'عمر، کورس اور پسندیدہ وقت *',
    ht_err: 'براہ کرم درخواست بھیجنے سے پہلے تمام ضروری خانے پُر کریں۔',
    ht_submit: 'ہوم ٹیوشن کی درخواست دیں',

    // About Us Page
    ab_title: 'نور قرآن لرننگ اکیڈمی کے بارے میں',
    ab_intro:
      'نور قرآن لرننگ اکیڈمی ایک آن لائن قرآن تعلیمی ادارہ ہے جو پاکستان اور دنیا بھر کے بچوں اور بڑوں کو اخلاص اور وضاحت کے ساتھ قرآن پڑھنے، سمجھنے اور اس پر عمل کرنے میں مدد فراہم کرتا ہے۔',
    mission_title: 'ہمارا مشن',
    mission_desc:
      'باوقار آن لائن ماحول میں مرد اور خواتین اساتذہ کے ذریعے اردو اور انگریزی دونوں زبانوں میں مستند، صبر آزما اور منظم قرآن تعلیم ہر گھر تک پہنچانا۔',
    vision_title: 'ہمارا وژن',
    vision_desc:
      'ایسی نسل کی تربیت کرنا جو نہ صرف درست تجوید کے ساتھ قرآن کی تلاوت کرے بلکہ اللہ کے کلام کے معنی سمجھے اور اسے اپنے روزمرہ اخلاق و کردار میں نافذ کرے۔',
    approach_title: 'ہمارا تدریسی طریقہ کار',
    approach_desc:
      'ہر طالب علم کی سیکھنے کی رفتار مختلف ہوتی ہے۔ چاہے کوئی بچہ نورانی قاعدہ شروع کر رہا ہو یا کوئی بالغ طالب علم تجوید اور تفسیر سیکھ رہا ہو، ہماری کلاسز نرم اصلاح اور ہفتے میں 4 دن کی باقاعدہ مشق پر زور دیتی ہیں۔',
    ap_1: 'انفرادی توجہ یا زیادہ سے زیادہ 4 طلبہ کا گروپ',
    ap_2: 'داخلے سے پہلے 3 دن کا مفت ٹرائل',
    ap_3: 'واٹس ایپ، ایمو، زوم یا گوگل میٹ کا انتخاب',
    imp_title: 'قرآن کی تعلیم کی اہمیت',
    imp_desc:
      'قرآن سیکھنا زندگی بھر کا روحانی سہارا ہے۔ درست تلاوت کے ساتھ ساتھ اس کی ہدایت کو سمجھنا گھر میں سکون لاتا ہے اور بچوں و بڑوں کا اللہ کی کتاب سے مضبوط تعلق قائم کرتا ہے۔',

    // Contact Page
    ct_title: 'ہم سے رابطہ کریں',
    ct_desc:
      'فیس کی تفصیلات، شیڈول یا ہوم ٹیوشن کے بارے میں پوچھنے کے لیے واٹس ایپ، فون یا ای میل پر رابطہ کریں۔',
    ct_btn_wa: 'واٹس ایپ: +92 331 444 6892',
    ct_btn_email: 'ای میل: noorquranlearningacademy@gmail.com',
    ct_btn_trial: '3 دن کا مفت ٹرائل بک کریں',
    home_title: 'مقام اور ہوم ٹیوشن کی معلومات',
    home_loc:
      'عارضی مقام: سیالکوٹ، پاکستان (براہِ کرم لانچ سے پہلے مقام کی تصدیق کریں)۔ پاکستان اور دنیا بھر کے طلبہ کے لیے آن لائن کلاسز۔',
    home_note:
      'ہوم ٹیوشن کی سہولت صرف مرد اساتذہ کے ذریعے دستیاب ہے۔ کوریج کے علاقے: جلد تصدیق کی جائے گی۔',
    form_title: 'ہمیں پیغام بھیجیں',
    succ_msg: 'آپ کے پیغام کا شکریہ! ہمارا کوآرڈینیٹر جلد واٹس ایپ یا ای میل پر جواب دے گا۔',
    c_name: 'آپ کا نام *',
    c_email: 'ای میل یا واٹس ایپ *',
    c_topic: 'موضوع *',
    c_msg: 'پیغام *',
    ct_err_msg: 'براہ کرم پیغام بھیجنے سے پہلے تمام ضروری خانے پُر کریں۔',
    btn_send: 'پیغام بھیجیں',

    // FAQs Page
    faq_badge: 'عمومی سوالات',
    faq_page_title: 'والدین اور طلبہ کے عام سوالات',
    faq_page_desc: 'ہمارے کورسز، مرد و خواتین اساتذہ، 3 دن کے مفت ٹرائل، فیس اور آن لائن کلاسز کے بارے میں واضح جوابات۔',
    faq_cat_all: 'تمام',
    faq_cat_courses: 'کورسز اور ٹرائل',
    faq_cat_teachers: 'اساتذہ اور ٹیوشن',
    faq_cat_schedule: 'شیڈول اور ایپس',
    faq_cat_fees: 'فیس',
    fq1_q: '3 دن کا مفت ٹرائل کیسے کام کرتا ہے؟',
    fq1_a:
      'آپ مفت ٹرائل فارم کے ذریعے اپنا پسندیدہ کورس، استاد اور ٹائم زون جمع کراتے ہیں۔ ہمارا کوآرڈینیٹر دستیابی کی تصدیق کے لیے آپ سے رابطہ کرتا ہے۔',
    fq2_q: 'کون سے قرآن کورسز اور کن زبانوں میں دستیاب ہیں؟',
    fq2_a:
      'ہم 7 کورسز کراتے ہیں: نورانی قاعدہ، ناظرہ، حفظ، تجوید، اردو ترجمہ، انگریزی ترجمہ اور تفسیرِ قرآن۔ تمام کورسز اردو اور انگریزی میں دستیاب ہیں۔',
    fq3_q: 'کیا مرد اور خواتین دونوں اساتذہ موجود ہیں؟',
    fq3_a:
      'جی ہاں، ہمارے پاس فی الحال 1 مرد استاد اور 2 خواتین اساتذہ موجود ہیں۔ آپ ٹرائل فارم میں اپنی پسند کا انتخاب کر سکتے ہیں۔',
    fq4_q: 'کیا ہوم ٹیوشن دستیاب ہے؟',
    fq4_a:
      'ہوم ٹیوشن صرف مرد اساتذہ کے لیے، علاقے اور دستیابی کی بنیاد پر دستیاب ہے۔ خواتین اساتذہ صرف آن لائن پڑھاتی ہیں۔',
    fq5_q: 'ہفتہ وار کلاسز کا شیڈول اور دورانیہ کیا ہے؟',
    fq5_a:
      'باقاعدہ کلاسز ہفتے میں 4 دن اور معیاری دورانیہ 1 گھنٹہ ہے۔ جمعہ، ہفتہ اور اتوار عام تعطیل ہوتی ہے، تاہم باہمی اتفاق سے کلاس رکھی جا سکتی ہے۔',
    fq6_q: 'آن لائن کلاسز کے لیے کون سی ایپس استعمال ہوتی ہیں؟',
    fq6_a: 'کلاسز واٹس ایپ، ایمو، زوم یا گوگل میٹ پر براہِ راست ہوتی ہیں۔',
    fq7_q: 'ویب سائٹ پر مقررہ فیس کیوں درج نہیں ہے؟',
    fq7_a:
      'فیس کورس، انفرادی یا گروپ کلاس، ملک، ہفتہ وار دنوں اور دورانیے پر منحصر ہے۔ تفصیلات کے لیے واٹس ایپ یا ای میل پر رابطہ کریں۔',
    faq_cta_t: 'مزید سوال پوچھنا چاہتے ہیں؟',
    faq_cta_d: 'ہم سے براہِ راست رابطہ کریں یا 3 دن کا مفت ٹرائل بک کریں۔',

    // Privacy Policy Page
    pp_badge: 'قانونی اور اعتماد',
    pp_title: 'پرائیویسی پالیسی',
    pp_desc: 'نور قرآن لرننگ اکیڈمی طلبہ اور والدین کی معلومات کو کیسے محفوظ رکھتی ہے۔',
    pp_s1_t: '1. ہم کون سی معلومات جمع کرتے ہیں',
    pp_s1_d:
      'جب آپ مفت ٹرائل، ہوم ٹیوشن یا رابطہ فارم جمع کراتے ہیں تو ہم صرف کلاسز کے انتظام کے لیے ضروری معلومات (نام، واٹس ایپ نمبر، ای میل، ملک/ٹائم زون اور کورس) حاصل کرتے ہیں۔',
    pp_s2_t: '2. معلومات کا استعمال',
    pp_s2_d:
      'آپ کی معلومات صرف استاد کی دستیابی کی تصدیق، آن لائن کلاسز کے شیڈول اور والدین یا بالغ طلبہ سے رابطے کے لیے استعمال ہوتی ہیں۔',
    pp_s3_t: '3. بچوں کی رازداری اور والدین کی نگرانی',
    pp_s3_d:
      '18 سال سے کم عمر طلبہ کے تمام معاملات والدین یا سرپرست کے ذریعے طے کیے جاتے ہیں۔ ہم اجازت کے بغیر کسی طالب علم کی معلومات شائع نہیں کرتے۔',
    pp_s4_t: '4. ڈیٹا شیئرنگ اور حذف کرنے کی درخواست',
    pp_s4_d:
      'ہم کسی تیسرے فریق کو معلومات فروخت یا شیئر نہیں کرتے۔ آپ کسی بھی وقت واٹس ایپ یا ای میل کے ذریعے اپنی معلومات حذف کروا سکتے ہیں۔',

    // Terms & Conditions Page
    tc_badge: 'قانونی رہنما اصول',
    tc_title: 'شرائط و ضوابط',
    tc_desc: '3 دن کے مفت ٹرائل، کلاس شیڈول، اساتذہ کے انتخاب اور آن لائن آداب کے واضح اصول۔',
    tc_s1_t: '1. مفت ٹرائل کی درخواست اور تصدیق',
    tc_s1_d:
      'مفت ٹرائل فارم جمع کرانے سے آپ کی درخواست ریکارڈ ہو جاتی ہے لیکن وقت خودکار طور پر پکا نہیں ہوتا۔ ہمارا کوآرڈینیٹر واٹس ایپ یا ای میل پر دستیابی کی تصدیق کرے گا۔',
    tc_s2_t: '2. ہفتہ وار باقاعدہ شیڈول',
    tc_s2_d:
      'معیاری کلاسز ہفتے میں 4 دن اور دورانیہ 1 گھنٹہ ہے۔ جمعہ، ہفتہ اور اتوار عام تعطیل ہوتی ہے، تاہم باہمی اتفاق سے کلاس رکھی جا سکتی ہے۔',
    tc_s3_t: '3. فیس اور حسبِ ضرورت منصوبہ',
    tc_s3_d:
      'ماہانہ فیس کورس، انفرادی یا گروپ فارمیٹ (زیادہ سے زیادہ 4 طلبہ)، ملک، ہفتہ وار دنوں اور دورانیے کے مطابق بتائی جاتی ہے۔',
    tc_s4_t: '4. ہوم ٹیوشن کی پالیسی',
    tc_s4_d:
      'گھر پر تعلیم (ہوم ٹیوشن) صرف مرد اساتذہ کے ذریعے اور علاقے و دستیابی سے مشروط ہے۔ خواتین اساتذہ صرف آن لائن کلاسز پڑھاتی ہیں۔',

    // Student Dashboard (Planned) Page
    sd_badge: 'زیرِ منصوبہ فیچر',
    sd_title: 'اسٹوڈنٹ ڈیش بورڈ (زیرِ منصوبہ)',
    sd_desc:
      'داخلہ یافتہ خاندانوں کے لیے آنے والی کلاسز کے شیڈول، اساتذہ کے تبصروں اور حفظ یا ناظرہ کی پیش رفت دیکھنے کے لیے ایک پورٹل زیرِ منصوبہ ہے۔',
    sd_submitted_title: 'آپ کی حالیہ محفوظ کردہ درخواستیں',
    sd_submitted_desc: 'اس براؤزر سے مفت ٹرائل، ہوم ٹیوشن یا رابطہ فارم کے ذریعے بھیجی گئی درخواستیں ذیل میں موجود ہیں۔',
    sd_empty: 'ابھی تک اس براؤزر سے کوئی ٹرائل، ہوم ٹیوشن یا رابطہ درخواست جمع نہیں کرائی گئی۔',
  },
};
