import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones';

class TeamProy extends Component{
    constructor(props){
        super(props)

        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.save = this.save.bind(this)
    }

    saveAndContinue(e){
        e.preventDefault()
        this.props.nextStep()
        
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
    }

    render(){
        const {values}=this.props
        const teamProy =values.teamProy

        const list = teamProy.map((team,i)=>{
            return(
            <div key={i} className="boxList">
            <p className="textList"
            >{team}</p>
            </div>)
       })

        return(
        <div>
            <Felicitaciones/>
            <form>
                <p className="pregunta">9.Integrantes del equipo (ingresa el perfil de Linkedin)</p>
                <input 
                className="input"
                id="inpInt"
                type="text"
                defaultValue={values.teamProy}/>
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
export default TeamProy