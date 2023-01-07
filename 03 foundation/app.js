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

//Using JSX =>

const heading = (
  <div className="header">
    <h1 key="h1" className="h1">
      Welcome Home
    </h1>
    <ul>
      <li> About us</li>
      <li> Support</li>
      <li> Home</li>
    </ul>
  </div>
); // known as jsx expression

// using normal function & const
const HeaderComponent = function () {
  return (
    <div>
      <h1>this is heading1</h1>
      <h2>this is heading2</h2>
    </div>
  );
};

// using arrow function
const HeaderComponent2 = () => {
  return (
    <div>
      <h1>this is heading1</h1>
      <h2>this is heading2</h2>
    </div>
  );
};

// using arrow function properties to remove return and curly braces
// here above and below components are same
const HeaderComponent3 = () => (
  <div>
    <h1>this is heading1</h1>
    <h2>this is heading2</h2>
  </div>
);

// using react element inside functional component

const newHeading = <h2>this is new heading using react element</h2>;

const HeaderComponent4 = () => {
  return (
    <div>
      <h1>this is heading1</h1>
      {newHeading}
      <h2>this is heading2</h2>
    </div>
  );
};

//using another functional component inside our functional component

const Title = () => {
  return (
    <h2>
      this is a title component rendered inside our functional header component
    </h2>
  );
};
// another way other than using component tag is to just call the function inside curly braces
// ex here: { Title() }
// also any piece of js code can be written inside curly braces
const xyz = 10;
const HeaderComponent5 = () => {
  return (
    <div>
      <Title />
      <h1>this is heading1</h1>
      <h2>this is heading2</h2>
      {xyz + 2}
      {console.log(xyz)}
      {console.log("any js code here")}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// normal react element render
root.render(heading); // will not be rendered since next line is rendering content in same div so this will be replaced
// render react component
root.render(<HeaderComponent5 />);
