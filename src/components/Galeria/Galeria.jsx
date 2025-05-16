import React from 'react';
import ImagemCard from '../../components/ImagemCard/ImagemCard.jsx';
import './Galeria.css';

function Galeria({ imagens, aoClicar }) {
  return (
    <div className="grade-galeria">
      {imagens.map(imagem => (
        <ImagemCard key={imagem.id} imagem={imagem} aoClicar={aoClicar} />
      ))}
    </div>
  );
}

export default Galeria;
