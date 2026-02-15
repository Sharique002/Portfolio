import './ResearchAchievements.css'

const ResearchAchievements = () => {
    const achievements = [
        {
            image: "/images/Research Achievement_01.png",
            alt: "Research Achievement 1"
        },
        {
            image: "/images/Research Achievement_02.png",
            alt: "Research Achievement 2"
        },
        {
            image: "/images/Research Achievement_03.jpeg",
            alt: "Research Achievement 3"
        }
    ]

    return (
        <section id="research-achievements" className="research-achievements">
            {/* Floating Decorative Elements */}
            <div className="floating-decor">
                <div className="float-circle float-1"></div>
                <div className="float-circle float-2"></div>
                <div className="float-circle float-3"></div>
                <div className="float-sparkle sparkle-1">📊</div>
                <div className="float-sparkle sparkle-2">🔬</div>
                <div className="float-sparkle sparkle-3">📈</div>
                <div className="float-sparkle sparkle-4">🏆</div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="title-emoji">🔬</div>
                    <h2>Research Achievements</h2>
                    <p>Discoveries that make a difference! 📊✨</p>
                </div>

                <div className="achievements-scroll-container">
                    <div className="achievements-scroll">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="achievement-image-card"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="image-wrapper">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.alt}
                                        loading="lazy"
                                    />
                                    <div className="image-overlay">
                                        <i className="fas fa-search-plus"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <i className="fas fa-chevron-down"></i>
                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    )
}

export default ResearchAchievements
