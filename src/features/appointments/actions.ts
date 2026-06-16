"use server";

import { revalidatePath } from "next/cache";
import {
  approveAppointment,
  rejectAppointment,
} from "@/services/appointment.service";

export async function approveAppointmentAction(appointmentId: string) {
  await approveAppointment(appointmentId);

  revalidatePath("/dashboard/appointments");
}

export async function rejectAppointmentAction(appointmentId: string) {
  await rejectAppointment(appointmentId);

  revalidatePath("/dashboard/appointments");
}