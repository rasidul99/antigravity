import { useEffect, useRef } from 'react';
import { TrendingUp, BadgeCheck, History } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

function Counter({ value, suffix = "", language }: { value: number, suffix?: string, language: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const updateText = (latest: number) => {
      if (ref.current) {
        const rounded = Math.floor(latest);
        let displayValue = rounded.toString();

        if (language === 'bn') {
          displayValue = displayValue.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
        }

        ref.current.textContent = displayValue + suffix;
      }
    };

    // Update immediately with the current spring value
    updateText(springValue.get());

    // Subscribe to future changes
    const unsubscribe = springValue.on("change", updateText);

    return () => unsubscribe();
  }, [springValue, suffix, language]);

  return <span ref={ref} />;
}

export function TrustStatsSection() {
  const { t, language } = useLanguage();

  const stats = [
    {
      id: 1,
      label: t('stats.satisfied_customers'),
      value: 12000,
      suffix: "+",
      subLabel: t('stats.growing'),
      icon: TrendingUp
    },
    {
      id: 2,
      label: t('stats.purity'),
      value: 100,
      suffix: "%",
      subLabel: t('stats.lab_tested'),
      icon: BadgeCheck
    },
    {
      id: 3,
      label: t('stats.years_experience'),
      value: 15,
      suffix: "+",
      subLabel: t('stats.since_2009'),
      icon: History
    }
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-6 font-['Li_Ador_Noirrit']">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#f4f9ed] rounded-[32px] md:rounded-[48px] p-8 md:p-10 flex flex-col items-center justify-center relative w-full group border border-[#8dc540]/10 hover:border-[#8dc540]/30 transition-colors shadow-sm"
            >
              {/* Value */}
              <h3 className="text-[#141910] text-4xl md:text-5xl lg:text-[56px] font-bold mb-2 md:mb-3 text-center leading-none">
                <Counter key={`${stat.id}-${language}`} value={stat.value} suffix={stat.suffix} language={language} />
              </h3>

              {/* Label */}
              <p className="text-[#4a4a4a] text-lg md:text-xl font-medium mb-4 md:mb-5 text-center">
                {stat.label}
              </p>

              {/* Sub-label with Icon */}
              <div className="flex items-center gap-2 text-[#7ec440] bg-white/60 px-4 py-2 rounded-full backdrop-blur-md shadow-sm">
                <stat.icon size={18} strokeWidth={2.5} className="md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-bold">{stat.subLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
