// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
*
<div id="container">
<div id="child1">
<h1 id="heading1">Hello world</div>
<h2 id=subHeading1>Welcome to React JS world</h2>
</div>
<div id="child2">
<h1 id="heading2">Hello world 2</div>
<h2 id=subHeading2>Welcome to React JS world 2</h2>
</div>
</div>
*
*/
const container = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello world 1!"),
    React.createElement(
      "h2",
      { id: "subHeading1" },
      "Welcome to React JS world 1!"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading2" }, "Hello world 2!"),
    React.createElement(
      "h2",
      { id: "subHeading2" },
      "Welcome to React JS world 2!"
    ),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
