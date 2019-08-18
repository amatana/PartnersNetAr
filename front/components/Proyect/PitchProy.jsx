import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones';

class ImageProy extends Component{
    constructor(props){
        super(props)

        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.save = this.save.bind(this)
    }

    saveAndContinue(e){
        e.preventDefault()
        const input= document.getElementById('fileUpload')
        const file = input.files
        //this.postFile(file)
        this.props.handleFile(input,file)
        this.props.nextStep()
        
    }
    back(e){
        e.preventDefault()
        this.props.prevStep()
    }


    save(e){
        e.preventDefault()
        const input= document.getElementById('fileUpload')
        //this.props.handleInterest(input)
        // input.value= ''
        const div = document.getElementById('value')
        div.innerHTML=input.files[0].name
    }

    render(){
        const {values}=this.props
    //     const interest =values.interesting

    //     const list = interest.map((interest,i)=>{
    //         return(
    //         <div key={i} className="boxList">
    //         <p className="textList"
    //         >{interest}</p>
    //         </div>)
    //    })

        return(
        <div>
            <Felicitaciones/>
            <form>
                <p className="pregunta">6. Subi tu pitch</p>
                <input 
                className="inputFile"
                id="fileUpload"
                type="file"
                name="pitchProy"
                accept="audio/*"
                onChange={this.save}
                />
                
                <label htmlFor="fileUpload" id="value" className="subir">
                </label>
                <label htmlFor="fileUpload" className="saveInterest"></label>
                {/* <button className="saveInterest" onClick={this.save}></button> */}

                <br/>
                {/* {list} */}
                
                

                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue} >Siguiente Pregunta</button>
                </div>
            </form>
       </div>
       )
    }



}
export default ImageProy