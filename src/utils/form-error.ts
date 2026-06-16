import { ZodError } from "zod";

export function formatZodError(error: ZodError) {
  return error.issues[0]?.message || "Të dhënat nuk janë të vlefshme.";
}