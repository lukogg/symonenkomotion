import './ViewPortfolioButton.css'
import { FaPlay } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function ViewPortfolioButton() {
  const { t } = useTranslation();
  return (
    <a className="btn btn-primary" href="#portfolio">
      <FaPlay style={{ fontSize: '0.7em' }} />
      <span className="i18n-text">{t('Button1')}</span>
    </a>
  );
}

export default ViewPortfolioButton;
