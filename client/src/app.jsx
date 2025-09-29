import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";  // 👈 Aquí deberían estar tus secciones
import "bootstrap/dist/css/bootstrap.min.css"; // importante si usas react-bootstrap

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />  {/* 👈 Aquí deberían estar las secciones con plantas, héroe, etc. */}
      </main>
      <Footer />
    </>
  );
}

export default App;
