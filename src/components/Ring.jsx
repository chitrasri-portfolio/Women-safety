import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
const h=React.createElement;

function Ring({v,size=64}){const r=size/2-6,c=2*Math.PI*r;return h("svg",{width:size,height:size,className:"shrink-0"},h("circle",{cx:size/2,cy:size/2,r,stroke:"rgba(255,255,255,.1)",strokeWidth:6,fill:"none"}),h("circle",{cx:size/2,cy:size/2,r,stroke:col(v),strokeWidth:6,fill:"none",strokeLinecap:"round",strokeDasharray:c,strokeDashoffset:c*(1-v/100),transform:"rotate(-90 "+size/2+" "+size/2+")"}),h("text",{x:"50%",y:"54%",textAnchor:"middle",fill:"#fff",fontSize:size/3.2,fontWeight:700},v))}

export default Ring;
