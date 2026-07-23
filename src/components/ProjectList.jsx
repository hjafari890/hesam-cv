import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../data/cv';

const ProjectList = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '15%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '20vh' }}>
        {cvData.projects.map((project, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            animate={{
              backgroundColor: hoveredProject === index ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
              boxShadow: hoveredProject === index ? '0 12px 24px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.05)' : '0 0px 0px 0px rgba(0, 0, 0, 0)',
              scale: hoveredProject === index ? 1.03 : 1,
              zIndex: hoveredProject === index ? 10 : 1
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              cursor: 'pointer',
              gap: '60px',
              padding: '12px 24px',
              borderRadius: '24px',
              marginLeft: '-24px', // Offsets the padding so text aligns visually with the rest of the column
              color: 'hsl(var(--foreground))',
              position: 'relative'
            }}
          >
            <div style={{ fontSize: '0.85rem', fontWeight: 400, minWidth: '150px', zIndex: 1 }}>
              {project.title}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
              {project.status || project.tags[0]}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Media Preview Container */}
      <AnimatePresence>
        {hoveredProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '60%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '350px',
              pointerEvents: 'none',
              zIndex: -1, /* Behind the text */
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px hsla(0, 0%, 0%, 0.1)',
              background: 'hsl(var(--card))'
            }}
          >
            {/* Placeholder for video/image */}
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, hsla(var(--primary), 0.1), hsla(var(--accent), 0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'hsl(var(--primary))', fontWeight: 500, fontSize: '0.9rem' }}>Media Preview: {cvData.projects[hoveredProject].title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;
