import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // initialize state using the constructor function
  constructor(props) {
    //  Why we call super(props)? ...Because our App component is extending or burrowing functionality from React.Component base class, this base class has a constructor function of it's own, that goes through some amount of set-up, which has some code inside of it to set-up our React component for us and when we define a constructor function inside our App class we are essentially overriding or replacing the constructor function that is inside the React.Component class, but we still want to make sure that all the set-up code inside the React.Component constructor function still gets called, so to make sure the parents or React.Component constructor function gets called we call super(props) ...super is a reference to the parents constructor function.
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => console.log(error)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
