import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import api from "../../config/axios";

const UserState = ({ children }) => {
  const initialState = {
    user: null,
    authStatus: false,
    loading: true,
  };

  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  // 👉 Signup
  const registerUser = async (dataForm) => {
    try {
      const res = await api.post("/auth/signup", dataForm);
      dispatch({
        type: "REGISTRO_EXITOSO",
        payload: res.data.user,
      });
    } catch (error) {
      console.error("❌ Error registrando usuario:", error.response?.data || error);
    }
  };

  // 👉 Login
  const loginUser = async (dataForm) => {
    try {
      const res = await api.post("/auth/login", dataForm);
      dispatch({
        type: "LOGIN_EXITOSO",
        payload: res.data.user,
      });
    } catch (error) {
      console.error("❌ Error login:", error.response?.data || error);
    }
  };

  // 👉 Verificar usuario
  const verifyingToken = async () => {
    try {
      const res = await api.get("/auth/profile");
      dispatch({
        type: "OBTENER_USUARIO",
        payload: res.data.user,
      });
    } catch (error) {
      console.error("❌ Error verificando usuario:", error.response?.data || error);
    }
  };

  // 👉 Logout
  const logout = async () => {
    try {
      await api.post("/auth/logout");
      dispatch({ type: "CERRAR_SESION" });
    } catch (error) {
      console.error("❌ Error cerrando sesión:", error.response?.data || error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        loading: globalState.loading,
        registerUser,
        loginUser,
        verifyingToken,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
