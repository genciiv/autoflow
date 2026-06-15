import { requireBusinessUser } from "@/lib/require-auth";

export default async function DashboardPage() {
  await requireBusinessUser();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Business Dashboard</h1>
      <p className="text-slate-600">Dashboard i servisit.</p>
    </main>
  );
}