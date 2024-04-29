import './step3.scss';
import { CartContext } from './Cartcontext';
import { useState , useContext } from 'react';
import PropTypes from 'prop-types';

Step3.propTypes = {
  handleFormSubmit:PropTypes.func.isRequired,
};

export default function Step3() {
  const { cardInfo, updateCardInfo } = useContext(CartContext);
  const [cardholderName, setCardholderName] = useState(cardInfo.cardholderName || '');
  const [cardNumber, setCardNumber] = useState(cardInfo.cardNumber || '');
  const [expirationDate, setExpirationDate] = useState(cardInfo.expirationDate || '');
  const [ccv, setCcv] = useState(cardInfo.ccv || '');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // 在這裡你可以執行提交表單的邏輯，並使用 updateCardInfo 更新資訊
    const newCardInfo = {
      cardholderName,
      cardNumber,
      expirationDate,   
      ccv,
    };

        // 執行表單提交邏輯，使用 cardInfo 中的數據
    console.log('Form data submitted:', cardInfo);
    
    updateCardInfo(newCardInfo);
  };



  return(
   
    <div className="step3-content">
       <form className="col col-12" data-phase="credit-card" onSubmit={handleFormSubmit}>
              <h3 className="form-title">付款資訊</h3>
              <section className="form-body col col-12">
                <div className="col col-12">
                  <div className="input-group col col-10">
                    <div className="input-label">持卡人姓名</div>
                     <input type="text" placeholder="John Doe" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
                  </div>
                  </div>
                <div className="col col-12">
                  <div className="input-group col col-10">
                    <div className="input-label">卡號</div>
                    <input type="text" placeholder="1111 2222 3333 4444" value={cardNumber} onChange={(e)=> setCardNumber(e.target.value)} />
                  </div>
                </div>
                <div className="col col-12">
                  <div className="input-group col col-6">
                    <div className="input-label">有效期限</div>
                    <input type="text" placeholder="MM/YY" value={expirationDate} onChange={(e)=>setExpirationDate(e.target.value)}/>
                  </div>
                
                  <div className="input-group col col-6">
                    <div className="input-label">CVC / CCV</div>
                    <input type="text" placeholder="123" value={ccv} onChange={(e)=>setCcv(e.target.value)}/>
                  </div>
                </div>
              </section>
            </form>
            </div>
          
  )
 

}

