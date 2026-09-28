import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "./data";
import Card from "./components/Card";
import Sec from "./components/Sec";
import SOS from "./components/SOS";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Hero from "./components/Hero";
import RouteSearch from "./components/RouteSearch";
import MapView from "./components/MapView";
import RouteCard from "./components/RouteCard";
import InfoCard from "./components/InfoCard";
const h=React.createElement;

function App(){
const[st,setSt]=useState("T. Nagar Bus Terminus"),[dest,setDest]=useState("Anna Nagar Tower Park"),[stage,setStage]=useState("idle"),[sel,setSel]=useState(0),[sos,setSos]=useState(null),[loading,setLoading]=useState(true),[loc,setLoc]=useState(null),[locating,setLocating]=useState(false);
useEffect(()=>{const t=setTimeout(()=>setLoading(false),1300);return()=>clearTimeout(t)},[]);
useEffect(()=>{if(sos===null||sos<=0)return;const t=setTimeout(()=>setSos(sos-1),1000);return()=>clearTimeout(t)},[sos]);
const find=()=>{if(stage==="scan")return;setStage("scan");go("map");setTimeout(()=>{setStage("done");setSel(0)},2400)};
const locate=()=>{setLocating(true);const ok=(la,lo)=>{setLoc(la.toFixed(4)+", "+lo.toFixed(4));setSt("Current location");setLocating(false)};
try{navigator.geolocation.getCurrentPosition(p=>ok(p.coords.latitude,p.coords.longitude),()=>ok(13.0827,80.2707),{timeout:6000})}catch(e){ok(13.0827,80.2707)}};
const r=R[sel],done=stage==="done";
return h("div",{className:"pb-24 md:pb-0"},
h(Navbar,{onSOS:()=>setSos(5)}),
h("main",null,
h("section",{id:"home",className:"max-w-6xl mx-auto px-4 pt-8 md:pt-14 grid md:grid-cols-2 gap-8 items-center"},
h("div",{className:"up"},h("span",{className:"glass inline-flex items-center gap-2 text-xs px-3 py-1.5 mb-4",style:{borderRadius:999}},h("span",{className:"w-2 h-2 rounded-full bg-pink-400",style:{animation:"glow 1.6s infinite"}}),"AI safety navigation"),
h("h1",{className:"text-4xl md:text-6xl font-extrabold leading-tight"},"Women Safety Route Assistant"),
h("p",{className:"text-lg text-slate-300 mt-4 max-w-md"},"Find safer routes and travel with confidence."),
h("div",{className:"flex flex-wrap gap-3 mt-6"},h("button",{onClick:()=>go("route"),className:"btn grad text-white font-semibold rounded-2xl px-6 py-3.5"},"Find Safe Route"),h("button",{onClick:()=>setSos(5),className:"btn hidden md:block rounded-2xl px-6 py-3.5 border border-pink-400/50 text-pink-200"},"Emergency SOS")),
h("div",{className:"flex items-center gap-2 mt-6 text-sm text-slate-400"},h("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400",style:{animation:"glow 1.6s infinite"}}),loc?"Live location: "+loc:"Live location active")),
h(Hero)),
h(Sec,{id:"route",title:"Plan your trip",sub:"Enter your start and destination. We compare routes on lighting, crowds and nearby help."},h(RouteSearch,{st,setSt,dest,setDest,onFind:find,busy:stage==="scan",onLocate:locate,locating})),
h(Sec,{id:"map",title:"Live safety map"},h(MapView,{stage,sel,loading})),
h(Sec,{id:"compare",title:"Route comparison",sub:done?"Select a route to see it highlighted on the map.":"Search for a route to see safety scores for each option."},
done?h("div",{className:"grid md:grid-cols-3 gap-4"},R.map((x,i)=>h(RouteCard,{key:i,r:x,i,sel:sel===i,onSel:()=>setSel(i)}))):h(Card,{className:"text-center text-slate-400"},stage==="scan"?"AI is scoring 3 routes...":"No routes yet. Press Find Safe Route to start.")),
h(Sec,{id:"safety",title:"Safety information",sub:done?"Showing details for "+r.n+".":"Showing details for the recommended route."},
h("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4"},
h(InfoCard,{icon:"🛡️",title:"Safety score",value:r.s+" / 100",sub:r.s>=85?"Very safe":r.s>=70?"Fairly safe":"Use caution",c:col(r.s)}),
h(InfoCard,{icon:"📍",title:"Live location",value:loc?"Located":"Active",sub:loc||"Tracking every 5 seconds",c:"#34d399"}),
h(Card,{className:"flex flex-col justify-between"},h("div",{className:"text-2xl mb-2"},"🚨"),h("div",{className:"text-xs text-slate-400 mb-2"},"Emergency SOS"),h(SOS,{onClick:()=>setSos(5),big:0})),
h(InfoCard,{icon:"👮",title:"Nearby police",value:"2 stations",sub:"Closest is 0.4 km away",c:"#60a5fa"}),
h(InfoCard,{icon:"🏥",title:"Nearby hospitals",value:"2 hospitals",sub:"Closest is 1.1 km away",c:"#f87171"}),
h(InfoCard,{icon:"💡",title:"Street lighting",value:r.l,sub:"Along the selected route"}),
h(InfoCard,{icon:"👥",title:"Crowd density",value:r.c,sub:"Current activity level"}),
h(InfoCard,{icon:"🚦",title:"Traffic status",value:r.tr,sub:"Estimated "+r.t}))),
h(Sec,{id:"services",title:"Emergency services near you",sub:"Distances are sample data for this demo."},
h("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4"},SV.map((s,i)=>h(Card,{key:i,className:"flex items-center gap-4"},h("div",{className:"text-2xl w-12 h-12 rounded-xl flex items-center justify-center",style:{background:"rgba(139,92,246,.18)"}},s[0]),h("div",{className:"flex-1"},h("div",{className:"font-semibold text-sm"},s[1]),h("div",{className:"text-xs text-slate-400"},s[3])),h("div",{className:"text-sm text-violet-200 font-medium"},s[2]))))),
h(Sec,{id:"tips",title:"Safety tips"},h("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4"},TIPS.map((t,i)=>h(Card,{key:i},h("div",{className:"text-2xl mb-2"},t[0]),h("h3",{className:"font-semibold mb-1"},t[1]),h("p",{className:"text-sm text-slate-400"},t[2])))))),
h("footer",{className:"max-w-6xl mx-auto px-4 py-10 text-sm text-slate-500 border-t border-white/10 mt-6"},h("div",{className:"flex flex-col md:flex-row justify-between gap-3"},h("div",null,h("span",{className:"hd font-bold text-slate-300"},"SafeRoute AI"),"  Women Safety Route Assistant"),h("div",null,"College project demo. Scores and services shown are sample data, not live safety information."))),
h(BottomNav,{onSOS:()=>setSos(5)}),
sos!==null&&h("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{background:"rgba(4,6,20,.8)",backdropFilter:"blur(6px)"}},
h("div",{className:"glass p-8 text-center max-w-sm w-full up"},
sos>0?h("div",null,h("div",{className:"hd text-6xl font-extrabold",style:{color:"#f472b6"}},sos),h("h3",{className:"text-xl font-bold mt-3"},"Sending SOS alert"),h("p",{className:"text-sm text-slate-400 mt-2"},"Your live location will be shared with trusted contacts and the nearest police station.")):
h("div",null,h("div",{className:"text-5xl mb-2"},"✅"),h("h3",{className:"text-xl font-bold"},"SOS alert sent"),h("p",{className:"text-sm text-slate-400 mt-2"},"Demo only: no real alert was sent. In a live product, contacts and police would be notified now.")),
h("button",{onClick:()=>setSos(null),className:"btn mt-6 w-full rounded-2xl py-3.5 font-semibold "+(sos>0?"border border-white/20":"grad text-white")},sos>0?"Cancel":"Close"))))}

export default App;
