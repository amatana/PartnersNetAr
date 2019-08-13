import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class LandingForm extends Component{
    constructor(){
        super()
    }


render(){
    const style = {}

    style.primeraVista = {height: "80px",	width: "446px",		fontFamily: "Avenir Next",	fontSize: "36px",
        lineHeight: "40px",	 fontWeight: "600", color: "#EF4166", textAlign:"center",}
    style.seEncontraron = {
        height: "80px",	width: "446px",	color: "#FFFFFF", fontFamily: "Avenir Next",	fontSize: "36px",
        lineHeight: "40px",	/*textAlign:"center"*/ margin: "auto", }
    style.partner = {	height: "100px",	width: "469px",	color: "#FFFFFF",	fontFamily: "Avenir Next",	fontSize: "14px",
        lineHeight: "20px",	/*textAlign:"center"*/  margin: "auto", marginTop:"20px",}
    style.background = {height: "1038px",	width: "1177px",	background: "rgba(65,167,210,1)", 
        background: "linear-gradient(to right, rgba(65,167,210,1) 0%, rgba(10,156,201,1) 11%, rgba(7,138,181,1) 29%, rgba(0,77,105,1) 53%, rgba(0,77,105,1) 53%, rgba(3,119,158,1) 73%, rgba(12,154,201,1) 91%, rgba(122,220,255,1) 100%",
        textAlign: "center",}
    style.rectangleComenzar = {height: "44px",	width: "288px",	border: "2px solid #EF4166",
       	borderRadius: "4px", backgroundColor:"rgba(0,0,0,0)"}
    style.comenzar = {	height: "19px",	width: "288px",	color: "#EF4166",	fontFamily: "Avenir Next",	fontSize: "14px",
        fontWeight: "500",	lineHeight: "19px",}
    
    return(
        <div style={style.background}>
            
            <p className="se-encontraron-y-fue"
            style={style.seEncontraron}>Se encontraron y fue sociedad a <strong style={style.primeraVista}>primera vista</strong></p>

            <p className=".partner-es-una-red-s"style={style.partner}>
                Partner es una red social colaborativa que conecta
                emprendedores con ganas de crecer y potenciar sus proyectos.
                Tenes una idea, una pregunta, algo para compartir?

                Este es tu lugar, bienvenido a esta comunidad!</p>

            <button className="rectangle-2-copy-2" 
            style={style.rectangleComenzar}
            ><p 
            style={style.comenzar}
            >Comenzar</p><Link to="/register"></Link> </button>

        </div>
        )
    }




}

export default LandingForm