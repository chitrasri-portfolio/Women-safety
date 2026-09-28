import React,{useState,useEffect} from "react";
import {go,col,R,POI,SV,TIPS} from "../data";
const h=React.createElement;

const Card=p=>h("div",{className:"glass p-5 "+(p.className||""),onClick:p.onClick},p.children);

export default Card;
