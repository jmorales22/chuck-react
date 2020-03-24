import React, { Component } from "react";

class Quote extends Component {
    state = {
        chuckQuote: "Chuck Norris can spawn threads that complete before they are started."
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                chuckQuote: "Google won't search for Chuck Norris because it knows you don't find Chuck Norris, he finds you."
            })
        }, 3000);
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