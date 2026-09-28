import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
import Card from "./Card";
const h=React.createElement;

function InfoCard({icon,title,value,sub,c}){return h(Card,null,h("div",{className:"flex items-center justify-between mb-3"},h("span",{className:"text-2xl"},icon),h("span",{className:"w-2 h-2 rounded-full",style:{background:c||"#a78bfa"}})),h("div",{className:"text-xs text-slate-400"},title),h("div",{className:"hd text-xl font-bold mt-0.5"},value),h("div",{className:"text-xs text-slate-400 mt-1"},sub))}

export default InfoCard;
