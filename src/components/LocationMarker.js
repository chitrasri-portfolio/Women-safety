import L from "leaflet";
export const markerIcon=(emoji,color,big)=>L.divIcon({className:"",iconSize:big?[34,34]:[26,26],iconAnchor:big?[17,17]:[13,13],html:`<div class="mk" style="--c:${color}"><i></i><span>${emoji}</span></div>`});
export default markerIcon;
