import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="container" style={{ paddingTop: '120px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px' }}>
      <div style={{ flex: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 style={{ color: 'hsl(var(--primary))', marginBottom: '8px' }}>Hello, I am</h4>
          <h1 style={{ fontSize: '4rem', marginBottom: '16px' }}>{cvData.personal.name}</h1>
          <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '24px' }}>
            Innovating at the Edge of AI & Hardware
          </h2>
          <p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '32px' }}>
            {cvData.personal.summary}
          </p>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects <ChevronDown size={18} />
            </button>
            <a 
              href="/Hesam-CV.pdf" 
              target="_blank" 
              className="btn btn-outline"
            >
              Resume <Download size={18} />
            </a>
          </div>
        </motion.div>
      </div>
      
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <motion.div 
          className="animate-float animate-pulse-glow"
          style={{ 
            width: '400px', 
            height: '400px', 
            borderRadius: '50%',
            background: 'linear-gradient(135deg, hsla(var(--primary), 0.2), hsla(var(--accent), 0.1))',
            border: '1px solid hsla(var(--primary), 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <div style={{ textAlign: 'center', color: 'hsl(var(--muted-foreground))' }}>
            <p style={{ fontWeight: 'bold' }}>[ 3D Head Emoji Placeholder ]</p>
            <p style={{ fontSize: '0.8rem', marginTop: '8px' }}>Will close eyes on scroll & connect neurons to projects.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
