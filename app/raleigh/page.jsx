"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "data:image/jpeg;base64,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";

const cream = "#FBF8F3";
const ink = "#1C1917";
const mid = "#6B6560";
const soft = "#A8A29E";
const warmWhite = "#FFFFFF";
const warmBorder = "#E7E0D8";
const red = "#D93025";
const teal = "#0EA5B7";
const gold = "#D97706";
const navy = "#1E293B";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}
function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (<div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s` }}>{children}</div>);
}

export default function RaleighPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet"; document.head.appendChild(link);
  }, []);
  const go = () => { if (email.includes("@")) setSubmitted(true); };

  const industries = [
    { label: "Construction & Trades", href: "/remodeling", icon: "\u{1F3D7}\uFE0F" },
    { label: "Property Management", href: "/property-management", icon: "\u{1F3E2}" },
    { label: "HOA Management", href: "/hoa", icon: "\u{1F3D8}\uFE0F" },
    { label: "Building Forensics", href: "/building-forensics", icon: "\u{1F50D}" },
    { label: "Disaster Recovery", href: "/disaster-recovery", icon: "\u{1F32A}\uFE0F" },
    { label: "Startups & Tech", href: "/startups", icon: "\u{1F680}" },
    { label: "Something else", href: "#signup", icon: "\u{2728}" },
  ];

  return (
    <div style={{ background: cream, color: ink, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>

      {/* Simple nav */}
      <nav style={{ padding: "16px 40px", display: "flex", justifyContent: "center" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={LOGO_SRC} alt="ConvoRally" style={{ width: 34, height: 34, objectFit: "contain" }} />
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, color: ink }}>ConvoRally</span>
        </a>
      </nav>

      {/* ============ HERO ============ */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "50px 24px 40px", maxWidth: 640, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${navy}08`, border: `1px solid ${navy}18`, borderRadius: 100, padding: "6px 18px", marginBottom: 28, fontSize: 13, fontWeight: 600, color: navy }}>
            Raleigh Startup Week 2026
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.12, marginBottom: 20, letterSpacing: "-0.02em" }}>
            How did we get here?
          </h1>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 22, fontStyle: "italic", color: mid, lineHeight: 1.5, marginBottom: 20, maxWidth: 500 }}>
            You asked the right question.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{ fontSize: 17, color: mid, maxWidth: 480, lineHeight: 1.7, marginBottom: 16 }}>
            Every project that goes sideways starts the same way: a conversation that never got written down. A handshake that both sides remember differently. A scope that shifted without anyone confirming the change.
          </p>
        </FadeIn>

        <FadeIn delay={0.26}>
          <p style={{ fontSize: 17, color: ink, fontWeight: 500, maxWidth: 480, lineHeight: 1.65, marginBottom: 40 }}>
            ConvoRally is where conversations, approvals, and payments come together — so no one can say {'"'}that{"'"}s not what we agreed to.{'"'}
          </p>
        </FadeIn>
      </section>

      {/* ============ THE ANSWER ============ */}
      <section style={{ background: navy, color: "#fff", padding: "60px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <p style={{ fontSize: 13, fontWeight: 600, color: gold, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>The short answer</p>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 400, lineHeight: 1.5 }}>
              Conversation becomes <span style={{ color: "#7DD3FC" }}>agreement</span>.{" "}
              Agreement becomes <span style={{ color: "#FCA5A5" }}>responsibility</span>.{" "}
              Responsibility gets <span style={{ color: "#FCD34D" }}>verified</span>.{" "}
              Verification triggers <span style={{ color: "#86EFAC" }}>payment</span>.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", marginTop: 20 }}>
              Every step time-stamped. Every party accountable. One record of truth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============ RECOGNITION ============ */}
      <section style={{ padding: "60px 24px", maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <p style={{ fontSize: 13, fontWeight: 600, color: red, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Sound familiar?</p>
        </FadeIn>
        {[
          "\"I thought that was included.\"",
          "\"Who approved that?\"",
          "\"That's not what we agreed to.\"",
          "\"When did that change?\"",
          "\"I never got that email.\"",
        ].map((q, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 22, fontStyle: "italic", color: ink, lineHeight: 1.4, marginBottom: 12 }}>{q}</p>
          </FadeIn>
        ))}
        <FadeIn delay={0.4}>
          <p style={{ fontSize: 15, color: soft, marginTop: 20, lineHeight: 1.6 }}>
            These sentences cost businesses thousands every month. ConvoRally makes sure they never happen again.
          </p>
        </FadeIn>
      </section>

      {/* ============ WHAT'S YOUR WORLD? ============ */}
      <section style={{ padding: "50px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 400, marginBottom: 12 }}>
              What{"'"}s your world?
            </h2>
            <p style={{ fontSize: 15, color: mid, marginBottom: 28, lineHeight: 1.5 }}>
              We{"'"}re building ConvoRally with early adopters in every industry. Tap yours to see how it works for you.
            </p>
          </FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {industries.map((ind, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <a href={ind.href} style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: warmWhite, border: `1px solid ${warmBorder}`, borderRadius: 10,
                  padding: "11px 18px", textDecoration: "none", fontSize: 14, fontWeight: 500, color: ink,
                  transition: "all 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}>
                  <span>{ind.icon}</span> {ind.label}
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOUNDER — Brief ============ */}
      <section style={{ padding: "50px 24px" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, fontStyle: "italic", color: ink, lineHeight: 1.55, marginBottom: 16 }}>
              {'"'}After 26 years in the trenches, I realized we didn{"'"}t need more {"'"}management.{"'"} We needed a receipt.{'"'}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: navy, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 15, color: "#fff" }}>SB</div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: ink }}>Steve Batts</p>
                <p style={{ fontSize: 12, color: soft }}>Founder & CEO, ConvoRally</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="signup" style={{ background: navy, color: "#fff", padding: "70px 24px", textAlign: "center" }}>
        <FadeIn>
          <img src={LOGO_SRC} alt="" style={{ width: 44, height: 44, objectFit: "contain", marginBottom: 16, opacity: 0.9 }} />
        </FadeIn>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 400, lineHeight: 1.25, marginBottom: 12 }}>
            Change your trajectory.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 400, margin: "0 auto 28px", lineHeight: 1.6 }}>
            Join the early adopter channel. We{"'"}ll invite you into a live ConvoRally project where you help shape the tool your industry needs.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          {submitted ? (
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "20px 28px" }}>
              <span style={{ fontSize: 26 }}>{"\u2713"}</span>
              <p style={{ fontSize: 16, fontWeight: 600 }}>You{"'"}re in.</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 280 }}>Check your email for your channel invite.</p>
            </div>
          ) : (
            <div style={{ maxWidth: 400, margin: "0 auto" }}>
              <div style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: 5 }}>
                <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && go()} style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 15, padding: "10px 12px", fontFamily: "'DM Sans', sans-serif" }} />
                <button onClick={go} style={{ background: "#fff", color: navy, border: "none", borderRadius: 7, padding: "11px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>Join</button>
              </div>
            </div>
          )}
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "36px 24px 28px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, fontStyle: "italic", color: ink, marginBottom: 16 }}>
          If it{"'"}s not in ConvoRally, it didn{"'"}t happen.
        </p>
        <a href="/" style={{ fontSize: 13, color: soft, textDecoration: "none" }}>{"\u2190"} Visit the main site</a>
      </footer>
    </div>
  );
}
