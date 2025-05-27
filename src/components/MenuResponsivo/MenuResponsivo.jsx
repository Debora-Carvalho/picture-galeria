import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuResponsivo.css';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { HiBars3 } from "react-icons/hi2";
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { ImPinterest2 } from "react-icons/im";
import { RiCloseLargeFill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

function MenuResponsivo () {
    const navigate = useNavigate();
      
    const rotas = {
        'Galeria': '/galeria',
        'Paleta mágica': '/extrair-paleta',
        'Login': '/login',
        'Cadastro': '/cadastro',
    };

    const [openMenu, setOpenMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="container-menu-responsivo">
                <HiBars3 
                    title='Abrir o menu'
                    className="container-menu-responsivo__icon" 
                    onClick={() => setOpenMenu(true)} 
                />
            </div>

            <Drawer 
                open={openMenu} 
                onClose={(() => setOpenMenu(false))} 
                anchor="right"
                PaperProps={{
                    sx: {
                        borderTopLeftRadius: '20px',
                        borderBottomLeftRadius: '20px',
                        backgroundColor: '#ffd9d9',
                        boxShadow: 3,
                    }
                }}           
            >
                <Box
                    sx={{ width: 700}}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                    className='container-menu-responsivo-aberta'
                >
                    
                    <div className='menu-responsivo'>
                        <div className={`container-menu-responsivo-items ${isOpen ? 'open' : ''}`}>
                            <div className="menu-responsivo-cabecalho">
                                <RiCloseLargeFill className='menu-responsivo-fechar__icon'/>
                                <p className='menu-responsivo-cabecalho__texto' onClick={() => navigate('/')}>
                                    Picture
                                </p>
                            </div>

                            <div className="menu-responsivo-items">
                            {Object.entries(rotas).map(([nome, rota], index) => (
                                <button
                                className="btn-menu-responsivo"
                                key={index}
                                onClick={() => navigate(rota)}
                                >
                                <BsStars className="estrela-hover" />
                                <span className="texto-botao">{nome}</span>
                                <BsStars className="estrela-hover" />
                                </button>
                            ))}
                            </div>

                            <div className="menu-responsivo-footer">
                                <a href="#" className="btn-menu-responsivo-footer" title='Facebook'>
                                    <FiFacebook className='btn-menu-responsivo-footer__icon' alt='Ícone do Facebook'/>
                                </a>

                                <a href="#" className="btn-menu-responsivo-footer" title='Pinterest'>
                                    <ImPinterest2 className='btn-menu-responsivo-footer__icon' alt='Ícone do Pinterest'/>
                                </a>

                                <a href="#" className="btn-menu-responsivo-footer" title='Instagram'>
                                    <FiInstagram className='btn-menu-responsivo-footer__icon' alt='Ícone do Instagram'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </nav>
    );
};

export default MenuResponsivo;