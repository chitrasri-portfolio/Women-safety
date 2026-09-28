export const go=id=>{const e=document.getElementById(id);e&&e.scrollIntoView({behavior:"smooth"})};
export const col=s=>s>=85?"#34d399":s>=70?"#fbbf24":"#fb7185";
export const R=[
{n:"Route A",s:92,d:"5.8 km",t:"18 min",tr:"Moderate",l:"Excellent",c:"Busy and active",e:4,al:[["ok","Well-lit main roads for the whole trip"],["ok","Police patrol post 2 km from start"]],p:"M90 400 C170 380 230 310 340 295 S560 210 710 100",k:"#a78bfa"},
{n:"Route B",s:74,d:"4.9 km",t:"14 min",tr:"Light",l:"Moderate",c:"Low",e:2,al:[["warn","Dim underpass near Mill Street"],["warn","Few shops open after 9 PM"]],p:"M90 400 C160 450 320 440 430 350 S620 230 710 100",k:"#38bdf8"},
{n:"Route C",s:58,d:"4.1 km",t:"11 min",tr:"Light",l:"Poor",c:"Very low",e:1,al:[["bad","Isolated stretch through the park"],["bad","Incidents reported in the last 30 days"],["warn","Several street lights out"]],p:"M90 400 C130 260 300 120 500 130 S650 90 710 100",k:"#fb7185"}];
export const POI=[["👮","Central Police Station",250,330],["👮","Market Police Post",520,215],["🏥","City Hospital",400,250],["🏥","Care Clinic",620,170],["💊","24h Pharmacy",190,300],["💊","MedPlus Pharmacy",560,300],["🆘","Help Point",330,395],["🆘","Help Point",650,140],["🏛️","Public Library",470,180],["☕","Open Cafe",300,230]];
export const SV=[["👮","Central Police Station","0.4 km","Open 24h"],["👮","Market Police Post","0.9 km","Patrol active"],["🏥","City Hospital","1.1 km","Emergency ward"],["💊","24h Pharmacy","0.6 km","Open now"],["🆘","Emergency Help Point","0.3 km","Call button"],["🏛️","Public Library","0.8 km","Safe public place"]];
export const TIPS=[["📲","Share your trip","Send your live route to a trusted contact before you leave."],["💡","Stay in lit areas","Pick routes with good lighting, especially after sunset."],["🎧","Stay aware","Keep one earbud out so you can hear your surroundings."],["📞","Save help numbers","Keep emergency contacts on your lock screen."],["🚕","Verify your ride","Check the plate and driver before you get in."],["🏪","Use safe stops","Head to open shops, cafes or stations if you feel unsafe."]];


export const START=[13.0418,80.2101],DEST=[13.0850,80.2341];
export const toLL=(x,y)=>[13.0418+(400-y)/300*0.0432,80.2101+(x-90)/620*0.0240];
export const ROUTE_PTS=[
[[90,400],[200,370],[340,295],[450,255],[560,210],[710,100]],
[[90,400],[200,440],[320,440],[430,350],[560,260],[710,100]],
[[90,400],[140,270],[300,130],[500,130],[620,105],[710,100]]];
