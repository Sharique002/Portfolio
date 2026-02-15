import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ResearchAchievementsPage.css'

const ResearchAchievementsPage = () => {
    const navigate = useNavigate()
    const [achievements, setAchievements] = useState([
        { id: 1, type: 'image', url: '/images/Research Achievement_01.png', title: 'Research Achievement 1' },
        { id: 2, type: 'image', url: '/images/Research Achievement_02.png', title: 'Research Achievement 2' },
        { id: 3, type: 'image', url: '/images/Research Achievement_03.jpeg', title: 'Research Achievement 3' },
        { id: 4, type: 'pdf', url: '/certificates/Smart Railway Track Fault Detection and Clearance Monitoring System .pdf', title: 'Smart Railway Track Fault Detection and Clearance Monitoring System' }
    ])
    const [zoom, setZoom] = useState(1)
    const [viewMode, setViewMode] = useState('grid') // 'grid' or 'single'
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const imageRef = useRef(null)

    // Zoom controls
    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3))
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5))
    const handleResetZoom = () => {
        setZoom(1)
        setPosition({ x: 0, y: 0 })
    }

    // Dragging for pan
    const handleMouseDown = (e) => {
        if (zoom > 1) {
            setIsDragging(true)
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            })
        }
    }

    const handleMouseMove = (e) => {
        if (isDragging && zoom > 1) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            })
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    // Navigation
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length)
        handleResetZoom()
    }

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
        handleResetZoom()
    }

    const handleBack = () => {
        navigate('/')
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (viewMode === 'single') {
                if (e.key === 'ArrowRight') handleNext()
                if (e.key === 'ArrowLeft') handlePrevious()
                if (e.key === 'Escape') setViewMode('grid')
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [viewMode, currentIndex])

    return (
        <div className="research-page">
            {/* Header */}
            <header className="research-header">
                <button onClick={handleBack} className="back-btn">
                    <i className="fas fa-arrow-left"></i> Back to Portfolio
                </button>
                <h1>🔬 Research Achievements</h1>
            </header>

            {/* View Mode Toggle */}
            <div className="view-controls">
                <button
                    onClick={() => setViewMode('grid')}
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                >
                    <i className="fas fa-th"></i> Grid View
                </button>
                <button
                    onClick={() => { setViewMode('single'); setCurrentIndex(0); }}
                    className={`view-btn ${viewMode === 'single' ? 'active' : ''}`}
                >
                    <i className="fas fa-expand"></i> Full View
                </button>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' && (
                <div className="achievements-grid-view">
                    {achievements.map((item, index) => (
                        <div key={item.id} className="achievement-item">
                            <div
                                className="achievement-preview"
                                onClick={() => {
                                    setCurrentIndex(index)
                                    setViewMode('single')
                                }}
                            >
                                {item.type === 'pdf' ? (
                                    <div className="pdf-preview">
                                        <i className="fas fa-file-pdf"></i>
                                        <p>PDF Document</p>
                                    </div>
                                ) : (
                                    <img src={item.url} alt={item.title} />
                                )}
                            </div>
                            <p className="achievement-title">{item.title}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Single View */}
            {viewMode === 'single' && achievements.length > 0 && (
                <div className="single-view">
                    {/* Zoom Controls */}
                    <div className="zoom-controls">
                        <button onClick={handleZoomOut} title="Zoom Out">
                            <i className="fas fa-search-minus"></i>
                        </button>
                        <span>{Math.round(zoom * 100)}%</span>
                        <button onClick={handleZoomIn} title="Zoom In">
                            <i className="fas fa-search-plus"></i>
                        </button>
                        <button onClick={handleResetZoom} title="Reset">
                            <i className="fas fa-redo"></i>
                        </button>
                    </div>

                    {/* Navigation */}
                    <button onClick={handlePrevious} className="nav-btn prev-btn">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button onClick={handleNext} className="nav-btn next-btn">
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    {/* Content */}
                    <div
                        className="content-container"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        {achievements[currentIndex].type === 'pdf' ? (
                            <iframe
                                src={achievements[currentIndex].url}
                                title={achievements[currentIndex].title}
                                className="pdf-viewer"
                            />
                        ) : (
                            <img
                                ref={imageRef}
                                src={achievements[currentIndex].url}
                                alt={achievements[currentIndex].title}
                                className="achievement-image"
                                style={{
                                    transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                                    cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                                }}
                                draggable={false}
                            />
                        )}
                    </div>

                    {/* Info Bar */}
                    <div className="info-bar">
                        <p>{achievements[currentIndex].title}</p>
                        <span>{currentIndex + 1} / {achievements.length}</span>
                    </div>
                </div>
            )}

            {achievements.length === 0 && (
                <div className="empty-state">
                    <i className="fas fa-folder-open"></i>
                    <p>No research achievements yet</p>
                    {isAdmin && <p>Upload some files to get started!</p>}
                </div>
            )}
        </div>
    )
}

export default ResearchAchievementsPage
