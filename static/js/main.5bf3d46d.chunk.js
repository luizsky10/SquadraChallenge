(this.webpackJsonpsquadra=this.webpackJsonpsquadra||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),i=(t(79),t(24)),c=t.n(i),s=t(27),m=t(23),p=t(38),u=t(61),d=t(3),g=t(132),v=t(133),f=t(134),x=t(135),h=t(43),E=t(136),b=t(145),N=t(137),k=t(138),S=t(139),w=t(140),y=t(68),j=t.n(y),B=t(69),z=t.n(B),P=t(146),A=t(130),O=t(131),T=t(66),D=t.n(T),G=t(67),X=t.n(G),C=t(65),V=t.n(C),W=t(22),H=r.a.createElement("div",null,r.a.createElement(W.b,{to:"/",style:{color:"black",textDecoration:"none"}},r.a.createElement(P.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(V.a,null)),r.a.createElement(O.a,{primary:"Home"}))),r.a.createElement(W.b,{to:"/personagens",style:{color:"black",textDecoration:"none"}},r.a.createElement(P.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(D.a,null)),r.a.createElement(O.a,{primary:"Personagens"}))),r.a.createElement(W.b,{to:"/planetas",style:{color:"black",textDecoration:"none"}},r.a.createElement(P.a,{button:!0},r.a.createElement(A.a,null,r.a.createElement(X.a,null)),r.a.createElement(O.a,{primary:"Planetas"}))));function R(){var e=q(),a=Object(n.useState)(!0),o=Object(m.a)(a,2),l=o[0],i=o[1];return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,null),r.a.createElement(v.a,{position:"absolute",className:Object(d.a)(e.appBar,l&&e.appBarShift)},r.a.createElement(f.a,{className:e.toolbar},r.a.createElement(x.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(d.a)(e.menuButton,l&&e.menuButtonHidden)},r.a.createElement(j.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},r.a.createElement("span",{className:e.title},"Dragon Ball Challenge")),r.a.createElement(x.a,{color:"inherit"},r.a.createElement(E.a,{color:"secondary"}),r.a.createElement("img",{className:e.logo,src:t(87),alt:""})))),r.a.createElement(b.a,{variant:"permanent",classes:{paper:Object(d.a)(e.drawerPaper,!l&&e.drawerPaperClose)},open:l},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(x.a,{onClick:function(){i(!1)}},r.a.createElement(z.a,null))),r.a.createElement(N.a,null),r.a.createElement(k.a,null,H),r.a.createElement(N.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(S.a,{maxWidth:"lg",className:e.container})))}var q=Object(w.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24,backgroundColor:"#F85B1A"},toolbarIcon:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(p.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),title:{flexGrow:1,fontFamily:"Oswald, sans-serif",fontSize:"28px",textShadow:"0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)"},logo:{maxWidth:"100px",maxHeight:"40px"}}})),K=t(28),Z=t.n(K),I=t(141),Q=t(142),L=t(143),F=t(144),M=Object(w.a)((function(e){return{root:{display:"flex"},span:{},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,overflow:"auto"},cardRoot:{maxWidth:200},media:{height:150},itemGrid:{marginTop:16,display:"grid",gridTemplateColumns:"repeat( auto-fill, minmax(300px, 1fr) )",gridRowGap:"16px",gridColumnGap:"16px"},elementStyle:{border:"solid",borderRadius:"5px",position:"relative",height:"40px",width:"200px",marginTop:"5vh",marginBottom:"10vh"},characterName:{fontWeight:"600px",textAlign:"center",fontSize:"25px"}}})),U=function(){var e=Object(n.useState)(),a=Object(m.a)(e,2),o=a[0],l=a[1],i=Object(n.useState)(null),p=Object(m.a)(i,2),u=p[0],d=p[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/character/");case 2:a=e.sent,l(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=M(),v=null===o||void 0===o?void 0:o.filter((function(e){return"Gabriel"!==e.name&&"goku"!==e.name&&"Picollo"!==e.name&&"krilin"!==e.name&&"<h1>gaaaaaaaa</h1>"!==e.name&&"Piculo_olo"!==e.name})),f=null===v||void 0===v?void 0:v.filter((function(e){return null===u||e.name.toLowerCase().includes(u.toLowerCase())?e:void 0})).map((function(e){return r.a.createElement("div",null,r.a.createElement(I.a,{className:g.cardRoot},r.a.createElement(Q.a,null,r.a.createElement(L.a,{title:"Character Card"},r.a.createElement("img",{src:e.image.length>30?e.image:"https://dragon-ball-api.herokuapp.com/api/"+e.image,onError:function(e){e.target.onerror=null,e.target.src=t(60)},alt:"",style:{transition:"opacity ease-in-out 0.3s",height:"150px",minWidth:"150px",bottom:"30px"}})),r.a.createElement(F.a,null,r.a.createElement("span",{className:g.characterName},e.name)))))}));return r.a.createElement("div",{className:g.root},r.a.createElement(R,null),r.a.createElement("main",{className:g.content},r.a.createElement("div",{className:g.appBarSpacer}),r.a.createElement("input",{type:"text",placeholder:"Personagem...",className:g.elementStyle,onChange:function(e){return function(e){var a=e.target.value;d(a)}(e)}}),r.a.createElement("div",{className:g.itemGrid},f),r.a.createElement(S.a,{maxWidth:"lg",className:g.container})))},J=Object(w.a)((function(e){return{root:{display:"flex"},span:{},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,overflow:"auto"},cardRoot:{maxWidth:200},media:{height:150},itemGrid:{marginTop:16,display:"grid",gridTemplateColumns:"repeat( auto-fill, minmax(300px, 1fr) )",gridRowGap:"16px",gridColumnGap:"16px"}}})),Y=function(){var e=J(),a=Object(n.useState)(),o=Object(m.a)(a,2),l=o[0],i=o[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/planet/");case 2:a=e.sent,i(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",{className:e.root},r.a.createElement(R,null),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(S.a,{maxWidth:"lg",className:e.container},r.a.createElement("div",{className:e.itemGrid},null===l||void 0===l?void 0:l.map((function(a){var n;return r.a.createElement(W.b,{to:"/planetas/"+a.name,style:{color:"black",textDecoration:"none"}},r.a.createElement("div",{className:e.cardRoot},r.a.createElement("div",null,r.a.createElement("img",{src:"https://dragon-ball-api.herokuapp.com/api/"+a.image,onError:function(e){e.target.onerror=null,e.target.src=t(60)},alt:"",style:{transition:"opacity ease-in-out 0.3s",height:"250px",minWidth:"150px",bottom:"30px"}}),r.a.createElement("h2",null,a.name),null===(n=a.residents)||void 0===n?void 0:n.map((function(e){return r.a.createElement("span",null)})))))}))))))},$=t(7),_=Object(w.a)((function(e){return{root:{display:"flex"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},appBarSpacer:e.mixins.toolbar,content:{flexGrow:2,overflow:"auto"},itemGrid:{marginTop:16,display:"grid",gridTemplateColumns:"repeat( auto-fill, minmax(300px, 1fr) )",gridRowGap:"10px",gridColumnGap:"10px"},citizensName:{fontWeight:"500"}}})),ee=function(){var e,a=_(),t=Object($.f)(),o=Object(n.useState)(),l=Object(m.a)(o,2),i=l[0],p=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/planet/"+t.namePlanet);case 2:a=e.sent,p(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),r.a.createElement("div",{className:a.root},r.a.createElement(R,null),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement(S.a,{maxWidth:"lg",className:a.container},r.a.createElement("h1",{className:a.Citizens},"Habitantes do planeta"),r.a.createElement("div",{className:a.itemGrid}," ",null===i||void 0===i||null===(e=i.residents)||void 0===e?void 0:e.map((function(e){return r.a.createElement("h2",{className:a.citizensName}," ",e)}))))))},ae=Object(w.a)((function(e){return{root:{display:"flex"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,overflow:"auto"},Title:{margin:"20px",fontSize:"30px",fontWeight:"600",textAlign:"center"},Secondary:{margin:"20px",fontSize:"20px",fontWeight:"500",textAlign:"center"}}})),te=function(){var e=ae();return r.a.createElement("div",{className:e.root},r.a.createElement(R,null),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(S.a,{maxWidth:"lg",className:e.container},r.a.createElement("div",{className:e.Title},"Squadra FrontEnd Challenge"),r.a.createElement("div",{className:e.Secondary},"WebApp desenvolvido utilizando a api https://dragon-ball-api.herokuapp.com/documentation."),r.a.createElement("div",{className:e.Title},"Como utilizar"),r.a.createElement("div",{className:e.Secondary},"Para navegar entre o conte\xfado do projeto \xe9 poss\xedvel utilizar a barra lateral, clicando nos icones."),r.a.createElement("div",{className:e.Title},"Stack"),r.a.createElement("div",{className:e.Secondary},"As tecnologias utilizadas foram: React, React-Router-Dom, GH-Pages Material-UI e Axios."))))};var ne=function(){return r.a.createElement(W.a,null,r.a.createElement($.c,null,r.a.createElement($.a,{exact:!0,path:"/"},r.a.createElement(te,null)),r.a.createElement($.a,{exact:!0,path:"/personagens"},r.a.createElement(U,null)),r.a.createElement($.a,{exact:!0,path:"/planetas"},r.a.createElement(Y,null)),r.a.createElement($.a,{path:"/planetas/:namePlanet"},r.a.createElement(ee,null)),r.a.createElement($.a,{exact:!0,path:"/SquadraChallenge"},r.a.createElement(te,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,a){e.exports="data:image/png;base64,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"},74:function(e,a,t){e.exports=t(105)},79:function(e,a,t){},87:function(e,a,t){e.exports=t.p+"static/media/dragonball.b6d909e3.png"}},[[74,1,2]]]);
//# sourceMappingURL=main.5bf3d46d.chunk.js.map