import ViewPortfolioButton from "../components/ViewPortfolioButton";
import CVButton from "../components/CVButton";
import { useTranslation } from 'react-i18next';

const TOOLS = ['After Effects', 'Premiere Pro', 'Blender', 'Figma'];

function SectionIntro() {
  const { t } = useTranslation();

  return (
    <div className="section-intro">
      <div className="section-intro-grid" aria-hidden="true" />
      <div className="section-intro-inner">
        <p className="eyebrow i18n-text">{t('Eyebrow')}</p>
        <h1 className="intro-title i18n-text">{t('Intro_h1')}</h1>
        <p className="intro-subtitle i18n-text">{t('Intro_h2')}</p>

        <div className="herobuttons">
          <ViewPortfolioButton />
          <CVButton />
        </div>

        <ul className="tool-stack" aria-label="Core tools">
          {TOOLS.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SectionIntro;
