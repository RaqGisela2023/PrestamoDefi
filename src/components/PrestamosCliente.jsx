import React from 'react';

const PrestamosCliente = ({ prestamos }) => {
  return (
    <div>
      <h2>Estado de Préstamos</h2>
      <table>
        <thead>
          <tr>
            <th>Monto</th>
            <th>Plazo</th>
            <th>Estado de Aprobación</th>
            <th>Estado de Reembolso</th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map((prestamo, index) => (
            <tr key={index}>
              <td>{prestamo.monto}</td>
              <td>{prestamo.plazo}</td>
              <td>{prestamo.aprobado ? 'Aprobado' : 'Pendiente'}</td>
              <td>{prestamo.reembolsado ? 'Reembolsado' : 'Pendiente'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrestamosCliente;
