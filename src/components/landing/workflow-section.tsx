const workflowSteps = [
  {
    number: "01",
    title: "Regjistro klientin",
    description:
      "Shto klientin me telefon, email dhe të dhënat bazë për komunikim.",
  },
  {
    number: "02",
    title: "Lidh automjetin",
    description:
      "Ruaj targën, markën, modelin, vitin, VIN dhe kilometrat aktuale.",
  },
  {
    number: "03",
    title: "Krijo servis",
    description:
      "Hap urdhrin e punës, cakto mekanikun, statusin dhe punimet që do kryhen.",
  },
  {
    number: "04",
    title: "Shto pjesët",
    description:
      "Përdor pjesë nga inventari dhe stoku ulet automatikisht.",
  },
  {
    number: "05",
    title: "Gjenero faturë",
    description:
      "Krijo faturë profesionale, printoje ose shkarkoje si PDF.",
  },
  {
    number: "06",
    title: "Ndiq pagesën",
    description:
      "Regjistro pagesën dhe shiko faturat e paguara ose të papaguara.",
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">
              Workflow
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Nga hyrja e makinës në servis deri te fatura dhe pagesa.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              AutoFlow e kthen procesin e përditshëm të servisit në një rrjedhë
              të qartë, të ndjekshme dhe të organizuar.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-500">
                Rrjedha kryesore
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Klient", "Automjet", "Servis", "Pjesë", "Faturë", "Pagesë"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {workflowSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                {index !== workflowSteps.length - 1 && (
                  <div className="absolute left-9 top-full hidden h-5 w-px bg-slate-300 lg:block" />
                )}

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}