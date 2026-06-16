"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { InvoiceDocument } from "./invoice-document";

export function InvoicePdfButton() {
  return (
    <PDFDownloadLink
      document={<InvoiceDocument />}
      fileName="invoice.pdf"
      className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
    >
      {({ loading }) => (loading ? "Duke përgatitur..." : "Shkarko PDF")}
    </PDFDownloadLink>
  );
}