import './stepprogress.scss'
import PropTypes from 'prop-types';



function Step1Icon({shopStage}){
  return(

<span className="progress-group" data-phase="address">
<span className="progress-icon">
<span className={`${shopStage === 1 ? 'text submit' : shopStage === 2 ? 'text checked' : shopStage === 3 ? 'text checked' :''}`}>1</span>
</span>
<span className="progress-label-address">寄送地址</span>
</span>

  )
}

function Step2Icon({shopStage}){
  return(

  <span className="progress-group" data-phase="shipping">
  <span className="progress-icon">
  <span className={`${shopStage === 1 ? 'text' : shopStage === 2 ? 'text submit' : shopStage === 3 ? 'text checked' :''}`}>2</span>
  </span>
  <span className="progress-label-shipping">運送方式</span>
  </span>

  )
}


function Step3Icon({shopStage}){
  return(

  <span className="progress-group" data-phase="credit-card">
  <span className="progress-icon">
  <span className={`${shopStage === 1 ? 'text' : shopStage === 2 ? 'text' : shopStage === 3 ? 'text submit' :''}`}>3</span>
  </span>
  <span className="progress-label-payment">付款資訊</span>
  </span>

  )
}

Step1Icon.propTypes = {
  shopStage: PropTypes.number.isRequired,
};
Step2Icon.propTypes = {
  shopStage: PropTypes.number.isRequired,
};
Step3Icon.propTypes = {
  shopStage: PropTypes.number.isRequired,
};

StepProgress.propTypes = {
  shopStage: PropTypes.number.isRequired,
};

export default function StepProgress({shopStage}){

  return(
            <section className="progress-container col col-12">
              
            <Step1Icon shopStage={shopStage}/>
            <span className="progress-bar" data-order="1"></span>

            <Step2Icon shopStage={shopStage}/>
            <span className="progress-bar" data-order="2"></span>

            <Step3Icon shopStage={shopStage}/>


          </section>

          )
          
}