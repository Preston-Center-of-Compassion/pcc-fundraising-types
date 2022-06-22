import { z } from "zod";
import { Owned, Purchaseable } from "./utils";

export const EventTicket = z
  .object({
    selectedAt: z.date(),
    ticketIdentifier: z.string(),
    label: z.string(),
    description: z.string(),
  })
  .merge(Owned)
  .merge(Purchaseable);

export type EventTicket = z.infer<typeof EventTicket>;
