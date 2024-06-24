import  mysql  from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const {  
  DB_HOST, 
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

if(!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME ){
  throw new Error('Missing required database enviroment variables');
}

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;