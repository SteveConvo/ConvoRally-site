"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "/cr-logo.png";
const bg = "#F3F2EF"; const cardBg = "#FFFFFF"; const ink = "#1C1917"; const mid = "#6B6560";
const soft = "#A8A29E"; const border = "#E2DFDA";
const red = "#D93025"; const teal = "#0EA5B7"; const gold = "#D97706"; const navy = "#1E293B";

function useInView(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([i])=>{if(i.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function FadeIn({children,delay=0}){const[r,v]=useInView();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`}}>{children}</div>)}

function VerticalLink({title,desc,icon,href,accentColor,delay,cta}){
  const[h,setH]=useState(false);
  return(<FadeIn delay={delay}><a href={href} style={{textDecoration:"none",display:"block",height:"100%"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}><div style={{background:cardBg,border:`1px solid ${h?accentColor:border}`,borderRadius:14,padding:"28px 24px",transition:"all 0.3s ease",cursor:"pointer",transform:h?"translateY(-4px)":"translateY(0)",height:"100%",display:"flex",flexDirection:"column",boxShadow:h?`0 10px 28px ${accentColor}12`:"0 1px 4px rgba(0,0,0,0.04)"}}><div style={{fontSize:28,marginBottom:12}}>{icon}</div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,fontWeight:400,color:ink,marginBottom:6}}>{title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.6,flex:1}}>{desc}</p><p style={{fontSize:14,fontWeight:600,color:accentColor,marginTop:14,opacity:h?1:0.6,transition:"opacity 0.3s"}}>{cta||"Learn more"} {"\u2192"}</p></div></a></FadeIn>);
}

export default function ConvoRallyHome(){
  const[scrollY,setScrollY]=useState(0);
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";l.rel="stylesheet";document.head.appendChild(l);const f=()=>setScrollY(window.scrollY);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);

  return(
    <div style={{background:bg,color:ink,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif",overflowX:"hidden"}}>

      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"12px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",background:scrollY>50?"rgba(243,242,239,0.95)":"transparent",backdropFilter:scrollY>50?"blur(20px)":"none",borderBottom:scrollY>50?`1px solid ${border}`:"1px solid transparent",transition:"all 0.3s"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}><img src={LOGO_SRC} alt="ConvoRally" style={{width:36,height:36,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:21,color:ink}}>ConvoRally</span></div>
        <div style={{display:"flex",gap:28,alignItems:"center"}}>
          {[{label:"How It Works",href:"/how-it-works"},{label:"Use Cases",href:"#industries"},{label:"Why ConvoRally",href:"/why"}].map((t)=>(<a key={t.label} href={t.href} style={{color:mid,textDecoration:"none",fontSize:14,fontWeight:500}}>{t.label}</a>))}
          <a href="/demo" style={{background:navy,color:"#fff",padding:"9px 22px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Book a Demo</a>
        </div>
      </nav>

      {/* 1: HERO */}
      <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"130px 24px 80px"}}>
        <FadeIn><img src={LOGO_SRC} alt="" style={{width:64,height:64,objectFit:"contain",marginBottom:28}} /></FadeIn>
        <FadeIn delay={0.08}><h1 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(40px, 6vw, 72px)",fontWeight:400,lineHeight:1.08,maxWidth:720,marginBottom:28,letterSpacing:"-0.025em"}}>If it{"'"}s not written,<br/><span style={{fontStyle:"italic"}}>it{"'"}s not real.</span></h1></FadeIn>
        <FadeIn delay={0.16}><p style={{fontSize:19,color:mid,maxWidth:560,lineHeight:1.7,marginBottom:32}}>ConvoRally keeps conversations, approvals, changes, and payments in one place — so nobody can say {'"'}that{"'"}s not what we agreed to.{'"'}</p></FadeIn>
        <FadeIn delay={0.24}>
          <div style={{display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center",marginBottom:20}}>
            <a href="/demo" style={{background:navy,color:"#fff",padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:600,textDecoration:"none",boxShadow:"0 4px 20px rgba(30,41,59,0.15)"}}>Book a Demo</a>
            <a href="/how-it-works" style={{background:"transparent",color:ink,padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:500,textDecoration:"none",border:`1.5px solid ${border}`}}>See How It Works</a>
          </div>
          <p style={{fontSize:13,color:soft,maxWidth:460,lineHeight:1.5}}>The first 100 qualifying account holders will receive Founding 100 status, with access to a private member community, direct feedback channels, and early member perks.</p>
        </FadeIn>
      </section>

      {/* 2: THE PROBLEM */}
      <section style={{padding:"80px 24px",background:cardBg}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(28px, 4vw, 42px)",fontWeight:400,lineHeight:1.25}}>Most project problems do not start with bad people.</h2><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(22px, 3vw, 32px)",fontStyle:"italic",color:gold,marginTop:8}}>They start with scattered communication.</p></div></FadeIn>
          <FadeIn delay={0.1}><p style={{fontSize:16,color:mid,lineHeight:1.7,textAlign:"center",maxWidth:560,margin:"0 auto 36px"}}>Texts, emails, calls, photos, verbal updates, and forgotten details create confusion fast. Then when something goes wrong, everyone remembers it differently.</p></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:16}}>
            {["\"That's not what we agreed to.\"","\"I thought someone already told you.\"","\"Nobody told me it changed.\"","\"I never approved that.\"","\"We can't find the photo, text, or update.\"","\"Now everyone remembers it differently.\""].map((q,i)=>(
              <FadeIn key={i} delay={i*0.06}><div style={{background:bg,border:`1px solid ${border}`,borderRadius:10,padding:"18px 20px"}}><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:17,fontStyle:"italic",color:ink,lineHeight:1.4}}>{q}</p></div></FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}><p style={{fontSize:16,color:ink,fontWeight:500,textAlign:"center",marginTop:36}}>ConvoRally helps turn scattered conversations into a clear record people can actually use.</p></FadeIn>
        </div>
      </section>

      {/* 3: WHAT CONVORALLY IS */}
      <section style={{padding:"80px 24px"}}>
        <div style={{maxWidth:880,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(28px, 4vw, 42px)",fontWeight:400,lineHeight:1.25}}>Not just project management.</h2><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(22px, 3vw, 32px)",fontStyle:"italic",color:teal,marginTop:8}}>A system of record for real-world work.</p><p style={{fontSize:16,color:mid,maxWidth:520,margin:"16px auto 0",lineHeight:1.65}}>Most tools track tasks. ConvoRally helps track the truth behind them — the conversations, clarifications, approvals, proof, and decisions that make work official.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:24}}>
            {[{title:"Discuss",desc:"Keep communication tied to the actual job, task, issue, or decision.",color:teal,icon:"\u{1F4AC}"},{title:"Decide",desc:"Capture changes, approvals, and responsibilities before confusion grows.",color:red,icon:"\u{1F91D}"},{title:"Prove",desc:"Keep photos, files, and proof connected to what actually happened.",color:gold,icon:"\u{2705}"}].map((item,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:cardBg,border:`1px solid ${border}`,borderRadius:14,padding:"32px 24px",textAlign:"center",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}><div style={{fontSize:32,marginBottom:14}}>{item.icon}</div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:22,fontWeight:400,color:item.color,marginBottom:8}}>{item.title}</h3><p style={{fontSize:15,color:mid,lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4: HOW IT WORKS PREVIEW */}
      <section style={{padding:"80px 24px",background:navy,color:"#fff"}}>
        <div style={{maxWidth:760,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:52}}><p style={{fontSize:13,fontWeight:600,color:gold,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:14}}>How ConvoRally Works</p><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(28px, 4vw, 42px)",fontWeight:400,lineHeight:1.25}}>Keep the conversation, work, approvals, and proof connected.</h2></div></FadeIn>
          {[{step:"01",title:"Start the conversation",desc:"Begin with the people, questions, and details tied to the work.",color:"#7DD3FC"},{step:"02",title:"Turn it into clear work or decisions",desc:"Organize tasks, approvals, updates, and responsibilities so the next step is easier to follow.",color:"#FCA5A5"},{step:"03",title:"Capture changes and approvals",desc:"When something shifts, the clarification and approval stay with the record.",color:"#FCD34D"},{step:"04",title:"Keep proof attached",desc:"Photos, files, notes, and completion details stay tied to what happened.",color:"#86EFAC"}].map((item,i)=>(
            <FadeIn key={i} delay={i*0.08}><div style={{display:"flex",gap:24,alignItems:"flex-start",padding:"28px 0",borderBottom:i<3?"1px solid rgba(255,255,255,0.1)":"none"}}><div style={{fontSize:13,fontWeight:700,color:item.color,minWidth:28,paddingTop:4}}>{item.step}</div><div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:22,fontWeight:400,marginBottom:6}}>{item.title}</h3><p style={{fontSize:15,color:"rgba(255,255,255,0.7)",lineHeight:1.65,maxWidth:560}}>{item.desc}</p></div></div></FadeIn>
          ))}
          <FadeIn delay={0.4}><div style={{textAlign:"center",marginTop:36}}><a href="/how-it-works" style={{color:"#fff",fontSize:15,fontWeight:600,textDecoration:"none",borderBottom:"2px solid rgba(255,255,255,0.3)"}}>See How It Works {"\u2192"}</a></div></FadeIn>
        </div>
      </section>

      {/* 5: WHO IT'S FOR */}
      <section id="industries" style={{padding:"80px 24px"}}>
        <div style={{maxWidth:980,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(28px, 4vw, 42px)",fontWeight:400,lineHeight:1.25}}>Built for teams where communication mistakes become expensive.</h2><p style={{fontSize:16,color:mid,maxWidth:500,margin:"14px auto 0",lineHeight:1.6}}>ConvoRally is especially useful where multiple people are involved, changes happen in real time, and the record matters later.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(210px, 1fr))",gap:18}}>
            <VerticalLink icon={"\u{1F3D7}\uFE0F"} title="Contractors & Remodelers" desc="Keep communication, approvals, changes, and proof tied to the job." href="/remodeling" delay={0} accentColor={red} cta="See Contractor Use Cases" />
            <VerticalLink icon={"\u{1F3E2}"} title="HOAs & Property Managers" desc="Keep vendor communication, maintenance decisions, and records from getting buried." href="/hoa" delay={0.06} accentColor={gold} cta="See HOA Use Cases" />
            <VerticalLink icon={"\u{1F50D}"} title="Building Forensics & Specialists" desc="Keep findings, communication, documentation, and expert coordination organized." href="/building-forensics" delay={0.12} accentColor={teal} cta="See Specialist Use Cases" />
            <VerticalLink icon={"\u{1F3E2}"} title="Property Management" desc="Keep owners, tenants, vendors, and managers on the same page." href="/property-management" delay={0.18} accentColor={navy} cta="Learn more" />
            <VerticalLink icon={"\u{1F32A}\uFE0F"} title="Disaster Recovery" desc="Coordinate teams, volunteers, and vendors when speed and documentation both matter." href="/disaster-recovery" delay={0.24} accentColor={red} cta="Learn more" />
          </div>
        </div>
      </section>

      {/* 6: REAL STORIES */}
      <section style={{padding:"80px 24px",background:cardBg}}>
        <div style={{maxWidth:920,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:14}}><p style={{fontSize:13,fontWeight:600,color:gold,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:14}}>Real Situations</p><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(28px, 4vw, 42px)",fontWeight:400,lineHeight:1.25,marginBottom:8}}>ConvoRally in the real world.</h2><p style={{fontSize:16,color:mid,maxWidth:460,margin:"0 auto 36px"}}>These are the moments where scattered communication usually turns into delay, tension, or blame.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:20}}>
            {[
              {tag:"Contractor",tagColor:red,title:"A faucet change that never made it to the contractor.",situation:"An interior designer and homeowner changed a kitchen faucet by email. The contractor had already drilled the countertop for the original faucet.",helped:"The contractor pulled up the project channel and showed the original selection was still the approved spec.",outcome:"No new countertop. No backsplash rework. Thousands saved because the record was clear."},
              {tag:"Contractor",tagColor:red,title:"Wrong cut, quick proof, fast fix.",situation:"Countertop installers cut a cooktop opening to the wrong dimensions and were ready to install the smaller size.",helped:"The contractor pulled up the original specs in seconds. The record showed exactly what was communicated.",outcome:"Installers recut to the correct size. No new countertop. No project delay."},
              {tag:"HOA",tagColor:gold,title:"$11,000 that didn\u2019t have to be spent.",situation:"An HOA water pump failed and cost $11,000 to replace. The board discovered the same pump had been replaced two years earlier \u2014 $22,000 total.",helped:"This happened before ConvoRally. The board struggled to find records. Documentation was incomplete and scattered.",outcome:"With complete records, the second replacement could have been a warranty claim."},
            ].map((story,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:bg,border:`1px solid ${border}`,borderRadius:14,padding:"28px 24px",height:"100%",display:"flex",flexDirection:"column"}}><span style={{display:"inline-block",fontSize:11,fontWeight:600,color:story.tagColor,background:`${story.tagColor}10`,padding:"3px 10px",borderRadius:20,marginBottom:14,alignSelf:"flex-start"}}>{story.tag}</span><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:19,fontWeight:400,color:ink,marginBottom:12,lineHeight:1.3}}>{story.title}</h3><p style={{fontSize:13,color:mid,lineHeight:1.6,marginBottom:10}}><strong style={{color:ink,fontWeight:600}}>What happened:</strong> {story.situation}</p><p style={{fontSize:13,color:mid,lineHeight:1.6,marginBottom:10}}><strong style={{color:ink,fontWeight:600}}>How ConvoRally helped:</strong> {story.helped}</p><p style={{fontSize:13,color:ink,lineHeight:1.6,fontWeight:500,marginTop:"auto"}}>{story.outcome}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7: WHY JOINING EARLY */}
      <section style={{padding:"80px 24px"}}>
        <div style={{maxWidth:880,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(28px, 4vw, 42px)",fontWeight:400,lineHeight:1.25}}>Why people are joining ConvoRally early.</h2><p style={{fontSize:16,color:mid,maxWidth:480,margin:"14px auto 0",lineHeight:1.6}}>Early members are not just getting software. They are getting a chance to help shape a platform built to reduce confusion, improve accountability, and make communication easier to trust.</p></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:24}}>
            {[{title:"Get clearer records",desc:"Keep conversations, approvals, and proof easier to find and follow.",icon:"\u{1F4CB}",color:teal},{title:"Help shape the platform",desc:"Share bugs, ideas, and workflow pain points while the product is still being shaped.",icon:"\u{1F6E0}\uFE0F",color:red},{title:"Join a real working community",desc:"Learn how other contractors, property managers, and specialists are using ConvoRally in the real world.",icon:"\u{1F465}",color:gold}].map((item,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:cardBg,border:`1px solid ${border}`,borderRadius:14,padding:"32px 24px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}><div style={{fontSize:28,marginBottom:14}}>{item.icon}</div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,fontWeight:400,color:ink,marginBottom:8}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8: FOUNDER */}
      <section style={{padding:"70px 24px",background:"#ECEAE5"}}>
        <div style={{maxWidth:620,margin:"0 auto"}}>
          <FadeIn>
            <p style={{fontSize:13,fontWeight:600,color:gold,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:24}}>Built from real project pain, not theory.</p>
            <p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,color:ink,lineHeight:1.65,marginBottom:20}}>After 26 years in construction and high-stakes project work, Steve Batts built ConvoRally to solve a problem he kept seeing over and over: when conversations, changes, and approvals get scattered, good people still end up in bad situations.</p>
            <p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,color:ink,lineHeight:1.65,marginBottom:28}}>ConvoRally was built to help keep the record clear before confusion turns into blame, delay, or payment tension.</p>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width:44,height:44,borderRadius:"50%",background:navy,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,color:"#fff"}}>SB</div><div><p style={{fontSize:15,fontWeight:600,color:ink}}>Steve Batts</p><p style={{fontSize:13,color:soft}}>Founder & CEO, ConvoRally</p></div></div>
              <a href="/why" style={{fontSize:14,fontWeight:600,color:teal,textDecoration:"none"}}>Why ConvoRally Exists {"\u2192"}</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9: FOUNDING 100 MENTION */}
      <section style={{padding:"50px 24px",textAlign:"center"}}>
        <FadeIn>
          <p style={{fontSize:13,fontWeight:600,color:navy,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:12}}>Founding 100</p>
          <p style={{fontSize:16,color:mid,maxWidth:520,margin:"0 auto",lineHeight:1.65}}>The first 100 qualifying account holders will receive Founding 100 status, with access to a private member community, direct feedback channels, and early member perks.</p>
          <p style={{fontSize:14,color:soft,maxWidth:460,margin:"12px auto 0",lineHeight:1.6}}>This private early-member space is designed for people using ConvoRally in real workflows who want to ask questions, share ideas, surface bugs, and help shape what gets built next.</p>
        </FadeIn>
      </section>

      {/* 10: FINAL CTA */}
      <section style={{background:navy,color:"#fff",padding:"90px 24px",textAlign:"center"}}>
        <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(28px, 4.5vw, 44px)",fontWeight:400,lineHeight:1.2,marginBottom:14}}>See whether ConvoRally fits your workflow.</h2></FadeIn>
        <FadeIn delay={0.1}><p style={{fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:460,margin:"0 auto 32px",lineHeight:1.6}}>Book a short walkthrough and see how ConvoRally helps keep communication, approvals, and proof connected in real work.</p></FadeIn>
        <FadeIn delay={0.2}>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <a href="/demo" style={{background:"#fff",color:navy,padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:600,textDecoration:"none"}}>Book a Demo</a>
            <a href="/early-access" style={{background:"transparent",color:"#fff",padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:500,textDecoration:"none",border:"1.5px solid rgba(255,255,255,0.2)"}}>Get Early Access</a>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{padding:"52px 24px 36px",maxWidth:880,margin:"0 auto"}}>
        <FadeIn><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(20px, 3vw, 28px)",fontStyle:"italic",textAlign:"center",color:ink,marginBottom:32}}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p></FadeIn>
        <div style={{display:"flex",justifyContent:"center",gap:24,flexWrap:"wrap",marginBottom:24}}>
          {[{l:"How It Works",h:"/how-it-works"},{l:"Contractors & Remodelers",h:"/remodeling"},{l:"HOAs & Property Mgmt",h:"/hoa"},{l:"Building Forensics",h:"/building-forensics"},{l:"Property Management",h:"/property-management"},{l:"Disaster Recovery",h:"/disaster-recovery"},{l:"Why ConvoRally",h:"/why"},{l:"Book a Demo",h:"/demo"},{l:"Get Early Access",h:"/early-access"}].map((x)=>(<a key={x.l} href={x.h} style={{fontSize:13,color:soft,textDecoration:"none"}}>{x.l}</a>))}
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,borderTop:`1px solid ${border}`,paddingTop:20}}><div style={{display:"flex",alignItems:"center",gap:8}}><img src={LOGO_SRC} alt="" style={{width:22,height:22,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:15,color:soft}}>ConvoRally</span></div><p style={{fontSize:12,color:soft}}>{"\u00A9"} 2026 ConvoRally</p></div>
      </footer>
    </div>
  );
}
