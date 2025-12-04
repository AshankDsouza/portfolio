import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {/* Placeholder for project items */}
                    <div className="project-card">
                        <h3>Portfolio Website</h3>
                        <p>A personal portfolio website built with React and Vite.</p>
                        <div className="project-tags">
                            <span>React</span>
                            <span>Vite</span>
                            <span>CSS</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <h3>E-commerce Dashboard</h3>
                        <p>A dashboard for managing products and orders.</p>
                        <div className="project-tags">
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>Express</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
