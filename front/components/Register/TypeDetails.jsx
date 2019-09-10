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

                <option 
                type='button'
                className="typeButton"
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                name='type'
                value='TP'
                onClick={this.props.handleChange}
                >tengo mi proyecto</option><br/>
                <option  
                className="typeButton"
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                name='type'
                type='button'
                value='QC'
                onClick={this.props.handleChange}
                >Quiero colaborar en un proyecto</option><br/>
                <option 
                type='button'
                className="typeButton"
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                name='type'
                value='ORG'
                onClick={this.props.handleChange}
                >soy una organizacion</option><br/>
                <option  
                type='button'
                className="typeButton"
                onTouchStart={this.changeButton}
                onMouseDown={this.changeButton}
                name='type'
                value='INV'
                onClick={this.props.handleChange}
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