import './App.css'
function App() {

  return (
    <div className="App">
      <div className="navBar">
        <div className='divLogo'>
          <img src="logo.svg" alt="logo" />
        </div>
        <div className='divLink'>
          <p className='pLink2'>Home</p>
          <p className='pLink'>Getting a Taxi</p>
          <p className='pLink'>Mobile App</p>
          <p className='pLink'>Contact Us</p>
        </div>
        <div className='divUsuario'>
          <img className='img' src="icon_sino.svg" alt="sino" />
          <div className='divSeparador'></div>
          <img className='img' src="icon_user.svg" alt="user" />
        </div>
      </div>

      <div className='caixaMae'>
        <div className='caixaUm'>
          <img className='img_dashBoard' src="papelDeParede.png" alt="imagem" />
        </div>
        <div className='caixaDois'>
          <div className='form'>
            <div>
              <p className='pTitulo'>NEED A RIDE?</p>
              <p className='pSubTitulo'>
                Book with <span className="my">my</span><span className='RIDE'>RIDE</span> now!
              </p>
            </div>
            <div className='divInput'>
              <input className='input' type="text" placeholder="Enter your destination" />
              <input className='input' type="text" placeholder="Enter your destination" />
              <button className='button'>Book a ride</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
