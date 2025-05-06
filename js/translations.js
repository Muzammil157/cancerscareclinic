// Translations object
const translations = {
    en: {
        // Navigation
        'home': 'Home',
        'about': 'About Us',
        'services': 'Services',
        'why-us': 'Why Us?',
        'contact': 'Contact',
        
        // Hero Sections
        'virtual-cancer-care': 'VIRTUAL CANCER CARE IN PAKISTAN',
        'empowering-patients': 'Empowering Patients with Expert Virtual Cancer Care',
        'hero-description-1': 'At Cancer Care Clinic, we provide virtual consultations to cancer patients across Pakistan, ensuring accurate diagnosis, precise staging, and personalized treatment plans from the comfort of your home.',
        'hero-description-2': 'Our mission is to bridge the gap between world-class cancer care and accessibility, empowering patients to pursue the best treatment options available globally while receiving support locally in Pakistan.',
        'book-consultation': 'Book Your Virtual Consultation',
        
        // Services
        'how-we-help': 'HOW WE HELP CANCER PATIENTS',
        'comprehensive-services': 'Comprehensive Virtual Cancer Care Services',
        'expert-consultations': 'Expert Virtual Consultations',
        'diagnosis-staging': 'Comprehensive Diagnosis & Staging',
        'treatment-plans': 'Personalized Treatment Plans',
        'medical-reports': 'Detailed Medical Reports',
        'care-planning': 'Advanced Care Planning',
        'second-opinions': 'Second Opinions',
        
        // Why Choose Us
        'why-choose-us': 'WHY CHOOSE US',
        'expert-care': 'Expert Care from Anywhere in Pakistan',
        'accessibility': 'Accessibility',
        'affordability': 'Affordability',
        'global-standards': 'Global Standards, Local Care',
        
        // Contact
        'get-in-touch': 'Get in Touch for Expert Cancer Care',
        'connect-with-us': 'Connect with Us',
        'whatsapp-consultation': 'WhatsApp Consultation',
        'response-time': 'Response Time',
        'chat-whatsapp': 'Chat on WhatsApp',
        
        // Footer
        'contact-us': 'Contact Us',
        'quick-links': 'Quick Links',
        'follow-us': 'Follow Us',
        'all-rights': 'All rights reserved.',

        // Services Section
        'service-1-title': 'Expert Virtual Consultations',
        'service-1-desc': 'Connect with experienced oncologist online for thorough evaluations of your condition. We analyse cancer condition, imaging, and lab results to provide clear, actionable plan and treatment in Pakistan.',
        'service-2-title': 'Comprehensive Diagnosis & Staging',
        'service-2-desc': 'Receive accurate cancer diagnosis and staging using internationally recognized protocols to guide your treatment journey.',
        'service-3-title': 'Personalized Treatment Plans',
        'service-3-desc': 'We create tailored treatment strategies aligned with global standards, including chemotherapy, immunotherapy, targeted treatment, radiation, or surgery recommendations.',
        'service-4-title': 'Detailed Medical Reports',
        'service-4-desc': 'Obtain in-depth medical reports for your local healthcare providers, ensuring continuity of care with treatment options and referrals.',
        'service-5-title': 'Advanced Care Planning',
        'service-5-desc': 'We focus on long-term wellness with follow-up plans, prognosis updates, and palliative care guidance to improve outcomes.',
        'service-6-title': 'Second Opinions',
        'service-6-desc': 'We provide trusted second opinions to help you make informed decisions about your cancer treatment.',

        // Features Section
        'feature-1-title': 'Accessibility',
        'feature-1-desc': 'No travel required—get expert cancer care from anywhere in Pakistan through secure virtual consultations.',
        'feature-2-title': 'Affordability',
        'feature-2-desc': 'Transparent pricing with no hidden costs, making world-class cancer care accessible to more patients.',
        'feature-3-title': 'Global Standards, Local Care',
        'feature-3-desc': 'We combine cutting-edge international guidelines with deep knowledge of local healthcare resources in Pakistan.',

        // Doctor Section
        'meet-founder': 'MEET OUR FOUNDER',
        'dr-saeed-title': 'Dr. Saeed ur Rehman',
        'dr-saeed-subtitle': 'Specialist in Medical Oncology | Compassionate Cancer Care Advocate',
        'current-position': 'Current Position',
        'current-position-desc': 'Specialty Doctor in Medical Oncology at James Cook University Hospital, Middlesbrough, United Kingdom',
        'professional-expertise': 'Professional Expertise',
        'expertise-desc': 'Over 14 years of dedicated experience in medical oncology, specializing in:',
        'qualifications': 'Qualifications & Credentials',
        'why-founded': 'Why I Founded Cancer Care Clinic',
        'why-founded-desc': 'While working in the UK\'s advanced healthcare system, I recognized the urgent need to extend world-class oncology expertise to patients in Pakistan. Through Cancer Care Clinic, I provide virtual consultations to bridge this gap, empowering patients with accurate diagnoses, globally aligned treatment strategies, and compassionate guidance—all from the comfort of their homes.',

        // Team Section
        'our-team': 'OUR TEAM',
        'meet-experts': 'Meet Our Expert Doctors',
        'view-profile': 'View Profile',

        // Testimonials
        'testimonials': 'TESTIMONIALS',
        'what-clients-say': 'What Our Clients Say',

        // Family Support
        'support-system': 'SUPPORT SYSTEM',
        'for-families': 'For Families & Caregivers',
        'family-support-desc': 'We educate and involve families in care decisions, offering resources to help you support your loved ones effectively.',
        'get-support': 'Get Support Resources',

        // Doctor Profile Content
        'dr-kalwar-title': 'Dr. Sanaullah Kalwar',
        'dr-kalwar-speciality': 'Consultant Gastroenterologist',
        'dr-kalwar-location': 'Sukkur, Sindh',
        'dr-kalwar-credentials': 'MBBS, FCPS (Gastroenterology)',
        'dr-kalwar-intro': 'As a gastroenterologist, my role is early detection and diagnosis of gastrointestinal (GI) cancers through advanced procedures, ensuring timely referrals to oncologists for life-saving treatment.',
        'how-i-help': 'How I Help Diagnose GI Cancers',
        'endoscopy-biopsy': '1. Endoscopy & Biopsy:',
        'esophageal-gastric': 'Oesophageal & Gastric Cancers:',
        'colon-cancer': 'Colon Cancer:',
        'ercp': '2. ERCP (Endoscopic Retrograde Cholangiopancreatography):',
        'pancreatic-bile': 'Pancreatic & Cholangiocarcinoma (Bile Duct) Cancers:',
        'liver-screening': '3. Liver Disease & Cancer Screening:',
        'hepatocellular': 'Hepatocellular Carcinoma (Liver Cancer):',
        'early-diagnosis': 'Why Early Diagnosis Matters',
        'gi-cancers': 'GI cancers often show no symptoms until advanced stages. My role is to:',
        'spot-signs': 'Spot subtle warning signs (e.g., weight loss, jaundice, bleeding)',
        'quick-tests': 'Use targeted tests to confirm cancer quickly',
        'refer-oncologist': 'Refer you promptly to a medical oncologist (cancer specialist) to start chemotherapy, immunotherapy, or other treatments',
        'team-approach': 'Working Together for Better Outcomes',
        'team-collaboration': 'Team Approach:',
        'next-steps': 'Your Next Steps:',
        'early-detection': 'Early Detection Saves Lives',
        'ignore-symptoms': 'Don\'t ignore persistent digestive symptoms like persistent vomiting, abdominal pain, jaundice, altered bowel habits, rectal bleeding and weight loss – schedule a consultation today.',
        'book-appointment': 'Book an Appointment',

        // Footer Content
        'medical-center': '123 Medical Center Drive',
        'phone': 'Phone:',
        'copyright': '© 2024 Cancer Care Clinic. All rights reserved.',

        // Additional Doctor Profiles
        'dr-hussain-title': 'Dr. Raiz Hussain',
        'dr-hussain-speciality': 'Consultant Pulmonologist',
        'dr-hussain-location': 'Sukkur, Sindh',
        'dr-hussain-credentials': 'MBBS, FCPS (Pulmonary Medicine)',
        'dr-ahmed-title': 'Dr. Raiz Ahmed',
        'dr-ahmed-speciality': 'Consultant Gastroenterologist',
        'dr-ahmed-location': 'Nawabshah, Sindh',
        'dr-ahmed-credentials': 'MBBS, FCPS (Gastroenterology)',
        'dr-mansoor-title': 'Dr. Samina Mansoor',
        'dr-mansoor-speciality': 'Consultant Breast Oncoplastic Surgeon',
        'dr-mansoor-location': 'Hyderabad',
        'dr-mansoor-credentials': 'MBBS, FCPS (General Surgery), FACS (USA)',
        'dr-mansoor-additional': 'Fellowship in Breast Oncoplastic Surgery (Malaysia)',

        // About Page
        'about-title': 'About Cancer Care Clinic',
        'about-subtitle': 'Providing Expert Virtual Cancer Care in Pakistan',
        'about-intro': 'Cancer Care Clinic is dedicated to bringing world-class cancer care to patients across Pakistan through virtual consultations.',
        'our-mission': 'Our Mission',
        'mission-desc': 'To bridge the gap between world-class cancer care and accessibility, empowering patients to pursue the best treatment options available globally while receiving support locally in Pakistan.',
        'our-vision': 'Our Vision',
        'vision-desc': 'To be the leading provider of virtual cancer care in Pakistan, ensuring every patient has access to expert medical guidance regardless of their location.',
        'our-values': 'Our Values',
        'excellence': 'Excellence',
        'excellence-desc': 'We maintain the highest standards of medical care and professional conduct.',
        'compassion': 'Compassion',
        'compassion-desc': 'We treat each patient with empathy, understanding, and respect.',
        'innovation': 'Innovation',
        'innovation-desc': 'We leverage technology to provide cutting-edge cancer care solutions.',
        'accessibility': 'Accessibility',
        'accessibility-desc': 'We make expert cancer care available to patients across Pakistan.',

        // Services Page
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive Virtual Cancer Care',
        'virtual-consultation': 'Virtual Consultation',
        'virtual-consultation-desc': 'Connect with experienced oncologists online for thorough evaluations of your condition.',
        'diagnosis-staging': 'Diagnosis & Staging',
        'diagnosis-staging-desc': 'Receive accurate cancer diagnosis and staging using internationally recognized protocols.',
        'treatment-planning': 'Treatment Planning',
        'treatment-planning-desc': 'Get personalized treatment strategies aligned with global standards.',
        'second-opinion': 'Second Opinion',
        'second-opinion-desc': 'Seek expert second opinions to make informed decisions about your treatment.',
        'follow-up-care': 'Follow-up Care',
        'follow-up-care-desc': 'Receive ongoing support and monitoring throughout your treatment journey.',
        'palliative-care': 'Palliative Care',
        'palliative-care-desc': 'Access compassionate care focused on improving quality of life.',

        // Why Us Page
        'why-us-title': 'Why Choose Us',
        'why-us-subtitle': 'Expert Care from Anywhere in Pakistan',
        'expertise': 'Expertise',
        'expertise-desc': 'Our team consists of highly qualified oncologists with international experience.',
        'accessibility': 'Accessibility',
        'accessibility-desc': 'Get expert cancer care from anywhere in Pakistan through secure virtual consultations.',
        'affordability': 'Affordability',
        'affordability-desc': 'Transparent pricing with no hidden costs.',
        'technology': 'Technology',
        'technology-desc': 'State-of-the-art virtual consultation platform ensuring seamless communication.',
        'support': 'Support',
        'support-desc': 'Comprehensive support system for patients and their families.',

        // Contact Page
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Get in Touch for Expert Cancer Care',
        'contact-form-title': 'Send us a Message',
        'name': 'Name',
        'email': 'Email',
        'phone': 'Phone',
        'message': 'Message',
        'submit': 'Submit',
        'whatsapp-title': 'WhatsApp Consultation',
        'whatsapp-desc': 'Get quick responses through WhatsApp',
        'response-time': 'Response Time',
        'response-time-desc': 'We aim to respond within 24 hours',
        'chat-whatsapp': 'Chat on WhatsApp'
    },
    ur: {
        // Navigation
        'home': 'ہوم',
        'about': 'ہمارے بارے میں',
        'services': 'خدمات',
        'why-us': 'ہمیں کیوں منتخب کریں؟',
        'contact': 'رابطہ',
        
        // Hero Sections
        'virtual-cancer-care': 'پاکستان میں ورچوئل کینسر کیئر',
        'empowering-patients': 'ماہر ورچوئل کینسر کیئر کے ساتھ مریضوں کو بااختیار بنانا',
        'hero-description-1': 'کینسر کیئر کلینک میں، ہم پاکستان بھر کے کینسر کے مریضوں کو ورچوئل مشاورت فراہم کرتے ہیں، گھر کی سہولت سے درست تشخیص، درست اسٹیجنگ، اور ذاتی نوعیت کے علاج کے منصوبے یقینی بناتے ہیں۔',
        'hero-description-2': 'ہمارا مشن عالمی معیار کی کینسر کیئر اور رسائی کے درمیان خلیج کو پاٹنا ہے، مریضوں کو عالمی سطح پر دستیاب بہترین علاج کے اختیارات کو آگے بڑھانے کے قابل بنانا جبکہ پاکستان میں مقامی طور پر مدد حاصل کرنا۔',
        'book-consultation': 'اپنی ورچوئل مشاورت بک کریں',
        
        // Services
        'how-we-help': 'ہم کینسر کے مریضوں کی کیسے مدد کرتے ہیں',
        'comprehensive-services': 'جامع ورچوئل کینسر کیئر خدمات',
        'expert-consultations': 'ماہر ورچوئل مشاورت',
        'diagnosis-staging': 'جامع تشخیص اور اسٹیجنگ',
        'treatment-plans': 'ذاتی نوعیت کے علاج کے منصوبے',
        'medical-reports': 'تفصیلی طبی رپورٹس',
        'care-planning': 'اعلی درجے کی دیکھ بھال کی منصوبہ بندی',
        'second-opinions': 'دوسری رائے',
        
        // Why Choose Us
        'why-choose-us': 'ہمیں کیوں منتخب کریں',
        'expert-care': 'پاکستان میں کہیں سے بھی ماہر دیکھ بھال',
        'accessibility': 'رسائی',
        'affordability': 'قابل برداشت',
        'global-standards': 'عالمی معیار، مقامی دیکھ بھال',
        
        // Contact
        'get-in-touch': 'ماہر کینسر کیئر کے لیے ہم سے رابطہ کریں',
        'connect-with-us': 'ہم سے رابطہ کریں',
        'whatsapp-consultation': 'واٹس ایپ مشاورت',
        'response-time': 'جواب کا وقت',
        'chat-whatsapp': 'واٹس ایپ پر چیٹ کریں',
        
        // Footer
        'contact-us': 'ہم سے رابطہ کریں',
        'quick-links': 'فوری لنکس',
        'follow-us': 'ہمیں فالو کریں',
        'all-rights': 'جملہ حقوق محفوظ ہیں۔',

        // Services Section
        'service-1-title': 'ماہر ورچوئل مشاورت',
        'service-1-desc': 'اپنی حالت کی مکمل تشخیص کے لیے آن لائن تجربہ کار آنکولوجسٹ سے رابطہ کریں۔ ہم کینسر کی حالت، امیجنگ، اور لیب کے نتائج کا تجزیہ کرتے ہیں تاکہ پاکستان میں واضح، قابل عمل منصوبہ اور علاج فراہم کر سکیں۔',
        'service-2-title': 'جامع تشخیص اور اسٹیجنگ',
        'service-2-desc': 'بین الاقوامی طور پر تسلیم شدہ پروٹوکول کا استعمال کرتے ہوئے درست کینسر کی تشخیص اور اسٹیجنگ حاصل کریں تاکہ آپ کے علاج کے سفر کی رہنمائی کی جا سکے۔',
        'service-3-title': 'ذاتی نوعیت کے علاج کے منصوبے',
        'service-3-desc': 'ہم عالمی معیار کے مطابق ذاتی نوعیت کے علاج کی حکمت عملی تیار کرتے ہیں، جس میں کیموتھراپی، امیونوتھراپی، ٹارگٹڈ تھراپی، ریڈیئیشن، یا سرجری کی سفارشات شامل ہیں۔',
        'service-4-title': 'تفصیلی طبی رپورٹس',
        'service-4-desc': 'اپنے مقامی ہیلتھ کیئر فراہم کنندگان کے لیے تفصیلی طبی رپورٹس حاصل کریں، علاج کے اختیارات اور حوالہ جات کے ساتھ دیکھ بھال کی تسلسل کو یقینی بنائیں۔',
        'service-5-title': 'اعلی درجے کی دیکھ بھال کی منصوبہ بندی',
        'service-5-desc': 'ہم طویل مدتی صحت و تندرستی پر توجہ دیتے ہیں، فالو اپ پلانز، پیش گوئی کی اپ ڈیٹس، اور پیلیٹیو کیئر کی رہنمائی کے ساتھ نتائج کو بہتر بناتے ہیں۔',
        'service-6-title': 'دوسری رائے',
        'service-6-desc': 'ہم آپ کو اپنے کینسر کے علاج کے بارے میں باخبر فیصلے کرنے میں مدد کے لیے قابل اعتماد دوسری رائے فراہم کرتے ہیں۔',

        // Features Section
        'feature-1-title': 'رسائی',
        'feature-1-desc': 'سفر کی ضرورت نہیں—محفوظ ورچوئل مشاورت کے ذریعے پاکستان میں کہیں سے بھی ماہر کینسر کیئر حاصل کریں۔',
        'feature-2-title': 'قابل برداشت',
        'feature-2-desc': 'شفاف قیمتوں کے ساتھ کوئی پوشیدہ اخراجات نہیں، عالمی معیار کی کینسر کیئر کو زیادہ مریضوں کے لیے قابل رسائی بنانا۔',
        'feature-3-title': 'عالمی معیار، مقامی دیکھ بھال',
        'feature-3-desc': 'ہم جدید بین الاقوامی رہنما خطوط کو پاکستان میں مقامی ہیلتھ کیئر وسائل کے گہرے علم کے ساتھ جوڑتے ہیں۔',

        // Doctor Section
        'meet-founder': 'ہمارے بانی سے ملیں',
        'dr-saeed-title': 'ڈاکٹر سعید الرحمن',
        'dr-saeed-subtitle': 'میڈیکل آنکولوجی میں ماہر | ہمدرد کینسر کیئر وکیل',
        'current-position': 'موجودہ عہدہ',
        'current-position-desc': 'جیمز کک یونیورسٹی ہسپتال، مڈلزبرو، برطانیہ میں میڈیکل آنکولوجی میں اسپیشلٹی ڈاکٹر',
        'professional-expertise': 'پیشہ ورانہ مہارت',
        'expertise-desc': 'میڈیکل آنکولوجی میں 14 سال سے زیادہ کا وقف تجربہ، جس میں مہارت شامل ہے:',
        'qualifications': 'قابلیت اور اسناد',
        'why-founded': 'میں نے کینسر کیئر کلینک کیوں قائم کیا',
        'why-founded-desc': 'برطانیہ کے جدید ہیلتھ کیئر سسٹم میں کام کرتے ہوئے، میں نے پاکستان میں مریضوں کو عالمی معیار کی آنکولوجی مہارت فراہم کرنے کی فوری ضرورت کو پہچانا۔ کینسر کیئر کلینک کے ذریعے، میں اس خلیج کو پاٹنے کے لیے ورچوئل مشاورت فراہم کرتا ہوں، مریضوں کو درست تشخیص، عالمی سطح پر ہم آہنگ علاج کی حکمت عملی، اور ہمدرد رہنمائی فراہم کرتا ہوں—سب کچھ ان کے گھر کی سہولت سے۔',

        // Team Section
        'our-team': 'ہماری ٹیم',
        'meet-experts': 'ہمارے ماہر ڈاکٹروں سے ملیں',
        'view-profile': 'پروفائل دیکھیں',

        // Testimonials
        'testimonials': 'گاہکوں کی رائے',
        'what-clients-say': 'ہمارے گاہک کیا کہتے ہیں',

        // Family Support
        'support-system': 'سپورٹ سسٹم',
        'for-families': 'خاندانوں اور دیکھ بھال کرنے والوں کے لیے',
        'family-support-desc': 'ہم خاندانوں کو دیکھ بھال کے فیصلوں میں تعلیم دیتے اور شامل کرتے ہیں، آپ کو اپنے پیاروں کی مؤثر طریقے سے مدد کرنے کے لیے وسائل فراہم کرتے ہیں۔',
        'get-support': 'سپورٹ وسائل حاصل کریں',

        // Doctor Profile Content
        'dr-kalwar-title': 'ڈاکٹر ثناء اللہ کلور',
        'dr-kalwar-speciality': 'کانسلٹنٹ گیسٹرو اینٹرولوجسٹ',
        'dr-kalwar-location': 'سکھر، سندھ',
        'dr-kalwar-credentials': 'ایم بی بی ایس، ایف سی پی ایس (گیسٹرو اینٹرولوجی)',
        'dr-kalwar-intro': 'گیسٹرو اینٹرولوجسٹ کے طور پر، میرا کردار گیسٹرو انٹیسٹائنل (جی آئی) کینسر کی ابتدائی تشخیص اور تشخیص ہے، جو زندگی بچانے والے علاج کے لیے آنکولوجسٹس کو بروقت حوالہ دینے کو یقینی بناتا ہے۔',
        'how-i-help': 'میں جی آئی کینسر کی تشخیص میں کیسے مدد کرتا ہوں',
        'endoscopy-biopsy': '1. اینڈوسکوپی اور بائیوپسی:',
        'esophageal-gastric': 'غذائی نالی اور معدے کے کینسر:',
        'colon-cancer': 'بڑی آنت کا کینسر:',
        'ercp': '2. ای آر سی پی (اینڈوسکوپک ریٹروگریڈ کولینجیوپینکریٹوگرافی):',
        'pancreatic-bile': 'لبلبہ اور کولینجیوکارسینوما (پت کی نالی) کینسر:',
        'liver-screening': '3. جگر کی بیماری اور کینسر کی اسکریننگ:',
        'hepatocellular': 'ہیپاٹوسیلولر کارسینوما (جگر کا کینسر):',
        'early-diagnosis': 'ابتدائی تشخیص کیوں اہم ہے',
        'gi-cancers': 'جی آئی کینسر اکثر ترقی یافتہ مراحل تک کوئی علامات نہیں دکھاتے۔ میرا کردار ہے:',
        'spot-signs': 'خفیف انتباہی علامات کو دیکھنا (مثلاً وزن میں کمی، یرقان، خون بہنا)',
        'quick-tests': 'کینسر کی تصدیق کے لیے فوری ٹیسٹ استعمال کریں',
        'refer-oncologist': 'آپ کو کیموتھراپی، امیونوتھراپی، یا دیگر علاج شروع کرنے کے لیے فوری طور پر میڈیکل آنکولوجسٹ (کینسر کے ماہر) کے پاس بھیجیں',
        'team-approach': 'بہتر نتائج کے لیے مل کر کام کرنا',
        'team-collaboration': 'ٹیم کا نقطہ نظر:',
        'next-steps': 'آپ کے اگلے اقدامات:',
        'early-detection': 'ابتدائی تشخیص زندگیاں بچاتی ہے',
        'ignore-symptoms': 'مسلسل قے، پیٹ میں درد، یرقان، آنتوں کی عادات میں تبدیلی، مقعد سے خون بہنا اور وزن میں کمی جیسی مسلسل ہاضمہ کی علامات کو نظر انداز نہ کریں – آج ہی مشاورت کا وقت طے کریں۔',
        'book-appointment': 'اپائنٹمنٹ بک کریں',

        // Footer Content
        'medical-center': '123 میڈیکل سینٹر ڈرائیو',
        'phone': 'فون:',
        'copyright': '© 2024 کینسر کیئر کلینک۔ جملہ حقوق محفوظ ہیں۔',

        // Additional Doctor Profiles
        'dr-hussain-title': 'ڈاکٹر رئیس حسین',
        'dr-hussain-speciality': 'کانسلٹنٹ پلمونولوجسٹ',
        'dr-hussain-location': 'سکھر، سندھ',
        'dr-hussain-credentials': 'ایم بی بی ایس، ایف سی پی ایس (پلمونری میڈیسن)',
        'dr-ahmed-title': 'ڈاکٹر رئیس احمد',
        'dr-ahmed-speciality': 'کانسلٹنٹ گیسٹرو اینٹرولوجسٹ',
        'dr-ahmed-location': 'نواب شاہ، سندھ',
        'dr-ahmed-credentials': 'ایم بی بی ایس، ایف سی پی ایس (گیسٹرو اینٹرولوجی)',
        'dr-mansoor-title': 'ڈاکٹر ثمینہ منصور',
        'dr-mansoor-speciality': 'کانسلٹنٹ بریسٹ آنکوپلاسٹک سرجن',
        'dr-mansoor-location': 'حیدرآباد',
        'dr-mansoor-credentials': 'ایم بی بی ایس، ایف سی پی ایس (جنرل سرجری)، ایف اے سی ایس (یو ایس اے)',
        'dr-mansoor-additional': 'بریسٹ آنکوپلاسٹک سرجری میں فیلوشپ (ملائیشیا)',

        // About Page
        'about-title': 'کینسر کیئر کلینک کے بارے میں',
        'about-subtitle': 'پاکستان میں ماہر ورچوئل کینسر کیئر فراہم کرنا',
        'about-intro': 'کینسر کیئر کلینک ورچوئل مشاورت کے ذریعے پاکستان بھر کے مریضوں کو عالمی معیار کی کینسر کیئر فراہم کرنے کے لیے وقف ہے۔',
        'our-mission': 'ہمارا مشن',
        'mission-desc': 'عالمی معیار کی کینسر کیئر اور رسائی کے درمیان خلیج کو پاٹنا، مریضوں کو عالمی سطح پر دستیاب بہترین علاج کے اختیارات کو آگے بڑھانے کے قابل بنانا جبکہ پاکستان میں مقامی طور پر مدد حاصل کرنا۔',
        'our-vision': 'ہماری وژن',
        'vision-desc': 'پاکستان میں ورچوئل کینسر کیئر کا معروف فراہم کنندہ بننا، یقینی بنانا کہ ہر مریض کو ان کے مقام سے قطع نظر ماہر طبی رہنمائی تک رسائی حاصل ہو۔',
        'our-values': 'ہماری اقدار',
        'excellence': 'برتری',
        'excellence-desc': 'ہم طبی دیکھ بھال اور پیشہ ورانہ رویے کے اعلیٰ معیارات کو برقرار رکھتے ہیں۔',
        'compassion': 'ہمدردی',
        'compassion-desc': 'ہم ہر مریض کے ساتھ ہمدردی، تفہیم، اور احترام سے پیش آتے ہیں۔',
        'innovation': 'جدت',
        'innovation-desc': 'ہم جدید کینسر کیئر حل فراہم کرنے کے لیے ٹیکنالوجی کا استعمال کرتے ہیں۔',
        'accessibility': 'رسائی',
        'accessibility-desc': 'ہم پاکستان بھر کے مریضوں کے لیے ماہر کینسر کیئر کو قابل رسائی بناتے ہیں۔',

        // Services Page
        'services-title': 'ہماری خدمات',
        'services-subtitle': 'جامع ورچوئل کینسر کیئر',
        'virtual-consultation': 'ورچوئل مشاورت',
        'virtual-consultation-desc': 'اپنی حالت کی مکمل تشخیص کے لیے آن لائن تجربہ کار آنکولوجسٹ سے رابطہ کریں۔',
        'diagnosis-staging': 'تشخیص اور اسٹیجنگ',
        'diagnosis-staging-desc': 'بین الاقوامی طور پر تسلیم شدہ پروٹوکول کا استعمال کرتے ہوئے درست کینسر کی تشخیص اور اسٹیجنگ حاصل کریں۔',
        'treatment-planning': 'علاج کی منصوبہ بندی',
        'treatment-planning-desc': 'عالمی معیار کے مطابق ذاتی نوعیت کے علاج کی حکمت عملی حاصل کریں۔',
        'second-opinion': 'دوسری رائے',
        'second-opinion-desc': 'اپنے علاج کے بارے میں باخبر فیصلے کرنے کے لیے ماہر دوسری رائے حاصل کریں۔',
        'follow-up-care': 'فالو اپ کیئر',
        'follow-up-care-desc': 'اپنے علاج کے سفر کے دوران مسلسل مدد اور نگرانی حاصل کریں۔',
        'palliative-care': 'پیلیٹیو کیئر',
        'palliative-care-desc': 'زندگی کے معیار کو بہتر بنانے پر توجہ مرکوز ہمدرد دیکھ بھال تک رسائی حاصل کریں۔',

        // Why Us Page
        'why-us-title': 'ہمیں کیوں منتخب کریں',
        'why-us-subtitle': 'پاکستان میں کہیں سے بھی ماہر دیکھ بھال',
        'expertise': 'مہارت',
        'expertise-desc': 'ہماری ٹیم بین الاقوامی تجربے کے حامل اعلیٰ تعلیم یافتہ آنکولوجسٹس پر مشتمل ہے۔',
        'accessibility': 'رسائی',
        'accessibility-desc': 'محفوظ ورچوئل مشاورت کے ذریعے پاکستان میں کہیں سے بھی ماہر کینسر کیئر حاصل کریں۔',
        'affordability': 'قابل برداشت',
        'affordability-desc': 'شفاف قیمتوں کے ساتھ کوئی پوشیدہ اخراجات نہیں۔',
        'technology': 'ٹیکنالوجی',
        'technology-desc': 'بے عیب مواصلات کو یقینی بنانے کے لیے جدید ورچوئل مشاورت پلیٹ فارم۔',
        'support': 'مدد',
        'support-desc': 'مریضوں اور ان کے خاندانوں کے لیے جامع سپورٹ سسٹم۔',

        // Contact Page
        'contact-title': 'ہم سے رابطہ کریں',
        'contact-subtitle': 'ماہر کینسر کیئر کے لیے ہم سے رابطہ کریں',
        'contact-form-title': 'ہمیں پیغام بھیجیں',
        'name': 'نام',
        'email': 'ای میل',
        'phone': 'فون',
        'message': 'پیغام',
        'submit': 'جمع کرائیں',
        'whatsapp-title': 'واٹس ایپ مشاورت',
        'whatsapp-desc': 'واٹس ایپ کے ذریعے فوری جوابات حاصل کریں',
        'response-time': 'جواب کا وقت',
        'response-time-desc': 'ہم 24 گھنٹوں کے اندر جواب دینے کی کوشش کرتے ہیں',
        'chat-whatsapp': 'واٹس ایپ پر چیٹ کریں'
    }
};

// Function to change language
function changeLanguage(lang) {
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update the language selector value
    document.getElementById('headerLangSelect').value = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLanguage);
});