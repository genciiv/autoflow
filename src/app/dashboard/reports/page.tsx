import { RevenueAnalytics } from "@/components/reports/revenue-analytics";
import { ServiceAnalytics } from "@/components/reports/service-analytics";

const stats = [
  {
    label: "Të ardhura mujore",
    value: "€24,850",
    change: "+14%",
  },
  {
    label: "Servise të kryera",
    value: "186",
    change: "+18%",
  },
  {
    label: "Fatura të papaguara",
    value: "23",
    change: "duhen ndjekur",
  },
  {
    label: "Klientë të rinj",
    value: "42",
    change: "+9%",
  },
];

const topServices = [
  { name: "Ndërrim vaji + filtra", count: 64, revenue: "€6,080" },
  { name: "Kontroll frenash", count: 38, revenue: "€5,320" },
  { name: "Diagnostikim", count: 31, revenue: "€1,085" },
  { name: "Bateri", count: 18, revenue: "€1,530" },
];

const monthlyRevenue = [
  { month: "Jan", value: 45 },
  { month: "Shk", value: 52 },
  { month: "Mar", value: 48 },
  { month: "Pri", value: 61 },
  { month: "Maj", value: 74 },
  { month: "Qer", value: 90 },
];

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">Raportet</h1>
        <p className="mt-2 text-slate-500">
          Analizo të ardhurat, faturat, shërbimet dhe performancën mujore.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-950">
              {stat.value}
            </h3>
            <p className="mt-2 text-sm text-slate-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Të ardhurat mujore
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Përmbledhje e faturave dhe pagesave.
          </p>

          <div className="mt-8 flex h-64 items-end gap-4">
            {monthlyRevenue.map((item) => (
              <div
                key={item.month}
                className="flex flex-1 flex-col items-center"
              >
                <div
                  className="w-full rounded-t-xl bg-slate-950"
                  style={{ height: `${item.value}%` }}
                />
                <span className="mt-3 text-sm text-slate-500">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Shërbimet më të kërkuara
          </h2>

          <div className="mt-6 space-y-4">
            {topServices.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
              >
                <div>
                  <p className="font-semibold text-slate-950">
                    {service.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {service.count} herë
                  </p>
                </div>

                <p className="font-bold text-slate-950">{service.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">
          Përmbledhje financiare
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Të paguara</p>
            <p className="mt-2 text-2xl font-bold text-emerald-600">
              €21,400
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Të papaguara</p>
            <p className="mt-2 text-2xl font-bold text-red-600">€3,450</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Mesatarja për servis</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">€133</p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <RevenueAnalytics />
        <ServiceAnalytics />
      </div>
    </div>
  );
}