import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Subscribe extends Component {
  render() {
    return(
      <div>
        <h2>Welcome!</h2>
        <Link to="/students" >View Students</Link>
     
      </div>
    )
  }
}
export default Subscribe;