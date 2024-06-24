import db from '../../db/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

type QueryResult =
|RowDataPacket[]
|RowDataPacket[][]
|ResultSetHeader
|ResultSetHeader[]

class ModelsService{
  async getModelId( modelName:string ): Promise<number> {
    
    const [ modelResult ] = await db.execute<RowDataPacket[]>('SELECT id FROM models WHERE name=?', [ modelName ]);
    if(modelResult.length > 0){
      return modelResult[0].id;
    }else{
      const [ insertModelResult ] = await db.execute<ResultSetHeader>('INSERT INTO models (name) VALUES(?)', [ modelName ]);
      return insertModelResult.insertId;
    }
  }
}

export default ModelsService;