import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <header className="relative w-full h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 md:px-6 flex items-center">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Secure fintech experiences for everyone
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Your orders, all in one place
          </h1>
          <p className="mt-3 text-slate-700 max-w-2xl">
            View order history, payment status, and delivery updates using just your phone number. Fast, private, and secure.
          </p>
        </div>
      </div>
    </header>
  );
}
