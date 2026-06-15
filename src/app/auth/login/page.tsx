export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Hyr në AutoFlow</h1>
        <p className="mt-2 text-sm text-slate-600">
          Vendos email-in dhe fjalëkalimin për të hyrë.
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />

          <input
            type="password"
            placeholder="Fjalëkalimi"
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-2 text-white"
          >
            Hyr
          </button>
        </form>
      </div>
    </main>
  );
}