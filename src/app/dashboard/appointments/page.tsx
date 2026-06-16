import {
  approveAppointmentAction,
  rejectAppointmentAction,
} from "@/features/appointments/actions";

const appointments = [
  {
    id: "1",
    customer: "Arben Hoxha",
    vehicle: "Volkswagen Jetta",
    plate: "AA123BB",
    title: "Ndërrim vaji",
    preferredDate: "20.06.2026",
    status: "pending",
  },
  {
    id: "2",
    customer: "Elira Dervishi",
    vehicle: "Toyota Yaris",
    plate: "AB456CD",
    title: "Kontroll frenash",
    preferredDate: "22.06.2026",
    status: "approved",
  },
];

export default function AppointmentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Kërkesat për servis
        </h1>

        <p className="mt-2 text-slate-500">
          Aprovo ose refuzo kërkesat e klientëve për rezervim servisi.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Klienti</th>
              <th className="px-6 py-4 text-left">Automjeti</th>
              <th className="px-6 py-4 text-left">Targa</th>
              <th className="px-6 py-4 text-left">Shërbimi</th>
              <th className="px-6 py-4 text-left">Data</th>
              <th className="px-6 py-4 text-left">Statusi</th>
              <th className="px-6 py-4 text-right">Veprime</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => {
              const isPending = appointment.status === "pending";

              return (
                <tr key={appointment.id} className="border-b border-slate-100">
                  <td className="px-6 py-5 font-medium">
                    {appointment.customer}
                  </td>

                  <td className="px-6 py-5">{appointment.vehicle}</td>

                  <td className="px-6 py-5">{appointment.plate}</td>

                  <td className="px-6 py-5">{appointment.title}</td>

                  <td className="px-6 py-5">{appointment.preferredDate}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        appointment.status === "approved"
                          ? "bg-emerald-100 text-emerald-700"
                          : appointment.status === "rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right">
                    {isPending ? (
                      <div className="flex justify-end gap-2">
                        <form
                          action={approveAppointmentAction.bind(
                            null,
                            appointment.id
                          )}
                        >
                          <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white">
                            Aprovo
                          </button>
                        </form>

                        <form
                          action={rejectAppointmentAction.bind(
                            null,
                            appointment.id
                          )}
                        >
                          <button className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white">
                            Refuzo
                          </button>
                        </form>
                      </div>
                    ) : (
                      <span className="text-sm text-slate-400">
                        Procesuar
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}