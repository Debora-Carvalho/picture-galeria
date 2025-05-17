import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaginaInicial.css';
import { TbPhotoSpark } from 'react-icons/tb';

const PaginaInicial = () => {
  const navigate = useNavigate();

    return (
        <div className="pagina-inicial">
            <div className="pagina-inicial-conteudo">
                <h1 className='pagina-inicial-conteudo__titulo'>Picture</h1>

                <p className='pagina-inicial-conteudo__texto'>
                    encontre a imagem perfeita
                </p>
                
                <button className="btn-explorar" onClick={() => navigate('/galeria')}>
                    Explorar galeria
                    <TbPhotoSpark className='btn-explorar__icon'/>
                </button>
            </div>
        </div>
    );
};

export default PaginaInicial;
