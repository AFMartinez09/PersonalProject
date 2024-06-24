import { RowDataPacket } from "mysql2";

export interface Brands extends RowDataPacket {
  id: number;
  name: string;
}