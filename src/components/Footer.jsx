import React from 'react'
import { TfiLinkedin} from 'react-icons/tfi';
import { GrGithub } from 'react-icons/gr';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-wrapper">
          <p>© {new Date().getFullYear()} All Right Reserved - Beast Studio React By Rafay</p>
          <div className="icons">
            <Link href='https://github.com/Abdul-Rafay-2002' target='_blank'><GrGithub /></Link>
            <Link href='https://www.linkedin.com/in/abdul-rafay-3bb521231/' target='_blank'><TfiLinkedin /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer