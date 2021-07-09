import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function onUpdate(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      switch (name) {
        case "fName":
          return {
            fName: value,
            lName: prevValue.lName,
            email: prevValue.email
          };
        case "lName":
          return {
            fName: prevValue.fName,
            lName: value,
            email: prevValue.email
          };
        case "email":
          return {
            fName: prevValue.fName,
            lName: prevValue.lName,
            email: value
          };
        default:
          console.log("Error");
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={onUpdate}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={onUpdate}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={onUpdate}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
