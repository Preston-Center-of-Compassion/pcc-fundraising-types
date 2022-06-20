import { z } from "zod";
import { Owned, Purchaseable } from "./utils";

export const Donation = z
  .object({
    amountInCents: z.number().gt(0),
  })
  .merge(Owned)
  .merge(Purchaseable);
