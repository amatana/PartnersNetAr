import React, {Component} from 'react'
import Felicitaciones from './Felicitaciones';

class ImageProy extends Component{
    constructor(props){
        super(props)
        

        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
        this.save = this.save.bind(this)
        this.postFile = this.postFile.bind(this)
    }

    async postFile(photo){
        console.log(photo)
        const res = await fetch(this.URI,{
            method: 'POST',
            body: photo
        })
        const data = await res.json()
        console.log(data)
    }


    saveAndContinue(e){
        e.preventDefault()
        const input= document.getElementById('fileUpload')
        const photo = input.files
        //this.postFile(photo)
        this.props.handleFile(input,photo)
        this.props.nextStep()
    }
    back(e){
        e.preventDefault()
        this.props.prevStep()
    }


    save(e){
        // e.preventDefault()
        const input= document.getElementById('fileUpload')
        console.log(this.props)
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
                <p className="pregunta">4. Subi una imagen</p>
                <input 
                className="inputFile"
                id="fileUpload"
                type="file"
                name="imageProy"
                accept="image/*"
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