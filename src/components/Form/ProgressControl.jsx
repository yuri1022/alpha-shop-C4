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

function NextStep({ handleNextClick, shopStage }) {
  return (
    <div className="next">
      <button type="submit" className="btn-next" onClick={() => handleNextClick('next')}>
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
};

ProgressControl.propTypes = {
  handlePreviousClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  shopStage: PropTypes.number.isRequired,
};


export default function ProgressControl({ shopStage,handlePreviousClick,handleNextClick }) {
  return (
    <div className='progress-control-container'>
      {shopStage > 1 &&<Previous handlePreviousClick={handlePreviousClick} />}
      <NextStep handleNextClick={handleNextClick} shopStage={shopStage}/>
    </div>
     
  );
}