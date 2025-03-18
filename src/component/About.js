import User from "./User.js"
import UserClass from "./UserClass.js"
import {Component} from "react"; // differ from useClass , refer that also

//changed to class based from function based
class About extends Component {
    constructor(pro){
        super(pro);
        // console.log('Parent Constructor');
        
    }

    componentDidMount(){
        // console.log('Parent compo did mount');
    }

    render(){
        // console.log('Parent render');
        return(
            <div>
                <h1>About</h1>
                <h2>This is about page </h2>
                {/* <User /> */}
                <UserClass name={"Fizel class"} location={"erode class"}/>
                {/* <UserClass name={"elonmusk"} location={"US"}/> */}
            </div>
        );
    }
}


// const About = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is about page </h2>
//             {/* <User /> */}
//             <UserClass name={"Fizel class"} location={"erode class"}/>
//         </div>
//     );
// };

export default About;