import './cart.scss';
import MinusIcon from '../../assets/icon/minus.svg';
import PlusIcon from '../../assets/icon/plus.svg';
import PropTypes from 'prop-types';
import { CartContext } from './Cartcontext';
import { useContext } from 'react';




function Items ({ cart, setCart }){

  const handleIncrement = (itemId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const handleDecrement = (itemId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return(
  cart.map((item)=>(
    <div key = {item.id}className="product-container col col-12" data-count={item.quantity} data-price={item.price}>    
      <img className="img-container"src={item.img} alt={item.name} />
      <div className="product-info">
      <div className="product-name">{item.name}</div>
      <div className="product-control-container">
      <div className="product-control">
      <img className="product-control-minus" src={MinusIcon} alt="Minus Icon" onClick={() => handleDecrement(item.id)}/> 
      <span className="product-count">{item.quantity}</span>
      <img className="product-control-plus"src={PlusIcon} alt="Plus Icon" onClick={() => handleIncrement(item.id)}/>
      </div>
      </div>
      <div className="price">${item.price}</div>
      
      
    </div>
    </div>
    ))

    )
}  

Items.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};



function Total ({ cart }){
// 計算總價格
  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.price;
  }, 0);

  // 返回總價格
  return (
    <span>${total}</span>
  );
}

Total.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default function Cart (){
  const { cart, setCart } = useContext(CartContext);


  return(
  <section className="cart-container col col-12">
  <h3 className="cart-title">購物籃</h3>

  <Items cart={cart} setCart={setCart}/>
  
  <section className="cart-info shipping col col-12">
  <div className="text">運費</div>
  <div className="price">免費</div>
  </section>
  <section className="cart-info total col col-12">
   <div className="text">小計</div>
  <div className="price"><Total cart={cart} /></div>
  </section>

    </section>
  )
  
}