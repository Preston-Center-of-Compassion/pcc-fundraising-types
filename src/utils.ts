import { z } from "zod";
import { Contact } from "./contact";

export const Owned = z.object({
  userId: z.string(),
  ownedBy: Contact,
});

export const Purchaseable = z.object({
  /** Whether or not the item has been successfully paid for. */
  isPaid: z.boolean(),
  /** Exact timestamp for when user checkout out the item */
  checkedOutAt: z.date().optional(),
  /** Stripe API Identifier for CheckoutSession created upon checkout. Might not exist once cancelled. */
  stripeCheckoutSessionId: z.string().optional(),
  /** Stripe API identifier for PaymentIntent created upon payment. */
  stripePaymentIntentId: z.string().optional(),
  /** Total amount that purchaser paid. */
  stripeGrossAmountInCents: z.number().nonnegative().optional(),
  /** Amount that PCC netted from purchase.*/
  stripeNetAmountInCents: z.number().nonnegative().optional(),
  /** Amount that Stripe took from purchase. */
  stripeFeeAmountInCents: z.number().nonnegative().optional(),
  /** Contact details of purchaser, which might differ from owner. */
  purchasedBy: Contact.optional(),
  /** Exact timestamp for when the user completed the Stripe Checkout purchase. */
  purchasedAt: z.date().optional(),
});
