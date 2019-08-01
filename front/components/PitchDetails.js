import React, {Component} from 'react'
import Welcome from './Welcome';

class PitchDetails extends Component{
    saveAndContinue= (e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    back = (e)=>{
        e.preventDefault()
        this.props.prevStep()
    }

render(){
    const {values} = this.props
    const style = {}
    style.pregunta= {	height: "22px",	/*width: "171px",*/	color: "#9B9B9B",	fontFamily: "Helvetica",	fontSize: "18px",	lineHeight: "22px",}
    style.textArea = {	height: "204px",	width: "331px",	backgroundColor: "#FBFBFF",	boxShadow: "0 2px 10px 0 #EDEDED", borderColor: "transparent", fontFamily: "Helvetica", color: "#044087",fontSize: "14px"}

    return (
    <div>
        <Welcome/>
        <form action="">
            <p style={style.pregunta}>4. Cual es tu elevator pitch? </p>
            <textarea 
            style={style.textArea}
            type="text"
            onChange={this.props.handleChange('pitch')}
            defaultValue={values.pitch}/> 
            <div>
                <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                <button className="continuar" onClick={this.saveAndContinue} >Siguiente pregunta</button>
            </div>
        </form>
    </div>
    )
    
}
}

export default PitchDetails