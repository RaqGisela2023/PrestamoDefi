import React, { useState } from 'react';

const DepositarGarantia = ({ contratoInteligente, usuario }) => {
  // Estado para almacenar la cantidad de garantía a depositar
  const [cantidadGarantia, setCantidadGarantia] = useState(0);

  // Función para manejar el envío de garantía al contrato
  const handleDeposito = async () => {
    try {
      // Convertir la cantidad de garantía a Wei (la unidad más pequeña de Ether)
      const cantidadWei = cantidadGarantia * 10**18;
      // Llamar a la función del contrato para depositar garantía
      await contratoInteligente.depositarGarantia({ from: usuario, value: cantidadWei });
      // Actualizar el estado del usuario u otra lógica según corresponda
      // mostrar un mensaje de éxito
      console.log('Garantía depositada con éxito');
    } catch (error) {
      // Manejar errores
      console.error('Error al depositar garantía:', error);
    }
  };

  return (
    <div>
      <h2>Depositar Garantía</h2>
      <label>
        Cantidad de Garantía (en ETH):
        <input 
          type="number" 
          value={cantidadGarantia} 
          onChange={(e) => setCantidadGarantia(parseFloat(e.target.value))} 
        />
      </label>
      <br />
      <button onClick={handleDeposito}>Depositar</button>
    </div>
  );
};

export default DepositarGarantia;
