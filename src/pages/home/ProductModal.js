import { useState } from "react";
import "./ProductModal.css"
import { useSelector, useDispatch } from 'react-redux';

// import { addToCart } from "../redux/action";

import { addToCart } from "../../redux/actions";

const ProductModal = (props) => {

    // const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();

    const test = (e) => {
        console.log("test clicked");
        props.handleShow(false);
    }

    const handleAddToCart = (e) => {
        const payload = {
          "id":props.id, 
          "title": props.title,
          "price": props.price,
          "category": props.category,
          "description": props.description,
          "image": props.image,
          "qty": 1
        }
        dispatch(addToCart(payload));
        props.handleShow(false);
    }

    return (
        <div className="product-modal" onClick={e =>{ e.stopPropagation();  props.handleShow(false);}}>
            {/* <button onClick={()=>setVisible(true)}>More</button> */}
            { props.isVisible && 
                 <div className="product-modal-background">
                 <div className="product-modal-main" onClick={e =>{ e.stopPropagation();}}> 
                   <div className="product-modal-close">
                     <button onClick={(e)=>test(e)}>&times;</button>
                   </div>
        
                    <div className="product-modal-info"> 
                        <img src={props.image}/>
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>

                        <div className="price">
                            <h6>${props.price}</h6>
                        </div>
                        
                        <button onClick={(e)=>handleAddToCart(e)}>Add to Cart</button>

                    
                   
                   </div>
                 </div>
               </div>
            }
        </div>
    )

}


export default ProductModal;