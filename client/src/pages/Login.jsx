import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/users/UserContext";

function Login({ history }) {
  const { loginUser, authStatus } = useContext(UserContext);

  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();
    loginUser(data);
  };

  useEffect(() => {
    if (authStatus) {
      history.push("/profile");
    }
  }, [authStatus, history]);

  return (
    <div className="container mt-5">
      <h2>Iniciar sesión</h2>
      <form onSubmit={sendData}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
