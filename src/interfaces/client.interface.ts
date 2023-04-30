import { AddressI } from './address.interface';

export interface ClientI {
  id?: number;
  name: string;
  password: string;
  /**
   * @pattern ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$
   */
  email: string;
  profileURL?: string;
  role: 'ADMIN' | 'CUSTOMER';
  birthDate: Date;
  address?: AddressI[];
}
