import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import ProgressControl from './ProgressControl';
import StepProgress from './StepProgress.jsx';
import './form.scss'
import Cart from './Cart.jsx';
import { useState } from "react";


export default function Form() {
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

  const renderForm = () => {
    switch (shopStage) {
      case 1:
        return <Step1></Step1>;
      case 2:
        return <Step2></Step2>;
      case 3:
        return <Step3></Step3>;
        

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
        }}
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
/>
           
          </div>
          <div className="form-right">
            <div className="form-right-container">
              <Cart></Cart>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}