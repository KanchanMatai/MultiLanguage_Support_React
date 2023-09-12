import {React, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import '../Navbar.css';
import CountryFlag from 'react-country-flag';
function Navbar() {
  const { t, i18n } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }

  useEffect(() => {
    i18n.changeLanguage('en'); 
  }, []);

  return (

    <nav>
      <ul>
        <li><a href="/">{t('Home')}</a></li>
        <li><a href="/about">{t('About')}</a></li>
        <li><a href="/contact">{t('Contact')}</a></li>
        <li className="dropdown">
          <a href="javascript:void(0);" className="dropbtn">{t('Language')}</a>
          <div className="dropdown-content">
            <a href="#" onClick={() => changeLanguage('en')}>
            {t('English')}
              <CountryFlag countryCode="US" svg /></a>
            <a href="#" onClick={() => changeLanguage('hi')}>
            {t('Hindi')}
              <CountryFlag countryCode="IN" svg /> </a>
            <a href="#" onClick={() => changeLanguage('fr')}>
            {t('French')}
              <CountryFlag countryCode="FR" svg /></a>
          </div>
        </li>
      </ul>
    </nav>
  

  );
}

export default Navbar;


