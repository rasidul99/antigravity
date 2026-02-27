import { useEffect, useState } from 'react';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { Loader2, Package, Search } from 'lucide-react';

// Bangla Number Converter Helper
const toBangla = (num: number | string) => {
  if (!num) return '';
  return num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
};

interface Order {
  id: string;
  customer: {
    name: string;
    mobile: string;
    address: string;
    district: string;
    shippingLocation: string;
  };
  items: Array<{
    name: string;
    weight: string;
    quantity: number;
    price: number;
  }>;
  summary: {
    subtotal: number;
    shipping: number;
    total: number;
  };
  createdAt: string;
}

export function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-c22efe7d/orders`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch orders');
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError('অর্ডার লোড করতে সমস্যা হচ্ছে। আবার চেষ্ট�� করুন।');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter(order => 
    order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.mobile.includes(searchTerm) ||
    order.id.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50 font-['Li_Ador_Noirrit'] p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <Package className="text-[#8dc540]" />
            অর্ডার ড্যাশবোর্ড
          </h1>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="নাম, ফোন বা অর্ডার আইডি দিয়ে খুঁজুন..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8dc540]"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin text-[#8dc540]" size={40} />
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            {error}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                    <th className="p-4 border-b font-semibold">অর্ডার আইডি</th>
                    <th className="p-4 border-b font-semibold">গ্রাহকের তথ্য</th>
                    <th className="p-4 border-b font-semibold">পণ্য ও পরিমাণ</th>
                    <th className="p-4 border-b font-semibold">ঠিকানা</th>
                    <th className="p-4 border-b font-semibold text-right">মোট বিল</th>
                    <th className="p-4 border-b font-semibold">তারিখ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-mono text-sm text-[#8dc540] font-bold">
                          #{toBangla(order.id)}
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-gray-800">{order.customer.name}</div>
                          <div className="text-sm text-gray-500">{order.customer.mobile}</div>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            {order.items.map((item, idx) => (
                              <div key={idx} className="text-sm text-gray-700">
                                {item.name} ({item.weight}) x {toBangla(item.quantity)}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="p-4 text-sm text-gray-600 max-w-xs">
                          {order.customer.address}, {order.customer.district}
                          <br />
                          <span className="text-xs text-gray-400">
                            ({order.customer.shippingLocation === 'inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাহিরে'})
                          </span>
                        </td>
                        <td className="p-4 text-right font-bold text-gray-800">
                          {toBangla(order.summary.total)}৳
                        </td>
                        <td className="p-4 text-sm text-gray-500">
                          {new Date(order.createdAt).toLocaleDateString('bn-BD')}
                          <br />
                          {new Date(order.createdAt).toLocaleTimeString('bn-BD')}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-gray-500">
                        কোনো অর্ডার পাওয়া যায়নি
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}