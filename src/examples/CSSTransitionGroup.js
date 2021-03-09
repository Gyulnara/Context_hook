import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";
import "./CSSTransitionGroup.css";

export default class TodoList extends React.Component {
  state = { items: ["hello", "world", "click", "me"] };

  handleAdd = () => {
    const newItems = this.state.items.concat([prompt("Enter some text")]);
    this.setState({ items: newItems });
  };

  handleRemove = (i) => {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  };

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1500}
        >
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}
