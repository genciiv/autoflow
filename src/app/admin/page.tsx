import { StatsCards } from "@/components/admin/stats-cards";
import { RevenueOverview } from "@/components/admin/revenue-overview";
import { RecentApplications } from "@/components/admin/recent-applications";
import { LatestBusinesses } from "@/components/admin/latest-businesses";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-950">
          Dashboard
        </h2>

        <p className="mt-2 text-slate-500">
          Përmbledhje e platformës AutoFlow.
        </p>
      </div>

      <StatsCards />

      <div className="grid gap-8 xl:grid-cols-2">
        <RevenueOverview />
        <RecentApplications />
      </div>

      <LatestBusinesses />
    </div>
  );
}