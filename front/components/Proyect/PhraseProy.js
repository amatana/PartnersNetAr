import React, {Component} from 'react'
import Welcome from './Welcome'

class PhraseProy extends Component{
    saveAndContinue = (e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    back = (e)=>{
        e.preventDefault()
        this.props.prevStep()
    }


    render(){
        const {values}=this.props
        
        return(
        <div>
            <Welcome/>
            <form action="">
                <p className="pregunta">5. Contanos tu proyecto en una frase</p>
                <input
                className="input" 
                
                type="text"
                
                onChange={this.props.handleChange('email')}
                defaultValue={values.email} />
                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button>
                </div>
            </form>
        </div>
        )


    }
}

export default PhraseProy