import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Link from "next/link";

const NavBar = () => {
  return (
    <>
        <div className="sticky">
      <header className="header-container">
          <div className=" header-wrapper">
            <Logo />
            <Menu />
          </div>
      </header>
        </div>
    </>
  )
}

export default NavBar