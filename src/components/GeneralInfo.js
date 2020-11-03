import React from "react";
import styles from "./GeneralInfo.module.css";

function GeneralInfo(props) {
  const { handleChange } = props;
  return (
    <div className={styles.container}>
      <h2>General Information</h2>
      <form>
        <label htmlFor="fullName">Full name:</label>
        <input onChange={handleChange} id="fullName" type="text" />
        <label htmlFor="email">Email:</label>
        <input onChange={handleChange} type="email" name="email" id="email" />
        <label htmlFor="phone">Phone</label>
        <input onChange={handleChange} type="tel" name="phone" id="phone" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default GeneralInfo;
