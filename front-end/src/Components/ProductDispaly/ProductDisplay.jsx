import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import starDull_icon from '../Assets/starDull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    // Here I import addToCart function using contextAPI
    const {addToCart} = useContext(ShopContext);
    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={starDull_icon} alt="" />
                    <p>(124)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-newPrices">${product.new_price}</div>
                    <div className="productDisplay-right-oldPrices">${product.old_price}</div>
                </div>
                <div className="productDisplay-right-description">
                Made from high-quality materials for durability and longevity
                </div>
                <div className="productDisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
                <p className='productDisplay-right-category'> <span> Category :</span>Women, T-Shirt, Crop Top</p>
                <p className='productDisplay-right-category'> <span> Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay