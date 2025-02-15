import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'; // Assuming you have a ShopContext file
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDispaly/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Product not found</div>; // or render a 404 page
    }

    return (
        <div>
            <BreadCrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox/>
        </div>
    );
};

export default Product