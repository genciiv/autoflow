export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-950">
          Dashboard
        </h2>

        <p className="mt-2 text-slate-500">
          Përmbledhje e servisit.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">
            Klientë
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            542
          </h3>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">
            Automjete
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            812
          </h3>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">
            Fatura
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            1,284
          </h3>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">
            Të ardhura
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            €24,850
          </h3>
        </div>
      </div>
    </div>
  );
}