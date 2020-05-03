(this["webpackJsonpmasks-map"]=this["webpackJsonpmasks-map"]||[]).push([[0],{175:function(e,t,a){e.exports=a(369)},180:function(e,t,a){},369:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),i=a(39),o=(a(180),a(111));var l=a(57),u=a(160),m=a(22),d=a(375),p={list:[],errorCode:0,errorText:""},E={list:[],errorCode:0,errorText:""},f={distance:{info:1,text:"\u4e00\u516c\u91cc"},mask:{info:"",text:""}},h=Object(l.b)({location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USER_LOCATION":return Object(m.a)({},e,{list:t.list});case"RECEIVE_USER_LOCATION_ERROR":return Object(m.a)({},e,{errorCode:t.errorCode,errorText:d.a.error({message:"\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u6599\u5931\u6557",description:t.errorText})});default:return e}},shopes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SHOPES":return Object(m.a)({},e,{list:t.list});case"RECEIVE_SHOPES_ERROR":return Object(m.a)({},e,{errorCode:t.errorCode,errorText:d.a.error({message:"\u53d6\u5f97\u5e97\u5bb6\u8cc7\u6599\u5931\u6557",description:t.errorText})});default:return e}},selectedOption:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_SELECTED_DISTANCE":return Object(m.a)({},e,{distance:{info:t.info,text:t.text}});case"RECEIVE_SELECTED_MASK_TYPE":return Object(m.a)({},e,{mask:{info:t.info,text:t.text}});default:return e}}}),y=Object(l.c)(h,Object(l.a)(u.a)),g=function(){return function(){return new Promise((function(e,t){navigator.geolocation.watchPosition((function(t){e({lat:t.coords.latitude,lng:t.coords.longitude})}))})).then((function(e){e&&y.dispatch(function(e){return{type:"RECEIVE_USER_LOCATION",list:e}}(e))}))}},v=a(164),b=a.n(v),k=function(){return b.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(e){return e.data.features}))},N=a(372),x=a(110),O=a(79),I=a(6),C=a(50),S=a(76),T=function(){function e(){Object(C.a)(this,e)}return Object(S.a)(e,null,[{key:"calculateDistance",value:function(e,t){var a=e.lat,n=e.lng,r=t[1],c=t[0],s=a*(Math.PI/180),i=r*(Math.PI/180),o=(r-a)*(Math.PI/180),l=(c-n)*(Math.PI/180),u=Math.sin(o/2)*Math.sin(o/2)+Math.cos(s)*Math.cos(i)*(Math.sin(l/2)*Math.sin(l/2)),m=6371e3*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)));return Math.round(m)}},{key:"generateNearbyShop",value:function(e,t,a){for(var n=[],r=0;r<t.length;r++)this.calculateDistance(e,t[r].geometry.coordinates)<=a&&n.push(t[r]);return n}}]),e}(),j=function e(){Object(C.a)(this,e)};j.distance=[{type:"distance",info:1,text:"\u4e00\u516c\u91cc"},{type:"distance",info:5,text:"\u4e94\u516c\u91cc"},{type:"distance",info:10,text:"\u5341\u516c\u91cc"}],j.mask=[{type:"mask",info:"all",text:"\u5168\u90e8"},{type:"mask",info:"adult",text:"\u6210\u4eba\u53e3\u7f69"},{type:"mask",info:"child",text:"\u5152\u7ae5\u53e3\u7f69"}];var w=j;function _(e){var t=e.mapApi,a=e.map,c=null;Object(n.useEffect)((function(){(a||t)&&((c=new t.places.SearchBox(s.searchInput)).addListener("places_changed",i),c.bindTo("bounds",a))}));var s={};function i(){var t=c.getPlaces(),n=t[0];n.geometry&&(n.geometry.viewport?a.fitBounds(n.geometry.viewport):(a.setCenter(n.geometry.location),a.setZoom(17)),e.addPlace(t))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{ref:function(e){s.searchInput=e},type:"text",onFocus:function(){s.searchInput.value=""},placeholder:"\u6211\u7684\u4f4d\u7f6e",className:"google-search-input-style"}))}var R=a(371),L=function(){function e(){Object(C.a)(this,e)}return Object(S.a)(e,null,[{key:"gererateBusinessHours",value:function(e){return e.split("\u3001")}},{key:"gererateTimeTable",value:function(e,t,a){var n={sunday:"",monday:"",tuesday:"",wednesday:"",thursday:"",friday:"",saturday:""};return e.forEach((function(e){switch(e){case"\u661f\u671f\u65e5".concat(t,"\u770b\u8a3a"):n.sunday=a;break;case"\u661f\u671f\u4e00".concat(t,"\u770b\u8a3a"):n.monday=a;break;case"\u661f\u671f\u4e8c".concat(t,"\u770b\u8a3a"):n.tuesday=a;break;case"\u661f\u671f\u4e09".concat(t,"\u770b\u8a3a"):n.wednesday=a;break;case"\u661f\u671f\u56db".concat(t,"\u770b\u8a3a"):n.thursday=a;break;case"\u661f\u671f\u4e94".concat(t,"\u770b\u8a3a"):n.friday=a;break;case"\u661f\u671f\u516d".concat(t,"\u770b\u8a3a"):n.saturday=a}})),n}}]),e}(),M=a(373),A=R.a.Column;function P(e){var t=L.gererateBusinessHours(e.timeList),a=[],n=[],c=[];t.forEach((function(e){e.search("\u4e0a\u5348")>0&&a.push(e),e.search("\u4e0b\u5348")>0&&n.push(e),e.search("\u665a\u4e0a")>0&&c.push(e)}));var s=r.a.createElement(M.a,{twoToneColor:"#78D5D7"}),i=L.gererateTimeTable(a,"\u4e0a\u5348",s),o=L.gererateTimeTable(n,"\u4e0b\u5348",s),l=L.gererateTimeTable(c,"\u665a\u4e0a",s),u=[Object(m.a)({key:"1",time:"\u65e9"},i),Object(m.a)({key:"2",time:"\u4e2d"},o),Object(m.a)({key:"3",time:"\u665a"},l)];return r.a.createElement(R.a,{dataSource:u,pagination:!1,bordered:!0},r.a.createElement(A,{title:"",dataIndex:"time",key:"time",align:"center"}),r.a.createElement(A,{title:"\u65e5",dataIndex:"sunday",key:"sunday",align:"center"}),r.a.createElement(A,{title:"\u4e00",dataIndex:"monday",key:"monday",align:"center"}),r.a.createElement(A,{title:"\u4e8c",dataIndex:"tuesday",key:"tuesday",align:"center"}),r.a.createElement(A,{title:"\u4e09",dataIndex:"wednesday",key:"wednesday",align:"center"}),r.a.createElement(A,{title:"\u56db",dataIndex:"thursday",key:"thursday",align:"center"}),r.a.createElement(A,{title:"\u4e94",dataIndex:"friday",key:"friday",align:"center"}),r.a.createElement(A,{title:"\u516d",dataIndex:"saturday",key:"saturday",align:"center"}))}var D=N.a.Search;function V(e){var t=Object(i.b)(),a=function(e){var a=e.domEvent.currentTarget.getAttribute("data-type"),n=e.domEvent.currentTarget.getAttribute("data-info"),r=e.domEvent.currentTarget.getAttribute("data-text");if("distance"===a){var c={text:r,info:parseInt(n)};t(function(e){return y.dispatch(function(e){return{type:"RECEIVE_SELECTED_DISTANCE",text:e.text,info:e.info}}(e))}(c))}"mask"===a&&t(function(e){return y.dispatch(function(e){return{type:"RECEIVE_SELECTED_MASK_TYPE",text:e.text,info:e.info}}(e))}({text:r,info:n}))};function n(e){var t=e.map((function(e,t){return r.a.createElement(x.a.Item,{key:t,onClick:a,"data-type":e.type,"data-info":e.info,"data-text":e.text},e.text)}));return r.a.createElement(x.a,null,t)}var c=w.mask.forEach((function(t){return t.info===e.mask.info}))?e.mask.text:"\u53e3\u7f69\u7a2e\u985e",s=0===Object.keys(e.maps).length;return r.a.createElement("div",{className:"side-search"},r.a.createElement("div",{className:"filter-type"},r.a.createElement("div",{className:"search-main"},s?null:r.a.createElement(_,{map:e.maps.mapInstance,mapApi:e.maps.mapApi,addPlace:e.addPlace}),r.a.createElement(D,{onSearch:function(e){return console.log(e)},style:{width:200},className:"search-main-style"})),r.a.createElement(O.a,{overlay:n(w.distance),trigger:["click"],className:"select-main-style"},r.a.createElement("button",{className:"ant-dropdown-link",href:"#"},e.distance.text,r.a.createElement(I.a,{type:"caret-down"}))),r.a.createElement(O.a,{overlay:n(w.mask),trigger:["click"],className:"select-main-style"},r.a.createElement("button",{className:"ant-dropdown-link",href:"#"},c,r.a.createElement(I.a,{type:"caret-down"})))),r.a.createElement("ul",{className:"shop-info"},0===T.generateNearbyShop(e.currentLocation,e.filterShopes(),e.currentDistance).length?r.a.createElement("p",null,"\u9644\u8fd1\u7121\u85e5\u5c40"):T.generateNearbyShop(e.currentLocation,e.filterShopes(),e.currentDistance).map((function(t){return r.a.createElement("li",{key:t.properties.id},r.a.createElement("span",{className:"distance"},T.calculateDistance(e.currentLocation,t.geometry.coordinates),"\u516c\u5c3a"),r.a.createElement("p",{className:"title"},t.properties.name),r.a.createElement("span",{className:"address"},t.properties.address),r.a.createElement("span",{className:"phone"},t.properties.phone),r.a.createElement("div",{className:"note"},t.properties.note),r.a.createElement("div",{className:"business-hours"},r.a.createElement(P,{timeList:t.properties.available})),r.a.createElement("div",{className:"quantity-display"},r.a.createElement("div",{className:"adult"},"\u6210\u4eba\u53e3\u7f69 ",r.a.createElement("strong",null,t.properties.mask_adult)),r.a.createElement("div",{className:"child"},"\u5152\u7ae5\u53e3\u7f69 ",r.a.createElement("strong",null,t.properties.mask_child))),r.a.createElement("div",{className:"update-time"},"\u66f4\u65b0\u6642\u9593 ",t.properties.updated))}))))}var H=a(172),B=a.n(H);function U(e){var t=e.place.show,a=e.place.properties.note;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"info-window clear-fix"},r.a.createElement("div",{className:"col text"},r.a.createElement("h3",{className:"name"},e.place.properties.name),r.a.createElement("p",{className:"address"},e.place.properties.address),r.a.createElement("p",{className:"address"},e.place.properties.phone),r.a.createElement("div",{className:"mask-type"},r.a.createElement("div",{className:"adult"},r.a.createElement("b",null,"\u6210\u4eba\u53e3\u7f69"),e.place.properties.mask_adult),r.a.createElement("div",{className:"child"},r.a.createElement("b",null,"\u5152\u7ae5\u53e3\u7f69"),e.place.properties.mask_child)),r.a.createElement("div",{className:"updated"},r.a.createElement("span",null,"\u66f4\u65b0\u6642\u9593"),e.place.properties.updated),r.a.createElement("div",{className:"note"},a)),r.a.createElement("div",{className:"col available"},r.a.createElement(P,{timeList:e.place.properties.available}))):null)}function F(e){return r.a.createElement("div",{className:"map-marker"},r.a.createElement("div",{className:"pin bounce"}),r.a.createElement("div",{className:"pulse"}),r.a.createElement(U,{place:e.place}))}function G(e){return r.a.createElement("div",{className:"main-map"},r.a.createElement(B.a,{bootstrapURLKeys:{key:"".concat("AIzaSyCMKwChei7MoIt1hgOtLL-tB4wARN1eSHA"),libraries:["places","geometry"]},defaultCenter:e.originLocation,defaultZoom:15,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var a=t.map,n=t.maps;e.setGoogleMaps(a,n)},onChildClick:function(t){var a=e.shopes.findIndex((function(e){return e.properties.id===t}));e.shopes[a].show=!e.shopes[a].show}},T.generateNearbyShop(e.currentLocation,e.filterShopes(),e.currentDistance).map((function(e){return r.a.createElement(F,{key:e.properties.id,lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0],place:e})}))))}function K(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],c=t[1];var s=Object(n.useCallback)((function(e){return{location:e.location.list,shopes:e.shopes.list,distance:e.selectedOption.distance,mask:e.selectedOption.mask}}),[]),l=Object(i.c)(s),u=l.location,m=l.shopes,d=l.distance,p=l.mask,E=Object(i.b)();Object(n.useEffect)((function(){E(g()),E((function(){return k().then((function(e){e&&(e.forEach((function(e){return e.show=!1})),y.dispatch(function(e){return{type:"RECEIVE_SHOPES",list:e}}(e)))})).catch((function(e){var t,a;y.dispatch((t=e.response.status,a=e.response.statusText,{type:"RECEIVE_SHOPES_ERROR",errorCode:t,errorText:a}))}))}))}),[]);var f=Object(n.useState)({lat:0,lng:0}),h=Object(o.a)(f,2),v=h[0],b=h[1];var N=0===u.length||0===m.length,x={lat:u.lat,lng:u.lng},O=0===v.lat?x:v,I=0===d.info?1e3:1e3*d.info;function C(){return"child"===p.info?m.filter((function(e){return e.properties.mask_child>0})):"adult"===p.info?m.filter((function(e){return e.properties.mask_adult>0})):m}return r.a.createElement("div",{className:"container"},N?r.a.createElement("p",null,"Loading....."):r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{maps:a,mask:p,shopes:m,distance:d,location:u,addPlace:function(e){b({lat:e[0].geometry.location.lat(),lng:e[0].geometry.location.lng()})},currentLocation:O,currentDistance:I,filterShopes:C}),r.a.createElement(G,{setGoogleMaps:function(e,t){c({mapInstance:e,mapApi:t})},shopes:T.generateNearbyShop(O,m,I),originLocation:x,currentLocation:O,currentDistance:I,filterShopes:C})))}s.a.render(r.a.createElement(i.a.Provider,{value:y},r.a.createElement((function(){return r.a.createElement("div",{className:"container"},r.a.createElement(K,null))}),null)),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.9f893435.chunk.js.map