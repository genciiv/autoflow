import Link from "next/link";
import { requirePlatformAdmin } from "@/lib/require-auth";

const navItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Bizneset", href: "/admin/businesses" },
  { label: "Aplikimet", href: "/admin/applications" },
  { label: "Abonimet", href: "/admin/subscriptions" },
  { label: "Pagesat", href: "/admin/payments" },
  { label: "Planet", href: "/admin/plans" },
  { label: "Raportet", href: "/admin/reports" },
  { label: "Audit Logs", href: "/admin/audit-logs" },
  { label: "Settings", href: "/admin/settings" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requirePlatformAdmin();

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="hidden h-screen w-72 overflow-y-auto border-r border-slate-200 bg-white lg:fixed lg:left-0 lg:top-0 lg:block">
        <div className="border-b border-slate-200 p-6">
          <p className="text-xl font-bold text-slate-950">AutoFlow</p>
          <p className="mt-1 text-sm text-slate-500">Platform Admin</p>
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
              <p className="text-sm text-slate-500">Paneli kryesor</p>
              <h1 className="text-lg font-semibold text-slate-950 sm:text-xl">
                Platform Administration
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

            <div className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 lg:block">
              Admin
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-10">{children}</main>
      </div>
    </div>
  );
}