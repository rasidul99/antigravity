import { motion } from 'motion/react';
import { BatteryCharging, Zap, Flame, Scale, Brain, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function BenefitsGrid() {
  const { t } = useLanguage();

  const benefits = [
    {
      id: 1,
      title: t('benefits.1.title'),
      description: t('benefits.1.desc'),
      bgColor: "bg-[#8dc540]",
      circleColor: "bg-white/20",
      textColor: "text-white",
      descColor: "text-white/90",
      icon: BatteryCharging,
      watermarkIcon: BatteryCharging
    },
    {
      id: 2,
      title: t('benefits.2.title'),
      description: t('benefits.2.desc'),
      bgColor: "bg-[#E87B00]",
      circleColor: "bg-white/20",
      textColor: "text-white",
      descColor: "text-white/90",
      icon: Zap,
      watermarkIcon: Zap
    },
    {
      id: 3,
      title: t('benefits.3.title'),
      description: t('benefits.3.desc'),
      bgColor: "bg-[#E87B00]",
      circleColor: "bg-white/20",
      textColor: "text-white",
      descColor: "text-white/90",
      icon: Flame,
      watermarkIcon: Flame
    },
    {
      id: 4,
      title: t('benefits.4.title'),
      description: t('benefits.4.desc'),
      bgColor: "bg-[#8dc540]",
      circleColor: "bg-white/20",
      textColor: "text-white",
      descColor: "text-white/90",
      icon: Scale,
      watermarkIcon: Scale
    },
    {
      id: 5,
      title: t('benefits.5.title'),
      description: t('benefits.5.desc'),
      bgColor: "bg-[#8dc540]",
      circleColor: "bg-white/20",
      textColor: "text-white",
      descColor: "text-white/90",
      icon: Brain,
      watermarkIcon: Brain
    },
    {
      id: 6,
      title: t('benefits.6.title'),
      description: t('benefits.6.desc'),
      bgColor: "bg-[#E87B00]",
      circleColor: "bg-white/20",
      textColor: "text-white",
      descColor: "text-white/90",
      icon: TrendingUp,
      watermarkIcon: TrendingUp
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#1B2B1B] relative overflow-hidden font-['Li_Ador_Noirrit']">
      {/* Background Texture Overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      >
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-['Li_Ador_Noirrit']">
            {t('benefits.title.prefix')} <span className="text-[#8dc540]">Sultan E Tarkeeb?</span>
          </h2>
          <p className="text-gray-300/80 text-lg max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`
                relative h-full min-h-[200px] md:min-h-[320px] rounded-[20px] md:rounded-[32px] overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                flex flex-col items-center justify-center p-4 md:p-8 text-center
                ${benefit.bgColor}
              `}
            >
              {/* Inner content wrapper */}
              <div className="relative z-10 flex flex-col items-center w-full">

                {/* Professional Icon Circle */}
                <div className={`
                  w-10 h-10 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-2 md:mb-6 
                  ${benefit.circleColor} backdrop-blur-sm
                  shadow-[inset_0px_2px_4px_rgba(255,255,255,0.1),0px_4px_12px_rgba(0,0,0,0.05)]
                `}>
                  <benefit.icon
                    className={`${benefit.textColor} w-5 h-5 md:w-9 md:h-9`}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className={`text-base md:text-2xl font-bold mb-1.5 md:mb-3 ${benefit.textColor} font-['Li_Ador_Noirrit'] leading-tight`}>
                  {benefit.title}
                </h3>

                <p className={`text-[13px] md:text-base leading-relaxed font-medium ${benefit.descColor} font-['Li_Ador_Noirrit'] max-w-[98%] md:max-w-[90%]`}>
                  {benefit.description}
                </p>
              </div>

              {/* Watermark Icon */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-8 opacity-[0.08] pointer-events-none transform rotate-0">
                <benefit.watermarkIcon strokeWidth={1.5} className={`w-20 h-20 md:w-36 md:h-36 ${benefit.textColor}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
