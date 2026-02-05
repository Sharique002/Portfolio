import './Certifications.css'

const Certifications = () => {
    const certifications = [
        {
            title: "CLOUD Computing",
            issuer: "IIT Kharagpur",
            date: "2025",
            path: "/certificates/Cloud Computing.pdf"
        },
        {
            title: "Build Generative AI Apps and Solutions with No-Code Tools",
            issuer: "Infosys",
            date: "2025",
            path: "/certificates/Build Generative AI Apps and Solutions with No-Code Tools.pdf"
        },
        {
            title: "Master Generative AI & Generative AI tools (ChatGPT & more)",
            issuer: "Infosys",
            date: "2025",
            path: "/certificates/Master Generative AI & Generative AI tools (ChatGPT & more).pdf"
        },
        {
            title: "ChatGPT-4 Prompt Engineering",
            issuer: "Infosys",
            date: "2025",
            path: "/certificates/ChatGPT-4 Prompt Engineering.pdf"
        },
        {
            title: "JAVA",
            issuer: "iamneo",
            date: "2025",
            path: "/certificates/Java_Certificate.pdf"
        },
        {
            title: "C++",
            issuer: "iamneo",
            date: "2024",
            path: "/certificates/C++.pdf"
        },
        {
            title: "DSA (Data Structure and Algorithms)",
            issuer: "iamneo",
            date: "2024",
            path: "/certificates/DSA.pdf"
        },
        {
            title: "Web3 Development Essentials",
            issuer: "Udemy",
            date: "2024",
            path: "/certificates/Web3 Development Essentials.pdf"
        },
        {
            title: "SQL",
            issuer: "Great Learning",
            date: "2024",
            path: "/certificates/SQL certificate.pdf"
        },
        {
            title: "Python",
            issuer: "Infosys",
            date: "2024",
            path: "/certificates/infosys certificate_Python.pdf"
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Google",
            date: "2024",
            path: "/certificates/The Bits and Bytes of Computer Networking.pdf"
        },
        {
            title: "freeCodeCamp Certificate",
            issuer: "freeCodeCamp",
            date: "2024",
            path: "/certificates/Certificate freeCodeCamp.org.pdf"
        },
        {
            title: "C Programming",
            issuer: "Infosys",
            date: "2024",
            path: "/certificates/Programming in C_infosys.pdf"
        },
        {
            title: "Mini Mba in Human Resources Management",
            issuer: "udemy",
            date: "2023",
            path: "/certificates/Mini Mba in Human Resources Management.pdf"
        }
    ]

    return (
        <section id="certifications" className="certifications">
            {/* Floating Decorative Elements */}
            <div className="floating-decor">
                <div className="float-circle float-1"></div>
                <div className="float-circle float-2"></div>
                <div className="float-circle float-3"></div>
                <div className="float-oval float-4"></div>
                <div className="float-oval float-5"></div>
                <div className="float-wave wave-1"></div>
                <div className="float-wave wave-2"></div>
                <div className="float-sparkle sparkle-1">✨</div>
                <div className="float-sparkle sparkle-2">⭐</div>
                <div className="float-sparkle sparkle-3">✨</div>
                <div className="float-sparkle sparkle-4">⭐</div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="title-emoji">🏆</div>
                    <h2>My Achievements</h2>
                    <p>Celebrating every learning milestone! 🎉</p>
                </div>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="cert-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="cert-ribbon">🏅</div>
                            <div className="cert-sparkles">
                                <span className="sparkle">✨</span>
                                <span className="sparkle">✨</span>
                            </div>

                            <div className="cert-content">
                                <h3>{cert.title}</h3>
                                <div className="cert-meta">
                                    <p className="cert-issuer">
                                        <i className="fas fa-graduation-cap"></i>
                                        {cert.issuer}
                                    </p>
                                    <p className="cert-date">
                                        <i className="fas fa-calendar-alt"></i>
                                        {cert.date}
                                    </p>
                                </div>
                                {cert.path && (
                                    <a
                                        href={cert.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-link"
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

export default Certifications
