import { useState } from "react";

import ProductModal from "./ProductModal";

import './Product.css';

const Product = (props) => {
    const [showDetail, setShowDetail] = useState(false);

    return (
<div className="product-card" onClick={()=>setShowDetail(true)}>
    <div className="product-image">
        <img src={props.image}/>
    </div>
    <div className="product-info">
      <p>{props.title}</p>
      <h6>${props.price}</h6>
    </div>
    <ProductModal
        {...props}
        isVisible={showDetail} 
        handleShow={setShowDetail} 
    />
  </div>

    )
}

export default  Product;