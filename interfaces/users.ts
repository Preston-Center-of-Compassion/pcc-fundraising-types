import { Address } from "./utils";

/** Represents a Firestore user document from the `users` collection. */
export interface UserDocument {
  /** Stripe API identifier for Customer associated with user. */
  stripeCustomerId?: string;
  /** First name of user. Kept in sync with user acount and Stripe Customer. */
  firstName?: string;
  /** Last name of user. Kept in sync with user acount and Stripe Customer. */
  lastName?: string;
  /** Unique email of user. Is never changed. */
  email?: string;
  /** Phone number of user in E.164 format. */
  phoneNumber?: string;
  /** Address of user in Stripe API format. */
  address?: Address;
}
