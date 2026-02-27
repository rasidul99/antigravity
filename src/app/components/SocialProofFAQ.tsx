import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Check, Quote, Plus, Minus, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export function SocialProofFAQ() {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);
  const { t } = useLanguage();

  const reviews = [
    {
      id: 1,
      name: t('review.1.name'),
      initial: "র",
      verified: true,
      rating: 5,
      text: t('review.1.text'),
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoaSUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTYwODgwMHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: t('review.2.name'),
      initial: "আ",
      verified: true,
      rating: 5,
      text: t('review.2.text'),
      image: null
    },
    {
      id: 3,
      name: t('review.3.name'),
      initial: "জ",
      verified: true,
      rating: 5,
      text: t('review.3.text'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWQlMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNjA4ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      name: t('review.4.name'),
      initial: "স",
      verified: true,
      rating: 4,
      text: t('review.4.text'),
      image: null
    },
    {
      id: 5,
      name: t('review.5.name'),
      initial: "বি",
      verified: true,
      rating: 5,
      text: t('review.5.text'),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoaSUyMG1hbnxlbnwxfHx8fDE3NzE2MDg4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: t('faq.1.q'),
      answer: t('faq.1.a')
    },
    {
      id: 2,
      question: t('faq.2.q'),
      answer: t('faq.2.a')
    },
    {
      id: 3,
      question: t('faq.3.q'),
      answer: t('faq.3.a')
    },
    {
      id: 4,
      question: t('faq.4.q'),
      answer: t('faq.4.a')
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <section className="py-12 bg-[#F4F9ED]/50 font-['Li_Ador_Noirrit'] overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] mb-4 font-['Li_Ador_Noirrit']">
            {t('social.title')}
          </h2>
          <div className="h-1.5 w-24 bg-[#8dc540] mx-auto rounded-full -mb-10"></div>
        </div>

        {/* Reviews Carousel */}
        <div className="mb-24 relative max-w-7xl mx-auto">
          {/* 
                Desktop: 3 Column Grid with potential for slider if more reviews added.
                Mobile: Horizontal Snap Scroll (Swipeable)
             */}
          <div className="
                flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 
                md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
             ">
            {reviews.slice(0, 3).map((review) => (
              <motion.div
                key={review.id}
                className="min-w-[85vw] md:min-w-0 snap-center h-full group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] h-full relative border border-transparent group-hover:border-[#8dc540]/20 group-hover:shadow-[0_20px_40px_rgba(141,197,64,0.15)] group-hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                  {/* Decorative Quote */}
                  <div className="absolute top-6 right-6 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-300">
                    <Quote className="w-16 h-16 text-[#8dc540] fill-current transform rotate-180" />
                  </div>

                  <div>
                    {/* Avatar & Info */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-[#8dc540] flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md border-2 border-white">
                        <User size={28} className="text-white absolute mt-1" />
                      </div>

                      <div>
                        <h4 className="font-bold text-[#1F2937] text-lg font-['Li_Ador_Noirrit'] leading-tight">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} className={`${i < review.rating ? "fill-[#e87b00] text-[#e87b00]" : "fill-gray-200 text-gray-200"}`} />
                            ))}
                          </div>
                          <div className="w-1 h-1 rounded-full bg-gray-300 mx-1"></div>
                          <div className="flex items-center gap-1">
                            <div className="bg-[#8dc540]/10 rounded-full p-0.5">
                              <Check size={10} className="text-[#8dc540]" strokeWidth={3} />
                            </div>
                            <span className="text-xs text-gray-500 font-medium">Verified Buyer</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-[#4B5563] text-[16px] leading-relaxed font-['Li_Ador_Noirrit'] relative z-10">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Hint (Optional, if needed for UX, usually swipe is intuitive) */}
          <div className="md:hidden flex justify-center mt-2 gap-2 -mb-12">
            <div className="w-2 h-2 rounded-full bg-[#8dc540]"></div>
            <div className="w-2 h-2 rounded-full bg-[#8dc540]/30"></div>
            <div className="w-2 h-2 rounded-full bg-[#8dc540]/30"></div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          {/* Section Sub-header for FAQ */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#1F2937] font-['Li_Ador_Noirrit'] flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-gray-300"></span>
              {t('social.faq.title')}
              <span className="w-8 h-[1px] bg-gray-300"></span>
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openAccordionId === faq.id ? 'border-[#8dc540] ring-1 ring-[#8dc540]/20 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                >
                  <span className={`text-lg font-bold font-['Li_Ador_Noirrit'] transition-colors pr-4 ${openAccordionId === faq.id ? 'text-[#8dc540]' : 'text-[#1F2937] group-hover:text-[#8dc540]'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${openAccordionId === faq.id ? 'bg-[#8dc540] border-[#8dc540] text-white rotate-180' : 'bg-transparent border-gray-200 text-gray-400 group-hover:border-[#8dc540] group-hover:text-[#8dc540]'}`}>
                    {openAccordionId === faq.id ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openAccordionId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 md:px-6 pb-6 text-[#4B5563] text-base leading-relaxed font-['Li_Ador_Noirrit'] border-t border-dashed border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
