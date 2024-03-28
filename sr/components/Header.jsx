import React from 'react';
import Navbar from './Navbar'; // Importar el componente Navbar
import ConnectKitButton from './ConnectKitButton'; // Importar el botón de conexión de la wallet

const Header = ({ onConnectWallet }) => {
  return (
    <header className="bg-white border-b shadow-xs">
      <div className="container mx-auto px-4 py-2 sm:py-4 flex justify-between items-center">
        {/* Logo para versión mobile */}
        <img src=".png" alt="blockmaker-logo" width={47} className="sm:hidden" />
        {/* Logo para versión desktop */}
        <img src="/blockmaker-full-logo.png" alt="blockmaker-logo" width={300} className="hidden sm:block" />
        {/* Botón de conexión de la wallet */}
        <ConnectKitButton showBalance={true} />
        <h1 className="text-xl font-semibold">Nombre de la Aplicación</h1>
      </div>
      <div className="container mx-auto px-4 py-2">
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <p className="text-sm text-gray-600">Información clave sobre la aplicación.</p>
        </div>
      </div>
      {/* Botón de conexión de la wallet (alternativa) */}
      <div className="container mx-auto px-4 py-2">
        <button onClick={onConnectWallet} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300">Conectar Wallet</button>
      </div>
      <Navbar /> {/* Integración del componente Navbar */}
    </header>
  );
};

export default Header;





  
