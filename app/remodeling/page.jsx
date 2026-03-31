"use client";
import { useState, useEffect, useRef } from "react";
const LOGO_SRC = "/cr-logo.png";
const bg="#F3F2EF";const cardBg="#FFFFFF";const ink="#1C1917";const mid="#6B6560";const soft="#A8A29E";const bdr="#E2DFDA";
const red="#D93025";const teal="#0EA5B7";const gold="#D97706";const navy="#1E293B";
function useInView(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([i])=>{if(i.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function FadeIn({children,delay=0}){const[r,v]=useInView();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`}}>{children}</div>)}

export default function RemodelingPage(){
  const[scrollY,setScrollY]=useState(0);
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";l.rel="stylesheet";document.head.appendChild(l);const f=()=>setScrollY(window.scrollY);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);

  return(
    <div style={{background:bg,color:ink,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif",overflowX:"hidden"}}>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"10px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",background:scrollY>50?"rgba(243,242,239,0.95)":"transparent",backdropFilter:scrollY>50?"blur(20px)":"none",borderBottom:scrollY>50?`1px solid ${bdr}`:"1px solid transparent",transition:"all 0.3s"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}><a href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}><img src={LOGO_SRC} alt="ConvoRally" style={{width:34,height:34,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,color:ink}}>ConvoRally</span></a><span style={{color:bdr,margin:"0 4px",fontSize:18}}>/</span><span style={{fontSize:14,color:mid,fontWeight:500}}>Contractors & Remodelers</span></div>
        <a href="/demo" style={{background:navy,color:"#fff",padding:"9px 22px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Book a Demo</a>
      </nav>

      {/* HERO */}
      <section style={{minHeight:"92vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"130px 24px 80px"}}>
        <FadeIn><p style={{fontSize:14,fontWeight:600,color:red,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:20}}>For Contractors & Remodelers</p></FadeIn>
        <FadeIn delay={0.08}><h1 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(36px, 5.5vw, 64px)",fontWeight:400,lineHeight:1.1,maxWidth:720,marginBottom:24,letterSpacing:"-0.02em"}}>Keep the job clear when conversations, changes, and payments <span style={{fontStyle:"italic",color:red}}>get messy.</span></h1></FadeIn>
        <FadeIn delay={0.18}><p style={{fontSize:19,color:mid,maxWidth:560,lineHeight:1.7,marginBottom:36}}>ConvoRally helps contractors keep communication, approvals, proof, and project history in one place so customers, subs, and vendors can stay aligned on what was discussed, what changed, and what work is ready for payment.</p></FadeIn>
        <FadeIn delay={0.28}><div style={{display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center"}}><a href="/demo" style={{background:navy,color:"#fff",padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:600,textDecoration:"none",boxShadow:"0 4px 20px rgba(30,41,59,0.15)"}}>Book a Demo</a><a href="/how-it-works" style={{background:"transparent",color:ink,padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:500,textDecoration:"none",border:`1.5px solid ${bdr}`}}>See How It Works</a></div></FadeIn>
      </section>

      {/* THE PROBLEM */}
      <section style={{padding:"80px 24px",background:cardBg}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:40}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Construction problems get expensive <span style={{fontStyle:"italic",color:gold}}>when the record is unclear.</span></h2><p style={{fontSize:16,color:mid,maxWidth:520,margin:"14px auto 0",lineHeight:1.65}}>A lot of job problems are not caused by bad work. They are caused by scattered conversations, unclear expectations, forgotten approvals, and missing proof.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16}}>
            {["A customer remembers the conversation differently","A change gets discussed but not clearly tracked","A sub misses an update","Photos and files are buried in phones or text threads","Work gets completed, but approval and payment feel awkward","Weeks later, nobody can easily prove what was said"].map((item,i)=>(
              <FadeIn key={i} delay={i*0.06}><div style={{display:"flex",gap:12,alignItems:"flex-start",padding:"16px 18px",background:bg,border:`1px solid ${bdr}`,borderRadius:10}}><span style={{color:red,fontSize:16,marginTop:2}}>{"\u2022"}</span><p style={{fontSize:15,color:ink,lineHeight:1.5}}>{item}</p></div></FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}><p style={{fontSize:16,color:ink,fontWeight:500,textAlign:"center",marginTop:32}}>ConvoRally helps keep the job record clear while the work is happening — not after people are already frustrated.</p></FadeIn>
        </div>
      </section>

      {/* WHAT CONVORALLY HELPS WITH */}
      <section style={{padding:"80px 24px"}}>
        <div style={{maxWidth:880,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>One place for the conversation, the work, <span style={{fontStyle:"italic",color:teal}}>and the proof.</span></h2><p style={{fontSize:16,color:mid,maxWidth:500,margin:"14px auto 0",lineHeight:1.65}}>Instead of chasing texts, emails, photos, and memory, ConvoRally helps keep everything tied together in one record your team can go back to.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:24}}>
            {[{title:"Keep conversations connected",desc:"Project communication stays tied to the actual work instead of getting buried across different apps.",color:teal},{title:"Track changes and approvals",desc:"Clarifications, updates, and approvals can stay attached to the job so nobody has to guess later.",color:red},{title:"Show proof of completion",desc:"Photos, notes, and records help show what was done and make the next step clearer.",color:gold}].map((item,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:cardBg,border:`1px solid ${bdr}`,borderRadius:14,padding:"32px 24px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}><div style={{width:32,height:4,borderRadius:2,background:item.color,marginBottom:18}} /><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,fontWeight:400,color:ink,marginBottom:8}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{padding:"80px 24px",background:"#ECEAE5"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Built for the moments where confusion <span style={{fontStyle:"italic"}}>usually starts.</span></h2></div></FadeIn>
          {[{title:"Change conversations",desc:"When scope shifts, the discussion and clarification can stay attached to the record.",icon:"\u{1F504}"},{title:"Customer approvals",desc:"When something needs approval, everyone can see what decision was made and what it was tied to.",icon:"\u{2705}"},{title:"Subcontractor coordination",desc:"When other people are involved, communication is easier to track in one place.",icon:"\u{1F465}"},{title:"Proof of work completed",desc:"Photos and updates stay with the work instead of disappearing into someone's phone.",icon:"\u{1F4F8}"},{title:"Project history",desc:"When someone asks later what happened, you have a record to look back at.",icon:"\u{1F50D}"}].map((item,i)=>(
            <FadeIn key={i} delay={i*0.08}><div style={{display:"flex",gap:20,alignItems:"flex-start",padding:"24px 0",borderBottom:i<4?`1px solid ${bdr}`:"none"}}><span style={{fontSize:24,minWidth:32}}>{item.icon}</span><div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,fontWeight:400,marginBottom:5,color:ink}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.65,maxWidth:560}}>{item.desc}</p></div></div></FadeIn>
          ))}
        </div>
      </section>

      {/* REAL STORIES */}
      <section style={{padding:"80px 24px",background:cardBg}}>
        <div style={{maxWidth:920,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:36}}><p style={{fontSize:13,fontWeight:600,color:gold,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:14}}>Real Situations</p><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Stories from the field.</h2></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:20}}>
            {[
              {title:"The right dimensions, right when she needed them.",situation:"A homeowner was at the cabinet hardware store picking out handles and needed exact cabinet dimensions to choose the right length.",helped:"The dimensions were already saved in the project record. She pulled them up on her phone without having to drive back home or call anyone.",outcome:"No wasted trip. No guessing. The info was there when it mattered."},
              {title:"A faucet change that never made it to the contractor.",situation:"An interior designer and homeowner changed a kitchen faucet by email. The contractor had already drilled the countertop for the original 8-inch spread faucet.",helped:"The contractor pulled up the project channel and showed the original selection was still the approved spec. The designer and homeowner found a replacement that fit the existing holes.",outcome:"No new countertop. No backsplash rework. Thousands saved because the record was clear."},
              {title:"Wrong cut, quick proof, fast fix.",situation:"Countertop installers cut a cooktop opening to the wrong dimensions and were ready to install the smaller size.",helped:"The contractor pulled up the original specs shared with the sales rep \u2014 in seconds. The record showed exactly what was communicated.",outcome:"Installers recut to the correct size. No new countertop. No project delay. No finger-pointing."},
            ].map((story,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:bg,border:`1px solid ${bdr}`,borderRadius:14,padding:"28px 24px",height:"100%",display:"flex",flexDirection:"column"}}><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:19,fontWeight:400,color:ink,marginBottom:12,lineHeight:1.3}}>{story.title}</h3><p style={{fontSize:13,color:mid,lineHeight:1.6,marginBottom:10}}><strong style={{color:ink,fontWeight:600}}>What happened:</strong> {story.situation}</p><p style={{fontSize:13,color:mid,lineHeight:1.6,marginBottom:10}}><strong style={{color:ink,fontWeight:600}}>How ConvoRally helped:</strong> {story.helped}</p><p style={{fontSize:13,color:ink,lineHeight:1.6,fontWeight:500,marginTop:"auto"}}>{story.outcome}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section style={{padding:"80px 24px"}}>
        <div style={{maxWidth:620,margin:"0 auto",textAlign:"center"}}>
          <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25,marginBottom:16}}>Stop reconstructing reality <span style={{fontStyle:"italic"}}>after the fact.</span></h2><p style={{fontSize:16,color:mid,lineHeight:1.7}}>When the record is scattered, people waste time arguing, digging, defending themselves, and trying to remember details under pressure. ConvoRally helps create a clearer path while the job is moving so fewer things fall through the cracks and fewer conversations turn into disputes.</p></FadeIn>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{padding:"70px 24px",background:"#ECEAE5"}}>
        <div style={{maxWidth:620,margin:"0 auto"}}>
          <FadeIn>
            <p style={{fontSize:13,fontWeight:600,color:gold,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:24}}>Built by a contractor who got tired of watching good jobs go sideways.</p>
            <p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,color:ink,lineHeight:1.65,marginBottom:20}}>After 26 years in construction, Steve Batts built ConvoRally from a problem he kept seeing again and again: people were not failing because they did not care. They were failing because conversations, changes, approvals, and proof were scattered across too many places.</p>
            <p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,color:ink,lineHeight:1.65}}>ConvoRally was built to help keep the record clear before confusion turns into blame, delay, or payment tension.</p>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{background:navy,color:"#fff",padding:"90px 24px",textAlign:"center"}}>
        <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 4vw, 42px)",fontWeight:400,lineHeight:1.2,marginBottom:14}}>See if ConvoRally fits your workflow.</h2></FadeIn>
        <FadeIn delay={0.1}><p style={{fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:460,margin:"0 auto 32px",lineHeight:1.6}}>Book a short walkthrough and see how ConvoRally can help keep communication, approvals, and proof connected on real jobs.</p></FadeIn>
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
