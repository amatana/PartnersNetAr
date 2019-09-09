import React, { Component } from "react";
import EmailDetails from "./EmailDetails";
import UserDetails from "./UserDetails";
import AccountDetails from "./AccountsDetails";
import PitchDetails from "./PitchDetails";
import BioDetails from "./BioDetails";
import TypeDetails from "./TypeDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

// import "../../../back/public/style.css";

class MainForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      email: "",
      user: "",
      linkedin: "",
      pitch: "",
      bio: "",
      type: "",
      interesting: []
    };
    this.withoutProyect = this.withoutProyect.bind(this);
    this.toproy = this.toproy.bind(this);
    this.backWithoutProyect = this.backWithoutProyect.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInterest = this.handleInterest.bind(this);
  }
  withoutProyect() {
    const { step } = this.state;
    this.setState({
      step: step + 2
    });
  }

  toproy(path) {
    this.props.history.replace(path);
  }

  backWithoutProyect() {
    const { step } = this.state;
    this.setState({
      step: step - 2
    });
  }

  nextStep() {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }
  prevStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange(event) {
    console.log(this.state);
    if (event.target.type !== "checkbox") {
      this.setState({
        [event.target.attributes.name.nodeValue]: event.target.value
      });
    }
    if (event.target.attributes.name.nodeValue === "type") {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    }
  }

  handleInterest(input) {
    const int = input.value;
    const list = this.state.interesting;
    list.push(int);
    this.forceUpdate();
    console.log(this.state);
  }

  render() {
    const { step } = this.state;
    const { email, user, account, pitch, bio, type, interesting } = this.state;
    const values = { email, user, account, pitch, bio, type, interesting };
    switch (step) {
      case 1:
        return (
          <EmailDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <AccountDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <PitchDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <BioDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <TypeDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleInterest={this.handleInterest}
            values={values}
          />
        );
      case 8:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            toproy={this.toproy}
            values={values}
          />
        );
      case 9:
        return <Success />;
      default:
        return null;
    }
  }
}

export default MainForm;
