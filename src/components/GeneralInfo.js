import React from "react";

function GeneralInfo(props) {
  const { handleChange, handleSubmit, generalInfo, handleEdit } = props;

  if (props.generalInfo.editable) {
    return (
      <div className="container">
        <h2>General Information</h2>
        <form>
          <label htmlFor="fullName">Full Name:</label>
          <input
            onChange={handleChange}
            id="fullName"
            type="text"
            value={generalInfo.fullname.input}
            placeholder="Enter your name"
          />
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={generalInfo.email.input}
            placeholder="example@email.com"
          />
          <label htmlFor="phone">Phone</label>
          <input
            onChange={handleChange}
            type="tel"
            name="phone"
            id="phone"
            value={generalInfo.phone.input}
            placeholder="Enter Phone"
          />
          <button type="submit" onClick={handleSubmit.bind(this, "general")}>
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="container">
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
