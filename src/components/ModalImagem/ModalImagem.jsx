import React from 'react';
import './ModalImagem.css';

const ModalImagem = ({ imagem, aoFechar }) => {
  if (!imagem) return null;

  return (
    <div className="fundo-modal" onClick={aoFechar}>
      <div className="conteudo-modal" onClick={e => e.stopPropagation()}>
        <button className="botao-fechar" onClick={aoFechar}>×</button>
        <img src={imagem.url} alt={imagem.titulo} className="imagem-modal" />
        <div className="info-modal">
          <h2>{imagem.titulo}</h2>
          <p><strong>Dimensões:</strong> {imagem.largura}x{imagem.altura}px</p>
          <p><strong>Tags:</strong> {imagem.tags.join(', ')}</p>
          <p><strong>Descrição:</strong> {imagem.descricao}</p>
          <div className="autor">
            <img src={imagem.autor.avatar} alt={imagem.autor.nome} className="avatar" />
            <span>{imagem.autor.nome}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImagem;
