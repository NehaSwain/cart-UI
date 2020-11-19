import React from 'react';

const Cartblock=(props)=> {
    
     const {title,price,qty} =props.product;
     const{product,onIncrease,onDecrease,onDelete}=props;
     return (
         <div className="cart-item" style={styles.cart} >
             <div className="left-block" >
                 <img style={styles.image} src={product.img}/>
             </div>
             <div className="right-block">
                 <div style={{fontSize:25}}>{title} </div>
                 <div style={{color:"#777"}}> {price} INR</div>
                 <div style={{color:"#777"}}> Qty - {qty} </div>
                 <div classname="cart-item-actions">
                  <img alt="increase" 
                  src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" 
                  className="action-icons"
                  onClick={()=>onIncrease(product)}
                  />
                  <img alt="decrease"
                   src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                   className="action-icons" 
                   onClick={()=>onDecrease(product)}                
                   />
                  <img alt="delete" 
                  src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg" 
                  className="action-icons"
                  onClick={()=>{onDelete(product.id)}}
                  />
                 </div>
             </div>
         </div>
     );
 }
const styles={
        image: {
          height: 110,
          width: 110,
          borderRadius: 4,
          background: '#ccc'
        }   
}
export default Cartblock;