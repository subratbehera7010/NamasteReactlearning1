import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }

  componentDidMount() {
    //console.log("Parent componentDidMount");
  }

  render() {
    //console.log("Parent render called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React</h2>
        <UserClass name={"First"} location={"Odisha"} />
      </div>
    );
  }
}

export default About;
