// src/componentes/Galeria.jsx
import React, { useState, useEffect } from 'react';
import ImagemCard from '../../components/ImagemCard/ImagemCard.jsx';
import './Galeria.css';
import imagensJson from '../../json/db-imagens.json';

function Galeria ({ aoClicar }) {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    setImagens(imagensJson);
  }, []);

  return (
    <div className="grade-galeria">
      {imagens.map(imagem => (
        <ImagemCard key={imagem.id} imagem={imagem} aoClicar={aoClicar} />
      ))}
    </div>
  );
};

export default Galeria;
