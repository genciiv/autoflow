const features = [
  {
    title: "Historik i plotë i automjetit",
    description:
      "Çdo servis, pjesë e ndërruar, faturë dhe kilometrazh ruhet në profilin e makinës.",
  },
  {
    title: "Fatura profesionale",
    description:
      "Gjenero fatura PDF me logon e servisit, punimet, pjesët dhe totalin.",
  },
  {
    title: "Rikujtime automatike",
    description:
      "Njofto klientët për ndërrim vaji, kontroll teknik, goma sezonale dhe servis periodik.",
  },
  {
    title: "Menaxhim klientësh",
    description:
      "Ruaj klientët, telefonat, makinat, pagesat dhe shënimet në një vend.",
  },
  {
    title: "Inventar pjesësh",
    description:
      "Kontrollo stokun e vajrave, filtrave, baterive, frenave dhe pjesëve të tjera.",
  },
  {
    title: "Raporte biznesi",
    description:
      "Shiko të ardhurat, faturat e papaguara, shërbimet më të kërkuara dhe performancën mujore.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Funksionet
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Gjithçka që i duhet një servisi modern
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Nga klienti i parë deri te faturimi dhe rikthimi i klientit për
            servisin e ardhshëm.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-6 h-10 w-10 rounded-xl bg-slate-950" />

              <h3 className="text-lg font-semibold text-slate-950">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}