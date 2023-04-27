import { ClientI } from "./client.interface";

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
  clientId?: number;
  user?: ClientI
}