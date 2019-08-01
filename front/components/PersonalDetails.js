import React, {Component} from 'react'
import Welcome from './Welcome';

class PersonalDetails extends Component{
    saveAndContinue= (e)=>{
        e.preventDefault()
        if(!(this.props.values.type==='tengo mi proyecto')){
            this.props.withoutProyect()
        }else{
        this.props.nextStep()
        }
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
        const style = {}
        style.pregunta = {	height: "22px",	/*width: "171px",*/	color: "#9B9B9B",	fontFamily: "Helvetica",	fontSize: "18px",	lineHeight: "22px",}
        style.lista = {	height: "32px",	width: "93px",	border: "1px solid #EF4166",	borderRadius: "15%",	backgroundColor: "#FBFBFF",}
        style.input= {	height: "45px",	width: "331px",	backgroundColor: "#FBFBFF",	boxShadow: "0 2px 10px 0 #EDEDED",border: "transparent"}
        const list = interest.map((interest,i)=>{
            return(
            <div key={i} style={{margin: "0.2em",border: "0.16em solid #EF4166",	borderRadius: "4px", position:"relative",display:"inline-block"}}>
            <p
             style={{ backgroundColor:" #FBFBFF",	color: "#EF4166", textAlign: "center", verticalAlign: "middle",
                    	fontFamily: "Avenir Next",	fontWeight: 600,margin:"0.5em"}}
            >{interest}</p>
            </div>)
       })

        return(
        <div>
            <Welcome/>
            <form>
                <p style={style.pregunta}>4.Cuales son tus principales intereses?</p>
                <input 
                id="inpInt"
                style={style.input}
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