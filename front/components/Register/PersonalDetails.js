import React, {Component} from 'react'
import Welcome from './Welcome';

class PersonalDetails extends Component{
    saveAndContinue= (e)=>{
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e)=>{
        e.preventDefault()
        this.props.prevStep()
    }

    save=(e)=>{
        e.preventDefault()
        const input= document.getElementById('inpInt')
        this.props.handleInterest(input)
        input.value= ''
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
                <p className="pregunta">4.Cuales son tus principales intereses?</p>
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