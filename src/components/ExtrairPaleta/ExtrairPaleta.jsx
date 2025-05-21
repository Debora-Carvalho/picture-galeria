import React, { useState, useRef, useEffect } from 'react';
import ColorThief from 'colorthief';

function ExtrairPaleta () {
  const [imagem, setImagem] = useState(null);
  const [corDominante, setCorDominante] = useState(null);
  const imgRef = useRef();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(URL.createObjectURL(file));
      setCorDominante(null); // resetar cor
    }
  };

  useEffect(() => {
    if (imgRef.current && imagem) {
      imgRef.current.onload = () => {
        const colorThief = new ColorThief();
        const cor = colorThief.getColor(imgRef.current);
        setCorDominante(cor);
      };
    }
  }, [imagem]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Extração de Cor Dominante</h2>
      <input type="file" accept="image/*" onChange={handleUpload} />

      {imagem && (
        <>
          <img
            ref={imgRef}
            src={imagem}
            alt="Preview"
            crossOrigin="anonymous"
            style={{ maxWidth: '300px', marginTop: '1rem' }}
          />
          {corDominante && (
            <div style={{ marginTop: '1rem' }}>
              <strong>Cor dominante:</strong>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: `rgb(${corDominante.join(',')})`,
                  border: '1px solid #000',
                  marginTop: '0.5rem',
                }}
              />
              <p>RGB: {`rgb(${corDominante.join(',')})`}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExtrairPaleta;
