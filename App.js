/**
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>Hello</h1>
 *  </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement("div", {id: "parent"}, 
[
React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "i am h1 tag"), React.createElement("h2", {}, "i am h2 tag")]),
React.createElement("div", {id: "child-2"}, [React.createElement("h1", {}, "i am h1-2 tag"), React.createElement("h2", {}, "i am h2-2 tag")])
]);

// {} =>> object is where you will give an attribute to your tag.
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React !!");

// This heading is not an element but it is an object
console.log(heading);

// Props are the attributes and the childrens that we pass.

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// render method will take the passed object convert it into element and put it inside the root.

console.log(parent);

// parent is an object and it is a react element

// React ELement (object) => HTML => Browser understands

root.render(parent);


