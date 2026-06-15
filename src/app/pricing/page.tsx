const plans = [
  {
    name: "Basic",
    price: "29€",
    description: "Për servise të vogla që duan të organizohen.",
    features: [
      "Deri 300 klientë",
      "Deri 500 automjete",
      "Historik servisesh",
      "Fatura bazë",
      "Dashboard biznesi",
    ],
  },
  {
    name: "Pro",
    price: "49€",
    description: "Për servise që duan menaxhim të plotë.",
    featured: true,
    features: [
      "Klientë pa limit",
      "Automjete pa limit",
      "Inventar pjesësh",
      "Fatura PDF",
      "Rikujtime automatike",
      "Raporte mujore",
      "Staf i servisit",
    ],
  },
  {
    name: "Premium",
    price: "79€",
    description: "Për servise që duan portal klienti dhe kontroll të avancuar.",
    features: [
      "Të gjitha te Pro",
      "Portal klienti",
      "Rezervime online",
      "Raporte të avancuara",
      "Support prioritar",
      "Branding i faturave",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Çmimet
          </span>

          <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-950">
            Zgjidh planin për servisin tënd
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Nis me funksionet bazë dhe zgjeroje platformën sipas nevojave të
            biznesit.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 shadow-sm ${
                plan.featured
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            >
              {plan.featured && (
                <span className="mb-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  Më i rekomanduar
                </span>
              )}

              <h2 className="text-2xl font-bold">{plan.name}</h2>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span
                  className={
                    plan.featured ? "text-slate-300" : "text-slate-500"
                  }
                >
                  /muaj
                </span>
              </div>

              <p
                className={`mt-5 leading-7 ${
                  plan.featured ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <a
                href="/apply"
                className={`mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold ${
                  plan.featured
                    ? "bg-white text-slate-950"
                    : "bg-slate-950 text-white"
                }`}
              >
                Fillo provën falas
              </a>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm ${
                      plan.featured ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}