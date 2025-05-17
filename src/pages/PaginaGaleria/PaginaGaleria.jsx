import React, { useState, useEffect } from 'react';
import './PaginaGaleria.css';
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa.jsx';
import Galeria from '../../components/Galeria/Galeria.jsx';
import ModalImagem from '../../components/ModalImagem/ModalImagem.jsx';
import dadosImagens from '../../json/db-imagens.json';
import FiltroPesquisa from '../../components/FiltroPesquisa/FiltroPesquisa.jsx';

function PaginaGaleria() {
    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    const [busca, setBusca] = useState('');
    const [categoriaFiltro, setCategoriaFiltro] = useState('');
    const [corFiltro, setCorFiltro] = useState('');
    const [imagensFiltradas, setImagensFiltradas] = useState(dadosImagens);
    const [sugestoes, setSugestoes] = useState([]);

    useEffect(() => {
        const buscaLower = busca.trim().toLowerCase();

        const filtro = dadosImagens.filter((imagem) => {
        const titulo = imagem.titulo?.toLowerCase() || '';
        const categoria = imagem.categoria?.toLowerCase() || '';
        const cores = Array.isArray(imagem.cores) ? imagem.cores.map(c => c.toLowerCase()) : [];
        const tags = Array.isArray(imagem.palavrasChave) ? imagem.palavrasChave.map(t => t.toLowerCase()) : [];

        const correspondeBusca =
        !buscaLower ||
        titulo.includes(buscaLower) ||
        categoria.includes(buscaLower) ||
        cores.some(cor => cor.includes(buscaLower)) ||
        tags.some(tag => tag.includes(buscaLower));

        const correspondeCategoria = !categoriaFiltro || categoria === categoriaFiltro.toLowerCase();
        const correspondeCor = !corFiltro || cores.includes(corFiltro.toLowerCase());

        return correspondeBusca && correspondeCategoria && correspondeCor;
    });

    setImagensFiltradas(filtro);

    const titulos = dadosImagens.map((img) => img.titulo).filter(Boolean);
    const categorias = dadosImagens.map((img) => img.categoria).filter(Boolean);

    const cores = dadosImagens.flatMap((img) => Array.isArray(img.cores) ? img.cores : []).filter(Boolean);
    const tags = dadosImagens
      .flatMap((img) =>
        Array.isArray(img.palavrasChave) ? img.palavrasChave : []
      )
      .filter(Boolean);

    const tudo = [...titulos, ...categorias, ...cores, ...tags];
    const sugestoesFiltradas = tudo.filter((item) =>
      item.toLowerCase().includes(buscaLower)
    );

    const sugestoesUnicas = [...new Set(sugestoesFiltradas)].slice(0, 10);
    setSugestoes(sugestoesUnicas);
  }, [busca, categoriaFiltro, corFiltro]);

  const aoSelecionarSugestao = (sugestao) => {
    setBusca(sugestao);
  };

  const aoPesquisar = () => {
    setBusca((prevBusca) => prevBusca);
  };

    return (
    <>
        <div className="container-galeria-filtros">
            <BarraPesquisa
                className='galeria-filtros-busca'
                valor={busca}
                aoMudar={setBusca}
                sugestões={sugestoes}
                aoSelecionar={aoSelecionarSugestao}
                aoPesquisar={aoPesquisar}
            />

            <FiltroPesquisa
                categoriaSelecionada={categoriaFiltro}
                setCategoria={setCategoriaFiltro}
                corSelecionada={corFiltro}
                setCor={setCorFiltro}
            />
        </div>

    {imagensFiltradas.length > 0 ? (
        <Galeria imagens={imagensFiltradas} aoClicar={setImagemSelecionada} />
    ) : (
        <p className='resultado-nao-encontrado__texto'>
        Nenhuma imagem encontrada.
        </p>
    )}
        <ModalImagem imagem={imagemSelecionada} aoFechar={() => setImagemSelecionada(null)} />
    </>
    );
}

export default PaginaGaleria;
