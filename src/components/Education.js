import React from "react";
import styles from "./Education.module.css";

function Education(props) {
  const { education, handleChange, handleSubmit, handleEdit } = props;

  if (education.editable) {
    return (
      <div className={styles.container}>
        <h2>Education</h2>
        <form>
          <label htmlFor="school">School/College:</label>
          <input
            onChange={handleChange}
            type="text"
            id="school"
            name="school"
            value={education.schoolName.input}
          />
          <label htmlFor="title">Title of study:</label>
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            value={education.titleOfStudy.input}
          />
          <label htmlFor="from">From:</label>
          <input
            onChange={handleChange}
            type="date"
            name="from"
            id="from"
            value={education.from.input}
          />
          <label htmlFor="to">To:</label>
          <input
            onChange={handleChange}
            type="date"
            name="to"
            id="to"
            value={education.to.input}
          />
          <button type="submit" onClick={handleSubmit.bind(this, "education")}>
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h2>Education</h2>
        <p>School/College: {education.schoolName.saved}</p>
        <p>Title of Study: {education.titleOfStudy.saved}</p>
        <p>From: {education.from.saved}</p>
        <p>To: {education.to.saved}</p>
        <button onClick={handleEdit.bind(this, "education")} type="button">
          Edit
        </button>
      </div>
    );
  }
}

export default Education;
