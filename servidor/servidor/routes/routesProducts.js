import express from "express";//Se importa express para facilitar la comunicacion con el servidor
import { bookProduct, buyProducts,getAllProducts,getProduct,createProduct,updateProducts,deleteProduct } from "../controllers/ProductControllers.js";//obteniendo todos los controladores ya creados para ser usados
const router = express.Router();

//generacion de rutas para usa la api creada para interactuar con la base de datos
//diferentes rutas a usar con las diferentes funcionalidades
router.get('/productos', getAllProducts)
router.get('/productos/:id', getProduct)
router.put('/productos/buy', buyProducts)
router.get('/productos/book/:id', bookProduct)

router.post('/productos', createProduct)
router.put('/productos/:id', updateProducts)
router.delete('/productos/:id', deleteProduct)

export default router;