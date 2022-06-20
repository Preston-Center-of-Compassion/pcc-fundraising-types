import { Timestamp, Ownable, Purchaseable } from "./utils";

/** Represents a Firestore document in `/events/{eventId}/selections` */
export interface EventTicket extends Ownable, Purchaseable {
  /** UID of the user account. */
  userUID?: string;
  /** Exact timestamp for when user selected the ticket. */
  selectedAt?: Timestamp;
  /** Identifiers to determine the ticket. Looks different for different event types. */
  ticketIdentifiers?: {
    number?: number;
    [key: string]: any;
  };
}
