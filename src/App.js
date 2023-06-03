import React from "react";
import "./App.css";

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />;
      } else {
        return <ValidationMessage txt="Nie możesz obejrzeć tego filmu." />;
      }
    }
  };

  render() {
    const { isConfirmed } = this.state;
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleChange}
            checked={isConfirmed}
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
const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu.</p>;

export default TicketShop;
