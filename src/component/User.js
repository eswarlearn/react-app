import { useState } from "react";

const User =()=>{
    const count =useState(0);
    const count2 =useState(2);
    return(
        <div className="user-card">
            <h2>Name: Eswar</h2>
            <h1>count : {count}</h1>
            <h1>count2 : {count2}</h1>
            <h3>Location: Chennai</h3>
            <h4>contact: eswar@gmal.com</h4>
        </div>
    )
}

export default User;