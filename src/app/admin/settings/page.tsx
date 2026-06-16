export default function PlatformSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Platform Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Menaxho konfigurimet kryesore të platformës AutoFlow.
        </p>
      </div>

      <form className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Informacioni i platformës
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Emri i platformës
              </label>
              <input
                placeholder="AutoFlow"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Email support
              </label>
              <input
                placeholder="support@autoflow.al"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Telefoni support
              </label>
              <input
                placeholder="+355 69 ..."
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Monedha
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3">
                <option>EUR</option>
                <option>ALL</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Prova falas
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Ditë prove falas
              </label>
              <input
                type="number"
                placeholder="30"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Statusi default i biznesit
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3">
                <option>pending</option>
                <option>active</option>
                <option>suspended</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Njoftimet
          </h2>

          <div className="mt-6 space-y-4">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              <span className="text-sm text-slate-700">
                Dërgo email kur aplikon një biznes i ri
              </span>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              <span className="text-sm text-slate-700">
                Dërgo njoftim kur abonimi është afër skadencës
              </span>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              <span className="text-sm text-slate-700">
                Aktivizo njoftimet WhatsApp
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
            Ruaj konfigurimet
          </button>
        </div>
      </form>
    </div>
  );
}