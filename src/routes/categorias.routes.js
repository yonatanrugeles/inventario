import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/* Creamos el enrutador */

const router = Router();

/* Configuramos respuesta desde server método http Get */
/* READ */
router.get("/", categoriaController.getCategorias);
/* CREATE */
router.post("/", categoriaController.postCategorias);
/* Ruta que recibe un parámetro (READ - una sola fila) */
router.get("/:id", categoriaController.getCategory);
/* DELETE - Ruta que recibe parametro ID de categoria a borrar */
router.delete("/:id", categoriaController.deleteCategory);
/* UPDATE - Ruta que recibe parametro tanto el cuerpo como el ID a actualizar */
router.put("/:id", categoriaController.updateCategorias);

/* Hacemos disponible a router en toda la app */

export default router;
