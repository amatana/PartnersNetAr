import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import Landing from './LandingForm'

class MainRouter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isRegistered: false
        }
    }

    render() {
        return (
            this.state.isRegistered 
            ?  "Acá iría el component del Home que vería el usuario que ya está loggeado, faltaría poner un ComponentDidMount que haga que cuando se carga el MainRouter pregunte si el usuario está registrado y logeado o no"
            : 
            <Switch>
                <Route exact path='/'  component={Landing} />
            </Switch>
        )
    }
}

export default MainRouter