import { z } from "zod";
import { Owned, Purchaseable } from "./utils";

export const EventTicket = z
  .object({
    selectedAt: z.date(),
    type: z.string().optional(), // raffle, dinner-reservation, etc.
    ticketIdentifier: z.string().optional(),
    label: z.string().optional(),
    description: z.string().optional(),
  })
  .merge(Owned)
  .merge(Purchaseable);

export type EventTicket = z.infer<typeof EventTicket>;
