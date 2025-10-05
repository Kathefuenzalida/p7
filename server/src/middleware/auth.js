// server/src/middleware/auth.js
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Leer token desde cookies

  if (!token) {
    return res.status(401).json({ msg: "No autorizado, falta token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // guarda el usuario en req.user para usarlo en controladores
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token inválido" });
  }
};
