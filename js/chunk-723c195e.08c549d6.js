(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-723c195e"],{"057f":function(e,t,r){var n=r("c6b6"),c=r("fc6a"),o=r("241c").f,a=r("f36a"),i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(e){try{return o(e)}catch(t){return a(i)}};e.exports.f=function(e){return i&&"Window"==n(e)?u(e):o(c(e))}},"32f1":function(e,t,r){e.exports=r.p+"img/Search.eecc56aa.svg"},"408a":function(e,t,r){var n=r("e330");e.exports=n(1..valueOf)},"428f":function(e,t,r){var n=r("da84");e.exports=n},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("e330"),c=r("1d80"),o=r("577e"),a=r("5899"),i=n("".replace),u="["+a+"]",s=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(e){return function(t){var r=o(c(t));return 1&e&&(r=i(r,s,"")),2&e&&(r=i(r,l,"")),r}};e.exports={start:f(1),end:f(2),trim:f(3)}},7156:function(e,t,r){var n=r("1626"),c=r("861d"),o=r("d2bb");e.exports=function(e,t,r){var a,i;return o&&n(a=t.constructor)&&a!==r&&c(i=a.prototype)&&i!==r.prototype&&o(e,i),e}},"746f":function(e,t,r){var n=r("428f"),c=r("1a2d"),o=r("e538"),a=r("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});c(t,e)||a(t,e,{value:o.f(e)})}},a0c1:function(e,t,r){e.exports=r.p+"img/chevron-right-orange.f0d1473e.svg"},a4d3:function(e,t,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d066"),a=r("2ba4"),i=r("c65b"),u=r("e330"),s=r("c430"),l=r("83ab"),f=r("4930"),d=r("d039"),b=r("1a2d"),m=r("e8b5"),p=r("1626"),v=r("861d"),O=r("3a9b"),g=r("d9b5"),j=r("825a"),y=r("7b0b"),x=r("fc6a"),h=r("a04b"),w=r("577e"),S=r("5c6c"),k=r("7c73"),N=r("df75"),I=r("241c"),E=r("057f"),T=r("7418"),V=r("06cf"),A=r("9bf2"),_=r("d1e7"),P=r("f36a"),B=r("6eeb"),F=r("5692"),H=r("f772"),C=r("d012"),D=r("90e3"),M=r("b622"),R=r("e538"),$=r("746f"),z=r("d44e"),K=r("69f3"),L=r("b727").forEach,G=H("hidden"),J="Symbol",U="prototype",q=M("toPrimitive"),X=K.set,Y=K.getterFor(J),Q=Object[U],W=c.Symbol,Z=W&&W[U],ee=c.TypeError,te=c.QObject,re=o("JSON","stringify"),ne=V.f,ce=A.f,oe=E.f,ae=_.f,ie=u([].push),ue=F("symbols"),se=F("op-symbols"),le=F("string-to-symbol-registry"),fe=F("symbol-to-string-registry"),de=F("wks"),be=!te||!te[U]||!te[U].findChild,me=l&&d((function(){return 7!=k(ce({},"a",{get:function(){return ce(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=ne(Q,t);n&&delete Q[t],ce(e,t,r),n&&e!==Q&&ce(Q,t,n)}:ce,pe=function(e,t){var r=ue[e]=k(Z);return X(r,{type:J,tag:e,description:t}),l||(r.description=t),r},ve=function(e,t,r){e===Q&&ve(se,t,r),j(e);var n=h(t);return j(r),b(ue,n)?(r.enumerable?(b(e,G)&&e[G][n]&&(e[G][n]=!1),r=k(r,{enumerable:S(0,!1)})):(b(e,G)||ce(e,G,S(1,{})),e[G][n]=!0),me(e,n,r)):ce(e,n,r)},Oe=function(e,t){j(e);var r=x(t),n=N(r).concat(he(r));return L(n,(function(t){l&&!i(je,r,t)||ve(e,t,r[t])})),e},ge=function(e,t){return void 0===t?k(e):Oe(k(e),t)},je=function(e){var t=h(e),r=i(ae,this,t);return!(this===Q&&b(ue,t)&&!b(se,t))&&(!(r||!b(this,t)||!b(ue,t)||b(this,G)&&this[G][t])||r)},ye=function(e,t){var r=x(e),n=h(t);if(r!==Q||!b(ue,n)||b(se,n)){var c=ne(r,n);return!c||!b(ue,n)||b(r,G)&&r[G][n]||(c.enumerable=!0),c}},xe=function(e){var t=oe(x(e)),r=[];return L(t,(function(e){b(ue,e)||b(C,e)||ie(r,e)})),r},he=function(e){var t=e===Q,r=oe(t?se:x(e)),n=[];return L(r,(function(e){!b(ue,e)||t&&!b(Q,e)||ie(n,ue[e])})),n};if(f||(W=function(){if(O(Z,this))throw ee("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?w(arguments[0]):void 0,t=D(e),r=function(e){this===Q&&i(r,se,e),b(this,G)&&b(this[G],t)&&(this[G][t]=!1),me(this,t,S(1,e))};return l&&be&&me(Q,t,{configurable:!0,set:r}),pe(t,e)},Z=W[U],B(Z,"toString",(function(){return Y(this).tag})),B(W,"withoutSetter",(function(e){return pe(D(e),e)})),_.f=je,A.f=ve,V.f=ye,I.f=E.f=xe,T.f=he,R.f=function(e){return pe(M(e),e)},l&&(ce(Z,"description",{configurable:!0,get:function(){return Y(this).description}}),s||B(Q,"propertyIsEnumerable",je,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:W}),L(N(de),(function(e){$(e)})),n({target:J,stat:!0,forced:!f},{for:function(e){var t=w(e);if(b(le,t))return le[t];var r=W(t);return le[t]=r,fe[r]=t,r},keyFor:function(e){if(!g(e))throw ee(e+" is not a symbol");if(b(fe,e))return fe[e]},useSetter:function(){be=!0},useSimple:function(){be=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!l},{create:ge,defineProperty:ve,defineProperties:Oe,getOwnPropertyDescriptor:ye}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:xe,getOwnPropertySymbols:he}),n({target:"Object",stat:!0,forced:d((function(){T.f(1)}))},{getOwnPropertySymbols:function(e){return T.f(y(e))}}),re){var we=!f||d((function(){var e=W();return"[null]"!=re([e])||"{}"!=re({a:e})||"{}"!=re(Object(e))}));n({target:"JSON",stat:!0,forced:we},{stringify:function(e,t,r){var n=P(arguments),c=t;if((v(t)||void 0!==e)&&!g(e))return m(t)||(t=function(e,t){if(p(c)&&(t=i(c,this,e,t)),!g(t))return t}),n[1]=t,a(re,null,n)}})}if(!Z[q]){var Se=Z.valueOf;B(Z,q,(function(e){return i(Se,this)}))}z(W,J),C[G]=!0},a9e3:function(e,t,r){"use strict";var n=r("83ab"),c=r("da84"),o=r("e330"),a=r("94ca"),i=r("6eeb"),u=r("1a2d"),s=r("7156"),l=r("3a9b"),f=r("d9b5"),d=r("c04e"),b=r("d039"),m=r("241c").f,p=r("06cf").f,v=r("9bf2").f,O=r("408a"),g=r("58a8").trim,j="Number",y=c[j],x=y.prototype,h=c.TypeError,w=o("".slice),S=o("".charCodeAt),k=function(e){var t=d(e,"number");return"bigint"==typeof t?t:N(t)},N=function(e){var t,r,n,c,o,a,i,u,s=d(e,"number");if(f(s))throw h("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=g(s),t=S(s,0),43===t||45===t){if(r=S(s,2),88===r||120===r)return NaN}else if(48===t){switch(S(s,1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+s}for(o=w(s,2),a=o.length,i=0;i<a;i++)if(u=S(o,i),u<48||u>c)return NaN;return parseInt(o,n)}return+s};if(a(j,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,E=function(e){var t=arguments.length<1?0:y(k(e)),r=this;return l(x,r)&&b((function(){O(r)}))?s(Object(t),r,E):t},T=n?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;T.length>V;V++)u(y,I=T[V])&&!u(E,I)&&v(E,I,p(y,I));E.prototype=x,x.constructor=E,i(c,j,E)}},bb51:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"flex flex-col md:flex-row md:justify-center md:mt-20 px-4 md:px-24 lg:px-36 mb-9 md:mb-14"},o={class:"px-4 md:px-11"};function a(e,t,r,a,i,u){var s=Object(n["x"])("home-title"),l=Object(n["x"])("home-search"),f=Object(n["x"])("home-activity");return Object(n["r"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",c,[Object(n["g"])(s),Object(n["g"])(l)]),Object(n["e"])("div",o,[Object(n["g"])(f)])],64)}var i=r("d3a8"),u=r.n(i),s={class:"text-center flex flex-col items-center md:items-start md:text-left md:mr-14 lg:mr-20"},l=Object(n["e"])("h1",{class:"text-3xl font-light text-black leading-normal mb-4 md:text-4xl lg:text-5xl md:mb-5"},[Object(n["e"])("p",{class:"md:mb-5"},[Object(n["f"])(" 探索 "),Object(n["e"])("span",{class:"border-b-2 border-solid border-highlight -ml-2"},"台灣之美")]),Object(n["e"])("p",null,"讓我們更親近這片土地")],-1),f=Object(n["e"])("h2",{class:"mb-9 flex items-center"},[Object(n["e"])("img",{src:u.a,alt:"Marker",class:"mr-1"}),Object(n["e"])("span",{class:"text-sm text-primary-dark mr-1"},"台灣旅遊景點導覽"),Object(n["e"])("span",{class:"text-xs font-bold text-primary-dark"},"Taiwan Travel Guide")],-1),d=[l,f];function b(e,t,r,c,o,a){return Object(n["r"])(),Object(n["d"])("div",s,d)}var m={name:"HomeTitle"},p=r("d959"),v=r.n(p);const O=v()(m,[["render",b]]);var g=O,j=r("32f1"),y=r.n(j),x={class:"text-center"},h=Object(n["e"])("img",{src:y.a,alt:"Search",class:"mr-3"},null,-1),w=Object(n["e"])("span",{class:"font-bold tracking-widest"},"搜 尋",-1);function S(e,t,r,c,o,a){var i=Object(n["x"])("base-select"),u=Object(n["x"])("base-input"),s=Object(n["x"])("base-button");return Object(n["r"])(),Object(n["d"])("div",x,[Object(n["g"])(i,{class:"w-full mb-2",options:c.tourismTypeList,"label-key":"name",modelValue:c.type,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.type=e})},null,8,["options","modelValue"]),Object(n["g"])(u,{class:"w-full mb-2",placeholder:"你想去哪裡？請輸入關鍵字",modelValue:c.text,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.text=e})},null,8,["modelValue"]),Object(n["g"])(s,{class:"w-full",onClick:c.searchHandler},{default:Object(n["D"])((function(){return[h,w]})),_:1},8,["onClick"])])}var k={class:"bg-primary rounded-md text-white hover:bg-primary-link flex justify-center items-center py-3"},N=Object(n["f"])("Button");function I(e,t,r,c,o,a){return Object(n["r"])(),Object(n["d"])("button",k,[Object(n["w"])(e.$slots,"default",{},(function(){return[N]}))])}var E={name:"BaseButton"};const T=v()(E,[["render",I]]);var V=T,A=["value"];function _(e,t,r,c,o,a){return Object(n["r"])(),Object(n["d"])("input",{type:"text",class:"px-7 py-3 bg-block border border-solid border-true-gray-200 rounded-md focus:outline-primary text-primary font-bold",placeholder:"請輸入",value:r.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,A)}var P={name:"BaseInput",props:["modelValue"],emits:["update:modelValue"]};const B=v()(P,[["render",_]]);var F=B,H=["value"];function C(e,t,r,c,o,a){return Object(n["r"])(),Object(n["d"])("select",{class:"px-7 py-3 border-true-gray-200 border border-solid rounded-md text-primary font-bold bg-white h-12",onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.options,(function(e){return Object(n["r"])(),Object(n["d"])("option",{key:e[r.idKey],value:e[r.idKey]},Object(n["z"])(e[r.labelKey]),9,H)})),128))],32)}r("a9e3");var D={name:"BaseSelect",props:{modelValue:{type:[String,Number]},options:{type:Array},idKey:{type:String,default:"id"},labelKey:{type:String,default:"label"}}};const M=v()(D,[["render",C]]);var R=M,$=r("01ea"),z=r("6c02"),K={name:"HomeSearch",components:{BaseButton:V,BaseInput:F,BaseSelect:R},setup:function(){var e=Object(z["c"])(),t=Object(n["u"])(""),r=Object(n["u"])($["b"][0].id),c=function(){var n={};t.value&&(n.q=t.value),e.push({path:"/search/".concat(r.value,"/list"),query:n})};return{text:t,type:r,searchHandler:c,tourismTypeList:$["b"]}}};const L=v()(K,[["render",S]]);var G=L,J=(r("a4d3"),r("e01a"),r("b0c0"),r("a0c1")),U=r.n(J),q=r("c1d6"),X=r.n(q),Y=r("e680"),Q=r.n(Y),W={class:"w-full"},Z={class:"flex justify-between items-center mb-2"},ee=Object(n["e"])("h3",{class:"font-light text-2xl md:text-4xl ml-4"},"近期活動",-1),te=Object(n["f"])(" 查看更多活動 "),re=Object(n["e"])("img",{src:U.a,alt:"chevron-right",class:"text-more ml-2"},null,-1),ne={class:"md:flex md:flex-wrap"},ce={class:"flex md:border md:border-solid md:border-true-gray md:rounded-2xl md:overflow-hidden group"},oe=["src","alt"],ae={class:"w-4/6 flex flex-col md:py-4 pl-3 md:pr-6 box-border md:border-l-2 md:border-solid md:border-true-gray flex-1"},ie={class:"text-primary-dark text-xs font-normal md:text-base md:mb-2"},ue={class:"flex justify-between mt-auto"},se={class:"flex items-center"},le=Object(n["e"])("img",{src:X.a,alt:"Marker"},null,-1),fe={class:"ml-1 text-primary-dark text-xs font-normal"},de=Object(n["f"])(" 詳細介紹 "),be=Object(n["e"])("img",{src:Q.a,alt:"chevron-right",class:"text-more ml-2"},null,-1);function me(e,t,r,c,o,a){var i=Object(n["x"])("router-link");return Object(n["r"])(),Object(n["d"])("section",W,[Object(n["e"])("header",Z,[ee,Object(n["g"])(i,{to:"/search/activity",class:"text-more flex font-medium"},{default:Object(n["D"])((function(){return[te,re]})),_:1})]),Object(n["e"])("main",ne,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(c.recentActivity,(function(e){return Object(n["r"])(),Object(n["d"])("div",{key:e.id,class:"mb-4 md:w-1/2 md:px-2 relative"},[Object(n["e"])("div",ce,[Object(n["g"])(i,{to:"/tourism/".concat(e.id),class:"w-2/6 h-16 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl md:rounded-none overflow-hidden flex-shrink-0"},{default:Object(n["D"])((function(){return[Object(n["e"])("img",{src:e.picture.url,alt:e.picture.description,class:"w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform"},null,8,oe)]})),_:2},1032,["to"]),Object(n["e"])("div",ae,[Object(n["e"])("div",ie,Object(n["z"])(e.startTime)+" - "+Object(n["z"])(e.endTime),1),Object(n["g"])(i,{to:"/tourism/".concat(e.id),class:"text-black font-bold truncate md:text-xl"},{default:Object(n["D"])((function(){return[Object(n["f"])(Object(n["z"])(e.name),1)]})),_:2},1032,["to"]),Object(n["e"])("div",ue,[Object(n["e"])("div",se,[le,Object(n["e"])("span",fe,Object(n["z"])(e.city),1)]),Object(n["g"])(i,{to:"/tourism/".concat(e.id),class:"flex"},{default:Object(n["D"])((function(){return[de,be]})),_:2},1032,["to"])])])])])})),128))])])}var pe=r("1da1"),ve=(r("96cf"),r("5502")),Oe=r("500f"),ge={name:"HomeActivity",components:{},setup:function(){var e=Object(ve["b"])();return Object(n["p"])(Object(pe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch(Oe["a"]);case 2:case"end":return t.stop()}}),t)})))),{recentActivity:Object(n["b"])((function(){return e.getters.recentActivity}))}}};const je=v()(ge,[["render",me]]);var ye=je,xe={name:"Tourism",components:{HomeTitle:g,HomeSearch:G,HomeActivity:ye},setup:function(){}};const he=v()(xe,[["render",a]]);t["default"]=he},c1d6:function(e,t,r){e.exports=r.p+"img/marker-gray.661d6044.svg"},d3a8:function(e,t,r){e.exports=r.p+"img/marker-yellow.387a6cad.svg"},e01a:function(e,t,r){"use strict";var n=r("23e7"),c=r("83ab"),o=r("da84"),a=r("e330"),i=r("1a2d"),u=r("1626"),s=r("3a9b"),l=r("577e"),f=r("9bf2").f,d=r("e893"),b=o.Symbol,m=b&&b.prototype;if(c&&u(b)&&(!("description"in m)||void 0!==b().description)){var p={},v=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=s(m,this)?new b(e):void 0===e?b():b(e);return""===e&&(p[t]=!0),t};d(v,b),v.prototype=m,m.constructor=v;var O="Symbol(test)"==String(b("test")),g=a(m.toString),j=a(m.valueOf),y=/^Symbol\((.*)\)[^)]+$/,x=a("".replace),h=a("".slice);f(m,"description",{configurable:!0,get:function(){var e=j(this),t=g(e);if(i(p,e))return"";var r=O?h(t,7,-1):x(t,y,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:v})}},e538:function(e,t,r){var n=r("b622");t.f=n},e680:function(e,t,r){e.exports=r.p+"img/chevron-right-green.ea78f6af.svg"}}]);
//# sourceMappingURL=chunk-723c195e.08c549d6.js.map