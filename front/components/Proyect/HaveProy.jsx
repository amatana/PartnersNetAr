import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones';

class HaveProy extends Component{
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
            <p className="pregunta">7. Enumera los “tengo” del proyecto hasta ahora</p>
            <textarea 
            className="textarea"
            type="text"
            onChange={this.props.handleChange('haveProy')}
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

export default HaveProy