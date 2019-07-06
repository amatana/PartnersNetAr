import React, {Component} from 'react'

class ChatRoom extends Component{
    constructor(){
        super()
        this.state= {
            message:'',
            messages:[
                
            ]
        }
    }


handleSubmit(e){
    e.preventDefault()
    const list = this.state.messages
    const newMessage={
        id: this.state.messages.length,
        text: this.state.message
    }
    list.push(newMessage)
    this.setState({message: list})
    this.setState({message:''})
}
updateMessage(e){
    
    this.setState({message:e.target.value})
    
}    


render(){
const {messages}= this.state
const  messageList = messages.map(message=>{
    return <li key={message.id}>{message.text}</li>
})
        return(
        <div className="mb-4 ChatRoom" style={{position: "absolute", bottom: 0}}>
            <ul className="">
                {messageList}
            </ul>
            
            <form className="ml-2 form-inline" onSubmit={this.handleSubmit.bind(this)} action="">
            
            <input 
            className=" form-control"
            type="text" 
            onChange={this.updateMessage.bind(this)}
            value={this.state.message}
            />
            <button className="ml-2 btn btn-success">Send</button>
            </form>
            </div>
            
        )

    }
}

export default ChatRoom