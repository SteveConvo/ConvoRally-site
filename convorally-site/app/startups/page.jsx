"use client";

export default function StartupsPage() {
  return (
    <div style={{
      background: "#FBF8F3", color: "#1C1917", minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif",
      display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
      textAlign: "center", padding: "80px 24px",
    }}>
      <h1 style={{
        fontFamily: "'Instrument Serif', Georgia, serif",
        fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, marginBottom: 16,
      }}>
        For Startups & VCs
      </h1>
      <p style={{ fontSize: 18, color: "#6B6560", maxWidth: 460, lineHeight: 1.6, marginBottom: 32 }}>
        This page is coming soon. In the meantime, head back to the main site to learn about ConvoRally.
      </p>
      <a href="/" style={{
        background: "#1E293B", color: "#fff", padding: "14px 32px", borderRadius: 10,
        fontSize: 16, fontWeight: 600, textDecoration: "none",
      }}>Back to ConvoRally</a>
    </div>
  );
}
