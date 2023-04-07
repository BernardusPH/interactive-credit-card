import "./frontCardContent.css";
import CardDetails from "../../../../store/cardDetails-context.jsx";
import { useContext } from "react";
import * as FrontCalculations from "./FrontCardCalculations.jsx";
import Output from "../../../UI/Output.jsx";

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
    cardNumber = FrontCalculations.cardNumberProccess(
      cardForm.values.cNum,
      inputLimit.cNum
    );

  return (
    <div className="front-card-content">
      <Output
        classname="front-card-number"
        outputCondition={cardNumber !== ""}
        outputText={cardNumber}
        fallBackText="0000 0000 0000 0000"
      />
      <Output
        classname="front-card-name"
        outputCondition={fullName !== ""}
        outputText={fullName}
        fallBackText="John Doe"
      />
      <Output
        classname="front-card-exp-date"
        outputCondition={expMonth !== "" && expYear !== ""}
        outputText={`${expMonth}/${expYear}`}
        fallBackText="00/00"
      />
    </div>
  );
}

export default FrontCardContent;
