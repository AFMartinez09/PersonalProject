import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(morgan('dev'));
// middlewares
server.use(cors());
server.use(express.json());

server.get('/api', (req, res) =>{
  console.log('Hola mundo');
  res.send('Hola mundo');
})

const PORT = process.env.port || process.env.url;

server.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});

export default server;