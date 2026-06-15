import Link from "next/link";
import { db } from "@/lib/db";

export default async function BusinessesPage() {
  const businesses = await db.business.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">Bizneset</h1>
        <p className="mt-2 text-slate-500">
          Lista e serviseve të regjistruara në AutoFlow.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Emri</th>
              <th className="px-6 py-4 text-left">Qyteti</th>
              <th className="px-6 py-4 text-left">Plani</th>
              <th className="px-6 py-4 text-left">Statusi</th>
              <th className="px-6 py-4 text-right">Veprime</th>
            </tr>
          </thead>

          <tbody>
            {businesses.map((business) => (
              <tr key={business.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium">{business.name}</td>
                <td className="px-6 py-5">{business.city || "-"}</td>
                <td className="px-6 py-5 capitalize">{business.plan}</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    {business.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <Link
                    href={`/admin/businesses/${business.id}`}
                    className="rounded-xl border border-slate-300 px-4 py-2 text-sm"
                  >
                    Shiko profilin
                  </Link>
                </td>
              </tr>
            ))}

            {businesses.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                  Nuk ka biznese ende.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}