type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

export function EmptyState({
  title,
  description,
  actionLabel,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
      <div className="mx-auto mb-6 h-14 w-14 rounded-2xl bg-slate-100" />

      <h3 className="text-xl font-bold text-slate-950">{title}</h3>

      <p className="mx-auto mt-3 max-w-md text-slate-500">
        {description}
      </p>

      {actionLabel && (
        <button className="mt-6 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
          {actionLabel}
        </button>
      )}
    </div>
  );
}