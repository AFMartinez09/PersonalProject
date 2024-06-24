import db from '../../db/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

type QueryResult = 
|RowDataPacket[]
|RowDataPacket[][]
|ResultSetHeader
|ResultSetHeader[]

class RolesService{
  async getRoleId( roleName: string ): Promise<number>{
    const [ roleResult ] = await db.execute<RowDataPacket[]>('SELECT id FROM roles WHERE name=?', [ roleName ]);
    if(roleResult.length > 0){
      return roleResult[0].id;
    }else{
      const [ insertRoleResult ] = await db.execute<ResultSetHeader>('INSERT INTO roles (name) VALUES (?)', [ roleName ]);
      return insertRoleResult.insertId;
    }
  }
}

export default RolesService;