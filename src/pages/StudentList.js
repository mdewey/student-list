import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import StudentItem from '../components/StudentItem'

class Subscribe extends Component {

  constructor() {
    super();
    this.state = {
      students: []
    };
  };

  componentWillMount() {
    fetch('/data/students.json')
      .then(resp => resp.json())
      .then((items) => {
        this.setState(() => {
          return {students: items}
        })
      })
  }

 

  render() {
    return (
      <div>
        <nav className="student-header">
          <div>Iron Graduates</div>
          <Link to="/">Home</Link>
        </nav>
        <section className="students">
          <h3>4th Floor</h3>
          {this
            .state
            .students
            .filter((s) => {
              return s.floor === 4
            })
            .map((student, i) => {
              return <StudentItem {...student} key={i}></StudentItem>
            })}
          <h3>5th Floor</h3>
          {this
            .state
            .students
            .filter((s) => {
              return s.floor === 5
            })
            .map((student, i) => {
              return <StudentItem {...student} key={i}></StudentItem>
            })}
        </section>
      </div>
    )
  }
}
export default Subscribe;