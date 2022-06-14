import { Timestamp } from "./utils";

/** Represents a nested alert object for an event. */
export type EventAlert = {
  /** Short title of alert. */
  title?: string;
  /** Optional long body text of alert. */
  body: string;
  /** Exact timestamp for when the alert was posted. */
  postedAt: Timestamp;
};

/** Represents a particular rate for a number of tickets. */
export type TicketPrice = {
  ticketName?: string;
  ticketCount: number;
  priceInCents: number;
};

/** Represents a Firestore document in the `/events` collection. */
export interface EventDocument<T> {
  /** Public-facing name of event. */
  name: string;
  /** Optional subtitle of event. */
  lead?: string;
  /** Optional alerts for event. */
  alerts: EventAlert[];
  /** Type of event. */
  type: "august" | "50-50" | "bonus" | "chinese-auction";
  /** Exact timestamp for when event opens to public. */
  openAt?: Timestamp;
  /** Exact timestamp for when event closes to public. */
  closeAt?: Timestamp;
  // /**
  //  * List of tickets prices and discounts.
  //  *
  //  * Examples:
  //  * - [{ 1, 1000 }] means every ticket is $10
  //  * - [{10, 8000}, {5, 4000}, {1, 1000}] means 10 tickets for $80, 5 for $40, etc.
  //  **/
  // ticketPricing?: TicketPrice[];
  eventData: T;
}

export type BonusEventDocument = {
  ticketMin?: number;
  ticketMax?: number;
};

type Prize = { title: string; subtitle?: string };

export type AugustEventData = {
  seatPriceInCents: number;
  ticketPriceInCents: number;
  prizes: Prize[];
  drawingDate: Timestamp;
};
