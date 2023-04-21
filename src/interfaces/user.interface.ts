import { AddressI } from "./address.interface";

export interface UserI {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  profileURL?: string;
  role: "ADMIN" | "CLIENT";
  birthDate: Date;
  address: AddressI[];
}
