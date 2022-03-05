import { Address } from "./utils";

/** Represents a person's contact information. */
export interface Contact {
  firstName?: string;
  lastName?: string;
  homeAddress?: Address;
  email?: string;
  /**
   * Contact's phone number in E.164 format.
   * Example: +13478519465
   *
   * See for details: https://www.twilio.com/docs/glossary/what-e164
   **/
  phoneNumber?: string;
}
