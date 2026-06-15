import { ApplicationsTable } from "@/components/admin/applications-table";
import { db } from "@/lib/db";

export default async function ApplicationsPage() {
  const applications = await db.businessApplication.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Aplikimet e Bizneseve
        </h1>

        <p className="mt-2 text-slate-500">
          Menaxho aplikimet e serviseve që kërkojnë akses në platformë.
        </p>
      </div>

      <ApplicationsTable applications={applications} />
    </div>
  );
}