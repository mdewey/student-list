import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import StudentItem from '../components/StudentItem'

import api from '../components/JsonData'

class Subscribe extends Component {

  constructor() {
    super();
    this.state = {
      students: []
    };
  };

  componentWillMount() {
    api.getData((items) => {
      this.setState(() => {
        return {students: items}
      })
    })
  }

  render() {
    return (
      <div>
        <nav className="student-header">
          <img src="/images/TIY-logo-white-png.png" alt="Welcome to The Iron Yard." className="logo"/>
          <div>Iron Grads</div>
        </nav>
        <header className="welcome-hero">
            Welcome to Cohort 8 Demo Day. 
        </header>
        <section className="students">
          <h3>Left Room</h3>
          {this
            .state
            .students
            .filter((s) => {
              return s.floor === 1
            })
            .map((student, i) => {
              return <StudentItem {...student} key={i}></StudentItem>
            })}
          <h3>Middle Room</h3>
          {this
            .state
            .students
            .filter((s) => {
              return s.floor === 2
            })
            .map((student, i) => {
              return <StudentItem {...student} key={i}></StudentItem>
            })}
          <h3>Right Room</h3>
          {this
            .state
            .students
            .filter((s) => {
              return s.floor === 3
            })
            .map((student, i) => {
              return <StudentItem {...student} key={i}></StudentItem>
            })}
        </section>
        <footer>
            <Link to="/about">What is all about?</Link>
        </footer>
      </div>
    )
  }
}
export default Subscribe;