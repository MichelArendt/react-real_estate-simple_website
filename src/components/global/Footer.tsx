import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id='contato' aria-labelledby='footer__title-h1'>
      <div className="footer__title">
        <h1 id='footer__title-h1'>Contato</h1>
      </div>

      <div className='footer__content-container' aria-labell='Corretor'>
        <div className='footer__item'>
          <span className="material-symbols-outlined">
            person
          </span>
          <span>
            Person Name
          </span>
        </div>

        <a href='https://wa.link/6zz6wv' className='footer__item' aria-labell='Telefone'>
          <span className="material-symbols-outlined">
            perm_phone_msg
          </span>
          <span>
            (55) 5-5555-5555
          </span>
        </a>

        <div className='footer__item' aria-labell='CRECI'>
          <span className="material-symbols-outlined">
            real_estate_agent
          </span>
          <span>
            CRECI XXXXX F
          </span>
        </div>
      </div>
    </footer>
  )
};

export default Footer;