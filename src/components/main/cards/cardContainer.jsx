
import FrontCard from "./frontCard/frontCard.jsx";
import BackCard from "./backCard/backCard.jsx";
import "./cardContainer.css"
function CardContainer() {

    return ( 
        <section className='cardContainer'>
            <FrontCard />
            <BackCard />
        </section>
     );
}

export default CardContainer;