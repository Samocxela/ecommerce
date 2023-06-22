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
import Sequelize from 'sequelize';
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const pool = new pg.Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require"
  });

// Establecer el grupo de conexiones (Pool) en Sequelize
const db = new Sequelize({
    dialect: 'postgres',
    dialectModule: pg,
    pool: {
      max: 5, // número máximo de conexiones en el pool
      min: 0, // número mínimo de conexiones en el pool
      acquire: 30000, // tiempo máximo (en milisegundos) para adquirir una conexión antes de que ocurra un error
      idle: 10000 // tiempo máximo (en milisegundos) que una conexión puede estar inactiva en el pool antes de que se cierre
    },
  });
  

  export default db;

