import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-list">
                    {/* Placeholder for experience items */}
                    <div className="experience-item">
                        <h3>Software Engineer</h3>
                        <p className="company">Tech Company Inc.</p>
                        <p className="duration">2021 - Present</p>
                        <p className="description">
                            Developing scalable web applications using React and Node.js.
                            Implemented CI/CD pipelines and optimized cloud infrastructure on AWS.
                        </p>
                    </div>
                    <div className="experience-item">
                        <h3>Junior Developer</h3>
                        <p className="company">Startup LLC</p>
                        <p className="duration">2019 - 2021</p>
                        <p className="description">
                            Assisted in frontend development and bug fixing.
                            Collaborated with the design team to implement responsive UI.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
