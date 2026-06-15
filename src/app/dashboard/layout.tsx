import Link from "next/link";
import { requireBusinessUser } from "@/lib/require-auth";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Klientët",
    href: "/dashboard/customers",
  },
  {
    label: "Automjetet",
    href: "/dashboard/vehicles",
  },
  {
    label: "Serviset",
    href: "/dashboard/services",
  },
  {
    label: "Faturat",
    href: "/dashboard/invoices",
  },
  {
    label: "Inventari",
    href: "/dashboard/inventory",
  },
  {
    label: "Raportet",
    href: "/dashboard/reports",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
  },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireBusinessUser();

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 h-screen w-72 border-r border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-950">
            AutoFlow
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Business Dashboard
          </p>
        </div>

        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="ml-72">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Servisi
              </p>

              <h1 className="text-xl font-semibold text-slate-950">
                AutoFlow Business
              </h1>
            </div>

            <div className="rounded-full border border-slate-200 px-4 py-2 text-sm">
              Owner
            </div>
          </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}