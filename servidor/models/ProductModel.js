import db from "../database/db.js";
import UserModel from "./UserModel.js";
import { DataTypes } from "sequelize";

const ProductModel = db.define('productos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  precio: {
    type: DataTypes.FLOAT,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
  stockmax: {
    type: DataTypes.INTEGER,
  },
  stockmin: {
    type: DataTypes.INTEGER,
  },
  img: {
    type: DataTypes.STRING, // Columna para almacenar la imagen en formato bytea
    allowNull: false,
  },
}, {
  timestamps: false,
});

UserModel.hasMany(ProductModel, { foreignKey: 'usuario_id', as: 'productos' });

export default ProductModel;
