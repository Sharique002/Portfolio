import './About.css'

const About = () => {
    return (
        <section id="about" className="about-modern">
            <div className="about-background"></div>

            <div className="container">
                <div className="about-header">
                    <h2>ABOUT ME</h2>
                    <div className="header-underline"></div>
                </div>

                <div className="about-grid">
                    {/* Left Column - Profile & Introduction */}
                    <div className="about-main">
                        {/* Profile Card */}
                        <div className="profile-card">
                            <div className="profile-image-container">
                                <img src="/images/image_02.png" alt="Sharique Hussain" className="profile-image" />
                            </div>

                            <div className="profile-info">
                                <h3>SHARIQUE HUSSAIN</h3>
                                <p className="profile-roles">
                                    <span className="role-badge">Full-Stack Developer</span>
                                    <span className="role-badge">AI Developer</span>
                                    <span className="role-badge">DSA</span>
                                    <span className="role-badge">Cloud & DevOps</span>
                                </p>
                            </div>
                        </div>

                        {/* About Description */}
                        <div className="about-description-card">
                            <h4>👨‍💻 Who I Am</h4>
                            <p>
                                I'm a passionate <strong>Full-Stack Developer</strong> and <strong>AI Developer </strong>
                                specializing in building scalable web applications and intelligent systems.
                                With expertise in the <strong>MERN stack</strong>, <strong>Cloud & DevOps</strong>, and <strong>Data Structures & Algorithms</strong>,
                                I create solutions that are both powerful and user-friendly.
                            </p>
                            <p>
                                My journey in tech combines software engineering excellence with cutting-edge
                                artificial intelligence. I'm dedicated to leveraging modern technologies to
                                solve real-world problems and create impactful digital experiences.
                            </p>
                            <p>
                                Whether it's developing full-stack applications, implementing AI models, or
                                architecting cloud infrastructure, I bring creativity, technical depth, and
                                a problem-solving mindset to every project.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="quick-stats">
                            <div className="stat-item">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">20+</div>
                                <div className="stat-label">Technologies</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">30+</div>
                                <div className="stat-label">Certifications</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Education, Experience, Expertise */}
                    <div className="about-details">
                        {/* Education */}
                        <div className="detail-card">
                            <div className="card-icon">🎓</div>
                            <h3 className="card-title">EDUCATION</h3>
                            <div className="timeline-item">
                                <span className="timeline-year">2023 - 2027</span>
                                <h4>B.Tech in Computer Science & Engineering</h4>
                                <ul className="timeline-details">
                                    <li>Specialization in Full-Stack Development & Cloud Computing with DevOps</li>
                                    <li>Focus on Artificial Intelligence.</li>
                                    <li>Relevant Coursework: Data Structures, AI/ML, Web Technologies</li>
                                </ul>
                            </div>
                        </div>

                        {/* Expertise */}
                        <div className="detail-card">
                            <div className="card-icon">⚡</div>
                            <h3 className="card-title">CORE EXPERTISE</h3>
                            <div className="expertise-grid">
                                <div className="expertise-item">
                                    <span className="expertise-icon">🌐</span>
                                    <h5>Full-Stack Development</h5>
                                    <p>MERN, Next.js, RESTful APIs</p>
                                </div>
                                <div className="expertise-item">
                                    <span className="expertise-icon">🤖</span>
                                    <h5>AI Developer</h5>
                                    <p>TensorFlow, PyTorch, NLP, CV</p>
                                </div>
                                <div className="expertise-item">
                                    <span className="expertise-icon">🧮</span>
                                    <h5>DSA (Data Structures & Algorithms)</h5>
                                    <p>Arrays, Hashing, Sorting</p>
                                </div>
                                <div className="expertise-item">
                                    <span className="expertise-icon">☁️</span>
                                    <h5>Cloud & DevOps</h5>
                                    <p>AWS, Azure, Docker, K8s</p>
                                </div>
                                <div className="expertise-item">
                                    <span className="expertise-icon">🗄️</span>
                                    <h5>Database Management</h5>
                                    <p>MongoDB, PostgreSQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
