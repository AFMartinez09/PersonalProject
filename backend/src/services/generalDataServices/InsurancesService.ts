import db from '../../db/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

type QueryResult =
|RowDataPacket[]
|RowDataPacket[][]
|ResultSetHeader
|ResultSetHeader[]

class InsurancesService{
  async getInsuranceId( insuranceName: string ): Promise<number> {
    const [ insureanceResult ] = await db.execute<RowDataPacket[]>('SELECT id FROM insurances WHERE name=?', [ insuranceName ]);
    
    if(insureanceResult.length > 0){
      return insureanceResult[0].id;
    }else{

      const [ insertInsureanceResult] = await db.execute<ResultSetHeader>('INSERT INTO cities (name) VALUE (?)', [ insuranceName ]);
      return insertInsureanceResult.insertId;
    }
  }
}

export default InsurancesService;