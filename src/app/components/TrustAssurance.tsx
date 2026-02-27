import { motion } from 'motion/react';
import { Leaf, Award, ShieldCheck, Headphones, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgSultanETarkeebJarWithShadow from "figma:asset/caf7827841ae0f17e81429ba338a41e4d79623d8.png";

export function TrustAssurance() {
  const { t } = useLanguage();

  const guarantees = [
    {
      id: 1,
      title: t('trust.1.title'),
      description: t('trust.1.desc'),
      icon: Leaf
    },
    {
      id: 2,
      title: t('trust.2.title'),
      description: t('trust.2.desc'),
      icon: Award
    },
    {
      id: 3,
      title: t('trust.3.title'),
      description: t('trust.3.desc'),
      icon: ShieldCheck
    },
    {
      id: 4,
      title: t('trust.4.title'),
      description: t('trust.4.desc'),
      icon: Headphones
    }
  ];

  return (
    <section className="relative py-12 bg-[#F4F9ED] overflow-hidden font-['Li_Ador_Noirrit']">
      {/* Subtle Background Pattern - Leaf Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg className="absolute -right-20 -top-20 w-[600px] h-[600px] text-[#1F2937]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-76.4C58.9,-69.3,69.1,-58.3,77.3,-46.4C85.5,-34.5,91.7,-21.7,92.6,-8.6C93.5,4.5,89.1,17.9,81.3,29.4C73.5,40.9,62.3,50.5,50.7,58.3C39.1,66.1,27.1,72.1,14.6,73.8C2.1,75.5,-10.9,72.9,-23.1,68.4C-35.3,63.9,-46.7,57.5,-56.3,48.5C-65.9,39.5,-73.7,27.9,-77.8,14.9C-81.9,1.9,-82.3,-12.5,-77.2,-25.6C-72.1,-38.7,-61.5,-50.5,-49.6,-58.1C-37.7,-65.7,-24.5,-69.1,-11.2,-71.4C2.1,-73.7,15.4,-74.9,28.7,-76.1L32.5,-83.5L45.7,-76.4Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -left-20 bottom-0 w-[400px] h-[400px] text-[#8dc540]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M41.7,-67.6C54.4,-61.9,65.6,-52.7,73.8,-41.7C82,-30.7,87.2,-17.9,86.2,-5.6C85.2,6.7,78,18.5,69.5,28.9C61,39.3,51.2,48.3,40.4,55.5C29.6,62.7,17.8,68.1,5.3,69.8C-7.2,71.5,-20.4,69.5,-32.1,63.6C-43.8,57.7,-54,47.9,-62.4,36.5C-70.8,25.1,-77.4,12.1,-76.3,0.6C-75.2,-10.9,-66.4,-20.9,-57.4,-30.3C-48.4,-39.7,-39.2,-48.5,-28.9,-55.4C-18.6,-62.3,-7.2,-67.3,5.1,-68.9C17.4,-70.5,29,-68.7,41.7,-67.6Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Right Column (Image) - Ordered First on Mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative"
          >
             {/* Image Framing - Arch Shape */}
             <div className="relative w-full aspect-[4/5] md:aspect-square max-w-md mx-auto md:ml-auto">
                <div className="absolute inset-0 bg-[#E8F5E9] rounded-t-[160px] rounded-b-[24px] transform translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 rounded-t-[160px] rounded-b-[24px] overflow-hidden shadow-2xl bg-white">
                    <ImageWithFallback 
                        src={imgSultanETarkeebJarWithShadow} 
                        alt="Sultan E Tarkeeb Premium" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Floating Trust Badge */}
                <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-full shadow-lg flex items-center gap-3 animate-bounce-slow">
                    <div className="bg-[#8dc540] rounded-full p-1.5 text-white">
                        <CheckCircle2 size={24} />
                    </div>
                    <div className="pr-2">
                        <p className="text-[#1F2937] font-bold text-sm leading-none font-['Li_Ador_Noirrit']">{t('trust.badge.title')}</p>
                        <p className="text-[#8dc540] text-xs font-semibold">{t('trust.badge.subtitle')}</p>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Left Column (Text & Guarantees) - Ordered Second on Mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-10 text-center md:text-left font-['Li_Ador_Noirrit'] leading-tight">
              {t('trust.title.prefix')} <br className="hidden md:block" /> <span className="text-[#8dc540]">{t('trust.title.suffix')}</span>
            </h2>

            <div className="space-y-8">
              {guarantees.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-start gap-5 group"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#8dc540] flex items-center justify-center shadow-lg shadow-[#8dc540]/20 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>

                  {/* Text Content */}
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-[#1F2937] font-['Li_Ador_Noirrit'] mb-1 group-hover:text-[#8dc540] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#4B5563] text-base leading-relaxed font-['Li_Ador_Noirrit']">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
