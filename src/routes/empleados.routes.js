import { Router } from "express";
import { methodHTTP as empleadoController } from "../controllers/empleado.controllers.js";

/* Creamos el enrutador */

const router = Router();

/* Configuramos respuesta desde server método http Get */
/* READ */
router.get("/", empleadoController.getEmpleados);

/* Hacemos disponible a router en toda la app */

export default router;
