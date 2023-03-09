import React, { useRef } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useStateContext } from 'context/StateContext';
import { urlFor } from 'Lib/client';
import { TfiClose } from 'react-icons/tfi';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { AiOutlineShopping } from 'react-icons/ai';
import getStripe from "Lib/getStripe";

const Cart = () => {
	const cartRef = useRef();
	const {
		totalPrice,
		totalQuantity,
		setShowCart,
		cartItems,
		onRemoveCartItem,
		toggleCartItemsQuantity
	} = useStateContext();
	const checkoutHandler = async () => {
		const stripe = await getStripe();
		const response = await fetch('/api/stripe', {
			method: 'POST',
			headers: {'Content-Type': 'application/json',},
			body: JSON.stringify(cartItems),
		});

		if (response.statusCode === 500) return;
		const data = await response.json();
		toast.loading('Redirecting to the Checkout...');
		stripe.redirectToCheckout({ sessionId: data.id });
	};

	return (
		<div className='cart'>
			<div ref={cartRef} className='cart-wrapper'>
				<div className='cart-container'>
					<div className='cartheader'>
						<h3>
							Shopping Cart
							<p className='total-quantity'>({totalQuantity} Total items)</p>
						</h3>
						<button
							type='button'
							className='close-cart'
							onClick={() => setShowCart(false)}>
							<TfiClose />
						</button>
					</div>
					{cartItems.length < 1 && (
						<div className='empty-cart'>
							<AiOutlineShopping size={150} />
							<p>your cart is empty </p>
							<Link href='/#main-product' onClick={() => setShowCart(false)}>
								Countinue Shopping?
							</Link>
						</div>
					)}
					<div className='product-cart-container'>
						{cartItems.length >= 1 &&
							cartItems.map((item) => (
								<div className='cart-product' key={item._id}>
									<button className='remove-product' onClick={() => onRemoveCartItem(item)}>
										<TfiClose />
									</button>
									<div className='cart-product-image'>
										<img src={urlFor(item?.image[0])} />
									</div>
									<div className='cart-product-detail'>
										<div className='cart-product-heading'>
											<h4>{item.name}</h4>
											<h6>${item.price}.00</h6>
										</div>
										<div className='quantity-feild'>
											<p>Quantity:</p>
											<div className='quantity-wrapper'>
												<span className='minus' onClick={() => toggleCartItemsQuantity(item._id, 'decreament')}>
													<FiMinus />
												</span>
												<span className='digit'> {item.quantity} </span>
												<span className='plus' onClick={() => toggleCartItemsQuantity(item._id, 'increament')}>
													<FiPlus />
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
					{cartItems.length >= 1 && (
						<div className="cart-footer">
							<div className="total">
								<h4>Subtotal:</h4>
								<h6>${totalPrice}.00</h6>
							</div>
							<div className="cart-strip-btn">
								<button type="button" className="btn" onClick={checkoutHandler}>
									Pay with Stripe
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Cart;
