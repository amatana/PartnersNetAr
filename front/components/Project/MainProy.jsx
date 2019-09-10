import React, { Component } from "react";
import Achievements from "./Achievements";
import NameProy from "./NameProy";
import ImageProy from "./ImageProy";
import InfoProy from "./InfoProy";
import HaveProy from "./HaveProy";
import NeedProy from "./NeedProy";
import PhraseProy from "./PhraseProy";
import PitchProy from "./PitchProy";
import TeamProy from "./TeamProy";
import TypeProy from "./TypeProy";
import Confirmation from "./ConfirmationProy";

// import "../../../back/public/style.css";

class MainProy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      achievements: new Set(),
      nameProy: "",
      typeProy: "",
      infoProy: "",
      imageProy: "",
      phraseProy: "",
      pitchProy: "",
      haveProy: "",
      needProy: "",
      teamProy: []
    };

    this.toproy = this.toproy.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleInterest = this.handleInterest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  toproy(path) {
    this.props.history.replace(path);
  }

  nextStep() {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
    console.log(this.state);
  }
  prevStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange(event) {
    if (event.target.type !== "checkbox") {
      this.setState({ [event.target.name]: event.target.value });
    } else {
      const item = event.target.name;
      const achiev = this.state.achievements;
      if (achiev.has(item)) {
        achiev.delete(item);
      } else {
        achiev.add(item);
      }
    }
    if (event.target.name === "type") {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    }
    console.log(this.state);
  }
  handleFile(event, input) {
    console.log(input[0]);
    this.setState({
      [event.name]: input[0]
    });
  }

  handleInterest(input) {
    const int = input.value;
    const list = this.state.teamProy;
    list.push(int);
    this.forceUpdate();
    console.log(this.state);
  }

  render() {
    const { step } = this.state;
    const {
      achievements,
      nameProy,
      typeProy,
      infoProy,
      pitchProy,
      imageProy,
      phraseProy,
      haveProy,
      needProy,
      teamProy
    } = this.state;
    const values = {
      achievements,
      nameProy,
      typeProy,
      infoProy,
      pitchProy,
      imageProy,
      phraseProy,
      haveProy,
      needProy,
      teamProy
    };
    switch (step) {
      case 0:
        return (
          <Achievements
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 1:
        return (
          <NameProy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <TypeProy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <InfoProy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <ImageProy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleFile={this.handleFile}
            values={values}
          />
        );
      case 5:
        return (
          <PhraseProy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <PitchProy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleFile={this.handleFile}
            values={values}
          />
        );
      case 7:
        return (
          <HaveProy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            withoutProyect={this.withoutProyect}
            values={values}
          />
        );

      case 8:
        return (
          <NeedProy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 9:
        return (
          <TeamProy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleInterest={this.handleInterest}
            values={values}
          />
        );
      case 10:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            withoutProyect={this.backWithoutProyect}
            toproy={this.toproy}
            values={values}
          />
        );
      default:
        return null;
    }
  }
}

export default MainProy;
