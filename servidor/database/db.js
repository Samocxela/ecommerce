/*import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

export default db;*/

/*import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.POSTGRES_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default db;*/
// db.js

import Sequelize from 'sequelize';
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const pool = new pg.Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require"
});

const db = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
});

export default db;

