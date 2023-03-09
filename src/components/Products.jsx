import Link from "next/link";
import { urlFor } from "Lib/client";

const Products = ({ product: { image, name, slug, price, discount, shortdesc } }) => {

  return (
    <div  className='product-item card'>
      <div className="discount">
        <h5>{discount}%</h5>
      </div>
      <Link href={`/product/${slug.current}`} className='card2'>
        <div className="product-cart">
          <img src={urlFor(image && image[0])} className='prduct-image' />
        </div>
        <div className="product-title">
          <h4>{name}</h4>
          <p>{shortdesc}</p>
          <h6>Price : ${price}</h6>
        </div>
      </Link>
    </div>
  )
}

export default Products