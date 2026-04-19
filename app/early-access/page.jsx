"use client";
"use client";
import { useState, useEffect } from "react";

const LOGO_SRC = "/cr-logo.png";
const bg="#F3F2EF";const cardBg="#FFFFFF";const ink="#1C1917";const mid="#6B6560";
const soft="#A8A29E";const bdr="#E2DFDA";const navy="#1E293B";const teal="#0EA5B7";const gold="#D97706";

export default function EarlyAccessPage(){
  const[form,setForm]=useState({name:"",email:"",company:"",industry:"",workflow:""});
  const[submitted,setSubmitted]=useState(false);
  useEffect(()=>{const l=document.createElement("link");l.href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap";l.rel="stylesheet";document.head.appendChild(l)},[]);
  const update=(f)=>(e)=>setForm({...form,[f]:e.target.value});
  const go=async()=>{
    if(!form.email.includes("@")||!form.name.trim())return;
    try{await fetch("https://formspree.io/f/xeeplzoa",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...form,_form:"early-access"})});}catch(e){}
    setSubmitted(true);
  };
  const inputStyle={padding:"14px 16px",borderRadius:10,border:`1px solid ${bdr}`,fontSize:15,fontFamily:"'DM Sans', sans-serif",outline:"none",width:"100%",background:cardBg};

  return(
    <div style={{background:bg,color:ink,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif"}}>
      <nav style={{padding:"12px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${bdr}`}}>
        <a href="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none"}}><img src={LOGO_SRC} alt="ConvoRally" style={{width:34,height:34,objectFit:"contain"}} /><span style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:20,color:ink}}>ConvoRally</span></a>
        <a href="/demo" style={{background:navy,color:"#fff",padding:"9px 22px",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Book a Demo</a>
      </nav>

      <section style={{padding:"80px 24px",maxWidth:520,margin:"0 auto",textAlign:"center"}}>
        <h1 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"clamp(30px, 4.5vw, 44px)",fontWeight:400,lineHeight:1.15,marginBottom:14}}>Get early access to ConvoRally.</h1>
        <p style={{fontSize:17,color:mid,lineHeight:1.6,marginBottom:40}}>Join the list to hear about early access opportunities, product updates, and how ConvoRally is being shaped across real-world workflows.</p>

        {submitted?(
          <div style={{background:cardBg,border:`1px solid ${bdr}`,borderRadius:16,padding:"40px 32px",textAlign:"center"}}>
            <div style={{fontSize:40,marginBottom:12}}>{"\u2713"}</div>
            <h2 style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:26,fontWeight:400,marginBottom:8}}>You{"'"}re on the list.</h2>
            <p style={{fontSize:15,color:mid,lineHeight:1.6}}>We{"'"}ll be in touch with early access details as they become available.</p>
          </div>
        ):(
          <div style={{background:cardBg,border:`1px solid ${bdr}`,borderRadius:16,padding:"32px 28px",textAlign:"left"}}>
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              <input type="text" placeholder="Your name" value={form.name} onChange={update("name")} style={inputStyle} />
              <input type="email" placeholder="Email" value={form.email} onChange={update("email")} style={inputStyle} />
              <input type="text" placeholder="Company (optional)" value={form.company} onChange={update("company")} style={inputStyle} />
              <select value={form.industry} onChange={update("industry")} style={{...inputStyle,color:form.industry?ink:soft}}>
                <option value="">Your industry</option>
                <option value="construction">Construction & Trades</option>
                <option value="property-mgmt">Property Management</option>
                <option value="hoa">HOA Management</option>
                <option value="forensics">Building Forensics</option>
                <option value="disaster">Disaster Recovery</option>
                <option value="startup">Startups & Tech</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="What kind of workflow do you have?" value={form.workflow} onChange={update("workflow")} rows={3} style={{...inputStyle,resize:"vertical"}} />
              <button onClick={go} disabled={!form.email.includes("@")||!form.name.trim()} style={{background:form.email.includes("@")&&form.name.trim()?navy:bdr,color:"#fff",border:"none",borderRadius:10,padding:"16px 0",fontSize:16,fontWeight:600,cursor:form.email.includes("@")?"pointer":"default",fontFamily:"'DM Sans', sans-serif",marginTop:4}}>Get Early Access</button>
            </div>
          </div>
        )}

        <div style={{marginTop:36,textAlign:"left",maxWidth:400,margin:"36px auto 0"}}>
          <p style={{fontSize:13,fontWeight:600,color:ink,marginBottom:10}}>Best fit right now:</p>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {["Contractors and remodelers","HOAs and property managers","Specialists and technical teams"].map((t,i)=>(
              <p key={i} style={{fontSize:14,color:mid}}>{"\u2022"} {t}</p>
            ))}
          </div>
        </div>

        <div style={{marginTop:32,padding:"20px 24px",background:cardBg,border:`1px solid ${bdr}`,borderRadius:12,textAlign:"center"}}>
          <p style={{fontSize:13,color:soft,lineHeight:1.6}}>Qualified early account holders may also receive Founding 100 status — with access to a private member community, direct feedback channels, and early member perks.</p>
        </div>
      </section>

      <footer style={{padding:"40px 24px",textAlign:"center"}}>
        <p style={{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:18,fontStyle:"italic",color:ink,marginBottom:16}}>If it{"'"}s not in ConvoRally, it didn{"'"}t happen.</p>
        <a href="/" style={{fontSize:13,color:soft,textDecoration:"none"}}>{"\u2190"} Back to ConvoRally.com</a>
      </footer>
    </div>
  );
}
