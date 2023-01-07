import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div class="header">
      <h1>Welcome Home</h1>
      <ul>
        <li>About us</li>
        <li>Support</li>
        <li>Home</li>
      </ul>
    </div>
 */
// Using react.createElement =>
const container = React.createElement(
  "div",
  {
    className: "header",
  },
  [
    React.createElement("h1", {}, "Welcome Home"),
    React.createElement("ul", {}, [
      React.createElement("li", {}, "About us"),
      React.createElement("li", {}, "Support"),
      React.createElement("li", {}, "Home"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
