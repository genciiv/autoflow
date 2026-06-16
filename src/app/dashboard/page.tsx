import { BusinessStats } from "@/components/business/business-stats";
import { RevenueCard } from "@/components/business/revenue-card";
import { RecentServices } from "@/components/business/recent-services";
import { UpcomingReminders } from "@/components/business/upcoming-reminders";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Overview
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Dashboard i Servisit
        </h2>

        <p className="mt-2 text-slate-500">
          Përmbledhje e klientëve, automjeteve, serviseve dhe pagesave.
        </p>
      </div>

      <BusinessStats />

      <div className="grid gap-8 xl:grid-cols-2">
        <RevenueCard />
        <UpcomingReminders />
      </div>

      <RecentServices />
    </div>
  );
}