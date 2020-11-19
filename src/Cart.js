import React from 'react';
import Cartblock from './Cartblock';

    const Cart=(props)=> {
            const {product}=props;
          return(
              <div className="cart">
                  {product.map((product)=>{
                    return(
                        <Cartblock
                         product={product} 
                         key={product.id}
                        onIncrease={props.onIncrease}
                        onDecrease={props.onDecrease}
                        onDelete={props.onDelete} />)
                  })}
               </div>
          );
        }
    
    
    export default Cart;