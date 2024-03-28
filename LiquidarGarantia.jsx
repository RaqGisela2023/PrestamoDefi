import React, { useState } from 'react';

const LiquidarGarantia = ({ garantiasPendientes, onLiquidar }) => {
  const [garantiaSeleccionada, setGarantiaSeleccionada] = useState(null);

  const handleLiquidar = () => {
    if (garantiaSeleccionada) {
      onLiquidar(garantiaSeleccionada);
      setGarantiaSeleccionada(null);
    } else {
      alert('Por favor, seleccione una garantía para liquidar.');
    }
  };

  return (
    <div>
      <h2>Garantías Pendientes de Liquidación</h2>
      <ul>
        {garantiasPendientes.map((garantia, index) => (
          <li key={index}>
            <span>{garantia.descripcion}</span>
            <button onClick={() => setGarantiaSeleccionada(garantia)}>Seleccionar</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleLiquidar}>Liquidar Garantía</button>
      </div>
    </div>
  );
};

export default LiquidarGarantia;
