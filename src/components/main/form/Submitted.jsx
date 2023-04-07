import CheckMark from "/images/icon-complete.svg";
import "./Submitted.css";
function thankYou() {
    return (
        <div className="details-confirmed">
            <img className="checkMark" src={CheckMark} alt="confirmed" />
            <h2>THANK YOU!</h2>
            <p>We've added your card deatails</p>
            <button>Continue</button>
        </div>
    );
}

export default thankYou;