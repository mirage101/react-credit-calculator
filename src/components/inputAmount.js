import React from "react";
import TimeTable from "./timeTableAmounts";

class inputAmount extends React.Component {
  constructor() {
    super();
    this.state = { value: 1000 };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <h4>Type amount to calculate</h4>
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <h4>EUR</h4>
        <TimeTable salary={this.state.value} />
      </div>
    );
  }
}

export default inputAmount;
