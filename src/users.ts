import { z } from "zod";
import { Contact } from "./contact";

export const UserDocument = z
  .object({
    stripeCustomerId: z.string().trim().nullable(),
  })
  .merge(Contact);

/** Represents a Firestore user document from the `users` collection. */
export type UserDocument = z.infer<typeof UserDocument>;
