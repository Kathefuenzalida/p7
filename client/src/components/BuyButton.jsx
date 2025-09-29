import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function BuyButton({ plant }) {
  const handleBuy = async () => {
    try {
      console.log("🪴 Enviando al backend:", plant); // 👈 DEBUG

      const response = await axios.post("http://localhost:3000/crear-preferencia", {
        title: plant.name,
        unit_price: plant.price,
        quantity: 1,
      });

      const preferenceId = response.data.id;
      window.location.href = `https://www.mercadopago.cl/checkout/v1/redirect?pref_id=${preferenceId}`;
    } catch (error) {
      console.error("Error al crear preferencia:", error);
    }
  };

  return (
<Button variant="success" onClick={handleBuy}>
  Comprar{" "}
  <img
    src="/mercadopago.jpg"   // 👈 nombre correcto del archivo
    alt="Mercado Pago"
    style={{ width: "24px", marginLeft: "8px" }}
  />
</Button>

  );
}

export default BuyButton;
