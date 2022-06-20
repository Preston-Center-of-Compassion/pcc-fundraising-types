import { z } from "zod";
import { Address } from "@stripe/stripe-js";

export const StripeAddress: z.ZodType<Address> = z.object({
  city: z.string().nullable(),
  country: z.string().nullable(),
  line1: z.string().nullable(),
  line2: z.string().nullable(),
  postal_code: z.string().nullable(),
  state: z.string().nullable(),
});
