import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
import Card from "./Card";
import Field from "./Field";
const h=React.createElement;

function RouteSearch({st,setSt,dest,setDest,onFind,busy,onLocate,locating}){return h(Card,{className:"grid md:grid-cols-[1fr_1fr_auto] gap-3 items-end"},
h("div",null,h(Field,{label:"Start location",icon:"🟢",value:st,onChange:setSt,placeholder:"Enter starting point"}),h("button",{onClick:onLocate,className:"btn mt-2 text-sm text-violet-200 border border-violet-400/40 rounded-full px-3 py-1.5"},locating?"Locating...":"📍 Use current location")),
h("div",{className:"md:pb-9"},h(Field,{label:"Destination",icon:"📌",value:dest,onChange:setDest,placeholder:"Where are you going?"})),
h("button",{onClick:onFind,disabled:busy,className:"btn grad text-white font-semibold rounded-2xl px-6 py-4 md:mb-9 disabled:opacity-60"},busy?"Analysing...":"Find Safe Route"))}

export default RouteSearch;
