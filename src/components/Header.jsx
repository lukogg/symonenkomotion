import React, { useEffect, useState } from 'react';
import Logo from '../assets/S_Logo_White.svg';
import './Header.css'
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

// function useTimecode() {
//   const [tc, setTc] = useState('00:00:00:00');

//   useEffect(() => {
//     const start = performance.now();
//     let raf;
//     const fps = 24;

//     const tick = () => {
//       const elapsed = (performance.now() - start) / 1000;
//       const totalFrames = Math.floor(elapsed * fps);
//       const frames = totalFrames % fps;
//       const totalSeconds = Math.floor(totalFrames / fps);
//       const seconds = totalSeconds % 60;
//       const minutes = Math.floor(totalSeconds / 60) % 60;
//       const hours = Math.floor(totalSeconds / 3600);
//       const pad = (n) => String(n).padStart(2, '0');
//       setTc(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`);
//       raf = requestAnimationFrame(tick);
//     };

//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   return tc;
// }

function Header() {
  const { t } = useTranslation();
  const [isHidden, setIsHidden] = useState(false);
  const timecode = useTimecode();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('portfolio');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setIsHidden(rect.top <= 0 && rect.bottom >= 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isHidden ? 'hidden' : 'visible'}`}>
      <a href="#" className="brand" aria-label="Symonenko — home">
        <img src={Logo} alt="" className="logo" />
        <span className="brand-name i18n-text">{t('HeaderText')}</span>
      </a>

      <div className="header-timecode" aria-hidden="true">
        <span className="rec-dot" />
        <span className="timecode-value">{timecode}</span>
      </div>

      <div className="header-right">
        <LanguageSelector />
      </div>
    </header>
  );
}

export default Header;
