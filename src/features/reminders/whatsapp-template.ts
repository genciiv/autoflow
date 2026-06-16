export function generateWhatsAppReminderMessage({
  customerName,
  vehicle,
  plateNumber,
  serviceType,
}: {
  customerName: string;
  vehicle: string;
  plateNumber: string;
  serviceType: string;
}) {
  return `Përshëndetje ${customerName},

Ju kujtojmë se automjeti juaj ${vehicle} (${plateNumber}) është afër afatit për:

${serviceType}

Ju mirëpresim në servis për kontrollin e radhës.

Faleminderit,
AutoFlow`;
}