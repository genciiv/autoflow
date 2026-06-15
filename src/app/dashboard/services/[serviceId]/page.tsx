import { ServiceStatusSelector } from "@/components/services/service-status-selector";

const statusSteps = [
  "Draft",
  "Pending",
  "In Progress",
  "Waiting Parts",
  "Completed",
  "Invoiced",
  "Paid",
];

const currentStatus = "In Progress";

const service = {
  vehicle: "Volkswagen Jetta",
  plate: "AA123BB",
  customer: "Arben Hoxha",
  mileage: "187000",
  mechanic: "Besnik Meta",
  date: "12.06.2026",
  status: "In Progress",
  total: "€95",
};

const parts = [
  {
    name: "Vaj Motori 5W30",
    qty: 5,
    price: "€45",
  },
  {
    name: "Filtër Vaji",
    qty: 1,
    price: "€10",
  },
];

export default function ServiceDetailsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-950">Servisi</h1>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div>
            <p className="text-sm text-slate-500">Automjeti</p>
            <p className="font-semibold">{service.vehicle}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Targa</p>
            <p className="font-semibold">{service.plate}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Klienti</p>
            <p className="font-semibold">{service.customer}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Mekaniku</p>
            <p className="font-semibold">{service.mechanic}</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">
          Statusi i Servisit
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {statusSteps.map((status) => (
            <div
              key={status}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                status === currentStatus
                  ? "bg-slate-950 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {status}
            </div>
          ))}
        </div>
      </div>

      <ServiceStatusSelector />

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">
          Pjesët e përdorura
        </h2>

        <div className="mt-6 space-y-4">
          {parts.map((part) => (
            <div
              key={part.name}
              className="flex justify-between rounded-2xl border border-slate-200 p-4"
            >
              <span>{part.name}</span>
              <span>
                {part.qty} × {part.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex justify-between">
          <span className="text-lg font-medium">Totali</span>
          <span className="text-2xl font-bold">{service.total}</span>
        </div>
      </div>
    </div>
  );
}