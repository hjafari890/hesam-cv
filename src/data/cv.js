export const cvData = {
  personal: {
    name: "Hesamoddin Jafari",
    location: "Oulu, Finland",
    email: "Hjafari25@student.oulu.fi",
    phone: "+358 (44) 9521-323",
    linkedin: "LinkedIn.com/in/hesam-jafari",
    summary: "Biomedical Engineering master's student specializing in IoT, with a strong focus on wearable sensing, edge intelligence, and medical time-series analysis. My projects include JEPA-inspired and TinyML-based edge classification, wearable activity and sleep monitoring, and distributed pipelines for physiological and sensor data. I am particularly interested in building adaptive health-monitoring systems that connect large-scale representation learning with efficient and reliable deployment at the edge."
  },
  education: [
    {
      institution: "University of Oulu",
      location: "Oulu, Finland",
      degree: "Master's degree in biomedical Eng., Specialization in IoT",
      gpa: "GPA 4.9/5",
      period: "2025-Present"
    },
    {
      institution: "Islamic Azad University",
      location: "Tehran, Iran",
      degree: "B.Sc. in biomedical Eng., Specialization in electronics",
      gpa: "GPA 3.45/4",
      period: "2014-2019"
    },
    {
      institution: "Allamah Tabatabai University",
      location: "Tehran, Iran",
      degree: "M.A in Auditing",
      gpa: "GPA 3.88/4",
      period: "2019-2023",
      thesis: "Thesis: 'Investigation of the Moderating Effect of Professional Skepticism in Audit Quality and Fraudulent Financial Reporting'"
    }
  ],
  experience: [
    {
      company: "Islamic Azad University",
      location: "Tehran, Iran",
      period: "2024/09-2025/06",
      role: "University Instructor (PhD Student)",
      description: "Delivered 'English for Accounting I, II' and 'Research Methodology' to undergraduates."
    },
    {
      company: "Takhte-gaz Automotive Magazine",
      location: "Tehran, Iran",
      period: "2014/07-2016/03",
      role: "Journalist & Technical Product Analyst",
      description: "Authored over 15 publications on engineering and product analysis."
    }
  ],
  projects: [
    {
      title: "Edge AI Defect Classifier",
      year: "2026",
      organization: "EDGE AI & COMPUTER VISION",
      description: "Designed a compressed, self-supervised CNN-ViT fused architectures using JEPA and SEED knowledge distillation for real-time solar panel defect classification. Optimized for single-board computers to deliver low latency, local data privacy and edge execution.",
      images: ["/images/jepa/1.webp", "/images/jepa/2.webp", "/images/jepa/3.webp", "/images/jepa/4.webp", "/images/jepa/5.webp", "/images/jepa/6.webp"],
      technologies: ["SSL", "JEPA", "TinyML", "Knowledge Distillation", "Vision Transformers (ViT)"]
    },
    {
      title: "TI CC2650 Medical Sensor Shield",
      year: "2026",
      organization: "HARDWARE & MIXED-SIGNAL PCB DESIGN",
      description: "Designed a 4-layer mixed-signal PCB testbed for the Texas Instrument CC2650. Integrated high-precision 24-bit AFE (ECG/respiration) and PPG sensor hub. Implementing isolated domains, bidirectional level translation, trace topology, and BOM optimization for fabrication.",
      images: ["/images/bme shield/1.webp", "/images/bme shield/3.webp", "/images/bme shield/5.webp"],
      technologies: ["KiCad", "PCB", "Electronic design", "Assembly", "Comms protocols", "Analog Front-End"]
    },
    {
      title: "High-Power VESC Motor Controller",
      year: "2026",
      organization: "POWER ELECTRONICS & EMBEDDED SYSTEMS",
      description: "Co-developed a reverse-engineered, high-power (75V/300A) 3-phase VESC motor controller for a Formula Student Hybrid race car. 18-MOSFET inverter stage with inline current sensing and customized ChibiOS firmware executing Field-Oriented Control (FOC) over CAN bus.",
      images: ["/images/vesc/1.webp", "/images/vesc/2.webp", "/images/vesc/3.webp", "/images/vesc/4.webp", "/images/vesc/5.webp", "/images/vesc/6.webp"],
      technologies: ["STM32", "RTOS", "CAN Bus", "Embedded C", "Powertrain Electronics", "Motor Control"]
    },
    {
      title: "Pico AI Step Counter & Fall Detector",
      year: "2026",
      organization: "WEARABLE IoT & EDGE AI",
      description: "Architected and deployed a hybrid edge-cloud wearable system using an RP2040-based Edge AI node for activity recognition and fall detection. Deployed a decision tree model in MicroPython, achieving +90% accuracy, 13ms local AI processing latency, and robust Wi-Fi MQTT telemetry via Node-RED.",
      images: ["/images/step counter/1.webp", "/images/step counter/2.webp", "/images/step counter/3.webp"],
      technologies: ["Pi Pico W (RP2040)", "TinyML", "MicroPython", "Decision Trees", "MQTT", "Node-RED"]
    },
    {
      title: "IoT Hydrogen Leak Prediction",
      year: "2026",
      organization: "INDUSTRIAL IoT & AI",
      description: "Built a modular, production-grade Industrial IoT safety platform using custom ESP32 sensor nodes. Deployed a predictive XGBoost AI engine on a Raspberry Pi 5 gateway to predict hydrogen leak locations, severity, and risk scores over MQTT to a central dashboard.",
      images: ["/images/hydrogen/1.webp", "/images/hydrogen/2.webp", "/images/hydrogen/3.webp", "/images/hydrogen/4.webp", "/images/hydrogen/5.webp"],
      technologies: ["ESP32", "Raspberry Pi 5", "XGBoost AI", "MQTT", "Custom PCB", "C / Python"]
    },
    {
      title: "Sleep Position & Snore Monitoring",
      year: "2025",
      organization: "WEARABLE & DSP",
      description: "Developed an ESP32 wearable health device for snore detection and body orientation tracking. Combined I2S audio sampling, 128-point FFT processing, and IMU telemetry to analyze and visualize the correlation between sleep position and snoring intensity.",
      images: ["/images/sleep fft/1.webp", "/images/sleep fft/2.webp", "/images/sleep fft/3.webp", "/images/sleep fft/4.webp", "/images/sleep fft/5.webp", "/images/sleep fft/6.webp"],
      technologies: ["ESP32", "FFT/DSP", "MATLAB", "C"]
    },
    {
      title: "SDR Jammer Detector",
      year: "2026",
      organization: "RF SECURITY & MACHINE LEARNING",
      description: "Built a functional, SDR monitoring station to detect LTE interference. Processed statistical features (Kurtosis, Entropy) from raw IQ data and integrated Random Forest ML models to classify jamming, displaying live risk on a GPU-accelerated PyQt6 dashboard.",
      images: ["/images/sdr/1.webp", "/images/sdr/2.webp", "/images/sdr/3.webp", "/images/sdr/4.webp", "/images/sdr/5.webp", "/images/sdr/6.webp"],
      technologies: ["SDR", "Machine Learning", "Python", "Random Forest", "PyQt6", "DSP"]
    },
    {
      title: "Hybrid Powertrain Simulator",
      year: "2026",
      organization: "POWERTRAIN & VEHICLE SIMULATION",
      description: "Co-developed a web-based Hybrid Electric Vehicle (HEV) powertrain simulator integrated with Simulink for Formula Student Oulu race car. Modeled ICE and electric motor power split, battery State-of-Charge (SoC), and lap energy management to strategies and optimize endurance performance.",
      images: ["/images/hev sim/1.webp", "/images/hev sim/2.webp", "/images/hev sim/3.webp", "/images/hev sim/4.webp"],
      technologies: ["MATLAB", "Python", "Simulation", "HEV Energy Management", "Vehicle Dynamics"]
    },
    {
      title: "Hemodynamic Signal Processing",
      year: "2026",
      organization: "SIGNAL PROCESSING",
      description: "Functional Near-Infrared Spectroscopy (fNIRS) signal processing to quantify cerebral hemodynamic responses. Implemented kinematic motion-artifact decoupling, time-frequency spectral decomposition, and parametric noise suppression in OriginLab.",
      images: ["/images/hemodynamic/1.webp", "/images/hemodynamic/3.webp", "/images/hemodynamic/4.webp"],
      technologies: ["OriginLab", "fNIRS", "Bio-optics", "Corticovascular Analytics", "DSP", "MATLAB"]
    },
    {
      title: "Thermal Flow Sensor Simulation",
      year: "2025",
      organization: "MULTIPHYSICS SIMULATION & FEA",
      description: "Modeled and optimized a calorimetric thermal flow sensor for transformer oil using COMSOL Multiphysics. Coupled Laminar Flow and Heat Transfer physics with Wheatstone bridge signal conditioning to achieve 5.4% response nonlinearity for precision low-flow measurement.",
      images: ["/images/comsol/1.webp", "/images/comsol/2.webp", "/images/comsol/3.webp"],
      technologies: ["COMSOL Multiphysics", "Finite Element Analysis (FEA)", "Analog Signal Conditioning"]
    },
    {
      title: "Distributed Network Simulation",
      year: "2026",
      organization: "DISTRIBUTED COMPUTING & NETWORKING",
      description: "Simulated multi-tier distributed network architectures (Cloud, Edge, Mist) using CloudSim and PureEdgeSim. Evaluated VM scheduling policies, MIPS allocation, and WAN/LAN bottlenecks to optimize task latency, energy efficiency, and throughput in hybrid cloud-edge topologies.",
      images: ["/images/network sim/1.webp", "/images/network sim/2.webp", "/images/network sim/3.webp", "/images/network sim/4.webp", "/images/network sim/5.webp"],
      technologies: ["CloudSim", "PureEdgeSim", "Java", "Distributed Systems", "Network Optimization"]
    },
    {
      title: "Hybrid Cloud EEG Pipeline",
      year: "2025",
      organization: "HYBRID CLOUD & MICROSERVICES",
      description: "Architected and containerized a microservices pipeline using Docker Compose and MQTT to process EEG telemetry streams. Implemented secure SSL/TLS communication between local edge processors and cloud infrastructure (CSC Rahti/OpenShift) for continuous workload monitoring.",
      images: ["/images/eeg mqtt/1.webp", "/images/eeg mqtt/2.webp"],
      technologies: ["Docker", "MQTT", "Python", "SSL/TLS Security", "Microservices"]
    }
  ],
  activities: [
    {
      title: "Formula Student Oulu",
      institution: "University of Oulu",
      date: "Jan 2026",
      description: "Co-developed a hybrid powertrain simulator (HEV), selected MCU components, and performed SMD soldering."
    },
    {
      title: "OYSTER Kickstart Special Award",
      institution: "University of Oulu",
      date: "November 2025",
      description: "Secured the OYSTER Kickstart Special Award for an innovative hydrogel spray solution for chronic wounds."
    },
    {
      title: "Marketing Team Lead (event)",
      institution: "University of Oulu",
      date: "October 2025",
      description: "Managed project timelines and visual branding for the faculty event."
    }
  ],
  skills: {
    AI: ["Python", "PyTorch", "TinyML", "ML", "time-series analysis", "self-supervised learning", "signal processing", "MATLAB"],
    Edge: ["Docker", "MQTT", "SBCs", "Linux/bash", "distributed systems", "cloud-edge continuum", "Raspberry Pi", "ESP32"],
    Hardware: ["PCB", "industrial sensors", "oscilloscope", "spectrum analyzer", "COMSOL", "EasyEDA", "Biosignal acquisition"],
    Electronics: ["Industrial Sensors", "MCUs", "Op-Amps", "PCB Assembly"],
    Equipment: ["Oscilloscope", "Function Generator", "Digital Multimeter", "Spectrum Analyzer", "LCR meter"],
    Software: ["Gen AI", "Vibe Coding", "Claude Code", "LaTeX", "Google Suite", "Adobe Premiere", "Photoshop", "Resolve"],
    Integrity: ["Technical documentation", "Risk Assessment", "Reporting", "Visual Communication"],
    Interests: ["Embedded Prototyping", "Car Mechanics", "History"]
  }
};
