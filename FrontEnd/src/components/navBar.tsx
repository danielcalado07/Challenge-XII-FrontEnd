import React from 'react';
function NavBar() {
  return (
      <div className="navBar">
        <img className='imagemLogo' src="logo.svg" alt="logo" />
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
  );
}

export default NavBar;
