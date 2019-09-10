import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "../components/HaveNeed";

class HaveNeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Page profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profileReducer.profile
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HaveNeedContainer);
