import React from "react";


/* const element = (
  <h1 className="greeting">
    Привет, мир!
  </h1>
);


const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Привет, мир!'
); */


/* Components allow you to break your interface into independent parts that are easy to think about in isolation. 
   They can be stacked together and used multiple times. */

// Functional components

/* export default function HelloWorld1() {
  return <h1>Hello, world!</h1>;
}
 */
// class components

/* export default class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
} */

//🔥 component rules

//1) All React component names must start with a capital letter

/* If the component starts with a lowercase letter, React treats it as a DOM tag. For example, 
 <div /> is a div tag from HTML, and <Welcome /> is our Welcome component. */

/* function Rules1() {
  return <h1>Hello, world!</h1>;
} */

//2)

/* export default function Rules2() {// JSX expressions must have one parent element
  return (
         <h1>Hello, world!</h1>
         <h1>Hello, world!</h1>
         );
}  */

/* function Rules2() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h1>Hello, world!</h1>
    </div>
  );
} */

//🔥 syntax

/* function Checkbox2() {
  return (
    <form>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1"> I have a bike</label>
      <br/>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
      <label for="vehicle2"> I have a car</label>
    </form>
  );
} */

/* export default function Checkbox1() {
  return (
    <form>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1"> I have a bike</label>
      <br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> I have a car</label>
    </form>
  );
} */

//🔥 Fragment
/* export default function RegulationsFragment1() {
  return (
    <>
      <h1>Hello, world!</h1>
      <h1>Hello, world!</h1>
    </>
  );
} */

//const { Fragment } = React;

/* export default function RegulationsFragment2() {
  return (
    <Fragment>
      <h1>Hello, world!</h1>
      <h1>Hello, world!</h1>
    </Fragment>
  );
} */

/* export default function RegulationsFragment3() {
  return (
    <React.Fragment>
      <h1>Hello, world!</h1>
      <h1>Hello, world!</h1>
    </React.Fragment>
  );
} */

/* const element = (
  <h1 className="greeting">
    Привет, мир!
  </h1>
); */

/* 
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Привет, мир!'
); */
