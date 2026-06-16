import { db } from "@/lib/db";

export async function approveAppointment(appointmentId: string) {
  const appointment = await db.appointment.findUnique({
    where: {
      id: appointmentId,
    },
  });

  if (!appointment) {
    throw new Error("Kërkesa për servis nuk u gjet.");
  }

  if (appointment.status !== "pending") {
    throw new Error("Kjo kërkesë është procesuar më parë.");
  }

  return db.appointment.update({
    where: {
      id: appointmentId,
    },
    data: {
      status: "approved",
    },
  });
}

export async function rejectAppointment(appointmentId: string) {
  const appointment = await db.appointment.findUnique({
    where: {
      id: appointmentId,
    },
  });

  if (!appointment) {
    throw new Error("Kërkesa për servis nuk u gjet.");
  }

  if (appointment.status !== "pending") {
    throw new Error("Kjo kërkesë është procesuar më parë.");
  }

  return db.appointment.update({
    where: {
      id: appointmentId,
    },
    data: {
      status: "rejected",
    },
  });
}