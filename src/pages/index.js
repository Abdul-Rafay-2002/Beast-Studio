import { HeroBanner, Products, FooterBanner } from '../components/index';
import { client } from 'Lib/client';
import React from 'react';

const Home = ({ products, bannerData, footerbannerData }) => (
	<div>
		<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
		<div className='product-heading'>
			<h2>Best Selling Products</h2>
			<p>Experience the best of the best - our best-selling products.</p>
		</div>
		<div className="products-container">
			<div className='product-wrapper'>
				{products?.map((product, i) => i < 8 && (<Products key={product._id} product={product} />))}
			</div>
		</div>

		<FooterBanner footerBanner={footerbannerData.length && footerbannerData[0]} />
	</div>
);

//Fetching Santity Data to Use the getServerSideProps Function
export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	const footerbannerQuery = '*[_type == "footerbanner"]';
	const footerbannerData = await client.fetch(footerbannerQuery);

	return {
		props: {
			products,
			bannerData,
			footerbannerData,
		},
	};
};

export default Home;
