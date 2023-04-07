import "./frontCard.css"
import CardLogo from "/images/card-logo.svg";
import FrontCardContent from "./frontCardContent.jsx";
function FrontCard(props) {
    return (  
        <div className='frontCard'>
           <img src={CardLogo} className='CardLogo' alt="werg" />
          <FrontCardContent frontCardDetails={props.frontCardDetails}/>
        </div>
    );
}

export default FrontCard;