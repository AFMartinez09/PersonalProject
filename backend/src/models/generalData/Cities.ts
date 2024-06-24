import { RowDataPacket } from 'mysql2';

export interface Cities extends RowDataPacket {
  id: number;
  name: string;
}