import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
const h=React.createElement;

const Sec=p=>h("section",{id:p.id,className:"max-w-6xl mx-auto px-4 py-8 md:py-12"},p.title&&h("h2",{className:"text-2xl md:text-3xl font-bold mb-1"},p.title),p.sub&&h("p",{className:"text-slate-400 mb-6"},p.sub),p.children);

export default Sec;
