const applications = [
  {
    business: "Auto Service Fier",
    city: "Fier",
    status: "Pending",
  },
  {
    business: "Auto Plus",
    city: "Tiranë",
    status: "Pending",
  },
  {
    business: "Servis Alba",
    city: "Durrës",
    status: "Pending",
  },
];

export function RecentApplications() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-lg font-semibold">
        Aplikimet e fundit
      </h3>

      <div className="mt-6 space-y-4">
        {applications.map((app) => (
          <div
            key={app.business}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
          >
            <div>
              <p className="font-medium">
                {app.business}
              </p>

              <p className="text-sm text-slate-500">
                {app.city}
              </p>
            </div>

            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              {app.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}