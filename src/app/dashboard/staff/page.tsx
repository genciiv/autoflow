const staffUsers = [
  {
    name: "Arben Hoxha",
    email: "arben@autoservice.al",
    role: "mechanic",
    status: "active",
  },
  {
    name: "Elira Dervishi",
    email: "elira@autoservice.al",
    role: "receptionist",
    status: "active",
  },
  {
    name: "Besnik Meta",
    email: "besnik@autoservice.al",
    role: "manager",
    status: "active",
  },
];

export default function StaffPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">
            Stafi
          </h1>

          <p className="mt-2 text-slate-500">
            Menaxho përdoruesit që kanë akses në dashboard-in e servisit.
          </p>
        </div>

        <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
          Shto staf
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Emri</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Roli</th>
              <th className="px-6 py-4 text-left">Statusi</th>
              <th className="px-6 py-4 text-right">Veprime</th>
            </tr>
          </thead>

          <tbody>
            {staffUsers.map((user) => (
              <tr key={user.email} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium text-slate-950">
                  {user.name}
                </td>

                <td className="px-6 py-5 text-slate-600">
                  {user.email}
                </td>

                <td className="px-6 py-5 capitalize">
                  {user.role}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-right">
                  <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm">
                    Ndrysho
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}