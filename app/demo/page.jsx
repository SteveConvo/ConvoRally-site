"use client";
import { useState, useEffect } from "react";

const LOGO_SRC = "/cr-logo.png";
const bg = "#F3F2EF"; const cardBg = "#FFFFFF"; const ink = "#1C1917"; const mid = "#6B6560";
const soft = "#A8A29E"; const bdr = "#E2DFDA"; const navy = "#1E293B"; const teal = "#0EA5B7";

export default function DemoPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", industry: "", pain: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet"; document.head.appendChild(link);
  }, []);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const go = async () => {
    if (!form.email.includes("@") || !form.name.trim()) return;
    try {
      await fetch("https://formspree.io/f/xeeplzoa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _form: "demo" }),
      });
    } catch (e) {}
    setSubmitted(true);
  };

  const inputStyle = { padding: "14px 16px", borderRadius: 10, border: `1px solid ${bdr}`, fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: "none", width: "100%", background: cardBg };

  return (
    <div style={{ background: bg, color: ink, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <nav style={{ padding: "12px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${bdr}` }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={LOGO_SRC} alt="ConvoRally" style={{ width: 34, height: 34, objectFit: "contain" }} />
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, color: ink }}>ConvoRally</span>
        </a>
        <a href="/how-it-works" style={{ color: mid, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>How It Works</a>
      </nav>

      <section style={{ padding: "80px 24px", maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(30px, 4.5vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 14 }}>
          See if ConvoRally fits your workflow.
        </h1>
        <p style={{ fontSize: 17, color: mid, lineHeight: 1.6, marginBottom: 40 }}>
          Book a short walkthrough and see how ConvoRally handles communication, approvals, proof, and project records.
        </p>

        {submitted ? (
          <div style={{ background: cardBg, border: `1px solid ${bdr}`, borderRadius: 16, padding: "40px 32px", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>{"\u2713"}</div>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 26, fontWeight: 400, marginBottom: 8 }}>We{"'"}ll be in touch.</h2>
            <p style={{ fontSize: 15, color: mid, lineHeight: 1.6 }}>Check your email for scheduling details. Looking forward to showing you what ConvoRally can do for your workflow.</p>
          </div>
        ) : (
          <div style={{ background: cardBg, border: `1px solid ${bdr}`, borderRadius: 16, padding: "32px 28px", textAlign: "left" }}>
            <p style={{ fontSize: 14, color: mid, marginBottom: 20 }}>Tell us a little about your workflow and what kind of communication or record-keeping problems you{"'"}re dealing with.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input type="text" placeholder="Your name" value={form.name} onChange={update("name")} style={inputStyle} />
              <input type="email" placeholder="Email" value={form.email} onChange={update("email")} style={inputStyle} />
              <input type="text" placeholder="Company (optional)" value={form.company} onChange={update("company")} style={inputStyle} />
              <select value={form.industry} onChange={update("industry")} style={{ ...inputStyle, color: form.industry ? ink : soft }}>
                <option value="">Your industry</option>
                <option value="construction">Construction & Trades</option>
                <option value="property-mgmt">Property Management</option>
                <option value="hoa">HOA Management</option>
                <option value="forensics">Building Forensics</option>
                <option value="disaster">Disaster Recovery</option>
                <option value="startup">Startups & Tech</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="What's your biggest communication or record-keeping pain point right now?" value={form.pain} onChange={update("pain")} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              <input type="tel" placeholder="Phone (optional)" value={form.phone} onChange={update("phone")} style={inputStyle} />
              <button onClick={go} disabled={!form.email.includes("@") || !form.name.trim()} style={{
                background: form.email.includes("@") && form.name.trim() ? navy : bdr,
                color: "#fff", border: "none", borderRadius: 10, padding: "16px 0",
                fontSize: 16, fontWeight: 600, cursor: form.email.includes("@") ? "pointer" : "default",
                fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s", marginTop: 4,
              }}>Book My Demo</button>
            </div>
            <p style={{ fontSize: 13, color: soft, marginTop: 16, textAlign: "center" }}>
              Not ready for a demo? <a href="/#waitlist" style={{ color: teal, textDecoration: "none", fontWeight: 500 }}>Join early access instead.</a>
            </p>
          </div>
        )}
      </section>

      <section style={{ padding: "50px 24px", maxWidth: 520, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 22, fontWeight: 400, marginBottom: 16, textAlign: "center" }}>In your walkthrough, we{"'"}ll show you how ConvoRally can help with:</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {["Clearer communication tied to the work", "Tracked approvals and changes", "Proof tied to what was completed", "Easier project history", "Workflows that are easier to trust later"].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 15, color: mid }}>
              <span style={{ color: "#0EA5B7", fontSize: 16 }}>{"✓"}</span>{item}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, padding: "16px 20px", background: "#FFFFFF", border: "1px solid #E2DFDA", borderRadius: 10, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "#A8A29E", lineHeight: 1.6 }}>The first 100 qualifying account holders will receive Founding 100 status, with access to a private member community, direct feedback channels, and early member perks.</p>
        </div>
      </section>

      <footer style={{ padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, fontStyle: "italic", color: ink, marginBottom: 16 }}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p>
        <a href="/" style={{ fontSize: 13, color: soft, textDecoration: "none" }}>{"\u2190"} Back to ConvoRally.com</a>
      </footer>
    </div>
  );
}
