import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/* Creamos el enrutador */

const router = Router();

/* Configuramos respuesta desde server método http Get */
/* READ */
router.get("/", categoriaController.getCategorias);
/* CREATE */
router.post("/", categoriaController.postCategorias);
/* Ruta que recibe un parámetro */
router.get("/:id", categoriaController.getCategory);

/* Hacemos disponible a router en toda la app */

export default router;
