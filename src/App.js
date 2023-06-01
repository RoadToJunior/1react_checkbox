import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    text: "Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!",
  };

  handleChange = () => {};

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input type="checkbox" onChange={this.handleChange} id="input" />
        <label htmlFor="input">Mam co najmnie 16 lat</label>

        <p>{this.state.text}</p>
      </>
    );
  }
}

export default App;
