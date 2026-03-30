"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABkAGoDASIAAhEBAxEB/8QAHQAAAgIDAQEBAAAAAAAAAAAAAAgGBwkBBQMCCf/EAD0QAAECBQIDBAgEBQMFAAAAAAECAwAEBQYRBzESIUETUWFxCBQiMlKBkaEzQnKxFSNiosEWJII0Q4PC4f/EABwBAAIDAAMBAAAAAAAAAAAAAAAFBAYHAQIDCP/EADQRAAECBAQEBAUEAgMAAAAAAAECAwAEBREGITFBElFhcYGhsdETFCKRwQcjMvAVQmLh8f/aAAwDAQACEQMRAD8ATKCCCCCCCCCCCCJnZ2mN4XS2h+QpimZVfNMxMns0KHeOqh4gRa/o96PS0xKs3VdUuFJVhyVlXBkAbhagd1HcA8gME5JGL0qE+xKt+ryiEtpAwAn/ADD2RpBdAU79vf2iiVzGAliW5WxtlxHPPoN++nQwtifR9qqGwZu4pNlfVKJdah9SR+0ceuaIXRJtqcp01IVMJHuIWWnD5BXL7wxrrqnFFSjkx5FUOzQpRSbWse5imIxvV0r4uMEcikfix84S6qU6fpc6uSqMo/KTDfvNuoKVD5Hp4xqw3t52vSLrpapKqMAqAPYzCQO0ZPek93hsYVq8benrYrz9InwCtv2kOJHsuoPurHgfscjpFcqVKXJHiBuk7+8aNh3EzNXSUKHC4NRzHMe20ceCCCFUWiCCCCCCCCCCCCCJpoxbCbpvqUlH2+OTl/8AcTII5KSkjCT5qIHlmIXDA+jHTxK2/U6wU4dmZkMIV/ShOT91faGFLlxMTKUnTX7QgxPUDIU1xxJso5DucvIXMXpPT6WGESktgJQMDEVvceotHp9XNIkmJ6u1bOFSlOa7VST1BO2R3DOOsfGpFUq610y0raJNeuB/1aXUDjsW/wA7memB16AKPSNm9butr0ebfYs+ypKWn7rmGUuT08+nJTkcluY5kndLWQAME5zzfVOqGUV8Fn+W5ih4awsmqN/NzhIRokDK9vxtz/PMGo7ElOtSt023XbZ7Y4adn5chtR88Aj6GJoh1DraXW1pW2tIUlSTkKB2II3ELTcOseo9wSkzJVm5n52SmQUuSrrDRZIPcjhwCOhHMdDEp9Hi65hT7tqzjqltcCnpIqPuEc1oHgR7QHQg98cUqtLedDL++h6xKxJg5iVlzNSdwE6pOeXMHXLe+3ndpMVf6RFEbnrUarSED1inOgKUBzLSzgj5K4T8zFllQ74jOqfAdPK6HNvVDjPfxJx98Q/qDKXZVxKuR8s4qFDfXLVBlxGvEB4E2PkYVaCMneMRmcfQEEEEEEEEEEEEEA3hnNCUBrTCnEbrcfWfE9oR/gQtEuw/MOBthlx1fwoSVH6CGR0Ge7TTiUZOeKXmHmlA9Dx8X/tD7DhHzZH/E+oilY+bUaYhVsuMehiQ6cTEm3qrfF91VJVI2fRwwznbjUkqVjxIC0/8AKFbumtT9x3FP12pul2cnn1PuqJ6qOcDwHIAdwEXZXqsadoVqCsLKH61eYp5UNy20gOEeXLHzigIVTiy5MLUdyfWLLSmQxIstjZI9I6FAcpDVTbXXJWcmZIe+3KvpacPkpSVD7fOLpoNO0guNdOTbFyTtmVKX4v8AqeTry1cvxVK4e8AJIznaKGj3kZt6SmUvsFPEN0rQFpUO5SVAhQ8CISzsguYUHG3lNqGhScvFJuDDliYS2koW2FJOoI/OsNM/pzqTTx2lG1AlamnGUNVGVwFD9Q4vrEF1XmNRZWz5ulXDaYZbdUjjqMisuMFCTxHOM8OSBuRGxpBd7s8punWvW2bfrRICKLU3VOUqoH4WVqPFLOH4SSknGCNouW077lanWF21X6dMW5czQw7TJ3kXPFpezid/Hz3hDN1/FNFQour+OzubWIHXl3sR1j3aw5h2ouJWhoNOggjuPXsYSAxiHB1N0Qtu6mnZ2jttUSrn2g40jDDx/rQNs/Enn3gwq13W1WbUrb1HrkmuVmmueDzStJ2WlWyknvH7wwouI5Orps0bLGqTr4cx/TaOZ+mPSR+vMcxHHgggh/C6CJjY1mrrCBUKgVtSOfYCeSnsb4PRPj9I4dp0lVbuCUpwJCHF5cUPyoHNR+gi/ES7TDCGGW0ttNpCUIA5JA2EKKpPFgBtGp8hF8wXhxupLVMzIu2k2A5nr0HnfvGhTpKUpzAZkZZqXbHRtOM+Z3Pzg0fmBT6/clurOMTAnmATuhXJWPqmNpaSDEXq08KNqDQanJhT825mXflWk8TjrJ5ZAHmcDqQIMKzxlqklSswrIw0/VugoqGGlpbABbsRoPAeXhHN1RnSxaMzRM4zeNSmlD/wy4Sf7jFWxPNckPS9+TsuVfyHVJm2x4rbQFH+wRA4sE6jgmHE8ifWMgpToekmV80p9BBBBBEaJ8ZBIORDCaU3jRdUKXKacakvLFVawm36+FYmWXB7rSl9TyGMnCsYPtcJheo+2nFtOpcbWpC0kFKknBBGxB74NYIdDT65q5SLre02v5aTXZdHaU+fHJFTY54UP6wAfE4IPNJzINUdPqVqDbblNnEpanGgVyU2E5Uwv/KD+ZPXfcAxXFzVOY1G9HCl6jMuBF2WjMBbkyn3iptSQ5nwUktuY7wrvi7LJqjdcoNMrTICUT0q3MBI/LxpBI+RyIx7FtK/w883OyZ4Ao7bKHLoeXcaZRcaVO/Oy6mH8yPMf9R+fNzUSo25XpyiVZgsTso4W3UbjPQg9QRgg9QRHNhrfTVshldIkb3k2gl6XUmVnCB7zaieBR/Srl5LHdCpRpdEqYqUml4iytFDkR76joYrE5L/LulG23aLB0Nl0uXFOvEZU3KEJ/wCSkiLccRFPaHzjcveXqrqgEzcupsZ+IEKH2Bi852QdZJ9klMKqulQmSegjY8COtmkpSNQpV+//AIRHBnFIYl3X3PcbQVq8gMn9oX+tTs/NVZdSmg608+oPNk5ThP5SnwAHI+EMFXZRc1SZyVb/ABHWFoT5lJAjmS2niNV9HKJVLUWz/qu22FUyoyDiwhT6ErUps5PIKwo4J5HmM5TEyhpT9at8oR/qQ67+w1/obnucvQesU3ddxzVyeov1FIVOy0v6u4/nm8kElJI+LmQT15Rw47tZs+6qPNLlqpbtWk3UHBS9KLT9DjB+UbFEsK9a08lql2rWZoq2UiTXw/NRAA+sWJxxTiuJRuYylllthAbbFgNojUZAJOAIts6Iz1vyaKlqTclJtCVUMpllr9annfBDDZ5nzIEbMlQ6QoBq3qPNUqn7GeqCkuVKbGOgHsSyTnZIKunEcxGefbZTxLNoaU6mTVRdDUsjiPkOpO0VpbNuztbm1IQCzLtH+e+sey2OvmfCOS+G+3WGeIt8R4OLfGeWfGLnt+gVO9K0u2LPdaptLprSvXJzhJa41ApDfLmonn58z0gb9G+9/Wwn+J0HsgfxC+5t+ngzCZWIJNh0pmXQg2BsdQOvU8uUNqjR0tJSzKpK1JJ4l7E5ZJ6A3F9z5d+x5r/R/oi19dQyJm651yXpUtj23gUobUtI3IHCs58B3iGE0upL1DsqhUeZ5Pycgy06O5YSOIfIkiINZWlDclWpS4rtrL1x1aSbS3JJU2G5WSSkYSGmhyHD02A3xnnFsSI/mCM3xhiNiqONsS2aUm5Olz03sIm0mmuSiFOO5E7RH/SEk2p3RG5kOpBCJBx0Z70ALH3SI/PM8zD9elDWmqPojWkrUA5ONiUaT8RcUEn+3iPyhBTvFxwQlXyzp24h9+EX/EJKwR8RI6fmPenTj8hPsTssvgeYcDiD4g5ht9Oa7Tr0ttmYYUkTKU8LjRPtAjceY/bB6woEdyzroqtrVRM/THyk5HaNknhWB39xHQ//AERZ56T+OkFOoibh2uGmOFDn8Fa9Dz9x7CGpq1DKSSlJBiBTtBrNFuI3JaNZfoVXIw6tsZafHULTsc9cgg74zzju2hrVbVbl0MVrEjNYAUVkAE+ex+x8IkkzP27PNdpLVBlSTsYr9nJVfEn6T/fvGohyUrMv8J0BxHTO3XLMHvY844crrHrPKMhh+kWtPKHIPArbz4kBYH2Ec6r6iayV1stTVx06gsK3TS5fLhHdxqyR5gx9VubospxLXU5VpI+NwJH3MQmt39b0kFJlnlz7o2SyMJ+ajy+mYloqE699KB9h/RCh3C+HJH9yZcIHJSvwAFGN6SoknLzi6jMuP1GoK5uTs66XXT45VtGtKfxe+q0q2bQUOAAfxCpn8OXbPI4PUnmBjmdh1IrS5rvqtbCmVKErKH/sNE4P6jur9vCPKyLrrNn11ur0WZ7J5I4VoUMtvI6oWnqD9RuMGO7lOmlNKcCgXbfTfMX6/wBt3hLUcWyiEiTpyOBn/YgWJHTl3OZ6Q7VhWpSbOt1iiUhopab9pxxXvvOHdaj3n7DAG0SVAiptP9cLOuGXaaqc0mhVAgBbU2rDRP8AS7tj9WDFoyVQkJpoPS07KvtkZC23kqB+YMYnVJSdYeUZtJCicyd/HQ+ETJeYl3GwGCLDlG8kRuSZCV5O0RO4b3tG3GVO1m4qbK8Iz2ZfC3D5ITlR+kL1rH6QM1W5R+hWY2/T5B0FD0857L7yTyKUAfhpPf7x8I9qRh6fqboDSCE7qOQHv2EQZ6osS6TxKueQ1jV9LbUdm67nZtykvpdplJWrtHEKyl6Y2JHeEDKQepKumIoyCCN5psg3T5ZMu3oN+Z3PiYocw+p9wrVvBBBBE6PGCMgkbEjyggggjEEEEEEEEEEEEEZBI2OIIIIIMxiCCCCCCCCCCP/Z";

const cream = "#FBF8F3"; const ink = "#1C1917"; const mid = "#6B6560"; const soft = "#A8A29E";
const warmWhite = "#FFFFFF"; const warmBorder = "#E7E0D8";
const red = "#D93025"; const teal = "#0EA5B7"; const gold = "#D97706"; const navy = "#1E293B";
const gradient = "linear-gradient(135deg, #D93025, #0EA5B7, #D97706)";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}
function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (<div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s` }}>{children}</div>);
}

export default function PropertyMgmtPage() {
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
    <div style={{ background: cream, color: ink, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "10px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrollY > 50 ? "rgba(251,248,243,0.95)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? `1px solid ${warmBorder}` : "1px solid transparent", transition: "all 0.3s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src={LOGO_SRC} alt="ConvoRally" style={{ width: 34, height: 34, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, color: ink }}>ConvoRally</span>
          </a>
          <span style={{ color: warmBorder, margin: "0 4px", fontSize: 18 }}>/</span>
          <span style={{ fontSize: 14, color: mid, fontWeight: 500 }}>Property Management</span>
        </div>
        <a href="#cta" style={{ background: navy, color: "#fff", padding: "9px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Get Early Access</a>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "130px 24px 80px" }}>
        <FadeIn><p style={{ fontSize: 14, fontWeight: 600, color: teal, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>For Property Management</p></FadeIn>
        <FadeIn delay={0.08}>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px, 5.5vw, 66px)", fontWeight: 400, lineHeight: 1.08, maxWidth: 720, marginBottom: 24, letterSpacing: "-0.02em" }}>
            The work order said one thing.{" "}
            <span style={{ fontStyle: "italic", color: teal }}>The invoice said another.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p style={{ fontSize: 19, color: mid, maxWidth: 520, lineHeight: 1.7, marginBottom: 36 }}>
            Vendor disputes, tenant he-said-she-said, and maintenance records scattered
            across email, text, and spreadsheets. ConvoRally puts every work order, approval,
            and payment in one time-stamped record.
          </p>
        </FadeIn>
        <FadeIn delay={0.28}>
          <a href="#cta" style={{ background: navy, color: "#fff", padding: "15px 36px", borderRadius: 10, fontSize: 16, fontWeight: 600, textDecoration: "none", boxShadow: "0 4px 20px rgba(30,41,59,0.2)" }}>Join the PM Channel</a>
        </FadeIn>
      </section>

      {/* STATS */}
      <section style={{ background: navy, color: "#fff", padding: "70px 24px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 400, lineHeight: 1.25 }}>
                You manage dozens of vendors across hundreds of units.{" "}
                <span style={{ fontStyle: "italic", color: "#7DD3FC" }}>One missed record can cost thousands.</span>
              </h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { stat: "38%", title: "Vendor Disputes", desc: "Of property managers report at least one vendor billing dispute per month due to scope disagreements.", color: "#FCA5A5" },
              { stat: "$2,400", title: "Per Incident", desc: "Average cost of resolving a maintenance dispute where the original work order scope was undocumented.", color: "#7DD3FC" },
              { stat: "5.6 hrs", title: "Weekly", desc: "Time property managers spend reconstructing communication history for disputes, audits, and owner reports.", color: "#FCD34D" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "32px 24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 48, color: item.color, fontWeight: 400, marginBottom: 6, lineHeight: 1 }}>{item.stat}</div>
                  <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "90px 24px", maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: teal, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Built for Portfolio Operations</p>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 400, lineHeight: 1.2 }}>
              From work order to close-out —{" "}
              <span style={{ fontStyle: "italic", color: teal }}>every vendor accountable.</span>
            </h2>
          </div>
        </FadeIn>
        {[
          { icon: "\u{1F4CB}", title: "Work orders with teeth", desc: "Create a work order, define the scope, and get the vendor to confirm before work starts. When the invoice doesn't match, you have the receipt.", color: teal },
          { icon: "\u{1F50D}", title: "Tenant request tracking", desc: "Every maintenance request, complaint, and response is logged in its property channel. No more \"I never heard back\" from tenants or owners.", color: red },
          { icon: "\u{1F4F8}", title: "Verified completion", desc: "Vendor submits photos. You inspect and sign off. The record shows exactly what was done, when, and by whom.", color: gold },
          { icon: "\u{1F4B3}", title: "Invoice reconciliation", desc: "Match invoices against confirmed scope and verified completion. Pay for what was agreed, not what was assumed.", color: "#16a34a" },
          { icon: "\u{1F4CA}", title: "Owner-ready reporting", desc: "Every property has a complete, searchable history. When an owner asks \"what happened with unit 4B?\" — you have the full story in seconds.", color: navy },
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "26px 0", borderBottom: i < 4 ? `1px solid ${warmBorder}` : "none" }}>
              <span style={{ fontSize: 26, minWidth: 32 }}>{item.icon}</span>
              <div>
                <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 21, fontWeight: 400, marginBottom: 5, color: ink }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: mid, lineHeight: 1.65, maxWidth: 560 }}>{item.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* VOICES */}
      <section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 400, lineHeight: 1.25 }}>
                You{"'"}re the one in the middle.{" "}
                <span style={{ fontStyle: "italic", color: teal }}>You need the record most.</span>
              </h2>
            </div>
          </FadeIn>
          {[
            { quote: "The plumber billed us for a water heater replacement. The work order said repair. No documentation of the change in scope. The owner held me responsible.", role: "Property manager, 180 units" },
            { quote: "A tenant claimed we ignored a mold report for three months. We responded within 48 hours — but the only proof was in a text thread on my old phone.", role: "Property management company owner" },
            { quote: "I just want to know what's being done to my property and what it costs. My PM sends me a spreadsheet once a quarter. That's not enough.", role: "Property owner, 12 units" },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ position: "relative", paddingLeft: 28, marginBottom: 28 }}>
                <div style={{ position: "absolute", left: 0, top: 0, width: 4, height: "100%", borderRadius: 2, background: i === 0 ? teal : i === 1 ? red : gold }} />
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 19, fontStyle: "italic", color: ink, lineHeight: 1.55, marginBottom: 8 }}>{'"'}{item.quote}{'"'}</p>
                <p style={{ fontSize: 13, color: soft }}>— {item.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ padding: "80px 24px", maxWidth: 880, margin: "0 auto" }}>
        <FadeIn><div style={{ textAlign: "center", marginBottom: 44 }}><h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 400, lineHeight: 1.25 }}>Built for every side of the relationship.</h2></div></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18 }}>
          {[
            { role: "Property Managers", desc: "Track every vendor, work order, and tenant interaction with time-stamped accountability.", color: teal },
            { role: "Property Owners", desc: "See what's happening across your portfolio with verified records, not just quarterly summaries.", color: gold },
            { role: "Vendors", desc: "Confirmed scope, clear expectations, and payment tied to verified completion. No ambiguity.", color: red },
            { role: "Tenants", desc: "Submit requests, track progress, and have proof that you reported issues when you said you did.", color: navy },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ background: warmWhite, border: `1px solid ${warmBorder}`, borderRadius: 14, padding: "28px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 36, height: 4, borderRadius: 2, background: item.color, marginBottom: 16 }} />
                <h3 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 19, fontWeight: 400, marginBottom: 6, color: ink }}>{item.role}</h3>
                <p style={{ fontSize: 14, color: mid, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" style={{ background: navy, color: "#fff", padding: "90px 24px", textAlign: "center" }}>
        <FadeIn><img src={LOGO_SRC} alt="" style={{ width: 48, height: 48, objectFit: "contain", marginBottom: 18, opacity: 0.9 }} /></FadeIn>
        <FadeIn><h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 14 }}>Stop reconstructing reality.</h2></FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 460, margin: "0 auto 10px", lineHeight: 1.6 }}>Join the PM channel — a live ConvoRally project where property managers shape the tool together.</p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", maxWidth: 400, margin: "0 auto 32px" }}>Share your operations pain points and help us build the accountability layer your portfolio needs.</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          {submitted ? (
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "20px 28px" }}>
              <span style={{ fontSize: 26 }}>{"\u2713"}</span>
              <p style={{ fontSize: 16, fontWeight: 600 }}>You{"'"}re in.</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 300 }}>Check your email for your invite to the PM channel.</p>
            </div>
          ) : (
            <div style={{ maxWidth: 440, margin: "0 auto" }}>
              <div style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: 5 }}>
                <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && go()} style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 15, padding: "10px 12px", fontFamily: "'DM Sans', sans-serif" }} />
                <button onClick={go} style={{ background: "#fff", color: navy, border: "none", borderRadius: 7, padding: "11px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>Join the Channel</button>
              </div>
            </div>
          )}
        </FadeIn>
      </section>

      <footer style={{ padding: "52px 24px 36px", maxWidth: 800, margin: "0 auto" }}>
        <FadeIn><p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(18px, 2.8vw, 26px)", fontStyle: "italic", textAlign: "center", marginBottom: 28, background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p></FadeIn>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderTop: `1px solid ${warmBorder}`, paddingTop: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}><img src={LOGO_SRC} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} /><span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 15, color: soft }}>ConvoRally</span></div>
          <a href="/" style={{ fontSize: 13, color: soft, textDecoration: "none" }}>{"\u2190"} Back to main site</a>
        </div>
      </footer>
    </div>
  );
}
