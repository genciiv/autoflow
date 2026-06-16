import Link from "next/link";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "#faq" },
];

const platformLinks = [
  { label: "Login", href: "/auth/login" },
  { label: "Apliko për biznes", href: "/apply" },
  { label: "Client Portal", href: "/client/login" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                AF
              </div>

              <div>
                <p className="text-lg font-black text-slate-950">AutoFlow</p>
                <p className="text-sm text-slate-500">
                  Workshop Management SaaS
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              AutoFlow ndihmon serviset të menaxhojnë klientët, automjetet,
              serviset, faturat, pagesat, rikujtimet dhe raportet nga një
              platformë moderne.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                Multi-tenant
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                30 ditë falas
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                Për Shqipëri
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-950">Produkti</h3>

            <div className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-600 transition hover:text-slate-950"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-950">Platforma</h3>

            <div className="mt-5 space-y-3">
              {platformLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-600 transition hover:text-slate-950"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} AutoFlow. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="#" className="hover:text-slate-950">
              Privacy
            </Link>
            <Link href="#" className="hover:text-slate-950">
              Terms
            </Link>
            <a
  href="mailto:vaqogenci@gmail.com?subject=Kontakt%20AutoFlow"
  className="hover:text-slate-950"
>
  Kontakt
</a>
          </div>
        </div>
      </div>
    </footer>
  );
}