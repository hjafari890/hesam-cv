import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Selected Works</h2>
        <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '48px', fontSize: '1.1rem', maxWidth: '600px' }}>
          Explore my latest projects bridging the gap between hardware, AI, and edge computing.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
        {cvData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '300px'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: 0, right: 0, bottom: 0, left: 0,
                background: 'linear-gradient(to bottom, transparent, hsla(var(--background), 0.9))',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />
            
            <div style={{ position: 'relative', zIndex: 2, flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'hsl(var(--primary))' }}>{project.title}</h3>
                <ArrowUpRight size={24} style={{ color: 'hsl(var(--muted-foreground))' }} />
              </div>
              
              {project.status && (
                <span style={{ 
                  display: 'inline-block', 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  fontSize: '0.8rem', 
                  background: 'hsla(var(--primary), 0.2)', 
                  color: 'hsl(var(--primary))',
                  marginBottom: '16px',
                  fontWeight: 600
                }}>
                  {project.status}
                </span>
              )}

              <p style={{ color: 'hsl(var(--foreground))', marginBottom: '24px' }}>
                {project.description}
              </p>
            </div>

            <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
              {project.tags.map(tag => (
                <span 
                  key={tag}
                  style={{
                    fontSize: '0.8rem',
                    color: 'hsl(var(--muted-foreground))',
                    border: '1px solid hsla(var(--border), 0.5)',
                    padding: '4px 10px',
                    borderRadius: '4px'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Placeholder for future hover video/image */}
            <div 
              className="project-media-placeholder"
              style={{
                position: 'absolute',
                top: 0, right: 0, bottom: 0, left: 0,
                background: 'radial-gradient(circle at top right, hsla(var(--primary), 0.1), transparent)',
                zIndex: 0,
                opacity: 0.5,
                transition: 'opacity 0.3s ease'
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
