export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-slate-950">AutoFlow</p>
          <p className="mt-1 text-sm text-slate-500">
            Platformë SaaS për servise automjetesh.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 AutoFlow. Të gjitha të drejtat e rezervuara.
        </p>
      </div>
    </footer>
  );
}