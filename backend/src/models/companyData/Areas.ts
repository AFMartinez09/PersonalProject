import { RowDataPacket } from "mysql2";

export interface Areas extends RowDataPacket {
  id: number;
  name: string;
}