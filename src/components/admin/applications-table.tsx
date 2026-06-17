import {
  approveBusinessApplication,
  rejectBusinessApplication,
} from "@/features/platform-admin/applications/actions";
import { db } from "@/lib/db";

export async function ApplicationsTable() {
  const applications = await db.businessApplication.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="px-6 py-4 text-left">Biznesi</th>
            <th className="px-6 py-4 text-left">Pronari</th>
            <th className="px-6 py-4 text-left">Qyteti</th>
            <th className="px-6 py-4 text-left">Telefoni</th>
            <th className="px-6 py-4 text-left">Statusi</th>
            <th className="px-6 py-4 text-right">Veprime</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application) => (
            <tr key={application.id} className="border-b border-slate-100">
              <td className="px-6 py-5 font-medium">
                {application.businessName}
              </td>

              <td className="px-6 py-5">{application.ownerName}</td>
              <td className="px-6 py-5">{application.city || "-"}</td>
              <td className="px-6 py-5">{application.phone}</td>

              <td className="px-6 py-5">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                  {application.status}
                </span>
              </td>

              <td className="px-6 py-5 text-right">
                {application.status === "pending" ? (
                  <div className="flex justify-end gap-3">
                    <form action={approveBusinessApplication} className="flex gap-2">
                      <input
                        type="hidden"
                        name="applicationId"
                        value={application.id}
                      />

                      <input
                        name="ownerPassword"
                        type="text"
                        required
                        minLength={8}
                        placeholder="Fjalëkalimi"
                        className="w-40 rounded-xl border border-slate-300 px-3 py-2 text-sm"
                      />

                      <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white">
                        Aprovo
                      </button>
                    </form>

                    <form
                      action={rejectBusinessApplication.bind(
                        null,
                        application.id
                      )}
                    >
                      <button className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white">
                        Refuzo
                      </button>
                    </form>
                  </div>
                ) : (
                  <span className="text-sm text-slate-400">Procesuar</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}