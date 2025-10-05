import React, { useState, useContext } from "react";
import UserContext from "../context/users/UserContext";

function Register() {
  const { registerUser } = useContext(UserContext);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();
    registerUser(data);
  };

  return (
    <div className="container mt-5">
      <h2>Crear cuenta</h2>
      <form onSubmit={sendData}>
        <input type="text" name="username" placeholder="Nombre de usuario" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}

export default Register;
