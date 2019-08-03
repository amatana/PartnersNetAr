import React, {Component} from 'react'
import Welcome from './Welcome'

class AccountDetails extends Component{
    saveAndContinue = (e)=>{
        e.preventDefault()
        this.props.nextStep()
    }

    back = (e)=>{
        e.preventDefault()
        this.props.prevStep()
    }

    render(){
        const {values}=this.props
        const style = {}
        style.pregunta= {	height: "22px",	/*width: "171px",*/	color: "#9B9B9B",	fontFamily: "Helvetica",	fontSize: "18px",	lineHeight: "22px",}
        style.input= {	height: "45px",	width: "331px",	backgroundColor: "#FBFBFF",	boxShadow: "0 2px 10px 0 #EDEDED",border: "transparent"}

        return(
        <div>
            <Welcome/>
            <form action="">
                <p style={style.pregunta}>3. Linkedin</p>
                <input 
                style={style.input}
                type="text"
                onChange={this.props.handleChange('account')}
                defaultValue={values.account} />
                
                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button>
                </div>
            </form>
        </div>
        )


    }
}

export default AccountDetails