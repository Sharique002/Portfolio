import './Experience.css'

const Experience = () => {
    const experiences = [
        {
            title: "SDE Intern",
            company: "Optmyzr - PPC Management Software Company",
            date: "Since March 2023",
            description: "Working on developing and optimizing PPC management solutions. Contributing to full-stack development, implementing new features, and improving application performance."
        },
        {
            title: "Freelancer",
            company: "Payben Private Limited",
            date: "April 2022 - March 2023",
            description: "Worked on various freelance projects involving web development, API integration, and software solutions. Gained experience in client communication and project delivery."
        }
    ]

    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-header">
                    <h2>Experience</h2>
                    <p>My professional journey and internships</p>
                </div>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{exp.date}</span>
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
