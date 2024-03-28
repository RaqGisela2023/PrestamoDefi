import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion'; // Importar animaciones de Framer Motion
import './AppLayout.css'; // Importar estilos CSS para el diseño avanzado

const AppLayout = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} // Animación de entrada inicial
      animate={{ opacity: 1, y: 0 }} // Animación al estar en la pantalla
      exit={{ opacity: 0, y: -20 }} // Animación al salir de la pantalla
      transition={{ duration: 0.5 }} // Duración de la animación
      className="app-layout"
    >
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

export default AppLayout;

