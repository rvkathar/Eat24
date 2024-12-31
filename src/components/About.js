import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About class component</h1>

        <UserClass name={"Rushikesh (Class)"} location={"Pune(Class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Class and functional components</h2>

//       <UserClass name={"Rushikesh (Class)"} location={"Pune(Class)"} />
//     </div>
//   );
// };

export default About;
