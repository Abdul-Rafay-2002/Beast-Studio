import React from 'react'
import { Products } from '../../components/index';
import { client } from 'Lib/client';

const index = ({ products }) => (

    <>
    <div id='main-product'  >
      <div className='main-product-headings'>
        <h2>Our Products</h2>
        <p>Experience the best of the best - our best-selling products.</p>
      </div>
      <div className="products-container">
        <div className='product-wrapper' style={{ marginBottom: "100px" }}>
          {products?.map((product) => <Products key={product._id} product={product} />)}
        </div>
      </div>
    </div>
    
    </>
  
)
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  
  return {
    props: {
      products,
    },
  };
}
export default index