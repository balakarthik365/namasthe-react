import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    //constructor initializes the components own state
    super(props); // To initialize the react component instance and use props in whole component
    this.state = {
      userInfo: {
        login: "dummy",
        id: "dummy",
        avatar_url: "dummy",
        url: "dummy",
        user_view_type: "dummy",
        type: "dummy",
        created_at: "dummy",
      },
    };
    console.log(this.props.check + " Child Constructor");
  }
  async componentDidMount() {
    console.log(this.props.check + "Child componentDidMount");
    //API call
    const data = await fetch("https://api.github.com/users/balakarthik364");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log(this.props.check + "Child componentDidUdpate");
  }
  componentWillUnmount() {
    console.log(this.props.check + "Child componentWillUnmount");
  }
  render() {
    console.log(this.props.check + "Child Render");
    const { login, id, avatar_url, url, user_view_type, type, created_at } =
      this.state.userInfo;
    return (
      <div className="user-container">
        <h2>UserName: {login}</h2>
        <h3>URL: {url}</h3>
        <h3>User Type: {user_view_type}</h3>
        <img src={avatar_url} />
        <p>
          type:{type}, created at:{created_at}, id:{id}
        </p>
      </div>
    );
  }
}
export default UserClass;
