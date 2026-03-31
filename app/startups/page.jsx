"use client";
import { useState, useEffect, useRef } from "react";
const LOGO_SRC = "/cr-logo.png";
const bg="#F3F2EF";const cardBg="#FFFFFF";const ink="#1C1917";const mid="#6B6560";const soft="#A8A29E";const bdr="#E2DFDA";
const red="#D93025";const teal="#0EA5B7";const gold="#D97706";const navy="#1E293B";
function useInView(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([i])=>{if(i.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function FadeIn({children,delay=0}){const[r,v]=useInView();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`}}>{children}</div>)}

export default function StartupsPage(){
  const[email,setEmail]=useState("");const[submitted,setSubmitted]=useState(false);const[scrollY,setScrollY]=useState(0);
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";l.rel="stylesheet";document.head.appendChild(l);const f=()=>setScrollY(window.scrollY);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  const go=()=>{if(email.includes("@"))setSubmitted(true)};
  return(
    <div style={{background:bg,color:ink,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif",overflowX:"hidden"}}>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"10px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",background:scrollY>50?"rgba(243,242,239,0.95)":"transparent",backdropFilter:scrollY>50?"blur(20px)":"none",borderBottom:scrollY>50?`1px solid ${bdr}`:"1px solid transparent",transition:"all 0.3s"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}><a href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}><img src={LOGO_SRC} alt="ConvoRally" style={{width:34,height:34,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,color:ink}}>ConvoRally</span></a><span style={{color:bdr,margin:"0 4px",fontSize:18}}>/</span><span style={{fontSize:14,color:mid,fontWeight:500}}>For Startups & VCs</span></div>
        <a href="#cta" style={{background:navy,color:"#fff",padding:"9px 22px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Get Early Access</a>
      </nav>

      <section style={{minHeight:"92vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"130px 24px 80px"}}>
        <FadeIn><p style={{fontSize:14,fontWeight:600,color:teal,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:20}}>For Startups, Founders & Investors</p></FadeIn>
        <FadeIn delay={0.08}><h1 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(36px, 5.5vw, 64px)",fontWeight:400,lineHeight:1.1,maxWidth:700,marginBottom:24,letterSpacing:"-0.02em"}}>Trust infrastructure <span style={{fontStyle:"italic",color:teal}}>for the real economy.</span></h1></FadeIn>
        <FadeIn delay={0.18}><p style={{fontSize:19,color:mid,maxWidth:540,lineHeight:1.7,marginBottom:36}}>Multi-party projects fail because context disappears — not because people forget tasks. ConvoRally records the state transitions that matter: conversation to agreement, agreement to responsibility, responsibility to verification, verification to payment.</p></FadeIn>
        <FadeIn delay={0.28}><a href="#cta" style={{background:navy,color:"#fff",padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:600,textDecoration:"none",boxShadow:"0 4px 20px rgba(30,41,59,0.15)"}}>Get Early Access</a></FadeIn>
      </section>

      <section style={{background:navy,color:"#fff",padding:"70px 24px"}}>
        <div style={{maxWidth:880,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>The opportunity isn{"'"}t another project manager. <span style={{fontStyle:"italic",color:gold}}>It{"'"}s the record layer underneath.</span></h2></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:24}}>
            {[
              {title:"$1.6T in construction alone",desc:"Construction is the largest industry without a coordination standard. Property management, HOA, forensics, and disaster recovery share the same structural problem.",color:"#FCA5A5"},
              {title:"Market-neutral architecture",desc:"ConvoRally is one platform with vertical-specific skins. The core system works the same way across every industry. Templates and language change — the record doesn't.",color:"#7DD3FC"},
              {title:"Data flywheel",desc:"Every agreement, every verification, every payment creates structured data about how multi-party work actually happens. That data compounds.",color:"#FCD34D"},
            ].map((item,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:14,padding:"28px 22px"}}><p style={{fontSize:15,fontWeight:600,marginBottom:8,color:item.color}}>{item.title}</p><p style={{fontSize:14,color:"rgba(255,255,255,0.65)",lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"90px 24px",maxWidth:800,margin:"0 auto"}}>
        <FadeIn><div style={{textAlign:"center",marginBottom:56}}><p style={{fontSize:13,fontWeight:600,color:red,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:14}}>The Product</p><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 40px)",fontWeight:400,lineHeight:1.2}}>What ConvoRally <span style={{fontStyle:"italic",color:red}}>actually does.</span></h2></div></FadeIn>
        {[
          {icon:"\u{1F4AC}",title:"Conversation capture",desc:"Project channels where every message is tied to the work, not scattered across email, text, and Slack.",color:teal},
          {icon:"\u{1F91D}",title:"Agreement locking",desc:"Turn conversations into time-stamped commitments. Scope, price, and terms confirmed by all parties before work begins.",color:red},
          {icon:"\u{2705}",title:"Verification layer",desc:"Photos, checklists, and sign-offs prove work was completed. Not claimed — proven.",color:gold},
          {icon:"\u{1F4B3}",title:"Payment triggers",desc:"Payment releases when milestones are verified. Tied to the record, not to memory or invoices.",color:"#16a34a"},
          {icon:"\u{1F504}",title:"Guest account model",desc:"External participants can view and contribute to records without a paid account. They claim their records by signing up later.",color:navy},
          {icon:"\u{1F4CA}",title:"Template library",desc:"Industry-specific templates for tasks, estimates, and forms. Usage data reveals traction before deeper vertical investment.",color:mid},
        ].map((item,i)=>(
          <FadeIn key={i} delay={i*0.08}><div style={{display:"flex",gap:20,alignItems:"flex-start",padding:"26px 0",borderBottom:i<5?`1px solid ${bdr}`:"none"}}><span style={{fontSize:26,minWidth:32}}>{item.icon}</span><div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:21,fontWeight:400,marginBottom:5,color:ink}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.65,maxWidth:560}}>{item.desc}</p></div></div></FadeIn>
        ))}
      </section>

      <section style={{padding:"80px 24px",background:"#ECEAE5"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Traction & validation.</h2></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:20}}>
            {[
              {label:"Live pilot",value:"Campbell University incubator"},
              {label:"Design partners",value:"HOA, property management company, forensics architect"},
              {label:"Customer discovery",value:"7+ recorded interviews across 4 verticals"},
              {label:"Patent filed",value:"Provisional patent 63/944,644 — conversation-driven task execution"},
              {label:"Grant",value:"NC IDEA MICRO applicant"},
              {label:"Founder background",value:"26 years in construction — built this from lived experience"},
            ].map((item,i)=>(
              <FadeIn key={i} delay={i*0.06}><div style={{background:cardBg,border:`1px solid ${bdr}`,borderRadius:10,padding:"18px 20px"}}><p style={{fontSize:12,fontWeight:600,color:soft,letterSpacing:"0.05em",textTransform:"uppercase",marginBottom:4}}>{item.label}</p><p style={{fontSize:15,color:ink,lineHeight:1.5}}>{item.value}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"80px 24px",maxWidth:880,margin:"0 auto"}}>
        <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Live vertical pages.</h2><p style={{fontSize:16,color:mid,maxWidth:440,margin:"14px auto 0",lineHeight:1.6}}>Each market has its own landing page with industry-specific pain language and early adopter channels.</p></div></FadeIn>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:16}}>
          {[
            {title:"Construction & Trades",href:"/remodeling",color:red},
            {title:"Property Management",href:"/property-management",color:teal},
            {title:"HOA Management",href:"/hoa",color:gold},
            {title:"Building Forensics",href:"/building-forensics",color:navy},
            {title:"Disaster Recovery",href:"/disaster-recovery",color:red},
          ].map((item,i)=>(
            <FadeIn key={i} delay={i*0.06}><a href={item.href} style={{display:"block",background:cardBg,border:`1px solid ${bdr}`,borderRadius:14,padding:"24px 20px",textDecoration:"none",boxShadow:"0 1px 4px rgba(0,0,0,0.04)",transition:"all 0.2s"}}><div style={{width:32,height:4,borderRadius:2,background:item.color,marginBottom:14}} /><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,fontWeight:400,color:ink}}>{item.title}</h3><p style={{fontSize:13,color:teal,fontWeight:600,marginTop:8}}>View page {"\u2192"}</p></a></FadeIn>
          ))}
        </div>
      </section>

      <section style={{padding:"70px 24px"}}>
        <div style={{maxWidth:620,margin:"0 auto"}}>
          <FadeIn>
            <p style={{fontSize:13,fontWeight:600,color:gold,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:24}}>From the Founder</p>
            <p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:17,color:soft,marginBottom:16}}>Good people still end up in bad situations.</p>
            <p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:24,fontStyle:"italic",color:ink,lineHeight:1.55,marginBottom:20}}>{'"'}After 26 years in the trenches, I realized we didn{"'"}t need more {"'"}management.{"'"} We needed a receipt.</p>
            <p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:24,fontStyle:"italic",color:ink,lineHeight:1.55,marginBottom:28}}>I built ConvoRally to give people a clear record of what was said, what changed, and what everyone agreed to — from construction to code.{'"'}</p>
            <div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width:44,height:44,borderRadius:"50%",background:navy,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,color:"#fff"}}>SB</div><div><p style={{fontSize:15,fontWeight:600,color:ink}}>Steve Batts</p><p style={{fontSize:13,color:soft}}>Founder & CEO, ConvoRally</p></div></div>
          </FadeIn>
        </div>
      </section>

      <section id="cta" style={{background:navy,color:"#fff",padding:"90px 24px",textAlign:"center"}}>
        <FadeIn><img src={LOGO_SRC} alt="" style={{width:48,height:48,objectFit:"contain",marginBottom:18,opacity:0.9}} /></FadeIn>
        <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 4vw, 42px)",fontWeight:400,lineHeight:1.2,marginBottom:8}}>Interested? Let{"'"}s talk.</h2></FadeIn>
        <FadeIn><p style={{fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:440,margin:"0 auto 28px",lineHeight:1.6}}>Whether you{"'"}re a founder who sees the same problem, an investor exploring the trust infrastructure space, or someone who just wants to stop losing money to undocumented agreements — we{"'"}d love to hear from you.</p></FadeIn>
        <FadeIn delay={0.1}>
          {submitted?(<div style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:8,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:14,padding:"20px 28px"}}><span style={{fontSize:26}}>{"\u2713"}</span><p style={{fontSize:16,fontWeight:600}}>We{"'"}ll be in touch.</p><p style={{fontSize:14,color:"rgba(255,255,255,0.6)"}}>Check your email for next steps.</p></div>
          ):(<div style={{maxWidth:440,margin:"0 auto"}}><div style={{display:"flex",gap:8,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,padding:5}}><input type="email" placeholder="you@company.com" value={email} onChange={(e)=>setEmail(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&go()} style={{flex:1,background:"transparent",border:"none",outline:"none",color:"#fff",fontSize:15,padding:"10px 12px",fontFamily:"'DM Sans', sans-serif"}} /><button onClick={go} style={{background:"#fff",color:navy,border:"none",borderRadius:7,padding:"11px 22px",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",whiteSpace:"nowrap"}}>Get in Touch</button></div></div>)}
        </FadeIn>
      </section>

      <footer style={{padding:"52px 24px 36px",maxWidth:800,margin:"0 auto"}}><FadeIn><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(18px, 2.8vw, 26px)",fontStyle:"italic",textAlign:"center",color:ink,marginBottom:28}}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p></FadeIn><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,borderTop:`1px solid ${bdr}`,paddingTop:20}}><div style={{display:"flex",alignItems:"center",gap:8}}><img src={LOGO_SRC} alt="" style={{width:22,height:22,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:15,color:soft}}>ConvoRally</span></div><a href="/" style={{fontSize:13,color:soft,textDecoration:"none"}}>{"\u2190"} Back to main site</a></div></footer>
    </div>
  );
}
