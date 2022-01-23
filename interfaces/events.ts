import { Timestamp } from "./utils";

/** Represents a nested alert object for an event. */
export type EventAlert = {
  /** Short title of alert. */
  title?: string;
  /** Optional long body text of alert. */
  body?: string;
  /** Exact timestamp for when the alert was posted. */
  postedAt?: Timestamp;
};

/** Represents a Firestore document in the `/events` collection. */
export interface EventDocument {
  /** Public-facing name of event. */
  name?: string;
  /** Optional subtitle of event. */
  lead?: string;
  /** Optional alerts for event. */
  alerts?: EventAlert[];
  /** Type of event. */
  type?: "august" | "bingo";
  /** Exact timestamp for when event opens to public. */
  openAt?: Timestamp;
  /** Exact timestamp for when event closes to public. */
  closeAt?: Timestamp;
}

export interface BingoEventDocument extends EventDocument {
  ticketPriceInCents?: number;
}
