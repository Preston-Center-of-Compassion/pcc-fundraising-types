import { z } from "zod";

import { StripeAddress } from "./utils";

export const Contact = z.object({
  firstName: z.string().min(1).max(30).trim(),
  lastName: z.string().min(1).max(30).trim(),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .regex(/^\+[1-9]\d{1,14}$/) // E.164 format: https://www.twilio.com/docs/glossary/what-e164
    .trim(),
  address: StripeAddress,
});

export type Contact = z.infer<typeof Contact>;
