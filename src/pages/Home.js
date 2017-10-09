import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Subscribe extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="logo-container">
                    <img src="/images/TIY-logo-white-png.png" alt="Welcome to The Iron Yard." className="logo"/>
                </div>
                <h2><Link to="/students" className="default-link">Welcome to Demo Day!</Link></h2>
                <p>We will be starting at 2pm with a ceremony with students on the 4th and 5th... and more things about demo day here... blah blah blipity blah... and more things about demo day here... blah blah blipity blah... and more things about demo day here... blah blah blipity blah... and more things about demo day here... blah blah blipity blah </p>
                <Link to="/students" className="nav-student-button">View Students</Link>

            </div>
        )
    }
}
export default Subscribe;