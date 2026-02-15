import { useNavigate } from 'react-router-dom'
import './Patents.css'

const Patents = ({ onShowResearch }) => {
    const navigate = useNavigate()

    const handleViewResearch = () => {
        navigate('/research-achievements')
    }

    const patents = [
        {
            title: " Smart Railway Track Fault Detection and Clearance Monitoring System",
            patentNumber: "Patent No: 202511049660",
            date: "07/01/2025",
            status: "Published",
            description: (
                <>
                    The Smart Railway Track Fault Detection and Clearance Monitoring System (SRTD-CMS) is an <strong>AI-powered, multi-sensor autonomous system</strong> designed to detect <strong>railway track cracks, misalignments, obstructions, and potential hazards</strong> in real time. It combines technologies such as <strong>LiDAR, ultrasonic sensors, vibration sensors, and infrared imaging</strong> with <strong>machine learning algorithms</strong> to continuously monitor track health without human intervention.
                    <br/><br/>
                    The system uses <strong>edge computing</strong> for real-time fault detection and <strong>IoT/5G connectivity</strong> to instantly alert railway control centers. It can integrate with <strong>train signaling and braking systems</strong> to automatically trigger <strong>emergency responses</strong> when critical faults are identified. Additionally, it employs <strong>predictive maintenance techniques</strong> to forecast potential failures before accidents occur.
                    <br/><br/>
                    Powered by <strong>solar energy</strong> with battery backup, the system ensures uninterrupted operation even in remote areas. Its <strong>modular and scalable design</strong> allows seamless integration with existing railway infrastructure, making it a cost-effective and advanced solution for enhancing railway safety and operational efficiency.
                </>
            ),
            inventors: ["Md Sharique Hussain", "Bhashkar Anand", "E V Monish"],
            category: "AI & Railway Safety Technology"
        }
        // Add more patents here
    ]

    return (
        <section id="patents" className="patents">
            {/* Floating Decorative Elements */}
            <div className="floating-decor">
                <div className="float-circle float-1"></div>
                <div className="float-circle float-2"></div>
                <div className="float-circle float-3"></div>
                <div className="float-oval float-4"></div>
                <div className="float-oval float-5"></div>
                <div className="float-wave wave-1"></div>
                <div className="float-wave wave-2"></div>
                <div className="float-sparkle sparkle-1">💡</div>
                <div className="float-sparkle sparkle-2">⚡</div>
                <div className="float-sparkle sparkle-3">💡</div>
                <div className="float-sparkle sparkle-4">⚡</div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="title-emoji">💡</div>
                    <h2>Patents & Innovations</h2>
                    <p>Turning ideas into intellectual property! 🚀</p>
                </div>

                <div className="patents-grid">
                    {patents.map((patent, index) => (
                        <div
                            key={index}
                            className="patent-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="patent-badge">{patent.status}</div>
                            <div className="patent-sparkles">
                                <span className="sparkle">⚡</span>
                                <span className="sparkle">⚡</span>
                            </div>

                            <div className="patent-content">
                                <div className="patent-category">{patent.category}</div>
                                <h3>{patent.title}</h3>
                                <div className="patent-description">{patent.description}</div>
                                
                                <div className="patent-meta">
                                    <p className="patent-number">
                                        <i className="fas fa-file-contract"></i>
                                        {patent.patentNumber}
                                    </p>
                                    <p className="patent-date">
                                        <i className="fas fa-calendar-alt"></i>
                                        {patent.date}
                                    </p>
                                </div>

                                <div className="patent-inventors">
                                    <i className="fas fa-users"></i>
                                    <span>Inventors: {patent.inventors.join(', ')}</span>
                                </div>

                                <button
                                    onClick={handleViewResearch}
                                    className="view-patent-btn"
                                >
                                    <i className="fas fa-file-alt"></i>
                                    View Patent Document
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Patents
