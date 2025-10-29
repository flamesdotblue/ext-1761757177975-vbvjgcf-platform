export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-lg font-semibold">FinEdge</div>
            <p className="text-slate-600 text-sm">Modern payment experiences for digital commerce.</p>
          </div>
          <div className="text-slate-500 text-sm">© {new Date().getFullYear()} FinEdge Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
