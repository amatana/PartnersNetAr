import React, {Component} from 'react'


class Achievements extends Component{
    saveAndContinue= (e)=>{
        e.preventDefault()
        this.props.nextStep()
        
    }
    back=(e)=>{
        e.preventDefault()
        this.props.prevStep()
    }

    render(){
        const {values}=this.props

        const style = {}
        
        style.bienvenido = {fontFamily: "Avenir Next",	color: "#044087"}
        style.name= {height: "80px",	width: "446px",fontFamily: "Avenir Next",	fontSize: "36px",
            lineHeight: "40px",	 fontWeight: "600", color: "#EF4166",}
        style.conocernos = {height: "20px",	width: "469px",	color: "#044087",	fontFamily: "Avenir Next",	fontSize: "14px",	lineHeight: "20px",}

       

        return(
        <div>
               
            <h1 className="bienvenido">Genial!</h1>
            <p className="name">Tenes Proyecto</p>
            <p className="conocernos">Selecciona tus logros</p>
        
            <form action="">
            <div className="two-colums">
                
                     <input type="checkbox"
                        onChange={this.props.handleChange('achievements')}
                        defaultValue={values.achievements} 
                        id="idea"
                        name="tengo una idea"/>
                            <label className="checkboxes" htmlFor="idea" style={{marginLeft: "20em"}}>tengo una idea</label><br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange('achievements')}
                        defaultValue={values.achievements}
                        id="equipo"
                        name="tengo equipo"
                        />
                            <label className="checkboxes" htmlFor="equipo" style={{marginLeft: "20em"}}> tengo equipo</label> <br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange('achievements')}
                        defaultValue={values.achievements}
                        id="MVP"
                        name="MVP"
                        style={{marginLeft: "10px"}}/>
                            <label className="checkboxes" htmlFor="MVP" style={{marginLeft: "20em"}}>MVP</label> <br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange('achievements')}
                        defaultValue={values.achievements}
                        id="inversiones"
                        name="Ronda de inversiones"/>
                            <label className="checkboxes" htmlFor="inversiones">Ronda de inversiones</label><br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange('achievements')}
                        defaultValue={values.achievements}
                        id="facturando"
                        name="Ya estoy facturando"/>
                            <label className="checkboxes" htmlFor="facturando">Ya estoy facturando</label> <br/>
                    
                    <input type="checkbox"
                        onChange={this.props.handleChange('achievements')}
                        defaultValue={values.achievements}
                        id="expandir"
                        name="Busco expandirme"/>
                            <label className="checkboxes" htmlFor="expandir">Busco expandirme</label> <br/>
                </div>
                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue} >Siguiente Pregunta</button>
                </div>
            </form>
            
        </div>
        )
    }



}
export default Achievements