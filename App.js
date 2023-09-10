const parent = React.createElement("div",{},[React.createElement("h1",{key:"1"},"demo1"), React.createElement("h2",{key:'2'},"demo2")])

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(parent)
root.render(parent)