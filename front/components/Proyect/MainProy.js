import React, {Component} from 'react'
import Achievements from './Achievements'
import NameProy from './NameProy'
import ImageProy from './ImageProy'
import InfoProy from './InfoProy'
import HaveProy from './HaveProy'
import NeedProy from './NeedProy'
import PhraseProy from './PhraseProy'
import PitchProy from './PitchProy'
import TeamProy from './TeamProy'
import TypeProy from './TypeProy'
import Confirmation from './ConfirmationProy'

import '../../../back/public/style.css'


class MainProy extends Component {
    state = {
        step: 0,
        achievements:[],
        nameProy:'',
        typeProy:'',
        infoProy:'',
        imageProy:'',
        phraseProy:'',
        pitchProy:'',
        haveProy: '',
        needProy: '',
        teamProy:[],
    }

    nextStep=()=>{
        const {step}=this.state
        this.setState({
            step: step + 1 
        })
        console.log(this.state)
    }
    prevStep=()=>{
        const {step}=this.state
        this.setState({
            step: step - 1 
        })
    }

    handleChange = input => event =>{
        if(event.target.type !== 'checkbox'){
        this.setState({[input]:event.target.value})
        }else{
            const item = event.target.name;
            const achiev = this.state.achievements
            achiev.push(item)
        }
        if(input === 'type'){
            const {step}=this.state
            this.setState({
                step: step + 1 
            })
        }
        console.log(this.state)
    }


    handleInterest = input =>{
        const int = input.value
        const list = this.state.teamProy
        list.push(int)
        this.forceUpdate ()
        console.log(this.state)
    }

    render(){
        const {step}=this.state
        const { achievements,nameProy,typeProy,infoProy,pitchProy,imageProy,phraseProy,haveProy,needProy,teamProy } = this.state
        const values = {achievements,nameProy,typeProy,infoProy,pitchProy,imageProy,phraseProy,haveProy,needProy,teamProy}
        switch(step){
            case 0: 
            return( <Achievements
            nextStep={this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
            />)
            case 1: 
                return( <NameProy
                nextStep={this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 2:
                return (<TypeProy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 3:
                return (<InfoProy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 4:
                return (<ImageProy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 5:
                return (<PhraseProy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 6:
                return (<PitchProy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 7:
                return( <HaveProy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                withoutProyect = {this.withoutProyect}
                
                values = {values}
                />)

            case 8:
                return (<NeedProy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 9:
                return (<TeamProy
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleInterest = {this.handleInterest}
                values = {values}
                />)
            case 10:
                return (<Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    withoutProyect = {this.backWithoutProyect}
                    values = {values}
                    />)
            default : 
            return null
        }
    }

}

export default MainProy