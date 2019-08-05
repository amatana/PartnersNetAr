import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones';

class NeedProy extends Component{
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
            <p className="pregunta">8. Enumera los “necesito” del proyecto hasta ahora</p>
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

export default NeedProy