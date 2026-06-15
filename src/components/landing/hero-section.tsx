export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Platformë profesionale për servise automjetesh
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-950 lg:text-6xl">
              Menaxho servisin, klientët dhe automjetet në një sistem modern.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              AutoFlow ndihmon serviset të ruajnë historikun e makinave,
              faturat, pjesët, pagesat dhe rikujtimet automatike në një
              dashboard të pastër dhe profesional.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/apply"
                className="rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Fillo provën falas
              </a>

              <a
                href="/features"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Shiko funksionet
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Dashboard</p>
                  <h3 className="text-xl font-bold text-slate-950">
                    AutoService Pro
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  Aktiv
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Klientë", "1,248"],
                  ["Automjete", "1,932"],
                  ["Fatura", "342"],
                  ["Të ardhura", "€12,480"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="mt-2 text-2xl font-bold text-slate-950">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-900">
                  Shërbimi i fundit
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Volkswagen Jetta</span>
                    <span>AA123BB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ndërrim vaji + filtra</span>
                    <span className="font-semibold text-slate-900">€95</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}