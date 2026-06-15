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
      <aside className="fixed left-0 top-0 h-screen w-72 border-r border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-6">
          <p className="text-xl font-bold text-slate-950">AutoFlow</p>
          <p className="mt-1 text-sm text-slate-500">Platform Admin</p>
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
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 px-8 py-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Paneli kryesor</p>
              <h1 className="text-xl font-semibold text-slate-950">
                Platform Administration
              </h1>
            </div>

            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              Admin
            </div>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}