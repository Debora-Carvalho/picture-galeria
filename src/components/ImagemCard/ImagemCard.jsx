import React from 'react';
import './ImagemCard.css';

function ImagemCard({ imagem, aoClicar }) {
  return (
    <div className="cartao-imagem" onClick={() => aoClicar(imagem)}>
      <div className="imagem-wrapper">
        <img src={imagem.url} alt={imagem.titulo} />

        <div className="legenda">
          <h3>{imagem.titulo}</h3>
          <p>{imagem.largura}x{imagem.altura}px</p>
        </div>
        
      </div>
    </div>
  );
}

export default ImagemCard;
