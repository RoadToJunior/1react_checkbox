import React from "react";
import "./App.css";

const OrderForm = (props) => {
  const { submit, change, isConfirmed } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
      <label htmlFor="age">Mam co najmnie 16 lat</label>
      <br />
      <button>Kup bilet</button>
    </form>
  );
};

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
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          submit={this.handleFormSubmit}
          change={this.handleChange}
          checked={this.state.isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />;
    } else {
      return <ValidationMessage txt="Nie możesz obejrzeć tego filmu." />;
    }
  }
};
export default TicketShop;
