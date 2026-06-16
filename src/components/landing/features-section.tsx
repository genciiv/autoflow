"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Calendar,
  Car,
  Package,
  Receipt,
  Users,
  Wrench,
} from "lucide-react";

const features = [
  {
    title: "Menaxhimi i Klientëve",
    icon: Users,
    description:
      "Ruaj klientët, kontaktet, automjetet dhe historikun e tyre në një vend të organizuar.",
  },
  {
    title: "Automjetet",
    icon: Car,
    description:
      "Menaxho targat, markat, modelet, VIN, kilometrat dhe historikun e çdo makine.",
  },
  {
    title: "Serviset",
    icon: Wrench,
    description:
      "Krijo dhe ndiq serviset nga hapja e punës deri te përfundimi dhe pagesa.",
  },
  {
    title: "Faturat & Pagesat",
    icon: Receipt,
    description:
      "Gjenero fatura profesionale, printo PDF dhe ndiq pagesat e klientëve.",
  },
  {
    title: "Inventari",
    icon: Package,
    description:
      "Kontrollo stokun e pjesëve dhe ul automatikisht sasinë kur përdoren në servis.",
  },
  {
    title: "Rikujtimet",
    icon: Bell,
    description:
      "Krijo rikujtime për vaj, filtra, goma, kontroll teknik dhe servise periodike.",
  },
  {
    title: "Rezervimet Online",
    icon: Calendar,
    description:
      "Klientët mund të dërgojnë kërkesa për servis nga portali i tyre.",
  },
  {
    title: "Raportet",
    icon: BarChart3,
    description:
      "Analizo të ardhurat, serviset, faturat, klientët dhe performancën mujore.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
            FUNKSIONALITETET
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Gjithçka që i duhet një servisi modern.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            AutoFlow centralizon operacionet e servisit në një dashboard të
            vetëm për të kursyer kohë, ulur gabimet dhe rritur fitimin.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={26} strokeWidth={2.2} />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-indigo-100 transition-all duration-300 group-hover:w-24 group-hover:bg-indigo-600" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}