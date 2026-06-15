export default function CustomerProfilePage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm text-slate-500">Profili i klientit</p>

        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Arben Hoxha
        </h1>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-sm text-slate-500">Telefon</p>
            <p className="font-medium">+355 69 111 1111</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Email</p>
            <p className="font-medium">arben@email.com</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Automjete</p>
            <p className="font-medium">2</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">
          Automjetet e klientit
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-slate-950">Volkswagen Jetta</p>
            <p className="mt-1 text-sm text-slate-500">AA123BB</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-slate-950">BMW X5</p>
            <p className="mt-1 text-sm text-slate-500">AB456CD</p>
          </div>
        </div>
      </div>
    </div>
  );
}