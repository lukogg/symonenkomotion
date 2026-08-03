import { useTranslation } from 'react-i18next';
import { FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

import "./Footer.css"
import links from '../assets/links.json'

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-ruler" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-cta">
          <h2 className="footer-cta-title i18n-text">{t('FooterCTA')}</h2>
          <p className="footer-cta-sub i18n-text">{t('FooterCTASub')}</p>
        </div>

        <div className="footer-links">
          <a
            href={links['Telegram-footer-link']}
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
            <span className="i18n-text">{t('Telegram')}</span>
          </a>
          <a href={`mailto:${links['Email']}`} className="footer-link">
            <FaEnvelope />
            <span className="i18n-text">{t('Email')}</span>
          </a>
        </div>

        <p className="footer-meta">Kyiv, Ukraine</p>
      </div>
    </footer>
  );
}

export default Footer;
