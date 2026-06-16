type SectionCardProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-xl font-bold text-slate-950">{title}</h2>
          )}

          {description && (
            <p className="mt-2 text-sm text-slate-500">{description}</p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}