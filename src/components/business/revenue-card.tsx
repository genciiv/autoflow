export function RevenueCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">
            Të ardhurat mujore
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Pagesat dhe faturat e regjistruara këtë muaj.
          </p>
        </div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          +14%
        </span>
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold text-slate-950">€24,850</p>
        <p className="mt-2 text-sm text-slate-500">
          Krahasuar me €21,790 muajin e kaluar
        </p>
      </div>

      <div className="mt-8 flex h-44 items-end gap-3">
        {[45, 55, 38, 70, 64, 82, 90].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-xl bg-slate-900"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}