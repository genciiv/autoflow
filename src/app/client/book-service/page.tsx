export default function ClientBookServicePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">
          Rezervo servis
        </h1>

        <p className="mt-2 text-slate-500">
          Dërgo kërkesë për kontroll ose servis të automjetit.
        </p>
      </div>

      <form className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Detajet e kërkesës
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Automjeti
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3">
                <option>Volkswagen Jetta - AA123BB</option>
                <option>BMW X5 - AB456CD</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Data e preferuar
              </label>
              <input
                type="date"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Lloji i shërbimit
              </label>
              <input
                placeholder="P.sh. Ndërrim vaji, kontroll frenash, diagnostikim..."
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Përshkrimi
              </label>
              <textarea
                rows={5}
                placeholder="Përshkruaj problemin ose shërbimin që kërkon..."
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
            Dërgo kërkesën
          </button>
        </div>
      </form>
    </div>
  );
}