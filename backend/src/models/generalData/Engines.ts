import { RowDataPacket } from "mysql2";

export interface Engines extends RowDataPacket{
  id: number;
  name: string;
}