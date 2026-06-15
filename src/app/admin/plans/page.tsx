const plans = [
  {
    name: "Basic",
    price: "29€",
    status: "active",
    features: [
      "Deri 300 klientë",
      "Deri 500 automjete",
      "Historik servisesh",
      "Fatura bazë",
    ],
  },
  {
    name: "Pro",
    price: "49€",
    status: "active",
    features: [
      "Klientë pa limit",
      "Automjete pa limit",
      "Inventar pjesësh",
      "Fatura PDF",
      "Rikujtime automatike",
    ],
  },
  {
    name: "Premium",
    price: "79€",
    status: "active",
    features: [
      "Të gjitha te Pro",
      "Portal klienti",
      "Rezervime online",
      "Raporte të avancuara",
      "Support prioritar",
    ],
  },
];

export default function PlansPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">
            Planet e Abonimit
          </h1>

          <p className="mt-2 text-slate-500">
            Menaxho paketat mujore që u ofrohen serviseve.
          </p>
        </div>

        <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
          Shto plan
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-950">
                {plan.name}
              </h2>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                {plan.status}
              </span>
            </div>

            <div className="mt-6">
              <span className="text-5xl font-bold text-slate-950">
                {plan.price}
              </span>
              <span className="text-slate-500"> /muaj</span>
            </div>

            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="text-sm text-slate-600">
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <button className="flex-1 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium">
                Ndrysho
              </button>

              <button className="flex-1 rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white">
                Shiko
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}