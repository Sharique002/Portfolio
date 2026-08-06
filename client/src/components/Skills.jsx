import './Skills.css'

const Skills = () => {
    // Organize tech stack in pyramid pattern: 3, 5, 7, 9, 11+ items per row
    const pyramidRows = [
        // Row 1 - 3 items (Top)
        [
            { name: "Python", icon: "🐍" },
            { name: "JavaScript", icon: "JS" },
            { name: "React", icon: "⚛" }
        ],
        // Row 2 - 5 items
        [
            { name: "Node.js", icon: "⬢" },
            { name: "TypeScript", icon: "TS" },
            { name: "Next.js", icon: "N" },
            { name: "MongoDB", icon: "🍃" },
            { name: "TensorFlow", icon: "TF" }
        ],
        // Row 3 - 7 items
        [
            { name: "PyTorch", icon: "🔥" },
            { name: "Docker", icon: "🐋" },
            { name: "AWS", icon: "☁" },
            { name: "HTML", icon: "HTML" },
            { name: "CSS", icon: "CSS" },
            { name: "Git", icon: "⎇" },
            { name: "Flask", icon: "🧪" }
        ],
        // Row 4 - 9 items
        [
            { name: "PostgreSQL", icon: "Pg" },
            { name: "MySQL", icon: "SQL" },
            { name: "Azure", icon: "☁" },
            { name: "C", icon: "C" },
            { name: "C++", icon: "C++" },
            { name: "Java", icon: "☕" },
            { name: "FastAPI", icon: "⚡" },
            { name: "OpenCV", icon: "CV" },
            { name: "NumPy", icon: "⊞" }
        ],
        // Row 5 - AI & Backend Tools (10 items)
        [
            { name: "LangChain", icon: "🔗" },
            { name: "OpenAI API", icon: "🤖" },
            { name: "FAISS", icon: "🔍" },
            { name: "Redis", icon: "⚡" },
            { name: "Socket.io", icon: "🔌" },
            { name: "Prometheus", icon: "📊" },
            { name: "Grafana", icon: "📈" },
            { name: "Nginx", icon: "▶" },
            { name: "Tailwind", icon: "~" },
            { name: "Bootstrap", icon: "B" }
        ],
        // Row 6 - Developer Tools & Platforms (10 items)
        [
            { name: "Firebase", icon: "FB" },
            { name: "GitHub", icon: "GH" },
            { name: "Linux", icon: "🐧" },
            { name: "VS Code", icon: "⌨" },
            { name: "Vercel", icon: "▲" },
            { name: "Jupyter", icon: "📓" },
            { name: "Postman", icon: "📮" },
            { name: "Laravel", icon: "L" },
            { name: "Microsoft Office", icon: "📊" },
            { name: "Figma", icon: "🎨" }
        ],
        // Row 7 - Design Tools & Creative Skills (7 items)
        [
            { name: "Photoshop", icon: "Ps" },
            { name: "Canva", icon: "🖌" },
            { name: "UI/UX Design", icon: "🎯" },
            { name: "Social Media Design", icon: "📱" },
            { name: "Brand Identity", icon: "🏷" },
            { name: "Typography", icon: "✒" },
            { name: "Color Theory", icon: "🎨" }
        ],
        // Row 8 - Graphic Design Skills (7 items)
        [
            { name: "Visual Hierarchy", icon: "👁" },
            { name: "Carousel Design", icon: "🎠" },
            { name: "Responsive Design", icon: "📐" },
            { name: "Marketing Creatives", icon: "📣" },
            { name: "Thumbnail Design", icon: "🖼" },
            { name: "Layout & Composition", icon: "📏" },
            { name: "Iconography", icon: "✦" }
        ]
    ]

    return (
        <section id="skills" className="skills-tech-stack">
            <div className="tech-stack-bg"></div>

            <div className="container">
                <div className="tech-stack-header">
                    <h2>TECH STACK</h2>
                </div>

                <div className="tech-grid">
                    {pyramidRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="tech-row">
                            {row.map((tech, techIndex) => (
                                <div
                                    key={techIndex}
                                    className="tech-card"
                                    style={{ animationDelay: `${(rowIndex * 5 + techIndex) * 0.03}s` }}
                                >
                                    <div className="tech-icon">{tech.icon}</div>
                                    <div className="tech-name">{tech.name}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
