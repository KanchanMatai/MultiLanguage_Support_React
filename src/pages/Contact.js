import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className = "mx-4 mt-3" style ={{textAlign:"justify"}}>
      <h1>{t('contact')}</h1>
      <p>{t('contactInfo')}</p>
    </div>
  );
}

export default Contact;
