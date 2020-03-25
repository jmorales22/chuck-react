import React, { Component } from "react";

class Quote extends Component {
    state = {
        chuckQuote: "Chuck Norris can spawn threads that complete before they are started."
    }
   async componentDidMount() {
     try {
       const response = await fetch(`https://api.chucknorris.io/jokes/random?category=dev`);
       const data = await response.json();
       this.setState({ chuckQuote: data.value });
     } catch(error) {
       return error;
     }

    }
  render() {
    const { chuckQuote } = this.state
    return (
      <div>
        <p>Chuck Says...</p>
        <p>{ chuckQuote }</p>
      </div>
    );
  }
}

export default Quote;