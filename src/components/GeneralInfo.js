import React, { useState } from "react";

export default function Education() {
  const [name, setName] = useState({ input: "", saved: "" });
  const [email, setEmail] = useState({ input: "", saved: "" });
  const [phone, setPhone] = useState({ input: "", saved: "" });
  const [editable, setEditable] = useState(true);

  const handleChange = (e) => {
    if (e.target.id === "fullName") {
      setName((name) => ({
        ...name,
        input: e.target.value,
      }));
    } else if (e.target.id === "email") {
      setEmail((email) => ({
        ...email,
        input: e.target.value,
      }));
    } else if (e.target.id === "phone") {
      setPhone((phone) => ({
        ...phone,
        input: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName((name) => ({
      saved: name.input,
      input: "",
    }));
    setEmail((email) => ({
      saved: email.input,
      input: "",
    }));
    setPhone((phone) => ({
      saved: phone.input,
      input: "",
    }));
    setEditable(false);
  };

  const handleEdit = () => {
    setName((name) => ({
      ...name,
      input: name.saved,
    }));
    setEmail((email) => ({
      ...email,
      input: email.saved,
    }));
    setPhone((phone) => ({
      ...phone,
      input: phone.saved,
    }));
    setEditable(true);
  };

  let render;

  if (editable) {
    render = (
      <div className="section">
        <h4 className="title is-size-4 has-text-centered">
          General Information
        </h4>

        <div className="columns is-mobile is-centered">
          <div className="column is-10-mobile is-half-tablet">
            <form>
              <div className="field">
                <label htmlFor="fullName" className="label">
                  Full Name
                </label>
                <div className="control">
                  <input
                    onChange={handleChange}
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="input"
                    placeholder="Enter your name"
                    value={name.input}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <div className="control">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    placeholder="example@email.com"
                    onChange={handleChange}
                    value={email.input}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="phone">
                  Phone
                </label>
                <div className="control">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="input"
                    onChange={handleChange}
                    value={phone.input}
                    placeholder="Enter Phone"
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
        <h4 className="title is-size-4 has-text-centered">
          General Information
        </h4>
        <div className="columns is-mobile is-centered">
          <div className="column is-10-mobile is-half-tablet">
            <div className="content">
              <ul>
                <li>
                  <strong>Full Name: </strong>
                  {name.saved}
                </li>
                <li>
                  <strong>Email: </strong>
                  {email.saved}
                </li>
                <li>
                  <strong>Phone: </strong>
                  {phone.saved}
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
