(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{381:function(e,t,s){"use strict";s.r(t);var i=s(59),a=s(33);class n{constructor(){this.animFrame=0,this.width=0,this.height=0,this.skeld=new Image,this.mira=new Image,this.polus=new Image,this.players=new Image,this.loading=0,this.skeld.src="assets/images/TheSkeld.png",this.mira.src="assets/images/MiraHQ.png",this.polus.src="assets/images/Polus.png",this.players.src="assets/images/players.png",this.skeld.onload=()=>{this.loading+=.25},this.mira.onload=()=>{this.loading+=.25},this.polus.onload=()=>{this.loading+=.25},this.players.onload=()=>{this.loading+=.25},this.currentMap={position:{x:0,y:0},image:this.polus},this.mouseState={lastClicked:{x:0,y:0},position:{x:0,y:0},down:!1}}static GetInstance(){return n.instance||(n.instance=new n),n.instance}setContext(e){this.context=e,this.width=this.context.canvas.width,this.height=this.context.canvas.height}setTheme(e){this.theme=e}changeCurrentMap(e){switch(e){case"TheSkeld":this.currentMap.image=this.skeld;break;case"MiraHQ":this.currentMap.image=this.mira;break;case"Polus":this.currentMap.image=this.polus;break;default:this.currentMap.image=this.skeld}}getAnimFrame(){return this.animFrame}handleMouseDown(e){this.mouseState.down=!0,this.mouseState.lastClicked.x=e.clientX,this.mouseState.lastClicked.y=e.clientY}handleMouseUp(e){this.mouseState.down=!1,this.mouseState.lastClicked.x=e.clientX,this.mouseState.lastClicked.y=e.clientY}handleMouseMove(e){this.mouseState.position.x=e.clientX,this.mouseState.position.y=e.clientY}init(){if(void 0===this.context&&null===this.context||void 0===this.theme&&null===this.theme)throw new Error("Context and theme must be set before initializing the animation.");this.loop()}update(){}render(){this.context.clearRect(0,0,this.width,this.height),this.loading<1?(this.context.fillStyle=this.theme.textColorPrimary,this.context.fillText("Loading...",this.width/2-50,this.height/2-10)):this.context.drawImage(this.currentMap.image,this.currentMap.position.x,this.currentMap.position.y,this.currentMap.image.width,this.currentMap.image.height,0,0,this.width,this.height-200)}loop(){o.update(),o.render(),o.animFrame=window.requestAnimationFrame(o.loop)}}const o=n.GetInstance();var h=s(55),r=s(207),l=s(0),c=s.n(l),m=s(31),d=s(14),u=Object(d.d)({Maps:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"1rem",height:"100%"},MapsHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},MapsTitle:{fontSize:"1.25rem",fontWeight:500,letterSpacing:"0.05em",marginRight:"1rem",flex:"1 0 auto"},MapsContainer:{flex:1,maxHeight:"calc(var(--vh, 1vh) * 85)",fallbacks:{maxHeight:"85vh"}},MapsCanvas:{width:"100%",height:"100%"}}),p=s(127);t.default=function(){const e=Object(a.c)(m.b),t=Object(a.c)(i.b),s=Object(a.b)(),n=u(),l=Object(d.f)(),{t:g}=Object(p.a)(),M=c.a.useRef(null),w=c.a.useRef(null);return c.a.useEffect(()=>{const e=w.current;if(e){const s=e.getContext("2d");s&&(o.setContext(s),o.setTheme(l),o.changeCurrentMap(t),o.init())}return()=>{window.cancelAnimationFrame(o.getAnimFrame())}},[]),c.a.useEffect(()=>{o.changeCurrentMap(t)},[t]),c.a.createElement("div",{className:n.Maps},c.a.createElement("div",{className:n.MapsHeader},!e&&c.a.createElement("h2",{className:n.MapsTitle},g("maps.title")),c.a.createElement(r.a,{inline:!e},c.a.createElement(h.b,{pressed:"TheSkeld"===t,onClick:()=>s(Object(i.c)("TheSkeld"))},"The Skeld"),c.a.createElement(h.b,{pressed:"MiraHQ"===t,onClick:()=>s(Object(i.c)("MiraHQ"))},"Mira HQ"),c.a.createElement(h.b,{pressed:"Polus"===t,onClick:()=>s(Object(i.c)("Polus"))},"Polus"))),c.a.createElement("div",{ref:M,className:n.MapsContainer},c.a.createElement("canvas",{ref:w,width:"1920",height:"1080",className:n.MapsCanvas,onContextMenu:e=>e.preventDefault(),onMouseDown:e=>o.handleMouseDown(e),onMouseUp:e=>o.handleMouseUp(e),onMouseMove:e=>o.handleMouseMove(e)},"This section is not supported on your browser.")))}}}]);