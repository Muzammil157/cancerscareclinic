// Translations object
const translations = {
    en: {
        // ... existing code ...

        // Services Page
        "services-hero-title": "Our Services",
        "services-hero-subtitle": "Comprehensive cancer care services tailored to your needs",
        
        // Main Services
        "service-1-title": "Chemotherapy",
        "service-1-desc": "Advanced chemotherapy treatments using the latest medications and protocols to target cancer cells effectively while minimizing side effects.",
        "service-1-item-1": "Intravenous chemotherapy",
        "service-1-item-2": "Oral chemotherapy",
        "service-1-item-3": "Targeted therapy",
        "service-1-item-4": "Immunotherapy",

        "service-2-title": "Radiation Therapy",
        "service-2-desc": "State-of-the-art radiation therapy using advanced technology to precisely target tumors while protecting healthy tissue.",
        "service-2-item-1": "External beam radiation",
        "service-2-item-2": "Brachytherapy",
        "service-2-item-3": "Stereotactic radiosurgery",
        "service-2-item-4": "Proton therapy",

        "service-3-title": "Surgical Oncology",
        "service-3-desc": "Expert surgical care for various types of cancer, performed by experienced surgical oncologists.",
        "service-3-item-1": "Minimally invasive surgery",
        "service-3-item-2": "Robotic-assisted surgery",
        "service-3-item-3": "Reconstructive surgery",
        "service-3-item-4": "Palliative surgery",

        "service-4-title": "Support Services",
        "service-4-desc": "Comprehensive support services to help patients and their families throughout their cancer journey.",
        "service-4-item-1": "Nutrition counseling",
        "service-4-item-2": "Psychological support",
        "service-4-item-3": "Pain management",
        "service-4-item-4": "Rehabilitation services",

        // Additional Services
        "additional-services-title": "Additional Services",
        "additional-1-title": "Diagnostic Services",
        "additional-1-desc": "Advanced imaging and laboratory services for accurate cancer diagnosis",
        "additional-2-title": "Genetic Testing",
        "additional-2-desc": "Comprehensive genetic testing and counseling services",
        "additional-3-title": "Clinical Trials",
        "additional-3-desc": "Access to cutting-edge clinical trials and research studies",

        // ... existing code ...
    },
    ur: {
        // ... existing code ...

        // Services Page
        "services-hero-title": "ہماری خدمات",
        "services-hero-subtitle": "آپ کی ضروریات کے مطابق جامع کینسر کی دیکھ بھال کی خدمات",
        
        // Main Services
        "service-1-title": "کیموتھراپی",
        "service-1-desc": "جدید ترین ادویات اور پروٹوکول کا استعمال کرتے ہوئے کینسر کے خلیات کو مؤثر طریقے سے نشانہ بنانے کے لیے جدید کیموتھراپی علاج۔",
        "service-1-item-1": "انٹراوینس کیموتھراپی",
        "service-1-item-2": "زبانی کیموتھراپی",
        "service-1-item-3": "ہدفی تھراپی",
        "service-1-item-4": "امیونوتھراپی",

        "service-2-title": "ریڈیئیشن تھراپی",
        "service-2-desc": "صحت مند بافتوں کی حفاظت کرتے ہوئے ٹیومر کو درست طریقے سے نشانہ بنانے کے لیے جدید ٹیکنالوجی کا استعمال۔",
        "service-2-item-1": "بیرونی بیم ریڈیئیشن",
        "service-2-item-2": "براکی تھراپی",
        "service-2-item-3": "سٹیریوٹیکٹک ریڈیوسرجری",
        "service-2-item-4": "پروٹون تھراپی",

        "service-3-title": "سرجیکل آنکالوجی",
        "service-3-desc": "تجربہ کار سرجیکل آنکالوجسٹس کی طرف سے مختلف قسم کے کینسر کے لیے ماہرانہ سرجیکل دیکھ بھال۔",
        "service-3-item-1": "کم سے کم انویسو سرجری",
        "service-3-item-2": "روبوٹک اسسٹڈ سرجری",
        "service-3-item-3": "تعمیری سرجری",
        "service-3-item-4": "پیلیئیٹو سرجری",

        "service-4-title": "معاونتی خدمات",
        "service-4-desc": "مریضوں اور ان کے خاندانوں کی مدد کے لیے جامع معاونتی خدمات۔",
        "service-4-item-1": "غذائی مشاورت",
        "service-4-item-2": "نفسیاتی مدد",
        "service-4-item-3": "درد کا انتظام",
        "service-4-item-4": "بحالی کی خدمات",

        // Additional Services
        "additional-services-title": "اضافی خدمات",
        "additional-1-title": "تشخیصی خدمات",
        "additional-1-desc": "کینسر کی درست تشخیص کے لیے جدید امیجنگ اور لیبارٹری خدمات",
        "additional-2-title": "جینیاتی ٹیسٹنگ",
        "additional-2-desc": "جامع جینیاتی ٹیسٹنگ اور مشاورتی خدمات",
        "additional-3-title": "کلینیکل ٹرائلز",
        "additional-3-desc": "جدید ترین کلینیکل ٹرائلز اور تحقیقی مطالعات تک رسائی",

        // ... existing code ...
    }
};

// Function to change language
function changeLanguage(lang) {
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Update both header and footer language selectors
    const headerLangSelect = document.getElementById('headerLangSelect');
    const footerLangSelect = document.getElementById('footerLangSelect');
    if (headerLangSelect) headerLangSelect.value = lang;
    if (footerLangSelect) footerLangSelect.value = lang;
    
    // Get all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    
    // Update text content for each element
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update the page direction based on language
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
}

// Initialize translations when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the saved language preference or default to English
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Update language selectors to saved preference
    const headerLangSelect = document.getElementById('headerLangSelect');
    const footerLangSelect = document.getElementById('footerLangSelect');
    if (headerLangSelect) headerLangSelect.value = savedLang;
    if (footerLangSelect) footerLangSelect.value = savedLang;
    
    // Apply translations
    changeLanguage(savedLang);
});