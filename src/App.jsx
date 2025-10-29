import { useMemo, useState } from 'react';
import Hero from './components/Hero';
import PhoneLookup from './components/PhoneLookup';
import OrdersTable from './components/OrdersTable';
import Footer from './components/Footer';

const MOCK_ORDERS = [
  {
    id: 'ORD-23001',
    phone: '+1 555-123-4567',
    customerName: 'Ava Thompson',
    product: 'Premium Visa Card',
    date: '2025-10-12',
    quantity: 1,
    price: 129.0,
    paymentStatus: 'Paid',
    paymentMethod: 'Card',
    shippingStatus: 'Shipped',
  },
  {
    id: 'ORD-23002',
    phone: '+1 555-123-4567',
    customerName: 'Ava Thompson',
    product: 'Virtual Card Add-on',
    date: '2025-10-14',
    quantity: 1,
    price: 19.99,
    paymentStatus: 'Pending',
    paymentMethod: 'UPI',
    shippingStatus: 'N/A',
  },
  {
    id: 'ORD-23003',
    phone: '+44 7700 900123',
    customerName: 'James Miller',
    product: 'Metal Card - Rose Gold',
    date: '2025-09-30',
    quantity: 1,
    price: 199.0,
    paymentStatus: 'Paid',
    paymentMethod: 'Card',
    shippingStatus: 'Delivered',
  },
  {
    id: 'ORD-23004',
    phone: '5551234567',
    customerName: 'Priya Patel',
    product: 'Business Card Bundle (x5)',
    date: '2025-10-01',
    quantity: 5,
    price: 499.0,
    paymentStatus: 'Failed',
    paymentMethod: 'NetBanking',
    shippingStatus: 'On Hold',
  },
];

function normalizePhone(input) {
  return input.replace(/\D/g, '');
}

export default function App() {
  const [phoneEntered, setPhoneEntered] = useState('');
  const [queried, setQueried] = useState(false);

  const matchingOrders = useMemo(() => {
    if (!queried) return [];
    const needle = normalizePhone(phoneEntered);
    if (!needle) return [];
    return MOCK_ORDERS.filter((o) => normalizePhone(o.phone) === needle);
  }, [phoneEntered, queried]);

  const totalAmount = useMemo(
    () => matchingOrders.reduce((sum, o) => sum + Number(o.price || 0), 0),
    [matchingOrders]
  );

  const handleSearch = (phone) => {
    setPhoneEntered(phone);
    setQueried(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Hero />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6 -mt-20">
        <section className="bg-white/80 backdrop-blur-xl border border-slate-200/70 rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Track your orders</h2>
          <p className="text-slate-600 mt-1 mb-6">Enter your phone number to see all your purchases and their status.</p>
          <PhoneLookup onSearch={handleSearch} />

          {queried && (
            <div className="mt-8">
              {matchingOrders.length > 0 ? (
                <>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-4">
                    <div className="text-sm text-slate-600">
                      Showing {matchingOrders.length} order{matchingOrders.length !== 1 ? 's' : ''} for <span className="font-medium text-slate-900">{phoneEntered}</span>
                    </div>
                    <div className="text-sm">
                      Total value: <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                  <OrdersTable orders={matchingOrders} />
                </>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
                  <p className="text-lg font-medium">No orders found</p>
                  <p className="text-slate-600 mt-1">We couldn’t find any orders associated with that phone number. Please check the number and try again.</p>
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
