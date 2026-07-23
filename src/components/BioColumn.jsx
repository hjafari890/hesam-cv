import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';

const BioColumn = ({ openModal }) => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* 3D Canvas Placeholder - Moved to a subtle background position so it doesn't break the minimalism */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, hsla(var(--primary), 0.05), transparent 70%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0,
          opacity: 0.5
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))', textAlign: 'center' }}>
          [3D Head]
        </span>
      </div>

      <div style={{ flex: 1, zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--foreground))', lineHeight: 1.4, marginBottom: '16px', maxWidth: '350px' }}>
            {cvData.personal.name},<br />
            Biomedical Engineering master's student specializing in IoT and edge intelligence.
          </div>

          {/* Links Section - Horizontal row, extremely minimalist */}
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>
            <button 
              onClick={openModal}
              style={{ 
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                color: 'inherit', transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.color = 'hsl(var(--primary))'}
              onMouseOut={(e) => e.target.style.color = 'hsl(var(--muted-foreground))'}
            >
              CV & Skills
            </button>
            
            <a 
              href={`mailto:${cvData.personal.email}`}
              style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.color = 'hsl(var(--primary))'}
              onMouseOut={(e) => e.target.style.color = 'hsl(var(--muted-foreground))'}
            >
              Email
            </a>
            
            <a 
              href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noreferrer"
              style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.color = 'hsl(var(--primary))'}
              onMouseOut={(e) => e.target.style.color = 'hsl(var(--muted-foreground))'}
            >
              LinkedIn
            </a>

            <a 
              href="/Hesam-CV.pdf" target="_blank"
              style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.color = 'hsl(var(--primary))'}
              onMouseOut={(e) => e.target.style.color = 'hsl(var(--muted-foreground))'}
            >
              Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BioColumn;
