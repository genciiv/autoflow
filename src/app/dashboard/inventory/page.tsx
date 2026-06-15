const parts = [
  {
    id: "1",
    name: "Vaj Motori 5W30",
    category: "Vajra",
    stock: 24,
    minStock: 5,
    buyPrice: "€7",
    sellPrice: "€9",
  },
  {
    id: "2",
    name: "Filtër Vaji",
    category: "Filtra",
    stock: 3,
    minStock: 10,
    buyPrice: "€5",
    sellPrice: "€8",
  },
  {
    id: "3",
    name: "Bateri 74Ah",
    category: "Bateri",
    stock: 8,
    minStock: 3,
    buyPrice: "€65",
    sellPrice: "€85",
  },
];

export default function InventoryPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-950">Inventari</h1>
          <p className="mt-2 text-slate-500">
            Menaxho pjesët, stokun, çmimet dhe furnizimet.
          </p>
        </div>

        <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
          Shto pjesë
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Pjesë totale</p>
          <p className="mt-3 text-3xl font-bold text-slate-950">148</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Stok i ulët</p>
          <p className="mt-3 text-3xl font-bold text-red-600">7</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Vlera e stokut</p>
          <p className="mt-3 text-3xl font-bold text-slate-950">€12,840</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <input
          type="text"
          placeholder="Kërko pjesë sipas emrit, kategorisë ose kodit..."
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Pjesa</th>
              <th className="px-6 py-4 text-left">Kategoria</th>
              <th className="px-6 py-4 text-left">Stoku</th>
              <th className="px-6 py-4 text-left">Min. stok</th>
              <th className="px-6 py-4 text-left">Blerje</th>
              <th className="px-6 py-4 text-left">Shitje</th>
              <th className="px-6 py-4 text-right">Statusi</th>
            </tr>
          </thead>

          <tbody>
            {parts.map((part) => {
              const isLowStock = part.stock <= part.minStock;

              return (
                <tr key={part.id} className="border-b border-slate-100">
                  <td className="px-6 py-5 font-medium text-slate-950">
                    {part.name}
                  </td>

                  <td className="px-6 py-5 text-slate-600">
                    {part.category}
                  </td>

                  <td className="px-6 py-5 font-semibold">{part.stock}</td>

                  <td className="px-6 py-5 text-slate-600">
                    {part.minStock}
                  </td>

                  <td className="px-6 py-5">{part.buyPrice}</td>

                  <td className="px-6 py-5">{part.sellPrice}</td>

                  <td className="px-6 py-5 text-right">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        isLowStock
                          ? "bg-red-100 text-red-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {isLowStock ? "Stok i ulët" : "Në rregull"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}