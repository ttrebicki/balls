(this.webpackJsonp3d=this.webpackJsonp3d||[]).push([[0],{19:function(t,n,o){},20:function(t,n,o){},25:function(t,n,o){"use strict";o.r(n);var e=o(0),r=o.n(e),a=o(13),i=o.n(a),c=(o(19),o(1)),s=(o(20),o(12)),h=o(2);var u=function(){var t=function(t){var n=t.position,o=t.rotation,r=Object(e.useRef)({position:{x:0,y:0,z:0}});Object(s.b)((function(t,n){r.current.position.x+=o[0]/100,r.current.position.y+=o[1]/100,r.current.position.z+=o[2]/100}));var a="#eff200",i="#aa33ff",u=Object(e.useState)(a),d=Object(c.a)(u,2),f=d[0],j=d[1],m=Object(e.useState)(!1),b=Object(c.a)(m,2),M=b[0],p=b[1];return Object(h.jsxs)("mesh",{ref:r,position:n,onPointerOver:function(){return j(i)},onPointerOut:function(){return j(a)},onClick:function(){p(!0)},children:[Object(h.jsx)("meshPhongMaterial",{color:M?i:f}),Object(h.jsx)("sphereBufferGeometry",{args:[.1]})]})};return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)("ambientLight",{}),Object(h.jsx)("pointLight",{color:"#ffffff",position:[0,0,0]}),function(){for(var n=[],o=0,e=0;e<100;e++)n.push(Object(h.jsx)(t,{position:e%2?[Math.random(),Math.random(),Math.random()]:e%3?[-Math.random(),-Math.random(),-Math.random()]:e%4?[-Math.random(),Math.random(),Math.random()]:[Math.random(),-Math.random(),+Math.random()],rotation:[Math.random()/Math.random()/100,Math.random()/Math.random()/100,Math.random()/Math.random()/100]},o++));return n}()]})})},d=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,26)).then((function(n){var o=n.getCLS,e=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;o(t),e(t),r(t),a(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),d()}},[[25,1,2]]]);
//# sourceMappingURL=main.25d91bfb.chunk.js.map