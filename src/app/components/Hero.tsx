import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, CheckCircle, ShieldCheck, Leaf, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

// Figma Assets
import imgAhmedKPortrait from "figma:asset/313744e84df97594724fc8668885f33555de352a.png";
import imgSteveJPortrait from "figma:asset/ca5325972fd76f553b7cc3d3c7088723c6d50d6b.png";
import imgRahulMPortrait from "figma:asset/cada0639f302047ac82f31e521b91301b4227070.png";
import imgProduct from "figma:asset/55a06a16a8064de142f2ba0e0b678861ff0c06e1.png";
import imgProduct2 from "figma:asset/067a97b9a29a0b1c63f0f577122adf2b41bf9376.png";
import imgProduct3 from "figma:asset/f754fa94ae81e4f8fe284a9dac2ce1ed14fd82da.png";

const heroImages = [imgProduct, imgProduct2, imgProduct3];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative w-full bg-[#F9FAFB] overflow-hidden font-['Li_Ador_Noirrit'] pt-[100px] md:pt-[140px] pb-7 md:pb-9 px-4 md:px-8">
      {/* Background Blurs */}
      <div className="absolute top-[-266px] left-[-266px] w-[800px] h-[800px] bg-[#8dc540]/15 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#8dc540]/15 blur-[50px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl h-full flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">

        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start gap-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8dc540]/10 border border-[#8dc540]/20 rounded-full">
            <CheckCircle className="w-4 h-4 text-[#8dc540]" />
            <span className="text-[#8dc540] font-bold text-sm font-['Li_Ador_Noirrit']">
              {t('hero.badge')}
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-[72px] font-bold text-[#1f2937] leading-tight font-['Li_Ador_Noirrit'] tracking-tight">
              {t('hero.title.prefix')} <br />
              {t('hero.title.your')} <span className="relative inline-block text-[#8dc540]">
                {t('hero.title.vitality')}
                {/* Underline SVG */}
                <svg className="absolute w-full h-3 bottom-1 left-0 translate-y-full" viewBox="0 0 258 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 9.5C86.5 2.5 170.5 2.5 255.5 9.5" stroke="#8DC540" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="text-[#475569] text-lg md:text-xl font-medium font-['Li_Ador_Noirrit'] max-w-xl leading-relaxed">
            <p>{t('hero.subtitle.1')}</p>
            <p>{t('hero.subtitle.2')}</p>
          </div>

          {/* CTA & Social Proof */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const section = document.getElementById('order-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#e87b00] text-white px-10 py-4 rounded-full font-bold text-xl flex items-center gap-3 shadow-[0px_20px_25px_-5px_rgba(232,123,0,0.2)] hover:shadow-[0px_25px_30px_-5px_rgba(232,123,0,0.3)] transition-all font-['Li_Ador_Noirrit'] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{t('hero.cta')}</span>
            </motion.button>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[imgAhmedKPortrait, imgSteveJPortrait, imgRahulMPortrait].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img src={src} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col font-['Li_Ador_Noirrit']">
                <span className="text-[#0f172a] font-bold text-sm">{t('hero.social.count')}</span>
                <span className="text-[#475569] text-xs font-medium">{t('hero.social.label')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image & Cards */}
        <div className="flex-1 relative flex items-center justify-center w-full min-h-[420px] md:min-h-[500px]">
          {/* Gradient Blur Background for Product */}
          <div className="absolute w-[450px] h-[450px] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-br from-[#8dc540]/20 to-[#8dc540]/5 blur-xl animate-blob" />

          {/* Main Product Image Container */}
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-[75px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm z-10">
              <AnimatePresence>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <ImageWithFallback
                    src={heroImages[currentImageIndex]}
                    alt="Sultan E Tarkeeb Product"
                    className="w-full h-full object-cover scale-110"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center gap-3 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? "w-8 bg-[#8dc540]"
                    : "w-3 bg-gray-300 hover:bg-[#8dc540]/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Floating Card 1: Premium Quality (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-14 -right-4 md:bottom-28 md:-right-8 bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3 max-w-[200px] z-30"
          >
            <div className="w-10 h-10 bg-[#ffedd5] rounded-full flex items-center justify-center text-[#EA580C]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-['Li_Ador_Noirrit']">
              <p className="text-xs text-[#64748b]">{t('hero.card1.label')}</p>
              <p className="text-sm font-bold text-[#1e293b]">{t('hero.card1.value')}</p>
            </div>
          </motion.div>

          {/* Floating Card 2: 100% Natural (Top Left) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -top-4 -left-4 md:top-20 md:-left-12 bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3 max-w-[180px] z-30"
          >
            <div className="w-10 h-10 bg-[#dcfce7] rounded-full flex items-center justify-center text-[#16A34A]">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="font-['Li_Ador_Noirrit']">
              <p className="text-xs text-[#64748b]">{t('hero.card2.label')}</p>
              <p className="text-sm font-bold text-[#1e293b]">{t('hero.card2.value')}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
