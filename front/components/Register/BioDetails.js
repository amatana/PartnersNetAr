import React, {Component} from 'react'
import Welcome from './Welcome';

class BioDetails extends Component{
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
        <Welcome/>
        <form action="">
            <p className="pregunta">5. Contanos un poco sobre vos </p>
            <textarea 
            className="textarea"
            type="text"
            onChange={this.props.handleChange('bio')}
            defaultValue={values.bio}/> 
            <div>
                <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                <button className="continuar" onClick={this.saveAndContinue} >Siguiente pregunta</button>
            </div>
        </form>
    </div>
    )
    
}
}

export default BioDetails