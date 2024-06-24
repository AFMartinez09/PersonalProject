import db from '../../db/db';
import { ResultSetHeader, RowDataPacket} from 'mysql2/promise';

type QueryResult = 
| RowDataPacket[]
| RowDataPacket[][]
| ResultSetHeader
| ResultSetHeader[];

class BrandsService{
  async getBrandId( brandName: string ): Promise<number> {
    const [ brandResult ] = await db.execute<RowDataPacket[]>('SELECT id FROM brands WHERE name=?', [ brandName ]);

    if(brandResult.length > 0){
      return brandResult[0].id;
    } else {
      const [ insertBrandResult ] = await db.execute<ResultSetHeader>('INSERT INTO brands (name) VALUES (?)', [ brandName ]);
      return insertBrandResult.insertId;
    }
  }
}

export default BrandsService;