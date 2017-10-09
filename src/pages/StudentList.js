import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Subscribe extends Component {

  constructor() {
    super();
    this.state = {
      students: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    };
  };

  render() {
    return (
      <div>
        <nav className="student-header">
          <div>The Graduates</div>
          <Link to="/">Home</Link>
        </nav>
        <section className="students">
          {this
            .state
            .students
            .map((student, i) => {
              return <div className="list-item" key={i}>
                <img
                  className="student-picture"
                  src="http://www.fillmurray.com/200/200"
                  alt="a"/>
                <div className="student-info">
                  <div className="student-name">Alex Smith</div>
                  <div className="student-project-title">Project title</div>
                </div>
                <div className="student-course"><img src="/images/node.svg" alt="node" className="student-course-logo"/></div>
              </div>
            })}
        </section>
      </div>
    )
  }
}
export default Subscribe;