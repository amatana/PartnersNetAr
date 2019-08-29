import 'babel-polyfill';
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import Landing from './LandingForm'
import MainForm from './Register/MainForm'
import MainProy from './Proyect/MainProy'
import Profile from './Register/Profile'

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
                <Route exact path='/register'  render= {({ history }) => (<MainForm history={history} />)} />
                <Route exact path='/register/proyect'  component={MainProy} />
                <Route exact path='/profile'  component={Profile} />
            </Switch>
        )
    }
}

export default MainRouter