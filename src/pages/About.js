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
                    <img
                        src="/images/TIY-logo-white-png.png"
                        alt="Welcome to The Iron Yard."
                        className="logo"/>
                    <div>Iron Grads</div>
                </nav>
                <header className="welcome-hero">
                    Welcome to Cohort 8 Demo Day.
                </header>
                <section className="about-cards">
                    <section className="about-card">
                        <h3>About the Iron Yard</h3>
                        <div>
                            The Iron Yard teaches intensive, three-month courses that mentors students into
                            professional junior-level programmers. Our program goes far beyond tactical
                            skills and teaches students to think like a software engineer. Students have
                            spent the past twelve weeks studying web development and today they will present
                            their capstone projects, showcasing the skills they have learned.
                        </div>
                    </section>
                    <section className="about-card">
                        <h3>Interested in hiring a graduate?</h3>
                        <div>
                            All of our graduates are ready for their first jobs as junior developers. If you
                            meet someone today who would be a great fit for your team, please feel free to
                            reach out directly. If you want more information about how our career support
                            program works or direct recommendations for your needs, please contact us at
                            hiregrads@theironyard.com or reach out to any of our staff on the
                            <a href="http://suncoast.io/">Suncoast Developers</a>
                            Slack channel.
                        </div>
                    </section>
                    <section className="about-card">
                        <h3>#ironpledge</h3>
                        <div>

                            As you may know, The Iron Yard will be officially closing its doors on Friday.
                            Our team has been 100% committed to making sure these graduates received the
                            same high-quality education and career support we've always provided. we need to
                            accelerate theses services and we need your help. Will you us and help them
                            launch their career in coding?
                        </div>
                    </section>
                </section>
                <footer>
                    <Link to="/students">BACK</Link>
                </footer>
            </div>
        )
    }
}
export default Subscribe;