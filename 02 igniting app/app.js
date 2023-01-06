import React from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "class",
    style: {
      fontSize: "28px",
      fontWeight: "bold",
    },
  },
  "Hello EveryOne!"
);
console.log(heading);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    className: "class",
    style: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  },
  "How are you?"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

root.render(container);
