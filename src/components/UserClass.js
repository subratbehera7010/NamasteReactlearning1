import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url:
          "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
      },
    };
    //console.log(this.props.name + " child constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + " child componentDidMount");

    const data = await fetch("https://api.github.com/users/subratbehera7010");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @Subrat</h4>
      </div>
    );
  }
}

export default UserClass;
