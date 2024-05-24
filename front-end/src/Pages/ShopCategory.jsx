import React, { useContext } from 'react';
import './CSS/ShopCategory.css'; // Assuming you have a CSS file for styling
import { ShopContext } from '../Context/ShopContext'; // Assuming you have a ShopContext file
import dropdown_icon from '../Components/Assets/dropdown-icon.png'; // Assuming you have an image file
import Item from '../Components/Items/Item'; // Assuming you have an Item component

const ShopCategory = (props) => {
     //Here I Insert all_product data using context for men women and kids
    const { all_product } = useContext(ShopContext);

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> Out of 36 Products
                </p>
                <div className="shopcategory-sort">
                    Sort By <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-product">
                {all_product.map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
            <div className="shopcategory-loadmore">
                Explore More---
            </div>
        </div>
    );
};

export default ShopCategory;

