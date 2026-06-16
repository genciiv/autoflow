export default function InvoiceBrandingSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Branding i faturave
        </h1>

        <p className="mt-2 text-slate-500">
          Personalizo pamjen e faturave që u dërgohen klientëve.
        </p>
      </div>

      <form className="grid gap-8 xl:grid-cols-2">
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Të dhënat e faturës
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Emri në faturë
                </label>
                <input
                  placeholder="AutoService Pro"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  NIPT
                </label>
                <input
                  placeholder="L12345678A"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Adresa
                </label>
                <input
                  placeholder="Fier, Shqipëri"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Telefoni
                </label>
                <input
                  placeholder="+355 69 ..."
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Logo dhe ngjyra
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Logo e servisit
                </label>
                <input
                  type="file"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Ngjyra kryesore
                </label>
                <input
                  type="color"
                  defaultValue="#0f172a"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-2"
                />
              </div>
            </div>
          </div>

          <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
            Ruaj branding
          </button>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Preview faturë
          </h2>

          <div className="mt-6 rounded-2xl border border-slate-200 p-8">
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  AutoService Pro
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Fier, Shqipëri
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-500">Fatura</p>
                <p className="font-bold text-slate-950">INV-0001</p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="font-medium text-slate-950">
                Klienti: Arben Hoxha
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Volkswagen Jetta • AA123BB
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex justify-between">
                <span>Ndërrim vaji + filtra</span>
                <span>€95</span>
              </div>

              <div className="flex justify-between border-t border-slate-200 pt-3 font-bold">
                <span>Totali</span>
                <span>€95</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}