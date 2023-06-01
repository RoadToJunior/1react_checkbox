import React from "react";
import "./App.css";

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input type="checkbox" id="age" onChange={this.handleChange} />
        <label htmlFor="age">Mam co najmnie 16 lat</label>
      </>
    );
  }
}

const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativeMessage = () => (
  <p>Nie możesz obejrzeć tego filmu jeżeli masz mniej niż 16 lat!</p>
);

export default CheckboxAgeConfirmation;
