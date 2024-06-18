export interface Users{
  id?: string;
  name: string;
  lastname: string;
  identification: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  other_contact:string;
  other_phone: string;
  cities_id: number;
  block_user: boolean;
  disable_user: boolean;
}