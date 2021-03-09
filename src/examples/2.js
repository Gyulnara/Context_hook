import React from "react";
//import PropTypes from "prop-types";

//🔥 Expressions JavaScript  in React

//1) JSX expression
/* export default function JSX_Expression1() {
  const HelloWorld = <h1>Hello, world!</h1>;
  return HelloWorld;
} */

//2) Array of JSX expressions

// Keys help React determine which elements have changed, added, or removed.

/* export default function JSX_Expression2() {
  
  return (
    <div>
      {["Mihail", "Edgar", "Sofia"].map((name, index) => (
        <div key={index}>{`Hello ${name}`}</div>
      ))}
    </div>
  );
} */

//2) if variable expression

/* export default function IfVariable() {
  const HelloWorld = "Hello, world!";
  return (
    <div>
      <div>{HelloWorld}</div>
      <div>Hello World</div>
      <div>{"Hello World"}</div>
      <div>{~~(Math.random() * 10) > 5 ? "more than 5" : "less than 5"}</div>
      <div>{true && "Hello"}</div>
      <div>{false || "World"}</div>
    </div>
  );
} */

//🔥 ignore

/* export default function Ignore() {
  return (
    <div>
      <div>{false}</div>
      <div>{true}</div>
      <div>{null}</div>
      <div>{undefined}</div>
    </div>
  );
} */

//🔥 Differences in attributes
//https://learn-reactjs.ru/reference/dom-elements

//🔥 Differences in React Events
// https://reactjs.org/docs/events.html

/* export default function OnClick() {
  return (
    <div>
      <button onClick={() => alert("Hello World")}>onClick</button>
    </div>
  );
} */

/* export default function OnClick() {
  return (
    <div>
      <button onDoubleClick={() => alert("Hello World")}>{"onClick"}</button>
    </div>
  );
} */

/* 
export default function OnChange() {
  const change = (e) => {
    alert(`you choose ${e.target.value}`);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="checkbox"
        onChange={change}
        id="vehicle1"
        name="vehicle1"
        value="Bike"
      />
      <label htmlFor="vehicle1"> I have a bike</label>
      <br />
      <input
        type="checkbox"
        onChange={change}
        id="vehicle2"
        name="vehicle2"
        value="Car"
      />
      <label htmlFor="vehicle2"> I have a car</label>
      <br />
      <input
        type="checkbox"
        onChange={change}
        id="vehicle3"
        name="vehicle3"
        value="Boat"
      />
      <label htmlFor="vehicle3"> I have a boat </label>
      <br />
    </form>
  );
} */

//🔥 Props

/* 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

 export default function App() {
  return (
    <div>
      <Welcome name={"Sara"} />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
} */

// props rules
//Props pass data from parent to child components. They are immutable and thus will not be changed.

//🔥 Prop Types
// npm install --save prop-types or  yarn add  prop-types
/* 
function Welcome1(props) {
  return <h1>Hello, {props.name}</h1>;
}
Welcome1.propTypes = {
  name: PropTypes.string,
};

export default function App1() {
  return (
    <div>
      <Welcome1 name={21} />
      <Welcome1 name="Cahal" />
      <Welcome1 name="Edite" />
    </div>
  );
}
 */
/* Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `Welcome1`, expected `string`. */

/* export default class MyName extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

MyName.propTypes = {
  name: PropTypes.string,
}; 

class MyComponent extends React.Component {
  render() {
    return <MyName name={2} />;
  }
}
*/

/* Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `MyName`, expected `string`. */

///////////////////////////////////////////////

/* export default function OnChange() {
  let formData = {};
  const change = (e) => {
    const { value, name } = e.target;
    formData = { ...formData, [name]: value };
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`${formData.lastName} ${formData.firstName} ${formData.message}`);
      }}
    >
      <label htmlFor="lastName">last name</label>
      <input
        type="text"
        onChange={change}
        id="lastName"
        name="lastName"
        value={formData.lastName}
      />
      <br />
      <label htmlFor="firstName"> first name</label>
      <input
        type="text"
        onChange={change}
        id="firstName"
        name="firstName"
        value={formData.firstName}
      />
      <br />
      <label htmlFor="message">message</label>
      <input
        type="text"
        onChange={change}
        id="message"
        name="message"
        value={formData.message}
      />
      <br />
      <button type="submit">send</button>
    </form>
  );
} */
