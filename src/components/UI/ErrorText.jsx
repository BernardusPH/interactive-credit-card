import React from 'react';

const ErrorText = (props) => {
    return (
        <>
            {props.hasError?<p className="error-text">{props.errorText}</p> :""}
        </>
    );
}

export default ErrorText;
