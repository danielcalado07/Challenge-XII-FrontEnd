import React, { useState } from "react";

function PainelCadMotoristas() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Country, setCountry] = useState("");
    const [City, setCity] = useState("");
    const [ReferralCode, setReferralCode] = useState("");
    const [CarType, setCarType] = useState("");
    const [OwnCar, setOwnCar] = useState(false);
    const [error, setError] = useState("");
    const [status1, setStatus1] = useState("");
    const [status2, setStatus2] = useState("");
    const [status3, setStatus3] = useState("");
    const [status4, setStatus4] = useState("");
    const [status5, setStatus5] = useState("");
    const [status6, setStatus6] = useState("");
    const [status7, setStatus7] = useState("");

    function analirInputUm() {
        if (FirstName === "") {
            setStatus1("Invalid name");
        }
        if (LastName === "") {
            setStatus2("Invalid last name");
        }
        if (Email === "") {
            setStatus3("Invalid email");
        }
        if (Country === "") {
            setStatus4("Invalid country");
        }
        if (City === "") {
            setStatus5("Invalid city");
        }
        if (ReferralCode === "") {
            setStatus6("Invalid code");
        }
        if (CarType === "") {
            setStatus7("Select a vehicle type");
        }
    }

    return (
        <div className="painelDeMotoristas">
            <div className="cadastroDeMotorista">
                <div className="menuTitulo">
                    <img className="logoDriverCar" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/carroLogoDrive.png" alt="imagem" />
                    <p className="tituloMotorista">Drive with MyRide<span className="subTituloMotorista"><br />Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</span></p>
                </div>
                <div className="nomeSobrenome">
                    <div className="content">
                        <input className="inputNome" type="text" placeholder="First Name" value={FirstName} onFocus={() => setStatus1("")} onChange={(e) => setFirstName(e.target.value)} />
                        <div className="divpErro2">
                            {status1 != "" && (
                                <>
                                    <img className="imgButton3" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/erro1.svg" />
                                    <p className="pErro2">{status1}</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="content">
                        <input className="inputSobrenome" type="text" placeholder="Last Name" value={LastName} onFocus={() => setStatus2("")} onChange={(e) => setLastName(e.target.value)} />
                        <div className="divpErro2">
                            {status2 != "" && (
                                <>
                                    <img className="imgButton3" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/erro1.svg" />
                                    <p className="pErro2">{status2}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="email">
                    <input className="inputEmail" type="text" placeholder="Email Address" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="divpErro2">
                        {status3 != "" && (
                            <>
                                <img className="imgButton3" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/erro1.svg" />
                                <p className="pErro2">{status3}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className="divLabel">
                    <label className={'label3'} >Country</label>
                </div>
                <div className="contInput2">
                    <input id="inputCountry" className="inputCountry" type="text" placeholder="" value={Country} onChange={(e) => setCountry(e.target.value)} />
                    <div className="divpErro2">
                        {status4 != "" && (
                            <>
                                <img className="imgButton3" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/erro1.svg" />
                                <p className="pErro2">{status4}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className="city">
                    <input className="inputCity" type="text" placeholder="City" value={City} onChange={(e) => setCity(e.target.value)} />
                    <div className="divpErro2">
                        {status5 != "" && (
                            <>
                                <img className="imgButton3" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/erro1.svg" />
                                <p className="pErro2">{status5}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className="referralCode">
                    <input className="inputreferralCode" type="text" placeholder="Referral Code" value={ReferralCode} onChange={(e) => setReferralCode(e.target.value)} />
                    <div className="divpErro2">
                        {status6 != "" && (
                            <>
                                <img className="imgButton3" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/erro1.svg" />
                                <p className="pErro2">{status6}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className="Radio">
                    <label className="labelRadio" >I drive my own car</label>
                    <div className="switch-container">
                        <input type="checkbox" id="switch" />
                        <label htmlFor="switch" className="switch-label">
                            <span className="switch-ball"></span>
                        </label>
                    </div>
                </div>
                <div className="divLabel4">
                    <label className="label4" >Select your car type</label>
                </div>
                <div className="botoes">
                    <button className="button2" onClick={() => setStatus7("Sedan")}>
                        <img className="imgBotao" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/sedan.svg" alt="imagem" />
                        <br />Sedan</button>
                    <button className="button2" onClick={() => setStatus7("SUV/Van")}>
                        <img className="imgBotao" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/van.svg" alt="imagem" />
                        <br />SUV/Van</button>
                    <button className="button2" onClick={() => setStatus7("Semi Luxury")}>
                        <img className="imgBotao" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/semiSuxury.svg" alt="imagem" />
                        <br />Semi Luxury</button>
                    <button className="button2" onClick={() => setStatus7("Luxury Car")}>
                        <img className="imgBotao" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/car.svg" alt="imagem" />
                        <br />Luxury Car</button>
                </div>
                <div className="divpErro2">
                    {status7 != "" && (
                        <>
                            <img className="imgButton3" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/erro1.svg" />
                            <p className="pErro2">{status7}</p>
                        </>
                    )}
                </div>
                <button className="button3" onClick={analirInputUm}>SUBMIT</button>
            </div>
        </div>
    );
}

export default PainelCadMotoristas;
