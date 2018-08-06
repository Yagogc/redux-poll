import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";

class AddPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: ""
  };
  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  isDisable = () => {
    const { question, a, b, c, d } = this.state;
    return question === "" || a === "" || b === "" || c === "" || d === "";
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Add poll: ", this.state);
    this.props.dispatch(handleAddPoll(this.state));
  };
  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}> What is your question?</h3>
        <input
          type="text"
          value={question}
          name="question"
          className="input"
          onChange={this.handleInputChange}
        />
        <h3 style={{ marginBottom: 5 }}> What are the options?</h3>
        <label className="label" htmlFor="a">
          A.
        </label>
        <input
          type="text"
          value={a}
          name="a"
          id="a"
          className="input"
          onChange={this.handleInputChange}
        />
        <label className="label" htmlFor="b">
          B.
        </label>
        <input
          type="text"
          value={b}
          name="b"
          id="b"
          className="input"
          onChange={this.handleInputChange}
        />
        <label className="label" htmlFor="c">
          C.
        </label>
        <input
          type="text"
          value={c}
          name="c"
          id="c"
          className="input"
          onChange={this.handleInputChange}
        />
        <label className="label" htmlFor="D">
          D.
        </label>
        <input
          type="text"
          value={d}
          name="d"
          id="d"
          className="input"
          onChange={this.handleInputChange}
        />
        <button type="submit" className="btn" disabled={this.isDisable()}>
          Submit
        </button>
      </form>
    );
  }
}
export default connect()(AddPoll);
