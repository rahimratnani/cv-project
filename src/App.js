import React, { Component } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ganeralInfo: {
        // input peoperty handles data being typed
        fullname: { input: "", saved: "" },
        email: { input: "", saved: "" },
        phone: { input: "", saved: "" },
        // if true, input fields are rendered else rendered in viewable format
        editable: true,
      },
      education: {
        schoolName: { input: "", saved: "" },
        titleOfStudy: { input: "", saved: "" },
        from: { input: "", saved: "" },
        to: { input: "", saved: "" },
        editable: true,
      },
      experience: {
        company: { input: "", saved: "" },
        position: { input: "", saved: "" },
        tasks: { input: "", saved: "" },
        from: { input: "", saved: "" },
        to: { input: "", saved: "" },
        editable: true,
      },
    };
  }
  // handles changes done in General information
  handleGeneralInfoChange = (event) => {
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

  // handle education section change
  handleEducationChange = (event) => {
    if (event.target.id === "school") {
      this.setState((state) => {
        return {
          education: {
            schoolName: {
              input: event.target.value,
              saved: state.education.schoolName.saved,
            },
            titleOfStudy: {
              input: state.education.titleOfStudy.input,
              saved: state.education.titleOfStudy.saved,
            },
            from: {
              input: state.education.from.input,
              saved: state.education.from.saved,
            },
            to: {
              input: state.education.to.input,
              saved: state.education.to.saved,
            },
            editable: state.education.editable,
          },
        };
      });
    } else if (event.target.id === "title") {
      this.setState((state) => {
        return {
          education: {
            schoolName: {
              input: state.education.schoolName.input,
              saved: state.education.schoolName.saved,
            },
            titleOfStudy: {
              input: event.target.value,
              saved: state.education.titleOfStudy.saved,
            },
            from: {
              input: state.education.from.input,
              saved: state.education.from.saved,
            },
            to: {
              input: state.education.to.input,
              saved: state.education.to.saved,
            },
            editable: state.education.editable,
          },
        };
      });
    } else if (event.target.id === "from") {
      this.setState((state) => {
        return {
          education: {
            schoolName: {
              input: state.education.schoolName.input,
              saved: state.education.schoolName.saved,
            },
            titleOfStudy: {
              input: state.education.titleOfStudy.input,
              saved: state.education.titleOfStudy.saved,
            },
            from: {
              input: event.target.value,
              saved: state.education.from.saved,
            },
            to: {
              input: state.education.to.input,
              saved: state.education.to.saved,
            },
            editable: state.education.editable,
          },
        };
      });
    } else if (event.target.id === "to") {
      this.setState((state) => {
        return {
          education: {
            schoolName: {
              input: state.education.schoolName.input,
              saved: state.education.schoolName.saved,
            },
            titleOfStudy: {
              input: state.education.titleOfStudy.input,
              saved: state.education.titleOfStudy.saved,
            },
            from: {
              input: state.education.from.input,
              saved: state.education.from.saved,
            },
            to: {
              input: event.target.value,
              saved: state.education.to.saved,
            },
            editable: state.education.editable,
          },
        };
      });
    }
  };

  handleExperienceChange = (event) => {
    if (event.target.id === "company") {
      this.setState((state) => {
        return {
          experience: {
            company: {
              input: event.target.value,
              saved: state.experience.company.saved,
            },
            position: {
              input: state.experience.position.input,
              saved: state.experience.position.saved,
            },
            tasks: {
              input: state.experience.tasks.input,
              saved: state.experience.tasks.saved,
            },
            from: {
              input: state.experience.from.input,
              saved: state.experience.from.saved,
            },
            to: {
              input: state.experience.to.input,
              saved: state.experience.to.saved,
            },
            editable: state.experience.editable,
          },
        };
      });
    } else if (event.target.id === "position") {
      this.setState((state) => {
        return {
          experience: {
            company: {
              input: state.experience.company.input,
              saved: state.experience.company.saved,
            },
            position: {
              input: event.target.value,
              saved: state.experience.position.saved,
            },
            tasks: {
              input: state.experience.tasks.input,
              saved: state.experience.tasks.saved,
            },
            from: {
              input: state.experience.from.input,
              saved: state.experience.from.saved,
            },
            to: {
              input: state.experience.to.input,
              saved: state.experience.to.saved,
            },
            editable: state.experience.editable,
          },
        };
      });
    } else if (event.target.id === "tasks") {
      this.setState((state) => {
        return {
          experience: {
            company: {
              input: state.experience.company.input,
              saved: state.experience.company.saved,
            },
            position: {
              input: state.experience.position.input,
              saved: state.experience.position.saved,
            },
            tasks: {
              input: event.target.value,
              saved: state.experience.tasks.saved,
            },
            from: {
              input: state.experience.from.input,
              saved: state.experience.from.saved,
            },
            to: {
              input: state.experience.to.input,
              saved: state.experience.to.saved,
            },
            editable: state.experience.editable,
          },
        };
      });
    } else if (event.target.id === "from") {
      this.setState((state) => {
        return {
          experience: {
            company: {
              input: state.experience.company.input,
              saved: state.experience.company.saved,
            },
            position: {
              input: state.experience.position.input,
              saved: state.experience.position.saved,
            },
            tasks: {
              input: state.experience.tasks.input,
              saved: state.experience.tasks.saved,
            },
            from: {
              input: event.target.value,
              saved: state.experience.from.saved,
            },
            to: {
              input: state.experience.to.input,
              saved: state.experience.to.saved,
            },
            editable: state.experience.editable,
          },
        };
      });
    } else if (event.target.id === "to") {
      this.setState((state) => {
        return {
          experience: {
            company: {
              input: state.experience.company.input,
              saved: state.experience.company.saved,
            },
            position: {
              input: state.experience.position.input,
              saved: state.experience.position.saved,
            },
            tasks: {
              input: state.experience.tasks.input,
              saved: state.experience.tasks.saved,
            },
            from: {
              input: state.experience.from.input,
              saved: state.experience.from.saved,
            },
            to: {
              input: event.target.value,
              saved: state.experience.to.saved,
            },
            editable: state.experience.editable,
          },
        };
      });
    }
  };

  // handles submission of General information and sets inputs to empty strings
  handleSubmit = (btnName, event) => {
    event.preventDefault();

    if (btnName === "general") {
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
    } else if (btnName === "education") {
      this.setState((state) => {
        return {
          education: {
            schoolName: {
              input: "",
              saved: state.education.schoolName.input,
            },
            titleOfStudy: {
              input: "",
              saved: state.education.titleOfStudy.input,
            },
            from: {
              input: "",
              saved: state.education.from.input,
            },
            to: {
              input: "",
              saved: state.education.to.input,
            },
            editable: false,
          },
        };
      });
    } else if (btnName === "experience") {
      this.setState((state) => {
        return {
          experience: {
            company: {
              input: "",
              saved: state.experience.company.input,
            },
            position: {
              input: "",
              saved: state.experience.position.input,
            },
            tasks: {
              input: "",
              saved: state.experience.tasks.input,
            },
            from: {
              input: "",
              saved: state.experience.from.input,
            },
            to: {
              input: "",
              saved: state.experience.to.input,
            },
            editable: false,
          },
        };
      });
    }
  };

  handleEdit = (btnName) => {
    if (btnName === "general") {
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
    } else if (btnName === "education") {
      this.setState((state) => {
        return {
          education: {
            schoolName: {
              input: state.education.schoolName.saved,
              saved: state.education.schoolName.saved,
            },
            titleOfStudy: {
              input: state.education.titleOfStudy.saved,
              saved: state.education.titleOfStudy.saved,
            },
            from: {
              input: state.education.from.saved,
              saved: state.education.from.saved,
            },
            to: {
              input: state.education.to.saved,
              saved: state.education.to.saved,
            },
            editable: true,
          },
        };
      });
    } else if (btnName === "experience") {
      this.setState((state) => {
        return {
          experience: {
            company: {
              input: state.experience.company.saved,
              saved: state.experience.company.saved,
            },
            position: {
              input: state.experience.position.saved,
              saved: state.experience.position.saved,
            },
            tasks: {
              input: state.experience.tasks.saved,
              saved: state.experience.tasks.saved,
            },
            from: {
              input: state.experience.from.saved,
              saved: state.experience.from.saved,
            },
            to: {
              input: state.experience.to.saved,
              saved: state.experience.to.saved,
            },
            editable: true,
          },
        };
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>CV Builder</h1>
        <GeneralInfo
          // passing general information state
          generalInfo={this.state.ganeralInfo}
          handleChange={this.handleGeneralInfoChange}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
        />

        <Education
          education={this.state.education}
          handleChange={this.handleEducationChange}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
        />

        <Experience
          experience={this.state.experience}
          handleChange={this.handleExperienceChange}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
