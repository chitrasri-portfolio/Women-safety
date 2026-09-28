import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
import SOS from "./SOS";
const h=React.createElement;

function BottomNav({onSOS}){const it=[["🏠","Home","home"],["🔍","Route","route"],["🗺️","Map","map"],["🛡️","Safety","safety"]];
return h("nav",{className:"md:hidden fixed bottom-0 inset-x-0 z-40 flex items-center justify-around px-2 pt-2",style:{background:"rgba(10,14,36,.92)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(255,255,255,.1)",paddingBottom:"calc(env(safe-area-inset-bottom,0px) + 8px)"}},
it.slice(0,2).map(([i,t,id])=>h("button",{key:id,onClick:()=>go(id),className:"flex flex-col items-center text-xs text-slate-300 w-16 py-1"},h("span",{className:"text-lg"},i),t)),
h("button",{onClick:onSOS,className:"btn grad -mt-6 w-16 h-16 rounded-full font-bold text-white text-sm",style:{boxShadow:"0 0 26px rgba(236,72,153,.5)"}},"SOS"),
it.slice(2).map(([i,t,id])=>h("button",{key:id,onClick:()=>go(id),className:"flex flex-col items-center text-xs text-slate-300 w-16 py-1"},h("span",{className:"text-lg"},i),t)))}

export default BottomNav;
