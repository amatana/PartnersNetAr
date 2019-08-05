import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones';

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
    
    return (
    <div>
        <Felicitaciones/>
        <form action="">
            <p className="pregunta">3. De que se trata *nombre del proyecto*? </p>
            <textarea 
            className="textarea"
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