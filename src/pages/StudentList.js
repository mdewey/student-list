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
          <div>Iron Grads</div>
          <Link to="/">Home</Link>
        </nav>
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
      </div>
    )
  }
}
export default Subscribe;