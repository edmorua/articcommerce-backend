import { ClientI } from '../interfaces/client.interface';

export const clients: ClientI[] = [
  {
    name: 'Eduardo Ruiz Test1',
    email: 'eduardo.ruiz.test1@gmail.com',
    password: 'edmo5794',
    role: 'ADMIN',
    birthDate: new Date('1990-01-01'),
  },
  {
    name: 'Eduardo Ruiz Test2',
    email: 'eduardo.ruiz.test2@gmail.com',
    password: 'edmo5794',
    role: 'CUSTOMER',
    birthDate: new Date('1995-01-01'),
  },
  {
    name: 'Eduardo Ruiz Test3',
    email: 'eduardo.ruiz.test3@gmail.com',
    password: '12345678',
    role: 'CUSTOMER',
    birthDate: new Date('1991-12-11'),
  },
  {
    name: 'Eduardo Ruiz Test4',
    email: 'eduardo.ruiz.test4@gmail.com',
    password: '12345678',
    role: 'ADMIN',
    birthDate: new Date('1991-12-11'),
  },
  {
    name: 'Eduardo Ruiz Test5',
    email: 'eduardo.ruiz.test5@gmail.com',
    password: '12345678',
    role: 'CUSTOMER',
    birthDate: new Date('1989-11-11'),
  },
  {
    name: 'Eduardo Ruiz Test6',
    email: 'eduardo.ruiz.test6@gmail.com',
    password: '12345678',
    role: 'CUSTOMER',
    birthDate: new Date('1979-04-21'),
  }
];

