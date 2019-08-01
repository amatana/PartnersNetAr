import React, {Component} from 'react'

class Profile extends Component{

render(){


    return(
        <div>
        <div style={{float:"right", marginRight:"1em"}}>
            <p className="like"></p>
        </div>
        <div style={{float:"right", marginRight:"1em"}}>
            <p className="comment"></p>
        </div>
        <img src="" alt=""/>
        <p>Esteban Rodriguez</p>
        <p>Growth Hacker</p>
        <div style={{	boxSizing: "border-box",	height: "2px",	width: "143px",	border: "1px solid #979797",}}></div>
        <p>Soy especialista en marketing digital, un apasionado del growth hacking, tengo una agencia de MKT con un socio y ahora estamos busacon poder llevar el emprendimiento al siguiente nivel. Ya hicimos una ronda de inversion y ahora vamos por la segunda!.</p>
        <p>Intereses</p>
        <p>Inteligencia Artificial</p>

        <p>Proyectos</p>
        <p>Mupey</p>
        <p>App para compartir gastos</p>
        
        <p>Colaboraciones</p>
        <p>Vesti</p>
        <p>Ropa a medida</p>
        </div>
        )
}




}

export default Profile