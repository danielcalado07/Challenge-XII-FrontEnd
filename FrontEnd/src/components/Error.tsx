import React from "react";
import "../styles/Error.css";
function Error() {
    function voltarHome() {
        window.location.href = "/";
    }
    return (
        <div className="erro">
            <img className="imgError" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/alerta.svg" alt="404" />
            <h1>404</h1>
            <h2>Oops! Looks like you're lost.</h2>
            <button className="buttonError" onClick={voltarHome}>Go back home</button>
        </div>
    );
}

export default Error;