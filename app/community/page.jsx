"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "/cr-logo.png";

const bg = "#F3F2EF";
const cardBg = "#FFFFFF";
const ink = "#1C1917";
const mid = "#6B6560";
const soft = "#A8A29E";
const bdr = "#E2DFDA";
const red = "#D93025";
const teal = "#0EA5B7";
const gold = "#D97706";
const navy = "#1E293B";

function useInView(t = 0.12) {
  const r = useRef(null);
  const [v, s] = useState(false);
  useEffect(() => {
    const e = r.current; if (!e) return;
    const o = new IntersectionObserver(([i]) => { if (i.isIntersecting) { s(true); o.unobserve(e); } }, { threshold: t });
    o.observe(e); return () => o.disconnect();
  }, [t]);
  return [r, v];
}
function FadeIn({ children, delay = 0 }) {
  const [r, v] = useInView();
  return (<div ref={r} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s` }}>{children}</div>);
}

const SHIRTS = [
  { id: "corner", title: "Don't Paint Yourself Into A Corner", desc: "Moving forward without clarity can trap you later.", color: red, bg: "#1a1a1a" },
  { id: "here", title: "How Did We Get Here?", desc: "For every project or conversation that drifted off course.", color: gold, bg: "#1a1a1a" },
  { id: "proof", title: "Trust Is Good. Proof Is Better.", desc: "When money and liability are involved, proof matters.", color: teal, bg: "#1a1a1a" },
  { id: "fuzzy", title: "Memory Gets Fuzzy When Money Is Involved", desc: "Because the story often changes when the bill shows up.", color: "#FCA5A5", bg: "#1a1a1a" },
  { id: "written", title: "If It's Not Written, It's Not Real", desc: "The founding principle of ConvoRally.", color: "#7DD3FC", bg: "#1a1a1a" },
  { id: "receipt", title: "We Needed A Receipt", desc: "26 years of lessons, one sentence.", color: "#FCD34D", bg: "#1a1a1a" },
];

export default function CommunityPage() {
  const [votes, setVotes] = useState({});
  const [votedFor, setVotedFor] = useState(null);
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [step, setStep] = useState("browse"); // browse -> voting -> thankyou -> founding
  const [idea, setIdea] = useState("");
  const [ideaEmail, setIdeaEmail] = useState("");
  const [ideaSubmitted, setIdeaSubmitted] = useState(false);
  const [foundingEmail, setFoundingEmail] = useState("");
  const [foundingSubmitted, setFoundingSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    loadVotes();
  }, []);

  async function loadVotes() {
    try {
      const result = await window.storage.get("shirt-votes", true);
      if (result && result.value) setVotes(JSON.parse(result.value));
    } catch (e) {
      setVotes(SHIRTS.reduce((a, s) => ({ ...a, [s.id]: Math.floor(Math.random() * 20) + 5 }), {}));
    }
  }

  async function saveVotes(newVotes) {
    try { await window.storage.set("shirt-votes", JSON.stringify(newVotes), true); } catch (e) {}
  }

  function handleVoteClick(shirtId) {
    setVotedFor(shirtId);
    setStep("voting");
  }

  function submitVote() {
    if (!email.includes("@")) return;
    const newVotes = { ...votes, [votedFor]: (votes[votedFor] || 0) + 1 };
    setVotes(newVotes);
    saveVotes(newVotes);
    setStep("thankyou");
  }

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <div style={{ background: bg, color: ink, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{ padding: "12px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${bdr}` }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={LOGO_SRC} alt="ConvoRally" style={{ width: 34, height: 34, objectFit: "contain" }} />
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, color: ink }}>ConvoRally</span>
        </a>
        <a href="#founding" style={{ background: navy, color: "#fff", padding: "9px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Join the Founding 100</a>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 24px 50px", textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontSize: 13, fontWeight: 600, color: teal, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Community</p>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Help choose the first{" "}
            <span style={{ fontStyle: "italic" }}>ConvoRally shirts.</span>
          </h1>
          <p style={{ fontSize: 18, color: mid, lineHeight: 1.65, marginBottom: 12 }}>
            For people tired of hearing, {'"'}That{"'"}s not what we agreed to.{'"'}
          </p>
          <p style={{ fontSize: 16, color: mid, lineHeight: 1.6, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Vote on the first designs. Join the Founding 100. Help shape a platform built around trust, clarity, proof, and protection.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#vote" style={{ background: navy, color: "#fff", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>Vote on Designs</a>
            <a href="#founding" style={{ background: "transparent", color: ink, padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: "none", border: `1.5px solid ${bdr}` }}>Join the Founding 100</a>
          </div>
        </FadeIn>
      </section>

      {/* VOTING GRID */}
      <section id="vote" style={{ padding: "60px 24px", maxWidth: 960, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 400, marginBottom: 8 }}>
              Vote for your favorite design.
            </h2>
            {totalVotes > 0 && <p style={{ fontSize: 14, color: soft }}>{totalVotes} votes cast so far</p>}
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {SHIRTS.map((shirt, i) => {
            const voteCount = votes[shirt.id] || 0;
            const isWinning = voteCount === Math.max(...Object.values(votes).filter(v => v > 0), 0) && voteCount > 0;
            return (
              <FadeIn key={shirt.id} delay={i * 0.06}>
                <div style={{
                  background: cardBg, border: `1px solid ${bdr}`, borderRadius: 16,
                  overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "all 0.3s",
                }}>
                  {/* Shirt mockup placeholder */}
                  <div style={{
                    background: shirt.bg, padding: "40px 24px", textAlign: "center",
                    minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                  }}>
                    <div style={{ fontSize: 36, marginBottom: 8 }}>{"\u{1F455}"}</div>
                    <p style={{
                      fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18,
                      fontStyle: "italic", color: shirt.color, lineHeight: 1.3, maxWidth: 220,
                    }}>{shirt.title}</p>
                  </div>

                  <div style={{ padding: "20px 20px 24px" }}>
                    <p style={{ fontSize: 14, color: mid, lineHeight: 1.5, marginBottom: 16 }}>{shirt.desc}</p>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 22, fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, color: ink }}>{voteCount}</span>
                        <span style={{ fontSize: 12, color: soft }}>votes</span>
                        {isWinning && voteCount > 0 && <span style={{ fontSize: 11, color: teal, fontWeight: 600, background: `${teal}15`, padding: "2px 8px", borderRadius: 20 }}>Leading</span>}
                      </div>
                      <button onClick={() => handleVoteClick(shirt.id)} style={{
                        background: navy, color: "#fff", border: "none", borderRadius: 8,
                        padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                        fontFamily: "'DM Sans', sans-serif",
                      }}>Vote</button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* VOTE MODAL */}
      {step === "voting" && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={() => setStep("browse")}>
          <div style={{ background: cardBg, borderRadius: 20, padding: "36px 32px", maxWidth: 420, width: "100%", boxShadow: "0 24px 60px rgba(0,0,0,0.2)" }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 24, fontWeight: 400, marginBottom: 6 }}>Cast your vote</h3>
            <p style={{ fontSize: 14, color: mid, marginBottom: 20, lineHeight: 1.5 }}>
              Voting for: <strong style={{ color: ink }}>{SHIRTS.find(s => s.id === votedFor)?.title}</strong>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
              <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: "12px 14px", borderRadius: 8, border: `1px solid ${bdr}`, fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: "none" }} />
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} style={{ padding: "12px 14px", borderRadius: 8, border: `1px solid ${bdr}`, fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: "none", color: industry ? ink : soft, background: cardBg }}>
                <option value="">Your industry</option>
                <option value="construction">Construction & Trades</option>
                <option value="property-mgmt">Property Management</option>
                <option value="hoa">HOA Management</option>
                <option value="forensics">Building Forensics</option>
                <option value="disaster">Disaster Recovery</option>
                <option value="startup">Startups & Tech</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button onClick={submitVote} disabled={!email.includes("@")} style={{
              background: email.includes("@") ? navy : bdr, color: "#fff", border: "none", borderRadius: 10,
              padding: "14px 0", width: "100%", fontSize: 16, fontWeight: 600, cursor: email.includes("@") ? "pointer" : "default",
              fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s",
            }}>Submit Vote</button>
            <p style={{ fontSize: 12, color: soft, marginTop: 12, textAlign: "center" }}>We{"'"}ll only use this to notify you about results.</p>
          </div>
        </div>
      )}

      {/* THANK YOU MODAL */}
      {step === "thankyou" && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={() => setStep("browse")}>
          <div style={{ background: cardBg, borderRadius: 20, padding: "40px 32px", maxWidth: 420, width: "100%", textAlign: "center", boxShadow: "0 24px 60px rgba(0,0,0,0.2)" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>{"\u2713"}</div>
            <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 26, fontWeight: 400, marginBottom: 8 }}>Vote counted!</h3>
            <p style={{ fontSize: 15, color: mid, lineHeight: 1.6, marginBottom: 24 }}>
              Want the winning shirt <strong style={{ color: ink }}>free</strong>? Join the Founding 100.
            </p>
            <div style={{ background: `${navy}08`, border: `1px solid ${navy}18`, borderRadius: 14, padding: "20px 18px", marginBottom: 20, textAlign: "left" }}>
              {[
                { icon: "\u{1F455}", text: "Free first-run shirt" },
                { icon: "\u{1F512}", text: "Locked-in pricing for life" },
                { icon: "\u{1F4AC}", text: "Direct channel with the founder" },
                { icon: "\u{1F5F3}\uFE0F", text: "Vote on what we build next" },
              ].map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: ink, marginBottom: i < 3 ? 8 : 0 }}>
                  <span style={{ fontSize: 16 }}>{p.icon}</span>{p.text}
                </div>
              ))}
            </div>
            <a href="#founding" onClick={() => setStep("browse")} style={{
              display: "block", background: navy, color: "#fff", borderRadius: 10,
              padding: "14px 0", fontSize: 16, fontWeight: 600, textDecoration: "none",
              marginBottom: 12,
            }}>Join the Founding 100</a>
            <button onClick={() => setStep("browse")} style={{ background: "none", border: "none", color: soft, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Maybe later</button>
          </div>
        </div>
      )}

      {/* IDENTITY SECTION */}
      <section style={{ padding: "70px 24px", background: "#ECEAE5" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 400, lineHeight: 1.3, marginBottom: 16 }}>
              More than software. More than merch.
            </h2>
            <p style={{ fontSize: 16, color: mid, lineHeight: 1.65, marginBottom: 12 }}>
              Too many good people still end up in bad situations because conversations were scattered, approvals were unclear, and nobody had a reliable record to point back to.
            </p>
            <p style={{ fontSize: 16, color: ink, fontWeight: 500, lineHeight: 1.6 }}>
              ConvoRally exists to change that. The shirts are just one visible way to wear that message.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FOUNDING 100 */}
      <section id="founding" style={{ background: navy, color: "#fff", padding: "80px 24px", textAlign: "center" }}>
        <FadeIn>
          <img src={LOGO_SRC} alt="" style={{ width: 48, height: 48, objectFit: "contain", marginBottom: 18, opacity: 0.9 }} />
        </FadeIn>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 8 }}>
            Join the Founding 100.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.6 }}>
            Be one of the first 100 people shaping ConvoRally. Not just users — partners in building something that matters.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ maxWidth: 560, margin: "0 auto 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { icon: "\u{1F455}", text: "Free first-run ConvoRally shirt" },
              { icon: "\u{1F512}", text: "Locked-in early adopter pricing" },
              { icon: "\u{1F4AC}", text: "Private founder chat channel" },
              { icon: "\u{2B50}", text: "Founder badge inside ConvoRally" },
              { icon: "\u{1F5F3}\uFE0F", text: "Direct input on what gets built" },
              { icon: "\u{1F4C4}", text: "Exclusive templates and starter tools" },
              { icon: "\u{1F680}", text: "Priority onboarding and support" },
              { icon: "\u{1F3F7}\uFE0F", text: "Your name on the Founders Wall" },
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
                <span style={{ fontSize: 18 }}>{p.icon}</span>{p.text}
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          {foundingSubmitted ? (
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "20px 28px" }}>
              <span style={{ fontSize: 26 }}>{"\u2713"}</span>
              <p style={{ fontSize: 16, fontWeight: 600 }}>Welcome to the Founding 100.</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>Check your email for next steps.</p>
            </div>
          ) : (
            <div style={{ maxWidth: 440, margin: "0 auto" }}>
              <div style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: 5 }}>
                <input type="email" placeholder="you@company.com" value={foundingEmail} onChange={(e) => setFoundingEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && foundingEmail.includes("@") && setFoundingSubmitted(true)} style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 15, padding: "10px 12px", fontFamily: "'DM Sans', sans-serif" }} />
                <button onClick={() => foundingEmail.includes("@") && setFoundingSubmitted(true)} style={{ background: "#fff", color: navy, border: "none", borderRadius: 7, padding: "11px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>Join the Founding 100</button>
              </div>
            </div>
          )}
        </FadeIn>
      </section>

      {/* SUBMIT YOUR IDEA */}
      <section style={{ padding: "60px 24px", maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 400, marginBottom: 8 }}>
            Got a shirt idea?
          </h2>
          <p style={{ fontSize: 15, color: mid, marginBottom: 24, lineHeight: 1.5 }}>
            Send us your slogan or design idea. If we love it, it may be featured in the next vote.
          </p>
        </FadeIn>
        {ideaSubmitted ? (
          <FadeIn>
            <div style={{ background: `${teal}10`, border: `1px solid ${teal}30`, borderRadius: 12, padding: "20px 24px" }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: teal }}>Idea submitted! We{"'"}ll take a look.</p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <input type="email" placeholder="Your email" value={ideaEmail} onChange={(e) => setIdeaEmail(e.target.value)} style={{ padding: "12px 14px", borderRadius: 8, border: `1px solid ${bdr}`, fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: "none" }} />
              <textarea placeholder="Your shirt idea..." value={idea} onChange={(e) => setIdea(e.target.value)} rows={3} style={{ padding: "12px 14px", borderRadius: 8, border: `1px solid ${bdr}`, fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: "none", resize: "vertical" }} />
              <button onClick={() => { if (ideaEmail.includes("@") && idea.trim()) setIdeaSubmitted(true); }} style={{
                background: navy, color: "#fff", border: "none", borderRadius: 10,
                padding: "13px 0", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              }}>Submit Your Idea</button>
            </div>
          </FadeIn>
        )}
      </section>

      {/* SHARE */}
      <section style={{ padding: "50px 24px 60px", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 400, marginBottom: 8 }}>
            Want your favorite design to win?
          </h2>
          <p style={{ fontSize: 15, color: mid, marginBottom: 20, maxWidth: 400, margin: "0 auto 20px" }}>
            Share this page with someone who would get it.
          </p>
          <button onClick={handleShare} style={{
            background: cardBg, color: ink, border: `1.5px solid ${bdr}`, borderRadius: 10,
            padding: "13px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s",
          }}>
            {copied ? "\u2713 Link copied!" : "Share This Page"}
          </button>
        </FadeIn>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: navy, color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <FadeIn>
          <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(20px, 3vw, 28px)", fontStyle: "italic", marginBottom: 20 }}>
            If it{"'"}s not in ConvoRally, it didn{"'"}t happen.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#founding" style={{ background: "#fff", color: navy, padding: "12px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Join the Founding 100</a>
            <a href="#vote" style={{ background: "transparent", color: "#fff", padding: "12px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.2)" }}>Vote on Designs</a>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 24px 28px", textAlign: "center" }}>
        <a href="/" style={{ fontSize: 13, color: soft, textDecoration: "none" }}>{"\u2190"} Back to ConvoRally.com</a>
      </footer>
    </div>
  );
}
