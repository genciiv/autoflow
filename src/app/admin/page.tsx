import { requirePlatformAdmin } from "@/lib/require-auth";

export default async function AdminPage() {
  await requirePlatformAdmin();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Platform Admin</h1>
      <p className="text-slate-600">Dashboard kryesor i platformës.</p>
    </main>
  );
}