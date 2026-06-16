const reminders = [
  {
    id: "1",
    customer: "Arben Hoxha",
    vehicle: "Volkswagen Jetta",
    plate: "AA123BB",
    type: "Ndërrim vaji",
    dueDate: "20.06.2026",
    status: "pending",
  },
  {
    id: "2",
    customer: "Elira Dervishi",
    vehicle: "Toyota Yaris",
    plate: "AB456CD",
    type: "Kontroll teknik",
    dueDate: "25.06.2026",
    status: "pending",
  },
];

export default function RemindersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Rikujtimet</h1>
          <p className="mt-2 text-slate-500">
            Ndiq rikujtimet për servis periodik, vaj, goma dhe kontroll teknik.
          </p>
        </div>

        <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
          Shto rikujtim
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Klienti</th>
              <th className="px-6 py-4 text-left">Automjeti</th>
              <th className="px-6 py-4 text-left">Targa</th>
              <th className="px-6 py-4 text-left">Lloji</th>
              <th className="px-6 py-4 text-left">Afati</th>
              <th className="px-6 py-4 text-left">Statusi</th>
            </tr>
          </thead>

          <tbody>
            {reminders.map((reminder) => (
              <tr key={reminder.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium">{reminder.customer}</td>
                <td className="px-6 py-5">{reminder.vehicle}</td>
                <td className="px-6 py-5">{reminder.plate}</td>
                <td className="px-6 py-5">{reminder.type}</td>
                <td className="px-6 py-5">{reminder.dueDate}</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    {reminder.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}