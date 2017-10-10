import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={3000} transitionLeaveTimeout={7000}>
                    <div
                        className="list-item selected"
                        onClick={evt => this.studentClick(evt, this.state.student)}>
                        <img className="student-picture" src={this.state.student.profileImage} alt="a"/>
                        <div className="student-info">
                            <div className="student-name">{this.state.student.name}</div>
                        </div>
                        <div className="student-course">
                            <i
                                className={"devicon-" + this.getFocusImge(this.state.student.focus) + " student-course-logo"}></i>
                        </div>

                    </div>
                    <div className="student-project-container">
                        <header>{this.state.appName}</header>
                    </div>
                </ReactCSSTransitionGroup>
            )
        } else {
            return (
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={3000} transitionLeaveTimeout={7000}>
                <div
                    className="list-item"
                    onClick={evt => this.studentClick(evt, this.state.student)}>
                    <img className="student-picture" src={this.state.student.profileImage} alt="a"/>
                    <div className="student-info">
                        <div className="student-name">{this.state.student.name}</div>
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