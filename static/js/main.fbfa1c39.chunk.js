(this.webpackJsonp3d=this.webpackJsonp3d||[]).push([[0],{19:function(t,n,o){},24:function(t,n,o){},25:function(t,n,o){"use strict";o.r(n);var e=o(0),a=o.n(e),r=o(13),i=o.n(r),c=(o(19),o(1)),s=o(11),h=o(2),u=function(t){var n=t.position,o=t.rotation,a=t.initialColor,r=Object(e.useRef)({position:{x:0,y:0,z:0}});Object(s.b)((function(t,n){r.current.position.x-=o[0]/100,r.current.position.y-=o[1]/100,r.current.position.z-=o[2]/100}));var i="#aa33ff",u=Object(e.useState)(a),j=Object(c.a)(u,2),d=j[0],m=j[1],f=Object(e.useState)(!1),b=Object(c.a)(f,2),l=b[0],M=b[1];return Object(h.jsxs)("mesh",{ref:r,position:n,onPointerOver:function(){return m(i)},onPointerOut:function(){return m(a)},onClick:function(){M(!0)},children:[Object(h.jsx)("meshPhongMaterial",{color:l?i:d}),Object(h.jsx)("sphereBufferGeometry",{args:[Math.random()/10]})]})},j=function(t){for(var n=t.initialColor,o=t.shapeNum,e=[],a=0;a<o;a++)e.push(a);return Object(h.jsx)(h.Fragment,{children:e.map((function(t,o){return Object(h.jsx)(u,{initialColor:n,position:t%4?[Math.random(),Math.random(),Math.random()]:t%3?[10*-Math.random(),10*-Math.random(),-Math.random()]:t%2?[10*-Math.random(),10*Math.random(),Math.random()]:[10*Math.random(),10*-Math.random(),Math.random()],rotation:[Math.random()/Math.random()/10,Math.random()/Math.random()/10,Math.random()/Math.random()/10]},o++)}))})},d=(o(24),function(){var t=Object(e.useState)(Math.ceil(2e3*Math.random())),n=Object(c.a)(t,2),o=n[0];n[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)("ambientLight",{}),Object(h.jsx)("pointLight",{color:"#ffffff",position:[1,0,-2]}),Object(h.jsx)(j,{initialColor:"#eff200",shapeNum:o}),Object(h.jsx)(j,{initialColor:"#ff2222",shapeNum:o})]})})}),m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,26)).then((function(n){var o=n.getCLS,e=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;o(t),e(t),a(t),r(t),i(t)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),m()}},[[25,1,2]]]);
//# sourceMappingURL=main.fbfa1c39.chunk.js.map