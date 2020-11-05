import React from "react";
import styles from "./GeneralInfo.module.css";

function GeneralInfo(props) {
  const { handleChange, handleSubmit, generalInfo, handleEdit } = props;

  if (props.generalInfo.editable) {
    return (
      <div className={styles.container}>
        <h2>General Information</h2>
        <form>
          <label htmlFor="fullName">Full name:</label>
          <input
            onChange={handleChange}
            id="fullName"
            type="text"
            value={generalInfo.fullname.input}
          />
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={generalInfo.email.input}
          />
          <label htmlFor="phone">Phone</label>
          <input
            onChange={handleChange}
            type="tel"
            name="phone"
            id="phone"
            value={generalInfo.phone.input}
          />
          <button type="submit" onClick={handleSubmit.bind(this, "general")}>
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h2>General Information</h2>
        <p>Full Name: {generalInfo.fullname.saved}</p>
        <p>Email: {generalInfo.email.saved}</p>
        <p>Phone: {generalInfo.phone.saved}</p>

        <button onClick={handleEdit.bind(this, "general")} type="button">
          Edit
        </button>
      </div>
    );
  }
}

export default GeneralInfo;
