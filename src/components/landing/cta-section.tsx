export function CTASection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Gati ta kthesh servisin në një biznes të organizuar?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Fillo me klientët, automjetet, historikun e shërbimeve dhe faturat.
          Më pas shto inventarin, rikujtimet dhe portalin e klientit.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/apply"
            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950"
          >
            Apliko si servis
          </a>

          <a
            href="/pricing"
            className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white"
          >
            Shiko çmimet
          </a>
        </div>
      </div>
    </section>
  );
}