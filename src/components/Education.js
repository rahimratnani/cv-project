import React, { useState } from "react";

export default function Education() {
  const [school, setSchool] = useState({ input: "", saved: "" });
  const [title, setTitle] = useState({ input: "", saved: "" });
  const [from, setFrom] = useState({ input: "", saved: "" });
  const [to, setTo] = useState({ input: "", saved: "" });
  const [editable, setEditable] = useState(true);

  const handleChange = (e) => {
    if (e.target.id === "school") {
      setSchool((school) => ({
        ...school,
        input: e.target.value,
      }));
    } else if (e.target.id === "title") {
      setTitle((title) => ({
        ...title,
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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSchool((school) => ({
      saved: school.input,
      input: "",
    }));
    setTitle((title) => ({
      saved: title.input,
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
    setEditable(false);
  };

  const handleEdit = () => {
    setSchool((school) => ({
      ...school,
      input: school.saved,
    }));
    setTitle((title) => ({
      ...title,
      input: title.saved,
    }));
    setFrom((from) => ({
      ...from,
      input: from.saved,
    }));
    setTo((to) => ({
      ...to,
      input: to.saved,
    }));
    setEditable(true);
  };

  let render;

  if (editable) {
    render = (
      <div className="section">
        <h4 className="title is-size-4 has-text-centered">Education</h4>

        <div className="columns is-mobile is-centered">
          <div className="column is-10-mobile is-half-tablet">
            <form>
              <div className="field">
                <label htmlFor="school" className="label">
                  School/College
                </label>
                <div className="control">
                  <input
                    onChange={handleChange}
                    id="school"
                    name="school"
                    type="text"
                    className="input"
                    placeholder="School/College/University"
                    value={school.input}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="title">
                  Title of study:
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="input"
                    placeholder="Enter Degree/Field of Study"
                    onChange={handleChange}
                    value={title.input}
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
        <h4 className="title is-size-4 has-text-centered">Education</h4>
        <div className="columns is-mobile is-centered">
          <div className="column is-10-mobile is-half-tablet">
            <div className="content">
              <ul>
                <li>
                  <strong>School/College: </strong>
                  {school.saved}
                </li>
                <li>
                  <strong>Title of Study: </strong>
                  {title.saved}
                </li>
                <li>
                  <strong>From: </strong>
                  {from.saved}
                </li>
                <li>
                  <strong>To: </strong>
                  {to.saved}
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
