import  mysql  from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const {  
  DB_HOST, 
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

if(!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME ){
  throw new Error('Missing required database enviroment vaiables');
}

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

db.connect((err) => {
  if(err){
    console.error('Error connecting to the database', err);
    throw err;
  }
  console.log('Database connected');
});

export default db;