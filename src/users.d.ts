import { Contact } from "./contact";

/** Represents a Firestore user document from the `users` collection. */
export interface UserDocument extends Contact {
  /** Stripe API identifier for Customer associated with user. */
  stripeCustomerId?: string;
}
