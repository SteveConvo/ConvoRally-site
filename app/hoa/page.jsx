"use client";
import { useState, useEffect, useRef } from "react";
const LOGO_SRC = "/cr-logo.png";
const bg="#F3F2EF";const cardBg="#FFFFFF";const ink="#1C1917";const mid="#6B6560";const soft="#A8A29E";const bdr="#E2DFDA";
const red="#D93025";const teal="#0EA5B7";const gold="#D97706";const navy="#1E293B";
function useInView(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([i])=>{if(i.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function FadeIn({children,delay=0}){const[r,v]=useInView();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`}}>{children}</div>)}

export default function HOAPage(){
  const[scrollY,setScrollY]=useState(0);
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";l.rel="stylesheet";document.head.appendChild(l);const f=()=>setScrollY(window.scrollY);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);

  return(
    <div style={{background:bg,color:ink,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif",overflowX:"hidden"}}>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"10px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",background:scrollY>50?"rgba(243,242,239,0.95)":"transparent",backdropFilter:scrollY>50?"blur(20px)":"none",borderBottom:scrollY>50?`1px solid ${bdr}`:"1px solid transparent",transition:"all 0.3s"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}><a href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}><img src={LOGO_SRC} alt="ConvoRally" style={{width:34,height:34,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,color:ink}}>ConvoRally</span></a><span style={{color:bdr,margin:"0 4px",fontSize:18}}>/</span><span style={{fontSize:14,color:mid,fontWeight:500}}>HOAs & Property Managers</span></div>
        <a href="/demo" style={{background:navy,color:"#fff",padding:"9px 22px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Book a Demo</a>
      </nav>

      {/* HERO */}
      <section style={{minHeight:"92vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"130px 24px 80px"}}>
        <FadeIn><p style={{fontSize:14,fontWeight:600,color:gold,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:20}}>For HOAs & Property Managers</p></FadeIn>
        <FadeIn delay={0.08}><h1 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(36px, 5.5vw, 64px)",fontWeight:400,lineHeight:1.1,maxWidth:720,marginBottom:24,letterSpacing:"-0.02em"}}>Keep property decisions, vendor communication, and records <span style={{fontStyle:"italic",color:gold}}>from getting buried.</span></h1></FadeIn>
        <FadeIn delay={0.18}><p style={{fontSize:19,color:mid,maxWidth:560,lineHeight:1.7,marginBottom:36}}>ConvoRally helps property managers and HOA leaders keep maintenance conversations, approvals, documents, and vendor coordination in one usable record.</p></FadeIn>
        <FadeIn delay={0.28}><div style={{display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center"}}><a href="/demo" style={{background:navy,color:"#fff",padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:600,textDecoration:"none",boxShadow:"0 4px 20px rgba(30,41,59,0.15)"}}>Book a Demo</a><a href="/how-it-works" style={{background:"transparent",color:ink,padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:500,textDecoration:"none",border:`1.5px solid ${bdr}`}}>See How It Works</a></div></FadeIn>
      </section>

      {/* THE PROBLEM */}
      <section style={{padding:"80px 24px",background:cardBg}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:40}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Important property history gets lost <span style={{fontStyle:"italic",color:gold}}>more easily than it should.</span></h2><p style={{fontSize:16,color:mid,maxWidth:520,margin:"14px auto 0",lineHeight:1.65}}>Maintenance issues, vendor discussions, board decisions, warranties, and updates often get scattered across emails, text threads, meeting notes, and people{"'"}s memory.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16}}>
            {["Board turnover causes history to disappear","Vendor communication gets buried","Nobody can easily find what was approved","Maintenance decisions are hard to trace later","Warranties and records are difficult to locate when needed","People spend too much time digging for answers"].map((item,i)=>(
              <FadeIn key={i} delay={i*0.06}><div style={{display:"flex",gap:12,alignItems:"flex-start",padding:"16px 18px",background:bg,border:`1px solid ${bdr}`,borderRadius:10}}><span style={{color:gold,fontSize:16,marginTop:2}}>{"\u2022"}</span><p style={{fontSize:15,color:ink,lineHeight:1.5}}>{item}</p></div></FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}><p style={{fontSize:16,color:ink,fontWeight:500,textAlign:"center",marginTop:32}}>ConvoRally helps keep communication and records organized while the work is happening, not after the history is already hard to recover.</p></FadeIn>
        </div>
      </section>

      {/* WHAT CONVORALLY HELPS WITH */}
      <section style={{padding:"80px 24px"}}>
        <div style={{maxWidth:880,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>One place for the conversation, the record, <span style={{fontStyle:"italic",color:teal}}>and the follow-through.</span></h2><p style={{fontSize:16,color:mid,maxWidth:500,margin:"14px auto 0",lineHeight:1.65}}>ConvoRally helps keep vendor communication, supporting files, approvals, and updates tied together so your team can look back and understand what happened.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:24}}>
            {[{title:"Keep communication easier to trace",desc:"Vendor questions, updates, and responses stay tied to the issue.",color:teal},{title:"Keep approvals and records together",desc:"Important decisions can stay connected to the files, conversations, and context around them.",color:gold},{title:"Keep property history more usable",desc:"When the same issue comes up later, the path to the answer is easier to find.",color:red}].map((item,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:cardBg,border:`1px solid ${bdr}`,borderRadius:14,padding:"32px 24px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}><div style={{width:32,height:4,borderRadius:2,background:item.color,marginBottom:18}} /><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,fontWeight:400,color:ink,marginBottom:8}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{padding:"80px 24px",background:"#ECEAE5"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Useful for the moments that <span style={{fontStyle:"italic"}}>usually create confusion.</span></h2></div></FadeIn>
          {[{title:"Maintenance issues",desc:"Keep the conversation, vendor coordination, and updates together.",icon:"\u{1F527}"},{title:"Board and committee decisions",desc:"Keep records tied to the issue instead of spread across multiple places.",icon:"\u{1F5F3}\uFE0F"},{title:"Vendor communication",desc:"Keep files, responses, and status updates easier to trace.",icon:"\u{1F4E3}"},{title:"Warranties and supporting documents",desc:"Keep important files connected to the work and the history behind it.",icon:"\u{1F4C4}"}].map((item,i)=>(
            <FadeIn key={i} delay={i*0.08}><div style={{display:"flex",gap:20,alignItems:"flex-start",padding:"24px 0",borderBottom:i<3?`1px solid ${bdr}`:"none"}}><span style={{fontSize:24,minWidth:32}}>{item.icon}</span><div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,fontWeight:400,marginBottom:5,color:ink}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.65,maxWidth:560}}>{item.desc}</p></div></div></FadeIn>
          ))}
        </div>
      </section>

      {/* REAL STORY - $22K PUMP */}
      <section style={{padding:"80px 24px",background:cardBg}}>
        <div style={{maxWidth:640,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:32}}><p style={{fontSize:13,fontWeight:600,color:gold,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:14}}>Real Situation</p><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(24px, 3.5vw, 34px)",fontWeight:400,lineHeight:1.25}}>$11,000 that didn{"'"}t have to be spent.</h2></div></FadeIn>
          <FadeIn delay={0.1}>
            <div style={{background:bg,border:`1px solid ${bdr}`,borderRadius:14,padding:"32px 28px"}}>
              <span style={{display:"inline-block",fontSize:11,fontWeight:600,color:gold,background:`${gold}10`,padding:"3px 10px",borderRadius:20,marginBottom:16}}>HOA Board</span>
              <p style={{fontSize:15,color:mid,lineHeight:1.7,marginBottom:14}}><strong style={{color:ink,fontWeight:600}}>What happened:</strong> An HOA water pump failed and cost $11,000 to replace. The board later discovered the same pump had already been replaced two or three years earlier — another $11,000. That{"'"}s $22,000 total on the same pump.</p>
              <p style={{fontSize:15,color:mid,lineHeight:1.7,marginBottom:14}}><strong style={{color:ink,fontWeight:600}}>What went wrong:</strong> The board struggled to find records of the original replacement. When they finally found some documentation, it was incomplete and scattered. Nobody could quickly confirm when the first pump was installed or what the warranty terms were.</p>
              <p style={{fontSize:15,color:ink,lineHeight:1.7,fontWeight:500}}>With complete, searchable records, the second replacement could have been a warranty claim instead of another $11,000 bill. The board member said this was exactly the kind of problem ConvoRally would have prevented.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section style={{padding:"80px 24px"}}>
        <div style={{maxWidth:620,margin:"0 auto",textAlign:"center"}}>
          <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25,marginBottom:16}}>Make future questions <span style={{fontStyle:"italic"}}>easier to answer.</span></h2><p style={{fontSize:16,color:mid,lineHeight:1.7}}>When property records are hard to find, the same confusion gets repeated. ConvoRally helps make communication, files, and decisions easier to revisit later.</p></FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{background:navy,color:"#fff",padding:"90px 24px",textAlign:"center"}}>
        <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 4vw, 42px)",fontWeight:400,lineHeight:1.2,marginBottom:14}}>See if ConvoRally fits your property workflow.</h2></FadeIn>
        <FadeIn delay={0.1}><p style={{fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:460,margin:"0 auto 32px",lineHeight:1.6}}>Book a short walkthrough and see how ConvoRally can help your team keep communication and records easier to use.</p></FadeIn>
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
