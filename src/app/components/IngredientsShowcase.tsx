import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import imgRawMineralShilajitInAWoodenBowl from "figma:asset/454dba44005cc8508954c99ffb21efc5405497ce.png";
import imgPremiumRedSaffronThreadsInABowl from "figma:asset/bcb6393b88956e7888e3946fa2aa1d40a91643a4.png";
import imgPureOrganicHoneyInAWoodenVessel from "figma:asset/bd471f6d5664a4a34fd4a14996cdbf276d6b1329.png";
import imgAshwagandhaRootPowderInAWoodenBowl from "figma:asset/5d8d8f184d82dbdea8e52b7ea18a6f542317b1c9.png";
import imgKoreanRedGinsengRootMacro from "figma:asset/4f36de550dac39ddbfdc94ed65a93f73e1858b21.png";
import imgBlackCuminSeedsInSmallBowl from "figma:asset/06459fbdd8bbf943fc0fad06f0ecb2b3016831c7.png";
import imgCrackedWalnutHalvesInBowl from "figma:asset/ff6192a0387081502c3cf3a6a485d0e420f1082c.png";
import imgRoastedCashewNutsInWoodenBowl from "figma:asset/cc61242b0aa8e5db8221289efb18007dfc1a5d02.png";

export function IngredientsShowcase() {
  const { t } = useLanguage();

  const ingredients = [
    {
      id: 1,
      name: t('ingredient.1.name'),
      nameEn: t('ingredient.1.desc'),
      image: imgRawMineralShilajitInAWoodenBowl
    },
    {
      id: 2,
      name: t('ingredient.2.name'),
      nameEn: t('ingredient.2.desc'),
      image: imgPremiumRedSaffronThreadsInABowl
    },
    {
      id: 3,
      name: t('ingredient.3.name'),
      nameEn: t('ingredient.3.desc'),
      image: imgPureOrganicHoneyInAWoodenVessel
    },
    {
      id: 4,
      name: t('ingredient.4.name'),
      nameEn: t('ingredient.4.desc'),
      image: imgAshwagandhaRootPowderInAWoodenBowl
    },
    {
      id: 5,
      name: t('ingredient.5.name'),
      nameEn: t('ingredient.5.desc'),
      image: imgKoreanRedGinsengRootMacro
    },
    {
      id: 6,
      name: t('ingredient.6.name'),
      nameEn: t('ingredient.6.desc'),
      image: imgBlackCuminSeedsInSmallBowl
    },
    {
      id: 7,
      name: t('ingredient.7.name'),
      nameEn: t('ingredient.7.desc'),
      image: imgCrackedWalnutHalvesInBowl
    },
    {
      id: 8,
      name: t('ingredient.8.name'),
      nameEn: t('ingredient.8.desc'),
      image: imgRoastedCashewNutsInWoodenBowl
    }
  ];

  return (
    <section className="relative py-12 md:py-24 bg-[#F9FAFB] overflow-hidden font-['Li_Ador_Noirrit']">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2937] font-['Li_Ador_Noirrit'] mb-4">
            {t('ingredients.title.prefix')} <span className="text-[#8dc540]">{t('ingredients.title.suffix')}</span>
          </h2>
          <p className="text-[#4B5563] text-lg max-w-2xl mx-auto leading-relaxed">
            {t('ingredients.subtitle')}
          </p>
        </div>

        {/* Ingredients Loop */}
        <div className="relative w-full overflow-hidden">
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex w-max"
                animate={{ x: "-50%" }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...ingredients, ...ingredients].map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className="mr-6 lg:mr-8 bg-[#f1f5f9] rounded-[40px] md:rounded-[64px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 w-[240px] md:w-[288px] aspect-[288/328] flex-shrink-0"
                    >
                        {/* Card Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-50 pointer-events-none" />
                        <div className="absolute inset-0 shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)] rounded-[inherit] pointer-events-none" />

                        <div className="relative h-full flex flex-col items-center justify-center p-4">
                            {/* Image Container */}
                            <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[166px] lg:h-[166px] rounded-full shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden mb-6 flex-shrink-0 bg-transparent group-hover:scale-105 transition-transform duration-500">
                                <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            {/* Text */}
                            <div className="text-center z-10">
                                <h3 className="text-[#0f172a] text-lg md:text-xl font-['Li_Ador_Noirrit'] mb-1">
                                    {item.name}
                                </h3>
                                <p className="text-[#64748b] text-xs md:text-sm font-medium font-sans">
                                    {item.nameEn}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

        {/* Secret Ingredients Banner */}
        <div className="mt-6 flex justify-center w-full">
          <div 
              className="w-full max-w-2xl bg-[#8dc540] rounded-2xl px-8 py-5 flex items-center justify-center shadow-md shadow-[#8dc540]/10"
          >
              <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2.5 rounded-full">
                      <Sparkles className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  <div className="text-left">
                    <span className="text-white font-bold text-xl font-['Li_Ador_Noirrit'] block leading-tight">
                        {t('ingredients.secret.title')}
                    </span>
                    <span className="text-white/90 text-sm font-medium mt-0.5 block">
                        {t('ingredients.secret.desc')}
                    </span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}