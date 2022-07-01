import { z } from "zod";

import { StripeAddress } from "./address";

export const Contact = z.object({
  firstName: z.string().min(1).max(30).trim(),
  lastName: z.string().min(1).max(30).trim(),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .trim()
    .transform((val) => {
      val = val.replace(/\D/g, "");
      if (!val.startsWith("1")) {
        val = "1" + val;
      }
      if (!val.startsWith("+")) {
        val = "+" + val;
      }
      return val;
    }),
  address: StripeAddress,
});

export type Contact = z.infer<typeof Contact>;
