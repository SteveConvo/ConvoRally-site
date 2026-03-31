"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "/cr-logo.png";

const bg = "#F3F2EF"; const cardBg = "#FFFFFF"; const ink = "#1C1917"; const mid = "#6B6560";
const soft = "#A8A29E"; const border = "#E2DFDA";
const red = "#D93025"; const teal = "#0EA5B7"; const gold = "#D97706"; const navy = "#1E293B";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } }, { threshold }); obs.observe(el); return () => obs.disconnect(); }, [threshold]);
  return [ref, inView];
}
function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (<div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s` }}>{children}</div>);
}

export default function RemodelingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet"; document.head.appendChild(link);
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = () => { if (email.includes("@")) setSubmitted(true); };

  return (
    <div style={{ background: bg, color: ink, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "10px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", background: scrollY > 50 ? "rgba(243,242,239,0.95)" : "transparent", backdropFilter: scrollY > 50 ? "blur(20px)" : "none", borderBottom: scrollY > 50 ? `1px solid ${border}` : "1px solid transparent", transition: "all 0.3s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}><img src={LOGO_SRC} alt="ConvoRally" style={{ width: 34, height: 34, objectFit: "contain" }} /><span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, color: ink }}>ConvoRally</span></a>
          <span style={{ color: border, margin: "0 4px", fontSize: 18 }}>/</span>
          <span style={{ fontSize: 14, color: mid, fontWeight: 500 }}>Construction & Trades</span>
        </div>
        <a href="#cta" style={{ background: navy, color: "#fff", padding: "9px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Get Early Access</a>
      </nav>

      <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "130px 24px 80px" }}>
        <FadeIn><p style={{ fontSize: 14, fontWeight: 600, color: red, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>For Remodeling, Construction & Custom Trades</p></FadeIn>
        <FadeIn delay={0.08}><h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(38px, 5.5vw, 68px)", fontWeight: 400, lineHeight: 1.08, maxWidth: 700, marginBottom: 24, letterSpacing: "-0.02em" }}>{'"'}I thought that was <span style={{ fontStyle: "italic", color: red }}>included.{'"'}</span></h1></FadeIn>
        <FadeIn delay={0.18}><p style={{ fontSize: 19, color: mid, maxWidth: 540, lineHeight: 1.7, marginBottom: 36 }}>That sentence has cost contractors, woodworkers, trades, and homeowners a lot of money. ConvoRally makes sure scope, material selections, changes, and payments are written down, confirmed, and time-stamped — so nobody pays for assumptions.</p></FadeIn>
        <FadeIn delay={0.28}><a href="#cta" style={{ background: navy, color: "#fff", padding: "15px 36px", borderRadius: 10, fontSize: 16, fontWeight: 600, textDecoration: "none", boxShadow: "0 4px 20px rgba(30,41,59,0.15)" }}>Get Early Access</a></FadeIn>
      </section>

      <section style={{ background: navy, color: "#fff", padding: "70px 24px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <FadeIn><div style={{ textAlign: "center", marginBottom: 48 }}><h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 400, lineHeight: 1.25 }}>Good contractors lose money <span style={{ fontStyle: "italic", color: gold }}>to bad documentation.</span></h2></div></FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { title: "Scope creep", desc: "Scope creep can quietly destroy margins when changes aren't documented as they happen.", color: "#FCA5A5" },
              { title: "Verbal change orders", desc: "Verbal change orders create expensive fights when the final invoice doesn't match expectations.", color: "#7DD3FC" },
              { title: "Payment delays", desc: "Payment delays get worse when nobody can prove what changed, what was approved, or what was completed.", color: "#FCD34D" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}><div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "28px 22px" }}><p style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: item.color }}>{item.title}</p><p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 24px", maxWidth: 800, margin: "0 auto" }}>
        <FadeIn><div style={{ textAlign: "center", marginBottom: 56 }}><p style={{ fontSize: 13, fontWeight: 600, color: teal, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Built for the Jobsite</p><h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 400, lineHeight: 1.2 }}>From estimate to final payment — <span style={{ fontStyle: "italic", color: teal }}>one clear record.</span></h2></div></FadeIn>
        {[
          { icon: "\u{1F4CB}", title: "Estimates that lock in", desc: "Send an estimate through ConvoRally. When the client confirms, it becomes part of the live project record — not a PDF lost in an email thread.", color: teal },
          { icon: "\u{1F3A8}", title: "Material and finish approvals", desc: "Walnut first, white oak later? Every material change, finish selection, and spec revision gets confirmed before you order, cut, or install.", color: red },
          { icon: "\u{1F504}", title: "Change orders with receipts", desc: "Scope changes happen. When they do, both sides confirm the change, the new price, and the timing before work continues.", color: gold },
          { icon: "\u{1F4F8}", title: "Photo-verified milestones", desc: "Rough-in complete? Cabinets installed? Document it with photos, get sign-off, and move to the next step.", color: navy },
          { icon: "\u{1F4B3}", title: "Milestone-based payments", desc: "Payment is tied to verified completion. Everyone can see what was agreed to, what was done, and what is owed.", color: "#16a34a" },
          { icon: "\u{1F465}", title: "Subs and trades in the loop", desc: "Subcontractors and specialty trades can see their scope, their tasks, and their timing without having to chase down the whole story.", color: mid },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.08}><div style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "26px 0", borderBottom: i < 5 ? `1px solid ${border}` : "none" }}><span style={{ fontSize: 26, minWidth: 32 }}>{item.icon}</span><div><h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 21, fontWeight: 400, marginBottom: 5, color: ink }}>{item.title}</h3><p style={{ fontSize: 14, color: mid, lineHeight: 1.65, maxWidth: 560 }}>{item.desc}</p></div></div></FadeIn>
        ))}
      </section>

      <section style={{ padding: "80px 24px", background: "#ECEAE5" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <FadeIn><div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 400, lineHeight: 1.25 }}>Everyone remembers it differently. <span style={{ fontStyle: "italic", color: red }}>Until it{"'"}s written down.</span></h2></div></FadeIn>
          {[
            { quote: "We agreed on white oak for the shelving. The client says they said walnut. I ate the cost.", role: "Custom woodworker, 14 years" },
            { quote: "The homeowner asked for an extra outlet. I said $400 more. They agreed verbally. When the invoice came, they said they never approved it.", role: "General contractor" },
            { quote: "The final bill was $8,000 more than the estimate. He says the changes were approved. I don't remember agreeing to half of them.", role: "Homeowner" },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}><div style={{ position: "relative", paddingLeft: 28, marginBottom: 28 }}><div style={{ position: "absolute", left: 0, top: 0, width: 4, height: "100%", borderRadius: 2, background: i === 0 ? red : i === 1 ? gold : teal }} /><p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 19, fontStyle: "italic", color: ink, lineHeight: 1.55, marginBottom: 8 }}>{'"'}{item.quote}{'"'}</p><p style={{ fontSize: 13, color: soft }}>— {item.role}</p></div></FadeIn>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 24px", maxWidth: 920, margin: "0 auto" }}>
        <FadeIn><div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 400, lineHeight: 1.25 }}>Built for every side of the project.</h2></div></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 }}>
          {[
            { role: "General Contractors", desc: "Protect your margins with documented scope, verified milestones, and a searchable record.", color: red },
            { role: "Custom Woodworkers", desc: "Lock in material specs, finish selections, and design approvals before you cut the first board.", color: gold },
            { role: "Subcontractors", desc: "See your scope clearly, confirm your tasks, and get paid when the work is verified.", color: teal },
            { role: "Homeowners", desc: "Know what you're paying for, what changed, and what happens next.", color: navy },
            { role: "Designers & Architects", desc: "Track spec changes, approvals, and sign-offs in one shared record.", color: mid },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.06}><div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 14, padding: "24px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}><div style={{ width: 32, height: 4, borderRadius: 2, background: item.color, marginBottom: 14 }} /><h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, fontWeight: 400, marginBottom: 5, color: ink }}>{item.role}</h3><p style={{ fontSize: 13, color: mid, lineHeight: 1.6 }}>{item.desc}</p></div></FadeIn>
          ))}
        </div>
      </section>

      <section id="cta" style={{ background: navy, color: "#fff", padding: "90px 24px", textAlign: "center" }}>
        <FadeIn><img src={LOGO_SRC} alt="" style={{ width: 48, height: 48, objectFit: "contain", marginBottom: 18, opacity: 0.9 }} /></FadeIn>
        <FadeIn><h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 14 }}>Stop losing money to memory gaps.</h2></FadeIn>
        <FadeIn delay={0.1}><p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 460, margin: "0 auto 10px", lineHeight: 1.6 }}>Join early access and help us shape ConvoRally for contractors, woodworkers, and trades.</p><p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", maxWidth: 400, margin: "0 auto 32px" }}>Share a real pain point from the field and help us build the record your trade actually needs.</p></FadeIn>
        <FadeIn delay={0.2}>
          {submitted ? (
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "20px 28px" }}><span style={{ fontSize: 26 }}>{"\u2713"}</span><p style={{ fontSize: 16, fontWeight: 600 }}>You{"'"}re in.</p><p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 300 }}>Check your email for your early access invite.</p></div>
          ) : (
            <div style={{ maxWidth: 440, margin: "0 auto" }}><div style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: 5 }}><input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && go()} style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 15, padding: "10px 12px", fontFamily: "'DM Sans', sans-serif" }} /><button onClick={go} style={{ background: "#fff", color: navy, border: "none", borderRadius: 7, padding: "11px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>Get Early Access</button></div></div>
          )}
        </FadeIn>
      </section>

      <footer style={{ padding: "52px 24px 36px", maxWidth: 800, margin: "0 auto" }}>
        <FadeIn><p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(18px, 2.8vw, 26px)", fontStyle: "italic", textAlign: "center", color: ink, marginBottom: 28 }}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p></FadeIn>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderTop: `1px solid ${border}`, paddingTop: 20 }}><div style={{ display: "flex", alignItems: "center", gap: 8 }}><img src={LOGO_SRC} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} /><span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 15, color: soft }}>ConvoRally</span></div><a href="/" style={{ fontSize: 13, color: soft, textDecoration: "none" }}>{"\u2190"} Back to main site</a></div>
      </footer>
    </div>
  );
}
