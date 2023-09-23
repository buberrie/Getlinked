import './processing.css'
import loader from '../../assets/Spinner-1s-200px.svg'

const Process = () => {
  return (
    <>
        <div className="load-wrapper">
            <img src={loader} alt="" className="loader" />
        </div>
    </>
  )
}

export default Process