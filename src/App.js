import React from "react";
import "./App.css";

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else {
      return <NegativeMessage />;
    }
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam co najmnie 16 lat</label>
        <button onClick={this.handleClick}>Kup bilet</button>
        {this.displayMessage()}
      </>
    );
  }
}

const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

export default TicketShop;
