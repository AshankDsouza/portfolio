import React from 'react';
import hackerthonPic from '../assets/hackerthon_picture.jpeg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image-container">
                        <img src={hackerthonPic} alt="Ashank D'Souza" className="about-image" />
                    </div>
                    <div className="about-text">
                        <p>
                            A highly motivated and results-oriented Software Engineer with 4+ years of experience in developing and deploying scalable web applications.
                            Proficient in full-stack development, cloud technologies (AWS, Azure), and DevOps practices.
                            Seeking to leverage expertise in building innovative solutions and contributing to a dynamic team.
                        </p>
                        <div className="skills-list">
                            <h3>Top Skills</h3>
                            <ul>
                                <li>Full Stack Development (React, Node.js, Python)</li>
                                <li>Cloud Computing (AWS, Azure)</li>
                                <li>DevOps (Docker, Kubernetes, CI/CD)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
