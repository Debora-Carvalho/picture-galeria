import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Picture. Todos os direitos reservados.
        Desenvolvido com 🤍 por&nbsp;
        <a href="https://github.com/Debora-Carvalho" target="_blank" rel="noopener noreferrer">
            Débora Carvalho
        </a>
      </p>
    </footer>
  );
}

export default Footer;