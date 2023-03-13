import React, { useState } from 'react'
import Link from "next/link";
import { FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useStateContext } from '../../context/StateContext';
import Cart from "./Cart";

const Menu = () => {
    const { showCart, setShowCart, total, totalQuantity, settoggle, toggle } = useStateContext();
    const [toggleMenu, settoggleMenu] = useState(false)

    return (
        <nav className='main-menu'>
            <div className="menu-items">
                <ul>
                    <li><Link href='/product'>Products</Link></li>
                    <li><Link href='/'>About Us</Link></li>
                    <li><Link href='/'>Privacy Policy</Link></li>
                </ul>
            </div>
           
            <div className="call-to-action-icon">
                <ul>
                    <li className="menu-toggle" onClick={() => settoggleMenu(!toggleMenu)}>
                        {toggleMenu ? <FiX /> : <FiMenu />}
                        <div className={`${!toggleMenu ? 'hidden' : 'block transiton'} mobile-menu`}>
                            <ul>
                                <li><Link href='/product'>Products</Link></li>
                                <li><Link href='/'>About Us</Link></li>
                                <li><Link href='/'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={() => settoggle(!toggle)}><Link href='/' className={`${!toggle ? '' : 'active'}`}><FiHeart /></Link></li>
                    <li><Link href='/'><FiUser /></Link></li>
                    <li onClick={() => setShowCart(true)
                    }><FiShoppingBag />
                        <span className='cart-item-qty'>{totalQuantity}</span>
                    </li>
                </ul>
            </div>
            {showCart && <Cart />}
        </nav>
    )
}

export default Menu