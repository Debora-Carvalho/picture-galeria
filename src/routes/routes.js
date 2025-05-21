import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from '../../src/pages/PaginaInicial/PaginaInicial.jsx';
import PaginaGaleria from '../../src/pages/PaginaGaleria/PaginaGaleria.jsx';
import PaginaExtrairPaleta from '../../src/pages/PaginaExtrairPaleta/PaginaExtrairPaleta.jsx';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/galeria" element={<PaginaGaleria />} />
        <Route path="/extrair-paleta" element={<PaginaExtrairPaleta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
