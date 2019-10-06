import React, {Component} from 'react'
import Welcome from './Welcome'

class UserDetails extends Component{
    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.enter = this.enter.bind(this)
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

    enter(e){

        e.preventDefault();
        if (e.keyCode === 13) {
            console.log('next')
            document.getElementsByClassName("continuar")[0].click();
        }

    }


    render(){
        const {values}=this.props
        
        return(
        <div>
            <Welcome/>
            <form action="">
                <p  className="pregunta">2. Coloca tu nombre de usuario</p>
                <input 
                className="input"
                type="name"
                name='user'
                onChange={this.props.handleChange}
                // onKeyDown = {this.enter}
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

export default UserDetails