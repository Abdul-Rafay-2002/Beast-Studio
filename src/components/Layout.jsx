import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from '@/pages'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Beast Studio</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  )
}

export default Layout