import React from 'react';

import logo from '/imgs/logo.png'

const Header = () => {
  function handleClick(e: React.MouseEvent<HTMLElement>, id: string) {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header>
      <img src={logo} alt={logo} />
      <nav aria-label="Botões de navegação">
        <ul className='text__section-categories'>
          <li onClick={e => handleClick(e, '301')} className='nav__button' role='button' aria-label="Cobertura Duplex 301">
            <span className="material-symbols-outlined">roofing</span>
            Cobertura Duplex 301
          </li>
          <li onClick={e => handleClick(e, '203')} className='nav__button' role='button' aria-label="Apartamento Tipo 203">
            <span className="material-symbols-outlined">bed</span>
            Apartamento Tipo 203
          </li>
          <li onClick={e => handleClick(e, 'condominio')} className='nav__button' role='button' aria-label="Condomínio">
            <span className="material-symbols-outlined">apartment</span>
              Condomínio
          </li>
          <li onClick={e => handleClick(e, 'contato')} className='nav__button' role='button' aria-label="Contato">
            <span className="material-symbols-outlined">call</span>
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;