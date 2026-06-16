const reminders = [
  {
    id: "1",
    vehicle: "Volkswagen Jetta",
    plate: "AA123BB",
    type: "Ndërrim vaji + filtra",
    dueDate: "12.12.2026",
    status: "Në pritje",
  },
  {
    id: "2",
    vehicle: "BMW X5",
    plate: "AB456CD",
    type: "Kontroll frenash",
    dueDate: "04.11.2026",
    status: "Në pritje",
  },
];

export default function ClientRemindersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">Rikujtimet</h1>

        <p className="mt-2 text-slate-500">
          Shiko shërbimet e ardhshme për automjetet e tua.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-xl font-bold text-slate-950">
              {reminder.type}
            </h2>

            <p className="mt-2 text-slate-500">
              {reminder.vehicle} • {reminder.plate}
            </p>

            <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 p-4">
              <span className="text-sm text-slate-500">Afati</span>
              <span className="font-semibold text-amber-700">
                {reminder.dueDate}
              </span>
            </div>

            <div className="mt-4">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                {reminder.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}