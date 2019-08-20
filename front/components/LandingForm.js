import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class LandingForm extends Component{
    constructor(){
        super()
    }


render(){

    return(
        <div className="landingBackground">
            
            <button className="partners" >
                <p >Partners</p>
            </button>

            <p className="seEncontraron">Se encontraron y fue sociedad a  
            <strong className="primeraVista"> primera vista</strong></p>

            <p className="partner">
                Partner es una red social colaborativa que conecta
                emprendedores con ganas de crecer y potenciar sus proyectos.
                Tenes una idea, una pregunta, algo para compartir?

                Este es tu lugar, bienvenido a esta comunidad!</p>

            <Link to="/register">
                <button className="rectangleComenzar">
                    <p className="comenzar">Comenzar</p>
                </button>
            </Link> 

            <div>
               <Link to="/auth/google"> <button style={{backgroundColor: "red",height: "40px",width: "90px",borderColor:"transparent", margin:"5px", color:"white"}}>Google</button></Link>
               <Link to="/auth/facebook"> <button style={{backgroundColor:"lightblue", height:"40px",width:"90px",borderColor:"transparent", margin:"5px", color:"white"}}>Facebook</button></Link>
            </div>

        </div>
        )
    }




}

export default LandingForm