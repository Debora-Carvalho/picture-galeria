import React, { useState, useRef, useEffect } from 'react';
import ColorThief from 'colorthief';
import './ExtrairPaleta.css';

function ExtrairPaleta() {
    const [imagem, setImagem] = useState(null);
    const [paleta, setPaleta] = useState([]);
    const [copiadoTexto, setCopiadoTexto] = useState('');
    const [copiadoIndex, setCopiadoIndex] = useState(null);
    const imgRef = useRef();

    const handleUpload = (file) => {
        setImagem(URL.createObjectURL(file));
        setPaleta([]);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) handleUpload(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) handleUpload(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const copiarTexto = (texto, index) => {
        navigator.clipboard.writeText(texto);
        setCopiadoTexto(texto);
        setCopiadoIndex(index);
        setTimeout(() => {
            setCopiadoTexto('');
            setCopiadoIndex(null);
        }, 1500);
    };

    useEffect(() => {
        if (imgRef.current && imagem) {
            imgRef.current.onload = () => {
                const colorThief = new ColorThief();
                const cores = colorThief.getPalette(imgRef.current, 10); // até 10 cores
                setPaleta(cores);
            };
        }
    }, [imagem]);

    return (
        <div className="container-paleta">
            <h2 className='container-paleta__titulo'>
                Paleta Mágica
            </h2>

            <p className='container-paleta__texto'>
                A ferramenta Paleta Mágica permite extrair a paleta de cores contida em uma imagem.
                Você pode arrastar uma imagem para a caixa abaixo ou seleciona-la de seu computador.
                Copie o código da cor em <strong>RGB</strong> e <strong>HEX</strong> ao clicar no código abaixo da caixa de cor.
            </p>

            <div
                className="upload-area"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <p className='upload-area__texto'>
                    Arraste uma imagem para cá ou clique para selecionar
                </p>
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>

            {imagem && (
                <img
                    ref={imgRef}
                    src={imagem}
                    alt="Preview"
                    crossOrigin="anonymous"
                    className="imagem-preview"
                />
            )}

            {paleta.length > 0 && (
                <div className="paleta-grid">
                    {paleta.map((cor, index) => {
                        const rgb = `rgb(${cor.join(',')})`;
                        const hex = `#${cor.map(c => c.toString(16).padStart(2, '0')).join('')}`;

                        return (
                            <div key={index} className="cor-bloco">
                                <div
                                    className="cor-preview"
                                    style={{ backgroundColor: rgb }}
                                />
                                <p onClick={() => copiarTexto(rgb, index)}>{rgb}</p>
                                <p onClick={() => copiarTexto(hex, index)}>{hex}</p>
                                {copiadoIndex === index && copiadoTexto && (
                                    <div className="copiado-tooltip">Código copiado!</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default ExtrairPaleta;
