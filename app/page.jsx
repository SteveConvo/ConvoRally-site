"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "/cr-logo.png";

const bg = "#F3F2EF";
const cardBg = "#FFFFFF";
const ink = "#1C1917";
const mid = "#6B6560";
const soft = "#A8A29E";
const border = "#E2DFDA";
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

function VerticalLink({ title, desc, icon, href, accentColor, delay }) {
  const [h, setH] = useState(false);
  return (
    <FadeIn delay={delay}>
      <a href={href} style={{ textDecoration: "none", display: "block", height: "100%" }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
        <div style={{
          background: cardBg, border: `1px solid ${h ? accentColor : border}`,
          borderRadius: 14, padding: "28px 24px", transition: "all 0.3s ease",
          cursor: "pointer", transform: h ? "translateY(-4px)" : "translateY(0)", height: "100%",
          display: "flex", flexDirection: "column",
          boxShadow: h ? `0 10px 28px ${accentColor}12` : "0 1px 4px rgba(0,0,0,0.04)",
        }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
          <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, fontWeight: 400, color: ink, marginBottom: 6 }}>{title}</h3>
          <p style={{ fontSize: 14, color: mid, lineHeight: 1.6, flex: 1 }}>{desc}</p>
          <p style={{ fontSize: 14, fontWeight: 600, color: accentColor, marginTop: 14, opacity: h ? 1 : 0.6, transition: "opacity 0.3s" }}>Learn more {"\u2192"}</p>
        </div>
      </a>
    </FadeIn>
  );
}

export default function ConvoRallyGray() {
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

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "12px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrollY > 50 ? "rgba(243,242,239,0.95)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? `1px solid ${border}` : "1px solid transparent",
        transition: "all 0.3s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={LOGO_SRC} alt="ConvoRally" style={{ width: 36, height: 36, objectFit: "contain" }} />
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 21, color: ink }}>ConvoRally</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[
            { label: "How It Works", href: "/how-it-works" },
            { label: "Use Cases", href: "#industries" },
            { label: "Why ConvoRally", href: "/why" },
            { label: "Community", href: "/community" },
          ].map((t) => (
            <a key={t.label} href={t.href} style={{ color: mid, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{t.label}</a>
          ))}
          <a href="/demo" style={{ background: navy, color: "#fff", padding: "9px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Book a Demo</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "130px 24px 80px" }}>
        <FadeIn>
          <img src={LOGO_SRC} alt="" style={{ width: 64, height: 64, objectFit: "contain", marginBottom: 28 }} />
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400, lineHeight: 1.08, maxWidth: 720, marginBottom: 28, letterSpacing: "-0.025em" }}>
            If it{"'"}s not written,
            <br /><span style={{ fontStyle: "italic" }}>it{"'"}s not real.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p style={{ fontSize: 19, color: mid, maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
            ConvoRally keeps conversations, approvals, changes, and payments in one place — so nobody can say {'"'}that{"'"}s not what we agreed to.{'"'}
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#waitlist" style={{ background: navy, color: "#fff", padding: "15px 36px", borderRadius: 10, fontSize: 16, fontWeight: 600, textDecoration: "none", boxShadow: "0 4px 20px rgba(30,41,59,0.15)" }}>Get Early Access</a>
            <a href="/how-it-works" style={{ background: "transparent", color: ink, padding: "15px 36px", borderRadius: 10, fontSize: 16, fontWeight: 500, textDecoration: "none", border: `1.5px solid ${border}` }}>See How It Works</a>
          </div>
        </FadeIn>
      </section>

      {/* HOW IT WORKS — Static trust flow */}
      <section id="how" style={{ padding: "60px 24px 80px", background: cardBg }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <p style={{ fontSize: 13, fontWeight: 600, color: teal, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>How It Works</p>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 400, lineHeight: 1.5, color: ink, maxWidth: 640, margin: "0 auto" }}>
              Conversation becomes <span style={{ color: teal }}>agreement</span>.{" "}
              Agreement becomes <span style={{ color: red }}>responsibility</span>.{" "}
              Responsibility gets <span style={{ color: gold }}>verified</span>.{" "}
              Verification triggers <span style={{ color: "#16a34a" }}>payment</span>.
            </p>
            <p style={{ fontSize: 15, color: soft, marginTop: 18, lineHeight: 1.6 }}>
              Every step is time-stamped. Every person sees the same record. Nothing important gets left to memory.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PAIN */}
      <section style={{ padding: "80px 24px", maxWidth: 920, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: red, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Where Things Go Wrong</p>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.25 }}>
              Memory gets fuzzy <span style={{ fontStyle: "italic", color: gold }}>when money is involved.</span>
            </h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {[
            { q: "\"I thought that was included.\"", a: "Small assumptions turn into expensive problems fast. ConvoRally keeps a clear record of what was discussed, approved, and added later.", color: red },
            { q: "\"Who told you to do that?\"", a: "Decisions made in texts, calls, and hallway conversations disappear until there's a disagreement. ConvoRally keeps the record tied to the work.", color: teal },
            { q: "\"Why is this more than the estimate?\"", a: "Change happens. But if it isn't documented when it happens, everybody remembers it differently later.", color: gold },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 14, padding: "32px 24px", height: "100%", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 22, fontStyle: "italic", color: item.color, marginBottom: 14, lineHeight: 1.3 }}>{item.q}</p>
                <p style={{ fontSize: 15, color: mid, lineHeight: 1.65 }}>{item.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* DETAILS */}
      <section style={{ padding: "80px 24px", background: navy, color: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: gold, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>The Details</p>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.25 }}>
                Trust is good. <span style={{ fontStyle: "italic", color: gold }}>Proof is better.</span>
              </h2>
            </div>
          </FadeIn>
          {[
            { step: "01", title: "Talk naturally", desc: "Use ConvoRally the way people already communicate. Keep the conversation connected to the actual job, task, or decision.", color: "#7DD3FC" },
            { step: "02", title: "Lock in agreements", desc: "Turn conversations into clear approvals. Scope, price, timing, and changes get confirmed while they're happening — not argued about later.", color: "#FCA5A5" },
            { step: "03", title: "Verify the work", desc: "Photos, checklists, notes, and sign-offs show what was done. Work gets proven, not just claimed.", color: "#FCD34D" },
            { step: "04", title: "Release payment", desc: "Tie payment to verified progress. Everyone can see what was agreed to, what was completed, and what is owed.", color: "#86EFAC" },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start", padding: "28px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: item.color, minWidth: 28, paddingTop: 4 }}>{item.step}</div>
                <div>
                  <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 22, fontWeight: 400, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, maxWidth: 560 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* VERTICALS */}
      <section id="industries" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: teal, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Built for Your Industry</p>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.25 }}>
                One platform. <span style={{ fontStyle: "italic" }}>Your language.</span>
              </h2>
              <p style={{ fontSize: 16, color: mid, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.6 }}>
                ConvoRally uses the same core system across industries. The difference is how the work, risk, and communication show up in your world.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
            <VerticalLink icon={"\u{1F3D7}\uFE0F"} title="Construction & Custom Trades" desc="Track conversations, approvals, changes, and milestone payments without losing the trail." href="/remodeling" delay={0} accentColor={red} />
            <VerticalLink icon={"\u{1F3E2}"} title="Property Management" desc="Keep owners, tenants, vendors, and managers on the same page with one clear record." href="/property-management" delay={0.06} accentColor={teal} />
            <VerticalLink icon={"\u{1F3D8}\uFE0F"} title="HOA Management" desc="Document board decisions, vendor work, approvals, and follow-through in one place." href="/hoa" delay={0.12} accentColor={gold} />
            <VerticalLink icon={"\u{1F50D}"} title="Building Forensics" desc="Preserve evidence, communication, and documentation in a way that stands up under scrutiny." href="/building-forensics" delay={0.18} accentColor={navy} />
            <VerticalLink icon={"\u{1F32A}\uFE0F"} title="Disaster Recovery" desc="Coordinate teams, volunteers, vendors, and approvals when speed and documentation both matter." href="/disaster-recovery" delay={0.24} accentColor={red} />
          </div>
        </div>
      </section>

      {/* REAL STORIES */}
      <section style={{ padding: "80px 24px", background: cardBg }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: gold, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Real Situations</p>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.25 }}>
                ConvoRally in <span style={{ fontStyle: "italic" }}>the real world.</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { tag: "Contractor", tagColor: red, title: "A faucet change that never made it to the contractor.", situation: "An interior designer and homeowner changed a kitchen faucet by email. The contractor had already drilled the countertop for the original 8-inch spread faucet.", helped: "The contractor pulled up the project channel and showed the original selection was still the approved spec. The designer and homeowner found a replacement that fit the existing holes.", outcome: "No new countertop. No backsplash rework. Thousands saved because the record was clear." },
              { tag: "Contractor", tagColor: red, title: "Wrong cut, quick proof, fast fix.", situation: "Countertop installers cut a cooktop opening to the wrong dimensions and were ready to install the smaller size.", helped: "The contractor pulled up the original specs shared with the sales rep — in seconds. The record showed exactly what was communicated.", outcome: "Installers recut to the correct size. No new countertop. No project delay. No finger-pointing." },
              { tag: "HOA", tagColor: gold, title: "$11,000 that didn\u2019t have to be spent.", situation: "An HOA water pump failed and cost $11,000 to replace. The board later discovered the same pump had been replaced two or three years earlier \u2014 another $11,000. That\u2019s $22,000 total on the same pump.", helped: "This happened before ConvoRally. The board struggled to find records of the original work. Documentation was incomplete and scattered. Nobody could confirm warranty terms.", outcome: "With complete records, the second replacement could have been a warranty claim. The board member said this was exactly the kind of problem ConvoRally would have prevented." },
            ].map((story, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 14, padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, color: story.tagColor, background: `${story.tagColor}10`, padding: "3px 10px", borderRadius: 20, marginBottom: 14, alignSelf: "flex-start" }}>{story.tag}</span>
                  <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 19, fontWeight: 400, color: ink, marginBottom: 12, lineHeight: 1.3 }}>{story.title}</h3>
                  <p style={{ fontSize: 13, color: mid, lineHeight: 1.6, marginBottom: 10 }}><strong style={{ color: ink, fontWeight: 600 }}>What happened:</strong> {story.situation}</p>
                  <p style={{ fontSize: 13, color: mid, lineHeight: 1.6, marginBottom: 10 }}><strong style={{ color: ink, fontWeight: 600 }}>How ConvoRally helped:</strong> {story.helped}</p>
                  <p style={{ fontSize: 13, color: ink, lineHeight: 1.6, fontWeight: 500, marginTop: "auto" }}>{story.outcome}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ padding: "70px 24px", background: "#ECEAE5" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 13, fontWeight: 600, color: gold, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>From the Founder</p>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 17, color: soft, marginBottom: 16 }}>Good people still end up in bad situations.</p>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 24, fontStyle: "italic", color: ink, lineHeight: 1.55, marginBottom: 20 }}>
              {'"'}After 26 years in the trenches, I realized we didn{"'"}t need more {"'"}management.{"'"} We needed a receipt.
            </p>
            <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 24, fontStyle: "italic", color: ink, lineHeight: 1.55, marginBottom: 28 }}>
              I built ConvoRally to give people a clear record of what was said, what changed, and what everyone agreed to — from construction to code.{'"'}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: navy, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, color: "#fff" }}>SB</div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: ink }}>Steve Batts</p>
                <p style={{ fontSize: 13, color: soft }}>Founder & CEO, ConvoRally</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" style={{ background: navy, color: "#fff", padding: "90px 24px", textAlign: "center" }}>
        <FadeIn>
          <img src={LOGO_SRC} alt="" style={{ width: 48, height: 48, objectFit: "contain", marginBottom: 20, opacity: 0.9 }} />
        </FadeIn>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 14 }}>
            Help shape ConvoRally early.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>Join the Founding 100</p>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 460, margin: "0 auto 28px", lineHeight: 1.6 }}>
            Early users get direct access to the product, the team, and a seat at the table.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{ maxWidth: 560, margin: "0 auto 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { icon: "\u{1F455}", text: "Founding member shirt — free" },
              { icon: "\u{1F512}", text: "Locked-in pricing for life" },
              { icon: "\u{1F4AC}", text: "Direct channel with the founder" },
              { icon: "\u{1F3F7}\uFE0F", text: "Your name on the Founders Wall" },
              { icon: "\u{1F5F3}\uFE0F", text: "Vote on the next features we build" },
              { icon: "\u{1F4C4}", text: "First access to industry templates" },
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
                <span style={{ fontSize: 18 }}>{p.icon}</span>{p.text}
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          {submitted ? (
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "20px 28px" }}>
              <span style={{ fontSize: 26 }}>{"\u2713"}</span>
              <p style={{ fontSize: 16, fontWeight: 600 }}>You{"'"}re in.</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 300 }}>Check your email for your Founding 100 invite.</p>
            </div>
          ) : (
            <div style={{ maxWidth: 440, margin: "0 auto" }}>
              <div style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: 5 }}>
                <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && go()} style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 15, padding: "10px 12px", fontFamily: "'DM Sans', sans-serif" }} />
                <button onClick={go} style={{ background: "#fff", color: navy, border: "none", borderRadius: 7, padding: "11px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>Get Early Access</button>
              </div>
            </div>
          )}
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "52px 24px 36px", maxWidth: 880, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(20px, 3vw, 28px)", fontStyle: "italic", textAlign: "center", color: ink, marginBottom: 32 }}>
            If it{"'"}s not in ConvoRally, it didn{"'"}t happen.
          </p>
        </FadeIn>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
          {[
            { l: "How It Works", h: "/how-it-works" }, { l: "Construction & Trades", h: "/remodeling" },
            { l: "Property Mgmt", h: "/property-management" }, { l: "HOA", h: "/hoa" },
            { l: "Building Forensics", h: "/building-forensics" }, { l: "Disaster Recovery", h: "/disaster-recovery" },
            { l: "Why ConvoRally", h: "/why" }, { l: "Community", h: "/community" },
            { l: "Book a Demo", h: "/demo" },
          ].map((x) => (
            <a key={x.l} href={x.h} style={{ fontSize: 13, color: soft, textDecoration: "none" }}>{x.l}</a>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderTop: `1px solid ${border}`, paddingTop: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src={LOGO_SRC} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 15, color: soft }}>ConvoRally</span>
          </div>
          <p style={{ fontSize: 12, color: soft }}>{"©"} 2026 ConvoRally</p>
        </div>
      </footer>
    </div>
  );
}
