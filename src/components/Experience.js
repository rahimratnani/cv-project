import React from "react";
import styles from "./Experience.module.css";

function Experience(props) {
  const { experience, handleChange, handleSubmit, handleEdit } = props;

  if (experience.editable) {
    return (
      <div className={styles.container}>
        <h2>Work Experience</h2>
        <form>
          <label htmlFor="company">Company Name:</label>
          <input
            onChange={handleChange}
            type="text"
            id="company"
            name="company"
            value={experience.company.input}
          />
          <label htmlFor="position">Position Title:</label>
          <input
            onChange={handleChange}
            type="text"
            id="position"
            name="position"
            value={experience.position.input}
          />
          <label htmlFor="tasks">Main Tasks:</label>
          <textarea
            onChange={handleChange}
            name="tasks"
            id="tasks"
            cols="30"
            rows="10"
          >
            {experience.tasks.input}
          </textarea>
          <br />
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
          <button type="submit" onClick={handleSubmit.bind(this, "experience")}>
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h2>Work Experience</h2>
        <p>Company Name: {experience.company.saved}</p>
        <p>Position Title: {experience.position.saved}</p>
        <p>Main Tasks: {experience.tasks.saved}</p>
        <p>From: {experience.from.saved}</p>
        <p>To: {experience.to.saved}</p>
        <button onClick={handleEdit.bind(this, "experience")} type="button">
          Edit
        </button>
      </div>
    );
  }

  //   } else {
  //     return (
  //       <div className={styles.container}>
  //         <h2>Education</h2>
  //         <p>School/College: {education.schoolName.saved}</p>
  //         <p>Title of Study: {education.titleOfStudy.saved}</p>
  //         <p>From: {education.from.saved}</p>
  //         <p>To: {education.to.saved}</p>
  //         <button onClick={handleEdit.bind(this, "education")} type="button">
  //           Edit
  //         </button>
  //       </div>
  //     );
  //   }
}

export default Experience;
