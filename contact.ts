import { Address } from "./utils";

export interface Contact {
 ​  ​/** First name of intended owner of ticket, might be different from purchasing user. */ 
 ​  firstName​?: ​string​; 
 ​  ​/** Last name of intended owner of ticket, might be different from purchasing user. */ 
 ​  lastName​?: ​string​; 
 ​  ​/** Address of intended owner of ticket, might be different from purchasing user. */ 
 ​  address​?: ​Address​; 
 ​  ​/** Address of intended owner of ticket, might be different from purchasing user. */ 
 ​  email​?: ​string​; 
 ​  ​/** Phone number of intended owner of ticket, might be different from purchasing user. */ 
 ​  phoneNumber​?: ​string​;
}
