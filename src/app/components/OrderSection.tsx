import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, User, Check, Minus, Plus, ShoppingBag, X, ChevronDown, Loader2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import productImage from 'figma:asset/dfb5c5a2ac7964132af2b63087e6d7c5658f80b1.png';
import { OrderSuccessModal } from './OrderSuccessModal';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { useLanguage } from '../context/LanguageContext';

const toBanglaNum = (num: number | string) => {
  return num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
};

export function OrderSection() {
  const { t, language } = useLanguage();

  const formatNumber = (num: number | string) => {
    return language === 'bn' ? toBanglaNum(num) : num.toString();
  };

  const products = [
    {
      id: 2,
      name: language === 'bn' ? "Sultan E Tarkeeb এনার্জি বুস্টার" : "Sultan E Tarkeeb Energy Booster",
      weight: language === 'bn' ? "৫০০ গ্রাম" : "500 gm",
      price: 3150,
      image: productImage,
      isBestValue: true
    },
    {
      id: 1,
      name: language === 'bn' ? "Sultan E Tarkeeb এনার্জি বুস্টার" : "Sultan E Tarkeeb Energy Booster",
      weight: language === 'bn' ? "২৫০ গ্রাম" : "250 gm",
      price: 1650,
      image: productImage,
      isBestValue: false
    }
  ];

  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([2]); // Default to 500gm (id: 2)
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({ 1: 1, 2: 1 });
  const [shippingLocation, setShippingLocation] = useState<'inside' | 'outside'>('inside');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    district: ''
  });
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderId, setOrderId] = useState('');

  const districts = [
    { value: "Dhaka", label: "ঢাকা" },
    { value: "Faridpur", label: "ফরিদপুর" },
    { value: "Gazipur", label: "গাজীপুর" },
    { value: "Gopalganj", label: "গোপালগঞ্জ" },
    { value: "Kishoreganj", label: "কিশোরগঞ্জ" },
    { value: "Madaripur", label: "মাদারীপুর" },
    { value: "Manikganj", label: "মানিকগঞ্জ" },
    { value: "Munshiganj", label: "মুন্সিগঞ্জ" },
    { value: "Narayanganj", label: "নারায়ণগঞ্জ" },
    { value: "Narsingdi", label: "নরসিংদী" },
    { value: "Rajbari", label: "রাজবাড়ী" },
    { value: "Shariatpur", label: "শরীয়তপুর" },
    { value: "Tangail", label: "টাঙ্গাইল" },
    { value: "Bagerhat", label: "বাগেরহাট" },
    { value: "Chuadanga", label: "চুয়াডাঙ্গা" },
    { value: "Jessore", label: "যশোর" },
    { value: "Jhenaidah", label: "ঝিনাইদহ" },
    { value: "Khulna", label: "খুলনা" },
    { value: "Kushtia", label: "কুষ্টিয়া" },
    { value: "Magura", label: "মাগুরা" },
    { value: "Meherpur", label: "মেহেরপুর" },
    { value: "Narail", label: "নড়াইল" },
    { value: "Satkhira", label: "সাতক্ষীরা" },
    { value: "Bogra", label: "বগুড়া" },
    { value: "Chapainawabganj", label: "চাঁপাইনবাবগঞ্জ" },
    { value: "Joypurhat", label: "জয়পুরহাট" },
    { value: "Naogaon", label: "নওগাঁ" },
    { value: "Natore", label: "নাটোর" },
    { value: "Pabna", label: "পাবনা" },
    { value: "Rajshahi", label: "রাজশাহী" },
    { value: "Sirajganj", label: "সিরাজগঞ্জ" },
    { value: "Dinajpur", label: "দিনাজপুর" },
    { value: "Gaibandha", label: "গাইবান্ধা" },
    { value: "Kurigram", label: "কুড়িগ্রাম" },
    { value: "Lalmonirhat", label: "লালমনিরহাট" },
    { value: "Nilphamari", label: "নীলফামারী" },
    { value: "Panchagarh", label: "পঞ্চগড়" },
    { value: "Rangpur", label: "রংপুর" },
    { value: "Thakurgaon", label: "ঠাকুরগাঁও" },
    { value: "Habiganj", label: "হবিগঞ্জ" },
    { value: "Moulvibazar", label: "মৌলভীবাজার" },
    { value: "Sunamganj", label: "সুনামগঞ্জ" },
    { value: "Sylhet", label: "সিলেট" },
    { value: "Barguna", label: "বরগুনা" },
    { value: "Barisal", label: "বরিশাল" },
    { value: "Bhola", label: "ভোলা" },
    { value: "Jhalokati", label: "ঝালকাঠি" },
    { value: "Patuakhali", label: "পটুয়াখালী" },
    { value: "Pirojpur", label: "পিরোজপুর" },
    { value: "Bandarban", label: "বান্দরবান" },
    { value: "Brahmanbaria", label: "ব্রাহ্মণবাড়িয়া" },
    { value: "Chandpur", label: "চাঁদপুর" },
    { value: "Chittagong", label: "চট্টগ্রাম" },
    { value: "Comilla", label: "কুমিল্লা" },
    { value: "Cox's Bazar", label: "কক্সবাজার" },
    { value: "Feni", label: "ফেনী" },
    { value: "Khagrachari", label: "খাগড়াছড়ি" },
    { value: "Lakshmipur", label: "লক্ষ্মীপু�����" },
    { value: "Noakhali", label: "নোয়াখালী" },
    { value: "Rangamati", label: "রাঙ্গামাটি" },
    { value: "Jamalpur", label: "জামালপুর" },
    { value: "Mymensingh", label: "ময়মনসিংহ" },
    { value: "Netrakona", label: "নেত্রকোনা" },
    { value: "Sherpur", label: "শেরপুর" },
  ];

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const toggleProductSelection = (id: number) => {
    setSelectedProductIds(prev => {
      if (prev.includes(id)) {
        // Prevent deselecting the last remaining product
        if (prev.length === 1) return prev;
        return prev.filter(pId => pId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLDivElement>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = t('order.error_name');
      isValid = false;
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = t('order.error_mobile');
      isValid = false;
    } else if (!/^01\d{9}$/.test(formData.mobile.replace(/[- ]/g, ''))) {
      newErrors.mobile = t('order.error_mobile_invalid');
      isValid = false;
    }
    if (!formData.address.trim()) {
      newErrors.address = t('order.error_address');
      isValid = false;
    }
    if (!formData.district.trim()) {
      newErrors.district = t('order.error_district');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleOrderConfirm = async () => {
    if (validateForm()) {
      setIsLoading(true);

      const newOrderId = Math.floor(100000 + Math.random() * 900000).toString();
      setOrderId(newOrderId);

      // Prepare order data
      const currentOrderedItems = selectedProductIds.map(id => {
        const product = products.find(p => p.id === id);
        if (!product) return null;
        return {
          productId: id,
          name: product.name,
          weight: product.weight,
          quantity: quantities[id] || 1,
          price: product.price
        };
      }).filter((item): item is { productId: number; name: string; weight: string; quantity: number; price: number } => item !== null);

      const currentShippingCost = shippingLocation === 'inside' ? 70 : 120;
      const currentSubtotal = currentOrderedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const currentTotal = currentSubtotal + currentShippingCost;
      const districtLabel = districts.find(d => d.value === formData.district)?.label || formData.district;

      const orderData = {
        id: newOrderId,
        customer: {
          name: formData.name,
          mobile: formData.mobile,
          address: formData.address,
          district: districtLabel,
          shippingLocation
        },
        items: currentOrderedItems,
        summary: {
          subtotal: currentSubtotal,
          shipping: currentShippingCost,
          total: currentTotal
        },
        status: 'new',
        createdAt: new Date().toISOString()
      };

      // Save order to Supabase via Server
      try {
        await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-c22efe7d/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(orderData)
        });
      } catch (error) {
        console.error('Failed to save order:', error);
        // Continue to WhatsApp even if save fails (fallback)
      }

      // Prepare WhatsApp Message
      const itemsList = currentOrderedItems.map(item =>
        `- ${item.name} (${item.weight}) x ${toBanglaNum(item.quantity)} = ${toBanglaNum(item.price * item.quantity)}৳`
      ).join('\n');

      const message = `
*নতুন অর্ডার এসেছে!* 📦
অর্ডার আইডি: #${toBanglaNum(newOrderId)}

*ক্রেতার তথ্য:*
নাম: ${formData.name}
ফোন: ${formData.mobile}
ঠিকানা: ${formData.address}, ${districtLabel}

*অর্ডার বিস্তারিত:*
${itemsList}

ডেলিভারি চার্জ: ${toBanglaNum(currentShippingCost)}৳
---------------------------
*মোট বিল: ${toBanglaNum(currentTotal)}৳*

অর্ডারটি কনফার্ম করার জন্য মেসেজটি সেন্ড করুন। ধন্যবাদ!
      `.trim();

      const whatsappUrl = `https://wa.me/8801346463886?text=${encodeURIComponent(message)}`;

      // Open WhatsApp immediately
      window.open(whatsappUrl, '_blank');

      // Update UI state
      setIsLoading(false);
      setShowSuccessModal(true);
      console.log('Order Submitted', { newOrderId });

    } else {
      // Scroll to form if invalid
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    // Optional: Reset form or redirect
    setFormData({
      name: '',
      mobile: '',
      address: '',
      district: 'Dhaka'
    });
    setQuantities({ 1: 1, 2: 1 });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Calculate totals
  const subtotal = selectedProductIds.reduce((sum, id) => {
    const product = products.find(p => p.id === id);
    const quantity = quantities[id] || 1;
    return sum + (product ? product.price * quantity : 0);
  }, 0);

  const shippingCost = shippingLocation === 'inside' ? 70 : 120;
  const total = subtotal + shippingCost;

  const orderedItems = selectedProductIds.map(id => {
    const product = products.find(p => p.id === id);
    if (!product) return null;
    return {
      name: product.name,
      weight: product.weight,
      quantity: quantities[id] || 1,
      price: product.price
    };
  }).filter((item): item is { name: string; weight: string; quantity: number; price: number } => item !== null);

  return (
    <section id="order-section" className="bg-[#8dc540] py-10 md:py-20 font-['Li_Ador_Noirrit'] relative overflow-hidden">

      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #f4f9ed inset !important;
            -webkit-text-fill-color: #374151 !important;
            transition: background-color 5000s ease-in-out 0s;
        }
        
        /* Force background color on autofill */
        input:-webkit-autofill {
            caret-color: #374151;
        }
      `}</style>

      {/* Background Pattern (Optional subtle texture) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Top Instruction Banner */}
        <div className="bg-white rounded-lg py-4 px-6 md:px-10 mb-8 max-w-4xl mx-auto text-center shadow-lg">
          <p className="text-[#8dc540] text-lg md:text-xl font-semibold font-['Li_Ador_Noirrit']">
            {t('order.instruction')}
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-[16px] md:rounded-[24px] shadow-xl max-w-6xl mx-auto border border-white/20">
          <div className="p-6 md:p-10 lg:p-12">

            {/* Product Selection Area */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#374151] mb-6 border-b pb-2 inline-block font-['Li_Ador_Noirrit']">
                {t('order.select_quantity')}
              </h3>

              <div className="grid gap-6">
                {products.map((product) => {
                  const isSelected = selectedProductIds.includes(product.id);
                  return (
                    <div
                      key={product.id}
                      onClick={() => toggleProductSelection(product.id)}
                      className={`
                        relative flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 rounded-xl border-2 transition-all cursor-pointer group
                        ${isSelected ? 'border-[#8dc540] bg-[#f4f9ed]' : 'border-gray-200 hover:border-[#8dc540]/50 bg-white'}
                        ${product.isBestValue ? 'mt-4' : ''}
                      `}
                    >
                      {/* Best Value Badge */}
                      {product.isBestValue && (
                        <div className="absolute -top-3 right-2 md:-right-3 md:right-4 bg-[#e87b00] text-white text-[10px] md:text-sm font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-sm z-10">
                          {t('order.best_value')}
                        </div>
                      )}

                      <div className="flex items-center gap-3 md:gap-4 w-full md:flex-1 mb-3 md:mb-0">
                        {/* Checkbox Button */}
                        <div className={`
                          w-5 h-5 md:w-6 md:h-6 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors
                          ${isSelected ? 'border-[#8dc540] bg-[#8dc540]' : 'border-gray-300 bg-white'}
                        `}>
                          {isSelected && <Check size={14} className="text-white md:w-4 md:h-4" strokeWidth={3} />}
                        </div>

                        {/* Thumbnail */}
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                          <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="font-bold text-[#1F2937] text-sm md:text-lg font-['Li_Ador_Noirrit'] leading-tight">
                              {product.name}
                            </h4>
                            {product.isBestValue && (
                              <span className="md:hidden bg-[#8dc540] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                                {t('order.best')}
                              </span>
                            )}
                            {product.isBestValue && (
                              <span className="hidden md:inline-block bg-[#8dc540] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                {t('order.recommended')}
                              </span>
                            )}
                          </div>
                          <span className="text-gray-500 text-xs md:text-sm font-medium bg-gray-100 px-2 py-0.5 rounded inline-block">
                            {product.weight}
                          </span>
                        </div>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex flex-row md:flex-row items-center justify-between md:justify-end gap-4 md:gap-8 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-gray-200/60 md:border-none border-dashed md:border-solid">
                        {/* Quantity Selector */}
                        <div
                          className="flex items-center gap-2 md:gap-3 bg-[#f1f5f9] p-1 md:p-1.5 rounded-lg md:rounded-xl border border-[#e5e7eb] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            onClick={() => handleQuantityChange(product.id, -1)}
                            className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded md:rounded-lg text-gray-600 bg-[#ffffff] hover:shadow-sm transition-all disabled:opacity-30 disabled:hover:shadow-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-transparent hover:border-gray-200"
                            disabled={quantities[product.id] <= 1}
                          >
                            <Minus size={14} className="md:w-[18px]" strokeWidth={2.5} />
                          </button>
                          <span className="min-w-[16px] md:min-w-[20px] text-center font-bold text-[#151910] text-base md:text-lg font-['Li_Ador_Noirrit'] select-none">
                            {formatNumber(quantities[product.id])}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded md:rounded-lg bg-[#8dc540] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#7cb036] transition-all"
                          >
                            <Plus size={14} className="md:w-[18px]" strokeWidth={2.5} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right min-w-[70px] md:min-w-[80px]">
                          <span className="block font-bold text-lg md:text-xl text-[#374151]">
                            {formatNumber(product.price * (quantities[product.id] || 1))}৳
                          </span>
                          {quantities[product.id] > 1 && (
                            <span className="text-[10px] md:text-xs text-gray-400 block">
                              {formatNumber(product.price)}৳ x {formatNumber(quantities[product.id])}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

              {/* Left Column: Billing Details */}
              <div ref={formRef}>
                <h3 className="text-xl font-bold text-[#374151] mb-6 border-b pb-2 inline-block font-['Li_Ador_Noirrit']">
                  {t('order.billing_address')}
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-['Li_Ador_Noirrit']">{t('order.enter_name')}</label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.name ? 'text-red-400' : 'text-gray-400'}`} size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('order.placeholder_name')}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg outline-none transition-all
                          bg-white focus:bg-[#f4f9ed]
                          ${errors.name
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-gray-300 focus:border-[#8dc540] focus:ring-1 focus:ring-[#8dc540]'
                          }
                        `}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-['Li_Ador_Noirrit']">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-['Li_Ador_Noirrit']">{t('order.enter_mobile')}</label>
                    <div className="relative">
                      <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.mobile ? 'text-red-400' : 'text-gray-400'}`} size={18} />
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder={t('order.placeholder_mobile')}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg outline-none transition-all
                          bg-white focus:bg-[#f4f9ed]
                          ${errors.mobile
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-gray-300 focus:border-[#8dc540] focus:ring-1 focus:ring-[#8dc540]'
                          }
                        `}
                      />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-xs mt-1 font-['Li_Ador_Noirrit']">{errors.mobile}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-['Li_Ador_Noirrit']">{t('order.enter_address')}</label>
                    <div className="relative">
                      <MapPin className={`absolute left-3 top-3 ${errors.address ? 'text-red-400' : 'text-gray-400'}`} size={18} />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder={t('order.placeholder_address')}
                        rows={2}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg outline-none transition-all resize-none
                          bg-white focus:bg-[#f4f9ed]
                          ${errors.address
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-gray-300 focus:border-[#8dc540] focus:ring-1 focus:ring-[#8dc540]'
                          }
                        `}
                      />
                    </div>
                    {errors.address && <p className="text-red-500 text-xs mt-1 font-['Li_Ador_Noirrit']">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-['Li_Ador_Noirrit']">{t('order.district')}</label>
                    <div className="relative">
                      {/* Backdrop for click-outside */}
                      {isDistrictOpen && (
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setIsDistrictOpen(false)}
                        />
                      )}

                      {/* Trigger Button - Converted to Input */}
                      <div
                        className={`
                          relative w-full border rounded-lg flex items-center transition-all
                          ${isDistrictOpen
                            ? 'border-[#8dc540] ring-1 ring-[#8dc540] bg-[#f4f9ed]'
                            : errors.district
                              ? 'border-red-500 ring-1 ring-red-500 bg-white'
                              : 'border-gray-300 hover:border-[#8dc540] bg-white'
                          }
                        `}
                      >
                        <input
                          type="text"
                          name="district"
                          value={formData.district}
                          onChange={(e) => {
                            const val = e.target.value;
                            setFormData(prev => ({ ...prev, district: val }));
                            if (errors.district) setErrors(prev => ({ ...prev, district: '' }));

                            // Auto-detect shipping if exact match found
                            const match = districts.find(d => d.value.toLowerCase() === val.toLowerCase() || d.label === val);
                            if (match) {
                              setShippingLocation(match.value === 'Dhaka' ? 'inside' : 'outside');
                            }
                            setIsDistrictOpen(true);
                          }}
                          onFocus={() => setIsDistrictOpen(true)}
                          placeholder={t('order.placeholder_district')}
                          className="w-full pl-4 pr-2 py-3 bg-transparent outline-none text-gray-700 font-['Li_Ador_Noirrit'] placeholder-gray-400"
                        />

                        {/* Clear Button */}
                        {formData.district && (
                          <div
                            className="p-2 cursor-pointer text-gray-400 hover:text-red-500 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFormData(prev => ({ ...prev, district: '' }));
                              setIsDistrictOpen(true);
                            }}
                          >
                            <X size={18} />
                          </div>
                        )}

                        <div
                          className="pr-4 pl-1 cursor-pointer"
                          onClick={() => setIsDistrictOpen(!isDistrictOpen)}
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-200 ${isDistrictOpen ? 'rotate-180' : ''} ${errors.district ? 'text-red-400' : 'text-gray-500'}`}
                          />
                        </div>
                      </div>
                      {errors.district && <p className="text-red-500 text-xs mt-1 font-['Li_Ador_Noirrit']">{errors.district}</p>}

                      {/* Dropdown Options - Filtered */}
                      <AnimatePresence>
                        {isDistrictOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-[300px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#8dc540] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full"
                          >
                            {districts.filter(d =>
                              d.label.includes(formData.district) ||
                              d.value.toLowerCase().includes(formData.district.toLowerCase())
                            ).length > 0 ? (
                              districts
                                .filter(d =>
                                  d.label.includes(formData.district) ||
                                  d.value.toLowerCase().includes(formData.district.toLowerCase())
                                )
                                .map((district) => (
                                  <div
                                    key={district.value}
                                    onClick={() => {
                                      setFormData(prev => ({ ...prev, district: district.value }));
                                      setShippingLocation(district.value === 'Dhaka' ? 'inside' : 'outside');
                                      setIsDistrictOpen(false);
                                      if (errors.district) setErrors(prev => ({ ...prev, district: '' }));
                                    }}
                                    className={`
                                      px-4 py-2.5 cursor-pointer transition-colors text-sm font-['Li_Ador_Noirrit']
                                      ${formData.district === district.value
                                        ? 'bg-[#8dc540]/10 text-[#8dc540] font-bold'
                                        : 'text-gray-700 hover:bg-[#f4f9ed] hover:text-[#8dc540]'}
                                    `}
                                  >
                                    {language === 'bn' ? district.label : district.value}
                                  </div>
                                ))
                            ) : (
                              <div className="px-4 py-3 text-sm text-gray-500 font-['Li_Ador_Noirrit'] text-center">
                                {t('order.no_district_found')}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 font-['Li_Ador_Noirrit'] mb-2">
                    {t('order.shipping_area')}
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    <label className={`
                      relative flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all
                      ${shippingLocation === 'inside' ? 'border-[#8dc540] bg-white ring-1 ring-[#8dc540]' : 'border-gray-200 bg-white hover:border-gray-300'}
                    `}>
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          className="peer sr-only"
                          checked={shippingLocation === 'inside'}
                          onChange={() => setShippingLocation('inside')}
                        />
                        <div className={`
                          w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-all
                          peer-checked:border-none peer-checked:bg-[#87c73d]
                          ${shippingLocation === 'inside' ? 'bg-[#87c73d] border-none' : ''}
                        `}>
                          {shippingLocation === 'inside' && (
                            <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
                          )}
                        </div>
                      </div>
                      <span className="text-sm md:text-base text-[#334155] font-['Li_Ador_Noirrit']">
                        {t('order.inside_dhaka')} ({formatNumber(70)}৳)
                      </span>
                    </label>

                    <label className={`
                      relative flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all
                      ${shippingLocation === 'outside' ? 'border-[#8dc540] bg-white ring-1 ring-[#8dc540]' : 'border-gray-200 bg-white hover:border-gray-300'}
                    `}>
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          className="peer sr-only"
                          checked={shippingLocation === 'outside'}
                          onChange={() => setShippingLocation('outside')}
                        />
                        <div className={`
                          w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-all
                          peer-checked:border-none peer-checked:bg-[#87c73d]
                          ${shippingLocation === 'outside' ? 'bg-[#87c73d] border-none' : ''}
                        `}>
                          {shippingLocation === 'outside' && (
                            <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
                          )}
                        </div>
                      </div>
                      <span className="text-sm md:text-base text-[#334155] font-['Li_Ador_Noirrit']">
                        {t('order.outside_dhaka')} ({formatNumber(120)}৳)
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className="bg-[#f9fafb] p-6 md:p-8 rounded-2xl h-fit border border-gray-200">
                <h3 className="text-xl font-bold text-[#374151] mb-6 border-b pb-2 font-['Li_Ador_Noirrit']">
                  {t('order.your_order')}
                </h3>

                <div className="space-y-4 mb-6">
                  {selectedProductIds.length > 0 ? (
                    selectedProductIds.map(id => {
                      const product = products.find(p => p.id === id);
                      if (!product) return null;
                      return (
                        <div key={id} className="flex justify-between items-center text-sm md:text-base border-b border-dashed border-gray-200 pb-3 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-white border border-gray-200 overflow-hidden">
                              <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <span className="block font-medium text-gray-700">{product.name}</span>
                              <span className="text-xs text-gray-500">{product.weight} x {formatNumber(quantities[id])}</span>
                            </div>
                          </div>
                          <span className="font-bold text-gray-600">{formatNumber(product.price * quantities[id])}৳</span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center text-gray-400 py-4 italic text-sm">
                      {t('order.no_product_selected')}
                    </div>
                  )}
                </div>

                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>{t('order.subtotal')}</span>
                    <span className="font-bold">{formatNumber(subtotal)}৳</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>{t('order.delivery_charge')}</span>
                    <span className="font-bold">{formatNumber(shippingCost)}৳</span>
                  </div>
                  <div className="flex justify-between text-lg md:text-xl font-bold text-[#374151] border-t border-gray-200 pt-3 mt-2">
                    <span>{t('order.total')}</span>
                    <span>{formatNumber(total)}৳</span>
                  </div>
                </div>

                <button
                  onClick={handleOrderConfirm}
                  disabled={isLoading || selectedProductIds.length === 0}
                  className="w-full mt-8 group transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-white font-['Li_Ador_Noirrit']"
                >
                  <style>{`
                    @keyframes shake-strong {
                      0%, 90% { transform: scale(1) rotate(0deg); }
                      91% { transform: scale(1.02) rotate(-2deg); }
                      93% { transform: scale(1.02) rotate(2deg); }
                      95% { transform: scale(1.02) rotate(-2deg); }
                      97% { transform: scale(1.02) rotate(2deg); }
                      100% { transform: scale(1) rotate(0deg); }
                    }
                  `}</style>
                  <div className="bg-white rounded-[14px] p-[3px] shadow-[0px_4px_15px_0px_rgba(232,123,0,0.4)] animate-[shake-strong_4s_infinite]">
                    <div className="relative bg-[#e87b00] rounded-[9px] py-2.5 px-6 flex items-center justify-center gap-4 overflow-hidden">
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-10"></div>

                      {isLoading ? (
                        <div className="flex items-center gap-2 relative z-20">
                          <Loader2 className="animate-spin" />
                          <span className="text-xl font-bold">{t('order.processing')}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 relative z-20">
                          <ShoppingBag size={28} strokeWidth={2.5} />
                          <div className="flex flex-col items-center leading-none">
                            <span className="text-lg font-bold">
                              {t('order.confirm_button')}
                            </span>
                            <span className="text-xl font-bold pt-0.5">
                              {formatNumber(total)}৳
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  {t('order.disclaimer')}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Success Modal */}
        <OrderSuccessModal
          isOpen={showSuccessModal}
          onClose={closeModal}
          orderedItems={orderedItems}
          subtotal={subtotal}
          shippingCost={shippingCost}
          shippingLocation={shippingLocation}
          totalAmount={total}
        />

      </div>
    </section>
  );
}