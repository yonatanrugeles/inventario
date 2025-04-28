import { Router } from "express";
import { methodHTTP as clienteController } from "../controllers/cliente.controllers.js";

/* Creamos el enrutador */

const router = Router();

/* Configuramos respuesta desde server método http Get */
/* CREATE */
router.post("/", clienteController.postClientes);

/* Hacemos disponible a router en toda la app */

export default router;