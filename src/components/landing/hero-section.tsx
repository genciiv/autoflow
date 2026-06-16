import Link from "next/link";

const stats = [
  { label: "Klientë", value: "542", change: "+12%" },
  { label: "Automjete", value: "812", change: "+8%" },
  { label: "Servise", value: "186", change: "+15%" },
  { label: "Të ardhura", value: "€24,850", change: "+18%" },
];

const services = [
  { car: "Volkswagen Jetta", detail: "AA123BB • Ndërrim vaji", status: "Në punë" },
  { car: "BMW X5", detail: "AB456CD • Kontroll frenash", status: "Përfunduar" },
  { car: "Audi A4", detail: "AC789EF • Diagnostikim", status: "Në pritje" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#ede9fe,transparent_28%),radial-gradient(circle_at_20%_80%,#e0f2fe,transparent_25%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <div className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            Platformë SaaS për servise automjetesh
          </div>

          <h1 className="mt-7 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Menaxho servisin, klientët, automjetet dhe faturat nga një{" "}
            <span className="text-indigo-600">platformë profesionale.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            AutoFlow ndihmon serviset të organizojnë historikun e makinave,
            punimet, pjesët, faturat, pagesat dhe rikujtimet automatike në një
            dashboard modern, të thjeshtë dhe të sigurt.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apply"
              className="rounded-2xl bg-slate-950 px-6 py-4 text-center text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
            >
              Fillo provën falas
            </Link>

            <Link
              href="/pricing"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center text-sm font-bold text-slate-950 transition hover:bg-slate-50"
            >
              Shiko çmimet
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-black text-slate-950">30</p>
              <p className="text-sm text-slate-500">ditë falas</p>
            </div>

            <div>
              <p className="text-2xl font-black text-slate-950">24/7</p>
              <p className="text-sm text-slate-500">akses online</p>
            </div>

            <div>
              <p className="text-2xl font-black text-slate-950">100%</p>
              <p className="text-sm text-slate-500">multi-tenant</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-indigo-200/40 blur-3xl" />

          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                <div>
                  <p className="text-sm text-slate-500">AutoFlow Dashboard</p>
                  <h3 className="font-bold text-slate-950">AutoService Pro</h3>
                </div>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  Trial Active
                </span>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 text-2xl font-black text-slate-950">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-emerald-600">
                      {item.change} këtë muaj
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 px-5 pb-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-950">
                        Të ardhura mujore
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">
                        Pagesa dhe fatura
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                      +18%
                    </span>
                  </div>

                  <div className="mt-6 flex h-36 items-end gap-2">
                    {[35, 48, 42, 58, 72, 65, 88].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-xl bg-indigo-600"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="font-bold text-slate-950">
                    Serviset e fundit
                  </h4>

                  <div className="mt-5 space-y-4">
                    {services.map((service) => (
                      <div
                        key={service.car}
                        className="flex items-center justify-between gap-3"
                      >
                        <div>
                          <p className="text-sm font-bold text-slate-950">
                            {service.car}
                          </p>
                          <p className="text-xs text-slate-500">
                            {service.detail}
                          </p>
                        </div>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {service.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mx-5 mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-950">
                    Rikujtime të afërta
                  </h4>

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    3 sot
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["BMW X5", "Audi A4", "Mercedes C200"].map((car) => (
                    <div
                      key={car}
                      className="rounded-xl border border-slate-200 p-3"
                    >
                      <p className="text-sm font-bold text-slate-950">{car}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Kontroll servisi
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:block">
            <p className="text-sm text-slate-500">Faturë e krijuar</p>
            <p className="mt-1 text-xl font-black text-slate-950">
              INV-2026-0148
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}