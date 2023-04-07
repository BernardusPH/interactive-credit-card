import React, { useState } from 'react';
import CardContainer from "../cards/cardContainer.jsx";
import FormContainer from "../form/FormContainer.jsx"
import "./main.css";
let CardObj={
    name:"John Doe",
    frNr:"0000 0000 0000 0000",
    month:"00",
    year:"00",
    cvc:"000"
};
let Main=()=> {
const [cardinfo, setcardinfo] = useState(CardObj);

let cardChange=(newCard)=>{
setcardinfo(newCard)
}
    return (
        <main>
            <CardContainer cardDetails={cardinfo} />
            <FormContainer inputHandle={cardChange}/>
        </main>
    );
}

export default Main;