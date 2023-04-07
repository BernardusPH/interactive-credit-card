import "./backCard.css"
import CardDetails from "../../../../store/cardDetails-context.jsx";
import { useContext } from "react";
function BackCard() {
  const {cardForm}=useContext(CardDetails)
  const {inputLimit}=useContext(CardDetails)

  let cvc= (cardForm.values.cvc).substring(0, inputLimit.cvc).trim()
    return (
        <div className='backCard'>
           <div className="back-card-CVC">{ cvc !== "" ? cvc : "000"}</div>
        </div>
      );
}

export default BackCard;