import React, { useRef, useState } from 'react';
import flagEN from '../assets/flagEN.svg';
import flagUA from '../assets/flagUA.svg';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const FADE_OUT_MS = 200;

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');
  const timeoutRef = useRef(null);

  const handleSelect = (lang) => {
    if (lang === selectedLanguage) return;

    const root = document.getElementById('root');
    setSelectedLanguage(lang);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // 1. fade the page content out
    root?.classList.add('i18n-fade-out');

    timeoutRef.current = window.setTimeout(async () => {
      // 2. swap the text while it's invisible
      await i18n.changeLanguage(lang);

      // 3. wait a frame so React has painted the new text, then fade it back in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root?.classList.remove('i18n-fade-out');
        });
      });
    }, FADE_OUT_MS);
  };

  return (
    <div className={`language-selector lang-${selectedLanguage}`}>
      <span className="lang-indicator" aria-hidden="true" />
      <button
        className={`flag-button ${selectedLanguage === 'en' ? 'active' : 'inactive'}`}
        onClick={() => handleSelect('en')}
        aria-label="English"
        aria-pressed={selectedLanguage === 'en'}
      >
        <img src={flagEN} alt="" className="flag-icon" />
      </button>
      <button
        className={`flag-button ${selectedLanguage === 'ua' ? 'active' : 'inactive'}`}
        onClick={() => handleSelect('ua')}
        aria-label="Ukrainian"
        aria-pressed={selectedLanguage === 'ua'}
      >
        <img src={flagUA} alt="" className="flag-icon" />
      </button>
    </div>
  );
}

export default LanguageSelector;
