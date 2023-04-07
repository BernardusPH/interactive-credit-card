import React from 'react';

const Output = (props) => {
    return (
        <div className={props.classname}>
            {props.outputCondition?props.outputText:props.fallBackText}
        </div>
    );
}

export default Output;
