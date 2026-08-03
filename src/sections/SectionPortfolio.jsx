import './Sections.css';

import React from 'react';
import ContentCard from '../components/ContentCard.jsx';
import { useTranslation } from 'react-i18next';

import links from '../assets/links.json'

function SectionPortfolio() {
  const { t } = useTranslation();

  return (
    <div className="section-portfolio" id="portfolio">
      <h2 className="portfolio-heading i18n-text">{t('PortfolioTitleMain')}</h2>

      <section className="reel" aria-labelledby="reel-promo">
        <div className="reel-header">
          <span className="reel-eyebrow i18n-text">{t('ReelEyebrow1')}</span>
          <h3 id="reel-promo" className="reel-title i18n-text">{t('PortfolioTitlePromo')}</h3>
        </div>
        <div className="card-container">
          <ContentCard id="1" className="card contentcard-promo" href={links['Promo2.0-yt']} />
          <ContentCard id="2" className="card contentcard-promo" href={links['Promo2.1-yt']} />
          <ContentCard id="3" className="card contentcard-promo" href={links['Promo2.2-yt']} />
        </div>
      </section>

      <section className="reel" aria-labelledby="reel-loop">
        <div className="reel-header">
          <span className="reel-eyebrow i18n-text">{t('ReelEyebrow2')}</span>
          <h3 id="reel-loop" className="reel-title i18n-text">{t('PortfolioTitleLooped')}</h3>
        </div>
        <div className="card-container">
          <ContentCard id="4" className="card contentcard-loop" noButton noDescription />
          <ContentCard id="5" className="card contentcard-loop" noButton noDescription />
        </div>
      </section>

      <section className="reel" aria-labelledby="reel-misc">
        <div className="reel-header">
          <span className="reel-eyebrow i18n-text">{t('ReelEyebrow3')}</span>
          <h3 id="reel-misc" className="reel-title i18n-text">{t('PortfolioTitleMisc')}</h3>
        </div>
        <div className="card-container">
          <ContentCard id="6" className="card contentcard-loop" noButton noDescription />
          <ContentCard id="7" className="card contentcard-loop" noButton noDescription />
        </div>
      </section>
    </div>
  );
}

export default SectionPortfolio;
