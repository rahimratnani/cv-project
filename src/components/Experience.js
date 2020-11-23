import React, { useState } from "react";

export default function Experience() {
  const [company, setCompany] = useState({ input: "", saved: "" });
  const [position, setPosition] = useState({ input: "", saved: "" });
  const [tasks, setTasks] = useState({ input: "", saved: "" });
  const [from, setFrom] = useState({ input: "", saved: "" });
  const [to, setTo] = useState({ input: "", saved: "" });
  const [editable, setEditable] = useState(true);

  const handleChange = (e) => {
    if (e.target.id === "company") {
      setCompany((company) => ({
        ...company,
        input: e.target.value,
      }));
    } else if (e.target.id === "position") {
      setPosition((position) => ({
        ...position,
        input: e.target.value,
      }));
    } else if (e.target.id === "from") {
      setFrom((from) => ({
        ...from,
        input: e.target.value,
      }));
    } else if (e.target.id === "to") {
      setTo((to) => ({
        ...to,
        input: e.target.value,
      }));
    } else if (e.target.id === "tasks") {
      setTasks((tasks) => ({
        ...tasks,
        input: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCompany((company) => ({
      saved: company.input,
      input: "",
    }));
    setPosition((position) => ({
      saved: position.input,
      input: "",
    }));
    setFrom((from) => ({
      saved: from.input,
      input: "",
    }));
    setTo((to) => ({
      saved: to.input,
      input: "",
    }));
    setTasks((tasks) => ({
      saved: tasks.input,
      input: "",
    }));
    setEditable(false);
  };

  const handleEdit = () => {
    setCompany((company) => ({
      ...company,
      input: company.saved,
    }));
    setPosition((position) => ({
      ...position,
      input: position.saved,
    }));
    setFrom((from) => ({
      ...from,
      input: from.saved,
    }));
    setTo((to) => ({
      ...to,
      input: to.saved,
    }));
    setTasks((tasks) => ({
      ...tasks,
      input: tasks.saved,
    }));
    setEditable(true);
  };

  let render;

  if (editable) {
    render = (
      <div className="section">
        <h4 className="title is-size-4 has-text-centered">Work Experience</h4>

        <div className="columns is-mobile is-centered">
          <div className="column is-10-mobile is-half-tablet">
            <form>
              <div className="field">
                <label htmlFor="company" className="label">
                  Company Name
                </label>
                <div className="control">
                  <input
                    onChange={handleChange}
                    id="company"
                    name="company"
                    type="text"
                    className="input"
                    placeholder="Enter Company Name"
                    value={company.input}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="position">
                  Position Title
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="input"
                    placeholder="Enter Job Title"
                    onChange={handleChange}
                    value={position.input}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="from">
                  From
                </label>
                <div className="control">
                  <input
                    type="date"
                    id="from"
                    name="from"
                    className="input"
                    onChange={handleChange}
                    value={from.input}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="to">
                  To
                </label>
                <div className="control">
                  <input
                    type="date"
                    id="to"
                    name="to"
                    className="input"
                    onChange={handleChange}
                    value={to.input}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="tasks">
                  Main Tasks:
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    onChange={handleChange}
                    name="tasks"
                    id="tasks"
                    placeholder="Describe Your Role"
                  >
                    {tasks.input}
                  </textarea>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button
                    className="button is-primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    render = (
      <div className="section">
        <h4 className="title is-size-4 has-text-centered">Work Experience</h4>
        <div className="columns is-mobile is-centered">
          <div className="column is-10-mobile is-half-tablet">
            <div className="content">
              <ul>
                <li>
                  <strong>Company Name: </strong>
                  {company.saved}
                </li>
                <li>
                  <strong>Position Title: </strong>
                  {position.saved}
                </li>
                <li>
                  <strong>From: </strong>
                  {from.saved}
                </li>
                <li>
                  <strong>To: </strong>
                  {to.saved}
                </li>
                <li>
                  <strong>Main Tasks: </strong>
                  {tasks.saved}
                </li>
              </ul>
            </div>
            <button
              className="button is-link is-small"
              type="button"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return render;
}
