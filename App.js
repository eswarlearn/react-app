import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {id:"hdng"}, " hello world by react");
// //{} it a object to give attribute to the class
// console.log(heading);//heading is a object not html object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// // render method is converting object to html tag


// const nested = React.createElement("div",
//     {id:"parent"},
//     [React.createElement("div",
//         {id:"child"},
//         [ React.createElement("h1",{},"i am h1..."),React.createElement("h2",{},"i am h2")]
//     ),
//     React.createElement("div",
//         {id:"child2"},
//         [ React.createElement("h1",{},"i am h1"),React.createElement("h2",{},"i am h2")]
//     )]
// )

// Rect Element


const reaEle = <h1 id="jsxHead">element</h1>;

// React functional component
const JsxHeading = () => {
    return <h1 id="jsxHead">JSX syntax in React</h1>;
};

const str = 'from js';

// React functional component
const HeadingComponent = () => {
    return (
        <div>
            <JsxHeading />
            <h1 className="component">Component Composition</h1>
            <h2>{100 + 200}</h2>
            { reaEle }
            {/* We can use JS inside {} */}
        </div>
    );
};

// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);