import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import estacionesRoutes from "./routes/estacionesRoutes.js"; // Reemplaza con el nombre correcto de tus rutas

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

/* // Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No está permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions)); */

// Routing
app.use("/api/estaciones", estacionesRoutes); // Reemplaza con la ruta correcta

const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
  console.log(`Servidors corriendo en el puerto ${PORT}`);
});

// Aquí puedes agregar la configuración de Socket.io si la necesitas
