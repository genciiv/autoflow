type PageHeaderProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">{title}</h1>

        {description && (
          <p className="mt-2 text-slate-500">{description}</p>
        )}
      </div>

      {action}
    </div>
  );
}