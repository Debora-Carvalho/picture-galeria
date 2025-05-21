import React, { useState } from 'react';
import './BarraPesquisa.css';
import { FiSearch, FiX } from "react-icons/fi"; // icones

const BarraPesquisa = ({ valor, aoMudar, sugestões, aoSelecionar, aoPesquisar }) => {
    const [mostrarSugestoes, setMostrarSugestoes] = useState(false);

    const tratarMudanca = (e) => {
        aoMudar(e.target.value);
        setMostrarSugestoes(true);
    };

    const pressionarEnter = (e) => {
        if (e.key === 'Enter') {
            aoPesquisar(); // 👈 dispara pesquisa
            setMostrarSugestoes(false);
        }
    };

    const selecionarSugestao = (sugestao) => {
        aoSelecionar(sugestao);
        setMostrarSugestoes(false);
    };

    const limparCampo = () => {
        aoMudar('');
        setMostrarSugestoes(false);
        aoPesquisar(); // força reset da busca
    };

    return (
        <div className="barra-pesquisa-container" onBlur={() => setTimeout(() => setMostrarSugestoes(false), 150)}>
            <div className="campo-input-wrapper">
                <FiSearch className="icone-pesquisa" onClick={aoPesquisar} />
                <input
                    type="text"
                    placeholder="Buscar uma imagem..."
                    value={valor}
                    onChange={tratarMudanca}
                    onKeyDown={pressionarEnter}
                    onFocus={() => setMostrarSugestoes(true)}
                    className="input-pesquisa"
                />
                {valor && <FiX className="icone-limpar" onClick={limparCampo} />}
            </div>

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
