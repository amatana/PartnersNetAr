import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class LandingForm extends Component {
  constructor(props) {
    super(props);
    // btnAbrir = document.getElementbyId('join-register'),
    
    // cerrarPopup = document.getElementById('btn-cerrar');
    this.registrarse=this.registrarse.bind(this)
    this.cerrarPop=this.cerrarPop.bind(this)

  }
  registrarse(){
    let overlay = document.getElementsByClassName('overlay')[0],
    popup = document.getElementsByClassName('popup')[0]
    overlay.classList.add('active')
    popup.classList.add('active')
    
  }

  cerrarPop(){
    let overlay = document.getElementsByClassName('overlay')[0],
    popup = document.getElementsByClassName('popup')[0]
    overlay.classList.remove('active')
    popup.classList.remove('active')
  }


  render() {
    return (
<div className="content">
		<div className="center">
			<img src="../img/partnersBN.svg"  width="90px" height="35px" alt="Partners"/>
			<h1>
				Build together,<br/>
				<b>Ship together.</b>
			</h1>
			<p>
				Partners es una red social colaborativa que conecta emprendedores con ganas de crecer y y potenciar sus proyectos.<br/>
				En este espacio vas a poder compartir tus proyectos, dar y recibir feedback de otros emprendedores. Intercambiar conocimientos y promover una cultura colaborativa.
			</p>
			<div className="button-outline">Quiero saber mas</div>
			<div className="button " id="join-register" onClick={this.registrarse}>Quiero unirme</div>
		</div>

  <div className="overlay">
    <div className="popup">
      <a href="#" id="btn-cerrar" className="btn-cerrar" onClick={this.cerrarPop}><i className="fas fa-times"></i></a>
            <a href="/auth/google">
              <button className="loginBtn loginGoogle"
                id="google">
               Registrate con Google
              </button>
            </a>
            <a href="/auth/facebook">
              <button className="loginBtn loginFacebook">
               Registrate con Facebook
              </button>
            </a>
    </div>
  </div>
</div>

    );
  }
}

export default LandingForm;
