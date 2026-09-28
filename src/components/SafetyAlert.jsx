import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
const h=React.createElement;

function SafetyAlert({lv,text}){const c={ok:["#34d399","✓"],warn:["#fbbf24","!"],bad:["#fb7185","⚠"]}[lv];return h("li",{className:"flex gap-2 text-sm items-start"},h("span",{style:{color:c[0]},className:"font-bold w-4 text-center"},c[1]),h("span",{className:"text-slate-300"},text))}

export default SafetyAlert;
