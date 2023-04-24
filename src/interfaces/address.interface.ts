import { UserI } from "./user.interface";

export interface AddressI {
  id: number;
  state: string;
  city: string;
  /**
   * @minLength 5 
   */
  zipCode: string;
  street: string;
  neighborhood: string;
  additionalData?: string;
  interiorCode: string;
  exteriorCode?: string;
  userId?: number;
  user?: UserI
}