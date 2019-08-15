import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones';

class PitchDetails extends Component{
    constructor(props){
        super(props)

        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
    }

    saveAndContinue(e){
        e.preventDefault()
        this.props.nextStep()
        
    }
    back(e){
        e.preventDefault()
        this.props.prevStep()
    }


render(){
    const {values} = this.props
    
    return (
    <div>
        <Felicitaciones/>
        <form action="">
            <p className="pregunta">3. De que se trata {values.nameProy}? </p>
            <textarea 
            className="textarea"
            type="text"
            name="infoProy"
            onChange={this.props.handleChange}
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