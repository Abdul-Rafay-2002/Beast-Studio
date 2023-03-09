import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

//State Defines Constants
const Context = createContext();
export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setcartItems] = useState([]);
	const [totalPrice, settotalPrice] = useState(0);
	const [totalQuantity, settotalQuantity] = useState(0);
	const [prdctQunatity, setprdctQunatity] = useState(1);
	const [toggle, settoggle] = useState(false)

	let foundProduct;
	let index;

	// Actionable Function
	// Add to cart functionality
	const onAddtoCart = (product, quantity) => {
		const checkProductInCart = cartItems.find((item) => item._id === product._id);
		settotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
		settotalQuantity((prevTotalQuantites) => prevTotalQuantites + quantity);

		if (checkProductInCart) {
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					};
			});

			setcartItems(updatedCartItems);
		} else {
			product.quantity = quantity;
			setcartItems([...cartItems, { ...product }]);
		}
		toast.success(
			`${prdctQunatity} piece of ${product.name} added to the cart`
		);
	};
	//Remove Item from the cart functionality
	const onRemoveCartItem = (product) => {
		foundProduct = cartItems.find((item) => item._id === product._id);
		const newCartItems = cartItems.filter((item) => item._id !== product._id);

		settotalPrice((prevTotalPrice) =>  prevTotalPrice - foundProduct.price * foundProduct.quantity);
		settotalQuantity(prevTotalQuantites => prevTotalQuantites - foundProduct.quantity);
		setcartItems(newCartItems);
	}

	//Increase or decrease cart product quantity to create a toggle function
	const toggleCartItemsQuantity = (id, value) => {
		foundProduct = cartItems.find((item) => item._id === id);
		index = cartItems.findIndex((product) => product._id === id);
		const newCartItems = cartItems.filter((item) => item._id !== id);

		if (value === 'increament') {
			setcartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1}]);
			settotalPrice((prevTotalPrice) => prevTotalPrice +  foundProduct.price)
			settotalQuantity(prevTotalQuantites => prevTotalQuantites + 1)

		} else if (value === 'decreament') {
			
			if(foundProduct.quantity > 1){
				setcartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
				settotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
				settotalQuantity(prevTotalQuantites => prevTotalQuantites - 1)
			}
		}
	};

	//----------------- Increase and Deacrease product Quantity functions -------------/
	const increaseQty = () => {
		setprdctQunatity((prevQty) => prevQty + 1);
	};
	const descreaseQty = () => {
		setprdctQunatity((prevQty) => {
			if (prevQty - 1 < 1) return 1;
			return prevQty - 1;
		});
	};
	//-------------End-----------------//

	//exporting State in entire app.
	return (
		<Context.Provider
			value={{
				showCart,
				setShowCart,
				cartItems,
				totalPrice,
				totalQuantity,
				prdctQunatity,
				increaseQty,
				descreaseQty,
				onAddtoCart,
				toggleCartItemsQuantity,
				onRemoveCartItem,
				toggle,
				settoggle,
			}}>
			{children}
		</Context.Provider>
	);
};

//Convert exporting
export const useStateContext = () => useContext(Context);
