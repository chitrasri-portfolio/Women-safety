import React,{useEffect,useRef} from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {R,POI,START,DEST,toLL,ROUTE_PTS} from "../data";
import {markerIcon} from "./LocationMarker";
const h=React.createElement;
const PC={"👮":"#60a5fa","🏥":"#f87171","💊":"#34d399","🆘":"#f472b6"};

export default function MapView({stage,sel,loading}){
  const el=useRef(null),map=useRef(null),routes=useRef(null);
  useEffect(()=>{
    const m=L.map(el.current,{zoomControl:false}).setView([(START[0]+DEST[0])/2,(START[1]+DEST[1])/2],14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap contributors"}).addTo(m);
    L.control.zoom({position:"bottomright"}).addTo(m);
    POI.forEach(p=>L.marker(toLL(p[2],p[3]),{icon:markerIcon(p[0],PC[p[0]]||"#fbbf24")}).bindTooltip(p[1]).addTo(m));
    L.marker(START,{icon:markerIcon("🟢","#34d399",1)}).bindTooltip("Start").addTo(m);
    L.marker(DEST,{icon:markerIcon("📌","#f472b6",1)}).bindTooltip("Destination").addTo(m);
    routes.current=L.layerGroup().addTo(m);map.current=m;
    return()=>m.remove();
  },[]);
  useEffect(()=>{
    const g=routes.current;if(!g)return;g.clearLayers();
    if(stage!=="done")return;
    [2,1,0].forEach(i=>{
      const pl=L.polyline(ROUTE_PTS[i].map(p=>toLL(p[0],p[1])),{color:R[i].k,weight:i===sel?7:4,opacity:i===sel?1:.45,lineCap:"round",className:"route-line"+(i===sel?" glowline":"")}).addTo(g);
      const e=pl.getElement();e&&e.setAttribute("pathLength","1000");
    });
  },[stage,sel]);
  useEffect(()=>{if(stage==="done"&&map.current)map.current.fitBounds(L.latLngBounds([START,DEST]),{padding:[50,50]})},[stage]);
  useEffect(()=>{if(!loading&&map.current)setTimeout(()=>map.current.invalidateSize(),50)},[loading]);
  const z={zIndex:1000};
  return h("div",{className:"glass overflow-hidden relative",style:{height:"clamp(320px,55vw,520px)",padding:0}},
    h("div",{ref:el,className:"absolute inset-0"}),
    stage==="scan"&&h("div",{className:"scan2",style:z}),
    h("div",{className:"absolute top-3 left-3 flex gap-2 text-xs pointer-events-none",style:z},
      h("span",{className:"glass px-3 py-1.5 flex items-center gap-1.5",style:{borderRadius:999}},h("span",{className:"w-2 h-2 rounded-full bg-emerald-400",style:{animation:"glow 1.6s infinite"}}),"Live GPS"),
      stage==="scan"&&h("span",{className:"glass px-3 py-1.5 text-violet-200",style:{borderRadius:999}},"AI analysing routes...")),
    h("div",{className:"absolute bottom-3 left-3 flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-300 pointer-events-none",style:z},["👮 Police","🏥 Hospital","💊 Pharmacy","🆘 Help point"].map(t=>h("span",{key:t,className:"px-2 py-1 rounded-full",style:{background:"rgba(7,11,31,.75)"}},t))),
    loading&&h("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-3",style:{background:"#070b1f",zIndex:1001}},
      h("div",{style:{width:38,height:38,border:"3px solid rgba(167,139,250,.25)",borderTopColor:"#f472b6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),
      h("span",{className:"text-sm text-slate-400"},"Loading city map...")));
}
