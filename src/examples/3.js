import React, { useState, useRef } from "react";

/* In HTML, form elements such as <input>, <textarea>, and <select> usually manage their own state and update 
it when the user enters data. In React, mutable state is usually held in a component's state property and 
is only updated through a call to setState() */

/* export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>you pressed {this.state.count} times</p>
        <button onClick={this.add}>click</button>
      </div>
    );
  }
} */

/* export default class Clock extends React.Component {
  state = { count: 0 };

  add = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>you pressed {this.state.count} times</p>
        <button onClick={this.add}>click</button>
      </div>
    );
  }
} */

/* export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>you pressed {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
} */

// How to use state correctly

//It is important to know three details about the correct use of setState().

// Don't change state directly

//The following example fails to re-render:

// Wrong
//this.state.count = 2;

// Use instead  setState():

//this.setState({ count: count + 1 });

// State updates can be asynchronous

/* this.setState((state) => ({
  count: state.count + 1,
})); */

// When we call setState(), React will combine the argument (new state) with the current state.

/* 
    state = {
      posts: [],
      comments: []
    };
   */

// They can be updated individually with separate calls to setState()

// Add lifecycle methods to the class

//  Mounting

/*  When a component is instantiated and inserted into the DOM, 
    the following methods are called in the specified order */

/*  1)constructor()
    2)static getDerivedStateFromProps()
    3)render()
    4)componentDidMount() */

//  Update

/* Updating occurs when props or state change. The following methods are called 
   in order when the component is re-rendered: */

/* 
   1)static getDerivedStateFromProps()
   2)shouldComponentUpdate()
   3)render()
   4)getSnapshotBeforeUpdate()
   5)componentDidUpdate()
    */

//   Unmounting

// This method is called when a component is removed from the DOM

// componentWillUnmount()

/* export default class Clock extends React.Component {
  state = { date: new Date() };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}  */

//components can be managed and unmanaged

/* export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
     
  handleSubmit(event) {
    alert("Отправленное имя: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
} */

/* export default function TextInput() {
  const inputEl = useRef({ a: 1 });

  const onButtonClick = () => {
    alert(`Your name:${inputEl.current.value}`);
  };
  console.log(inputEl);
  return (
    <>
      <span>{"Enter your name:"}</span>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>{"Confirm"}</button>
    </>
  );
} */

/* export default function TextInputWithFocusButton() {
  const inputEl = useRef();
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
    </>
  );
} */

/* export default function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = (node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  };

  return (
    <>
      <h1 ref={measuredRef}>Привет, мир</h1>
      <h2>Заголовок выше имеет высоту {Math.round(height)} пикселей
      </h2>

    </>
  );
} */

/* export default function Count() {
  const [count, setCount] = useState(["hello", "world", "click", "me"]);
  const a = useRef();

  const handleRemove = (i) =>
    setCount((prevState) => {
      let newItems = prevState.slice();
      newItems.splice(i, 1);
      return newItems;
    });

  const Items = count.map((e, i) => (
    <li key={e} onClick={() => handleRemove(i)}>
      {e}
    </li>
  ));

  return (
    <div>
      <input ref={a} type="text" />
      <button
        onClick={() =>
          setCount((count) => {
            count.push(a.current.value);
            return [...count];
          })
        }
      >
        click
      </button>
      <ul>{Items}</ul>
    </div>
  );
} */