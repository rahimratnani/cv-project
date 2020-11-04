import React, { Component } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ganeralInfo: {
        // input handles data being typed
        fullname: { input: "", saved: "" },
        email: { input: "", saved: "" },
        phone: { input: "", saved: "" },
        // if true, input fields rendered else rendered in viewable format
        editable: true,
      },
    };
  }
  // handles changes done in General information
  handleChange = (event) => {
    if (event.target.type === "text") {
      this.setState((state) => {
        return {
          ganeralInfo: {
            fullname: {
              input: event.target.value,
              saved: state.ganeralInfo.fullname.saved,
            },
            email: {
              input: state.ganeralInfo.email.input,
              saved: state.ganeralInfo.email.saved,
            },
            phone: {
              input: state.ganeralInfo.phone.input,
              saved: state.ganeralInfo.phone.saved,
            },
            editable: state.ganeralInfo.editable,
          },
        };
      });
    } else if (event.target.type === "email") {
      this.setState((state) => {
        return {
          ganeralInfo: {
            fullname: {
              input: state.ganeralInfo.fullname.input,
              saved: state.ganeralInfo.fullname.saved,
            },
            email: {
              input: event.target.value,
              saved: state.ganeralInfo.email.saved,
            },
            phone: {
              input: state.ganeralInfo.phone.input,
              saved: state.ganeralInfo.phone.saved,
            },
            editable: state.ganeralInfo.editable,
          },
        };
      });
    } else if (event.target.type === "tel") {
      this.setState((state) => {
        return {
          ganeralInfo: {
            fullname: {
              input: state.ganeralInfo.fullname.input,
              saved: state.ganeralInfo.fullname.saved,
            },
            email: {
              input: state.ganeralInfo.email.input,
              saved: state.ganeralInfo.email.saved,
            },
            phone: {
              input: event.target.value,
              saved: state.ganeralInfo.phone.saved,
            },
            editable: state.ganeralInfo.editable,
          },
        };
      });
    }
  };

  // handles submission of General information and sets inputs to empty strings
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((state) => {
      return {
        ganeralInfo: {
          fullname: {
            input: "",
            saved: state.ganeralInfo.fullname.input,
          },
          email: {
            input: "",
            saved: state.ganeralInfo.email.input,
          },
          phone: {
            input: "",
            saved: state.ganeralInfo.phone.input,
          },
          editable: false,
        },
      };
    });
  };

  handleGeneralInfoEdit = () => {
    this.setState((state) => {
      return {
        ganeralInfo: {
          fullname: {
            input: state.ganeralInfo.fullname.saved,
            saved: state.ganeralInfo.fullname.saved,
          },
          email: {
            input: state.ganeralInfo.email.saved,
            saved: state.ganeralInfo.email.saved,
          },
          phone: {
            input: state.ganeralInfo.phone.saved,
            saved: state.ganeralInfo.phone.saved,
          },
          editable: true,
        },
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <GeneralInfo
          // passing general information state
          generalInfo={this.state.ganeralInfo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleGeneralInfoEdit}
        />
      </div>
    );
  }
}

export default App;
