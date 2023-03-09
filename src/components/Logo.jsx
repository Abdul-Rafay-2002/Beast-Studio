import React from 'react'
import  Link  from "next/link";

const Logo = () => {
  return (
    <>
        <div className='logo'>
            <Link href='/'>
              <h2>Beast Studio</h2>
            </Link>
        </div>
    </>
  )
}

export default Logo