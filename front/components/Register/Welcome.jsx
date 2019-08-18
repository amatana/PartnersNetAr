import React, {Component} from 'react'

class Welcome extends Component{

    render(){

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