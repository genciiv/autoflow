import { InvoicePdfButton } from "@/features/invoices/pdf/invoice-pdf-button";
import Link from "next/link";

const invoice = {
  number: "INV-0001",
  date: "12.06.2026",
  status: "paid",
  customer: "Arben Hoxha",
  vehicle: "Volkswagen Jetta",
  plate: "AA123BB",
  items: [
    { name: "Punë servisi", qty: 1, price: "€50", total: "€50" },
    { name: "Vaj motori 5W30", qty: 5, price: "€9", total: "€45" },
  ],
  subtotal: "€95",
  tax: "€0",
  total: "€95",
};

export default function InvoiceDetailsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-end gap-3">
        <Link
  href="/dashboard/invoices/1/print"
  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold"
>
  Printo
</Link>
        <InvoicePdfButton />
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex justify-between gap-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-950">AutoFlow</h1>
            <p className="mt-2 text-slate-500">Faturë servisi</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-500">Fatura</p>
            <p className="text-xl font-bold text-slate-950">{invoice.number}</p>
            <p className="mt-2 text-sm text-slate-500">{invoice.date}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Klienti</p>
            <p className="mt-2 font-semibold">{invoice.customer}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">Automjeti</p>
            <p className="mt-2 font-semibold">
              {invoice.vehicle} • {invoice.plate}
            </p>
          </div>
        </div>

        <table className="mt-10 w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-4 text-left">Përshkrimi</th>
              <th className="py-4 text-right">Sasia</th>
              <th className="py-4 text-right">Çmimi</th>
              <th className="py-4 text-right">Totali</th>
            </tr>
          </thead>

          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.name} className="border-b border-slate-100">
                <td className="py-5">{item.name}</td>
                <td className="py-5 text-right">{item.qty}</td>
                <td className="py-5 text-right">{item.price}</td>
                <td className="py-5 text-right font-semibold">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 flex justify-end">
          <div className="w-full max-w-sm space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal</span>
              <span>{invoice.subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">TVSH</span>
              <span>{invoice.tax}</span>
            </div>

            <div className="border-t border-slate-200 pt-3 flex justify-between text-xl font-bold">
              <span>Totali</span>
              <span>{invoice.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}