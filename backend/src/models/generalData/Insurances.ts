import { RowDataPacket } from "mysql2";

export interface Insurances extends RowDataPacket{
  id: number;
  name: string;
}