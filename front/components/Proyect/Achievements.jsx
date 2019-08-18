import React, {Component} from 'react'


class Achievements extends Component{
    constructor(props){
        super(props)

        this.saveAndContinue = this.saveAndContinue.bind(this)
    }

    saveAndContinue(e){
        e.preventDefault()
        this.props.nextStep()
        
    }
    

    render(){
        const {values}=this.props


        return(
        <div>
               
            <h1 className="bienvenido">Genial!</h1>
            <p className="name">Tenes Proyecto</p>
            <p className="conocernos">Selecciona tus logros</p>
        
            <form action="">
            <div className="two-colums">
                
                     <input type="checkbox"
                        onChange={this.props.handleChange}
                        defaultValue={values.achievements} 
                        id="idea"
                        name="tengo una idea"/>
                            <label className="checkboxes" htmlFor="idea" >tengo una idea</label><br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange}
                        defaultValue={values.achievements}
                        id="equipo"
                        name="tengo equipo"
                        />
                            <label className="checkboxes" htmlFor="equipo" > tengo equipo</label> <br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange}
                        defaultValue={values.achievements}
                        id="MVP"
                        name="MVP"
                        />
                            <label className="checkboxes" htmlFor="MVP" >MVP</label> <br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange}
                        defaultValue={values.achievements}
                        id="inversiones"
                        name="Ronda de inversiones"/>
                            <label className="checkboxes" htmlFor="inversiones">Ronda de inversiones</label><br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange}
                        defaultValue={values.achievements}
                        id="facturando"
                        name="Ya estoy facturando"/>
                            <label className="checkboxes" htmlFor="facturando">Ya estoy facturando</label> <br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange}
                        defaultValue={values.achievements}
                        id="expandir"
                        name="Busco expandirme"/>
                            <label className="checkboxes" htmlFor="expandir">Busco expandirme</label> <br/>
                </div>
                <div>
                    <button className="continuar" onClick={this.saveAndContinue} >Siguiente Pregunta</button>
                </div>
            </form>
            
        </div>
        )
    }



}
export default Achievements