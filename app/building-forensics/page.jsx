"use client";
import { useState, useEffect, useRef } from "react";
const LOGO_SRC = "/cr-logo.png";
const bg="#F3F2EF";const cardBg="#FFFFFF";const ink="#1C1917";const mid="#6B6560";const soft="#A8A29E";const bdr="#E2DFDA";
const red="#D93025";const teal="#0EA5B7";const gold="#D97706";const navy="#1E293B";
function useInView(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([i])=>{if(i.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function FadeIn({children,delay=0}){const[r,v]=useInView();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`}}>{children}</div>)}

export default function ForensicsPage(){
  const[scrollY,setScrollY]=useState(0);
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";l.rel="stylesheet";document.head.appendChild(l);const f=()=>setScrollY(window.scrollY);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);

  return(
    <div style={{background:bg,color:ink,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif",overflowX:"hidden"}}>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"10px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",background:scrollY>50?"rgba(243,242,239,0.95)":"transparent",backdropFilter:scrollY>50?"blur(20px)":"none",borderBottom:scrollY>50?`1px solid ${bdr}`:"1px solid transparent",transition:"all 0.3s"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}><a href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}><img src={LOGO_SRC} alt="ConvoRally" style={{width:34,height:34,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,color:ink}}>ConvoRally</span></a><span style={{color:bdr,margin:"0 4px",fontSize:18}}>/</span><span style={{fontSize:14,color:mid,fontWeight:500}}>Building Forensics & Specialists</span></div>
        <a href="/demo" style={{background:navy,color:"#fff",padding:"9px 22px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Book a Demo</a>
      </nav>

      {/* HERO */}
      <section style={{minHeight:"92vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"130px 24px 80px"}}>
        <FadeIn><p style={{fontSize:14,fontWeight:600,color:teal,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:20}}>For Building Forensics & Specialists</p></FadeIn>
        <FadeIn delay={0.08}><h1 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(36px, 5.5vw, 64px)",fontWeight:400,lineHeight:1.1,maxWidth:720,marginBottom:24,letterSpacing:"-0.02em"}}>Keep expert communication, findings, and documentation <span style={{fontStyle:"italic",color:teal}}>tied to the real issue.</span></h1></FadeIn>
        <FadeIn delay={0.18}><p style={{fontSize:19,color:mid,maxWidth:560,lineHeight:1.7,marginBottom:36}}>For specialists working across owners, consultants, contractors, attorneys, or technical stakeholders, ConvoRally helps keep the record organized, searchable, and easier to follow.</p></FadeIn>
        <FadeIn delay={0.28}><div style={{display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center"}}><a href="/demo" style={{background:navy,color:"#fff",padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:600,textDecoration:"none",boxShadow:"0 4px 20px rgba(30,41,59,0.15)"}}>Book a Demo</a><a href="/how-it-works" style={{background:"transparent",color:ink,padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:500,textDecoration:"none",border:`1.5px solid ${bdr}`}}>See How It Works</a></div></FadeIn>
      </section>

      {/* THE PROBLEM */}
      <section style={{padding:"80px 24px",background:cardBg}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:40}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Complex work gets harder when communication and documentation <span style={{fontStyle:"italic",color:teal}}>are scattered.</span></h2><p style={{fontSize:16,color:mid,maxWidth:520,margin:"14px auto 0",lineHeight:1.65}}>When multiple people are involved, important context can get split across messages, files, calls, and separate tools. That makes it harder to keep the record clean and harder to reconstruct later.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16}}>
            {["Too many stakeholders are involved","Findings and supporting files live in different places","Communication gets disconnected from the issue","Important details get misunderstood","It becomes harder to show the sequence of what happened"].map((item,i)=>(
              <FadeIn key={i} delay={i*0.06}><div style={{display:"flex",gap:12,alignItems:"flex-start",padding:"16px 18px",background:bg,border:`1px solid ${bdr}`,borderRadius:10}}><span style={{color:teal,fontSize:16,marginTop:2}}>{"\u2022"}</span><p style={{fontSize:15,color:ink,lineHeight:1.5}}>{item}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CONVORALLY HELPS WITH */}
      <section style={{padding:"80px 24px"}}>
        <div style={{maxWidth:880,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>One place to keep communication, files, <span style={{fontStyle:"italic",color:teal}}>and context tied together.</span></h2><p style={{fontSize:16,color:mid,maxWidth:520,margin:"14px auto 0",lineHeight:1.65}}>ConvoRally helps keep the discussion, updates, supporting files, and issue history more organized so it is easier to follow the path of what was discussed and what happened next.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:24}}>
            {[{title:"Keep expert communication connected",desc:"Important questions, clarifications, and updates stay tied to the issue.",color:teal},{title:"Keep supporting materials easier to review",desc:"Files, notes, and visual proof can stay connected to the record.",color:red},{title:"Keep the timeline easier to follow",desc:"When questions come up later, the path is easier to review.",color:gold}].map((item,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:cardBg,border:`1px solid ${bdr}`,borderRadius:14,padding:"32px 24px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}><div style={{width:32,height:4,borderRadius:2,background:item.color,marginBottom:18}} /><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,fontWeight:400,color:ink,marginBottom:8}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{padding:"80px 24px",background:"#ECEAE5"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Useful where clarity <span style={{fontStyle:"italic"}}>matters most.</span></h2></div></FadeIn>
          {[{title:"Multi-party issue review",desc:"Keep the discussion easier to follow across stakeholders.",icon:"\u{1F465}"},{title:"Documentation and supporting evidence",desc:"Keep photos, files, and notes tied to the issue.",icon:"\u{1F4CB}"},{title:"Clarifications and decisions",desc:"Keep key details easier to locate later.",icon:"\u{1F50D}"}].map((item,i)=>(
            <FadeIn key={i} delay={i*0.08}><div style={{display:"flex",gap:20,alignItems:"flex-start",padding:"24px 0",borderBottom:i<2?`1px solid ${bdr}`:"none"}}><span style={{fontSize:24,minWidth:32}}>{item.icon}</span><div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,fontWeight:400,marginBottom:5,color:ink}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.65,maxWidth:560}}>{item.desc}</p></div></div></FadeIn>
          ))}
        </div>
      </section>

      {/* STORY CARDS */}
      <section style={{padding:"80px 24px",background:cardBg}}>
        <div style={{maxWidth:920,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:36}}><p style={{fontSize:13,fontWeight:600,color:teal,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:14}}>Real Situations</p><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>ConvoRally in specialist workflows.</h2></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:20}}>
            {[
              {tag:"Specialist",title:"A decision was easier to verify.",situation:"Multiple people had discussed an issue, but later not everyone remembered the same details.",helped:"ConvoRally made it easier to review the discussion, files, and sequence of updates.",outcome:"The team could get back to facts faster."},
              {tag:"Specialist",title:"The team could see what changed.",situation:"An issue evolved over time, but not everyone had the same understanding later.",helped:"ConvoRally helped keep the clarification tied to the issue record.",outcome:"That made follow-through easier."},
              {tag:"Forensics",title:"Supporting evidence stayed connected.",situation:"Files, notes, and observations were coming from different directions.",helped:"ConvoRally helped keep them tied closer to the issue and the discussion around it.",outcome:"That made the record easier to follow later."},
            ].map((story,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:bg,border:`1px solid ${bdr}`,borderRadius:14,padding:"28px 24px",height:"100%",display:"flex",flexDirection:"column"}}><span style={{display:"inline-block",fontSize:11,fontWeight:600,color:teal,background:`${teal}10`,padding:"3px 10px",borderRadius:20,marginBottom:14,alignSelf:"flex-start"}}>{story.tag}</span><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:19,fontWeight:400,color:ink,marginBottom:12,lineHeight:1.3}}>{story.title}</h3><p style={{fontSize:13,color:mid,lineHeight:1.6,marginBottom:10}}><strong style={{color:ink,fontWeight:600}}>What happened:</strong> {story.situation}</p><p style={{fontSize:13,color:mid,lineHeight:1.6,marginBottom:10}}><strong style={{color:ink,fontWeight:600}}>How ConvoRally helped:</strong> {story.helped}</p><p style={{fontSize:13,color:ink,lineHeight:1.6,fontWeight:500,marginTop:"auto"}}>{story.outcome}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section style={{padding:"80px 24px"}}>
        <div style={{maxWidth:620,margin:"0 auto",textAlign:"center"}}>
          <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25,marginBottom:16}}>When clarity matters, <span style={{fontStyle:"italic"}}>the record matters too.</span></h2><p style={{fontSize:16,color:mid,lineHeight:1.7}}>ConvoRally helps reduce the friction of scattered communication so teams can spend less time reconstructing the story and more time working from a clearer shared record.</p></FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{background:navy,color:"#fff",padding:"90px 24px",textAlign:"center"}}>
        <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 4vw, 42px)",fontWeight:400,lineHeight:1.2,marginBottom:14}}>Talk through your workflow.</h2></FadeIn>
        <FadeIn delay={0.1}><p style={{fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:460,margin:"0 auto 32px",lineHeight:1.6}}>Book a short walkthrough and see whether ConvoRally fits the way your team communicates, documents, and tracks decisions.</p></FadeIn>
        <FadeIn delay={0.2}>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:16}}>
            <a href="/demo" style={{background:"#fff",color:navy,padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:600,textDecoration:"none"}}>Book a Demo</a>
            <a href="/early-access" style={{background:"transparent",color:"#fff",padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:500,textDecoration:"none",border:"1.5px solid rgba(255,255,255,0.2)"}}>Get Early Access</a>
          </div>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.4)",maxWidth:400,margin:"0 auto"}}>The first 100 qualifying account holders will receive Founding 100 status.</p>
        </FadeIn>
      </section>

      <footer style={{padding:"52px 24px 36px",maxWidth:800,margin:"0 auto"}}><FadeIn><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(18px, 2.8vw, 26px)",fontStyle:"italic",textAlign:"center",color:ink,marginBottom:28}}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p></FadeIn><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,borderTop:`1px solid ${bdr}`,paddingTop:20}}><div style={{display:"flex",alignItems:"center",gap:8}}><img src={LOGO_SRC} alt="" style={{width:22,height:22,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:15,color:soft}}>ConvoRally</span></div><a href="/" style={{fontSize:13,color:soft,textDecoration:"none"}}>{"\u2190"} Back to main site</a></div></footer>
    </div>
  );
}
