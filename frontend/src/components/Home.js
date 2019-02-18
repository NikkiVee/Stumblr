import React from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component{

  render() {
    return (
      <div className="background">

      <div className="wholething">

      <div className="greeting-container">

      <div className="greeting1">
        <h1>stumblr</h1>
      </div>

      <div className="greeting2">
        <p>Come for what you love.</p>
        <p>Stay for what you discover.</p>
      </div>

      <Link to="/dashboard"><button className="button">Get Started</button></Link>
      </div>

      </div>

      </div>
    );
  }
}

export default Home;
