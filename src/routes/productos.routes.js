import { Router } from "express";
import { methodHTTP as productoController } from "../controllers/producto.controllers.js";

/* Creamos el enrutador */

const router = Router();

/* Configuramos respuesta desde server método http Get */
/* UPDATE - Ruta que recibe parametro tanto el cuerpo como el ID a actualizar */
router.put("/:id", productoController.updateProductos);

/* Hacemos disponible a router en toda la app */

export default router;
