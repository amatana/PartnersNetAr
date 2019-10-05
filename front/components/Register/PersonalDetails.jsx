import React, {Component} from 'react'
import Welcome from './Welcome';

class PersonalDetails extends Component{
    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.save = this.save.bind(this)
      } 
   
    
      saveAndContinue(e){
        e.preventDefault()
        input = document.getElementsByClassName('boxList')
        console.log(input.length)
        if(input.length != 0){
            console.log('Continue')
            this.props.nextStep()
        }else{
            console.log('dont continue')
            input.style.color = 'red'
            input.placeholder = 'please, complete this'
            input.style.borderBottomColor = 'red'
        }
    }
    back(e){
        e.preventDefault()
        this.props.prevStep()
    }

    save(e){
        e.preventDefault()
        const input= document.getElementById('inpInt')
        this.props.handleInterest(input)
        input.value= ''
        input = document.getElementsByClassName('boxList')
        console.log(input.length)
    }

    render(){
        const {values}=this.props
        const interest =values.interesting

        const list = interest.map((interest,i)=>{
            return(
            <div key={i} className="boxList">
            <p className="textList"
            >{interest}</p>
            </div>)
       })

        return(
        <div>
            <Welcome/>
            <form>
                <p className="pregunta">7.Cuales son tus principales intereses?</p>
                <input 
                className="input"
                id="inpInt"
                type="text"
                defaultValue={values.interesting}/>
                <button className="saveInterest" onClick={this.save}></button>

                <br/>
                {list}
                
                

                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue} >Siguiente Pregunta</button>
                </div>
            </form>
       </div>
       )
    }



}
export default PersonalDetails