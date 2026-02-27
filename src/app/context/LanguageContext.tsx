import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Hero Section
  'hero.badge': {
    bn: 'প্রাকৃতিক ভেষজ উপাদান',
    en: 'Natural Herbal Ingredients'
  },
  'hero.title.prefix': {
    bn: 'ফিরিয়ে আনুন',
    en: 'Bring back'
  },
  'hero.title.your': {
    bn: 'আপনার',
    en: 'your'
  },
  'hero.title.vitality': {
    bn: 'প্রাণশক্তি',
    en: 'Vitality'
  },
  'hero.subtitle.1': {
    bn: 'হারানো যৌবন ও শক্তি ফিরে পেতে ১০০% কার্যকরী প্রাকৃতিক সমাধান।',
    en: '100% effective natural solution to regain lost youth and energy.'
  },
  'hero.subtitle.2': {
    bn: 'কোন পার্শ্বপ্রতিক্রিয়া ছাড়াই।',
    en: 'Without any side effects.'
  },
  'hero.cta': {
    bn: 'অর্ডার করুন',
    en: 'Order Now'
  },
  'hero.social.count': {
    bn: '৫০০০+',
    en: '5000+'
  },
  'hero.social.label': {
    bn: 'সন্তুষ্ট গ্রাহক',
    en: 'Satisfied Customers'
  },
  'hero.card1.label': {
    bn: 'গ্যারান্টি',
    en: 'Guarantee'
  },
  'hero.card1.value': {
    bn: 'প্রিমিয়াম কোয়ালিটি',
    en: 'Premium Quality'
  },
  'hero.card2.label': {
    bn: 'উপাদান',
    en: 'Ingredients'
  },
  'hero.card2.value': {
    bn: '১০০% প্রাকৃতিক',
    en: '100% Natural'
  },
  
  // Trust Assurance Section
  'trust.title.prefix': {
    bn: 'আমাদের উপর কেন',
    en: 'Why Trust'
  },
  'trust.title.suffix': {
    bn: 'আস্থা রাখবেন?',
    en: 'Us?'
  },
  'trust.badge.title': {
    bn: 'সার্টিফাইড কোয়ালিটি',
    en: 'Certified Quality'
  },
  'trust.badge.subtitle': {
    bn: '১০০% গ্যারান্টিযুক্ত',
    en: '100% Guaranteed'
  },
  'trust.1.title': {
    bn: '১০০% বিশুদ্ধ ও প্রাকৃতিক',
    en: '100% Pure & Natural'
  },
  'trust.1.desc': {
    bn: 'আমরা নিশ্চিত করি প্রতিটি উপাদান সম্পূর্ণ কেমিক্যালমুক্ত ও প্রাকৃতিক।',
    en: 'We ensure every ingredient is completely chemical-free and natural.'
  },
  'trust.2.title': {
    bn: 'প্রিমিয়াম কোয়ালিটি নিশ্���য়তা',
    en: 'Premium Quality Assurance'
  },
  'trust.2.desc': {
    bn: 'আন্তর্জাতিক মানদণ্ড মেনে সর্বোচ্চ সতর্কতার সাথে প্রস্তুত ও প্যাকেজিং করা হয়।',
    en: 'Prepared and packaged with utmost care following international standards.'
  },
  'trust.3.title': {
    bn: 'নিজস্ব তদারকিতে প্রস্তুত',
    en: 'Prepared Under Own Supervision'
  },
  'trust.3.desc': {
    bn: 'উৎপাদন থেকে শুরু করে গ্রাহকের হাতে পৌঁছানো পর্যন্ত সব কিছু আমাদের নিজস্ব তদারকিতে।',
    en: 'Everything from production to delivery is under our own supervision.'
  },
  'trust.4.title': {
    bn: '২৪/৭ কাস্টমার সাপোর্ট',
    en: '24/7 Customer Support'
  },
  'trust.4.desc': {
    bn: 'যেকোনো প্রয়োজনে বা পরামর্শে আমাদের বিশেষজ্ঞ টিম সর্বদা আপনার পাশে আছে।',
    en: 'Our expert team is always by your side for any need or advice.'
  },

  // Ingredients Section
  'ingredients.title.prefix': {
    bn: 'মূল',
    en: 'Key'
  },
  'ingredients.title.suffix': {
    bn: 'উপাদানসমূহ',
    en: 'Ingredients'
  },
  'ingredients.subtitle': {
    bn: 'আমরা ব্যবহার করি বিশ্বের সেরা উৎস থেকে সংগৃহীত সম্পূর্ণ প্রাকৃতিক ও ভেষজ উপাদান। প্রতিটি উপাদান বিশুদ্ধ এবং পরীক্ষিত।',
    en: "We use completely natural and herbal ingredients collected from the world's best sources. Each ingredient is pure and tested."
  },
  'ingredients.secret.title': {
    bn: 'আরও ১১+ টি গোপন ভেষজ উপাদান',
    en: '11+ More Secret Herbal Ingredients'
  },
  'ingredients.secret.desc': {
    bn: 'যা আপনার শক্তি বৃদ্ধিতে সহায়তা করে',
    en: 'Which helps increase your energy'
  },
  
  // Ingredient Items
  'ingredient.1.name': { bn: 'শিলাজিৎ', en: 'Shilajit' },
  'ingredient.1.desc': { bn: 'শক্তি ও সজীবতা', en: 'Energy & Vitality' },
  'ingredient.2.name': { bn: 'জাফরান', en: 'Saffron' },
  'ingredient.2.desc': { bn: 'মানসিক প্রশান্তি', en: 'Mental Peace' },
  'ingredient.3.name': { bn: 'মধু', en: 'Honey' },
  'ingredient.3.desc': { bn: 'প্রাকৃতিক বাহক', en: 'Natural Carrier' },
  'ingredient.4.name': { bn: 'অশ্বগন্ধা', en: 'Ashwagandha' },
  'ingredient.4.desc': { bn: 'মানসিক চাপ মুক্তি', en: 'Stress Relief' },
  'ingredient.5.name': { bn: 'জিনসেং', en: 'Ginseng' },
  'ingredient.5.desc': { bn: 'শারীরিক সক্ষমতা', en: 'Physical Ability' },
  'ingredient.6.name': { bn: 'কালিজিরা', en: 'Black Cumin' },
  'ingredient.6.desc': { bn: 'রোগ প্রতিরোধ ক্ষমতা', en: 'Immunity' },
  'ingredient.7.name': { bn: 'আখরোট', en: 'Walnut' },
  'ingredient.7.desc': { bn: 'মস্তিষ্কের স্বাস্থ্য', en: 'Brain Health' },
  'ingredient.8.name': { bn: 'কাজু বাদাম', en: 'Cashew Nut' },
  'ingredient.8.desc': { bn: 'প্রাকৃতিক শক্তি', en: 'Natural Energy' },

  // Benefits Section
  'benefits.title.prefix': {
    bn: 'কেন খাবেন',
    en: 'Why consume'
  },
  'benefits.subtitle': {
    bn: 'সুস্থ ও সবল জীবনের জন্য প্রকৃতির সেরা উপহার। জেনে নিন এর বিশেষ উপকারিতাগুলো।',
    en: "Nature's best gift for a healthy and strong life. Learn about its special benefits."
  },
  'benefits.1.title': {
    bn: 'সহনশীলতা ও ক্লান্তি',
    en: 'Endurance & Fatigue'
  },
  'benefits.1.desc': {
    bn: 'সহনশীলতা বাড়ায় ও ক্লান্তি দূর করে।',
    en: 'Increases endurance and eliminates fatigue.'
  },
  'benefits.2.title': {
    bn: 'শারীরিক শক্তি',
    en: 'Physical Strength'
  },
  'benefits.2.desc': {
    bn: 'শারীরিক শক্তি ও স্ট্যামিনা বাড়ায়।',
    en: 'Increases physical strength and stamina.'
  },
  'benefits.3.title': {
    bn: 'উর্বরতা ও যৌনক্ষমতা',
    en: 'Fertility & Sexual Potency'
  },
  'benefits.3.desc': {
    bn: 'উর্বরতা ও যৌনক্ষমতা বাড়ায়।',
    en: 'Increases fertility and sexual potency.'
  },
  'benefits.4.title': {
    bn: 'হরমোন ভারসাম্য',
    en: 'Hormonal Balance'
  },
  'benefits.4.desc': {
    bn: 'হরমোন ভারসাম্য রক্ষা করে।',
    en: 'Maintains hormonal balance.'
  },
  'benefits.5.title': {
    bn: 'স্ট্রেস ও উদ্বেগ',
    en: 'Stress & Anxiety'
  },
  'benefits.5.desc': {
    bn: 'স্ট্রেস ও উদ্বেগ কমায়।',
    en: 'Reduces stress and anxiety.'
  },
  'benefits.6.title': {
    bn: 'টেস্টোস্টেরন বৃদ্ধি',
    en: 'Testosterone Boost'
  },
  'benefits.6.desc': {
    bn: 'টেস্টোস্টেরন বৃদ্ধিতে সহায়ক।',
    en: 'Helps in increasing testosterone.'
  },

  // Header
  'header.order': {
    bn: 'অর্ডার করুন',
    en: 'Order Now'
  },

  // Order Section
  'order.instruction': {
    bn: 'অর্ডার করতে আপনার নাম, সম্পূর্ণ ঠিকানা এবং মোবাইল নাম্বার দিয়ে অর্ডার কনফার্ম করুন।',
    en: 'To order, please confirm your order with your name, full address, and mobile number.'
  },
  'order.select_quantity': {
    bn: 'পরিমান সিলেক্ট করুন',
    en: 'Select Quantity'
  },
  'order.best_value': {
    bn: 'বেস্ট ভ্যালু',
    en: 'Best Value'
  },
  'order.best': {
    bn: 'সেরা',
    en: 'Best'
  },
  'order.recommended': {
    bn: 'প্রস্তাবিত',
    en: 'Recommended'
  },
  'order.billing_address': {
    bn: 'বিলিং এড্রেস',
    en: 'Billing Address'
  },
  'order.enter_name': {
    bn: 'নাম লিখুন *',
    en: 'Enter Name *'
  },
  'order.placeholder_name': {
    bn: 'আপনার পূর্ণ নাম',
    en: 'Your Full Name'
  },
  'order.error_name': {
    bn: 'নামের ঘরটি পূরণ করুন',
    en: 'Please fill in the name field'
  },
  'order.enter_mobile': {
    bn: 'মোবাইল নাম্বার লিখুন *',
    en: 'Enter Mobile Number *'
  },
  'order.placeholder_mobile': {
    bn: 'আপনার মোবাইল নাম্বার',
    en: 'Your Mobile Number'
  },
  'order.error_mobile': {
    bn: 'মোবাইল নাম্বার দিন',
    en: 'Enter mobile number'
  },
  'order.error_mobile_invalid': {
    bn: 'সঠিক মোবাইল নাম্বার দিন (১১ ডিজিট)',
    en: 'Enter valid mobile number (11 digits)'
  },
  'order.enter_address': {
    bn: 'থানাসহ ঠিকানা লিখুন *',
    en: 'Enter Address with Thana *'
  },
  'order.placeholder_address': {
    bn: 'আপনার সম্পূর্ণ ঠিকানা',
    en: 'Your Full Address'
  },
  'order.error_address': {
    bn: 'ঠিকানা দিন',
    en: 'Enter address'
  },
  'order.district': {
    bn: 'জেলা *',
    en: 'District *'
  },
  'order.placeholder_district': {
    bn: 'জেলা লিখুন বা সিলেক্ট করুন',
    en: 'Enter or Select District'
  },
  'order.error_district': {
    bn: 'জেলা সিলেক্ট করুন',
    en: 'Select District'
  },
  'order.no_district_found': {
    bn: 'কোনো জেলা খুঁজে পাওয়া যায়নি',
    en: 'No district found'
  },
  'order.shipping_area': {
    bn: 'শিপিং এরিয়া *',
    en: 'Shipping Area *'
  },
  'order.inside_dhaka': {
    bn: 'ঢাকার ভিতরে',
    en: 'Inside Dhaka'
  },
  'order.outside_dhaka': {
    bn: 'ঢাকার বাহিরে',
    en: 'Outside Dhaka'
  },
  'order.your_order': {
    bn: 'আপনার অর্ডার',
    en: 'Your Order'
  },
  'order.no_product_selected': {
    bn: 'কোনো পণ্য সিলেক্ট করা হয়নি',
    en: 'No product selected'
  },
  'order.subtotal': {
    bn: 'সাবটোটাল',
    en: 'Subtotal'
  },
  'order.delivery_charge': {
    bn: 'ডেলিভারি চার্জ',
    en: 'Delivery Charge'
  },
  'order.total': {
    bn: 'সর্বমোট',
    en: 'Total'
  },
  'order.confirm_button': {
    bn: 'অর্ডার কনফার্ম করুন',
    en: 'Confirm Order'
  },
  'order.processing': {
    bn: 'অর্ডার প্রসেসিং...',
    en: 'Processing Order...'
  },
  'order.disclaimer': {
    bn: 'অর্ডার কনফার্ম বাটনে ক্লিক করার পর আমাদের প্রতিনিধি আপনাকে কল করবেন।',
    en: 'Our representative will call you after clicking the confirm order button.'
  },

  // Social Proof & FAQ Section
  'social.title': {
    bn: 'কাস্টমারদের মতামত ও প্রশ্নোত্তর',
    en: 'Customer Feedback & FAQ'
  },
  'social.faq.title': {
    bn: 'সচরাচর জিজ্ঞাসিত প্রশ্ন',
    en: 'Frequently Asked Questions'
  },
  
  // Reviews
  'review.1.name': { bn: 'রহিম উদ্দিন', en: 'Rahim Uddin' },
  'review.1.text': { 
    bn: 'সুলতান-ই-তারকীব ব্যবহার করে আমি সত্যিই উপকৃত। আমার এনার্জি লেভেল এখন অনেক ভালো।', 
    en: 'I really benefited from using Sultan-E-Tarkeeb. My energy level is much better now.' 
  },
  'review.2.name': { bn: 'আব্দুল করিম', en: 'Abdul Karim' },
  'review.2.text': { 
    bn: 'অসাধারণ একটি পণ্য! কোনো পার্শ্বপ্রতিক্রিয়া নেই এবং খুব দ্রুত কাজ করে। সবাইকে ব্যবহার করার পরামর্শ দিচ্ছি।', 
    en: 'An amazing product! No side effects and works very fast. I recommend everyone to use it.' 
  },
  'review.3.name': { bn: 'জামাল হোসেন', en: 'Jamal Hossain' },
  'review.3.text': { 
    bn: 'আমি গত ১ মাস ধরে এটি খাচ্ছি। আমার ঘুমের সমস্যা দূর হয়েছে এবং শরীর অনেক ঝরঝরে লাগে।', 
    en: 'I have been taking this for the last 1 month. My sleep problems are gone and my body feels very fresh.' 
  },
  'review.4.name': { bn: 'সুমন আহমেদ', en: 'Sumon Ahmed' },
  'review.4.text': { 
    bn: 'পণ্যের মান খুব ভালো। প্যাকেজিংটা আরও সুন্দর হতে পারতো, তবে কার্যকারিতা নিয়ে কোনো প্রশ্ন নেই।', 
    en: 'Product quality is very good. Packaging could have been nicer, but there is no question about effectiveness.' 
  },
  'review.5.name': { bn: 'বিল্লাল হোসেন', en: 'Billal Hossain' },
  'review.5.text': { 
    bn: 'খুবই ভালো প্রোডাক্ট। আমি আমার বন্ধুদেরও এটা সাজেস্ট করেছি। ধন্যবাদ আপনাদের।', 
    en: 'Very good product. I have suggested it to my friends too. Thank you.' 
  },

  // FAQs
  'faq.1.q': { bn: 'এটি কি সম্পূর্ণ প্রাকৃতিক উপাদান দিয়ে তৈরি?', en: 'Is it made with 100% natural ingredients?' },
  'faq.1.a': { 
    bn: 'জি, সুলতান-ই-তারকীব ১০০% প্রাকৃতিক ভেষজ উপাদান যেমন শিলাজিৎ, জাফরান, অশ্বগন্ধা এবং খাঁটি মধু দিয়ে তৈরি। এতে কোনো ক্ষতিকর কেমিক্যাল নেই।', 
    en: 'Yes, Sultan-E-Tarkeeb is made with 100% natural herbal ingredients like Shilajit, Saffron, Ashwagandha and Pure Honey. It has no harmful chemicals.' 
  },
  'faq.2.q': { bn: 'এর কোনো পার্শ্বপ্রতিক্রিয়া আছে কি?', en: 'Does it have any side effects?' },
  'faq.2.a': { 
    bn: 'না, এটি সম্পূর্ণ ভেষজ উপাদান দিয়ে তৈরি হওয়ায় এর কোনো পার্শ্বপ্রতিক্রিয়া নেই। তবে নির্দেশিত মাত্রায় সেবন করার পরামর্শ দেওয়া হয়।', 
    en: 'No, as it is made with completely herbal ingredients, it has no side effects. However, it is advised to consume in the directed dosage.' 
  },
  'faq.3.q': { bn: 'কতদিন ব্যবহার করলে ফলাফল পাওয়া যাবে?', en: 'How long does it take to see results?' },
  'faq.3.a': { 
    bn: 'সাধারণত ৭-১০ দিন নিয়মিত সেবনের পর থেকেই আপনি পরিবর্তন অনুভব করবেন। তবে পূর্ণ ফলাফলের জন্য ১-২ মাস নিয়মিত সেবন করা উচিত।', 
    en: 'Usually you will feel the change after 7-10 days of regular use. However, for full results, it should be consumed regularly for 1-2 months.' 
  },
  'faq.4.q': { bn: 'অর্ডার করার নিয়ম কী?', en: 'How to order?' },
  'faq.4.a': { 
    bn: 'আমাদের ওয়েবসাইটে \'অর্ডার করুন\' বাটনে ক্লিক করে আপনার নাম, ঠিকানা ও ফোন নম্বর দিয়ে অর্ডার কনফার্ম করতে পারবেন। অথবা আমাদের হটলাইনে কল করেও অর্ডার করতে পারেন।', 
    en: 'You can confirm the order by clicking the \'Order Now\' button on our website and providing your name, address and phone number. Or you can also order by calling our hotline.' 
  },

  // Trust Stats Section
  'stats.satisfied_customers': { bn: 'সন্তুষ্ট গ্রাহক', en: 'Satisfied Customers' },
  'stats.growing': { bn: 'ক্রমবর্ধমান', en: 'Growing' },
  'stats.purity': { bn: 'বিশুদ্ধতা', en: 'Purity' },
  'stats.lab_tested': { bn: 'ল্যাব পরীক্ষিত', en: 'Lab Tested' },
  'stats.years_experience': { bn: 'বছরের অভিজ্ঞতা', en: 'Years Experience' },
  'stats.since_2009': { bn: '২০০৯ থেকে', en: 'Since 2009' },

  // Trust Banner Section
  'trust_banner.cash_on_delivery': { bn: 'ক্যাশ অন ডেলিভারি', en: 'Cash on Delivery' },
  'trust_banner.free_shipping': { bn: 'ফ্রি শিপিং', en: 'Free Shipping' },
  'trust_banner.chemical_free': { bn: 'কেমিক্যাল মুক্ত', en: 'Chemical Free' },
  'trust_banner.verified_customer': { bn: 'ভেরিফাইড কাস্টমার', en: 'Verified Customer' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('bn');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'bn' ? 'en' : 'bn');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
