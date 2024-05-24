import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartItems'>
            <div className="cartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartItems-format cartItems-format-main">
                            <img src={e.image} alt="" className='CartIcon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartItems-Quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartItems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItems-total-items">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free Shipping</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-items">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='cartItems-checkOut'>Proceed to Checkout</button>
                </div>
                <div className="cartItems-promoCode">
                    <h1>Have a Promocode? Enter Here</h1>
                    <div className="cartItems-promoBox">
                        <input type="text" placeholder='Enter Promocode' />
                        <button className='cartItems-checkOut'>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems

