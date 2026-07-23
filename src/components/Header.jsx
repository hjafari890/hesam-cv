import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 24px',
        zIndex: 100,
        background: 'hsla(var(--background), 0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid hsla(var(--border), 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'hsl(var(--primary))' }}>
        HJ.
      </div>
      <nav style={{ display: 'flex', gap: '24px' }}>
        {['About', 'Projects', 'Experience', 'Skills'].map((item) => (
          <button 
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            style={{
              background: 'none',
              border: 'none',
              color: 'hsl(var(--foreground))',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'hsl(var(--primary))'}
            onMouseOut={(e) => e.target.style.color = 'hsl(var(--foreground))'}
          >
            {item}
          </button>
        ))}
      </nav>
      <button 
        className="btn btn-primary" 
        onClick={() => scrollTo('contact')}
        style={{ padding: '8px 16px', fontSize: '0.9rem' }}
      >
        Contact Me
      </button>
    </motion.header>
  );
};

export default Header;
