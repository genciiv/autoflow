const businesses = [
  "Auto Service Fier",
  "Auto Plus",
  "Servis Elite",
  "Auto Center",
];

export function LatestBusinesses() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-lg font-semibold">
        Bizneset e fundit
      </h3>

      <div className="mt-6 space-y-4">
        {businesses.map((business) => (
          <div
            key={business}
            className="rounded-2xl border border-slate-200 p-4"
          >
            {business}
          </div>
        ))}
      </div>
    </div>
  );
}