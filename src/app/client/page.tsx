export default function ClientPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-950">
          Dashboard i Klientit
        </h2>

        <p className="mt-2 text-slate-500">
          Shiko makinat, faturat dhe rikujtimet e tua.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Makinat e mia</p>
          <p className="mt-3 text-3xl font-bold text-slate-950">2</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Servise të kryera</p>
          <p className="mt-3 text-3xl font-bold text-slate-950">8</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Fatura të papaguara</p>
          <p className="mt-3 text-3xl font-bold text-red-600">1</p>
        </div>
      </div>
    </div>
  );
}