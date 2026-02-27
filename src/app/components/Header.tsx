import { useState, useEffect } from 'react';
import { ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import imgAsset35X1 from "figma:asset/fa6d3ba814473eeaa4a8f4153aeb8f530e6e7d10.png";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const targetId = 'order-section';

    const initObserver = () => {
      const orderSection = document.getElementById(targetId);
      
      if (orderSection) {
        observer = new IntersectionObserver(
          ([entry]) => {
            // Hide header when order section is visible (intersecting)
            setIsVisible(!entry.isIntersecting);
          },
          {
            root: null,
            threshold: 0,
            rootMargin: "-10% 0px -10% 0px"
          }
        );
        observer.observe(orderSection);
      } else {
        // Retry if element not found yet
        setTimeout(initObserver, 100);
      }
    };

    initObserver();

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const scrollToOrder = () => {
    const section = document.getElementById('order-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-[#8dc540]/90 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`} 
      data-name="Header"
    >
      <div aria-hidden="true" className="absolute border-white/20 border-b border-solid inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo - Left Side */}
        <div className="h-[40px] md:h-[50px] relative shrink-0 w-[100px] md:w-[130px] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-name="Asset 3@5x 1">
          <img 
              alt="Amina Naturals" 
              className="w-full h-full object-contain" 
              src={imgAsset35X1} 
          />
        </div>

        {/* Right Side: Language & Order Button */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 backdrop-blur-sm"
          >
            <Globe size={18} className="stroke-[1.5px]" />
            <span className="font-bold text-sm uppercase font-sans tracking-wide">{language}</span>
          </button>

          {/* Order Button - Right Side */}
          {/* Layer 1: Wrapper */}
          <div 
            onClick={scrollToOrder}
            className="relative group p-[2px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,123,0,0.5)]"
          >
          {/* Layer 2: Rotating Border */}
          <div 
            className="absolute inset-0 rotate-border"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)'
            }}
          />
          
          {/* Layer 3: Static Base (Texture) */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))'
            }}
          />

          {/* Layer 4: Button Content */}
          <button
            className="relative z-[1] w-full h-full rounded-[10px] bg-gradient-to-b from-[#e87b00] to-[#d67000] px-5 py-2.5 font-bold text-white text-sm md:text-base flex items-center gap-2 group-hover:brightness-110 transition-all font-['Li_Ador_Noirrit']"
          >
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
            <span>{t('header.order')}</span>
          </button>
        </div>
      </div>
    </div>
    </header>
  );
}
