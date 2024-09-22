// const heading = React.createElement("h1", {id:"hdng"}, " hello world by react");
// //{} it a object to give attribute to the class
// console.log(heading);//heading is a object not html object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// // render method is converting object to html tag


const nested = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child"},
        [ React.createElement("h1",{},"i am h1"),React.createElement("h2",{},"i am h2")]
    ),
    React.createElement("div",
        {id:"child2"},
        [ React.createElement("h1",{},"i am h1"),React.createElement("h2",{},"i am h2")]
    )]
)

console.log(nested)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(nested);
