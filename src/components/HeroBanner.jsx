import React from 'react';
import Link from 'next/link';
// Import Swiper React components
import {urlFor} from "Lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div className='hero-wrapper'>
        <div className="hero-main">
          <p>{heroBanner.smallText}</p>
          <h1>{heroBanner.product}</h1>
          <p className='banner-description'>{heroBanner.description}</p>
          <div className='CTA-btn-wrapper'>
            <Link href={`/product`}>
              <button type='button' className='cta  '>
                <span className="hover-underline-animation"> {heroBanner.buttonText} </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                  <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="image-col">
          <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
        </div>
      </div>
    </div>

    
  );
}

export default HeroBanner;




