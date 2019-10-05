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
        this.URI= 'http://localhost:8081/api/proyect'
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
    }

    async saveAndContinue(e){
        e.preventDefault()

        let achiev = []
        this.achievements.forEach((set)=>{
            achiev.push(set)
        })
        const formData = new FormData
        formData.append('achievements',achiev)
        formData.append('nameProy',this.nameProy)
        formData.append('typeProy',this.typeProy)
        formData.append('infoProy',this.infoProy)
        formData.append('pitchProy',this.pitchProy)
        formData.append('imageProy',this.imageProy)
        formData.append('phraseProy',this.phraseProy)
        formData.append('haveProy',this.haveProy)
        formData.append('needProy',this.needProy)
        formData.append('teamProy',this.teamProy)
        console.log(this.pitchProy)
        console.log('finish',formData)
        const res = await fetch(this.URI,{
            method: 'POST',
            body: formData,
        })
        const data = await res.json()
        console.log(data)
        this.props.toproy('/profile')
        
    }
    back(e){
        e.preventDefault()
        this.props.prevStep()
    }


    render(){
        const {values:{achievements,nameProy,typeProy,infoProy,pitchProy,imageProy,phraseProy,haveProy,needProy,teamProy}}=this.props
            
        return(
            <div>
                <h1 className="name">Confirm your Details</h1>
                <p className="conocernos">Click confirm if the following details have been correctly entered</p>
                <ul>
                    <li className="confirmList">Achievements: {achievements} </li>
                    <li className="confirmList">Name: {nameProy}</li>
                    <li className="confirmList">Type: {typeProy}</li>
                    <li className="confirmList">Info: {infoProy}</li>
                    <li className="confirmList">Pitch: {pitchProy?pitchProy.name:''}</li>
                    <li className="confirmList">Image: {imageProy?imageProy.name:''}</li>
                    <li className="confirmList">Phrase: {phraseProy}</li>
                    <li className="confirmList">Have: {haveProy}</li>
                    <li className="confirmList">Need: {needProy}</li>
                    <li className="confirmList">Team: {teamProy}</li>
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