(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(44),c=a.n(r),o=(a(80),a(22),a(23),a(64)),i=a.n(o),s=a(14),m=a(13),d=a(7),u=a(36),E=a(67),h=a.n(E),g=a(69),p=a.n(g),b=a(66),f=a.n(b),v=a(68),y=a.n(v),x=a(45),j=a.n(x),O=Object(u.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(f.a),w=Object(u.withStyles)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(j.a);function k(e,t,a,n,l){return{name:e,calories:t,fat:a,carbs:n,protein:l}}var S=[k("Frozen yoghurt",159,6,24,4),k("Ice cream sandwich",237,9,37,4.3),k("Eclair",262,16,24,6),k("Cupcake",305,3.7,67,4.3),k("Gingerbread",356,16,49,3.9)];Object(u.withStyles)(function(){return l.a.createElement(h.a,{"aria-label":"customized table"},l.a.createElement(y.a,null,l.a.createElement(j.a,null,l.a.createElement(O,null,"Dessert (100g serving)"),l.a.createElement(O,{align:"right"},"Calories"),l.a.createElement(O,{align:"right"},"Fat\xa0(g)"),l.a.createElement(O,{align:"right"},"Carbs\xa0(g)"),l.a.createElement(O,{align:"right"},"Protein\xa0(g)"))),l.a.createElement(p.a,null,S.map(function(e){return l.a.createElement(w,{key:e.name},l.a.createElement(O,{component:"th",scope:"row"},e.name),l.a.createElement(O,{align:"right"},e.calories),l.a.createElement(O,{align:"right"},e.fat),l.a.createElement(O,{align:"right"},e.carbs),l.a.createElement(O,{align:"right"},e.protein))})))});var D=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(!1),c=Object(d.a)(r,2),o=(c[0],c[1]),i=Object(n.useState)([]),s=Object(d.a)(i,2),m=s[0],u=s[1];Object(n.useEffect)(function(){fetch("https://api.rootnet.in/covid19-in/stats/latest").then(function(e){return e.json()}).then(function(e){o(!0),u(e)},function(e){o(!0),a(e)})},[]);var E=[];return 0!=m.length&&(E=m.data.regional),console.log(E),l.a.createElement("div",{className:"container"},l.a.createElement("h3",{style:{color:"#FF9933",marginTop:"20px"}},"Reports of Coronavirus Cases in INDIA"),l.a.createElement("table",{className:"table table-dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{color:"#33DDFF"}},"State"),l.a.createElement("th",{style:{color:"#E50000"}},"Total Cases"),l.a.createElement("th",{style:{color:"limegreen"}},"Recovered"))),l.a.createElement("tbody",null,E.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.loc),l.a.createElement("td",null,e.confirmedCasesIndian),l.a.createElement("td",null,e.discharged))}))))};var F=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(!1),c=Object(d.a)(r,2),o=(c[0],c[1]),i=Object(n.useState)([]),s=Object(d.a)(i,2),m=s[0],u=s[1];Object(n.useEffect)(function(){fetch("https://pomber.github.io/covid19/timeseries.json").then(function(e){return e.json()}).then(function(e){o(!0),u(e)},function(e){o(!0),a(e)})},[]);var E=[];for(var h in m){var g=[];g.push(h),g.push(m[h][m[h].length-1].confirmed);var p=m[h][m[h].length-1].confirmed-m[h][m[h].length-2].confirmed;g.push(p),g.push(m[h][m[h].length-1].recovered),E.push(g)}return console.log(m),l.a.createElement("div",{className:"container"},l.a.createElement("h3",{style:{color:"#EBE80F",marginTop:"20px"}},"Reports of Coronavirus Cases in WORLD"),l.a.createElement("table",{className:"table table-dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{color:"#33DDFF"}},"Country"),l.a.createElement("th",{style:{color:"#E50000"}},"Total Cases"),l.a.createElement("th",{style:{color:"limegreen"}},"Recovered"))),l.a.createElement("tbody",null,E.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1],l.a.createElement("div",{style:{color:"#E50000",fontSize:"12px"}},"+",e[2])),l.a.createElement("td",null,e[3]))}))))},C=a(70),N=a.n(C),I=a(71),T=a.n(I),R=a(72),A=a.n(R),L=a(73),B=a.n(L);var z=function(){var e,t,a,r=Object(n.useState)(null),c=Object(d.a)(r,2),o=(c[0],c[1]),i=Object(n.useState)(!1),s=Object(d.a)(i,2),m=(s[0],s[1]),u=Object(n.useState)([]),E=Object(d.a)(u,2),h=E[0],g=E[1];return Object(n.useEffect)(function(){fetch("https://api.rootnet.in/covid19-in/stats/latest").then(function(e){return e.json()}).then(function(e){m(!0),g(e)},function(e){m(!0),o(e)})},[]),0!=h.length&&(e=h.data.summary.total,t=h.data.summary.discharged,a=h.data.summary.deaths,console.log(h.data.summary)),l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{marginTop:"30px",marginBottom:"30px",textAlign:"-webkit-center"}},l.a.createElement("div",{id:"demo",class:"carousel slide","data-ride":"carousel"},l.a.createElement("ul",{class:"carousel-indicators"},l.a.createElement("li",{"data-target":"#demo","data-slide-to":"0",class:"active"}),l.a.createElement("li",{"data-target":"#demo","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#demo","data-slide-to":"2"})),l.a.createElement("div",{class:"carousel-inner"},l.a.createElement("div",{class:"carousel-item active"},l.a.createElement("img",{src:A.a,style:{width:"600px",height:"200px"}})),l.a.createElement("div",{class:"carousel-item"},l.a.createElement("img",{src:B.a,style:{width:"600px",height:"200px"}})),l.a.createElement("div",{class:"carousel-item"},l.a.createElement("img",{src:T.a,style:{width:"600px",height:"200px"}}))))),l.a.createElement("div",{class:"card bg-info text-white"},l.a.createElement("div",{class:"card-body"},"CASES IN INDIA UNTIL NOW")),l.a.createElement("div",{class:"card bg-light text-dark"},l.a.createElement("div",{class:"card-body"},l.a.createElement("h4",{style:{color:"#33DDFF"}},"Total Cases - ",e))),l.a.createElement("div",{class:"card bg-light text-dark"},l.a.createElement("div",{class:"card-body"},l.a.createElement("h4",{style:{color:"limegreen"}},"Total Recovered - ",t))),l.a.createElement("div",{class:"card bg-light text-dark"},l.a.createElement("div",{class:"card-body"},l.a.createElement("h4",{style:{color:"#E50000"}},"Total Deaths - ",a))),l.a.createElement("img",{src:N.a,style:{height:"200px",marginLeft:"auto",marginRight:"auto",display:"block",marginTop:"50px",marginBottom:"50px"}}))};var W=function(){return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark sticky-top"},l.a.createElement("img",{src:i.a,style:{height:"40px",width:"40px"}}),l.a.createElement("h5",{style:{color:"white",alignSelf:"flex-end"}},"COVID-19"),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{style:{marginLeft:"100px",color:"#33DDFF"},to:"/dashboard"},"DASHBOARD")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{style:{marginLeft:"100px",color:"#FF9933"},to:"/india"},"INDIA")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{style:{marginLeft:"100px",color:"#F3F31A"},to:"/world"},"WORLD")))),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/dashboard",component:z}),l.a.createElement(m.a,{path:"/world",component:F}),l.a.createElement(m.a,{path:"/india",component:D}))))};c.a.render(l.a.createElement(s.a,null,l.a.createElement(W,null)),document.getElementById("root"))},64:function(e,t,a){e.exports=a.p+"static/media/covid.dadc562a.svg"},70:function(e,t,a){e.exports=a.p+"static/media/fight.1bcbd0bd.png"},71:function(e,t,a){e.exports=a.p+"static/media/greet.dde66942.png"},72:function(e,t,a){e.exports=a.p+"static/media/handshaking.cb64eb7d.png"},73:function(e,t,a){e.exports=a.p+"static/media/safety.806d5540.jpg"},75:function(e,t,a){e.exports=a(155)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.36e737f2.chunk.js.map