import Sequelize from 'sequelize';

//Se conecta a la base de datos usando sequlize, con los parametros de esta misma "nombre base de datos" "usuario" "constrasena"
const db = new Sequelize('tienda','postgres','850318', {
    host:'localhost',
    dialect:'postgres'
});
export default db;