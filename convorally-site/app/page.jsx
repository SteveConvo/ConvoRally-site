"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "data:image/jpeg;base64,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";

// Warm, confident palette
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
const gradient = "linear-gradient(135deg, #D93025, #0EA5B7, #D97706)";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

function TrustChain() {
  const steps = [
    { label: "Conversation", icon: "\u{1F4AC}", color: teal },
    { label: "Agreement", icon: "\u{1F91D}", color: red },
    { label: "Responsibility", icon: "\u{1F4CB}", color: gold },
    { label: "Verification", icon: "\u2713", color: teal },
    { label: "Payment", icon: "\u{1F4B0}", color: "#16a34a" },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % steps.length), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
      {steps.map((s, i) => {
        const isActive = i <= active;
        const isCurrent = i === active;
        return (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            padding: "14px 18px", borderRadius: 12,
            background: isCurrent ? s.color : isActive ? `${s.color}18` : warmWhite,
            border: `2.5px solid ${isActive ? s.color : "#ddd6cc"}`,
            transition: "all 0.4s ease", minWidth: 108,
            transform: isCurrent ? "scale(1.08)" : "scale(1)",
            boxShadow: isCurrent ? `0 6px 24px ${s.color}35` : isActive ? `0 2px 10px ${s.color}15` : "none",
          }}>
            <span style={{ fontSize: 26, filter: isCurrent ? "brightness(1.2)" : "none" }}>{s.icon}</span>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
              color: isCurrent ? "#fff" : isActive ? s.color : "#bbb5ad",
              transition: "color 0.4s",
            }}>{s.label}</span>
          </div>
          {i < steps.length - 1 && (
            <svg width="28" height="14" viewBox="0 0 28 14" style={{ margin: "0 -2px", flexShrink: 0 }}>
              <path d="M3 7 H20 L16 3 M20 7 L16 11" fill="none"
                stroke={i < active ? steps[i+1].color : "#ddd6cc"}
                strokeWidth={i < active ? "2.5" : "1.5"}
                strokeLinecap="round" strokeLinejoin="round"
                style={{ transition: "all 0.4s" }} />
            </svg>
          )}
        </div>
        );
      })}
    </div>
  );
}

function VerticalLink({ title, desc, icon, href, accentColor, delay, tagline }) {
  const [h, setH] = useState(false);
  return (
    <FadeIn delay={delay}>
      <a href={href} style={{ textDecoration: "none", display: "block", height: "100%" }}
         onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
        <div style={{
          background: warmWhite, border: `1px solid ${h ? accentColor : warmBorder}`,
          borderRadius: 14, padding: "28px 24px", transition: "all 0.3s ease",
          cursor: "pointer", transform: h ? "translateY(-5px)" : "translateY(0)", height: "100%",
          display: "flex", flexDirection: "column",
          boxShadow: h ? `0 12px 32px ${accentColor}15` : "0 1px 4px rgba(0,0,0,0.04)",
        }}>
          <div style={{ fontSize: 30, marginBottom: 12 }}>{icon}</div>
          <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, fontWeight: 400, color: ink, marginBottom: 6 }}>{title}</h3>
          <p style={{ fontSize: 14, color: mid, lineHeight: 1.6, flex: 1 }}>{desc}</p>
          <p style={{ fontSize: 14, fontWeight: 600, color: accentColor, marginTop: 14, transition: "opacity 0.3s", opacity: h ? 1 : 0.6 }}>{tagline} {"\u2192"}</p>
        </div>
      </a>
    </FadeIn>
  );
}

export default function ConvoRallyMain() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = () => { if (email.includes("@")) setSubmitted(true); };

  return (
    <div style={{ background: cream, color: ink, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "10px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrollY > 50 ? "rgba(251,248,243,0.95)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? `1px solid ${warmBorder}` : "1px solid transparent",
        transition: "all 0.3s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={LOGO_SRC} alt="ConvoRally" style={{ width: 36, height: 36, objectFit: "contain" }} />
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 21, color: ink }}>ConvoRally</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["Product", "Use Cases", "For Startups"].map((t) => (
            <a key={t} href={t === "For Startups" ? "/startups" : "#"} style={{ color: mid, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{t}</a>
          ))}
          <a href="#waitlist" style={{ background: navy, color: "#fff", padding: "9px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Get Early Access</a>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", textAlign: "center",
        padding: "130px 24px 80px", position: "relative",
      }}>
        <FadeIn>
          <img src={LOGO_SRC} alt="" style={{ width: 68, height: 68, objectFit: "contain", marginBottom: 24 }} />
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(40px, 6.5vw, 76px)", fontWeight: 400,
            lineHeight: 1.05, maxWidth: 760, marginBottom: 28, letterSpacing: "-0.03em", color: ink,
          }}>
            If it{"'"}s not written,
            <br />
            <span style={{ fontStyle: "italic", background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              it{"'"}s not real.
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p style={{ fontSize: 19, color: mid, maxWidth: 520, lineHeight: 1.7, marginBottom: 36 }}>
            The <strong style={{ color: ink, fontWeight: 600 }}>Truth Ledger</strong> for multi-party projects.
            Every conversation, agreement, and milestone — time-stamped, verified, immutable.
          </p>
        </FadeIn>
        <FadeIn delay={0.28}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#waitlist" style={{
              background: navy, color: "#fff", padding: "15px 36px", borderRadius: 10,
              fontSize: 16, fontWeight: 600, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(30,41,59,0.2)", transition: "all 0.2s",
            }}>Join the Conversation</a>
            <a href="#how" style={{
              background: "transparent", color: ink, padding: "15px 36px", borderRadius: 10,
              fontSize: 16, fontWeight: 500, textDecoration: "none", border: `2px solid ${warmBorder}`,
            }}>How It Works</a>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div style={{ marginTop: 56, width: "100%", maxWidth: 700 }}><TrustChain /></div>
        </FadeIn>
      </section>

      {/* ============ PAIN — Bold color block ============ */}
      <section style={{ background: navy, color: "#fff", padding: "90px 24px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: gold, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Where Things Go Wrong</p>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.2 }}>
                Memory gets fuzzy <span style={{ fontStyle: "italic", color: gold }}>when money is involved.</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { q: "\"I thought that was included.\"", a: "Scope assumptions shouldn't cost you $10k. Every agreement gets time-stamped and confirmed by all parties.", icon: "\u{1F4B8}", color: "#FCA5A5" },
              { q: "\"Who told you to do that?\"", a: "Decisions made in texts, calls, and hallways vanish — until they become disputes.", icon: "\u{1F50D}", color: "#7DD3FC" },
              { q: "\"Why is this more than the estimate?\"", a: "Change happens. But when it's not documented in real time, everyone remembers it differently.", icon: "\u{1F4B0}", color: "#FCD34D" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "28px 24px", height: "100%" }}>
                  <div style={{ fontSize: 30, marginBottom: 14 }}>{item.icon}</div>
                  <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 21, fontStyle: "italic", color: item.color, marginBottom: 10, lineHeight: 1.3 }}>{item.q}</p>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how" style={{ padding: "90px 24px", maxWidth: 840, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: teal, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>The Truth Ledger</p>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.2, color: ink }}>
              Trust is good. <span style={{ fontStyle: "italic", color: teal }}>Proof is better.</span>
            </h2>
            <p style={{ fontSize: 16, color: mid, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.6 }}>Where conversations become agreements, and agreements become real.</p>
          </div>
        </FadeIn>
        {[
          { step: "01", title: "Talk naturally", desc: "Use channels the way your team already communicates. ConvoRally captures every conversation in context.", color: teal },
          { step: "02", title: "Lock in agreements", desc: "Turn conversations into time-stamped commitments. Scope, price, timeline — confirmed by all parties.", color: red },
          { step: "03", title: "Verify the work", desc: "Photo documentation, checklists, and stakeholder sign-off. Work is proven, not just reported.", color: gold },
          { step: "04", title: "Release payment", desc: "Payment tied to verified milestones. Everyone sees what was agreed, done, and owed.", color: "#16a34a" },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start", padding: "26px 0", borderBottom: i < 3 ? `1px solid ${warmBorder}` : "none" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: item.color, minWidth: 28, paddingTop: 3 }}>{item.step}</div>
              <div>
                <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 22, fontWeight: 400, marginBottom: 5, color: ink }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: mid, lineHeight: 1.6, maxWidth: 560 }}>{item.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* ============ VERTICALS ============ */}
      <section style={{ padding: "80px 24px 90px", background: warmWhite }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: gold, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Built for Multi-Party Work</p>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.2, color: ink }}>
                The biggest risk isn{"'"}t mistakes. <span style={{ fontStyle: "italic", color: gold }}>It{"'"}s assumptions.</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(215px, 1fr))", gap: 18 }}>
            <VerticalLink icon={"\u{1F3D7}\uFE0F"} title="Construction & Custom Trades" desc="Change orders, material specs, subcontractor coordination, and milestone-verified payments." tagline="Learn more" href="/remodeling" delay={0} accentColor={red} />
            <VerticalLink icon={"\u{1F3E2}"} title="Property Management" desc="Work orders, tenant communications, and vendor accountability." tagline="Learn more" href="/property-management" delay={0.08} accentColor={teal} />
            <VerticalLink icon={"\u{1F3D8}\uFE0F"} title="HOA Management" desc="Board decisions, vendor oversight, and transparent audit trails." tagline="Learn more" href="/hoa" delay={0.16} accentColor={gold} />
            <VerticalLink icon={"\u{1F50D}"} title="Building Forensics" desc="Evidence chains and multi-party coordination for legal scrutiny." tagline="Learn more" href="/building-forensics" delay={0.24} accentColor={navy} />
            <VerticalLink icon={"\u{1F32A}\uFE0F"} title="Disaster Recovery" desc="Multi-agency coordination, volunteer tracking, and FEMA-ready documentation." tagline="Learn more" href="/disaster-recovery" delay={0.32} accentColor={red} />
          </div>
        </div>
      </section>

      {/* ============ FOUNDER — Warm block ============ */}
      <section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", borderRadius: 2, background: gradient }} />
              <div style={{ paddingLeft: 32 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: gold, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>From the Founder</p>
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 17, color: soft, marginBottom: 16 }}>Good people still end up in bad situations.</p>
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 24, fontStyle: "italic", color: ink, lineHeight: 1.5, marginBottom: 20 }}>
                  {'"'}After 26 years in the trenches of high-stakes projects, I realized we didn{"'"}t need more {"'"}management.{"'"} We needed a receipt.
                </p>
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 24, fontStyle: "italic", color: ink, lineHeight: 1.5, marginBottom: 24 }}>
                  I built ConvoRally to be the modular, AI-native record of truth for every industry — from construction to code.{'"'}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: gradient, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, color: "#fff" }}>SB</div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: ink }}>Steve Batts</p>
                    <p style={{ fontSize: 13, color: soft }}>Founder & CEO, ConvoRally</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section style={{ padding: "70px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 56, flexWrap: "wrap" }}>
          {[
            { value: "100%", label: "Conversations Captured", color: red },
            { value: "0", label: "He-said-she-said disputes", color: teal },
            { value: "\u221E", label: "Audit trail depth", color: gold },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 52, color: s.color, fontWeight: 400, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: soft, marginTop: 8 }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 22, fontStyle: "italic", color: soft, marginTop: 44 }}>Clarity isn{"'"}t optional when money is involved.</p>
        </FadeIn>
      </section>

      {/* ============ CTA — Bold block ============ */}
      <section id="waitlist" style={{ background: navy, color: "#fff", padding: "90px 24px", textAlign: "center" }}>
        <FadeIn>
          <img src={LOGO_SRC} alt="" style={{ width: 48, height: 48, objectFit: "contain", marginBottom: 20, opacity: 0.9 }} />
        </FadeIn>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 14 }}>
            Join the conversation. Literally.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 460, margin: "0 auto 10px", lineHeight: 1.6 }}>
            Early adopters get a live ConvoRally channel where the first cohort shapes the product with us.
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", maxWidth: 400, margin: "0 auto 32px" }}>
            Show up, share your pain point, help us build the truth ledger your industry needs.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          {submitted ? (
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "20px 28px" }}>
              <span style={{ fontSize: 26 }}>{"\u2713"}</span>
              <p style={{ fontSize: 16, fontWeight: 600 }}>You{"'"}re in.</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 300 }}>Check your email for your channel invite.</p>
            </div>
          ) : (
            <div style={{ maxWidth: 460, margin: "0 auto" }}>
              <div style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: 5 }}>
                <input type="email" placeholder="you@company.com" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && go()}
                  style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 15, padding: "10px 12px", fontFamily: "'DM Sans', sans-serif" }} />
                <button onClick={go} style={{
                  background: "#fff", color: navy, border: "none", borderRadius: 7,
                  padding: "11px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap",
                }}>Join the Channel</button>
              </div>

            </div>
          )}
        </FadeIn>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ padding: "52px 24px 36px", maxWidth: 880, margin: "0 auto" }}>
        <FadeIn>
          <p style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(20px, 3vw, 28px)", fontStyle: "italic", textAlign: "center",
            marginBottom: 32, background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p>
        </FadeIn>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
          {[
            { l: "Construction & Trades", h: "/remodeling" }, { l: "Property Mgmt", h: "/property-management" },
            { l: "HOA", h: "/hoa" }, { l: "Building Forensics", h: "/building-forensics" },
            { l: "Disaster Recovery", h: "/disaster-recovery" },
            { l: "For Startups & VCs", h: "/startups" },
          ].map((x) => (
            <a key={x.l} href={x.h} style={{ fontSize: 13, color: soft, textDecoration: "none" }}>{x.l}</a>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderTop: `1px solid ${warmBorder}`, paddingTop: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src={LOGO_SRC} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 15, color: soft }}>ConvoRally</span>
          </div>
          <p style={{ fontSize: 12, color: "#ccc" }}>{"©"} 2026 ConvoRally</p>
        </div>
      </footer>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }`}</style>
    </div>
  );
}
