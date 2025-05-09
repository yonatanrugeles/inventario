import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/* Creamos el enrutador */

const router = Router();

/* Configuramos respuesta desde server método http Get */
/* DELETE - Ruta que recibe parametro ID de categoria a borrar */
router.delete("/:id", categoriaController.deleteCategory);

/* Hacemos disponible a router en toda la app */

export default router;
