import db from '../../db/db';
import { ResultSetHeader, RowDataPacket} from 'mysql2/promise';

type QueryResult = 
  | RowDataPacket[]
  | RowDataPacket[][]
  | ResultSetHeader
  | ResultSetHeader [];

class CitiesService{
  async getCityId( cityName: string ): Promise<number> {

      // fetch city ID from database
        const [ cityResult ] = await db.execute<RowDataPacket[]>('SELECT id FROM cities WHERE name=?', [ cityName ]);
        // checking if that city exist and return ID
        if(cityResult.length > 0){
          return cityResult[0].id;
        } else{
          // create city and then return ID
          const [ insertCityResult ] = await db.execute<ResultSetHeader>('INSERT INTO cities (name) VALUES (?)', [ cityName ]);
          return insertCityResult.insertId;
        }
  }
}

export default CitiesService;

