import { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;

    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setcartItems] = useState(getDefaultCart());
    
    useEffect(()=>{
        fetch('http://localhost:8080/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))
    },[])
    
    const addToCart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId]: prev[itemId]+1})) 
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) 
        {
            if (cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId]: prev[itemId]-1})) 
    }
    
    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart }; //Here I insert any data or function That it will be provided by ShopContextProvider as a value, and I access these data or values an any Components to using it.  

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
