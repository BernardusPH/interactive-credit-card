import "./backCard.css";
import CardDetails from "../../../../store/cardDetails-context.jsx";
import { useContext } from "react";
import Output from "../../../UI/Output.jsx";
function BackCard() {
  const { cardForm } = useContext(CardDetails);
  const { inputLimit } = useContext(CardDetails);

  let cvc = cardForm.values.cvc.substring(0, inputLimit.cvc).trim();
  return (
    <div className="backCard">
      <Output
        classname="back-card-CVC"
        outputCondition={cvc !== ""}
        outputText={cvc}
        fallBackText="000"
      />
    </div>
  );
}

export default BackCard;
