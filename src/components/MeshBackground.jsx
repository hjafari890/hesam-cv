import React from 'react';
import { motion } from 'framer-motion';

const MeshBackground = ({ isPcbMode = false }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      backgroundColor: isPcbMode ? '#070f0c' : '#f5f7fa',
      transition: 'background-color 0.8s ease',
      overflow: 'hidden'
    }}>
      {/* Orb 1 - Top Right */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 50, -150, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          backgroundColor: isPcbMode ? 'hsla(160, 100%, 45%, 0.35)' : 'hsla(212, 100%, 85%, 0.8)',
          filter: 'blur(80px)',
          transition: 'background-color 0.8s ease'
        }}
      />

      {/* Orb 2 - Bottom Left */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          backgroundColor: isPcbMode ? 'hsla(185, 100%, 50%, 0.3)' : 'hsla(270, 70%, 88%, 0.7)',
          filter: 'blur(100px)',
          transition: 'background-color 0.8s ease'
        }}
      />

      {/* Orb 3 - Center */}
      <motion.div
        animate={{
          x: [0, -50, 100, 0],
          y: [0, 150, -50, 0],
          scale: [1, 1.1, 1.4, 1],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          backgroundColor: isPcbMode ? 'hsla(140, 100%, 40%, 0.25)' : 'hsla(40, 90%, 92%, 0.6)',
          filter: 'blur(90px)',
          transition: 'background-color 0.8s ease'
        }}
      />

      {/* PCB Circuit Overlay Pattern */}
      {isPcbMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300ffaa' stroke-width='1.2' stroke-opacity='0.6'%3E%3Cpath d='M0 20h30l10 10h40M80 60H50L40 50H0M20 0v20M60 80V60'/%3E%3Ccircle cx='40' cy='30' r='3' fill='%2300ffaa'/%3E%3Ccircle cx='40' cy='50' r='3' fill='%2300ffaa'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
            pointerEvents: 'none'
          }}
        />
      )}

      {/* The Melting Glass Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backdropFilter: 'blur(100px) saturate(110%)',
        backgroundColor: isPcbMode ? 'rgba(5, 15, 10, 0.4)' : 'rgba(255, 255, 255, 0.2)',
        transition: 'background-color 0.8s ease'
      }} />
    </div>
  );
};

export default MeshBackground;
