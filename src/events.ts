import { z } from "zod";

export const EventAlert = z.object({
  title: z.string().min(1).max(200).trim().optional(),
  body: z.string().min(1).max(1000).trim(),
  postedAt: z.date(),
});

export type EventAlert = z.infer<typeof EventAlert>;

export const Prize = z.object({
  title: z.string().trim().min(1).max(50),
  subtitle: z.string().min(1).max(200).trim().optional(),
});

const AugustEventData = z.object({
  type: z.literal("august"),
  seatPriceInCents: z.number().gt(0),
  ticketPriceInCents: z.number().gt(0),
  prizes: z.array(Prize),
  drawingDate: z.date(),
});

const FiftyFiftyEventData = z.object({
  type: z.literal("50-50"),
  tyhing: z.string(),
});

export const EventDocument = z
  .object({
    name: z.string().min(1).max(2000).trim(),
    lead: z.string().trim().optional(),
    alerts: z.array(EventAlert),
    openAt: z.date(),
    closeAt: z.date().optional(),
  })
  .and(z.union([AugustEventData, FiftyFiftyEventData]));

export type EventDocument = z.infer<typeof EventDocument>;
