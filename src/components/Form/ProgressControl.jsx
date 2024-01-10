import './progresscontrol.scss';
import PropTypes from 'prop-types';


function Previous({ handlePreviousClick }){
  return (
    <div className="previous">
      <button type="submit" className="btn-previous" onClick={() => handlePreviousClick('previous')}>
        上一步
      </button>
    </div>
  );

}

function NextStep({ handleNextClick, shopStage,handleFormSubmit,cardInfo }) {
  const handleClick = (event) => {
    if (shopStage === 3) {
      // 如果是最後一步，執行表單提交邏輯
      handleFormSubmit(event,cardInfo);
    } else {
      // 否則執行下一步邏輯
      handleNextClick('next');
    }
  };

  return (
    <div className="next">
      <button type="submit" className="btn-next" onClick={handleClick}>
        {shopStage === 3 ? '送出訂單' : '下一步'}
       
      </button>
    </div>
  );
}

Previous.propTypes = {
  handlePreviousClick: PropTypes.func.isRequired,
};

NextStep.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  shopStage: PropTypes.number.isRequired,
  handleFormSubmit:PropTypes.func.isRequired,
  cardInfo: PropTypes.object.isRequired,
};

ProgressControl.propTypes = {
  handlePreviousClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  shopStage: PropTypes.number.isRequired,
  handleFormSubmit:PropTypes.func.isRequired,
  cardInfo: PropTypes.object.isRequired,
};


export default function ProgressControl({ shopStage,handlePreviousClick,handleNextClick,handleFormSubmit,cardInfo}) {
  return (
    <div className='progress-control-container'>
      {shopStage > 1 &&<Previous handlePreviousClick={handlePreviousClick} />}
      <NextStep handleNextClick={handleNextClick} 
      shopStage={shopStage} 
       handleFormSubmit={handleFormSubmit} 
       cardInfo={cardInfo} 
       />
    </div>
     
  );
}