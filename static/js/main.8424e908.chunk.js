(this.webpackJsonpoddisee=this.webpackJsonpoddisee||[]).push([[0],{14:function(e,t,n){e.exports=n(30)},19:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(11),r=n.n(c),i=(n(19),n(3)),s=n(1),u=n(4),l=n(33),d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),d=Object(i.a)(r,2),b=d[0],j=d[1],O=Object(a.useState)(0),m=Object(i.a)(O,2),f=m[0],h=m[1],p=Object(a.useState)(!1),w=Object(i.a)(p,2),g=w[0],E=w[1],S=Object(u.useApp)(),k=Object(l.a)("ArrowRight"),y=Object(i.a)(k,1)[0],v=Object(l.a)("ArrowLeft"),A=Object(i.a)(v,1)[0],x=Object(l.a)("ArrowDown"),B=Object(i.a)(x,1)[0],C=Object(l.a)("ArrowUp"),J=Object(i.a)(C,1)[0];return Object(u.useTick)((function(){A&&j(b-1),y&&j(b+1),B&&h(f+1),J&&h(f-1),E(y||A||B||J)})),Object(a.useEffect)((function(){S.loader.add("sprites/oddy.json").load((function(e,t){c(Object.keys(t["sprites/oddy.json"].data.frames).map((function(e){return s.p.from(e)})))}))}),[]),0===n.length?null:o.a.createElement(u.Container,{x:b,y:f},o.a.createElement(u.AnimatedSprite,{animationSpeed:.5,isPlaying:g,textures:n,anchor:.5}))},b=function(){return o.a.createElement(u.Stage,{width:500,height:200,options:{backgroundColor:16777215}},o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8424e908.chunk.js.map