"use client";
import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "/cr-logo.png";

const bg = "#F3F2EF"; const cardBg = "#FFFFFF"; const ink = "#1C1917"; const mid = "#6B6560";
const soft = "#A8A29E"; const bdr = "#E2DFDA";
const red = "#D93025"; const teal = "#0EA5B7"; const gold = "#D97706"; const navy = "#1E293B";

function useInView(t=0.12){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([i])=>{if(i.isIntersecting){s(true);o.unobserve(e)}},{threshold:t});o.observe(e);return()=>o.disconnect()},[t]);return[r,v]}
function FadeIn({children,delay=0}){const[r,v]=useInView();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`}}>{children}</div>)}

function Founding100({email,setEmail,submitted,go}){
  return (
    <div style={{maxWidth:560,margin:"0 auto"}}>
      <FadeIn>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:14,marginBottom:32}}>
          {[
            {icon:"\u{1F455}",text:"Founding member shirt — free"},
            {icon:"\u{1F512}",text:"Locked-in pricing for life"},
            {icon:"\u{1F4AC}",text:"Direct channel with the founder"},
            {icon:"\u{1F3F7}\uFE0F",text:"Your name on the Founders Wall"},
            {icon:"\u{1F5F3}\uFE0F",text:"Vote on the next features we build"},
            {icon:"\u{1F4C4}",text:"First access to industry templates"},
          ].map((p,i)=>(
            <div key={i} style={{display:"flex",gap:10,alignItems:"center",fontSize:14,color:"rgba(255,255,255,0.8)"}}>
              <span style={{fontSize:18}}>{p.icon}</span>{p.text}
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        {submitted?(
          <div style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:8,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:14,padding:"20px 28px",width:"100%",textAlign:"center"}}>
            <span style={{fontSize:26}}>{"\u2713"}</span>
            <p style={{fontSize:16,fontWeight:600}}>You{"'"}re in.</p>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.6)",maxWidth:300}}>Check your email for your Founding 100 invite.</p>
          </div>
        ):(
          <div style={{display:"flex",gap:8,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,padding:5}}>
            <input type="email" placeholder="you@company.com" value={email} onChange={(e)=>setEmail(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&go()} style={{flex:1,background:"transparent",border:"none",outline:"none",color:"#fff",fontSize:15,padding:"10px 12px",fontFamily:"'DM Sans', sans-serif"}} />
            <button onClick={go} style={{background:"#fff",color:navy,border:"none",borderRadius:7,padding:"11px 22px",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",whiteSpace:"nowrap"}}>Get Early Access</button>
          </div>
        )}
      </FadeIn>
    </div>
  );
}

export default function HOAPage(){
  const[email,setEmail]=useState("");const[submitted,setSubmitted]=useState(false);const[scrollY,setScrollY]=useState(0);
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";l.rel="stylesheet";document.head.appendChild(l);const f=()=>setScrollY(window.scrollY);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  const go=()=>{if(email.includes("@"))setSubmitted(true)};

  return(
    <div style={{background:bg,color:ink,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif",overflowX:"hidden"}}>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"10px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",background:scrollY>50?"rgba(243,242,239,0.95)":"transparent",backdropFilter:scrollY>50?"blur(20px)":"none",borderBottom:scrollY>50?`1px solid ${bdr}`:"1px solid transparent",transition:"all 0.3s"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <a href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}><img src={LOGO_SRC} alt="ConvoRally" style={{width:34,height:34,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,color:ink}}>ConvoRally</span></a>
          <span style={{color:bdr,margin:"0 4px",fontSize:18}}>/</span>
          <span style={{fontSize:14,color:mid,fontWeight:500}}>HOA Management</span>
        </div>
        <a href="#cta" style={{background:navy,color:"#fff",padding:"9px 22px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Get Early Access</a>
      </nav>

      <section style={{minHeight:"92vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"130px 24px 80px"}}>
        <FadeIn><p style={{fontSize:14,fontWeight:600,color:gold,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:20}}>For HOA Boards & Community Management</p></FadeIn>
        <FadeIn delay={0.08}><h1 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(38px, 5.5vw, 68px)",fontWeight:400,lineHeight:1.08,maxWidth:680,marginBottom:24,letterSpacing:"-0.02em"}}>{'"'}Who approved <span style={{fontStyle:"italic",color:gold}}>that?{'"'}</span></h1></FadeIn>
        <FadeIn delay={0.18}><p style={{fontSize:19,color:mid,maxWidth:520,lineHeight:1.7,marginBottom:36}}>Board decisions disappear into meeting minutes. Vendor agreements live in one person{"'"}s email. Homeowner complaints get lost in voicemail and inboxes. ConvoRally gives your community one clear, time-stamped record.</p></FadeIn>
        <FadeIn delay={0.28}><a href="#cta" style={{background:navy,color:"#fff",padding:"15px 36px",borderRadius:10,fontSize:16,fontWeight:600,textDecoration:"none",boxShadow:"0 4px 20px rgba(30,41,59,0.15)"}}>Get Early Access</a></FadeIn>
      </section>

      <section style={{background:navy,color:"#fff",padding:"70px 24px"}}>
        <div style={{maxWidth:880,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>The problem isn{"'"}t bad boards. <span style={{fontStyle:"italic",color:gold}}>It{"'"}s missing records.</span></h2></div></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:24}}>
            {[
              {title:"Lost context",desc:"Decisions get made, but the context gets lost. Six months later nobody remembers why.",color:"#FCA5A5"},
              {title:"Vendor disputes",desc:"Vendor disputes get worse when nobody can find the original scope or approval.",color:"#7DD3FC"},
              {title:"Board transitions",desc:"Board transitions break down when the next group inherits scattered records.",color:"#FCD34D"},
            ].map((item,i)=>(
              <FadeIn key={i} delay={i*0.1}><div style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:14,padding:"28px 22px"}}><p style={{fontSize:15,fontWeight:600,marginBottom:8,color:item.color}}>{item.title}</p><p style={{fontSize:14,color:"rgba(255,255,255,0.65)",lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"90px 24px",maxWidth:800,margin:"0 auto"}}>
        <FadeIn><div style={{textAlign:"center",marginBottom:56}}><p style={{fontSize:13,fontWeight:600,color:teal,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:14}}>Built for Community Governance</p><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 40px)",fontWeight:400,lineHeight:1.2}}>From board vote to vendor payment — <span style={{fontStyle:"italic",color:teal}}>one clear record.</span></h2></div></FadeIn>
        {[
          {icon:"\u{1F5F3}\uFE0F",title:"Board decisions that stick",desc:"Motions, votes, and approvals are captured in real time with timestamps. When someone asks who approved something, you have the answer.",color:teal},
          {icon:"\u{1F4CB}",title:"Vendor accountability",desc:"Vendor scopes, bids, and agreements stay tied to the project. Work gets verified against what was approved.",color:red},
          {icon:"\u{1F4E3}",title:"Homeowner communication trail",desc:"Complaints, requests, and responses stay in context. No more lost emails or \"I never heard back.\"",color:gold},
          {icon:"\u{1F4F8}",title:"Maintenance verified",desc:"Landscaping done? Pool serviced? Repairs completed? Photo documentation and sign-off create proof that work was done.",color:navy},
          {icon:"\u{1F504}",title:"Smoother board transitions",desc:"New board members inherit a searchable record of decisions, agreements, and vendor relationships.",color:"#16a34a"},
        ].map((item,i)=>(
          <FadeIn key={i} delay={i*0.08}><div style={{display:"flex",gap:20,alignItems:"flex-start",padding:"26px 0",borderBottom:i<4?`1px solid ${bdr}`:"none"}}><span style={{fontSize:26,minWidth:32}}>{item.icon}</span><div><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:21,fontWeight:400,marginBottom:5,color:ink}}>{item.title}</h3><p style={{fontSize:14,color:mid,lineHeight:1.65,maxWidth:560}}>{item.desc}</p></div></div></FadeIn>
        ))}
      </section>

      <section style={{padding:"80px 24px",background:"#ECEAE5"}}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Transparency isn{"'"}t a threat. <span style={{fontStyle:"italic",color:gold}}>It{"'"}s protection.</span></h2></div></FadeIn>
          {[
            {quote:"The previous board approved a $45k landscaping contract. Nobody on the current board can find the scope document.",role:"HOA board president, 120-unit community"},
            {quote:"I filed a noise complaint eight months ago. The board says they never received it. I sent three emails.",role:"Homeowner"},
            {quote:"Every time the board changes, we lose six months of context. New members re-learn every vendor relationship from scratch.",role:"Community management company"},
          ].map((item,i)=>(
            <FadeIn key={i} delay={i*0.1}><div style={{position:"relative",paddingLeft:28,marginBottom:28}}><div style={{position:"absolute",left:0,top:0,width:4,height:"100%",borderRadius:2,background:i===0?red:i===1?gold:teal}} /><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:19,fontStyle:"italic",color:ink,lineHeight:1.55,marginBottom:8}}>{'"'}{item.quote}{'"'}</p><p style={{fontSize:13,color:soft}}>— {item.role}</p></div></FadeIn>
          ))}
        </div>
      </section>

      <section style={{padding:"80px 24px",maxWidth:880,margin:"0 auto"}}>
        <FadeIn><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 3.5vw, 38px)",fontWeight:400,lineHeight:1.25}}>Built for everyone in the community.</h2></div></FadeIn>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:16}}>
          {[
            {role:"Board Members",desc:"Document decisions, track vendors, and protect yourselves with a clearer record.",color:gold},
            {role:"Property Managers",desc:"Manage vendor relationships, maintenance, and homeowner communication with full accountability.",color:teal},
            {role:"Homeowners",desc:"Get a clearer view of what was decided, what work was approved, and what has been completed.",color:red},
            {role:"Vendors & Contractors",desc:"Get clear scope, confirmed agreements, and fewer disputes about what was approved.",color:navy},
          ].map((item,i)=>(
            <FadeIn key={i} delay={i*0.06}><div style={{background:cardBg,border:`1px solid ${bdr}`,borderRadius:14,padding:"24px 20px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}><div style={{width:32,height:4,borderRadius:2,background:item.color,marginBottom:14}} /><h3 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,fontWeight:400,marginBottom:5,color:ink}}>{item.role}</h3><p style={{fontSize:13,color:mid,lineHeight:1.6}}>{item.desc}</p></div></FadeIn>
          ))}
        </div>
      </section>

      <section id="cta" style={{background:navy,color:"#fff",padding:"90px 24px",textAlign:"center"}}>
        <FadeIn><img src={LOGO_SRC} alt="" style={{width:48,height:48,objectFit:"contain",marginBottom:18,opacity:0.9}} /></FadeIn>
        <FadeIn><h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(26px, 4vw, 42px)",fontWeight:400,lineHeight:1.2,marginBottom:8}}>Give your community a record it can trust.</h2></FadeIn>
        <FadeIn><p style={{fontSize:15,color:"rgba(255,255,255,0.5)",marginBottom:6}}>Join the Founding 100</p><p style={{fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:440,margin:"0 auto 28px",lineHeight:1.6}}>Be one of the first 100 community managers and board members shaping ConvoRally.</p></FadeIn>
        <Founding100 email={email} setEmail={setEmail} submitted={submitted} go={go} />
      </section>

      <footer style={{padding:"52px 24px 36px",maxWidth:800,margin:"0 auto"}}>
        <FadeIn><p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(18px, 2.8vw, 26px)",fontStyle:"italic",textAlign:"center",color:ink,marginBottom:28}}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p></FadeIn>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,borderTop:`1px solid ${bdr}`,paddingTop:20}}><div style={{display:"flex",alignItems:"center",gap:8}}><img src={LOGO_SRC} alt="" style={{width:22,height:22,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:15,color:soft}}>ConvoRally</span></div><a href="/" style={{fontSize:13,color:soft,textDecoration:"none"}}>{"\u2190"} Back to main site</a></div>
      </footer>
    </div>
  );
}
