import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Certifications from './components/Certifications'
import Patents from './components/Patents'
import ResearchAchievements from './components/ResearchAchievements'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import ResearchAchievementsPage from './pages/ResearchAchievementsPage'
import './App.css'

function App() {
    const [loading, setLoading] = useState(true)
    const [showResearchAchievements, setShowResearchAchievements] = useState(false)

    useEffect(() => {
        // Simulate initial load
        setTimeout(() => setLoading(false), 300)
    }, [])

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="loader"></div>
            </div>
        )
    }

    return (
        <Routes>
            <Route path="/" element={
                <div className="App">
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Hackathons />
                    <Certifications />
                    <Patents onShowResearch={() => setShowResearchAchievements(true)} />
                    {showResearchAchievements && <ResearchAchievements />}
                    <Achievements />
                    <Contact />
                </div>
            } />
            <Route path="/research-achievements" element={<ResearchAchievementsPage />} />
        </Routes>
    )
}

export default App
