import { useEffect, useState } from 'react';

export default function PhoneLookup({ onSearch }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!value) {
      setError('');
      return;
    }
    const digits = value.replace(/\D/g, '');
    if (digits.length < 7) {
      setError('Enter at least 7 digits');
    } else {
      setError('');
    }
  }, [value]);

  const submit = (e) => {
    e.preventDefault();
    if (error) return;
    if (!value) {
      setError('Phone number is required');
      return;
    }
    onSearch(value.trim());
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 md:flex-row md:items-center">
      <div className="flex-1">
        <label htmlFor="phone" className="sr-only">Phone number</label>
        <div className={`flex items-center gap-2 rounded-xl border bg-white px-4 py-3 shadow-sm ${error ? 'border-rose-400' : 'border-slate-300'}`}>
          <span className="text-slate-400 select-none">📱</span>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Enter your phone number (e.g., +1 555-123-4567)"
            className="w-full outline-none bg-transparent text-slate-900 placeholder:text-slate-400"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {error && <p className="mt-2 text-sm text-rose-600">{error}</p>}
      </div>
      <button
        type="submit"
        className="inline-flex justify-center items-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
        aria-label="Search orders by phone number"
      >
        View orders
      </button>
    </form>
  );
}
