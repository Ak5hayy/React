const root = ReactDOM.createRoot(document.getElementById("root"));

//create and return react elements. At the end of the day react element is object
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

// Use Array when have to create/render more than 2 children/child react elements
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

root.render(container);
