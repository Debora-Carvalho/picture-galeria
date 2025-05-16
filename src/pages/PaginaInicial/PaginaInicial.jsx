import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const navigate = useNavigate();

  return (
    <div className="pagina-inicial">
      <div className="conteudo">
        <h1>🌸 Bem-vinda à Galeria Viva</h1>
        <p>Descubra imagens encantadoras com filtros inteligentes e visualização detalhada.</p>
        <button className="botao-explorar" onClick={() => navigate('/galeria')}>
          Explorar Galeria
        </button>
      </div>
    </div>
  );
};

export default PaginaInicial;
