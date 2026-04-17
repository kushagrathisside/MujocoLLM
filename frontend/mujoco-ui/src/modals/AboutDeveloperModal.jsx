function AboutDeveloperModal({ onClose }) {
  const cardStyle = {
    background: "#111827",
    border: "1px solid #334155",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  };

  const sectionTitle = {
    fontSize: 11,
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 8,
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 1100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: 14, width: 600, maxWidth: "100%", padding: 24, fontFamily: "'JetBrains Mono',monospace" }}>
        
        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc" }}>
              Kushagra Srivastava
            </div>
            <div style={{ fontSize: 12, color: "#64748b" }}>
              AI · Robotics · Systems
            </div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#475569", fontSize: 18, cursor: "pointer" }}>✕</button>
        </div>

        {/* ABOUT */}
        <div style={cardStyle}>
          <div style={sectionTitle}>About</div>
          <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.7 }}>
            I’m currently pursuing my MTech at IIIT Allahabad, focusing on robotics and machine intelligence. 
            My work revolves around reinforcement learning, simulation environments, and building systems 
            that scale from research prototypes to real-world applications.
          </div>
        </div>

        {/* WORK */}
        <div style={cardStyle}>
          <div style={sectionTitle}>What I work on</div>
          <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.7 }}>
            • Reinforcement learning & embodied AI<br/>
            • Simulation systems (MuJoCo, physics environments)<br/>
            • Data & backend systems for ML-driven products
          </div>
        </div>

        {/* EXTRA */}
        <div style={cardStyle}>
          <div style={sectionTitle}>Beyond this project</div>
          <div style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.7 }}>
            I lead reinforcement learning initiatives at Robita and explore how intelligent systems 
            can move from controlled environments to real-world impact.
          </div>
        </div>

        {/* LINKS */}
        <div style={cardStyle}>
          <div style={sectionTitle}>Links</div>
          <div style={{ fontSize: 12, color: "#cbd5e1" }}>
            <div>GitHub: github.com/kushagrathisside</div>
            <div>LinkedIn: linkedin.com/in/kushagrathisside</div>
            <div>Email: kushagrathisside@gmail.com</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
          <button onClick={onClose} style={{ padding: "10px 18px", background: "#3b82f6", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutDeveloperModal;