import { useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [copied, setCopied] = useState(false)

    const handleShareAndContact = async () => {
        // Native Share (Mobile/Supported Browsers)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Sharique Hussain Portfolio',
                    text: 'Check out the portfolio of Sharique Hussain - Full-Stack Developer & Cloud Engineer.',
                    url: window.location.href,
                })
            } catch (error) {
                console.log('Error sharing:', error)
            }
        } else {
            // Fallback: Copy to Clipboard
            navigator.clipboard.writeText(window.location.href)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }

        // Smooth Scroll to Contact Section
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="hero-elegant">
            <div className="container-wide">
                <div className="hero-grid">
                    {/* Left Side - Title & Description */}
                    <div className="hero-left">
                        <div className="hero-category">
                            <span className="label-ribbon">Full-stack Development</span>
                            <span className="label-ribbon">Cloud Computing</span>
                            <span className="label-ribbon">DevOps Engineering</span>
                            <span className="label-ribbon">DSA (Data Structures & Algorithms)</span>
                        </div>

                        <h1 className="hero-title">
                            <span className="title-serif">Developer</span>
                            <span className="title-main">SHARIQUE HUSSAIN</span>
                        </h1>

                        <div className="hero-meta">
                            <p className="meta-item"></p>
                            <p className="meta-item"></p>
                        </div>

                        <div className="hero-description">
                            <h4 className="description-title"></h4>
                            <p>
                                I am a Full-Stack Web Developer and relentless problem-solver with deep expertise in Cloud Computing, DevOps, and Data Structures & Algorithms (DSA). A lifelong learner by principle and an innovator by habit, I build scalable, resilient systems that don’t just work—they endure. Every line of code is written with intent: to solve real-world problems, optimize performance, and move technology forward with measurable impact.
                            </p>
                        </div>

                        {/* Tech Stack Preview */}
                        <div className="tech-preview">
                            <div className="tech-item">
                                <div className="tech-icon">⚛️</div>
                                <span>React</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">🟢</div>
                                <span>Node.js</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">🍃</div>
                                <span>MongoDB</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">🚂</div>
                                <span>Express</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">🐳</div>
                                <span>Docker</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">☁️</div>
                                <span>AWS</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">🔧</div>
                                <span>Git</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">🐍</div>
                                <span>Python</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">🐘</div>
                                <span>PostgreSQL</span>
                            </div>
                        </div>
                    </div>

                    {/* Center - Main Project Display */}
                    <div className="hero-center">
                        <div className="project-showcase">
                            <div className="main-card module-1">
                                <div className="card-header">
                                    <h2>Portfolio</h2>
                                </div>

                                <div className="card-visual">
                                    <img src="/images/image_03.jpeg" alt="Sharique Hussain" className="project-preview-image" />
                                    <div className="hero-image-overlay brightness-50">
                                        <h3>SHARIQUE HUSSAIN</h3>
                                        <p className="overlay-tagline">Engineer of Ideas | Traveler in Learning</p>
                                        <p className="overlay-roles">Full-Stack Developer • Cloud Computing • DevOps Engineer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Additional Info */}
                    <div className="hero-right">
                        <div className="info-block">
                            <h4 className="info-title">Education •</h4>
                            <p className="info-label">[BTech]</p>
                            <p className="info-text">Computer Science<br />And Engineering</p>
                        </div>

                        <div className="share-block">
                            <button className="share-btn" onClick={handleShareAndContact}>
                                <span>{copied ? 'Link Copied!' : 'Share & Contact This Profile'}</span>
                                <span className="arrow">→</span>
                            </button>
                        </div>

                        <div className="about-preview">
                            <h4 className="info-title">Soft Skills</h4>
                            <p>Strong communication, problem-solving, and teamwork skills with an ownership mindset, adaptability, and a continuous-learning attitude.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="hero-footer">
                    <div className="availability">
                        <div className="black-dotted-line" style={{ borderTop: '1px dotted #000', width: '100%', margin: '1rem 0' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
