import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadingSpinner from "./LoadingSpinner";

class App extends React.Component {
  // initialize state using the constructor function.
  // the first function that will be called inside our App component is the constructor function.
  // we are not required to define the constructor function, we can optionally define it if we want to do some initial set-up when our component is first created.

  /*

  constructor(props) {
    //  Why do we call super(props)? ...because our App component is extending or burrowing functionality from React.Component base class, this base class has a constructor function of it's own, that goes through some amount of set-up, which has some code inside of it to set-up our React component for us and when we define a constructor function inside our App class we are essentially overriding or replacing the constructor function that is inside the React.Component class, but we still want to make sure that all the set-up code inside the React.Component constructor function still gets called, so to make sure the parents or React.Component constructor function gets called we call super(props) ...super is a reference to the parents constructor function.
    super(props);
    // initialize state object.
    this.state = { lat: null, errorMessage: "" };
  }

  */

  // OR you can initialize state using this syntax instead which is similar to the above code ...babel will take the state declaration and moves it back into the constructor anyway.
  state = { lat: null, errorMessage: "" };

  // componentDidMount() is a good place to do data-loading
  componentDidMount() {
    // geolocation.getCurrentPosition takes in two callbacks ...response and reject/error
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // helper method
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <LoadingSpinner message="Please accept location request..." />;
    }
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
