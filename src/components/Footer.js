import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Navbar.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer  className="footer-container">

      <div className="copyright">{t('copyright')}</div>
      <div className="social-links">
      {t('find')}
        <a href="https://www.facebook.com">{t('facebook')} </a>
        <a href="https://www.instagram.com">{t('instagram')}</a>
        <a href="https://www.twitter.com">{t('twitter')}</a>
      </div>

    </footer>




  );
}

export default Footer;

