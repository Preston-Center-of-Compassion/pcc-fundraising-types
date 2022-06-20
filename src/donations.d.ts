import { Ownable, Purchaseable } from "./utils";

/** Represents a Firestore document in `/events/{eventId}/donations`. */
export interface EventDonation extends Ownable, Purchaseable {
  /** UID of the user account. */
  userUID?: string;
  /** Exact amount of donation in cents. */
  amountInCents?: number;
}
