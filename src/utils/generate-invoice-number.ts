export function generateInvoiceNumber() {
  const year = new Date().getFullYear();
  const timestamp = Date.now().toString().slice(-6);

  return `INV-${year}-${timestamp}`;
}