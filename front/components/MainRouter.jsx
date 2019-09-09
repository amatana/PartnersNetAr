import 'babel-polyfill';
import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
// import {} from 'react-redux'
import Landing from "./LandingForm";
import MainForm from "./Register/MainForm";
import MainProy from "./Project/MainProy";
import Profile from "./Profile";
import ListaComponent from "./ListaReut";
import HaveNeed from "./HaveNeed";
import Social from "./Social";
import Proyect from "./Project";
import Info from "./Info";
import "../../back/public/css/style.css";

class MainRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false
    };
  }

  render() {
    return this.state.isRegistered ? (
      "AcÃ¡ irÃ­a el component del Home que verÃ­a el usuario que ya estÃ¡ loggeado, faltarÃ­a poner un ComponentDidMount que haga que cuando se carga el MainRouter pregunte si el usuario estÃ¡ registrado y logeado o no"
    ) : (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/register"
          render={({ history }) => <MainForm history={history} />}
        />
        <Route exact path="/register/proyect" component={MainProy} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/listComp" component={ListaComponent} />
        <Route exact path="/haveNeed" component={HaveNeed} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/proyect" component={Proyect} />
        <Route exact path="/info" component={Info} />
      </Switch>
    );
  }
}

export default MainRouter;
