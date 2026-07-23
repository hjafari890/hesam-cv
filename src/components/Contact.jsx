import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { Mail, MapPin, Link, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel"
        style={{ 
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '0 auto',
          background: 'linear-gradient(135deg, hsla(var(--card), 0.8), hsla(var(--primary), 0.05))',
          border: '1px solid hsla(var(--primary), 0.2)'
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Let's Connect</h2>
        <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '40px', fontSize: '1.1rem' }}>
          Interested in collaboration, or just want to chat about AI and Edge Computing? Let's get in touch.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', marginBottom: '48px' }}>
          <a href={`mailto:${cvData.personal.email}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'hsl(var(--foreground))', textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'hsl(var(--primary))'} onMouseOut={(e) => e.target.style.color = 'hsl(var(--foreground))'}>
            <Mail size={24} style={{ color: 'hsl(var(--primary))' }} /> {cvData.personal.email}
          </a>
          <a href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'hsl(var(--foreground))', textDecoration: 'none', fontSize: '1.2rem', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'hsl(var(--primary))'} onMouseOut={(e) => e.target.style.color = 'hsl(var(--foreground))'}>
            <Link size={24} style={{ color: 'hsl(var(--primary))' }} /> {cvData.personal.linkedin} <ExternalLink size={16} style={{ color: 'hsl(var(--muted-foreground))' }} />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'hsl(var(--muted-foreground))', fontSize: '1.1rem' }}>
            <MapPin size={24} style={{ color: 'hsl(var(--primary))' }} /> {cvData.personal.location}
          </div>
        </div>

        <a href="/Hesam-CV.pdf" target="_blank" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
          Download Complete Resume
        </a>
      </motion.div>
      
      <div style={{ textAlign: 'center', marginTop: '80px', color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} {cvData.personal.name}. All rights reserved.</p>
        <p style={{ marginTop: '8px' }}>Designed with futuristic vision.</p>
      </div>
    </section>
  );
};

export default Contact;
