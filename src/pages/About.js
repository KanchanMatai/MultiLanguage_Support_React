import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className = "mx-4 mt-2" style ={{textAlign:"justify"}}>
      <h1>{t('about')}</h1>
      <p>{t('aboutUsText')}</p>
    </div>
  );
}

export default About;

