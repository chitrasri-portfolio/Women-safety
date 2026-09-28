import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
import SOS from "./SOS";
const h=React.createElement;

function Navbar({onSOS}){return h("header",{className:"sticky top-0 z-40",style:{background:"rgba(7,11,31,.75)",backdropFilter:"blur(14px)",paddingTop:"env(safe-area-inset-top,0px)"}},
h("div",{className:"max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"},
h("div",{className:"flex items-center gap-2"},h("div",{className:"grad w-9 h-9 rounded-xl flex items-center justify-center"},"🛡️"),h("span",{className:"hd font-bold"},"SafeRoute ",h("span",{className:"text-pink-300 font-semibold"},"AI"))),
h("nav",{className:"hidden md:flex gap-6 text-sm text-slate-300"},[["route","Search"],["map","Map"],["compare","Routes"],["safety","Safety"],["services","Services"],["tips","Tips"]].map(([i,t])=>h("a",{key:i,href:"#"+i,className:"hover:text-white transition"},t))),
h("div",{className:"hidden md:block"},h(SOS,{onClick:onSOS}))))}

export default Navbar;
