import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Confirmation extends Component{

    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
      } 
   

    saveAndContinue(e){
        e.preventDefault()
        this.props.nextStep()
    }
    back(e){
        e.preventDefault()
        this.props.prevStep()
    }

    render(){
        const {values:{email,user,account,pitch,bio,type,interesting,achievements}}=this.props
        const style={}
        // style.bienvenido = {fontFamily: "Avenir Next",	color: "#044087"}
        // style.name= {height: "80px",	width: "446px",fontFamily: "Avenir Next",	fontSize: "36px",
            // lineHeight: "40px",	 fontWeight: "600", color: "#EF4166",}
            // style.conocernos = {height: "20px",	width: "469px",	color: "#044087",	fontFamily: "Avenir Next",	fontSize: "14px",	lineHeight: "20px",}
            style.list={color: "#EF4166",	fontFamily: "Avenir Next",	fontSize: "19px",	fontWeight: "500",	lineHeight: "19px",marginBottom: "1em"}
            
            
            
        return(
            <div>
                <h1 className="name">Confirm your Details</h1>
                <p className="conocernos">Click confirm if the following details have been correctly entered</p>
                <ul>
                    <li style={style.list}>Email: {email}</li>
                    <li style={style.list}>User: {user}</li>
                    <li style={style.list}>Account: {account}</li>
                    <li style={style.list}>Pitch: {pitch}</li>
                    <li style={style.list}>Bio: {bio}</li>
                    <li style={style.list}>Type: {type}</li>
                    <li style={style.list}>Interesting: {interesting}</li>
                    <li style={style.list}>Achievements: {achievements} </li>
                </ul>
                <div>
                    <button className="back" onClick={this.back}>Back</button>
                    {/* <button onClick={this.saveAndContinue} >Confirmation</button> */}
                    <button > <Link to="/proyect"></Link> Confirmation</button>
                </div>
            </div>
        )
    }


}
export default Confirmation