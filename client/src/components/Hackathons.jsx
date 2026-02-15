import './Hackathons.css'

const Hackathons = () => {
    const hackathons = [
        {
            title: "CODE-A-HUNT",
            badge: "FINALIST",
            badgeColor: "#26DE81",
            date: "March 2024",
            team: "Team Name: Star Group | Team Leader: Sharique Hussain | 4 Members",
            problem: "To create an educational platform for students to learn and practice coding",
            technologies: ["MongoDB", "Express", "React", "Node.js"],
            highlights: [
                "Built full-stack web application",
                "Implemented real-time collaboration",
                "Designed intuitive user interface"
            ],
            certificateLink: "/certificates/Hackathon.pdf"
        }
        // Add more hackathons here
    ]

    return (
        <section id="hackathons" className="hackathons">
            {/* Floating Decorative Elements */}
            <div className="floating-decor">
                <div className="float-circle float-1"></div>
                <div className="float-circle float-2"></div>
                <div className="float-circle float-3"></div>
                <div className="float-oval float-4"></div>
                <div className="float-oval float-5"></div>
                <div className="float-wave wave-1"></div>
                <div className="float-wave wave-2"></div>
                <div className="float-sparkle sparkle-1">🚀</div>
                <div className="float-sparkle sparkle-2">💻</div>
                <div className="float-sparkle sparkle-3">🚀</div>
                <div className="float-sparkle sparkle-4">💻</div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="title-emoji">🏆</div>
                    <h2>Hackathons</h2>
                    <p>Building innovative solutions under pressure! ⚡</p>
                </div>

                <div className="hackathons-grid">
                    {hackathons.map((hackathon, index) => (
                        <div
                            key={index}
                            className="hackathon-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div 
                                className="hackathon-badge"
                                style={{ background: hackathon.badgeColor }}
                            >
                                {hackathon.badge}
                            </div>
                            <div className="hackathon-sparkles">
                                <span className="sparkle">🌟</span>
                                <span className="sparkle">🌟</span>
                            </div>

                            <div className="hackathon-content">
                                <h3>{hackathon.title}</h3>
                                
                                <div className="hackathon-info">
                                    <div className="info-item">
                                        <i className="fas fa-calendar-alt"></i>
                                        <span className="info-label">Date</span>
                                        <span className="info-value">{hackathon.date}</span>
                                    </div>
                                    <div className="info-item">
                                        <i className="fas fa-users"></i>
                                        <span className="info-label">Team</span>
                                        <span className="info-value">{hackathon.team}</span>
                                    </div>
                                </div>

                                <div className="problem-statement">
                                    <div className="section-title">
                                        <span className="emoji">💡</span>
                                        <span>PROBLEM STATEMENT</span>
                                    </div>
                                    <p>{hackathon.problem}</p>
                                </div>

                                <div className="technologies-used">
                                    <div className="section-title">
                                        <span className="emoji">🔧</span>
                                        <span>TECHNOLOGIES USED</span>
                                    </div>
                                    <div className="tech-tags">
                                        {hackathon.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {hackathon.highlights && hackathon.highlights.length > 0 && (
                                    <div className="key-highlights">
                                        <div className="section-title">
                                            <span className="emoji">⭐</span>
                                            <span>KEY HIGHLIGHTS</span>
                                        </div>
                                        <ul>
                                            {hackathon.highlights.map((highlight, idx) => (
                                                <li key={idx}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {hackathon.certificateLink && (
                                    <a
                                        href={hackathon.certificateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-certificate-btn"
                                    >
                                        <i className="fas fa-certificate"></i>
                                        <span>View Certificate</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hackathons
