function StatusBadge({ status }) {
  const base = 'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium';
  const map = {
    Paid: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
    Pending: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
    Failed: 'bg-rose-50 text-rose-700 ring-1 ring-rose-200',
  };
  const icon = status === 'Paid' ? '✅' : status === 'Pending' ? '⏳' : '⚠️';
  return <span className={`${base} ${map[status] || 'bg-slate-100 text-slate-700 ring-1 ring-slate-200'}`}>{icon} {status}</span>;
}

export default function OrdersTable({ orders }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Order</th>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Qty</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Payment</th>
              <th className="px-4 py-3 font-medium">Method</th>
              <th className="px-4 py-3 font-medium">Shipping</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((o) => (
              <tr key={o.id} className="bg-white hover:bg-slate-50/60">
                <td className="px-4 py-3">
                  <div className="font-medium text-slate-900">{o.id}</div>
                  <div className="text-xs text-slate-500">{o.customerName} • {o.phone}</div>
                </td>
                <td className="px-4 py-3">{o.product}</td>
                <td className="px-4 py-3">{new Date(o.date).toLocaleDateString()}</td>
                <td className="px-4 py-3">{o.quantity}</td>
                <td className="px-4 py-3">${Number(o.price).toFixed(2)}</td>
                <td className="px-4 py-3"><StatusBadge status={o.paymentStatus} /></td>
                <td className="px-4 py-3">{o.paymentMethod}</td>
                <td className="px-4 py-3">{o.shippingStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
