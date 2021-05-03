import React, { memo } from 'react';
import '../styles/components/heroSection.css';

const HeroSection = ({ title, description, image }) => {
  return (
    <div
      className='heroSection'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {title && description && (
        <div className='heroSectionContentWrapper'>
          <h1 className='white um mb-4'>{title && title}</h1>
          <p className='ur'>{description && description}</p>
        </div>
      )}
    </div>
  );
};

export default memo(HeroSection);
