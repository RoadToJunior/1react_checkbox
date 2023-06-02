import React from "react";
import "./App.css";

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isFormSubmitted: true,
    });
  };

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (this.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />;
      } else {
        return <NegativeMessage />;
      }
    }
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam co najmnie 16 lat</label>
          <br />
          <button>Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

export default TicketShop;
