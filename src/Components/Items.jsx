import React, { useContext } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CartContext } from './Cart';


function Items({id,img,title,subtitle, price, quantity }) {
    const {removeItem, increment, decrement} = useContext(CartContext)

    return (
        <>
        <div className="items">
            <div className="item-img">
                <img src={img} alt="item" />
            </div>
            <div className="item-info">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className="item-units">
                <RemoveIcon 
                onClick={()=> decrement(id)}
                />

                
                <input className="item-quantity" type="number" value= {quantity}/>
                <AddIcon onClick={()=> increment(id)}/>

            </div>
            <div className="item-price">
                <h4>{price}</h4>
            </div>
            <div className="item-remove">
                <ClearIcon onClick={() => removeItem(id)}/>
            </div>
            
        </div>
        <hr />
        </>
    )
}

export default Items
