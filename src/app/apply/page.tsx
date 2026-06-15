export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Aplikim biznesi
          </span>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Apliko për të përdorur AutoFlow
          </h1>

          <p className="mt-4 text-slate-600">
            Plotëso të dhënat e servisit. Pas verifikimit, do të aktivizojmë
            llogarinë tënde.
          </p>
        </div>

        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Emri i servisit
              </label>
              <input
                type="text"
                placeholder="AutoService Pro"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Emri i pronarit
              </label>
              <input
                type="text"
                placeholder="Genci Vaqo"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Telefoni
              </label>
              <input
                type="tel"
                placeholder="+355 69 ..."
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="info@servisi.al"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Qyteti
              </label>
              <input
                type="text"
                placeholder="Fier"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Lloji i biznesit
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900">
                <option>Servis mekanik</option>
                <option>Auto-elektrik</option>
                <option>Vulkanizim</option>
                <option>Lavazh</option>
                <option>Servis i përgjithshëm</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-slate-700">
              Mesazh shtesë
            </label>
            <textarea
              rows={5}
              placeholder="Na trego pak për servisin tënd..."
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Dërgo aplikimin
          </button>

          <p className="mt-4 text-center text-sm text-slate-500">
            Do të kontaktohesh pas verifikimit të të dhënave.
          </p>
        </form>
      </div>
    </main>
  );
}