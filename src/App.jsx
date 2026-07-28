import { useMemo, useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Mail, X } from 'lucide-react';
import { cvData } from './data/cv';
import heroImage from './assets/hero.png';
import MeshBackground from './components/MeshBackground';

const accentClasses = ['sage', 'ink', 'copper', 'blue', 'violet'];

function enrichProjects(projects) {
  const baseYear = new Date().getFullYear();

  return projects.map((project, index) => ({
    ...project,
    year: project.year || String(baseYear - Math.min(index, 4)),
    organization: project.organization || project.tags?.[0] || 'Selected work',
    collaborators: project.collaborators || '',
    impact: project.impact || 'Foundation case study. Add the final video, process notes, and outcomes here.',
    accent: accentClasses[index % accentClasses.length],
    mediaLabel: project.mediaLabel || 'Project media slot',
  }));
}

function ProjectPreview({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || !project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, project.images]);

  // Keyboard arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!project.images || project.images.length <= 1) return;
      if (e.key === 'ArrowRight' || e.key === 'Right') {
        e.preventDefault(); // Stop page from scrolling
        setIsAutoPlaying(false);
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        e.preventDefault(); // Stop page from scrolling
        setIsAutoPlaying(false);
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [project.images]);

  // Handle scroll scrubbing
  const handleWheel = (e) => {
    e.stopPropagation();
    if (!project.images || project.images.length <= 1) return;
    setIsAutoPlaying(false);
    if (Math.abs(e.deltaY) > 10) {
      if (e.deltaY > 0) {
        setCurrentImageIndex((prev) => Math.min(prev + 1, project.images.length - 1));
      } else {
        setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const hasImages = project.images && project.images.length > 0;

  return (
    <div 
      className={`media-frame ${project.accent}`} 
      onWheel={handleWheel}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onClick={() => {
        if (!project.images || project.images.length <= 1) return;
        setIsAutoPlaying(false);
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '32px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 40px 100px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255, 255, 255, 0.4)'
      }}
    >
      {hasImages && project.images.map((imgSrc, idx) => (
        <motion.img
          key={idx}
          src={imgSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === idx ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: currentImageIndex === idx ? 1 : 0,
            pointerEvents: 'none'
          }}
        />
      ))}

      {/* Dark gradient for text readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />
      <div className="glass-overlay" />
      
      {/* Image Indicator (Top Right) */}
      {hasImages && project.images.length > 1 && (
        <div style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          zIndex: 4,
          display: 'flex',
          gap: '6px',
          background: 'rgba(0, 0, 0, 0.4)',
          padding: '6px 10px',
          borderRadius: '12px',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {project.images.map((_, idx) => (
            <div 
              key={idx}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: currentImageIndex === idx ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                transition: 'background 0.2s ease',
                boxShadow: currentImageIndex === idx ? '0 0 4px rgba(255,255,255,0.8)' : 'none'
              }}
            />
          ))}
        </div>
      )}
      
      {/* Preload the rest of the images for this specific project upon hover */}
      {hasImages && project.images.length > 1 && (
        <div style={{ display: 'none', visibility: 'hidden', opacity: 0, position: 'absolute', pointerEvents: 'none' }}>
          {project.images.slice(1).map(img => (
            <img key={`preload-${img}`} src={img} alt="preload-inner" />
          ))}
        </div>
      )}

      {/* Text Overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '40px',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <h3 style={{
          fontSize: '2rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: '#ffffff',
          margin: 0
        }}>
          <span style={{ 
            display: 'block', 
            fontSize: '0.9rem', 
            fontWeight: 500, 
            color: 'rgba(255, 255, 255, 0.55)', 
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            {project.organization}
          </span>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.98rem',
          lineHeight: 1.45,
          color: 'rgba(255, 255, 255, 0.85)',
          margin: 0
        }}>
          {project.description}
        </p>

        {/* Frosted Glass Pills (Tech Stack) */}
        {project.technologies && project.technologies.length > 0 && (
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
            {project.technologies.map(tech => (
              <span key={tech} style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                border: '1px solid rgba(255, 255, 255, 0.15)', 
                backdropFilter: 'blur(12px)', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '0.8rem', 
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.9)' 
              }}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AboutDialog({ onClose }) {
  const educationList = [
    {
      title: "M.Sc. in Biomedical Engineering",
      subtitle: "Specialization in IoT"
    },
    {
      title: "B.Sc. in Biomedical Engineering",
      subtitle: "Specialization in Electronics"
    }
  ];

  const experienceList = [
    "Technical Product Analyst",
    "University Instructor",
    "Content Creator"
  ];

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="project-dialog"
        style={{ 
          maxWidth: '460px', 
          padding: '36px 40px', 
          gridTemplateColumns: '1fr',
          borderRadius: '18px',
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          position: 'relative',
          overflow: 'hidden'
        }}
        aria-modal="true"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="icon-button close-button" type="button" onClick={onClose} aria-label="Close about modal">
          <X size={18} strokeWidth={2} />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Education Section */}
          <div>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-strong)' }}>
              Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {educationList.map((item, i) => (
                <div key={i}>
                  <h4 style={{ margin: '0 0 2px', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 400 }}>
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          {/* Experiences Section */}
          <div>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-strong)' }}>
              Experiences
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {experienceList.map((title, i) => (
                <h4 key={i} style={{ margin: 0, fontSize: '0.95rem', fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>
                  {title}
                </h4>
              ))}
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}

function App() {
  const projects = useMemo(() => enrichProjects(cvData.projects), []);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);

  // Easter Egg States
  const [isPcbMode, setIsPcbMode] = useState(false);
  const [nameClicks, setNameClicks] = useState(0);
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showCurseButton, setShowCurseButton] = useState(false);

  const [weatherData, setWeatherData] = useState(null);
  const [isWeatherActive, setIsWeatherActive] = useState(false);
  const [showWeatherHint, setShowWeatherHint] = useState(false);

  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);

  useEffect(() => {
    let interval;
    if (isPcbMode && loadingProgress < 99) {
      interval = setInterval(() => {
        setLoadingProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 4) + 1; // Slower speed
          return next > 99 ? 99 : next;
        });
      }, 150);
    } else if (isPcbMode && loadingProgress >= 99 && !showCurseButton) {
      const timeout = setTimeout(() => {
        setShowCurseButton(true);
      }, 5000); // Wait 2 seconds longer (5s total)
      return () => clearTimeout(timeout);
    } else if (!isPcbMode) {
      setLoadingProgress(0);
      setShowCurseButton(false);
    }
    return () => clearInterval(interval);
  }, [isPcbMode, loadingProgress, showCurseButton]);

  const handleNameClick = () => {
    const next = nameClicks + 1;
    setNameClicks(next);
    if (next >= 3) {
      setIsPcbMode(!isPcbMode);
      setNameClicks(0);
    }
  };

  const handleDateStampClick = async () => {
    if (!isWeatherActive) {
      setIsWeatherActive(true);
      setShowWeatherHint(true);
      
      // Auto-hide the hint after 5 seconds
      setTimeout(() => {
        setShowWeatherHint(false);
      }, 5000);

      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=65.0121&longitude=25.4651&current_weather=true');
        const data = await res.json();
        if (data && data.current_weather) {
          setWeatherData({
            temp: Math.round(data.current_weather.temperature),
            code: data.current_weather.weathercode
          });
        }
      } catch (e) {
        console.error('Weather fetch error', e);
      }
    } else {
      setIsWeatherActive(false);
      setShowWeatherHint(false);
    }
  };

  const activeProject = activeIndex === null ? null : projects[activeIndex];

  // Global Mouse Tracking for Media Preview
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement with a fast, snappy spring
  const springX = useSpring(mouseX, { stiffness: 1500, damping: 40, mass: 0.05 });
  const springY = useSpring(mouseY, { stiffness: 1500, damping: 40, mass: 0.05 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const offsetX = (e.clientX - window.innerWidth / 2) * 0.5;
      const offsetY = (e.clientY - window.innerHeight / 2) * 0.5;
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Global momentum scroll engine
  const scrollRef = useRef(null);
  const targetScroll = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScroll = () => {
      if (!isScrolling.current) return;
      
      const currentScroll = el.scrollTop;
      const diff = targetScroll.current - currentScroll;
      
      if (Math.abs(diff) < 0.5) {
        el.scrollTop = targetScroll.current;
        isScrolling.current = false;
        return;
      }
      
      el.scrollTop = currentScroll + diff * 0.12; // 12% Lerp for buttery smooth aesthetic inertia
      requestAnimationFrame(updateScroll);
    };

    const handleGlobalWheel = (e) => {
      if (!el.contains(e.target)) {
        e.preventDefault();
        
        const maxScroll = el.scrollHeight - el.clientHeight;
        
        if (!isScrolling.current) {
          targetScroll.current = el.scrollTop;
          isScrolling.current = true;
          requestAnimationFrame(updateScroll);
        }
        
        targetScroll.current = Math.max(0, Math.min(targetScroll.current + e.deltaY, maxScroll));
      }
    };
    
    const handleNativeScroll = () => {
      if (!isScrolling.current) {
        targetScroll.current = el.scrollTop;
      }
    };

    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    el.addEventListener('scroll', handleNativeScroll, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleGlobalWheel);
      el.removeEventListener('scroll', handleNativeScroll);
    };
  }, []);

  return (
    <main className="portfolio-shell">
      <MeshBackground isPcbMode={isPcbMode} />
      <section
        ref={scrollRef}
        className="project-column"
        aria-label="Selected projects"
      >
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              className={`project-row ${activeIndex === index ? 'active-row' : ''}`}
              onClick={() => {
                // On mobile devices, open the fullscreen modal
                if (window.innerWidth <= 980) {
                  setMobileActiveIndex(index);
                }
              }}
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                setActiveIndex(index);
              }}
              onFocus={() => {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                setActiveIndex(index);
              }}
              onMouseLeave={() => {
                hoverTimeoutRef.current = setTimeout(() => {
                  setActiveIndex(null);
                }, 150);
              }}
              onBlur={() => {
                hoverTimeoutRef.current = setTimeout(() => {
                  setActiveIndex(null);
                }, 150);
              }}
              animate={{
                backgroundColor: activeIndex === index ? (isPcbMode ? 'rgba(0, 255, 170, 0.15)' : 'rgba(255, 255, 255, 1)') : 'rgba(255, 255, 255, 0)',
                boxShadow: activeIndex === index ? '0 8px 20px -4px rgba(0, 0, 0, 0.08)' : '0 0px 0px 0px rgba(0, 0, 0, 0)',
                scale: activeIndex === index ? 1.02 : 1,
                zIndex: activeIndex === index ? 10 : 1
              }}
              transition={{ type: "tween", duration: 0.1, ease: "easeOut" }}
              style={{
                borderRadius: '12px',
                padding: '8px 16px',
                marginLeft: '-16px',
                border: 'none',
                position: 'relative',
                cursor: 'default',
                width: '100%',
                maxWidth: '400px'
              }}
            >
              <div className="project-grid">
                <div className="project-name-col">
                  <span className="project-name" style={{ color: isPcbMode ? '#e0ffe0' : undefined }}>{project.title}</span>
                </div>
                <span className="project-year" style={{ color: isPcbMode ? '#00ffaa' : undefined }}>{project.year}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="identity-column" aria-label="Introduction">
        <motion.div 
          className="floating-preview"
          style={{ 
            x: springX, 
            y: springY,
            position: 'fixed',
            left: '52vw',
            top: '50%',
            marginTop: '-35vh',
            zIndex: 100,
            height: '70vh',
            width: '55vh',
            pointerEvents: activeProject ? 'auto' : 'none'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: activeProject ? 1 : 0, scale: activeProject ? 1 : 0.95 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          onMouseLeave={() => setActiveIndex(null)} // Close when mouse leaves the floating card too
        >
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.08, ease: "easeOut" }}
                style={{ width: '100%', height: '100%' }}
              >
                <ProjectPreview project={activeProject} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div 
          className="identity-copy"
          style={{ 
            opacity: activeProject ? 0 : 1, 
            pointerEvents: activeProject ? 'none' : 'auto',
            transition: `opacity 0.3s ease ${activeProject ? '0s' : '0.15s'}` 
          }}
        >
          <p className="eyebrow" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: isPcbMode ? '#00ffaa' : 'var(--muted)', marginBottom: '12px', fontWeight: 600 }}>
            University of Oulu • Finland
          </p>

          <h1 style={{ fontSize: '2.4rem', lineHeight: 1.25, letterSpacing: '-0.03em', color: isPcbMode ? '#ffffff' : 'var(--text-strong)', marginBottom: '24px' }}>
            <strong 
              onClick={handleNameClick}
              style={{ fontWeight: 700, userSelect: 'none' }}
            >
              {cvData.personal.name},
            </strong>
            <br />
            <span style={{ fontWeight: 400, color: isPcbMode ? '#d0ebd0' : undefined }}>biomedical eng. specializing in </span>
            <span className="apple-gradient-text" style={{ fontWeight: 700 }}>IoT & Edge AI.</span>
          </h1>

          <nav className="link-row" aria-label="Profile links">
            <button type="button" onClick={() => setIsAboutOpen(true)} style={{ color: isPcbMode ? '#00ffaa' : undefined }}>
              <FileText size={14} />
              About
            </button>
            <a href={`mailto:${cvData.personal.email}`} style={{ color: isPcbMode ? '#00ffaa' : undefined }}>
              <Mail size={14} />
              Email
            </a>
            <a href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noreferrer" style={{ color: isPcbMode ? '#00ffaa' : undefined }}>
              <ExternalLink size={14} />
              LinkedIn
            </a>
          </nav>

          {/* PCB Mode Secret Loading Bar - Inline */}
          <AnimatePresence>
            {isPcbMode && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#00ffaa'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Loading Secret Portfolio
                    </span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 300, fontVariantNumeric: 'tabular-nums' }}>
                      {loadingProgress}%
                    </span>
                  </div>
                  
                  <div style={{ width: '100%', height: '6px', background: 'rgba(0,255,170,0.15)', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: '0%' }}
                      animate={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.2 }}
                      style={{ height: '100%', background: '#00ffaa', boxShadow: '0 0 8px rgba(0,255,170,0.8)' }}
                    />
                  </div>

                  <AnimatePresence>
                    {showCurseButton && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => {
                          setIsPcbMode(false);
                        }}
                        style={{
                          marginTop: '8px',
                          background: 'rgba(0, 255, 170, 0.05)',
                          border: '1px solid rgba(0, 255, 170, 0.4)',
                          color: '#00ffaa',
                          padding: '10px 20px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          textAlign: 'center',
                          width: '100%',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 170, 0.15)';
                          e.currentTarget.style.borderColor = '#00ffaa';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 170, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(0, 255, 170, 0.4)';
                        }}
                      >
                        Perfectionism is a curse
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div style={{ position: 'relative' }}>
          <p 
            className="date-stamp" 
            onClick={handleDateStampClick}
            style={{ 
              opacity: activeProject ? 0 : 1, 
              transition: `opacity 0.3s ease ${activeProject ? '0s' : '0.15s'}`,
              userSelect: 'none',
              cursor: 'pointer',
              color: isPcbMode ? '#00ffaa' : undefined
            }}
          >
            {isWeatherActive ? (
              `📍 Oulu, FI • ${weatherData ? `${weatherData.temp}°C ❄️` : 'Loading...'} • 00:13`
            ) : (
              "Jul '26"
            )}
          </p>

          <AnimatePresence>
            {showWeatherHint && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  right: '24px',
                  marginBottom: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  border: '1px solid var(--line)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'var(--text-strong)',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  zIndex: 20
                }}
              >
                Find the other Easter egg to load the secret portfolio.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {isAboutOpen && <AboutDialog onClose={() => setIsAboutOpen(false)} />}

      {/* Mobile Project Modal */}
      <AnimatePresence>
        {mobileActiveIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-modal-overlay"
            onClick={() => setMobileActiveIndex(null)}
          >
            <div 
              className="mobile-modal-content"
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                className="mobile-close-btn"
                onClick={() => setMobileActiveIndex(null)}
              >
                ×
              </button>
              <ProjectPreview project={projects[mobileActiveIndex]} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Image Preloader for instant crossfades (Cover photos only) */}
      <div style={{ display: 'none', visibility: 'hidden', opacity: 0, position: 'absolute', pointerEvents: 'none' }}>
        {cvData.projects.map(p => p.images && p.images.length > 0 && (
          <img key={p.images[0]} src={p.images[0]} alt="preload-cover" />
        ))}
      </div>
    </main>
  );
}

export default App;