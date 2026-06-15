export default function CreateServicePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Krijo servis të ri
        </h1>

        <p className="mt-2 text-slate-500">
          Regjistro punimet, pjesët dhe koston për automjetin.
        </p>
      </div>

      <form className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Informacioni bazë
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Targa
              </label>
              <input
                placeholder="AA123BB"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Kilometra
              </label>
              <input
                placeholder="187000"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Mekaniku
              </label>
              <input
                placeholder="Emri i mekanikut"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Statusi
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3">
                <option>Në pritje</option>
                <option>Në punë</option>
                <option>Përfunduar</option>
                <option>Faturuar</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Punimet e kryera
          </h2>

          <textarea
            rows={6}
            placeholder="P.sh. Ndërrim vaji, filtra, kontroll frenash..."
            className="mt-6 w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Kosto
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Kosto pune
              </label>
              <input
                placeholder="50"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Kosto pjesësh
              </label>
              <input
                placeholder="45"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Totali
              </label>
              <input
                placeholder="95"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold"
          >
            Anulo
          </button>

          <button
            type="submit"
            className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
          >
            Ruaj servisin
          </button>
        </div>
      </form>
    </div>
  );
}