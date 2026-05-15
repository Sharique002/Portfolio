import { useState, useEffect } from 'react'
import './Achievements.css'

const Achievements = () => {
    const [achievements, setAchievements] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [showResume, setShowResume] = useState(true)
    const [showResumeViewer, setShowResumeViewer] = useState(false)
    const [showCertificateViewer, setShowCertificateViewer] = useState(false)
    const [currentCertificate, setCurrentCertificate] = useState('')

    useEffect(() => {
        const staticAchievements = [
            // Add your achievements here
        ]
        setAchievements(staticAchievements)

        // Trigger animation on mount
        setTimeout(() => setIsVisible(true), 100)
    }, [])

    const handleBubbleClick = (e) => {
        const element = e.currentTarget
        element.classList.add('bubble-pop')

        // Create colorful bubble particles
        const colors = ['#FF69B4', '#FFD700', '#00CED1', '#FF6347', '#9370DB', '#32CD32', '#FF1493', '#00BFFF']
        const particleCount = 8

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')
            particle.className = 'color-bubble-particle'

            // Random color from the array
            particle.style.background = colors[Math.floor(Math.random() * colors.length)]

            // Random size
            const size = Math.random() * 20 + 10 // 10-30px
            particle.style.width = `${size}px`
            particle.style.height = `${size}px`

            // Position at click location
            const rect = element.getBoundingClientRect()
            const parentRect = element.parentElement.getBoundingClientRect()
            particle.style.left = `${rect.left - parentRect.left + rect.width / 2}px`
            particle.style.top = `${rect.top - parentRect.top + rect.height / 2}px`

            // Random animation direction
            const angle = (Math.PI * 2 * i) / particleCount
            particle.style.setProperty('--tx', `${Math.cos(angle) * 100}px`)
            particle.style.setProperty('--ty', `${Math.sin(angle) * 100 - 50}px`)

            element.parentElement.appendChild(particle)

            // Remove particle after animation
            setTimeout(() => {
                particle.remove()
            }, 1000)
        }

        // Remove the animation class after it completes
        setTimeout(() => {
            element.classList.remove('bubble-pop')
        }, 600)
    }

    const handleResumeToggle = () => {
        setShowResume(!showResume)
    }

    const handleViewResume = () => {



        setShowResumeViewer(true)
    }

    const handleCloseViewer = () => {
        setShowResumeViewer(false)
    }

    const handleViewCertificate = (certificatePath) => {
        setCurrentCertificate(certificatePath)
        setShowCertificateViewer(true)
    }

    const handleCloseCertificate = () => {
        setShowCertificateViewer(false)
        setCurrentCertificate('')
    }

    const handleDownload = (format) => {
        const fileMap = {
            'PDF': '/resumes/MSH.pdf',
            'DOC': '/resumes/MSH.docx',
            'TXT': '/resumes/MSH_CV.txt'
        }

        const filePath = fileMap[format]
        if (filePath) {
            const link = document.createElement('a')
            link.href = filePath
            link.download = filePath.split('/').pop()
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }

    return (
        <section id="achievements" className="achievements">
            <div className="container">
                {/* First UI Section - Hackathon Cards with Detailed Info */}
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`hackathon-detail-card ${isVisible ? 'slide-up' : ''}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Header Section */}
                            <div className="hackathon-header">
                                <div className="hackathon-icon-large">{achievement.icon}</div>
                                <div className="hackathon-title-section">
                                    <h3 className="hackathon-title">{achievement.title}</h3>
                                    <span className="achievement-badge">{achievement.achievement}</span>
                                </div>
                            </div>

                            {/* Info Grid */}
                            <div className="hackathon-info-grid">
                                <div className="info-item">
                                    <span className="info-label">📅 Date</span>
                                    <span className="info-value">{achievement.date}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">👥 Team</span>
                                    <span className="info-value">{achievement.teamSize}</span>
                                </div>
                            </div>

                            {/* Problem Statement */}
                            <div className="hackathon-section">
                                <h4 className="section-title">💡 Problem Statement</h4>
                                <p className="section-content">{achievement.problem}</p>
                            </div>

                            {/* Technologies Used */}
                            <div className="hackathon-section">
                                <h4 className="section-title">🛠️ Technologies Used</h4>
                                <div className="tech-badges">
                                    {achievement.technologies.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Highlights */}
                            <div className="hackathon-section">
                                <h4 className="section-title">⭐ Key Highlights</h4>
                                <ul className="highlights-list">
                                    {achievement.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* View Certificate Button */}
                            {achievement.certificate && (
                                <button
                                    className="view-certificate-btn"
                                    onClick={() => handleViewCertificate(achievement.certificate)}
                                >
                                    <span>📜 View Certificate</span>
                                </button>
                            )}

                            <div className="card-glow"></div>
                        </div>
                    ))}
                </div>

                {/* Second UI Section - Resume Showcase (Product Style) */}
                <div className={`resume-section ${isVisible ? 'fade-in' : ''}`}>
                    <div className="resume-showcase">

                        {/* Resume Content - Always visible */}
                        {showResume && (
                            <>
                                {/* Left Side - Product Info */}
                                <div className="product-info-left">
                                    <h2 className="product-title">My Resume</h2>
                                    <p className="product-subtitle">Complete Portfolio Document</p>
                                    <p className="product-detail">Updated May 2026</p>

                                    <p className="product-description">
                                        Download my comprehensive resume featuring my complete work experience,
                                        education, technical skills, and professional achievements.
                                    </p>
                                </div>

                                {/* Center - Resume Display */}
                                <div className="product-display">
                                    <div
                                        className="resume-card"
                                        onClick={handleViewResume}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="resume-icon-large">📋</div>
                                        <div className="resume-text">Resume</div>
                                        <div className="resume-brand">Professional CV</div>
                                    </div>
                                    <div className="product-shadow"></div>
                                </div>

                                {/* Right Side - Options */}
                                <div className="product-options-right">
                                    <div className="format-options">
                                        <div
                                            className="format-badge active"
                                            onClick={() => handleDownload('PDF')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            PDF
                                        </div>
                                        <div
                                            className="format-badge"
                                            onClick={() => handleDownload('DOC')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            DOC
                                        </div>
                                        <div
                                            className="format-badge"
                                            onClick={() => handleDownload('TXT')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            TXT
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Floating decorative elements */}
                        <div className="floating-element element-1" onClick={handleBubbleClick}></div>
                        <div className="floating-element element-2" onClick={handleBubbleClick}></div>
                        <div className="floating-element element-3" onClick={handleBubbleClick}></div>
                    </div>
                </div>
            </div>

            {/* Resume Viewer Modal */}
            {showResumeViewer && (
                <div
                    className="resume-viewer-overlay"
                    onClick={handleCloseViewer}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px'
                    }}
                >
                    <div
                        className="resume-viewer-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: '90%',
                            maxWidth: '1000px',
                            height: '90vh',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <button
                            onClick={handleCloseViewer}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                zIndex: 10000,
                                background: '#ff4757',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                fontSize: '20px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                            }}
                        >
                            ✕
                        </button>
                        <iframe
                            src="/resumes/MSH.pdf"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none'
                            }}
                            title="Resume Viewer"
                        />
                    </div>
                </div>
            )}

            {/* Certificate Viewer Modal */}
            {showCertificateViewer && (
                <div
                    className="certificate-viewer-overlay"
                    onClick={handleCloseCertificate}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 10000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px'
                    }}
                >
                    <div
                        className="certificate-viewer-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: '95%',
                            maxWidth: '1200px',
                            height: '95vh',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 50px rgba(0,0,0,0.5)'
                        }}
                    >
                        <button
                            onClick={handleCloseCertificate}
                            style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                zIndex: 10001,
                                background: '#ff4757',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '45px',
                                height: '45px',
                                fontSize: '22px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 15px rgba(0,0,0,0.4)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            ✕
                        </button>
                        <iframe
                            src={currentCertificate}
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none'
                            }}
                            title="Certificate Viewer"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}

export default Achievements
