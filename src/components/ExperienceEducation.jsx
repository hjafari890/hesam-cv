import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="grid-layout">
        
        {/* Experience Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <Briefcase size={28} style={{ color: 'hsl(var(--primary))' }} />
            <h2 style={{ margin: 0, fontSize: '2rem' }}>Experience</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {cvData.experience.map((exp, index) => (
              <div key={index} style={{ borderLeft: '2px solid hsla(var(--primary), 0.3)', paddingLeft: '20px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'hsl(var(--primary))' }} />
                <span style={{ color: 'hsl(var(--primary))', fontSize: '0.9rem', fontWeight: 600 }}>{exp.period}</span>
                <h3 style={{ fontSize: '1.2rem', marginTop: '4px', marginBottom: '4px' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontWeight: 400, marginBottom: '8px' }}>{exp.company} | {exp.location}</h4>
                <p style={{ color: 'hsl(var(--foreground))', fontSize: '0.95rem' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <GraduationCap size={28} style={{ color: 'hsl(var(--primary))' }} />
            <h2 style={{ margin: 0, fontSize: '2rem' }}>Education</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {cvData.education.map((edu, index) => (
              <div key={index} style={{ borderLeft: '2px solid hsla(var(--primary), 0.3)', paddingLeft: '20px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'hsl(var(--primary))' }} />
                <span style={{ color: 'hsl(var(--primary))', fontSize: '0.9rem', fontWeight: 600 }}>{edu.period}</span>
                <h3 style={{ fontSize: '1.2rem', marginTop: '4px', marginBottom: '4px' }}>{edu.degree}</h3>
                <h4 style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontWeight: 400, marginBottom: '4px' }}>{edu.institution} | {edu.location}</h4>
                <span style={{ fontSize: '0.9rem', color: 'hsl(var(--foreground))', background: 'hsla(var(--card), 0.5)', padding: '2px 8px', borderRadius: '4px' }}>{edu.gpa}</span>
                {edu.thesis && <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.85rem', marginTop: '8px', fontStyle: 'italic' }}>{edu.thesis}</p>}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceEducation;
