import React from 'react'

const HeroImage = () => {

  return (
    <div className="hero-image">
        <div className="hero-image__inner" style={{backgroundImage: 'url(../../img/pexels-photo-3774023.jpeg)'}}></div>
        <div className="hero-image__text-container">
            <span className="hero-image__title">
              <a 
                className="hero-image__title__link" 
                href="/" 
              >
                WEB DEVELOPER
              </a>
            </span>
            <div className="hero-image__line"></div>
            <span className="hero-image__name">VERONIKA GOLOVANOVA</span>
        </div>
    </div>
  );
}

export default HeroImage
