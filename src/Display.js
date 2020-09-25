import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Navbar } from "react-bootstrap";

function mapStateToProps(state) {
  return {};
}

class Display extends Component {
  state = {
    text: "Initial text",
  };
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Dr(u/ea)m Machine</Navbar.Brand>
        <Alert variant="primary" id="display">
          {this.state.text}
        </Alert>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(Display);
