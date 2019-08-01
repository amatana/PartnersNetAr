import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
//import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'
import InputAdornment from '@material-ui/core/InputAdornment';
//import IconButton from '@material-ui/core/IconButton';
//import { green400 } from 'material-ui/styles/colors';
//import Visibility from '@material-ui/icons/Visibility';
//import VisibilityOff from '@material-ui/icons/VisibilityOff';


class ChatRoom extends Component{
    constructor(){
        super()
        this.state= {
            message:'',
            messages:[
                
            ]
        }
    }


componentDidMount(){
    window.firebase.database().ref('/').on('value',snap =>{
        const currentMessages = snap.val()
        console.log(currentMessages.messages)
        if(currentMessages != null){
        this.setState({
            messages: currentMessages.messages
        })
        }
    })
}


handleSubmit(e){
    e.preventDefault()
    const list = this.state.messages
    const newMessage={
        id: this.state.messages.length,
        text: this.state.message
    }
    list.push(newMessage)
    // this.setState({message: list})
    window.firebase.database().ref(`messages/${newMessage.id}`)
    .set(newMessage)
    this.setState({message:''})
}

updateMessage(e){
    
    this.setState({message:e.target.value})
    
}    



render(){
const {messages}= this.state
const  messageList = messages.map(message=>{
    return <li key={message.id}
    style={{
        marginLeft:"5%",
        borderRadius:"5%",
        backgroundColor: 'rgba(0,200,0,0.2)',
        marginTop:"0.5%"
        
    }}
    >{message.text}</li>
})
        return(
        <div className="mb-4 ChatRoom" style={{position: "absolute", bottom: 0}}>
            <div className=""
            
            >
                {messageList}
            </div>
            
            <form className="ml-2 form-inline" onSubmit={this.handleSubmit.bind(this)} action="">
            
            <TextField
            
            variant="outlined"
            margin="normal"
            required
            InputProps={{
                startAdornment: <InputAdornment position="start"><Icon>insert_emoticon</Icon></InputAdornment>,
                endAdornment: <InputAdornment><Icon>visibility</Icon></InputAdornment>
            }}
            >
            <Input className=" form-control"
            
            type="text" 
            mx="auto"
            onChange={this.updateMessage.bind(this)}
            value={this.state.message}
            />
            </TextField>
            <Button  
            color="primary"
            size="small"
           style={{marginTop:30}}
            
            
            
            ><Icon>send</Icon>
            </Button>
            </form>
            </div>
            
        )

    }
}

export default ChatRoom