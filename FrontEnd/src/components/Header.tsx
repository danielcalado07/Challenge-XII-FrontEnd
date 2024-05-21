import React from 'react';
function Header() {
  return (
      <header className="header">
        <img className='imagemLogo' src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/logo.svg" alt="logo" />
        <div className='divLink'>
          <p className='pLink2'>Home</p>
          <p className='pLink'>Getting a Taxi</p>
          <p className='pLink'>Mobile App</p>
          <p className='pLink'>Contact Us</p>
        </div>
        <div className='divUsuario'>
          <img className='img' src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/icon_sino.svg" alt="sino" />
          <div className='divSeparador'></div>
          <img className='img' src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/icon_user.svg" alt="user" />
        </div>
      </header>
  );
}

export default Header;
