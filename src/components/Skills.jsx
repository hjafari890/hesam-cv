import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';

const Skills = () => {
  return (
    <section id="skills" className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <h2 className="section-title">Technical Arsenal</h2>
      </motion.div>

      <div className="grid-layout" style={{ gap: '32px' }}>
        {Object.entries(cvData.skills).map(([category, skillsArray], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass-panel"
            style={{ padding: '24px' }}
          >
            <h3 style={{ fontSize: '1.2rem', color: 'hsl(var(--primary))', marginBottom: '16px', borderBottom: '1px solid hsla(var(--border), 0.5)', paddingBottom: '8px' }}>
              {category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skillsArray.map(skill => (
                <span 
                  key={skill}
                  style={{
                    background: 'hsla(var(--card), 0.8)',
                    border: '1px solid hsla(var(--border), 0.4)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    color: 'hsl(var(--foreground))',
                    transition: 'all 0.2s ease',
                    cursor: 'default'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = 'hsl(var(--primary))';
                    e.target.style.color = 'hsl(var(--primary))';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = 'hsla(var(--border), 0.4)';
                    e.target.style.color = 'hsl(var(--foreground))';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
