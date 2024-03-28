import React, { useState } from 'react';

const AltaCliente = () => {
  // Estados para almacenar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [montoSolicitado, setMontoSolicitado] = useState(0);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Llamada al contrato inteligente para enviar los datos y realizar la transacción
    // await contratoInteligente.registrarCliente(nombre, direccion, montoSolicitado);
    // esta llamada puede requerir el uso de una biblioteca como web3.js para interactuar con la blockchain
    // Después de enviar la transacción, reiniciar los estados del formulario
    setNombre('');
    setDireccion('');
    setMontoSolicitado(0);
    //  mensaje de éxito o error al usuario según la respuesta de la transacción
  };

  return (
    <div>
      <h2>Registro de Cliente</h2>
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
          Monto Solicitado:
          <input type="number" value={montoSolicitado} onChange={(e) => setMontoSolicitado(parseFloat(e.target.value))} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AltaCliente;
