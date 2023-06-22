/*import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

export default db;*/

import { Client } from '@vercel/postgres';

const db = new Client({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false // Opcional, solo si utilizas certificados SSL personalizados
  }
});

export default db;
