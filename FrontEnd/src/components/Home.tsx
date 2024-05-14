import React, { useState } from "react";
import "../styles/Home.css";
import NavBar from "./navBar";

function Home() {
  const [focusedInput, setFocusedInput] = useState("")
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [errorPickp, setErrorPickp] = useState("");
  const [errorDest, setErrorDest] = useState("");
  const [status1, setStatus1] = useState("true");
  const [status2, setStatus2] = useState("true");

  window.onload = async function () {
    async function getLocationByIP() {
      const apiUrl = 'https://ipapi.co/json/';

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const location = `${data.city}, ${data.region}, ${data.country_name}`;
        setLocation(location);
      } catch (error) {
        console.error('Erro ao obter localização:', error);
      }
    }

    getLocationByIP();
  };

  function analirInputUm(analise: string) {
    setFocusedInput(analise);
    setStatus1("true");
  }

  function analirInputDois(analise: string) {
    setFocusedInput(analise);
    setStatus2("true");
  }

  function limparPickup() {
    setLocation("");
  }

  function limparDetination() {
    setDestination("");
  }

  function irParaError() {
    if (location === "") {
      setErrorPickp("invalid Your pickup")
      setStatus1("false")
    }
    if (destination === "") {
      setErrorDest("invalid Your Destination")
      setStatus2("false")
    }
    if (location !== "" && destination !== "") {
      setStatus1("true")
      setStatus2("true")
      window.location.href = "/error";
    }
  }

  return (
    <div className="Home">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="caixaMae">
        <div className="caixaUm">
          <img className="img_dashBoard" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/papelDeParede.png" alt="imagem" />
        </div>
        <div className="caixaDois">
          <div className="form">
            <div>
              <p className="pTitulo">NEED A RIDE?</p>
              <p className="pSubTitulo">Book with <span className="my">my</span><span className="RIDE">RIDE</span> now!</p>
            </div>
            <div className="divInput">
              <p className="pInput">Find a ride now</p>
              <div className="divLabel">
                <label className={`label ${focusedInput === 'pickup' ? 'focused' : ''}`} htmlFor='pickup'>Your Pickup</label>
              </div>
              <div className="contInput">
                <input id="pickup" className="input" type="text" value={location} onBlur={() => analirInputUm("")}
                  onFocus={() => analirInputUm("pickup")} onChange={(e) => setLocation(e.target.value)}
                />
                <span className={`clear-input ${focusedInput === 'pickup' ? 'focused' : ''}`} id="clearInput" onClick={limparPickup}>X</span>
              </div>
              <div className="divpErro">
                {status1 === "false" && (
                  <>
                    <img className="imgButton2" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/erro1.svg" /><p className="pErro">{errorPickp}</p>
                  </>
                )}
              </div>
              <div className="divLabel">
                <label className={`label2 ${focusedInput === 'destination' ? 'focused' : ''}`} htmlFor='destination'>Your Destination</label>
              </div>
              <div className="contInput">
                <input id="destination" className="input" type="text" value={destination} onBlur={() => analirInputDois("")}
                  onFocus={() => analirInputDois('destination')} onChange={(e) => setDestination(e.target.value)} />
                <span id="clearInput" className={`clear-input ${focusedInput === 'destination' ? 'focused' : ''}`} onClick={limparDetination}>X</span>
              </div>
              <div className="divpErro">
                {status2 === "false" && (
                  <>
                    <img className="imgButton2" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/erro1.svg" /><p className="pErro">{errorDest}</p>
                  </>
                )}
              </div>
              <div className="caixaBotao">
                <button className="button" onClick={irParaError}><img className="imgButton" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/icon.svg" />FIND A DRIVER</button>
                <h2 className="h2">MORE OPTIONS</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="titulosSessao2">
        <p className="pTituloSessao2">WHY SHOULD YOU RIDE WITH US?</p>
        <p className="pSubTituloSessao2">Best in class rides</p>
      </div>
      <div className="painelDeCarros">
        <div className="carro">
        <div className="conteudo">
          <img className="imgCarro" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/papelDeParede.png" alt="imagem" />
          <p className="pCarro">Basic</p>
          <p className="p2Carro">The best balance of price and comfort. You will not go wrong with our basic rides.</p>
          <p className="pLearnMore">LEARN MORE</p>
        </div>
        </div>
        <div className="carro">
        <div className="conteudo">
        <img className="imgCarro" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/papelDeParede.png" alt="imagem" />
        <p className="pCarro">Basic</p>
          <p className="p2Carro">The best balance of price and comfort. You will not go wrong with our basic rides.</p>
          <p className="pLearnMore">LEARN MORE</p>
        </div>
        </div>
        <div className="carro">
        <div className="conteudo">
        <img className="imgCarro" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/papelDeParede.png" alt="imagem" />
        <p className="pCarro">Basic</p>
          <p className="p2Carro">The best balance of price and comfort. You will not go wrong with our basic rides.</p>
          <p className="pLearnMore">LEARN MORE</p>
        </div>
        </div>
        <div className="carro">
          <div className="conteudo">
          <img className="imgCarro" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/papelDeParede.png" alt="imagem" />
          <p className="pCarro">Basic</p>
          <p className="p2Carro">The best balance of price and comfort. You will not go wrong with our basic rides.</p>
          <p className="pLearnMore">LEARN MORE</p>
          </div>
        </div>
      </div>
    </div>
  )

};

export default Home;