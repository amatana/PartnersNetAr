import React, {Component} from 'react'

class Welcome extends Component{

    render(){
        // const style = {}
        // style.bienvenido = {fontFamily: "Avenir Next",	color: "#044087"}
        // style.name= {height: "80px",	width: "446px",fontFamily: "Avenir Next",	fontSize: "36px",
        //     lineHeight: "40px",	 fontWeight: "600", color: "#EF4166",}
        // style.conocernos = {height: "20px",	width: "469px",	color: "#044087",	fontFamily: "Avenir Next",	fontSize: "14px",	lineHeight: "20px",}

        return(
        <div>
            <h1 className="bienvenido">Bienvenido!</h1>
            <p className="name">*Tu nombre*</p>
            <p className="conocernos">Completa los siguientes datos para conocernos mejor</p>
        </div>
        )
    }


}
export default Welcome