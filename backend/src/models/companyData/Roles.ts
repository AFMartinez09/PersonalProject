import { RowDataPacket } from "mysql2";

export interface Roles extends RowDataPacket {
  id: number;
  name: string;
}