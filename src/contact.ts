import { z } from "zod";

import { StripeAddress } from "./utils";

export const Contact = z.object({
  firstName: z.string().min(1).max(30).trim(),
  lastName: z.string().min(1).max(30).trim(),
  email: z.string().email(),
  phoneNumber: z.string().min(1).max(20).trim(),
  address: StripeAddress,
});

export type Contact = z.infer<typeof Contact>;

// /** Represents a person's contact information. */
// export interface Contact {
//   firstName: string;
//   lastName: string;
//   homeAddress: Address;
//   email: string;
//   /**
//    * Contact's phone number in E.164 format.
//    * Example: +13478519465
//    *
//    * See for details: https://www.twilio.com/docs/glossary/what-e164
//    **/
//   phoneNumber: string;
// }
