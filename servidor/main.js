import express from "express";
import cors from "cors";
import db from "./database/db.js";
import productRoutes from "./routes/routesProducts.js";
import userRoutes from "./routes/routesUser.js";
import pay from "./routes/pay.js";
import ProductModel from "./models/ProductModel.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(productRoutes);
app.use(userRoutes);
app.use("/", pay);

// Conexión a la base de datos
try {
  await db.authenticate();
  await db.sync({ force: false });
  console.log("Conexión exitosa a la base de datos");
} catch (error) {
  console.log(`Error de conexión a la base de datos: ${error}`);
}
//conexion con variable
const PORT = process.env.PORT; 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Obtiene todos los productos de la base de datos
const products = await ProductModel.findAll({
  attributes: ["id", "stock", "stockmin", "nombre"],
});

const productsStock = {}; // Objeto para guardar el stock de los productos
const productMinStock = {}; // Objeto para guardar el stock mínimo de los productos

products.forEach((product) => {
  productsStock[product.dataValues.id] = product.dataValues.stock;
});

products.forEach((product) => {
  productMinStock[product.dataValues.id] = {
    stockmin: product.dataValues.stockmin,
    nombre: product.dataValues.nombre,
  };
});

console.log(productMinStock);

export { productsStock, productMinStock };
