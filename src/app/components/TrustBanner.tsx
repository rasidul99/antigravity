import { Truck, ShieldCheck, Leaf, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function TrustBanner() {
  const { t } = useLanguage();

  const trustItems = [
    { icon: Truck, text: t('trust_banner.cash_on_delivery') },
    { icon: Truck, text: t('trust_banner.free_shipping') },
    { icon: Leaf, text: t('trust_banner.chemical_free') },
    { icon: Users, text: t('trust_banner.verified_customer') },
  ];

  return (
    <div className="w-full bg-[#eaf4db] py-6 border-t border-[#8dc540]/20 -mt-6 md:mt-0 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 group cursor-default">
              <div className="p-3 bg-white rounded-full shadow-sm text-[#8dc540] group-hover:scale-110 transition-transform duration-300">
                <item.icon size={24} strokeWidth={2.5} />
              </div>
              <span className="text-[#1F2937] font-medium text-sm md:text-base font-['Li_Ador_Noirrit']">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
