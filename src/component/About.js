import User from "./User.js"
import UserClass from "./UserClass.js"

const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is about page </h2>
            {/* <User /> */}
            <UserClass name={"Fizel class"} location={"erode class"}/>
        </div>
    );
};

export default About;