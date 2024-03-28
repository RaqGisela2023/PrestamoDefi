import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-sm mb-4 lg:mb-0">
            <p className="mb-2">Información adicional sobre la aplicación.</p>
            <p>Enlaces de contacto: correo electrónico, redes sociales, etc.</p>
          </div>
          <div className="text-sm">
            <ul className="flex flex-wrap">
              <li className="mr-4 mb-2"><a className="text-blue-600 hover:text-blue-800 transition duration-300" href="/politica-de-privacidad">Política de privacidad</a></li>
              <li className="mr-4 mb-2"><a className="text-blue-600 hover:text-blue-800 transition duration-300" href="/terminos-y-condiciones">Términos y condiciones</a></li>
              <li className="mr-4 mb-2"><a className="text-blue-600 hover:text-blue-800 transition duration-300" href="/aviso-legal">Aviso legal</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
