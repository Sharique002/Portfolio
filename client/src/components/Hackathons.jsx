import './Hackathons.css'

const Hackathons = () => {
    const hackathons = [
        {
            title: "TECH SYNERGY",
            badge: "🥈 2ND PLACE — CipherSchools",
            badgeColor: "#C0C0C0",
            date: "August 2026",
            team: "Solo Participant | Sharique Hussain | Recognized by Plutonn (CipherSchools)",
            problem: "A technical competition organized by Plutonn, an initiative of CipherSchools, challenging participants to demonstrate strong problem-solving, programming, and analytical skills. The event provided an excellent platform to apply technical knowledge in a competitive environment and reinforced commitment to continuous learning and software engineering excellence.",
            technologies: ["Problem Solving", "Programming", "Analytical Skills", "Software Engineering", "Competitive Programming"],
            highlights: [
                "🥈 Secured 2nd Position among all participants",
                "Organized by Plutonn — an initiative of CipherSchools",
                "Demonstrated exceptional problem-solving and programming skills",
                "Recognized among the Top 5 performers",
                "Strengthened competitive programming and software engineering experience"
            ],
            certificateLink: "/certificates/Tech_Synergy_Certificate.png"
        },
        {
            title: "FRONTEND BATTLE 3.0",
            badge: "TOP 15 — IIT Bhubaneswar",
            badgeColor: "#1E88E5",
            date: "June 2026",
            team: "Solo Participant | Sharique Hussain | Recognized by WebnD, IIT Bhubaneswar",
            problem: "A competitive frontend development hackathon organized by WebnD, the Web and Design Society of IIT Bhubaneswar, challenging participants to showcase creative frontend skills, innovative UI/UX design, and technical excellence in web development over a 3-day sprint.",
            technologies: ["HTML", "CSS", "JavaScript", "React.js", "UI/UX Design", "Responsive Design"],
            highlights: [
                "Achieved Top 15 Creative Performer out of all participants",
                "Recognized for outstanding creative design and frontend innovation",
                "3-day intensive hackathon from 26th to 28th June 2026",
                "Organized by WebnD — Web and Design Society of IIT Bhubaneswar"
            ],
            certificateLink: "/certificates/IIT bhubaneswar.pdf"
        },
        {
            title: "AGENTIC AI HACKATHON 2026",
            badge: "SELECTED — Global",
            badgeColor: "#8B5CF6",
            date: "April 2026",
            team: "Solo Participant | Sharique Hussain | Recognized by Ksolves",
            problem: "Build an Agentic AI solution capable of autonomously handling customer support workflows end-to-end — an intelligent resolution agent that ingests tickets, reasons through multi-step decisions, executes tool calls (order lookups, refunds), recovers from failures, and escalates complex cases. The system needed to demonstrate production-ready engineering: concurrency, resilience, auditability, and structured state management.",
            technologies: ["Python", "OpenAI GPT", "LangChain", "AsyncIO", "ReAct Architecture", "Tool Calling", "Git"],
            highlights: [
                "Selected among 2,000+ global builders",
                "Built autonomous multi-step reasoning agent with tool orchestration",
                "Implemented confidence-based escalation & error recovery",
                "Concurrent ticket processing with audit logging",
                "Official recognition from Ksolves for Agentic AI engineering"
            ],
            certificateLink: "/certificates/Agentic AI Hackathon 2026.pdf"
        },
        {
            title: "WEB-A-THON 2.0",
            badge: "TOP 5 — University Level",
            badgeColor: "#F7B731",
            date: "February 2026",
            team: "Team Name: LearnZ | Team Leader: Sharique Hussain | 4 Members",
            problem: "To build a web-based solution focused on improving learning efficiency and user experience within a 24-hour deadline",
            technologies: ["React.js", "Tailwind CSS", "Node.js", "FastAPI", "REST APIs"],
            highlights: [
                "Ranked among Top 5 teams in university-level competition",
                "Demonstrated rapid prototyping and cross-functional collaboration",
                "Recognized for outstanding design, development, and strategic thinking"
            ],
            certificateLink: "/certificates/Hackathon_02.pdf"
        },
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
