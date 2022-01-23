export { Timestamp } from "firebase/firestore";
export type { Address } from "@stripe/stripe-js";

export interface ID {
  id?: string;
}

/** Represents a resource that can be owned by someone, not neccessarily a user. */
export interface Ownable {
  /** First name of intended owner of ticket, might be different from purchasing user. */
  holderFirstName?: string;
  /** Last name of intended owner of ticket, might be different from purchasing user. */
  holderLastName?: string;
  /** Address of intended owner of ticket, might be different from purchasing user. */
  holderAddress?: Address;
  /** Address of intended owner of ticket, might be different from purchasing user. */
  holderEmail?: string;
  /** Phone number of intended owner of ticket, might be different from purchasing user. */
  holderPhoneNumber?: string;
}

/** Represents a resource that can be purchased via Stripe Checkout. */
export interface Purchaseable {
  /** Exact timestamp for when user checkout out the item. */
  checkedOutAt?: Timestamp;
  /** Whether or not the item has been successfully paid for. */
  isPaid?: boolean;
  /** Stripe API Identifier for CheckoutSession created upon checkout. Might not exist once cancelled. */
  stripeCheckoutSessionId?: string;
  /** Stripe API identifier for PaymentIntent created upon payment. */
  stripePaymentIntentId?: string;
  /** Exact timestamp for when the user completed the Stripe Checkout purchase. */
  purchasedAt?: Timestamp;
}
