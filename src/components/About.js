import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return <h1>Welcom {loggedInUser}</h1>;
          }}
        </UserContext.Consumer>
        <h1>About the class components</h1>
        <UserClass
          name={"Balakarthik Pendyala"}
          check={"first"}
          location={"Hyderabad"}
        />
      </div>
    );
  }
}
export default About;
