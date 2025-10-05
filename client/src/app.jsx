import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Contexto de usuario
import UserState from "./context/users/UserState";

// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import Pending from "./pages/Pending";

// Rutas protegidas
import PrivateRoute from "./components/Auth/PrivateRoute";
import AuthRoute from "./components/Auth/AuthRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <UserState>
      <Router>
        <Navbar />

        <main className="container mt-4 mb-5">
          <Switch>
            {/* RUTAS PRIVADAS */}
            <PrivateRoute path="/profile" component={Profile} />

            {/* RUTAS DE AUTENTICACIÓN */}
            <AuthRoute path="/register" component={Register} />
            <AuthRoute path="/login" component={Login} />

            {/* RUTAS DE PAGO (Mercado Pago) */}
            <Route path="/success" component={Success} />
            <Route path="/failure" component={Failure} />
            <Route path="/pending" component={Pending} />

            {/* RUTAS PÚBLICAS */}
            <Route exact path="/" component={Home} />
          </Switch>
        </main>

        <Footer />
      </Router>
    </UserState>
  );
}

export default App;
