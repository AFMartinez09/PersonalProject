import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import db from '../../db/db';

type QueryResult =
| RowDataPacket
| RowDataPacket[][]
| ResultSetHeader
| ResultSetHeader[]

class EnginesService{
  async getEngineId( engineName: string ): Promise<number> {
    const [engineResult ] = await db.execute<RowDataPacket[]>('SELECT id FROM engines WHERE name=?', [ engineName ]);
   
    if( engineResult.length > 0){
      return engineResult[0].id;
    } else{
      const [ insertEngineResult ] = await db.execute<ResultSetHeader>('INSERT INTO engines (name) VALUES (?)', [ engineName ]);
      return insertEngineResult.insertId;
    }
  }
}

export default EnginesService;