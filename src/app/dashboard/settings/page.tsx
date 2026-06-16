export default function BusinessSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Menaxho të dhënat e servisit, faturimin dhe konfigurimet bazë.
        </p>
      </div>

      <form className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Informacioni i biznesit
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Emri i servisit
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
                Telefoni
              </label>
              <input
                placeholder="+355 69 ..."
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                placeholder="info@servisi.al"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Adresa
              </label>
              <input
                placeholder="Fier, Shqipëri"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Konfigurime faturimi
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Prefiksi i faturës
              </label>
              <input
                placeholder="INV"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                TVSH
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3">
                <option>0%</option>
                <option>20%</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
            Ruaj ndryshimet
          </button>
        </div>
      </form>
    </div>
  );
}