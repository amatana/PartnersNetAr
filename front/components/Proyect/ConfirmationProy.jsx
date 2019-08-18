import React, {Component} from 'react'

class Confirmation extends Component{
    constructor(props){
        super(props)
        const {values:{achievements,nameProy,typeProy,infoProy,pitchProy,imageProy,phraseProy,haveProy,needProy,teamProy}}=this.props
        this.achievements=achievements
        this.nameProy=nameProy
        this.typeProy=typeProy
        this.infoProy=infoProy
        this.pitchProy=pitchProy
        this.imageProy=imageProy
        this.phraseProy=phraseProy
        this.haveProy=haveProy
        this.needProy=needProy
        this.teamProy=teamProy
        this.URI= 'http://localhost:8081/api/photo'
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
    }

    async saveAndContinue(e){
        e.preventDefault()
        const {values:{achievements,nameProy,typeProy,infoProy,pitchProy,imageProy,phraseProy,haveProy,needProy,teamProy}}=this.props

        const formData = new FormData
        formData.append('achievements',this.achievements)
        formData.append('nameProy',this.nameProy)
        formData.append('typeProy',this.typeProy)
        formData.append('infoProy',this.infoProy)
        formData.append('pitchProy',this.pitchProy)
        formData.append('imageProy',this.imageProy)
        formData.append('phraseProy',this.phraseProy)
        formData.append('haveProy',this.haveProy)
        formData.append('needProy',this.needProy)
        formData.append('teamProy',this.teamProy)

        console.log('finish',formData)
        const res = await fetch(this.URI,{
            method: 'POST',
            body: formData,
            // headers: {
            //     'content-type': 'multipart/form-data'
            // }
        })
        const data = await res.json()
        console.log(data)
        this.props.nextStep()
        
    }
    back(e){
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
                    <li style={style.list}>Pitch: {pitchProy.name}</li>
                    <li style={style.list}>Image: {imageProy.name}</li>
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