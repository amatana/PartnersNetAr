import React,{Component} from 'react'
import EmailDetails from './EmailDetails'
import UserDetails from './UserDetails'
import AccountDetails from './AccountsDetails'
import PitchDetails from './PitchDetails.js'
import BioDetails from './BioDetails'
import TypeDetails from './TypeDetails'
import PersonalDetails from './PersonalDetails.js'
import Achievements from './Achievements'
import Confirmation from './Confirmation'
import Success from './Success'

import '../../../back/public/style.css'

class MainForm extends Component {
    state = {
        step: 1,
        email:'',
        user:'',
        account:'',
        pitch:'',
        bio:'',
        type:'',
        interesting: [],
        achievements: [] 
    }

    withoutProyect=()=>{
        const {step}=this.state
        this.setState({
            step: step + 2 
        })
    }

    backWithoutProyect=()=>{
        const {step}=this.state
        this.setState({
            step: step - 2 
        })
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
        const list = this.state.interesting
        list.push(int)
        this.forceUpdate ()
        console.log(this.state)
    }

    render(){
        const {step}=this.state
        const { email,user,account,pitch,bio,type,interesting,achievements } = this.state
        const values = {email,user,account,pitch,bio,type,interesting,achievements}
        switch(step){
            case 1:
                return( <EmailDetails
                nextStep={this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 2:
                return (<UserDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 3:
                return (<AccountDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 4:
                return (<PitchDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 5:
                return (<BioDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 6:
                return (<TypeDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 7:
                return( <PersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                withoutProyect = {this.withoutProyect}
                handleInterest = {this.handleInterest}
                values = {values}
                />)

            case 8:
                return (<Achievements
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />)
            case 9:
                return (<Confirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                withoutProyect = {this.backWithoutProyect}
                values = {values}
                />)
            case 10:
                return( <Success/>)
            default : 
            return null
        }
    }

}

export default MainForm