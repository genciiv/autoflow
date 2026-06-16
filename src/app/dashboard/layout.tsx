import Link from "next/link";
import { requireBusinessUser } from "@/lib/require-auth";
import { requireActiveSubscription } from "@/lib/subscription-guard";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Stafi", href: "/dashboard/staff" },
  { label: "Klientët", href: "/dashboard/customers" },
  { label: "Automjetet", href: "/dashboard/vehicles" },
  { label: "Serviset", href: "/dashboard/services" },
  { label: "Faturat", href: "/dashboard/invoices" },
  { label: "Rezervimet", href: "/dashboard/appointments" },
  { label: "Inventari", href: "/dashboard/inventory" },
  { label: "Raportet", href: "/dashboard/reports" },
  { label: "Pagesat", href: "/dashboard/payments" },
  { label: "Rikujtimet", href: "/dashboard/reminders" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireBusinessUser();
  await requireActiveSubscription();

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="hidden h-screen w-72 overflow-y-auto border-r border-slate-200 bg-white/95 backdrop-blur lg:fixed lg:left-0 lg:top-0 lg:block">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-950">AutoFlow</h2>
          <p className="mt-1 text-sm text-slate-500">Business Dashboard</p>
        </div>

        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="lg:ml-72">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm text-slate-500">Servisi</p>
              <h1 className="text-lg font-semibold text-slate-950 sm:text-xl">
                AutoFlow Business
              </h1>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm lg:block">
              Owner
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-10">{children}</main>
      </div>
    </div>
  );
}