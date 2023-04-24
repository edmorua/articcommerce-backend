import { AddressI } from "./address.interface";

export interface UserI {
  id?: number;
  name: string;
  username: string;
  password: string;
  /**
   * @pattern ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$
   */
  email: string;
  profileURL?: string;
  role: "ADMIN" | "CLIENT";
  birthDate: Date;
  address?: AddressI[];
}
