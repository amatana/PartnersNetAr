import React, {Component} from 'react'
import Welcome from './Welcome'

class EmailDetails extends Component{
    saveAndContinue = (e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const {values}=this.props
        
        return(
        <div>
            <Welcome/>
            <form action="">
                <p className="pregunta">1. Confirmanos tu email</p>
                <input
                className="input" 
                
                type="text"
                
                onChange={this.props.handleChange('email')}
                defaultValue={values.email} />
                <div>
                    <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button>
                </div>
            </form>
        </div>
        )


    }
}

export default EmailDetails