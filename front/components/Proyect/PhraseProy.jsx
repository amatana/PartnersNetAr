import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones';

class PhraseProy extends Component{
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
        const {values}=this.props
        
        return(
        <div>
            <Felicitaciones/>
            <form action="">
                <p className="pregunta">5. Contanos tu proyecto en una frase</p>
                <input
                className="input" 
                
                type="text"
                
                onChange={this.props.handleChange('phraseProy')}
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