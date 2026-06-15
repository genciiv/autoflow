export function RevenueOverview() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">
        Monthly Revenue
      </h3>

      <p className="mt-2 text-slate-500">
        Përmbledhje e abonimeve mujore.
      </p>

      <div className="mt-10 flex h-56 items-end gap-4">
        {[30, 45, 40, 55, 65, 80, 90].map((value, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-xl bg-slate-900"
            style={{
              height: `${value}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}