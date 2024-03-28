import React from "react";
import "./Home.css"; // Importamos el archivo de estilos CSS

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a PFM Desarrollo Frontend Web3</h1>
      <p>Esta es una aplicación increíble que te facilitará el trabajo.</p>
      <div className="functionality-section">
        <h2>Funcionalidades principales:</h2>
        <ul className="functionality-list">
          <li><a href="/inicio-autenticacion">Inicio y Autenticación</a></li>
          <li><a href="/gestion-usuarios">Gestión de Usuarios</a></li>
          <li><a href="/operaciones-prestamos">Operaciones de Préstamos</a></li>
        </ul>
      </div>
    </div>
  );
}

