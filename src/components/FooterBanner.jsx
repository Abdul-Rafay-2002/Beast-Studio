import React from 'react'
import Link from 'next/link';
import { urlFor } from "Lib/client";

const Footerbanner = ({ footerBanner }) => {
    return (
      <div className='footer-banner-container'>
        <div className='footer-banner-wrapper'>
          <div className="footer-main">
            <p className='small-txt'>{footerBanner.smallText}</p>
            <h1>{footerBanner.heading}</h1>
            <p className='footer-banner-description'>{footerBanner.description}</p>
            <div className='CTA-btn-wrapper'>
              <Link href={`/products/${footerBanner.heading}`}>
                <button type='button' className='cta  '>
                  <span className="hover-underline-animation"> {footerBanner.buttonText} </span>
                  <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="image-col">
            <img src={urlFor(footerBanner.image)} alt="headphones" className="hero-banner-image" />
            <h3>{footerBanner.subtitle}</h3>
            <p>{footerBanner.discount}</p>
          </div>
        </div>
      </div>


    );
}

export default Footerbanner