import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../data/cv';
import { X, Briefcase, GraduationCap } from 'lucide-react';

const CVModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'hsl(var(--card))',
          width: '90%',
          maxWidth: '1000px',
          maxHeight: '85vh',
          borderRadius: '16px',
          boxShadow: '0 20px 40px hsla(0,0%,0%,0.1)',
          border: '1px solid hsla(var(--border), 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 32px', borderBottom: '1px solid hsla(var(--border), 0.5)', background: 'hsla(var(--primary), 0.03)' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Curriculum Vitae</h2>
          <button 
            onClick={closeModal}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'hsl(var(--muted-foreground))', transition: 'color 0.2s' }}
            onMouseOver={(e) => e.target.style.color = 'hsl(var(--foreground))'}
            onMouseOut={(e) => e.target.style.color = 'hsl(var(--muted-foreground))'}
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{ padding: '32px', overflowY: 'auto' }}>
          
          {/* Experience Section */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Briefcase style={{ color: 'hsl(var(--primary))' }} />
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Experience</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {cvData.experience.map((exp, idx) => (
                <div key={idx} style={{ paddingLeft: '16px', borderLeft: '2px solid hsla(var(--primary), 0.3)' }}>
                  <span style={{ fontSize: '0.9rem', color: 'hsl(var(--primary))', fontWeight: 600 }}>{exp.period}</span>
                  <h4 style={{ fontSize: '1.1rem', margin: '4px 0' }}>{exp.role}</h4>
                  <div style={{ fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', marginBottom: '8px' }}>{exp.company} | {exp.location}</div>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <GraduationCap style={{ color: 'hsl(var(--primary))' }} />
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Education</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {cvData.education.map((edu, idx) => (
                <div key={idx} style={{ paddingLeft: '16px', borderLeft: '2px solid hsla(var(--primary), 0.3)' }}>
                  <span style={{ fontSize: '0.9rem', color: 'hsl(var(--primary))', fontWeight: 600 }}>{edu.period}</span>
                  <h4 style={{ fontSize: '1.1rem', margin: '4px 0' }}>{edu.degree}</h4>
                  <div style={{ fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', marginBottom: '4px' }}>{edu.institution} | {edu.location}</div>
                  <div style={{ fontSize: '0.85rem', display: 'inline-block', background: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', padding: '2px 8px', borderRadius: '4px' }}>{edu.gpa}</div>
                  {edu.thesis && <p style={{ fontSize: '0.9rem', marginTop: '8px', fontStyle: 'italic', color: 'hsl(var(--muted-foreground))' }}>{edu.thesis}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 style={{ margin: '0 0 24px 0', fontSize: '1.5rem' }}>Technical Skills</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              {Object.entries(cvData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h5 style={{ fontSize: '1rem', color: 'hsl(var(--primary))', marginBottom: '12px', borderBottom: '1px solid hsla(var(--border), 0.5)', paddingBottom: '4px' }}>
                    {category}
                  </h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {skills.map(skill => (
                      <span key={skill} style={{ fontSize: '0.85rem', background: 'hsla(var(--border), 0.3)', padding: '4px 10px', borderRadius: '4px' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default CVModal;
