import React, { useState } from 'react';
import { client, urlFor } from 'Lib/client';
import Link from 'next/Link';
import { FaArrowLeft } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Products } from '../../components';
import { useStateContext } from '../../../context/StateContext';

const ProductDetails = ({ product, products }) => {
	//import props from product.jsx
	const { image, name, slug, price, discount, longdesc } = product;
	// For image effect for mouse-entering attribute
	const [index, setIndex] = useState(0);
	//This function will increament and decreament the product quantity as using useStateContext
	const { increaseQty, descreaseQty, prdctQunatity, onAddtoCart } = useStateContext();
	return (
		<>
			<div className='prdct-detail-container'>
				<Link href='/product'>
					<button type='button' className='cta back-btn'>
						<span className='hover-underline-animation'>
							<FaArrowLeft /> Back
						</span>
					</button>
				</Link>
				<div className='prdct-detail-wrapper'>
					<div className='prodct-content'>
						<div className='product-image-col'>
							<img src={urlFor(image && image[index])} />
							<div className='discount'>
								<h5>{discount}%</h5>
							</div>
							<div className='product-variant'>
								{image?.map((item, i) => (
									<img
										key={i}
										src={urlFor(item)}
										className={i === index ? 'active-image' : 'inactive'}
										onMouseEnter={() => setIndex(i)}
									/>
								))}
							</div>
						</div>
						<div className='product-detail'>
							<h1>{name}</h1>
							<p>{longdesc}</p>
							<div className='quantity-feild'>
								<h4>Quantity:</h4>
								<div className='quantity-wrapper'>
									<span className='minus' onClick={descreaseQty}>
										<FiMinus />
									</span>
									<span className='digit'> {prdctQunatity} </span>
									<span className='plus' onClick={increaseQty}>
										<FiPlus />
									</span>
								</div>
							</div>
							<h3>Price : ${price}</h3>
							<div className='action-btn'>
								<button className='btn' onClick={() => onAddtoCart(product, prdctQunatity)}>Add To Cart</button>
								<button className='btn'>Buy Now </button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='feature-products'>
				<h2>Related Products</h2>
				<div className='feature-prdct-container'>
					{products?.map((product) => (
						<Products key={product._id} product={product} />
					))}
				</div>
			</div>
		</>
	);
};
//getStaticPaths is required for dynamic SSG pages: here is a getStaticPaths function that finds what the actual paths of its:
export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

	const products = await client.fetch(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current
		}
	}));	

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
	const productsQuery = '*[_type == "product"]'

	const product = await client.fetch(query);
	const products = await client.fetch(productsQuery);

	return {
		props: { products, product }
	};
};

export default ProductDetails;
