import UserI from "./user.interface";

interface AddressI {
  id: number;
  state: string;
  city: string;
  zipCode: string;
  street: string;
  neighborhood: string;
  additionalData?: string;
  interiorCode: string;
  exteriorCode?: string;
  userId: number;
  user: UserI
}

export default AddressI;