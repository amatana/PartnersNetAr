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
        const {values:{email,user,account,pitch,bio,type,interesting,}}=this.props
            
            const toLink = type === 'TP'? <Link to='register/proyect'> <button >  Confirmation</button></Link> : <button onClick={this.saveAndContinue} >Confirmation</button>
            
        return(
            <div>
                <h1 className="name">Confirm your Details</h1>
                <p className="conocernos">Click confirm if the following details have been correctly entered</p>
                <ul>
                    <li className="confirmationList">Email: {email}</li>
                    <li className="confirmationList">User: {user}</li>
                    <li className="confirmationList">Account: {account}</li>
                    <li className="confirmationList">Pitch: {pitch}</li>
                    <li className="confirmationList">Bio: {bio}</li>
                    <li className="confirmationList">Type: {type}</li>
                    <li className="confirmationList">Interesting: {interesting}</li>
                </ul>
                <div>
                    <button className="back" onClick={this.back}>Back</button>
                    {toLink}
                </div>
            </div>
        )
    }


}
export default Confirmation