import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/* Creamos el enrutador */

const router = Router();

/* Configuramos respuesta desde server método http Get */

router.get("/", categoriaController.getCategorias)

/* Hacemos disponible a router en toda la app */

export default router;