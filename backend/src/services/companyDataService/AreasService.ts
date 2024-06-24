import db from '../../db/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

type QueryResult =
|RowDataPacket[]
|RowDataPacket[][]
|ResultSetHeader
|ResultSetHeader[]

class AreasService{
  async getAreasId( areaName: string ): Promise<number>{
    const [ areaResult ] = await db.execute<RowDataPacket[]>('SELECT id FROM areas WHERE name=?', [ areaName ]);
    if(areaResult.length > 0){
      return areaResult[0].id;
    }else{
      const [ insertAreaResult] = await db.execute<ResultSetHeader>('INSERT INTO areas (name) VALUES (?)', [ areaName ]);
      return insertAreaResult.insertId;
    }
  }
}

export default AreasService;