import React, { useState } from 'react';
import './BarraPesquisa.css';

const BarraPesquisa = ({ valor, aoMudar, sugestões, aoSelecionar }) => {
  const [mostrarSugestoes, setMostrarSugestoes] = useState(false);

  const tratarMudanca = (e) => {
    aoMudar(e.target.value);
    setMostrarSugestoes(true);
  };

  const selecionarSugestao = (sugestao) => {
    aoSelecionar(sugestao);
    setMostrarSugestoes(false);
  };

  return (
    <div className="barra-pesquisa-container" onBlur={() => setTimeout(() => setMostrarSugestoes(false), 150)}>
      <input
        type="text"
        placeholder="Buscar por título ou tags..."
        value={valor}
        onChange={tratarMudanca}
        onFocus={() => setMostrarSugestoes(true)}
        className="input-pesquisa"
      />
      {mostrarSugestoes && sugestões.length > 0 && (
        <ul className="lista-sugestoes">
          {sugestões.map((item, i) => (
            <li key={i} onClick={() => selecionarSugestao(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BarraPesquisa;
