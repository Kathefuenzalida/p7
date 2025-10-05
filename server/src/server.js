// server/src/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // 👈 para manejar cookies
import { MercadoPagoConfig, Preference } from "mercadopago";

// Rutas
import authRoutes from "./routes/auth.routes.js"; 
import plantRoutes from "./routes/plants.routes.js"; 
import paymentRoutes from "./routes/payments.routes.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors({
  origin: "http://localhost:5173", // 👈 tu frontend (Vite)
  credentials: true,               // 👈 habilita envío de cookies
}));
app.use(express.json());
app.use(cookieParser()); // 👈 backend podrá leer/escribir cookies

// ✅ Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error al conectar MongoDB:", err));

// ✅ Rutas de tu API
app.use("/api/auth", authRoutes);        // signup, login, logout, profile
app.use("/api/plants", plantRoutes);     // productos
app.use("/api/payments", paymentRoutes); // Mercado Pago

// ⚠️ OPCIONAL: si ya tienes /api/payments/crear-preferencia en `paymentRoutes`, puedes borrar este endpoint.
// Si quieres mantenerlo acá para pruebas, déjalo pero ajusta bien las back_urls:
app.post("/crear-preferencia", async (req, res) => {
  try {
    const { title, unit_price, quantity } = req.body;

    const client = new MercadoPagoConfig({
      accessToken: process.env.MP_ACCESS_TOKEN,
    });
    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            title,
            unit_price: Number(unit_price),
            quantity: Number(quantity),
            currency_id: "CLP",
          },
        ],
        back_urls: {
          success: `${process.env.FRONTEND_URL}/success`,  // 👈 ahora viene del .env
          failure: `${process.env.FRONTEND_URL}/failure`,
          pending: `${process.env.FRONTEND_URL}/pending`,
        },
        auto_return: "approved",
      },
    });

    console.log("✅ Preferencia creada:", result.id);
    res.json({ id: result.id });
  } catch (error) {
    console.error("❌ Error creando preferencia:", error);
    res.status(500).json({ error: "Error al crear preferencia", details: error });
  }
});

// ✅ Levantar server
app.listen(PORT, () => {
  console.log(`🚀 Server corriendo en http://localhost:${PORT}`);
});
