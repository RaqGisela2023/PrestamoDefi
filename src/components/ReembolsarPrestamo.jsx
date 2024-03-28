import React, { useState } from 'react';

const ReembolsarPrestamo = ({ montoPendiente, onReembolsar }) => {
  const [montoReembolso, setMontoReembolso] = useState('');

  const handleReembolsar = () => {
    // Validar que el monto de reembolso sea válido
    if (isNaN(montoReembolso) || montoReembolso <= 0 || montoReembolso > montoPendiente) {
      alert('Por favor, ingrese un monto de reembolso válido.');
      return;
    }
    // Llamar a la función onReembolsar pasando el monto de reembolso
    onReembolsar(parseFloat(montoReembolso));
    // Limpiar el campo de monto de reembolso después de realizar el reembolso
    setMontoReembolso('');
  };

  return (
    <div>
      <h2>Reembolsar Préstamo</h2>
      <p>Monto Pendiente: {montoPendiente}</p>
      <div>
        <label htmlFor="montoReembolso">Monto a Reembolsar:</label>
        <input
          type="number"
          id="montoReembolso"
          value={montoReembolso}
          onChange={(e) => setMontoReembolso(e.target.value)}
          required
        />
      </div>
      <button onClick={handleReembolsar}>Reembolsar</button>
    </div>
  );
};

export default ReembolsarPrestamo;
