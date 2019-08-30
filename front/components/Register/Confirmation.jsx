import React, {Component} from 'react'
import {Link, Redirect, BrowserRouter} from 'react-router-dom'


class Confirmation extends Component{

    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.URI = '/api/crearUsuario'
        const {values:{email,user,account,pitch,bio,type,interesting,}}=this.props
        this.email=email
        this.user=user
        this.account=account
        this.pitch=pitch
        this.bio=bio
        this.type=type
        this.interesting=interesting
        this.state = {
            res: null
        }
      } 
   

    async saveAndContinue(e){
        e.preventDefault()

        const formData = new FormData
        formData.append('email',this.email)
        formData.append('user',this.user)
        formData.append('linkedin',this.account)
        formData.append('infoProy',this.pitch)
        formData.append('bio',this.bio)
        formData.append('type',this.type)
        formData.append('interesting',this.interesting)
        console.log(this.interesting)
        console.log('finish',formData)
        const res = await fetch(this.URI,{
            method: 'POST',
            body: formData,
        })
        // console.log(res)
        // this.setState({
        //     res,
        // })
        //Averiguar como hacer funcionar el redirect para que me redireccione a la pagina que viene del servidor
            //return <Redirect to="/"/*{res.url} push={true}*/ />
            //props.history.push('/proyect')

            if(this.type==='TP'){
                this.props.toproy('/register/proyect')
            }else{
                this.props.toproy('/profile')
            }

    }
        
    back(e){
        e.preventDefault()
        this.props.prevStep()
    }

    render(){
        const {values:{email,user,account,pitch,bio,type,interesting,}}=this.props
            
            
            
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
                    
                    <button onClick={this.saveAndContinue} >Confirmation</button>
                </div>
            </div>
        )
    }


}
export default Confirmation