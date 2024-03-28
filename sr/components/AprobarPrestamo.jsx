import React, { useState } from 'react';

const AprobarPrestamo = ({ solicitudesPendientes, onAprobar }) => {
  const [solicitudSeleccionada, setSolicitudSeleccionada] = useState(null);

  const handleAprobar = () => {
    if (solicitudSeleccionada) {
      onAprobar(solicitudSeleccionada);
      setSolicitudSeleccionada(null);
    } else {
      alert('Por favor, seleccione una solicitud para aprobar.');
    }
  };

  return (
    <div>
      <h2>Solicitudes Pendientes</h2>
      <ul>
        {solicitudesPendientes.map((solicitud, index) => (
          <li key={index}>
            <span>{solicitud.cliente}</span>
            <button onClick={() => setSolicitudSeleccionada(solicitud)}>Seleccionar</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleAprobar}>Aprobar Solicitud</button>
      </div>
    </div>
  );
};

export default AprobarPrestamo;
