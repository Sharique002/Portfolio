import './Contact.css'

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <section id="contact" className="contact-cyberpunk">
            {/* Background Image with Overlay */}
            <div className="contact-bg-image">
                <img src="/images/contact-bg.jpg" alt="Contact Background" />
                <div className="bg-overlay"></div>
            </div>
            <div className="cyberpunk-background"></div>
            <div className="neon-overlay"></div>

            <div className="contact-container">
                {/* Main Heading */}
                <h2 className="contact-title">GET IN TOUCH</h2>


                {/* Bottom Section */}
                <div className="contact-bottom">
                    <button onClick={scrollToTop} className="back-to-top-btn">
                        <i className="fas fa-arrow-up"></i>
                        <span>Back to top</span>
                    </button>

                    <div className="social-icons-bottom">
                        <a
                            href="https://www.linkedin.com/in/shariquehussain02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-cyber"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="https://github.com/sharique0002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-cyber"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="mailto:shariquehussain03@gmail.com"
                            className="social-icon-cyber"
                            aria-label="Email"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a
                            href="tel:+919279188328"
                            className="social-icon-cyber"
                            aria-label="Phone"
                        >
                            <i className="fas fa-phone"></i>
                        </a>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="contact-footer">
                    <p>&copy; 2026 Sharique Hussain. All rights reserved.</p>
                    <p>Built with passion and modern web technologies</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
