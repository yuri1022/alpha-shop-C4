import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


// 建立一個新的 Context
export const CartContext = createContext();



// 定義 CartProvider，提供 cart 狀態以及修改 cart 的函數
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [cardInfo, setCardInfo] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    ccv: '',
  });

    const updateTotalAmount = () => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0);

    setTotalAmount(total);
  };

  const updateCardInfo = (newCardInfo) => {
    setCardInfo(newCardInfo);
  };

  return (
    <CartContext.Provider value={{ cart, setCart,totalAmount,updateTotalAmount,cardInfo,updateCardInfo,}}>
      {children}
    </CartContext.Provider>
  );
};


CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

