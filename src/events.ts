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
  dinnerReservationPriceInCents: z.number().gt(0),
  raffleTicketPriceInCents: z.number().gt(0),
  raffleTotalInCents: z.number().gt(0),
  prizes: z.array(Prize),
  drawingDate: z.date(),
});

const FiftyFiftyTray = z.object({
  id: z.string(),
  name: z.string().trim(),
  css: z.string().optional()
});

const FiftyFiftyEventData = z.object({
  type: z.literal("50-50"),
  trays: z.array(FiftyFiftyTray),
  drawingDate: z.date()
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
