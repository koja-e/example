(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("a",{on:{click:e.onClick}},[e._v("click")]),n("div",{attrs:{id:"barcode_type"}},[e._v("---")]),e._v(" "),n("div",{attrs:{id:"barcode"}},[e._v("---")]),n("div",{attrs:{id:"raw_matrial"}},[e._v(e._s(e.raw_matrial))]),n("div",{staticClass:"viewport",attrs:{id:"photo-area"}})])},a=[],c=n("1da1"),i=(n("96cf"),n("1157")),u=n.n(i),s=n("8a00"),l=n.n(s),d={name:"App",data:function(){return{raw_matrial:""}},watch:{raw_matrial:function(e,t){alert(e,t)}},mounted:function(){var e=this;u()((function(){r()}));var t=0,n="00000000",r=function(){var r=e;l.a.init({inputStream:{name:"Live",type:"LiveStream",target:document.querySelector("#photo-area"),constraints:{decodeBarCodeRate:3,successTimeout:500,codeRepetition:!0,tryVertical:!0,frameRate:15,width:640,height:480,facingMode:"environment"}},decoder:{readers:["ean_reader"]}},(function(e){e?console.log(e):(console.log("Initialization finished. Ready to start"),l.a.start(),_scannerIsRunning=!0)})),l.a.onProcessed((function(e){l.a.canvas.ctx.overlay,l.a.canvas.dom.overlay})),l.a.onDetected((function(e){if(console.log(e.codeResult.code),document.getElementById("barcode_type").innerText=e.codeResult.format,document.getElementById("barcode").innerText=e.codeResult.code,n!=e.codeResult.code&&(n=e.codeResult.code,0==t)){t=1;var o=new XMLHttpRequest;o.open("GET","https://corona-lab.tech/api/v1/healthy_products/barcode/"+e.codeResult.code),o.onreadystatechange=function(){t=0;var e=JSON.parse(o.responseText);r.raw_matrial=e[0].raw_material},o.send()}}))}},methods:{mTest:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("signIn");case 2:case"end":return t.stop()}}),t)})))()},onClick:function(){this.raw_matrial="from_json[0].raw_material"}}},f=d,p=(n("034f"),n("2877")),h=Object(p["a"])(f,o,a,!1,null,null,null),g=h.exports,v=n("2f62"),m=n("d4ec"),k=n("bee2"),b=(n("99af"),n("d3b7"),n("bc3a")),_=n.n(b),w="https://corona-lab.tech/api/v2",T=_.a.create({baseURL:w,timeout:3e4});T.interceptors.request.use((function(e){console.group(">>> REQ [".concat(e.method.toUpperCase(),"] ").concat(e.url)),console.dir(e),console.groupEnd();var t=q.getters.headerConfig;return e.headers["auto-login-token"]=t.headers["auto-login-token"],e.headers["access-token"]=t.headers["access-token"],e.headers["client"]=t.headers["client"],e.headers["uid"]=t.headers["uid"],e}),(function(e){return Promise.reject(e)})),T.interceptors.response.use((function(e){return console.group("<<< RES [".concat(e.config.method.toUpperCase(),"] ").concat(e.config.url)),console.dir(e),console.groupEnd(),e}));var y={get:function(e){return T.get(w+e).then((function(e){return e})).catch((function(e){return e}))},post:function(e,t){return T.post(w+e,t).then((function(e){return e})).catch((function(e){return e}))},put:function(e,t){return T.put(w+e,t).then((function(e){return e})).catch((function(e){return e}))},patch:function(e,t){return T.patch(w+e,t).then((function(e){return e})).catch((function(e){return e}))},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?T.delete(w+e,{data:t}).then((function(e){return e})).catch((function(e){return e})):T.delete(w+e).then((function(e){return e})).catch((function(e){return e}))}},x=y,R="/auth",O=function(){function e(){Object(m["a"])(this,e)}return Object(k["a"])(e,[{key:"signIn",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=R+"/guest/sign_in?guest_user_id=72",e.next=3,x.post(t);case 3:if(n=e.sent,201!==n.status){e.next=8;break}return e.abrupt("return",{accessToken:n.data["confirm_infomation"]["access-token"],client:n.data["confirm_infomation"]["client"],uid:n.data["confirm_infomation"]["uid"],autoLoginToken:n.data["auto_login_token"]});case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),j=n("852e"),L=n.n(j),E="accessToken",S="client",P="uid",C="autoLoginToken";function I(e){var t=e.accessToken,n=e.client,r=e.uid,o=e.autoLoginToken,a=e.time,c=void 0===a?365:a;L.a.set(E,t,{expires:c}),L.a.set(S,n,{expires:c}),L.a.set(P,r,{expires:c}),L.a.set(C,o,{expires:c})}var M={state:{accessToken:null,client:null,uid:null,autoLoginToken:null},mutations:{SET_HEADER:function(e,t){var n=t.accessToken,r=t.client,o=t.uid,a=t.autoLoginToken;e.accessToken=n,e.client=r,e.uid=o,e.autoLoginToken=a}},actions:{signIn:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=new O,t.next=4,r.signIn();case 4:if(o=t.sent,!o){t.next=12;break}return a={accessToken:o.accessToken,client:o.client,uid:o.uid,autoLoginToken:o.autoLoginToken},I(a),n("setAuthHeader",a),t.abrupt("return",o);case 12:return t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})))()},setAuthHeader:function(e,t){var n=e.commit,r=t.accessToken,o=t.client,a=t.uid,c=t.autoLoginToken;n("SET_HEADER",{accessToken:r,client:o,uid:a,autoLoginToken:c})}},getters:{headerConfig:function(e){return{headers:{"access-token":e.accessToken,client:e.client,uid:e.uid,"auto-login-token":e.autoLoginToken}}}}},A=M;r["a"].use(v["a"]);var H=new v["a"].Store({state:{},mutations:{},modules:{auth:A},getters:{},actions:{}}),q=H;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)},store:q}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.1963c75c.js.map