import { z } from "zod";

export const businessApplicationSchema = z.object({
  businessName: z.string().min(2, "Emri i servisit duhet të ketë të paktën 2 karaktere."),
  ownerName: z.string().min(2, "Emri i pronarit duhet të ketë të paktën 2 karaktere."),
  phone: z.string().min(6, "Vendos një numër telefoni të vlefshëm."),
  email: z.string().email("Vendos një email të vlefshëm."),
  city: z.string().optional(),
  businessType: z.string().optional(),
  message: z.string().optional(),
});