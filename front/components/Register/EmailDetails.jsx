import React, {Component} from 'react'
import Welcome from './Welcome'

class EmailDetails extends Component{
    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
      } 
   
    
    saveAndContinue(e){
        e.preventDefault()
        const input = document.getElementsByClassName('input')[0].value
        console.log(input)
        if(input != ''){
            console.log('Continue')
        }else{
            console.log('dont continue')
        }
        // this.props.nextStep()
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
                type="email"
                name='email'
                onChange={this.props.handleChange}
                defaultValue={values.email} 
                required/>
                <div>
                    <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button>
                </div>
            </form>
        </div>
        )


    }
}

export default EmailDetails