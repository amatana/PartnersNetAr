import React,{Component} from 'react'
import Welcome from './Welcome'

class TypeDetails extends Component{
    saveAndContinue = (e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    back = (e)=>{
        e.preventDefault()
        this.props.prevStep()
    }

    changeButton = event =>{
        let bgColor = event.target.style.backgroundColor
            
            if(bgColor !== "#EF4166"){
                event.target.style.backgroundColor = "#EF4166" 
                event.target.style.color = "white"
            }else{
                event.target.style.backgroundColor="transparent"
                event.target.style.color = "#EF4166"
            }
    }


    render(){
        const style = {}
        style.pregunta = {	height: "22px",	/*width: "171px",*/	color: "#9B9B9B",	fontFamily: "Helvetica",	fontSize: "18px",	lineHeight: "22px",}
        style.button = {	height: "44px",	width: "331px",	border: "2px solid #EF4166",	borderRadius: "4px", backgroundColor: "transparent", marginBottom:"0.5em",
            color: "#EF4166",	fontFamily: "Avenir Next",	fontSize: "19px",	fontWeight: "500",	lineHeight: "19px",	textAlign: "center",}
        style.textButton={	}

        return(
        <div>
            <Welcome/>
            <form>
                <p style={style.pregunta}>3. Qué tipo de emprendedor sos?</p>
                <option name="tengo mi proyecto" 
                style={style.button}
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                onClick={this.props.handleChange('type')}
                >tengo mi proyecto</option><br/>
                <option name="Quiero colaborar en un proyecto" 
                style={style.button}
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                onClick={this.props.handleChange('type')}
                >Quiero colaborar en un proyecto</option><br/>
                <option name="soy una organizacion" 
                style={style.button}
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                onClick={this.props.handleChange('type')}
                >soy una organizacion</option><br/>
                <option name="soy un inversor" 
                style={style.button}
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                onClick={this.props.handleChange('type')}
                >soy un inversor</option><br/>
                <div>
                    <button className="back" onClick={this.back} >Ver pregunta Anterior</button>
                </div>
            </form>
        </div>
        )
    }






}
export default TypeDetails