import './Projects.css'

const Projects = () => {
    const projects = [
            {
                id: 1,
                category: "Web Application",
                title: "E-Commerce Platform",
                subtitle: "FULL-STACK",
                year: "2024",
                description: "A modern e-commerce platform built with React and Node.js featuring real-time inventory management and secure payment integration.",
                goal: "Create a scalable shopping experience",
                environment: "Production-ready with 99.9% uptime",
                requirements: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
                concept: "Modern retail meets technology",
                tags: ["React", "Express", "MongoDB", "Stripe", "AWS"],
                moduleColor: "module-1"  // Blue theme
            },
            {
                id: 2,
                category: "Mobile App",
                title: "Task Manager",
                subtitle: "PRODUCTIVITY",
                year: "2024",
                description: "Cross-platform mobile application for task and project management with offline-first architecture.",
                goal: "Streamline team collaboration",
                environment: "Native iOS & Android",
                requirements: ["React Native", "Firebase", "Redux", "Push Notifications"],
                concept: "Simplicity meets functionality",
                tags: ["React Native", "Firebase", "Redux"],
                moduleColor: "module-2"  // Green theme
            },
            {
                id: 3,
                category: "Dashboard",
                title: "Analytics Platform",
                subtitle: "DATA VISUALIZATION",
                year: "2024",
                description: "Real-time data visualization dashboard for business intelligence and analytics with interactive charts.",
                goal: "Transform data into insights",
                environment: "Enterprise-grade solution",
                requirements: ["Vue.js", "D3.js", "WebSockets", "PostgreSQL"],
                concept: "Data-driven decision making",
                tags: ["Vue.js", "D3.js", "WebSockets", "PostgreSQL"],
                moduleColor: "module-3"  // Navy theme
            },
            {
                id: 4,
                category: "API Service",
                title: "RESTful Backend",
                subtitle: "MICROSERVICES",
                year: "2024",
                description: "Scalable microservices architecture with GraphQL and REST APIs serving millions of requests daily.",
                goal: "Build robust API infrastructure",
                environment: "Cloud-native deployment",
                requirements: ["Node.js", "GraphQL", "Docker", "Kubernetes", "Redis"],
                concept: "Scalability and performance",
                tags: ["Node.js", "GraphQL", "Docker", "Kubernetes"],
                moduleColor: "module-4"  // Gray theme
            }
        ]

    return (
        <section id="projects" className="projects-elegant">
            <div className="container">
                {/* Section Header */}
                <div className="section-header-elegant">
                    <h2 className="section-title">TABLE OF PROJECTS</h2>
                    <h3 className="section-subtitle-script">Portfolio Showcase</h3>
                    <div className="projects-categories">
                        <span>• Full-stack Development</span>
                        <span>• Mobile Applications</span>
                        <span>• Cloud Solutions</span>
                        <span>• API Services</span>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="projects-showcase">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-case-study ${project.moduleColor}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Header */}
                            <div className="case-header">
                                <div className="case-meta">
                                    <span className="label-ribbon">{project.category}</span>
                                    <span className="case-year">{project.year}</span>
                                </div>
                                <h3 className="case-title-serif">{project.title}</h3>
                                <h4 className="case-subtitle">{project.subtitle}</h4>
                            </div>

                            {/* Project Content */}
                            <div className="case-content">
                                <div className="case-section">
                                    <h5 className="case-label">[Description]</h5>
                                    <p>{project.description}</p>
                                </div>

                                <div className="case-grid">
                                    <div className="case-info">
                                        <h5 className="case-label">[Goal]</h5>
                                        <p className="highlight">{project.goal}</p>
                                    </div>

                                    <div className="case-info">
                                        <h5 className="case-label">[Environment]</h5>
                                        <p className="highlight">{project.environment}</p>
                                    </div>
                                </div>

                                <div className="case-section">
                                    <h5 className="case-label">[Requirements]</h5>
                                    <div className="requirements-list">
                                        {project.requirements.map((req, i) => (
                                            <span key={i} className="requirement-item">• {req}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="case-section">
                                    <h5 className="case-label">[Concept]</h5>
                                    <p className="concept-text">{project.concept}</p>
                                </div>

                                {/* Tags */}
                                <div className="case-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* View Details Button */}
                            <div className="case-footer">
                                <button className="view-details-btn">
                                    View Full Case Study →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects Label */}
                <div className="more-projects">
                    <h4 className="more-title">Others</h4>
                    <p>• Additional projects available upon request</p>
                </div>
            </div>
        </section>
    )
}

export default Projects
