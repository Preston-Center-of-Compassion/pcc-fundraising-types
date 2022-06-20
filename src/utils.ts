import { z } from "zod";
import { Address } from "@stripe/stripe-js";
import { Timestamp } from "firebase/firestore";
import { Contact } from "./contact";

export { Timestamp };
export const StripeAddress: z.ZodType<Address> = z.object({
  city: z.string().nullable(),
  country: z.string().nullable(),
  line1: z.string().nullable(),
  line2: z.string().nullable(),
  postal_code: z.string().nullable(),
  state: z.string().nullable(),
});

export interface ID {
  id?: string;
}

/** Represents a resource that can be owned by someone, not neccessarily a user. */
export interface Ownable {
  /** Contact details of owner, which might differ from user and/or purchaser. */
  ownedBy?: Contact;
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
  /** Total amount that purchaser paid. */
  stripeGrossAmount?: number;
  /** Amount that PCC netted from purchase.*/
  stripeNetAmount?: number;
  /** Amount that Stripe took from purchase. */
  stripeFeeAmount?: number;
  /** Contact details of purchaser, which might differ from owner. */
  purchasedBy?: Contact;
  /** Exact timestamp for when the user completed the Stripe Checkout purchase. */
  purchasedAt?: Timestamp;
}
