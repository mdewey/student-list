import React, {Component} from 'react';

class StudentItem extends Component {

    constructor(props) {
        super();
        this.state = {student:props};
    };

    getFocusImge(focus)
    {
        focus = focus.toLowerCase();
        console.log(focus)
        if (focus.indexOf("net") >= 0)
        {
            return "dot-net-plain-wordmark"
        }
        else if (focus.indexOf("ruby") >=0){
            return "rails-plain-wordmark"
        }
        else if (focus.indexOf("node")>=0){
            return "nodejs-plain"
        }
        else if (focus.indexOf("front")>=0){
            return "react-plain-wordmark"
        }

    }

    render() {
        return (
            <div className="list-item">
                <img className="student-picture" src={this.state.student.profileImage} alt="a"/>
                <div className="student-info">
                    <div className="student-name">{this.state.student.name}</div>
                    <div className="student-project-title">{this.state.student.appName}</div>
                </div>
                <div className="student-course"><i className={"devicon-"+ this.getFocusImge(this.state.student.focus)+" colored student-course-logo"}></i></div>
            </div>
        )
    }
}
export default StudentItem;