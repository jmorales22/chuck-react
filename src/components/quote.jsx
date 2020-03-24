import React, { Component } from "react";

class Quote extends Component {
    state = {
        chuckQuote: "Chuck Norris can spawn threads that complete before they are started."
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