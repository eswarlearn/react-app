import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  //best place to create state variables
  constructor(props) {
    super(props); // importants of super()
    this.state = {
      // count: 0,
      userInfo: {
        name:'dummy', location:'dummy location', avatar_url :'loading'
      },
    };
    // console.log('Child constructor...> '+this.props.name);
  }

  async componentDidMount() {
    // console.log('Chiles compo did mount '+this.props.name);
    const data = await fetch("https://api.github.com/users/eswarlearn");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
    console.log("jsonData--> ", jsonData);
  }

  componentDidUpdate() {
    console.log("did update ")
  }

  render() {
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    // console.log('Child render '+this.props.name);
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        {/* <h1>count : {count}</h1>

        <button
          onClick={() => {
            //never updte the state variales directly eg., this.state.count = this.state.count + 1 : use this.setState
            this.setState({
                count: this.state.count + 1, // this is an object 
                // on each click react will  re consilation or re render  and  
                // find the div of that object update the state variable 
                // re render the component
            })
          }}
        >
          {" "}0
          inc{" "}
        </button> */}

        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
