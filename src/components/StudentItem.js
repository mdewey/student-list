import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router-dom';

class StudentItem extends Component {

    constructor(props) {
        super();
        this.state = {
            student: props,
            isExpanded: false
        };
    };

    getFocusImge(focus)
    {
        focus = focus.toLowerCase();
        if (focus.indexOf("net") >= 0) {
            return "dot-net-plain-wordmark"
        } else if (focus.indexOf("ruby") >= 0) {
            return "rails-plain-wordmark"
        } else if (focus.indexOf("node") >= 0) {
            return "nodejs-plain"
        } else if (focus.indexOf("front") >= 0) {
            return "react-plain-wordmark"
        }

    }

    studentClick(e, student) {
        console.log("student was clicked, ", student)
        this.setState((prev) => {
            return {
                isExpanded: !prev.isExpanded
            }
        })
    }

    render() {
        if (this.state.isExpanded) {
            return (
                <div className="selected-student">
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}>
                        <div
                            className="list-item selected"
                            onClick={evt => this.studentClick(evt, this.state.student)}>
                            <img className="student-picture" src={this.state.student.profileImage} alt="a"/>
                            <div className="student-info">
                                <div className="student-name">{this.state.student.name}</div>
                                <div className="student-github">
                                    <i className="devicon-github-plain"></i>{this
                                        .state
                                        .student
                                        .github
                                        .trim()}</div>

                            </div>
                            <div className="student-course">
                                <i
                                    className={"devicon-" + this.getFocusImge(this.state.student.focus) + " student-course-logo"}></i>
                            </div>
                        </div>
                        <div className="student-project-container">
                            <header>Project</header>
                            <section>
                                <span>{this.state.student.appName}</span>
                              
                            </section>
                        </div>
                        <nav className="student-nav">
                        <a href={this.state.student.appLink} className="more-info-link" target="_blank"> VIEW APP</a>
                        &nbsp;&nbsp;
                        &nbsp;                            <Link
                                to={{
                                pathname: "/students/" + this
                                    .state
                                    .student
                                    .github
                                    .trim()
                            }}
                                className="more-info-link">MORE</Link>
                        </nav>
                    </ReactCSSTransitionGroup>
                </div>
            )
        } else {
            return (
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={3000}
                    transitionLeaveTimeout={7000}>
                    <div
                        className="list-item"
                        onClick={evt => this.studentClick(evt, this.state.student)}>
                        <img
                            className="student-picture"
                            src={this.state.student.profileImage}
                            alt={this.state.student.name}/>
                        <div className="student-info">
                            <div className="student-name">{this.state.student.name}</div>
                            <div className="student-github">
                                <i className="devicon-github-plain colored"></i>{this
                                    .state
                                    .student
                                    .github
                                    .trim()}</div>

                        </div>
                        < div className="student-course">
                            <i
                                className={"devicon-" + this.getFocusImge(this.state.student.focus) + " colored student-course-logo"}></i>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            )
        }
    }
}

export default StudentItem;