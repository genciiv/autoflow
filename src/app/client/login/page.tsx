export default function ClientLoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">
            Hyr si klient
          </h1>

          <p className="mt-2 text-slate-500">
            Shiko historikun e makinës, faturat dhe rikujtimet.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="email@shembull.com"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Fjalëkalimi
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
          >
            Hyr në portal
          </button>
        </form>
      </div>
    </main>
  );
}