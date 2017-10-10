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
            return "csharp.svg"
        }
        else if (focus.indexOf("ruby") >=0){
            return "ruby.png"
        }
        else if (focus.indexOf("node")>=0){
            return "node.svg"
        }
        else if (focus.indexOf("front")>=0){
            return "react.svg"
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
                <div className="student-course"><img src={"/images/" + this.getFocusImge(this.state.student.focus)} alt="node" className="student-course-logo"/></div>
            </div>
        )
    }
}
export default StudentItem;