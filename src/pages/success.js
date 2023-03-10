import React from 'react'
import Link from 'next/link'
import { HiBadgeCheck } from "react-icons/hi";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStateContext } from 'context/StateContext';
import {successConfetti} from 'Lib/utlis'

const success = () => {
    const { setcartItems, settotalPrice, settotalQuantity, } = useStateContext();
    useEffect(() => {
        localStorage.clear();
        setcartItems([]);
        settotalPrice(0);
        settotalQuantity(0);
        successConfetti();
    }, []);

    return (
        <>
            <div className='thankyou-container'>
                <div className='thankyou-wrapper'>
                    <div className='thankyou-heading'>
                        <HiBadgeCheck size={100} style={{ color: '#4BB543' }} />
                        <h1>Your Order has Been Placed</h1>
                        <p>Thankyou for your intrest. Shop with us for a hassle-free shopping experience! </p>
                    </div>
                    <div className='thankyou-cta'>
                        <Link href='/' className='cta'>Home</Link>
                        <Link href='/product'>Continue Shopping ?</Link>
                    </div>
                </div>

            </div>


        </>
    )
}

export default success