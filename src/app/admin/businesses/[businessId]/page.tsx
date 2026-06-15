import { notFound } from "next/navigation";
import { db } from "@/lib/db";

export default async function BusinessProfilePage({
  params,
}: {
  params: Promise<{ businessId: string }>;
}) {
  const { businessId } = await params;

  const business = await db.business.findUnique({
    where: {
      id: businessId,
    },
    include: {
      users: true,
      customers: true,
      vehicles: true,
    },
  });

  if (!business) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm text-slate-500">Profili i biznesit</p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          {business.name}
        </h1>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div>
            <p className="text-sm text-slate-500">Qyteti</p>
            <p className="font-medium">{business.city || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Email</p>
            <p className="font-medium">{business.email || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Telefoni</p>
            <p className="font-medium">{business.phone || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Plani</p>
            <p className="font-medium capitalize">{business.plan}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Përdorues</p>
          <p className="mt-3 text-3xl font-bold">{business.users.length}</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Klientë</p>
          <p className="mt-3 text-3xl font-bold">{business.customers.length}</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Automjete</p>
          <p className="mt-3 text-3xl font-bold">{business.vehicles.length}</p>
        </div>
      </div>
    </div>
  );
}