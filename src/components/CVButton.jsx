import { useEffect, useRef, useState } from 'react';
import { FaDownload, FaChevronDown } from 'react-icons/fa';
import CV_Eng from '../files/CV_Rostyslav_Symonenko_Eng.pdf';
import CV_Ukr from '../files/CV_Rostyslav_Symonenko_Ukr.pdf';
import './CVButton.css';
import { useTranslation } from 'react-i18next';

function CVButton() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div className="cv-dropdown" ref={rootRef}>
      <button
        type="button"
        className="btn btn-outline"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="i18n-text">{t('Button2')}</span>
        <FaChevronDown style={{ fontSize: '0.65em', marginLeft: '0.5rem' }} />
      </button>
      {open && (
        <div className="cv-menu" role="menu">
          <a
            href={CV_Eng}
            className="cv-menu-item"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span className="i18n-text">{t('CVLang1')}</span>
            <FaDownload />
          </a>
          <a
            href={CV_Ukr}
            className="cv-menu-item"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span className="i18n-text">{t('CVLang2')}</span>
            <FaDownload />
          </a>
        </div>
      )}
    </div>
  );
}

export default CVButton;
