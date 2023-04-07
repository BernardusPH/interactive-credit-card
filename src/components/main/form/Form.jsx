import { useContext } from "react";
import "./Form.css";
import CardDetails from "../../../store/cardDetails-context.jsx";

function Form() {
  //Formik state
  const { cardForm } = useContext(CardDetails);

  return (
    <form className="form" onSubmit={cardForm.handleSubmit}>
      <div className="card-name">
        <label htmlFor="fullName">CARDHOLDER NAME</label>
        <input
          autoComplete="off"
          className={
            cardForm.errors.fullName && cardForm.touched.fullName
              ? "error-input"
              : "normal-input"
          }
          id="fullName"
          name="fullName"
          type="text"
          placeholder="e.g John Doe"
          value={cardForm.values.fullName}
          onChange={cardForm.handleChange}
          onBlur={cardForm.handleBlur}
        />
        {cardForm.errors.fullName && cardForm.touched.fullName ? (
          <p className="error-text">{cardForm.errors.fullName}</p>
        ) : (
          ""
        )}
      </div>

      <div className="card-fr-number">
        <label htmlFor="cNum">CARD NUMBER</label>
        <input
          autoComplete="off"
          className={
            cardForm.errors.cNum && cardForm.touched.cNum
              ? "error-input"
              : "normal-input"
          }
          type="text"
          id="cNum"
          name="cNum"
          placeholder="e.g 1234 5678 9123 0000"
          value={cardForm.values.cNum}
          onChange={cardForm.handleChange}
          onBlur={cardForm.handleBlur}
        />
        {cardForm.errors.cNum && cardForm.touched.cNum ? (
          <p className="error-text">{cardForm.errors.cNum}</p>
        ) : (
          ""
        )}
      </div>

      <div className="date-CVC-container">
        <div className="card-month-year">
          <label htmlFor="month">EXP. DATE (MM/YY)</label>
          <div className="date-flex-wrap">
            <input
              autoComplete="off"
              className={
                cardForm.errors.expMonth && cardForm.touched.expMonth
                  ? "error-input"
                  : "normal-input"
              }
              type="text"
              name="expMonth"
              id="expMonth"
              placeholder="MM"
              value={cardForm.values.expMonth}
              onChange={cardForm.handleChange}
              onBlur={cardForm.handleBlur}
            />

            <input
              autoComplete="off"
              className={
                cardForm.errors.expYear && cardForm.touched.expYear
                  ? "error-input"
                  : "normal-input"
              }
              type="text"
              placeholder="YY"
              name="expYear"
              id="expYear"
              value={cardForm.values.expYear}
              onChange={cardForm.handleChange}
              onBlur={cardForm.handleBlur}
            />
          </div>
          {(cardForm.errors.expMonth && cardForm.touched.expMonth) ||
          (cardForm.errors.expYear && cardForm.touched.expYear) ? (
            <p className="error-text">
              {cardForm.errors.expMonth || cardForm.errors.expYear}
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="CVC">
          <label htmlFor="cvc">CVC</label>
          <input
            autoComplete="off"
            className={
              cardForm.errors.cvc && cardForm.touched.cvc
                ? "error-input"
                : "normal-input"
            }
            type="text"
            id="cvc"
            name="cvc"
            placeholder="e.g 123"
            value={cardForm.values.cvc}
            onChange={cardForm.handleChange}
            onBlur={cardForm.handleBlur}
          />
          {cardForm.errors.cvc && cardForm.touched.cvc ? (
            <p className="error-text">{cardForm.errors.cvc}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <button type="submit" className="form-button">
        Confirm
      </button>
    </form>
  );
}

export default Form;
