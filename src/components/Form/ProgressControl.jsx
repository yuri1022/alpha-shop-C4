import '../../scss_dir/progresscontrol.scss';
import PropTypes from 'prop-types';


ProgressControl.propTypes = {
  onProgressControlClick: PropTypes.func.isRequired,
};


export default function ProgressControl({ onProgressControlClick }) {
  return (
    <div className='progress-control-container'>
      <div className="previous">
        <button className="btn-previous" onClick={() => onProgressControlClick('previous')}>
          上一步
        </button>
      </div>
      <div className="next">
        <button className="btn-next" onClick={() => onProgressControlClick('next')}>
          下一步
        </button>
      </div>
    </div>
  );
}