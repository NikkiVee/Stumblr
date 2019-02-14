import React from 'react';
import axios from 'axios';
import './css/Home.css';

class Home extends React.Component{
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="wholething">

      <div className="greeting-container">
      <div className="greeting1">
        <h1>stumblr</h1>
      </div>
      <div className="greeting2">
        <p>Come for what you love.</p>
        <p>Stay for what you discover.</p>
      </div>
      <button class="button">Get Started</button>
      </div>

      </div>
    );
  }
}

export default Home;
