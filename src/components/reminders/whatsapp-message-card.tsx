"use client";

import { generateWhatsAppReminderMessage } from "@/features/reminders/whatsapp-template";

export function WhatsAppMessageCard() {
  const message = generateWhatsAppReminderMessage({
    customerName: "Arben Hoxha",
    vehicle: "Volkswagen Jetta",
    plateNumber: "AA123BB",
    serviceType: "Ndërrim vaji + filtra",
  });

  const copyMessage = async () => {
    await navigator.clipboard.writeText(message);
    alert("Mesazhi u kopjua.");
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">
        WhatsApp Reminder
      </h2>

      <textarea
        readOnly
        value={message}
        rows={10}
        className="mt-4 w-full rounded-2xl border border-slate-300 p-4"
      />

      <button
        onClick={copyMessage}
        className="mt-4 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
      >
        Kopjo mesazhin
      </button>
    </div>
  );
}