import React, { useState, useRef, useEffect } from 'react';
import './PaginaExtrairPaleta.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import ExtrairPaleta from '../../components/ExtrairPaleta/ExtrairPaleta.jsx';

function PaginaExtrairPaleta() {
    const navigate = useNavigate();

    return (
        <div className='container-pagina-extrair'>
            <div className="container-pagina-extrair-cabecalho">
                <div className="container-pagina-extrair-logo">
                    <p className='container-pagina-extrair-logo__texto' onClick={() => navigate('/')}>
                        Picture
                    </p>
                </div>

                <div className="container-pagina-extrair-botoes">
                    <button className="pagina-extrair-botoes-galeria" onClick={() => navigate('/galeria')}>
                        Extrair
                    </button>
                    <button className="pagina-extrair-botoes-login">Login</button>
                    <button className="pagina-extrair-botoes-cadastro">Cadastro</button>
                </div>
            </div>

            <div className='container-pagina-extrair-footer__extrator'>
                <ExtrairPaleta />
            </div>
            <div className="container-pagina-extrair-footer">
                <h1 className='container-pagina-extrair-footer__logo' onClick={() => navigate('/')}>
                    Picture
                </h1>
                <Footer />
            </div>
        </div>
    );
};

export default PaginaExtrairPaleta;