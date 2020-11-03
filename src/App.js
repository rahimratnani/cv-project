import React, { Component } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ganeralInfo: {
        fullname: "",
        email: "",
        phone: "",
        editable: true,
      },
    };
  }

  handleChange = (event) => {
    if (event.target.type === "text") {
      this.setState((state) => {
        return {
          ganeralInfo: {
            fullname: event.target.value,
            email: state.ganeralInfo.email,
            phone: state.ganeralInfo.phone,
            editable: state.ganeralInfo.editable,
          },
        };
      });
    } else if (event.target.type === "email") {
      this.setState((state) => {
        return {
          ganeralInfo: {
            fullname: state.ganeralInfo.fullname,
            email: event.target.value,
            phone: state.ganeralInfo.phone,
            editable: state.ganeralInfo.editable,
          },
        };
      });
    } else if (event.target.type === "tel") {
      this.setState((state) => {
        return {
          ganeralInfo: {
            fullname: state.ganeralInfo.fullname,
            email: state.ganeralInfo.email,
            phone: event.target.value,
            editable: state.ganeralInfo.editable,
          },
        };
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <GeneralInfo handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
