"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "/cr-logo.png";
const bg = "#F3F2EF"; const cardBg = "#FFFFFF"; const ink = "#1C1917"; const mid = "#6B6560";
const soft = "#A8A29E"; const bdr = "#E2DFDA"; const navy = "#1E293B"; const teal = "#0EA5B7";
const gold = "#D97706"; const red = "#D93025";

function useInView(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([i])=>{if(i.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function FadeIn({children,delay=0}){const[r,v]=useInView();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`}}>{children}</div>)}

export default function HowItWorksPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet"; document.head.appendChild(link);
  }, []);

  return (
    <div style={{ background: bg, color: ink, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <nav style={{ padding: "12px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${bdr}` }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={LOGO_SRC} alt="ConvoRally" style={{ width: 34, height: 34, objectFit: "contain" }} />
          <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, color: ink }}>ConvoRally</span>
        </a>
        <a href="/demo" style={{ background: navy, color: "#fff", padding: "9px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Book a Demo</a>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 24px 50px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 400, lineHeight: 1.12, marginBottom: 16 }}>
            How ConvoRally works.
          </h1>
          <p style={{ fontSize: 19, color: mid, lineHeight: 1.65, maxWidth: 520, margin: "0 auto" }}>
            Keep the conversation, work, approvals, and proof connected from start to finish.
          </p>
        </FadeIn>
      </section>

      {/* INTRO */}
      <section style={{ padding: "30px 24px 60px", maxWidth: 640, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontSize: 17, color: ink, lineHeight: 1.75 }}>
            ConvoRally helps teams stay organized around what was discussed, what changed, what was approved, and what happened next — all in one usable record. Here{"'"}s the flow.
          </p>
        </FadeIn>
      </section>

      {/* STEPS */}
      {[
        {
          num: "01", color: teal, bg: cardBg,
          title: "Start with the conversation.",
          body: "Real work usually starts with questions, updates, concerns, or decisions. ConvoRally helps keep those conversations tied to the people and work they belong to. Instead of scattering communication across email, texts, and calls, everything stays in context — connected to the actual job, task, or issue.",
        },
        {
          num: "02", color: red, bg: "#ECEAE5",
          title: "Turn communication into clear next steps.",
          body: "Instead of leaving details buried across messages, ConvoRally helps organize tasks, responsibilities, approvals, and changes so the next step is easier to follow. Scope, price, timing, and changes get confirmed while they're happening — not argued about later.",
        },
        {
          num: "03", color: gold, bg: cardBg,
          title: "Capture changes and approvals.",
          body: "When something shifts, the clarification and approval stay attached to the record instead of disappearing into memory, texts, or scattered email threads. Both sides confirm the change before work continues. That confirmation becomes part of the permanent project record.",
        },
        {
          num: "04", color: "#16a34a", bg: "#ECEAE5",
          title: "Keep proof tied to what happened.",
          body: "Photos, files, notes, and completion details stay connected to the work so people can review what happened without trying to reconstruct it later. Work gets proven, not just claimed. Payment ties to verified progress. Everyone can see what was agreed to, what was completed, and what is owed.",
        },
      ].map((step, i) => (
        <section key={i} style={{ padding: "60px 24px", background: step.bg }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <FadeIn>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{
                  fontSize: 14, fontWeight: 700, color: step.color, minWidth: 36,
                  width: 36, height: 36, borderRadius: "50%", border: `2px solid ${step.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 4,
                }}>{step.num}</div>
                <div>
                  <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 400, lineHeight: 1.3, marginBottom: 14 }}>{step.title}</h2>
                  <p style={{ fontSize: 16, color: mid, lineHeight: 1.75 }}>{step.body}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* THE RESULT */}
      <section style={{ padding: "60px 24px", maxWidth: 640, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 400, lineHeight: 1.3, marginBottom: 14 }}>
            A record people can actually use later.
          </h2>
          <p style={{ fontSize: 17, color: ink, lineHeight: 1.75 }}>
            ConvoRally helps make communication easier to search, easier to review, and easier to trust when questions come up later. When someone asks "what happened?" — the record answers. Not memory. Not scattered texts. The record.
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section style={{ background: navy, color: "#fff", padding: "70px 24px", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 400, lineHeight: 1.25, marginBottom: 12 }}>
            Want to see this on a real workflow?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 400, margin: "0 auto 24px" }}>
            Book a walkthrough and see how ConvoRally fits the way your team works.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/demo" style={{ background: "#fff", color: navy, padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>Book a Demo</a>
            <a href="/#waitlist" style={{ background: "transparent", color: "#fff", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.2)" }}>Join Early Access</a>
          </div>
        </FadeIn>
      </section>

      <footer style={{ padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, fontStyle: "italic", color: ink, marginBottom: 16 }}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p>
        <a href="/" style={{ fontSize: 13, color: soft, textDecoration: "none" }}>{"\u2190"} Back to ConvoRally.com</a>
      </footer>
    </div>
  );
}
