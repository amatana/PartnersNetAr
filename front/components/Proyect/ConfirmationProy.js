import React, {Component} from 'react'

class Confirmation extends Component{
    saveAndContinue= (e)=>{
        e.preventDefault()
        this.props.nextStep()
    }
    back=(e)=>{
        e.preventDefault()
        this.props.prevStep()
    }

    render(){
        const {values:{achievements,nameProy,typeProy,infoProy,pitchProy,imageProy,phraseProy,haveProy,needProy,teamProy}}=this.props
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
                    <li style={style.list}>Achievements: {achievements} </li>
                    <li style={style.list}>Name: {nameProy}</li>
                    <li style={style.list}>Type: {typeProy}</li>
                    <li style={style.list}>Info: {infoProy}</li>
                    <li style={style.list}>Pitch: {pitchProy}</li>
                    <li style={style.list}>Image: {imageProy}</li>
                    <li style={style.list}>Phrase: {phraseProy}</li>
                    <li style={style.list}>Have: {haveProy}</li>
                    <li style={style.list}>Need: {needProy}</li>
                    <li style={style.list}>Team: {teamProy}</li>
                </ul>
                <div>
                    <button className="back" onClick={this.back}>Back</button>
                    <button onClick={this.saveAndContinue} >Confirmation</button>
                </div>
            </div>
        )
    }


}
export default Confirmation