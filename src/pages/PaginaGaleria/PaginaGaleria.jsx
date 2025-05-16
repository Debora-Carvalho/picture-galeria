import React, { useState, useEffect } from 'react';
import './PaginaGaleria.css';
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa.jsx';
import Galeria from '../../components/Galeria/Galeria.jsx';
import ModalImagem from '../../components/ModalImagem/ModalImagem.jsx';
import dadosImagens from '../../json/db-imagens.json';

function PaginaGaleria () {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [busca, setBusca] = useState('');
  const [imagensFiltradas, setImagensFiltradas] = useState(dadosImagens);
  const [sugestoes, setSugestoes] = useState([]);

  useEffect(() => {
    if (busca.trim() === '') {
      setImagensFiltradas(dadosImagens);
      setSugestoes([]);
      return;
    }

    const filtro = dadosImagens.filter(imagem => {
        const buscaLower = busca.toLowerCase();

        const titulo = imagem.titulo ? imagem.titulo.toLowerCase() : '';
        const palavras = Array.isArray(imagem.palavrasChave)
            ? imagem.palavrasChave.map(chave => chave.toLowerCase())
            : [];

        return (
            titulo.includes(buscaLower) ||
            palavras.some(chave => chave.includes(buscaLower))
        );
    });

    setImagensFiltradas(filtro);

    // Montar sugestões únicas (pode ser títulos e palavras-chave)
    const titulos = dadosImagens
    .map(img => img.titulo)
    .filter(Boolean);

    const palavras = dadosImagens
    .flatMap(img => Array.isArray(img.palavrasChave) ? img.palavrasChave : [])
    .filter(Boolean);

    const tudo = [...titulos, ...palavras];

    // Filtrar itens que contenham o texto da busca
    const filtradoSugestoes = tudo.filter(item =>
      item.toLowerCase().includes(busca.toLowerCase())
    );

    // Deixar único e limitar a 10 sugestões
    const unico = [...new Set(filtradoSugestoes)].slice(0, 10);
    setSugestoes(unico);

  }, [busca]);

  // Quando usuário clica na sugestão, ajusta o valor da busca para ela
  const aoSelecionarSugestao = (sugestao) => {
    setBusca(sugestao);
  };

  return (
    <>
      <BarraPesquisa 
        valor={busca} 
        aoMudar={setBusca} 
        sugestões={sugestoes} 
        aoSelecionar={aoSelecionarSugestao} 
      />
      <Galeria imagens={imagensFiltradas} aoClicar={setImagemSelecionada} />
      <ModalImagem imagem={imagemSelecionada} aoFechar={() => setImagemSelecionada(null)} />
    </>
  );
};

export default PaginaGaleria;

