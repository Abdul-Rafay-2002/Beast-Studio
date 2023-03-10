import React from 'react';
import Link from 'next/link';
import { TfiLinkedin} from 'react-icons/tfi';
import { GrGithub } from 'react-icons/gr';

const Footer = () => {
  return (

      <div className="footer-container">
        <div className="footer-wrapper">
          <p>© {new Date().getFullYear()} All Right Reserved - Beast Studio React By Rafay</p>
          <div className="icons">
            <Link href='https://github.com/Abdul-Rafay-2002' target='_blank'><GrGithub /></Link>
            <Link href='https://www.linkedin.com/in/abdul-rafay-3bb521231/' target='_blank'><TfiLinkedin /></Link>
          </div>
        </div>
      </div>

  )
}

export default Footer