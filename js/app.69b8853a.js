(function(t){function e(e){for(var r,i,o=e[0],u=e[1],s=e[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},a=[];function i(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0bd977":"a758c494","chunk-2d0c1d78":"07a8e1e3","chunk-2d0d3ff4":"b287aba7","chunk-2d207997":"103a1a6d","chunk-2d21804a":"afd25a8e","chunk-723c195e":"08c549d6"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=c[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=c[t]=[e,r]}));e.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(t);var s=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}c[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01ea":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r={scenicSpot:"ScenicSpot",restaurant:"Restaurant",activity:"Activity"},c=[{id:"scenicSpot",name:"探索景點"},{id:"restaurant",name:"節慶活動"},{id:"activity",name:"品嚐美食"}]},1306:function(t,e){t.exports="data:image/png;base64,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"},"158d":function(t,e){t.exports="data:image/png;base64,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"},"500f":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return u}));var r="loadScenicSpot",c="loadRestaurant",a="loadActivity",i="searchScenicSpot",o="searchRestaurant",u="searchActivity"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(t,e,n,c,a,i){var o=Object(r["x"])("Header"),u=Object(r["x"])("router-view"),s=Object(r["x"])("Footer");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(o),Object(r["g"])(u),Object(r["g"])(s)],64)}n("b0c0");var a=n("1306"),i=n.n(a),o=n("158d"),u=n.n(o),s={class:"py-4 flex justify-center md:justify-between md:px-11 md:py-6"},l=Object(r["e"])("img",{src:i.a,alt:"臺灣走走",class:"md:hidden"},null,-1),p=Object(r["e"])("img",{src:u.a,alt:"臺灣走走",class:"hidden md:inline"},null,-1),d={class:"my-auto"},f=Object(r["e"])("img",{src:i.a,alt:"臺灣走走",class:"ml-7 mt-4 md:hidden"},null,-1),m={class:"md:flex md:space-x-5"},b=Object(r["e"])("span",{class:"sr-only"},"Open main menu",-1),h={class:"flex flex-col justify-center items-end"};function v(t,e,n,c,a,i){var o=Object(r["x"])("router-link");return Object(r["r"])(),Object(r["d"])("div",s,[Object(r["e"])("h1",null,[Object(r["g"])(o,{to:"/"},{default:Object(r["D"])((function(){return[l,p]})),_:1})]),Object(r["e"])("nav",d,[Object(r["E"])(Object(r["e"])("div",{class:"bg-gray-50 opacity-70 fixed inset-0 md:hidden",onClick:e[0]||(e[0]=function(t){return c.open=!1})},null,512),[[r["B"],c.open]]),Object(r["e"])("div",{class:Object(r["m"])(["w-0 h-0 opacity-0 md:shadow-none md:rounded-none md:opacity-100 md:w-auto md:h-auto md:static",{"fixed top-0 right-0 bg-white shadow-md rounded-bl-3xl w-72 h-auto opacity-100 transition-all":c.open}])},[f,Object(r["e"])("ul",m,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.tourismTypeList,(function(t){return Object(r["r"])(),Object(r["d"])("li",{key:t.id,class:Object(r["m"])(["text-center text-primary-dark text-lg border-solid hover:text-primary hover:border-b hover:border-highlight",{"border-b border-trueGray-200 last:border-0 md:border-none":c.open}])},[Object(r["g"])(o,{to:"/search/".concat(t.id,"/category"),class:Object(r["m"])({"block px-auto py-6 md:p-0":c.open}),onClick:e[1]||(e[1]=function(t){return c.open=!1})},{default:Object(r["D"])((function(){return[Object(r["f"])(Object(r["z"])(t.name),1)]})),_:2},1032,["to","class"])],2)})),128))])],2)]),Object(r["e"])("button",{class:"bg-primary-light rounded-xl w-12 h-12 fixed top-2 right-2 focus:outline-none p-2.5 md:hidden",onClick:e[2]||(e[2]=function(t){return c.open=!c.open})},[b,Object(r["e"])("div",h,[Object(r["e"])("span",{class:Object(r["m"])(["block absolute transform w-5 h-1 bg-white transition duration-500 ease-in-out",{"w-7 rotate-45":c.open," -translate-y-2":!c.open}])},null,2),Object(r["e"])("span",{class:Object(r["m"])(["block absolute transform origin-center w-7 h-1 bg-white transition duration-500 ease-in-out",{"opacity-0":c.open}])},null,2),Object(r["e"])("span",{class:Object(r["m"])(["block absolute transform w-5 h-1 bg-white transition duration-500 ease-in-out",{"w-7 -rotate-45":c.open," translate-y-2":!c.open}])},null,2)])])])}var A=n("01ea"),O={name:"Header",setup:function(){var t=Object(r["u"])(!1);return{tourismTypeList:A["b"],open:t}}},j=n("d959"),y=n.n(j);const g=y()(O,[["render",v]]);var w=g,S={class:"py-5 text-sm text-center text-white bg-primary-footer"};function x(t,e,n,c,a,i){return Object(r["r"])(),Object(r["d"])("div",S," #The F2E 3rd 臺灣走走 #Breakfast #DeLIciousEgg ")}var P={name:"Footer"};const k=y()(P,[["render",x]]);var R=k,V={name:"Home",components:{Header:w,Footer:R}};const C=y()(V,[["render",c]]);var T=C,K=(n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("2532"),n("b64b"),n("6c02")),E=[{path:"/",name:"Home",component:function(){return n.e("chunk-723c195e").then(n.bind(null,"bb51"))}},{path:"/search/:type",name:"Search",component:function(){return n.e("chunk-2d0bd977").then(n.bind(null,"2d3b"))},beforeEnter:function(t,e){return Object.keys(A["a"]).includes(t.params.type)},children:[{path:"category",name:"Category",component:function(){return n.e("chunk-2d0c1d78").then(n.bind(null,"4886"))}},{path:"category/:category",name:"CategoryList",component:function(){return n.e("chunk-2d0d3ff4").then(n.bind(null,"5ec1"))}},{path:"list",name:"List",component:function(){return n.e("chunk-2d21804a").then(n.bind(null,"c8cb"))}}]},{path:"/tourism/:id",name:"Tourism",component:function(){return n.e("chunk-2d207997").then(n.bind(null,"a0e7"))}},{path:"/:pathMatch(.*)*",redirect:"/"}],G=Object(K["a"])({history:Object(K["b"])(),routes:E}),X=G,I=n("1da1"),J=n("ade3"),M=(n("4de4"),n("d81d"),n("96cf"),n("5502")),U="SCENIC_SPOT",L="RESTAURANT",Q="ACTIVITY",Y="SEARCH_SCENIC_SPOT",D="SEARCH_RESTAURANT",W="SEARCH_ACTIVITY",N=n("500f"),B=(n("99af"),n("bc3a")),H=n.n(B),q=n("6c2d"),F=H.a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Tourism/"}),z=function(){var t="b2daa64001ef4747845a6293adf539b2",e="EdTQGWVvV_buVasQJgBw8zfqq9w",n=(new Date).toGMTString(),r=new q["a"]("SHA-1","TEXT");r.setHMACKey(e,"TEXT"),r.update("x-date: "+n);var c=r.getHMAC("B64"),a='hmac username="'.concat(t,'", algorithm="hmac-sha1", headers="x-date", signature="').concat(c,'"');return{Authorization:a,"X-Date":n}};F.interceptors.request.use((function(t){return t.headers=z(),t}),(function(t){return Promise.reject(t)})),F.interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)}));var Z,_,$=F,tt=function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e,n){var r,c,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.city,c=n.top,a=n.skip,i=n.filter,o=r?"/".concat(e,"/").concat(r):"/".concat(e),t.prev=2,t.next=5,$.get(o,{params:{$filter:i,$top:c,$skip:a,$format:"JSON"}});case 5:return t.abrupt("return",t.sent);case 8:return t.prev=8,t.t0=t["catch"](2),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,n){return t.apply(this,arguments)}}(),et=n("07df"),nt=n("5a0c"),rt=n.n(nt),ct=Object(M["a"])({state:{scenicSpot:[],restaurant:[],activity:[],searchScenicSpot:[],searchRestaurant:[],searchActivity:[]},mutations:(Z={},Object(J["a"])(Z,U,(function(t,e){t.scenicSpot=e})),Object(J["a"])(Z,L,(function(t,e){t.restaurant=e})),Object(J["a"])(Z,Q,(function(t,e){t.activity=e})),Object(J["a"])(Z,Y,(function(t,e){t.searchScenicSpot=e})),Object(J["a"])(Z,D,(function(t,e){t.searchRestaurant=e})),Object(J["a"])(Z,W,(function(t,e){t.searchActivity=e})),Z),actions:(_={},Object(J["a"])(_,N["c"],(function(t){return Object(I["a"])(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.scenicSpot.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,tt(A["a"].scenicSpot,{top:500,skip:Math.floor(500*Math.random()),filter:"Picture/PictureUrl1 ne null and City ne null"});case 5:c=e.sent,n(U,c);case 7:case"end":return e.stop()}}),e)})))()})),Object(J["a"])(_,N["b"],(function(t){return Object(I["a"])(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.restaurant.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,tt(A["a"].restaurant,{top:500,skip:Math.floor(500*Math.random()),filter:"Picture/PictureUrl1 ne null and City ne null"});case 5:c=e.sent,n(L,c);case 7:case"end":return e.stop()}}),e)})))()})),Object(J["a"])(_,N["a"],(function(t){return Object(I["a"])(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.activity.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,tt(A["a"].activity,{top:200,skip:Math.floor(30*Math.random()),filter:"Picture/PictureUrl1 ne null and City ne null"});case 5:c=e.sent,n(Q,c);case 7:case"end":return e.stop()}}),e)})))()})),Object(J["a"])(_,N["f"],(function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,t.state,c=e.filter,n.next=4,tt(A["a"].scenicSpot,{top:30,filter:c});case 4:a=n.sent,r(Y,a);case 6:case"end":return n.stop()}}),n)})))()})),Object(J["a"])(_,N["e"],(function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,t.state,c=e.filter,n.next=4,tt(A["a"].restaurant,{top:30,filter:c});case 4:a=n.sent,r(D,a);case 6:case"end":return n.stop()}}),n)})))()})),Object(J["a"])(_,N["d"],(function(t,e){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,t.state,c=e.filter,n.next=4,tt(A["a"].activity,{top:30,filter:c});case 4:a=n.sent,r(W,a);case 6:case"end":return n.stop()}}),n)})))()})),_),getters:{popularScenicSpot:function(t){return function(e){var n=Object(et["a"])(t.scenicSpot,e),r=n.map((function(t){return{id:t.ID,name:t.Name,city:t.City,picture:{url:t.Picture.PictureUrl1,description:t.Picture.PictureDescription1}}}));return r}},recentActivity:function(t){var e=rt()(),n=e.add(2,"month"),r=t.activity.filter((function(t){return e.isAfter(t.StartTime)&&n.isAfter(t.EndTime)}));r=Object(et["a"])(t.activity,4);var c=r.map((function(t){return{id:t.ID,name:t.Name,city:t.City,startTime:rt()(t.StartTime).format("YYYY/MM/DD"),endTime:rt()(t.EndTime).format("YYYY/MM/DD"),picture:{url:t.Picture.PictureUrl1,description:t.Picture.PictureDescription1}}}));return c},goodRestaurant:function(t){var e=Object(et["a"])(t.restaurant,4),n=e.map((function(t){return{id:t.ID,name:t.Name,city:t.City,picture:{url:t.Picture.PictureUrl1,description:t.Picture.PictureDescription1}}}));return n},categoryScenicSpot:function(t){var e=t.scenicSpot.reduce((function(t,e){return[1,2,3].forEach((function(n){"Class".concat(n)in e&&(t[e["Class".concat(n)]]={picture:{url:e.Picture.PictureUrl1,description:e.Picture.PictureDescription1}})})),t}),{});return e},categoryRestaurant:function(t){var e=t.restaurant.reduce((function(t,e){return"Class"in e&&(t[e.Class]={picture:{url:e.Picture.PictureUrl1,description:e.Picture.PictureDescription1}}),t}),{});return e},categoryActivity:function(t){var e=t.activity.reduce((function(t,e){return[1,2].forEach((function(n){"Class".concat(n)in e&&(t[e["Class".concat(n)]]={picture:{url:e.Picture.PictureUrl1,description:e.Picture.PictureDescription1}})})),t}),{});return e}}});n("a766");Object(r["c"])(T).use(ct).use(X).mount("#app")},a766:function(t,e,n){}});
//# sourceMappingURL=app.69b8853a.js.map