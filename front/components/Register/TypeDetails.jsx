import React,{Component} from 'react'
import Welcome from './Welcome'

class TypeDetails extends Component{
    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.changeButton = this.changeButton.bind(this)
      } 

    saveAndContinue(e){
        e.preventDefault()
        this.props.nextStep()
    }

    back(e){
        e.preventDefault()
        this.props.prevStep()
    }

    changeButton(event){
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
    
        return(
        <div>
            <Welcome/>
            <form>
                <p className="pregunta">3. Qué tipo de emprendedor sos?</p>
                <option name="tengo mi proyecto" 
                className="typeButton"
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                onClick={this.props.handleChange('type')}
                >tengo mi proyecto</option><br/>
                <option name="Quiero colaborar en un proyecto" 
                className="typeButton"
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                onClick={this.props.handleChange('type')}
                >Quiero colaborar en un proyecto</option><br/>
                <option name="soy una organizacion" 
                className="typeButton"
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                onClick={this.props.handleChange('type')}
                >soy una organizacion</option><br/>
                <option name="soy un inversor" 
                className="typeButton"
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