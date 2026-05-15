import { useState } from 'react'
import './Projects.css'

const Projects = () => {
    const [expandedId, setExpandedId] = useState(null)

    const projects = [
        {
            id: 1,
            category: "AI / SaaS Platform",
            title: "reBorn_i",
            subtitle: "HIRING INTELLIGENCE ENGINE",
            year: "2026",
            status: "Live",
            statusColor: "#22C55E",
            tagline: "From Rejection to Reinvention",
            description: "An AI-powered hiring intelligence engine that simulates real-world recruitment pipelines and predicts interview probability. Not a resume checker — a full survival simulation across ATS, recruiter, and market stages.",
            keyFeatures: [
                "ATS Survival Probability Simulation",
                "Recruiter & Market Stage Analysis",
                "Skill ROI Engine with Interactive Sliders",
                "Rejection Bottleneck Diagnosis",
                "Career Pivot & Action Plan Generator"
            ],
            pipeline: ["Resume Upload", "ATS Scan", "Recruiter Review", "Market Analysis", "Interview Probability"],
            techStack: ["Next.js", "TypeScript", "FastAPI", "Python", "TailwindCSS", "Recharts", "Zustand"],
            role: "Solo Developer — Full-Stack & AI",
            impact: "End-to-end architecture  •  Multi-stage pipeline  •  Production-deployed SaaS",
            moduleColor: "module-reborn",
            icon: "🧠",
            github: "https://github.com/sharique0002",
            demo: "https://re-born-i.vercel.app/"
        },
        {
            id: 2,
            category: "AI / Autonomous Systems",
            title: "CARE",
            subtitle: "CUSTOMER AUTONOMOUS RESOLUTION ENGINE",
            year: "2026",
            status: "Live",
            statusColor: "#22C55E",
            tagline: "AI Agents That Don't Just Reply — They Resolve",
            description: "An autonomous AI operations system capable of resolving support workflows through multi-step reasoning and tool execution. Features real-time agent thought visualization, tool activity monitoring, and audit logging.",
            keyFeatures: [
                "Multi-Step Autonomous Reasoning",
                "Real-Time Tool Execution Monitor",
                "Agent Thought Process Visualization",
                "Ticket Queue Management (Kanban)",
                "Professional Audit Log Viewer"
            ],
            pipeline: ["Ticket Input", "Classification", "Reasoning", "Tool Calls", "Auto-Resolution"],
            techStack: ["React", "Node.js", "Python", "WebSockets", "LangChain", "Redis", "PostgreSQL"],
            role: "Solo Developer — AI & Backend",
            impact: "Agentic reasoning engine  •  Real-time tool orchestration  •  Zero-human escalation",
            moduleColor: "module-agent",
            icon: "🤖",
            github: "https://github.com/sharique0002",
            demo: "https://care-frontend-five.vercel.app/"
        },
        {
            id: 3,
            category: "AI / Knowledge Systems",
            title: "SKA",
            subtitle: "RAG-POWERED INTELLIGENCE",
            year: "2025",
            status: "Live",
            statusColor: "#22C55E",
            tagline: "Turn Documents Into Intelligent Knowledge Systems",
            description: "A context-grounded AI knowledge engine powered by Retrieval-Augmented Generation. Upload documents, build embeddings, query with precision — answers are always grounded in your data with full source citations.",
            keyFeatures: [
                "Document-to-Vector Transformation Pipeline",
                "FAISS-Powered Semantic Search",
                "Streaming AI Responses with Citations",
                "Chunk Retrieval & Similarity Visualization",
                "Multi-Collection Knowledge Management"
            ],
            pipeline: ["PDF Upload", "Chunking", "Embeddings", "FAISS Index", "AI Response"],
            techStack: ["React", "FastAPI", "Python", "FAISS", "LangChain", "OpenAI", "MongoDB"],
            role: "Solo Developer — AI & Systems",
            impact: "Full RAG pipeline  •  Vector search  •  Streaming AI responses",
            moduleColor: "module-rag",
            icon: "📚",
            github: "https://github.com/sharique0002",
            demo: "https://ska-peach.vercel.app/"
        },
        {
            id: 4,
            category: "EdTech / AI Platform",
            title: "LearniX",
            subtitle: "ADAPTIVE LEARNING ENGINE",
            year: "2025",
            status: "",
            statusColor: "",
            tagline: "Learning Systems That Adapt To You",
            description: "An AI-powered personalized learning engine that adapts to individual learning patterns. Features an AI mentor workspace, smart revision scheduling, personalized roadmaps, and progress analytics.",
            keyFeatures: [
                "AI Mentor with Contextual Memory",
                "Adaptive Learning Path Generation",
                "Smart Revision & Spaced Repetition",
                "Progress Analytics Dashboard",
                "Interactive Course Workspace"
            ],
            pipeline: ["Profile Setup", "Learning Path", "AI Mentor", "Practice", "Mastery"],
            techStack: ["Next.js", "TypeScript", "Python", "TensorFlow", "MongoDB", "TailwindCSS", "Redis"],
            role: "Solo Developer — Full-Stack",
            impact: "AI mentor integration  •  Adaptive learning engine  •  Progress analytics",
            moduleColor: "module-learnix",
            icon: "🎓",
            github: "https://github.com/sharique0002",
            demo: "#"
        },
        {
            id: 5,
            category: "Social / Networking Platform",
            title: "LegacyLoop",
            subtitle: "ALUMNI NETWORKING ECOSYSTEM",
            year: "2025",
            status: "",
            statusColor: "",
            tagline: "Build Your Network. Shape Your Legacy.",
            description: "A professional networking ecosystem connecting students and alumni through mentorship, hiring pipelines, and collaboration. Features real-time chat, event management, job boards, and mentorship tracking.",
            keyFeatures: [
                "Alumni Discovery & Smart Matching",
                "Mentorship Request & Session Tracking",
                "Real-Time Chat & Networking Feed",
                "Job Board with Application Pipeline",
                "Event Management & RSVP System"
            ],
            pipeline: ["Profile", "Discovery", "Connect", "Mentorship", "Opportunity"],
            techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "AWS"],
            role: "Solo Developer — Full-Stack",
            impact: "Real-time chat system  •  End-to-end platform  •  Mentorship pipeline",
            moduleColor: "module-legacy",
            icon: "🌐",
            github: "https://github.com/sharique0002",
            demo: "#"
        }
    ]

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section id="projects" className="projects-elegant">
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
                <div className="float-sparkle sparkle-3">⚡</div>
                <div className="float-sparkle sparkle-4">🔧</div>
            </div>

            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="title-emoji">🚀</div>
                    <h2>Flagship Projects</h2>
                    <p>Engineering systems with purpose, scalability, and product vision ⚡</p>
                </div>

                {/* Project Stats Bar */}
                <div className="projects-stats-bar">
                    <div className="stat-pill">
                        <span className="stat-num">5</span>
                        <span className="stat-txt">Projects</span>
                    </div>
                    <div className="stat-pill">
                        <span className="stat-num">3</span>
                        <span className="stat-txt">AI-Powered</span>
                    </div>
                    <div className="stat-pill">
                        <span className="stat-num">3</span>
                        <span className="stat-txt">Live</span>
                    </div>
                    <div className="stat-pill">
                        <span className="stat-num">15+</span>
                        <span className="stat-txt">Technologies</span>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="projects-showcase">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-case-study ${project.moduleColor} ${expandedId === project.id ? 'expanded' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Header */}
                            <div className="case-header">
                                <div className="case-meta">
                                    <div className="meta-left">
                                        <span className="project-icon-badge">{project.icon}</span>
                                        <span className="label-ribbon">{project.category}</span>
                                    </div>
                                    <div className="meta-right">
                                        {project.status && (
                                            <span
                                                className="status-badge"
                                                style={{ '--status-color': project.statusColor }}
                                            >
                                                <span className="status-dot"></span>
                                                {project.status}
                                            </span>
                                        )}
                                        <span className="case-year">{project.year}</span>
                                    </div>
                                </div>
                                <h3 className="case-title-serif">{project.title}</h3>
                                <h4 className="case-subtitle">{project.subtitle}</h4>
                                <p className="case-tagline">"{project.tagline}"</p>
                            </div>

                            {/* Project Content */}
                            <div className="case-content">
                                {/* Description */}
                                <div className="case-section">
                                    <h5 className="case-label">
                                        <span className="label-icon">📋</span>
                                        Description
                                    </h5>
                                    <p>{project.description}</p>
                                </div>

                                {/* Pipeline Visualization */}
                                <div className="case-section pipeline-section">
                                    <h5 className="case-label">
                                        <span className="label-icon">⚙️</span>
                                        System Pipeline
                                    </h5>
                                    <div className="pipeline-flow">
                                        {project.pipeline.map((step, i) => (
                                            <div key={i} className="pipeline-step-wrapper">
                                                <div className="pipeline-step">
                                                    <span className="step-number">{String(i + 1).padStart(2, '0')}</span>
                                                    <span className="step-label">{step}</span>
                                                </div>
                                                {i < project.pipeline.length - 1 && (
                                                    <div className="pipeline-arrow">→</div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features & Role Grid */}
                                <div className="case-grid">
                                    <div className="case-info features-info">
                                        <h5 className="case-label">
                                            <span className="label-icon">⭐</span>
                                            Key Features
                                        </h5>
                                        <ul className="features-list">
                                            {project.keyFeatures.slice(0, expandedId === project.id ? project.keyFeatures.length : 3).map((feat, i) => (
                                                <li key={i}>{feat}</li>
                                            ))}
                                        </ul>
                                        {project.keyFeatures.length > 3 && expandedId !== project.id && (
                                            <span className="more-features">+{project.keyFeatures.length - 3} more</span>
                                        )}
                                    </div>

                                    <div className="case-info role-info">
                                        <h5 className="case-label">
                                            <span className="label-icon">👤</span>
                                            My Role
                                        </h5>
                                        <p className="role-text">{project.role}</p>
                                        <h5 className="case-label" style={{ marginTop: '1rem' }}>
                                            <span className="label-icon">📊</span>
                                            Impact
                                        </h5>
                                        <p className="impact-text">{project.impact}</p>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="case-section">
                                    <h5 className="case-label">
                                        <span className="label-icon">🛠️</span>
                                        Tech Stack
                                    </h5>
                                    <div className="case-tags">
                                        {project.techStack.map((tag, i) => (
                                            <span key={i} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="case-footer">
                                <button
                                    className="expand-btn"
                                    onClick={() => toggleExpand(project.id)}
                                >
                                    {expandedId === project.id ? 'Show Less ↑' : 'Show More ↓'}
                                </button>
                                <div className="action-links">
                                    {project.demo && project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="action-link demo-link"
                                        >
                                            <i className="fas fa-external-link-alt"></i>
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
