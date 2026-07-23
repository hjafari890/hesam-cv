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
      title: "Edge AI Classifier",
      year: "2026",
      organization: "TinyML & Distillation",
      description: "Implementing Tiny ML models and JEPA+distillation methods on Single-Board Computers (SBCs) for real-time PV panel defect detection at the edge.",
      videoSrc: "edge-classifier.mp4"
    },
    {
      title: "Medical Sensor Shield",
      year: "2026",
      organization: "Hardware & PCB Design",
      description: "Designed and prototyped a multi-sensor actuator shield for the TI CC2650 SoC, integrating analog front-ends, I\u00B2C sensor buses, and GPIO-driven actuators onto a compact 4-layer PCB. The testbed enables rapid iteration of body-area network experiments — from impedance sensing to haptic feedback — with full KiCad schematics and board files.",
      videoSrc: "medcal-shield.mp4"
    },
    {
      title: "Powertrain Electronics",
      year: "2026",
      organization: "Hardware & Firmware",
      description: "Reverse-engineered a VESC 6-based motor controller to understand its gate-driver topology and current-sensing architecture. Co-developed custom firmware modules for torque-vectoring logic and thermal management on an STM32 target, supporting a Formula Student electric powertrain with real-time CAN telemetry.",
      videoSrc: "powertrain.mp4"
    },
    {
      title: "Edge AI Step Counter & Fall Detector",
      year: "2026",
      organization: "TinyML & Wearables",
      description: "Built low-power wearable sensor nodes on the Raspberry Pi Pico W, running quantized TinyML models for real-time step counting and fall detection. The pipeline spans raw IMU acquisition, feature windowing, on-device inference at under 50 ms latency, and BLE alert dispatch — all within a 30 mA power budget.",
      videoSrc: "edge-ai.mp4"
    },
    {
      title: "Distributed Gas Monitoring",
      year: "2026",
      organization: "Industrial IoT",
      description: "Engineered an end-to-end Industrial IoT system for continuous hydrogen leak prediction. Edge nodes perform local ML inference on electrochemical sensor streams, while a Raspberry Pi 5 backend aggregates data via MQTT, runs ensemble models, and serves a real-time dashboard for plant-floor operators.",
      videoSrc: "gas-monitor.mp4"
    },
    {
      title: "Wearable Health Monitor",
      year: "2025",
      organization: "Embedded Systems",
      description: "Developed a compact ESP32-based wearable that captures microphone and accelerometer data overnight to classify snoring events using FFT-based spectral features. The device correlates audio patterns with body position, providing a low-cost sleep-quality assessment tool with SD card logging and morning summary reports.",
      videoSrc: "health-monitor.mp4"
    },
    {
      title: "Jammer Detector",
      year: "2026",
      organization: "SDR & Machine Learning",
      description: "Built a software-defined radio monitoring station using an RTL-SDR receiver to scan the LTE uplink band in real time. Extracted statistical features — kurtosis, spectral entropy, and peak-to-average ratio — and trained a Random Forest classifier to distinguish intentional jamming from normal interference with over 94% accuracy.",
      videoSrc: "jammer-detector.mp4"
    },
    {
      title: "Biomedical Measurement",
      year: "2026",
      organization: "Data Analysis",
      description: "Collected physiological signals using clinical-grade instruments — including ECG, EMG, and bioimpedance analyzers — and performed systematic analysis in OriginLab. Work covered signal conditioning, artifact rejection, statistical feature extraction, and publication-ready figure generation for laboratory reports.",
      videoSrc: "biomedical.mp4"
    },
    {
      title: "Electronics Simulation",
      year: "2025",
      organization: "Finite Element Analysis",
      description: "Utilized COMSOL Multiphysics to run finite element simulations evaluating the electromagnetic and thermal performance of biomedical sensor geometries. Performed parameter sweeps across electrode spacing, substrate materials, and excitation frequencies to optimize sensitivity-to-noise trade-offs before physical fabrication.",
      videoSrc: "simulation.mp4"
    },
    {
      title: "Hybrid Cloud Pipeline",
      year: "2025",
      organization: "Cloud & IoT",
      description: "Architected a containerized Docker/MQTT pipeline for streaming real-time EEG workload data from edge devices to cloud services. Benchmarked Quality-of-Service tiers under varying network conditions to quantify latency, jitter, and packet-loss trade-offs for safety-critical biomedical telemetry applications.",
      videoSrc: "cloud-pipeline.mp4"
    },
    {
      title: "Network Simulation",
      year: "2026",
      organization: "Cloud/Edge Architectures",
      description: "Simulated hybrid cloud/edge deployment topologies to study the impact of workload placement on end-to-end latency in distributed IoT networks. Modeled realistic traffic patterns, evaluated fog-node caching strategies, and produced comparative latency-vs-cost analyses for different architectural configurations.",
      videoSrc: "network-sim.mp4"
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
