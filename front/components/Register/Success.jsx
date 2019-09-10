import React,{Component} from 'react'
import { Redirect } from "react-router-dom";


class Success extends Component{


    render(){
        return(
        <div>
            {<Redirect to="/proyect"/>}
        </div>
        )
    }

}
export default Success