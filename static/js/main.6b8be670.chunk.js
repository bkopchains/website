(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{26:function(e,t,a){e.exports=a(52)},31:function(e,t,a){},32:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),i=(a(31),a(15)),u=a(6),m=(a(32),function(e){var t=e.fishData;return t&&l.a.createElement("div",{className:"neuMorphismOut critterContainer"},l.a.createElement("div",{className:"neuMorphismIn critterImageContainer"},l.a.createElement("img",{src:t.image_uri,style:{width:"100%"},title:t["catch-phrase"]})),l.a.createElement("table",{className:"critterTable pickerTable",cellSpacing:"5"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name:"),l.a.createElement("td",null,t.name)),l.a.createElement("tr",null,l.a.createElement("th",null,"Location: "),l.a.createElement("td",null,t.availability.location," ")),l.a.createElement("tr",null,l.a.createElement("th",null,"Size:"),l.a.createElement("td",null,t.shadow)),l.a.createElement("tr",null,l.a.createElement("th",null,"Sell Price:"),l.a.createElement("td",null,t.price)),l.a.createElement("tr",null,l.a.createElement("th",null,"Times:"),l.a.createElement("td",null,t.availability.isAllDay?"All Day":t.availability.time)),l.a.createElement("tr",null,l.a.createElement("th",null,"Months:"),l.a.createElement("td",null,t.availability.isAllYear?"All Year":t.availability["month-northern"])))))}),o=function(e){var t=e.bugData;return t&&l.a.createElement("div",{className:"neuMorphismOut citterContainer"},l.a.createElement("div",{className:"neuMorphismIn critterImageContainer"},l.a.createElement("img",{src:t.image_uri,style:{width:"75%"},title:t["catch-phrase"]})),l.a.createElement("table",{className:"critterTable pickerTable",cellSpacing:"5"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name:"),l.a.createElement("td",null,t.name)),l.a.createElement("tr",null,l.a.createElement("th",null,"Location: "),l.a.createElement("td",null,t.availability.location," ")),l.a.createElement("tr",null,l.a.createElement("th",null,"Sell Price:"),l.a.createElement("td",null,t.price)),l.a.createElement("tr",null,l.a.createElement("th",null,"Times:"),l.a.createElement("td",null,t.availability.isAllDay?"All Day":t.availability.time)),l.a.createElement("tr",null,l.a.createElement("th",null,"Months:"),l.a.createElement("td",null,t.availability.isAllYear?"All Year":t.availability["month-northern"])))))},s=function(e){var t=e.creatureData;return t&&l.a.createElement("div",{className:"neuMorphismOut citterContainer"},l.a.createElement("div",{className:"neuMorphismIn critterImageContainer"},l.a.createElement("img",{src:t.image_uri,style:{width:"75%"},title:t["catch-phrase"]})),l.a.createElement("table",{className:"critterTable pickerTable",cellSpacing:"5"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name:"),l.a.createElement("td",null,t.name)),l.a.createElement("tr",null,l.a.createElement("th",null,"Size:"),l.a.createElement("td",null,t.shadow)),l.a.createElement("tr",null,l.a.createElement("th",null,"Sell Price:"),l.a.createElement("td",null,t.price)),l.a.createElement("tr",null,l.a.createElement("th",null,"Times:"),l.a.createElement("td",null,t.availability.isAllDay?"All Day":t.availability.time)),l.a.createElement("tr",null,l.a.createElement("th",null,"Months:"),l.a.createElement("td",null,t.availability.isAllYear?"All Year":t.availability["month-northern"])))))},h=a(2),E=a(13),d=h.z.Option,b=function(e){return l.a.createElement(d,e,l.a.createElement(v,e))},v=function(e){return l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("img",{src:e.data.icon,width:25,style:{marginRight:"5px"}}),l.a.createElement("span",null,e.data.label))},p=function(e){var t=e.options,a=e.onChange;return l.a.createElement(E.a,{onChange:a,options:t,className:"Selector neuMorphismOut",components:{Option:b,SingleValue:v}})},g=a(14),f=a.n(g),y=f.a.create({baseURL:"https://acnhapi.com/v1/"}),S=f.a.create({baseURL:"https://acnhapi.com/v1a/"});var O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),h=Object(u.a)(c,2),E=h[0],d=h[1],b=Object(n.useState)([]),v=Object(u.a)(b,2),g=v[0],f=v[1],O=Object(n.useState)(null),N=Object(u.a)(O,2),j=N[0],w=N[1],A=Object(n.useState)(null),C=Object(u.a)(A,2),D=C[0],M=C[1],T=Object(n.useState)(null),I=Object(u.a)(T,2),k=I[0],Y=I[1],x=Object(n.useState)("The current date/time"),B=Object(u.a)(x,2),U=(B[0],B[1]),L=function(e){return e.map((function(e){return{value:e,label:e.name,icon:e.icon_uri}}))},_=function(e){return e.length&&e.length>0?e.map((function(e){return Object(i.a)({},e,{name:z(e.name["name-USen"])})})):Object(i.a)({},e,{name:z(e.name["name-USen"])})},z=function(e){if(e){for(var t=0,a=(e=e.split(" ")).length;t<a;t++)e[t]=e[t][0].toUpperCase()+e[t].substr(1);return e.join(" ")}};return Object(n.useState)((function(){var e=new Date,t=e.getHours(),a=e.getMinutes(),n=t+":"+(Number(a)<10?"0"+a:a)+", "+e.toDateString();U(n),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""==e?S("fish/").then((function(e){return e.data})):y("fish/"+e).then((function(e){return e.data}))}().then((function(e){var t=_(e);r(t),w(t[0])})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""==e?S("bugs/").then((function(e){return e.data})):y("bugs/"+e).then((function(e){return e.data}))}().then((function(e){var t=_(e);d(t),M(t[0])})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""==e?S("sea/").then((function(e){return e.data})):y("sea/"+e).then((function(e){return e.data}))}().then((function(e){var t=_(e);f(t),Y(t[0])}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"TitleBox neuMorphismOut"},l.a.createElement("h3",{style:{margin:"0px"}},"ACNH Critter Data"))),l.a.createElement("div",{className:"App-Body"},E.length>0&&l.a.createElement("div",{className:"critterSection"},l.a.createElement("h3",null,"Bugs"),l.a.createElement(p,{options:L(E),onChange:function(e){return M(e.value)}}),l.a.createElement(o,{bugData:D})),a.length>0&&l.a.createElement("div",{className:"critterSection"},l.a.createElement("h3",null,"Fish"),l.a.createElement(p,{options:L(a),onChange:function(e){return w(e.value)}}),l.a.createElement(m,{fishData:j})),g.length>0&&l.a.createElement("div",{className:"critterSection"},l.a.createElement("h3",null,"Sea Creatures"),l.a.createElement(p,{options:L(g),onChange:function(e){return Y(e.value)}}),l.a.createElement(s,{creatureData:k})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.6b8be670.chunk.js.map