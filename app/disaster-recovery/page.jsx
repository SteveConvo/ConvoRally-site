"use client";
import { useState, useEffect, useRef } from "react";
const LOGO_SRC = "/cr-logo.png";
const bg="#F3F2EF";const cardBg="#FFFFFF";const ink="#1C1917";const mid="#6B6560";const soft="#A8A29E";const bdr="#E2DFDA";
const red="#D93025";const teal="#0EA5B7";const gold="#D97706";const navy="#1E293B";
function useInView(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([i])=>{if(i.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function FadeIn({children,delay=0}){const[r,v]=useInView();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`}}>{children}</div>)}
function Founding100({email,setEmail,submitted,go}){return(<div style={{maxWidth:560,margin:"0 auto"}}><FadeIn><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:14,marginBottom:32}}>{[{icon:"\u{1F455}",text:"Founding member shirt — free"},{icon:"\u{1F512}",text:"Locked-in pricing for life"},{icon:"\u{1F4AC}",text:"Direct channel with the founder"},{icon:"\u{1F3F7}\uFE0F",text:"Your name on the Founders Wall"},{icon:"\u{1F5F3}\uFE0F",text:"Vote on the next features we build"},{icon:"\u{1F4C4}",text:"First access to industry templates"}].map((p,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"center",fontSize:14,color:"rgba(255,255,255,0.8)"}}><span style={{fontSize:18}}>{p.icon}</span>{p.text}</div>))}</div></FadeIn><FadeIn delay={0.1}>{submitted?(<div style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:8,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:14,padding:"20px 28px",width:"100%",textAlign:"center"}}><span style={{fontSize:26}}>{"\u2713"}</span><p style={{fontSize:16,fontWeight:600}}>You{"'"}re in.</p><p style={{fontSize:14,color:"rgba(255,255,255,0.6)"}}>Check your email for your Founding 100 invite.</p></div>):(<div style={{display:"flex",gap:8,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,padding:5}}><input type="email" placeholder="you@organization.org" value={email} onChange={(e)=>setEmail(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&go()} style={{flex:1,background:"transparent",border:"none",outline:"none",color:"#fff",fontSize:15,padding:"10px 12px",fontFamily:"'DM Sans', sans-serif"}} /><button onClick={go} style={{background:"#fff",color:navy,border:"none",borderRadius:7,padding:"11px 22px",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",whiteSpace:"nowrap"}}>Get Early Access</button></div>)}</FadeIn></div>)}

export default function DisasterRecoveryPage(){
  const[email,setEmail]=useState("");const[submitted,setSubmitted]=useState(false);const[scrollY,setScrollY]=useState(0);
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";l.rel="stylesheet";document.head.appendChild(l);const f=()=>setScrollY(window.scrollY);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  const go=()=>{if(email.includes("@"))setSubmitted(true)};
  return(
    <div style={{background:bg,color:ink,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif",overflowX:"hidden"}}>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"10px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",background:scrollY>50?"rgba(243,242,239,0.95)":"transparent",backdropFilter:scrollY>50?"blur(20px)":"none",borderBottom:scrollY>50?`1px solid ${bdr}`:"1px solid transparent",transition:"all 0.3s"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}><a href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}><img src={LOGO_SRC} alt="ConvoRally" style={{width:34,height:34,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,color:ink}}>ConvoRally</span></a><span style={{color:bdr,margin:"0 4px",fontSize:18}}>/</span><span style={{fontSize:14,color:mid,fontWeight:500}}>Disaster Recovery</span></div>
        <a href="#cta" style={{background:navy,color:"#fff",padding:"9px 22px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Get Early Access</a>
      </nav>

      <section style={{minHeight:"92vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"130px 24px 80px"}}>
        <FadeIn><p style={{fontSize:14,fontWeight:600,color:red,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:20}}>For Disaster Recovery & Relief Organizations</p></FadeIn>
        <FadeIn delay={0.08}><h1 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(36px, 5.5vw, 64px)",fontWeight:400,lineHeight:1.1,maxWidth:740,marginBottom:24,letterSpacing:"-0.02em"}}>The storm destroyed the building. <span style={{fontStyle:"italic",color:red}}>The paperwork slowed the recovery.</span></h1></FadeIn>
        <FadeIn delay={0.18}><p style={{fontSize:19,color:mid,maxWidth:540,lineHeight:1.7,marginBottom:36}}>After a disaster, agencies, volunteers, contractors, and property owners all show up at once — often without a shared record. ConvoRally helps keep communication, work, and documentation tied to the property so recovery does not fall apart in the handoff.</p></FadeIn>
        <FadeIn delay={0.28}><a href="#cta" style={{background:navy,color:"#fff",padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:600,textDecoration:"none",boxShadow:"0 4px 20px rgba(30,41,59,0.15)"}}>Get Early Access</a></FadeIn>
      </section>

      <section style={{background:navy,color:"#fff",padding:"70px 24px"}}>
        <div style={{maxWidth:880,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>The disaster is the first crisis. <span style={{fontStyle:"italic",color:"#FCA5A5"}}>The documentation gap is the second.</span></h2></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:24}}>
            {[{title:"Long recovery timelines",desc:"Recovery work can last for months or years. Every conversation and decision must be traceable long after the fact.",color:"#FCA5A5"},{title:"Many parties, one property",desc:"Many different groups may touch the same property. Coordination breaks down without a shared record.",color:"#7DD3FC"},{title:"Handoff failures",desc:"Handoffs break down when documentation lives in personal texts, emails, and notebooks.",color:"#FCD34D"}].map((item,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:14,padding:"28px 22px"}}><p style={{fontSize:15,fontWeight:600,marginBottom:8,color:item.color}}>{item.title}</p><p style={{fontSize:14,color:"rgba(255,255,255,0.65)",lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"90px 24px",maxWidth:800,margin:"0 auto"}}>
        <FadeIn><div style={{textAlign:"center",marginBottom:56}}><p style={{fontSize:13,fontWeight:600,color:teal,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:14}}>Built for Multi-Agency Coordination</p><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 40px)",fontWeight:400,lineHeight:1.2}}>From damage assessment to close-out — <span style={{fontStyle:"italic",color:teal}}>one property, one record.</span></h2></div></FadeIn>
        {[
          {icon:"\u{1F4CD}",title:"Property-level project channels",desc:"Each damaged property gets its own record. Assessments, updates, work orders, and communication stay tied to the property.",color:teal},
          {icon:"\u{1F4F8}",title:"Time-stamped damage documentation",desc:"Initial assessments, progress photos, and completion updates are captured with timestamps and attribution.",color:red},
          {icon:"\u{1F465}",title:"Scoped multi-party access",desc:"Relief coordinators, insurers, volunteer teams, contractors, and property owners can each see what they need.",color:gold},
          {icon:"\u{1F4CB}",title:"Volunteer and resource tracking",desc:"Log volunteer hours, donated materials, and equipment usage against each property.",color:navy},
          {icon:"\u{1F50D}",title:"Searchable recovery trail",desc:"Every scope update, milestone, and handoff stays organized in one place instead of being reconstructed later.",color:"#16a34a"},
          {icon:"\u{1F504}",title:"Long-term case continuity",desc:"Volunteers rotate. Staff changes. Agencies hand off. The property record stays with the work.",color:mid},
        ].map((item,i)=>(
          <FadeIn key={i} delay={i*0.08}><div style={{display:"flex",gap:20,alignItems:"flex-start",padding:"26px 0",borderBottom:i<5?`1px solid ${bdr}`:"none"}}><span style={{fontSize:26,minWidth:32}}>{item.icon}</span><div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:21,fontWeight:400,marginBottom:5,color:ink}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.65,maxWidth:560}}>{item.desc}</p></div></div></FadeIn>
        ))}
      </section>

      <section style={{padding:"80px 24px",background:"#ECEAE5"}}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>The people show up. <span style={{fontStyle:"italic",color:gold}}>The systems don{"'"}t.</span></h2></div></FadeIn>
          {[
            {quote:"After the hurricane, we had 200 volunteers across 40 properties. Six months later, we couldn't prove which volunteers worked which properties on which days.",role:"Disaster relief coordinator, faith-based organization"},
            {quote:"The contractor said the roof was done. The homeowner said it was leaking. The adjuster hadn't been back since the initial assessment. Nobody had a shared record.",role:"Disaster case manager"},
            {quote:"We deploy teams within 48 hours. By the time we hand off to long-term recovery, half the documentation is in personal text threads.",role:"Emergency response team lead"},
            {quote:"I've talked to four different organizations and I don't know who is doing what or when anything will happen.",role:"Homeowner, post-tornado recovery"},
          ].map((item,i)=>(
            <FadeIn key={i} delay={i*0.1}><div style={{position:"relative",paddingLeft:28,marginBottom:28}}><div style={{position:"absolute",left:0,top:0,width:4,height:"100%",borderRadius:2,background:i===0?red:i===1?teal:i===2?gold:navy}} /><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,fontStyle:"italic",color:ink,lineHeight:1.55,marginBottom:8}}>{'"'}{item.quote}{'"'}</p><p style={{fontSize:13,color:soft}}>— {item.role}</p></div></FadeIn>
          ))}
        </div>
      </section>

      <section style={{padding:"80px 24px",maxWidth:960,margin:"0 auto"}}>
        <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Built for everyone in the recovery.</h2></div></FadeIn>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:16}}>
          {[
            {role:"Relief Organizations",desc:"Coordinate volunteers, track properties, and keep a clearer record of what happened where.",color:red},
            {role:"Case Managers",desc:"Manage multi-property workloads with a complete history of each assessment, decision, and handoff.",color:teal},
            {role:"Volunteer Teams",desc:"Log hours, document work, and verify completion even as teams rotate.",color:gold},
            {role:"Insurance Adjusters",desc:"Access time-stamped damage assessments and repair verification tied to the property.",color:navy},
            {role:"Contractors",desc:"Get confirmed scope, milestone-based payments, and clearer accountability.",color:"#16a34a"},
            {role:"Property Owners",desc:"See who is helping, what has been done, and what happens next.",color:mid},
          ].map((item,i)=>(
            <FadeIn key={i} delay={i*0.06}><div style={{background:cardBg,border:`1px solid ${bdr}`,borderRadius:14,padding:"24px 20px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}><div style={{width:32,height:4,borderRadius:2,background:item.color,marginBottom:14}} /><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:17,fontWeight:400,marginBottom:5,color:ink}}>{item.role}</h3><p style={{fontSize:13,color:mid,lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
          ))}
        </div>
      </section>

      <section id="cta" style={{background:navy,color:"#fff",padding:"90px 24px",textAlign:"center"}}>
        <FadeIn><img src={LOGO_SRC} alt="" style={{width:48,height:48,objectFit:"contain",marginBottom:18,opacity:0.9}} /></FadeIn>
        <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 4vw, 42px)",fontWeight:400,lineHeight:1.2,marginBottom:8}}>The next disaster is coming. The documentation layer should not be an afterthought.</h2></FadeIn>
        <FadeIn><p style={{fontSize:15,color:"rgba(255,255,255,0.5)",marginBottom:6}}>Join the Founding 100</p><p style={{fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:460,margin:"0 auto 28px",lineHeight:1.6}}>Be one of the first 100 relief professionals shaping ConvoRally for disaster recovery.</p></FadeIn>
        <Founding100 email={email} setEmail={setEmail} submitted={submitted} go={go} />
      </section>

      <footer style={{padding:"52px 24px 36px",maxWidth:800,margin:"0 auto"}}><FadeIn><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(18px, 2.8vw, 26px)",fontStyle:"italic",textAlign:"center",color:ink,marginBottom:28}}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p></FadeIn><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,borderTop:`1px solid ${bdr}`,paddingTop:20}}><div style={{display:"flex",alignItems:"center",gap:8}}><img src={LOGO_SRC} alt="" style={{width:22,height:22,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:15,color:soft}}>ConvoRally</span></div><a href="/" style={{fontSize:13,color:soft,textDecoration:"none"}}>{"\u2190"} Back to main site</a></div></footer>
    </div>
  );
}
