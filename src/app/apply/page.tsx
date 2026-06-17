import { createBusinessApplicationAction } from "@/features/business-applications/actions";

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{
    success?: string;
    error?: string;
  }>;
}) {
  const params = await searchParams;

  const success = params.success === "true";
  const error = params.error;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-950">
            Apliko për AutoFlow
          </h1>

          <p className="mt-4 text-slate-600">
            Plotëso formularin dhe ekipi ynë do ta shqyrtojë aplikimin.
          </p>
        </div>

        {success && (
          <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-700">
            Aplikimi u dërgua me sukses. Do të kontaktoheni shumë shpejt.
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
            Plotëso fushat e detyrueshme.
          </div>
        )}

        <form
          action={createBusinessApplicationAction}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Emri i servisit
              </label>
              <input
                name="businessName"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Auto Service Pro"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Emri i pronarit
              </label>
              <input
                name="ownerName"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Emër Mbiemër"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Telefoni
              </label>
              <input
                name="phone"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="+355 69 ..."
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="email@servisi.al"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Qyteti
              </label>
              <input
                name="city"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Fier"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Lloji i biznesit
              </label>
              <input
                name="businessType"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Servis automjetesh"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Mesazh
              </label>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Shkruaj disa detaje..."
              />
            </div>
          </div>

          <button className="mt-8 w-full rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white">
            Dërgo aplikimin
          </button>
        </form>
      </div>
    </main>
  );
}