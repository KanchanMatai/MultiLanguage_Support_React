import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
 
    <div className = "mx-4 mt-3" style ={{textAlign:"justify"}}>
      <h1>{t('home')}</h1>
      <p>{t('welcomeMessage')}</p>
 
    </div>
  
  );
}

export default Home;

