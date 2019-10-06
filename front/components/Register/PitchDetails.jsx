import React, {Component} from 'react'
import Welcome from './Welcome';

class PitchDetails extends Component{
    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.enter = this.enter.bind(this)
      } 
    
      saveAndContinue(e){
        e.preventDefault()
        const input = document.getElementsByClassName('textarea')[0]
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


    enter(e){

        e.preventDefault();
        if (e.keyCode === 13) {
            document.getElementsByClassName("continuar")[0].click();
        }

    }

render(){
    const {values} = this.props
    
    return (
    <div>
        <Welcome/>
        <form action="">
            <p className="pregunta">4. Cual es tu elevator pitch? </p>
            <textarea 
            className="textarea"
            type="text"
            name='pitch'
            onChange={this.props.handleChange}
            onKeyUp = {this.enter}
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