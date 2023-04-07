import Form from "./Form.jsx"
import Submitted from "./Submitted.jsx";
import "./formcontainer.css";
import CardDetails from "../../../store/cardDetails-context.jsx";
import { useContext } from "react";

function FormContainer() {
  const { didSubmit } = useContext(CardDetails);
 
  return (
    <section className="formContainer">
      {didSubmit ?<Submitted />  : <Form />}
    </section>
  );
}

export default FormContainer;
