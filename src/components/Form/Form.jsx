import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import ProgressControl from './ProgressControl';
import StepProgress from './StepProgress.jsx';
import './form.scss'
import Cart from './Cart.jsx';
import { useState, useContext } from "react";
import { CartProvider } from './Cartcontext.jsx';
import { CartContext } from './Cartcontext.jsx'; 

export default function Form() {
  const { cardInfo } = useContext(CartContext);
  const [shopStage, setShopStage] = useState(1);


const handleNextClick = () => {
  if (shopStage < 3) {
    setShopStage((prevStage) => prevStage + 1);
  }
};

const handlePreviousClick = () => {
  if (shopStage > 1) {
    setShopStage((prevStage) => prevStage - 1);
  }
};

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // 執行表單提交邏輯，使用 cardInfo 中的數據
    console.log('Form data submitted:', cardInfo);
  };

  const renderForm = () => {
    switch (shopStage) {
      case 1:
        return <Step1></Step1>;
      case 2:
        return <Step2></Step2>;
      case 3:
        return <CartProvider><Step3 handleFormSubmit={handleFormSubmit}/></CartProvider>;
        
      default:
      console.log('Unexpected shopStage:', shopStage);
      return null;
    }

  };

  return (
    <>
      <section
        id="form"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }} className={`${
          shopStage === 1 ? 'stage-1' : shopStage === 2 ? 'stage-2' : shopStage === 3 ? 'stage-3' :''
        }`}
      >
        <div className="form-container">
          <div className="form-left">
            <div className="step-progress">
              <div className="progress-title">結帳</div>
            <StepProgress shopStage={shopStage} />
              {renderForm()}
             <span className='progress-line'></span>
            </div>                       
          <ProgressControl
  shopStage={shopStage}
  handlePreviousClick={(direction) => {
    if (direction === 'previous') {
      handlePreviousClick();
    } else if (direction === 'next') {
      handleNextClick();
    }
  }}
  handleNextClick={(direction) => {
    if (direction === 'previous') {
      handlePreviousClick();
    } else if (direction === 'next') {
      handleNextClick();
    }
  }}
  handleFormSubmit={handleFormSubmit}  // 確保 handleFormSubmit 被正確傳遞
  cardInfo={cardInfo}
/>
           
          </div>
          <div className="form-right">
            <div className="form-right-container">
        <CartProvider>
        <Cart />
      </CartProvider>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

