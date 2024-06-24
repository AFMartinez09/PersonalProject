import { RowDataPacket } from "mysql2";

export interface Models extends RowDataPacket {
  id: number;
  name: string;
}