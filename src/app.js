/* Importamos el framework Express */

import express from "express";
import cors from "cors";
import categoriaRoutes from "./routes/categorias.routes.js";
import empleadoRoutes from "./routes/empleados.routes.js";
import clienteRoutes from "./routes/clientes.routes.js";
import productoRoutes from "./routes/productos.routes.js";

/* Asignamos a app toda funcionalidad para mi server web */

const app = express();

/* Setear un puerto a mi web server */

app.set("port", 5000);

/* Middleware */

app.use(express.json());

app.use(cors());

/* Routes */

app.use("/api/categorias", categoriaRoutes);
app.use("/api/empleados", empleadoRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/productos", productoRoutes);

/* Hacemos disponible a mi server app para toda la aplicación */

export default app;
