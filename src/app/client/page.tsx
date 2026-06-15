import { requireClient } from "@/lib/require-auth";

export default async function ClientPage() {
  await requireClient();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Client Dashboard</h1>
      <p className="text-slate-600">Historiku i makinave të klientit.</p>
    </main>
  );
}