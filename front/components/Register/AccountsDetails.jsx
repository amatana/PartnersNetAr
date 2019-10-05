import React, {Component} from 'react'
import Felicitaciones from '../Project/Felicitaciones'

class TypeProy extends Component{
    constructor(props){
        super(props)

        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
    }

    saveAndContinue(e){
        e.preventDefault()
        const input = document.getElementsByClassName('input')[0]
        // console.log(input)
        if(input.value != ''){
            // console.log('Continue')
            this.props.nextStep()
        }else{
            // console.log('dont continue')
            input.style.color = 'red'
            input.placeholder = 'please, complete this'
            input.style.borderBottomColor = 'red'
        }
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
                <p  className="pregunta">3. LinkedIn</p>
                <input 
                className="input"
                type="text"
                name="typeProy"
                onChange={this.props.handleChange}
                defaultValue={values.linkedin} 
                required/>
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