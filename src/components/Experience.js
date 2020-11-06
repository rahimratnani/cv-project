import React from "react";

function Experience(props) {
  const { experience, handleChange, handleSubmit, handleEdit } = props;

  if (experience.editable) {
    return (
      <div className="container">
        <h2>Work Experience</h2>
        <form>
          <label htmlFor="company">Company Name:</label>
          <input
            onChange={handleChange}
            type="text"
            id="company"
            name="company"
            value={experience.company.input}
            placeholder="Enter Company Name"
          />
          <label htmlFor="position">Position Title:</label>
          <input
            onChange={handleChange}
            type="text"
            id="position"
            name="position"
            value={experience.position.input}
            placeholder="Enter Job Title"
          />

          <label htmlFor="from">From:</label>
          <input
            onChange={handleChange}
            type="date"
            name="from"
            id="from"
            value={experience.from.input}
          />
          <label htmlFor="to">To:</label>
          <input
            onChange={handleChange}
            type="date"
            name="to"
            id="to"
            value={experience.to.input}
          />
          <label htmlFor="tasks">Main Tasks:</label>
          <br />
          <textarea
            onChange={handleChange}
            name="tasks"
            id="tasks"
            cols="30"
            rows="3"
            placeholder="Describe Your Role"
          >
            {experience.tasks.input}
          </textarea>
          <br />
          <button type="submit" onClick={handleSubmit.bind(this, "experience")}>
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h2>Work Experience</h2>
        <p>Company Name: {experience.company.saved}</p>
        <p>Position Title: {experience.position.saved}</p>
        <p>From: {experience.from.saved}</p>
        <p>To: {experience.to.saved}</p>
        <p>Main Tasks: {experience.tasks.saved}</p>
        <button onClick={handleEdit.bind(this, "experience")} type="button">
          Edit
        </button>
      </div>
    );
  }
}

export default Experience;