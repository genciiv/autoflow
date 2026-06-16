export default function SubscriptionExpiredPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-slate-950">
          Abonimi ka skaduar
        </h1>

        <p className="mt-4 text-slate-500">
          Për të vazhduar përdorimin e AutoFlow duhet të rinovoni abonimin.
        </p>

        <button className="mt-8 rounded-xl bg-slate-950 px-6 py-3 text-white">
          Rinovo abonimin
        </button>
      </div>
    </main>
  );
}