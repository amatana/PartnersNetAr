import React, { Component} from 'react'
import '../style.css'

class Proyect extends Component{

render(){

    
return(
<div>
    <div>
        <div style={{float:"right", marginRight:"1em"}}>
            <p className="like"></p>
        </div>
        <div style={{float:"right", marginRight:"1em"}}>
            <p className="comment"></p>
        </div>
    <h1 className='tituloProyecto'>Mupey</h1>
    </div>
    <p className='claseProyecto'>App de pagos</p>
    <p className='pitchProyecto'>Saliste a comer con tus amigos y pagar la cuenta es un bardo. Con Mupey la app que divide todo por vos pagar la cuenta se hace solo con un click.</p>
    <p className='descripcionProyecto'>Cansado de ir a comer con tus amigos y las cuentas nunca dan? Con Mupay se acabaron los problemas esta App es tu aliada a la hora de salir a comer con tus amigos.</p>
    <p>TENGO</p>
    <p className="queTengo"> Un equipo conformado</p>
      <p className="queTengo">  MVP testeable</p>
      <p className="queTengo">  Ronda de inversiones</p>
    <p>NECESITO</p>
    <p className="queNecesito">Un experto en Marketing</p>
    <p className="queNecesito">  Contador</p>

    <p>GRAFICO</p>

    <p>EL EQUIPO</p>
    <img src="" alt="Perfil"/>
    <p className="teamName">Camila de la Torre</p>
    <p className="teamRole">CEO</p>

</div>
    
        )    
    }
}

export default Proyect