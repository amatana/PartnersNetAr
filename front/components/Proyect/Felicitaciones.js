import React, {Component} from 'react'

class Felicitaciones extends Component{

    render(){
        const style = {}
        
        style.bienvenido = {fontFamily: "Avenir Next",	color: "#044087"}
        style.name= {height: "80px",	width: "446px",fontFamily: "Avenir Next",	fontSize: "36px",
            lineHeight: "40px",	 fontWeight: "600", color: "#EF4166",}
        style.conocernos = {height: "20px",	width: "469px",	color: "#044087",	fontFamily: "Avenir Next",	fontSize: "14px",	lineHeight: "20px",}

        return(
        <div>
            <h1 style={style.bienvenido}>Felicitaciones!</h1>
            <p style={style.name}>Tenes un proyecto</p>
            <p style={style.conocernos}>Contanos de que se trata para que la comunidad pueda colaborar</p>
        </div>
        )
    }


}
export default Felicitaciones