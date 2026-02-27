import { motion, AnimatePresence } from 'motion/react';
import { Check, Phone, ArrowRight, ShoppingBag } from 'lucide-react';
import { useEffect } from 'react';

interface OrderItem {
  name: string;
  weight: string;
  quantity: number;
  price: number;
}

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderedItems: OrderItem[];
  subtotal: number;
  shippingCost: number;
  shippingLocation: 'inside' | 'outside';
  totalAmount: number;
}

const toBanglaNum = (num: number | string) => {
  return num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
};

export function OrderSuccessModal({ 
  isOpen, 
  onClose, 
  orderedItems, 
  subtotal, 
  shippingCost, 
  shippingLocation, 
  totalAmount 
}: OrderSuccessModalProps) {
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-['Li_Ador_Noirrit']">
          
          <style>{`
            .scrollbar-clean::-webkit-scrollbar {
              width: 8px;
            }
            .scrollbar-clean::-webkit-scrollbar-track {
              background: #ffffff;
            }
            .scrollbar-clean::-webkit-scrollbar-thumb {
              background-color: #e5e7eb;
              border-radius: 4px;
              border: 2px solid #ffffff;
            }
            .scrollbar-clean::-webkit-scrollbar-thumb:hover {
              background-color: #d1d5db;
            }
            /* Firefox */
            .scrollbar-clean {
              scrollbar-width: thin;
              scrollbar-color: #e5e7eb #ffffff;
            }
          `}</style>

          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative bg-[#7ec440] w-full max-w-lg rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header Section (Green Background) */}
            <div className="p-6 text-center text-white space-y-3 shrink-0">
              <div className="border-2 border-white/30 border-dashed rounded-lg p-4 bg-[#8dc540]/20">
                <h2 className="text-xl md:text-2xl font-bold leading-tight">
                  ধন্যবাদ! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।
                </h2>
              </div>
              <p className="text-sm md:text-base font-medium text-white/90">
                খুব শীঘ্রই আমাদের প্রতিনিধি আপনাকে ফোন করে অর্ডারটি কনফার্ম করবেন!
              </p>
              
              <div className="bg-white rounded-lg py-3 px-6 inline-block shadow-md">
                <p className="text-[#7ec440] font-bold text-sm md:text-base flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                  <span>ফ্রি কনসালটেশন পেতে কল করুনঃ</span>
                  <span className="font-sans text-lg md:text-xl font-extrabold mt-1 md:mt-0">01346-463886</span>
                </p>
              </div>
            </div>

            {/* Order Details Body (White Background) */}
            <div className="bg-white rounded-t-[24px] p-6 md:p-8 flex-1 overflow-y-auto scrollbar-clean">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Order details</h3>
              
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex justify-between font-bold text-black border-b border-gray-100 pb-2">
                  <span>Product</span>
                  <span>Total</span>
                </div>

                {/* Product Rows */}
                <div className="space-y-3 pb-4 border-b border-dashed border-gray-200">
                  {orderedItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-start text-sm md:text-base">
                      <div className="pr-4">
                        <span className="font-medium text-gray-800">{item.name} {item.weight}</span>
                        <span className="font-bold ml-1">× {toBanglaNum(item.quantity)}</span>
                      </div>
                      <span className="font-bold text-gray-600 whitespace-nowrap">{toBanglaNum(item.price * item.quantity)}৳</span>
                    </div>
                  ))}
                </div>

                {/* Totals Section */}
                <div className="space-y-2 pb-4 border-b border-gray-100">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span className="font-bold">{toBanglaNum(subtotal)}৳</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping:</span>
                    <span className="text-right">
                      <span className="font-bold">{toBanglaNum(shippingCost)}৳</span>
                      <span className="text-xs text-gray-400 ml-1">via {shippingLocation === 'inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাহিরে'}</span>
                    </span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="flex justify-between items-center text-lg md:text-xl font-bold text-gray-800 pb-2">
                   <span>Total:</span>
                   <span>{toBanglaNum(totalAmount)}৳</span>
                </div>

                {/* Payment Method */}
                <div className="flex justify-between items-center text-gray-600 text-sm md:text-base pt-2">
                  <span>Payment method:</span>
                  <span className="font-bold text-gray-800">ক্যাশ অন ডেলিভারি</span>
                </div>

                {/* Close/Action Button */}
                 <button 
                  onClick={onClose}
                  className="w-full mt-6 bg-[#7ec440] text-white font-bold py-3 rounded-xl shadow-lg hover:bg-[#6db035] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag size={20} />
                  <span className="text-sm md:text-base">আরো অর্ডার করুন</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}