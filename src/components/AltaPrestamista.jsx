import React, { useState } from 'react';

const AltaPrestamista = () => {
  // Estados para almacenar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [monto, setMonto] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Llamada al contrato inteligente para enviar los datos y realizar la transacción
    // await contratoInteligente.registrarPrestamista(nombre, direccion, monto, tasaInteres);
    // La llamada podría requerir el uso de una biblioteca como web3.js para interactuar con la blockchain
    // Después de enviar la transacción,  reiniciar los estados del formulario
    setNombre('');
    setDireccion('');
    setMonto(0);
    setTasaInteres(0);
    // Mostrar un mensaje de éxito o error al usuario según la respuesta de la transacción
  };

  return (
    <div>
      <h2>Registro de Prestamista</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Dirección:
          <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        </label>
        <br />
        <label>
          Monto a Prestar:
          <input type="number" value={monto} onChange={(e) => setMonto(parseFloat(e.target.value))} />
        </label>
        <br />
        <label>
          Tasa de Interés (%):
          <input type="number" value={tasaInteres} onChange={(e) => setTasaInteres(parseFloat(e.target.value))} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AltaPrestamista;
