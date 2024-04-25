import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams  } from 'react-router-dom';
import BreadCrum from '../components/breadcrums/BreadCrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/descriptionbox/DescriptionBox';
import RelatedProduct from '../components/relatedproducts/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div className='product'>
        <BreadCrum product={product}/>
        <ProductDisplay product={product}  />
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )
}

export default Product