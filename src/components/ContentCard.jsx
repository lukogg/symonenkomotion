import React, { useRef, useState } from 'react';
import "./ContentCard.css";
import { useTranslation } from 'react-i18next';
import placeholder from '../assets/S_Logo_White.svg';
import {
  media1, media2, media3, media4, media5, media6, media7,
  poster4, poster5, poster6, poster7,
} from '../assets/media';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';

const mediaArray = [media1, media2, media3, media4, media5, media6, media7];
const posterArray = [null, null, null, poster4, poster5, poster6, poster7];

function ContentCard({ id, className = 'contentcard', href, noButton, noTitle, noDescription }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const titleKey = `CardTitle${id}`;
  const descKey = `CardDesc${id}`;
  const buttonKey = `CardButton${id}`;

  const media = mediaArray[id - 1];
  const poster = posterArray[id - 1];
  const isVideo = media && media.endsWith('.mp4');

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsHovered(false);
  };

  const hasFooter = !(noTitle && noDescription);

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-media">
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={media}
              poster={poster || undefined}
              loop
              playsInline
              preload="none"
              aria-label={t(titleKey)}
            />
            <span className={`play-affordance ${isHovered ? 'is-hidden' : ''}`}>
              <FaPlay />
            </span>
            <span className={`sound-hint ${isHovered ? 'is-hidden' : ''}`}>
              Hover to play with sound
            </span>
          </>
        ) : (
          <img
            src={media || placeholder}
            alt={t(titleKey)}
            loading="lazy"
          />
        )}
      </div>

      {hasFooter && (
        <div className="card-body">
          {!noTitle && <h3 className="card-title i18n-text">{t(titleKey)}</h3>}
          {!noDescription && (
            <p className="card-desc i18n-text">
              {t(descKey).split('\n').map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))}
            </p>
          )}
          {!noButton && (
            <a className="card-button" href={href} target="_blank" rel="noopener noreferrer">
              <span className="i18n-text">{t(buttonKey)}</span>
              <FaExternalLinkAlt style={{ fontSize: '0.8em' }} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ContentCard;
