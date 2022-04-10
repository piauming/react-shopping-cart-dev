import { useDispatch } from 'react-redux';

import { addToCart, minusFromCart } from '../../../redux/actions';

import './QtyControl.css';

const QtyControl = ({id, qty}) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToCart({id: id, qty: 1}));
    }

    const handleMinus = () => {
        dispatch(minusFromCart({id: id, qty: 1}));
    }

    return (
        <div style={{display: "flex", width:100, flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
            <button className="round-button" onClick={handleAdd}>+</button>
            <div>{qty}</div>
            <button className="round-button"  onClick={handleMinus}>-</button>    
        </div>
    )
}

export default QtyControl;