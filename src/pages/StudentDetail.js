import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Subscribe extends Component {

    constructor(props) {
        super();
        this.state = {
            github: props.match.params.github
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

    componentWillMount() {
        fetch('/data/students.json')
            .then(resp => resp.json())
            .then((items) => {
                const student = items.filter(st => st.github === this.state.github)[0]
                this.setState(() => {
                    return {student}
                })
            })
    }

    render() {
        console.log("this student", this.state)
        if (this.state.student) {
            return (
                <div>
                    <nav className="student-header">
                        <div>Iron Graduates</div>
                        <Link to="/students">BACK</Link>
                    </nav>
                    <section className="students">
                        <section className="student-details">
                            <div className="profile-header">
                                <img
                                    src={this.state.student.profileImage}
                                    alt={this.state.student.name}
                                    className="profile-student-image"/>
                                <div className="profile-student-name">{this.state.student.name}</div>
                            </div>
                        </section>
                        <section className="student-profile">
                            <div className="student-course">
                                <i
                                    className={"devicon-" + this.getFocusImge(this.state.student.focus) + " colored student-course-logo"}></i>
                            </div>
                            <div>
                                Specializes in {this.state.student["Specializes in"]}
                            </div>
                        </section>
                        <section className="contact-info">
                            <header>
                                Learn more about {this.state.student.name.substr(0, this.state.student.name.indexOf(" "))}...
                            </header>
                            <div>
                                <span className="mini-header">Portfolio</span><br/>
                                <Link to={this.state.student.portfolio} target="_blank"> {this.state.student.portfolio} </Link>
                                
                            </div>
                            <div>
                                <span className="mini-header">Github account</span>
                                <br/>{this.state.student.github}
                            </div>
                            <div>
                                <span className="mini-header">LinkedIn</span>
                                <br/>{this.state.student.linkeding}
                            </div>
                            <div>
                                <span className="mini-header">Email</span><br/>
                                {this.state.student.email}
                            </div>
                        </section>
                        {/* <section className="student-program">
                             <div>
                                    Demoing on {this.state.student.floor}th floor
                                </div>

                            <div></div>
                        </section> */}

                    </section>
                </div>
            )
        } else {
            return (
                <div>
                    <nav className="student-header">
                        <div>Iron Graduates</div>
                        <Link to="/students">BACK</Link>
                    </nav>
                    <section className="students">
                        <div>
                            loading....</div>
                    </section>
                </div>
            )
        }
    }
}
export default Subscribe;