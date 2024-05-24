import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionBox'>
            <div className="descriptionBox-navigator">
                <div className="descriptionBox-nav-box">Description</div>
                <div className="descriptionBox-nav-box fade">Reviews (124)</div> {/*Fade question*/}
            </div>
            <div className="descriptionBox-content">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illo voluptate placeat pariatur omnis labore quos, eveniet molestiae quisquam dicta possimus incidunt ullam porro. Itaque quae a quidem ipsa autem?</p>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab harum deleniti iusto eum impedit nam voluptate ducimus, eligendi et sequi voluptatibus adipisci! Voluptates, incidunt illum. Cupiditate esse eligendi consequatur velit.</p>
            </div>
        </div>
    )
}

export default DescriptionBox