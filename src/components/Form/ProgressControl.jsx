import '../../scss_dir/progresscontrol.scss'

function Previous(){
  return(
    <div className="previous">
      <button className="btn-previous">上一步</button></div> 
  )
}

function NextStep() {
  return (
    <div className="next">
    <button className="btn-next">
      下一步
    </button>
    </div>
  );
}


export default function ProgressControl() {
  return(
    <div className='progress-control-container'>
    <Previous />
    <NextStep />
    </div>
    
  )
}