"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "/cr-logo.png";
const bg = "#F3F2EF"; const cardBg = "#FFFFFF"; const ink = "#1C1917"; const mid = "#6B6560";
const soft = "#A8A29E"; const bdr = "#E2DFDA"; const navy = "#1E293B"; const teal = "#0EA5B7";
const gold = "#D97706"; const red = "#D93025";

function useInView(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([i])=>{if(i.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function FadeIn({children,delay=0}){const[r,v]=useInView();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`}}>{children}</div>)}

export default function WhyPage() {
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

      <section style={{ padding: "80px 24px 50px", maxWidth: 640, margin: "0 auto" }}>
        <FadeIn>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 400, lineHeight: 1.12, marginBottom: 16 }}>
            Why ConvoRally exists.
          </h1>
          <p style={{ fontSize: 19, color: mid, lineHeight: 1.65 }}>
            Because too many good people still end up in bad situations when the record is unclear.
          </p>
        </FadeIn>
      </section>

      <section style={{ padding: "40px 24px 60px", maxWidth: 640, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontSize: 13, fontWeight: 600, color: red, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>This was not built from theory.</p>
          <p style={{ fontSize: 17, color: ink, lineHeight: 1.75, marginBottom: 20 }}>
            After 26 years in construction and high-stakes project work, Steve Batts kept seeing the same pattern: the problem was often not bad intent. The problem was that communication, approvals, changes, and proof were scattered across too many places.
          </p>
          <p style={{ fontSize: 17, color: ink, lineHeight: 1.75, marginBottom: 20 }}>
            When pressure hit, people had to rely on memory, missing texts, buried emails, partial notes, or incomplete records.
          </p>
          <p style={{ fontSize: 17, color: ink, lineHeight: 1.75 }}>
            That confusion cost time, money, trust, and sometimes much more.
          </p>
        </FadeIn>
      </section>

      <section style={{ padding: "60px 24px", background: "#ECEAE5" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 13, fontWeight: 600, color: teal, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>The problem was bigger than task tracking.</p>
            <p style={{ fontSize: 17, color: ink, lineHeight: 1.75, marginBottom: 20 }}>
              Most tools helped track work. But they did not solve the problem of keeping the conversation, clarification, approval, and proof tied together in a way people could actually use later.
            </p>
            <p style={{ fontSize: 17, color: ink, lineHeight: 1.75 }}>
              ConvoRally was built to close that gap.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "60px 24px", maxWidth: 640, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontSize: 13, fontWeight: 600, color: gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>What ConvoRally is trying to change</p>
          <p style={{ fontSize: 17, color: ink, lineHeight: 1.75, marginBottom: 20 }}>
            ConvoRally is built to help people stop reconstructing reality after the fact. It helps keep the record clearer while the work is still happening — so fewer things get lost, fewer misunderstandings grow, and fewer people end up arguing over what happened.
          </p>
          <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 24, fontStyle: "italic", color: ink, lineHeight: 1.5 }}>
            The goal is simple: make the right people understand faster, keep the record clear, and help everyone move forward with confidence.
          </p>
        </FadeIn>
      </section>

      <section style={{ background: navy, color: "#fff", padding: "70px 24px", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 400, lineHeight: 1.25, marginBottom: 12 }}>
            Want to see if ConvoRally fits your workflow?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 400, margin: "0 auto 24px" }}>
            Book a walkthrough or join the Founding 100 to help shape what we build next.
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
