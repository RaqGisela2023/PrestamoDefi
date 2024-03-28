import React, { useState } from 'react';

const SolicitarPrestamo = ({ onSubmit }) => {
  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que el monto y el plazo sean números válidos
    if (isNaN(monto) || isNaN(plazo) || monto <= 0 || plazo <= 0) {
      alert('Por favor, ingrese un monto y un plazo válidos.');
      return;
    }
    // Enviar los datos al controlador padre
    onSubmit({ monto: parseFloat(monto), plazo: parseInt(plazo) });
    // Limpiar los campos después de enviar el formulario
    setMonto('');
    setPlazo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="monto">Monto:</label>
        <input
          type="number"
          id="monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="plazo">Plazo (en meses):</label>
        <input
          type="number"
          id="plazo"
          value={plazo}
          onChange={(e) => setPlazo(e.target.value)}
          required
        />
      </div>
      <button type="submit">Solicitar Préstamo</button>
    </form>
  );
};

export default SolicitarPrestamo;
