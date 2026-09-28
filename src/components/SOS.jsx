import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
const h=React.createElement;

function SOS({onClick,big}){return h("button",{onClick,"aria-label":"Emergency SOS",className:"btn grad text-white font-bold rounded-2xl flex items-center justify-center gap-2 "+(big?"w-full py-5 text-lg":"px-4 py-2 text-sm"),style:{boxShadow:"0 0 24px rgba(236,72,153,.35)"}},h("span",{className:"inline-block w-2.5 h-2.5 rounded-full bg-white",style:{animation:"glow 1.6s infinite"}}),"SOS")}

export default SOS;
