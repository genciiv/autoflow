const features = [
  {
    title: "Menaxhimi i Klientëve",
    description:
      "Ruaj të gjithë klientët, kontaktet dhe historikun e tyre në një vend.",
  },
  {
    title: "Automjetet",
    description:
      "Menaxho targat, markat, modelet, VIN dhe kilometrat e automjeteve.",
  },
  {
    title: "Serviset",
    description:
      "Krijo dhe ndiq serviset nga hapja deri te përfundimi dhe pagesa.",
  },
  {
    title: "Faturat & Pagesat",
    description:
      "Gjenero fatura profesionale dhe ndiq pagesat e klientëve.",
  },
  {
    title: "Inventari",
    description:
      "Kontrollo stokun e pjesëve dhe materialeve në kohë reale.",
  },
  {
    title: "Rikujtimet",
    description:
      "Dërgo rikujtime automatike për servise, vaj, filtra dhe kontrolle.",
  },
  {
    title: "Rezervimet Online",
    description:
      "Klientët mund të kërkojnë rezervime direkt nga portali.",
  },
  {
    title: "Raportet",
    description:
      "Analizo të ardhurat, serviset, klientët dhe performancën e biznesit.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">
            Features
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Gjithçka që i duhet një servisi modern.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            AutoFlow centralizon operacionet e servisit në një dashboard të
            vetëm për të kursyer kohë dhe për të rritur fitimin.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-sm font-black text-indigo-700">
                {feature.title.slice(0, 2)}
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-950">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}