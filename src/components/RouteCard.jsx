import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
import Ring from "./Ring";
import SafetyAlert from "./SafetyAlert";
const h=React.createElement;

function RouteCard({r,i,sel,onSel}){const st=[["Distance",r.d],["Time",r.t],["Traffic",r.tr],["Lighting",r.l],["Crowd",r.c],["Help nearby",r.e+" services"]];
return h("div",{onClick:onSel,className:"glass p-5 cursor-pointer up "+(sel?"sel":""),style:{animationDelay:i*.12+"s"}},
i===0&&h("div",{className:"grad text-white text-xs font-semibold rounded-full px-3 py-1 inline-block mb-3 glowline"},"✨ AI Recommended Safer Route"),
h("div",{className:"flex items-center gap-4 mb-4"},h(Ring,{v:r.s}),h("div",null,h("h3",{className:"font-bold text-lg"},r.n),h("p",{className:"text-xs text-slate-400"},"Safety score"))),
h("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4"},st.map(([a,b])=>h("div",{key:a},h("div",{className:"text-xs text-slate-400"},a),h("div",{className:"font-medium"},b)))),
h("ul",{className:"space-y-1.5"},r.al.map((a,j)=>h(SafetyAlert,{key:j,lv:a[0],text:a[1]}))))}

export default RouteCard;
