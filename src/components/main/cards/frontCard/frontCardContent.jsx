import "./frontCardContent.css";
import CardDetails from "../../../../store/cardDetails-context.jsx";
import { useContext } from "react";
import * as FrontCalculations from "./FrontCardCalculations.jsx";

function FrontCardContent() {
  let { cardForm } = useContext(CardDetails);
  let { inputLimit } = useContext(CardDetails);
 

  let fullName = FrontCalculations.fullNameProcess(
      cardForm.values.fullName.trim().substring(0, inputLimit.fullName).trim()
    ),
    expMonth = FrontCalculations.experationDateCalc(
      cardForm.values.expMonth,
      inputLimit.expMonth
    ),
    expYear = FrontCalculations.experationDateCalc(
      cardForm.values.expYear,
      inputLimit.expYear
    ),
    cardNumber = FrontCalculations.cardNumberProccess(cardForm.values.cNum,inputLimit.cNum);

  return (
    <div className="front-card-content">
      <div className="front-card-number">
        {cardNumber !== "" ? cardNumber : "0000 0000 0000 0000"}
      </div>
      <div className="front-card-name">
        {fullName !== "" ? fullName : "John Doe"}
      </div>
      <div className="front-card-exp-date">
        {expMonth !== "" ? expMonth : "00"} / {expYear !== "" ? expYear : "00"}
      </div>
    </div>
  );
}

export default FrontCardContent;
