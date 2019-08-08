import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones'

class TypeProy extends Component{
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
            <Felicitaciones/>
            <form action="">
                <p  className="pregunta">2. Tipo de proyecto</p>
                <input 
                className="input"
                type="text"
                onChange={this.props.handleChange('typeProy')}
                defaultValue={values.user} />
                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button>
               </div>
            </form>
        </div>
        )


    }
}

export default TypeProy