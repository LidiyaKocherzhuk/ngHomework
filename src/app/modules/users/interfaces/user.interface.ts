export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: IAddress;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
