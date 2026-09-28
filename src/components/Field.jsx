import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
const h=React.createElement;

function Field({icon,value,onChange,placeholder,label}){return h("label",{className:"block"},h("span",{className:"text-xs text-slate-400 mb-1 block"},label),h("span",{className:"relative block"},h("span",{className:"absolute left-3.5 top-1/2 -translate-y-1/2"},icon),h("input",{className:"inp",value,onChange:e=>onChange(e.target.value),placeholder})))}

export default Field;
