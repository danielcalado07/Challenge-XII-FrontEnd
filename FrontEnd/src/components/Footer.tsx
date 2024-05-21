import React from 'react';
function Footer() {

    function irParaError() {
        window.location.href = '/error';
    }
    
    function irParaFacebook() {
        window.location.href = 'https://www.facebook.com/compass.uol';
    }

    function irParaInstagram() {
        window.location.href = 'https://www.instagram.com/compass.uol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
    }

    function irParaTwitter() {
        window.location.href = 'https://x.com/compassuol';
    }

  return (
    <footer className="footer">
    <div className="footerContent">
      <div className="logoRedesSociais">
        <img className="logoFooter" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/logoBranco.svg" alt="imagem" />
        <span className="footerText">MyRide Inc., 2nd Floor, New York, NY 10016</span>
        <div className="linkRedesSociais">
          <img className="imgRedeSocial" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/iconFacebook.svg" onClick={irParaFacebook} alt="imagem" />
          <img className="imgRedeSocial" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/iconInstagram.svg" onClick={irParaInstagram} alt="imagem" />
          <img className="imgRedeSocial" src="https://chalangebucketdaniel.s3.us-east-2.amazonaws.com/ImagensChallenge/iconTwitter.svg" onClick={irParaTwitter} alt="imagem" />
        </div>
      </div>
      <div className="company">
        <p className="footerTextCompany">Company</p>
        <p className="footerText2" onClick={irParaError}>About Us</p>
        <p className="footerText2" onClick={irParaError}>News</p>
        <p className="footerText2" onClick={irParaError}>Careers</p>
        <p className="footerText2" onClick={irParaError}>How we work</p>
      </div>
      <div className="support">
        <p className="footerTextSupport">Support</p>
        <p className="footerText2" onClick={irParaError}>FAQ</p>
        <p className="footerText2" onClick={irParaError}>US Office</p>
        <p className="footerText2" onClick={irParaError}>Asia Office</p>
        <p className="footerText2" onClick={irParaError}>Help Center</p>
      </div>
      <div className="more">
        <p className="footerTextMore">More</p>
        <p className="footerText2" onClick={irParaError}>Become a partner</p>
        <p className="footerText2" onClick={irParaError}>Partner Support</p>
        <p className="footerText2" onClick={irParaError}>Mobile app links</p>
        <p className="footerText2" ></p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
