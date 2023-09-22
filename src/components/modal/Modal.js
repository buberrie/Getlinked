import "./modal.css";
import successMan from "../../assets/successful-man.png";
import star from "../../assets/star.png";
import starPink from "../../assets/star-pink.png";
import starPurple from "../../assets/star-purple.png";
import wink from "../../assets/wink.png";

const Modal = ({toggleModal}) => {
    

  return (
    <>
      <div className="modal-wrapper" >
        <div className="modal">
          <img src={star} alt="" className="star-even star43" />
          <img src={starPurple} alt="" className="star-odd star44" />
          <div className="successful">
          <img src={successMan} alt="" className="man" />
          </div>
          <p className="congrat">
            Congratulations
            <br />
            you have successfully Registered!
          </p>
          <span className="tinny">
            Yes, it was easy and you did it!<br/>check your mail box for next step 
          </span>
          <img src={wink} alt="" className="wink" />
          <img src={starPink} alt="" className="star-even star45" />
            <button className="button back-btn" onClick={toggleModal}>Back</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
