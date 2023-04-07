import { useContext } from "react";
import "./Form.css";
import CardDetails from "../../../store/cardDetails-context.jsx";
import Input from "../../UI/Input.jsx";
import ErrorText from "../../UI/ErrorText.jsx";
function Form() {
  //Formik state
  const { cardForm } = useContext(CardDetails);

  return (
    <form className="form" onSubmit={cardForm.handleSubmit}>
      <div className="card-name">
        <label htmlFor="fullName">CARDHOLDER NAME</label>
        <Input
          classname={
            cardForm.errors.fullName && cardForm.touched.fullName
              ? "error-input"
              : "normal-input"
          }
          id="fullName"
          name="fullName"
          placeholder="e.g John Doe"
          value={cardForm.values.fullName}
          onchange={cardForm.handleChange}
          onblur={cardForm.handleBlur}
        />
        <ErrorText
          hasError={cardForm.errors.fullName && cardForm.touched.fullName}
          errorText={cardForm.errors.fullName}
        />
      </div>

      <div className="card-fr-number">
        <label htmlFor="cNum">CARD NUMBER</label>
        <Input
          classname={
            cardForm.errors.cNum && cardForm.touched.cNum
              ? "error-input"
              : "normal-input"
          }
          id="cNum"
          placeholder="e.g 1234 5678 9123 0000"
          value={cardForm.values.cNum}
          onchange={cardForm.handleChange}
          onblur={cardForm.handleBlur}
        />
        <ErrorText
          hasError={cardForm.errors.cNum && cardForm.touched.cNum}
          errorText={cardForm.errors.cNum}
        />
      </div>

      <div className="date-CVC-container">
        <div className="card-month-year">
          <label htmlFor="expMonth">EXP. DATE (MM/YY)</label>
          <div className="date-flex-wrap">
            <Input
              classname={
                cardForm.errors.expMonth && cardForm.touched.expMonth
                  ? "error-input"
                  : "normal-input"
              }
              name="expMonth"
              id="expMonth"
              placeholder="MM"
              value={cardForm.values.expMonth}
              onchange={cardForm.handleChange}
              onblur={cardForm.handleBlur}
            />

            <Input
              classname={
                cardForm.errors.expYear && cardForm.touched.expYear
                  ? "error-input"
                  : "normal-input"
              }
              placeholder="YY"
              name="expYear"
              id="expYear"
              value={cardForm.values.expYear}
              onchange={cardForm.handleChange}
              onblur={cardForm.handleBlur}
            />
          </div>
          <ErrorText
            hasError={
              (cardForm.errors.expMonth && cardForm.touched.expMonth) ||
              (cardForm.errors.expYear && cardForm.touched.expYear)
            }
            errorText={cardForm.errors.expMonth || cardForm.errors.expYear}
          />
        </div>

        <div className="CVC">
          <label htmlFor="cvc">CVC</label>
          <Input
            classname={
              cardForm.errors.cvc && cardForm.touched.cvc
                ? "error-input"
                : "normal-input"
            }
            id="cvc"
            name="cvc"
            placeholder="e.g 123"
            value={cardForm.values.cvc}
            onchange={cardForm.handleChange}
            onblur={cardForm.handleBlur}
          />
          <ErrorText
            hasError={cardForm.errors.cvc && cardForm.touched.cvc}
            errorText={cardForm.errors.cvc}
          />
        </div>
      </div>
      <button type="submit" className="form-button">
        Confirm
      </button>
    </form>
  );
}

export default Form;
