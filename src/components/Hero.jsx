import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
const h=React.createElement;

function Hero(){return h("svg",{viewBox:"0 0 440 470",className:"w-full max-w-md mx-auto float","aria-label":"Woman navigating a city with a safety app"},
h("defs",null,h("linearGradient",{id:"pg",x1:0,y1:0,x2:1,y2:1},h("stop",{offset:0,stopColor:"#7c3aed"}),h("stop",{offset:1,stopColor:"#ec4899"})),h("radialGradient",{id:"bg"},h("stop",{offset:0,stopColor:"#8b5cf6",stopOpacity:.5}),h("stop",{offset:1,stopColor:"#8b5cf6",stopOpacity:0}))),
h("circle",{cx:220,cy:230,r:210,fill:"url(#bg)"}),
[70,110,150].map(r=>h("circle",{key:r,cx:220,cy:230,r,fill:"none",stroke:"#a78bfa",strokeOpacity:.25,strokeDasharray:"3 6"})),
h("g",{transform:"translate(140 60)"},h("rect",{width:160,height:310,rx:26,fill:"#0c1130",stroke:"#a78bfa",strokeWidth:2.5}),h("rect",{x:10,y:14,width:140,height:282,rx:18,fill:"#111a45"}),
[50,100,150,200,250].map(y=>h("line",{key:y,x1:10,x2:150,y1:y,y2:y,stroke:"#334",strokeOpacity:.7})),[45,80,115].map(x=>h("line",{key:x,x1:x,x2:x,y1:14,y2:296,stroke:"#334",strokeOpacity:.7})),
h("path",{d:"M30 260 C60 230 60 170 95 150 S130 90 128 60",fill:"none",stroke:"#f0abfc",strokeWidth:4,strokeLinecap:"round"}),
h("circle",{cx:30,cy:260,r:6,fill:"#34d399"}),h("circle",{cx:128,cy:60,r:7,fill:"#f472b6"}),
h("rect",{x:22,y:24,width:116,height:26,rx:13,fill:"rgba(255,255,255,.1)"}),h("text",{x:80,y:41,fontSize:10,fill:"#fff",textAnchor:"middle"},"AI Safe Route: 92"),
h("rect",{x:22,y:268,width:116,height:20,rx:10,fill:"url(#pg)"}),h("text",{x:80,y:282,fontSize:9,fill:"#fff",textAnchor:"middle"},"Safer route active")),
h("g",{transform:"translate(310 70)"},h("path",{d:"M30 0 L60 12 V38 C60 58 46 70 30 78 C14 70 0 58 0 38 V12 Z",fill:"url(#pg)"}),h("path",{d:"M16 38 L27 49 L46 27",fill:"none",stroke:"#fff",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"})),
[[70,110,"#f472b6"],[350,280,"#a78bfa"],[95,330,"#38bdf8"]].map(([x,y,c],i)=>h("g",{key:i,transform:"translate("+x+" "+y+")"},h("circle",{className:"ring",r:8,fill:c,fillOpacity:.5}),h("path",{d:"M0 -22 C-10 -22 -14 -10 0 6 C14 -10 10 -22 0 -22Z",fill:c}),h("circle",{cy:-13,r:4,fill:"#fff"}))),
h("g",{transform:"translate(45 250)"},h("circle",{cx:30,cy:20,r:16,fill:"#f3c9a8"}),h("path",{d:"M14 18 C12 -6 50 -6 46 20 C44 8 30 6 14 18Z",fill:"#2a1a3d"}),h("path",{d:"M14 44 L46 44 L52 120 L8 120 Z",fill:"#7c3aed"}),h("path",{d:"M12 120 L26 190 M40 120 L34 190",stroke:"#1e1b4b",strokeWidth:12,strokeLinecap:"round"}),h("path",{d:"M46 58 L86 40",stroke:"#f3c9a8",strokeWidth:8,strokeLinecap:"round"}),h("rect",{x:82,y:26,width:12,height:20,rx:3,fill:"#0c1130",stroke:"#f472b6",transform:"rotate(-15 88 36)"})),
h("g",{stroke:"#f0abfc",fill:"none",strokeWidth:2,strokeLinecap:"round"},[14,24,34].map((r,i)=>h("path",{key:r,d:"M"+(345-r)+" 410 A"+r+" "+r+" 0 0 1 "+(345+r)+" 410",strokeOpacity:1-i*.25}))))}

export default Hero;
