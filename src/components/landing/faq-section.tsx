"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Çfarë është AutoFlow?",
    answer:
      "AutoFlow është platformë SaaS për servise automjetesh që ndihmon në menaxhimin e klientëve, automjeteve, serviseve, faturave, pagesave dhe rikujtimeve.",
  },
  {
    question: "A mund ta përdor për më shumë se një servis?",
    answer:
      "Po. Platforma është ndërtuar si multi-tenant SaaS ku çdo servis ka të dhënat e veta të izoluara.",
  },
  {
    question: "A ka portal për klientët?",
    answer:
      "Po. Klientët mund të shohin historikun e automjeteve, faturat, serviset dhe rikujtimet.",
  },
  {
    question: "A mund të gjeneroj fatura?",
    answer:
      "Po. Nga çdo servis mund të krijosh faturë profesionale, ta printosh ose ta shkarkosh si PDF.",
  },
  {
    question: "A menaxhon inventarin?",
    answer:
      "Po. AutoFlow mban stokun e pjesëve dhe e përditëson automatikisht kur përdoren në servis.",
  },
  {
    question: "A ka provë falas?",
    answer:
      "Po. Çdo biznes përfiton 30 ditë provë falas para aktivizimit të abonimit.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-linear-to-b from-white to-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
            FAQ
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950">
            Pyetjet më të shpeshta
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Gjithçka që duhet të dish për AutoFlow para se të fillosh.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-bold text-slate-950">
                    {faq.question}
                  </span>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl font-bold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-6 py-5">
                      <p className="leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-indigo-100 bg-indigo-50 p-8 text-center">
          <h3 className="text-xl font-black text-slate-950">
            Nuk e gjete përgjigjen?
          </h3>

          <p className="mt-3 text-slate-600">
            Kontakto ekipin tonë dhe do të të ndihmojmë të fillosh me AutoFlow.
          </p>

          <a
  href="mailto:vaqogenci@gmail.com?subject=Interes%20p%C3%ABr%20AutoFlow&body=P%C3%ABrsh%C3%ABndetje%2C%20dua%20m%C3%AB%20shum%C3%AB%20informacion%20p%C3%ABr%20AutoFlow."
  className="mt-6 inline-flex rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
>
  Kontakto ekipin
</a>
        </div>
      </div>
    </section>
  );
}