(function(e){function t(t){for(var r,u,a=t[0],i=t[1],s=t[2],l=0,d=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-092779b4":"b2a8a1f5","chunk-1ca059b9":"a1557221"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/example/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"app"},c=Object(r["e"])("バーコード撮影"),u=Object(r["e"])("原材料名撮影"),a=Object(r["d"])("p",null,[Object(r["d"])("a",{href:"googlechrome://sp7pc.com/"},"chrome")],-1),i=Object(r["d"])("p",null,[Object(r["d"])("a",{href:"x-web-search://sp7pc.com/"},"safari")],-1);function s(e,t,n,s,l,f){var d=Object(r["s"])("router-link"),p=Object(r["s"])("router-view");return Object(r["o"])(),Object(r["c"])("div",o,[Object(r["d"])("p",null,[Object(r["f"])(d,{to:"/barcode"},{default:Object(r["x"])((function(){return[c]})),_:1})]),Object(r["d"])("p",null,[Object(r["f"])(d,{to:"/character_recognition"},{default:Object(r["x"])((function(){return[u]})),_:1})]),a,i,Object(r["f"])(p)])}var l=n("1da1"),f=(n("96cf"),{name:"App",data:function(){return{}},watch:{},mounted:function(){this.mTest()},methods:{mTest:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("signIn");case 2:case"end":return t.stop()}}),t)})))()}}});n("5d44");f.render=s;var d=f,p=n("5502"),h=n("d4ec"),b=n("bee2"),g=(n("99af"),n("d3b7"),n("bc3a")),m=n.n(g),v="https://corona-lab.tech/api/v2",k=m.a.create({baseURL:v,timeout:3e4});k.interceptors.request.use((function(e){console.group(">>> REQ [".concat(e.method.toUpperCase(),"] ").concat(e.url)),console.dir(e),console.groupEnd();var t=H.getters.headerConfig;return e.headers["auto-login-token"]=t.headers["auto-login-token"],e.headers["access-token"]=t.headers["access-token"],e.headers["client"]=t.headers["client"],e.headers["uid"]=t.headers["uid"],e}),(function(e){return Promise.reject(e)})),k.interceptors.response.use((function(e){return console.group("<<< RES [".concat(e.config.method.toUpperCase(),"] ").concat(e.config.url)),console.dir(e),console.groupEnd(),e}));var j={get:function(e){return k.get(v+e).then((function(e){return e})).catch((function(e){return e}))},post:function(e,t){return k.post(v+e,t).then((function(e){return e})).catch((function(e){return e}))},put:function(e,t){return k.put(v+e,t).then((function(e){return e})).catch((function(e){return e}))},patch:function(e,t){return k.patch(v+e,t).then((function(e){return e})).catch((function(e){return e}))},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?k.delete(v+e,{data:t}).then((function(e){return e})).catch((function(e){return e})):k.delete(v+e).then((function(e){return e})).catch((function(e){return e}))}},O=j,T="/auth",w=function(){function e(){Object(h["a"])(this,e)}return Object(b["a"])(e,[{key:"signIn",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=T+"/guest/sign_in?guest_user_id=72",e.next=3,O.post(t);case 3:if(n=e.sent,201!==n.status){e.next=8;break}return e.abrupt("return",{accessToken:n.data["confirm_infomation"]["access-token"],client:n.data["confirm_infomation"]["client"],uid:n.data["confirm_infomation"]["uid"],autoLoginToken:n.data["auto_login_token"]});case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),y=n("852e"),x=n.n(y),_="accessToken",L="client",E="uid",R="autoLoginToken";function P(e){var t=e.accessToken,n=e.client,r=e.uid,o=e.autoLoginToken,c=e.time,u=void 0===c?365:c;x.a.set(_,t,{expires:u}),x.a.set(L,n,{expires:u}),x.a.set(E,r,{expires:u}),x.a.set(R,o,{expires:u})}var S={state:{accessToken:null,client:null,uid:null,autoLoginToken:null},mutations:{SET_HEADER:function(e,t){var n=t.accessToken,r=t.client,o=t.uid,c=t.autoLoginToken;e.accessToken=n,e.client=r,e.uid=o,e.autoLoginToken=c}},actions:{signIn:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=new w,t.next=4,r.signIn();case 4:if(o=t.sent,!o){t.next=12;break}return c={accessToken:o.accessToken,client:o.client,uid:o.uid,autoLoginToken:o.autoLoginToken},P(c),n("setAuthHeader",c),t.abrupt("return",o);case 12:return t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})))()},setAuthHeader:function(e,t){var n=e.commit,r=t.accessToken,o=t.client,c=t.uid,u=t.autoLoginToken;n("SET_HEADER",{accessToken:r,client:o,uid:c,autoLoginToken:u})}},getters:{headerConfig:function(e){return{headers:{"access-token":e.accessToken,client:e.client,uid:e.uid,"auto-login-token":e.autoLoginToken}}}}},A=S,C=p["a"].createStore({state:{},mutations:{},modules:{auth:A},getters:{},actions:{}}),H=C,I=(n("3ca3"),n("ddb0"),n("6c02")),M=Object(I["a"])({history:Object(I["b"])(),routes:[{path:"/barcode",name:"barcode",component:function(){return n.e("chunk-092779b4").then(n.bind(null,"a3e8"))}},{path:"/character_recognition",name:"characterRecognition",component:function(){return n.e("chunk-1ca059b9").then(n.bind(null,"fecf"))}}],scrollBehavior:function(){return{x:0,y:0}}}),U=M;Object(r["b"])(d).use(U).use(H).mount("#app")},"5d44":function(e,t,n){"use strict";n("b7b6")},b7b6:function(e,t,n){}});
//# sourceMappingURL=app.d4b768f3.js.map