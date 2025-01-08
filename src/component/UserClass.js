import React from "react";

class UserClass extends React.Component {
  //best place to create state variables
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h1>count : {count}</h1>

        <button
          onClick={() => {
            //never updte the state variales directly
            this.setState({
                count: this.state.count + 1,
            })
          }}
        >
          {" "}
          inc{" "}
        </button>

        <h1>count2 : {count2}</h1>
        <h3>Location: {location}</h3>
        <h4>contact: eswar@gmal.com</h4>
      </div>
    );
  }
}

export default UserClass;
