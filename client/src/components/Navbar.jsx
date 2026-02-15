import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const sections = ['home', 'about', 'skills', 'projects', 'hackathons', 'certifications', 'patents', 'contact']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (e, targetId) => {
        e.preventDefault()
        const target = document.getElementById(targetId)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className={`navbar-elegant ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container-wide">
                <div className="navbar-content">
                    <a href="#home" className="navbar-logo" onClick={(e) => handleClick(e, 'home')}>
                        <span className="logo-name-first">Sharique</span>
                        <span className="logo-name-last">Hussain</span>
                    </a>

                    <div className="navbar-menu">
                        <a
                            href="#about"
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, 'about')}
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, 'skills')}
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, 'projects')}
                        >
                            Projects
                        </a>
                        <a
                            href="#hackathons"
                            className={`nav-link ${activeSection === 'hackathons' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, 'hackathons')}
                        >
                            Hackathons
                        </a>
                        <a
                            href="#certifications"
                            className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, 'certifications')}
                        >
                            Certifications
                        </a>
                        <a
                            href="#patents"
                            className={`nav-link ${activeSection === 'patents' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, 'patents')}
                        >
                            Patents
                        </a>
                        <a
                            href="#contact"
                            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, 'contact')}
                        >
                            Contact
                        </a>
                    </div>

                    <div className="navbar-actions">
                        <a href="#contact" className="btn-contact" onClick={(e) => handleClick(e, 'contact')}>
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
