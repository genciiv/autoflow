const logs = [
  {
    id: "1",
    action: "business.approved",
    entity: "BusinessApplication",
    message: "U aprovua aplikimi i Auto Service Fier",
    createdAt: "16.06.2026",
  },
  {
    id: "2",
    action: "invoice.created",
    entity: "Invoice",
    message: "U krijua fatura INV-0001",
    createdAt: "16.06.2026",
  },
];

export default function AdminAuditLogsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-950">Audit Logs</h1>
        <p className="mt-2 text-slate-500">
          Shiko aktivitetet kryesore që ndodhin në platformë.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left">Action</th>
              <th className="px-6 py-4 text-left">Entity</th>
              <th className="px-6 py-4 text-left">Message</th>
              <th className="px-6 py-4 text-left">Data</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b border-slate-100">
                <td className="px-6 py-5 font-medium">{log.action}</td>
                <td className="px-6 py-5">{log.entity}</td>
                <td className="px-6 py-5">{log.message}</td>
                <td className="px-6 py-5">{log.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}