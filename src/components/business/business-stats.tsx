const stats = [
  { label: "Klientë aktivë", value: "542", change: "+12 këtë muaj" },
  { label: "Automjete", value: "812", change: "+24 të reja" },
  { label: "Servise këtë muaj", value: "186", change: "+18%" },
  { label: "Fatura të papaguara", value: "23", change: "duhen ndjekur" },
];

export function BusinessStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">{stat.label}</p>

          <h3 className="mt-3 text-3xl font-bold text-slate-950">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-500">{stat.change}</p>
        </div>
      ))}
    </div>
  );
}