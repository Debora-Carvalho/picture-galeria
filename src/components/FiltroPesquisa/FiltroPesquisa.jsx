import React, { useState, useEffect, useRef } from 'react';
import { FiFilter, FiUser, FiCamera, FiCoffee } from "react-icons/fi";
import './FiltroPesquisa.css';
import { LuCat } from 'react-icons/lu';
import { PiPlant, PiCube } from 'react-icons/pi';

const coresDisponiveis = [
    { nome: "preto", emoji: "🖤" },
    { nome: "branco", emoji: "🤍" },
    { nome: "cinza", emoji: "🩶" },
    { nome: "marrom", emoji: "🤎" },
    { nome: "vermelho", emoji: "❤️" },
    { nome: "azul", emoji: "💙" },
    { nome: "verde", emoji: "💚" },
    { nome: "laranja", emoji: "🧡" },
    { nome: "amarelo", emoji: "💛" },
    { nome: "roxo", emoji: "💜" },
    { nome: "rosa", emoji: "🩷" },
];

const categoriasDisponiveis = [
    { nome: "pessoa", icone: <FiUser /> },
    { nome: "animal", icone: <LuCat /> },
    { nome: "plantas", icone: <PiPlant /> },
    { nome: "paisagem", icone: <FiCamera /> },
    { nome: "alimento", icone: <FiCoffee /> },
    { nome: "objeto", icone: <PiCube /> },
];

const FiltroPesquisa = ({ categoriaSelecionada, setCategoria, corSelecionada, setCor }) => {
    const [mostrarDropdown, setMostrarDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setMostrarDropdown(prev => !prev);

    const selecionarCategoria = (nome) => setCategoria(nome);
    const selecionarCor = (cor) => setCor(cor === corSelecionada ? '' : cor);

    const limparFiltros = () => {
        setCategoria('');
        setCor('');
    };

    // fecha dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMostrarDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="container-filtro" ref={dropdownRef}>
            <FiFilter className="container-filtro__icon" onClick={toggleDropdown} />

            {mostrarDropdown && (
                <div className="dropdown-filtro">
                    <div className="filtro-section">
                        <label className='filtro_section__label'>Categoria</label>
                        <div className="categorias-opcoes">
                            <div
                                className={`categoria-opcao ${categoriaSelecionada === '' ? 'selecionada' : ''}`}
                                onClick={() => selecionarCategoria('')}
                            >
                                Todas
                            </div>
                            {categoriasDisponiveis.map(({ nome, icone }) => (
                                <div
                                    key={nome}
                                    className={`categoria-opcao ${categoriaSelecionada === nome ? 'selecionada' : ''}`}
                                    onClick={() => selecionarCategoria(nome)}
                                >
                                    <span className="icone-categoria">{icone}</span>
                                    {nome}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="filtro-section">
                        <label className='filtro_section__label'>Cor</label>
                        <div className="cores-opcoes">
                            {coresDisponiveis.map(({ nome, emoji }) => (
                                <div
                                    key={nome}
                                    className={`cor-item ${corSelecionada === nome ? 'selecionado' : ''}`}
                                    onClick={() => selecionarCor(nome)}
                                >
                                    <span>{emoji} {nome}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="botao-limpar-filtros" onClick={limparFiltros}>
                        Limpar filtros
                    </button>
                </div>
            )}
        </div>
    );
};

export default FiltroPesquisa;
