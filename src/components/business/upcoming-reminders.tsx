const reminders = [
  {
    customer: "Arben Hoxha",
    vehicle: "BMW X5",
    type: "Ndërrim vaji",
    due: "Sot",
  },
  {
    customer: "Elira Dervishi",
    vehicle: "Toyota Yaris",
    type: "Kontroll teknik",
    due: "Nesër",
  },
  {
    customer: "Besnik Meta",
    vehicle: "Ford Focus",
    type: "Goma sezonale",
    due: "3 ditë",
  },
];

export function UpcomingReminders() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">
        Rikujtime të afërta
      </h3>

      <div className="mt-6 space-y-4">
        {reminders.map((reminder) => (
          <div
            key={`${reminder.customer}-${reminder.type}`}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
          >
            <div>
              <p className="font-medium text-slate-950">
                {reminder.customer}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {reminder.vehicle} • {reminder.type}
              </p>
            </div>

            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              {reminder.due}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}