(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e6da170"],{"01c8":function(e,t,n){"use strict";n("868e")},"032e":function(e,t,n){"use strict";n("67b2")},"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3"),n("ac1f"),n("00b4");var r=n("6b75");function s(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(e,t):void 0}}},"1b2d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-room"},[n("section",{staticClass:"room-header"},[e._t("default")],2),n("section",{ref:"chatroom",staticClass:"message-container"},[n("div",{staticClass:"mt-auto"},e._l(e.proccessedMessage,(function(t){return n("div",{key:t.id,staticClass:"message-block",class:{"server-message":0===t.type,"self-message":1===t.type}},[0===t.type?n("div",{staticClass:"message"},[e._v(" "+e._s(e.serverMessage(t))+" ")]):1===t.type?n("div",{staticClass:"self"},[n("div",{staticClass:"message"},[e._v(" "+e._s(t.message)+" ")]),n("div",{staticClass:"time"},[e._v(" "+e._s(e._f("timeFormat")(t.created_at))+" ")])]):2===t.type?n("div",{staticClass:"user"},[n("div",{staticClass:"message-area"},[n("UserThumbnail",{staticClass:"avatar",attrs:{"initial-user":t.userData}}),n("div",{staticClass:"message"},[e._v(" "+e._s(t.message)+" ")])],1),n("div",{staticClass:"time"},[e._v(" "+e._s(e._f("timeFormat")(t.created_at))+" ")])]):n("div",{staticClass:"d-none"})])})),0)]),n("section",{staticClass:"control-group"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.inputMessage,expression:"inputMessage",modifiers:{lazy:!0,trim:!0}}],attrs:{type:"text",name:"message",placeholder:"輸入訊息..."},domProps:{value:e.inputMessage},on:{change:function(t){e.inputMessage=t.target.value.trim()},blur:function(t){return e.$forceUpdate()}}}),n("icon",{staticClass:"btn-send cursor-pointer",attrs:{"icon-name":"message-send",disabled:e.isLoading},nativeOn:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.sendMessage.apply(null,arguments)}}})],1)])},s=[],a=n("5530"),i=n("2909"),o=(n("99af"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("4de4"),n("d81d"),n("b0c0"),n("d092")),c=n("2fa3"),u=n("2708"),f=n("2f62"),d={components:{UserThumbnail:o["a"]},mixins:[u["e"],u["b"],u["c"]],data:function(){return{messages:[],inputMessage:"",isLoading:!0}},sockets:{loginSuccess:function(e){console.log("login success"),console.log(e),this.isLoading=!1,this.messages=Object(i["a"])(e.messageData)},disconnect:function(e){console.log("socket disconnected"),console.log(e),this.isLoading=!0},message:function(e){this.messages=[].concat(Object(i["a"])(this.messages),[e])}},computed:Object(a["a"])(Object(a["a"])({},Object(f["b"])(["currentUser"])),{},{proccessedMessage:function(){var e=this,t=new Set,n=this.messages.filter((function(e){return!t.has(e.id)&&(t.add(e.id),!0)}));return n.map((function(t){return"server"===t.source?Object(a["a"])(Object(a["a"])({},t),{},{type:0}):t.userData.id===e.currentUser.id?Object(a["a"])(Object(a["a"])({},t),{},{type:1}):Object(a["a"])(Object(a["a"])({},t),{},{type:2})}))}}),watch:{proccessedMessage:function(){this.$nextTick((function(){var e=this.$refs.chatroom;e.scrollTop=e.scrollHeight}))}},mounted:function(){this.$socket.client.emit("login",{userId:this.currentUser.id})},beforeDestroy:function(){console.log("before destory"),this.$socket.client.emit("logout",{userId:this.currentUser.id})},methods:{serverMessage:function(e){console.log(e);var t=(e.userData,this.emptyName(e.userData.name,e.userData.account));return"join"===e.message?"".concat(t," 上線"):"leave"===e.message?"".concat(t," 離線"):""},sendMessage:function(){if(!this.isLoading){var e=this.checkInstantMessage(this.inputMessage),t=e.status,n=e.message;if(!1===t)return c["a"].fire({icon:"warning",title:n});this.$socket.client.emit("message",{source:"user",userId:this.currentUser.id,message:this.inputMessage}),this.inputMessage=""}}}},l=d,v=(n("032e"),n("2877")),h=Object(v["a"])(l,r,s,!1,null,"ba85a572",null);t["default"]=h.exports},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("6b75");function s(e){if(Array.isArray(e))return Object(r["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var i=n("06c5");n("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return s(e)||a(e)||Object(i["a"])(e)||o()}},"4df4":function(e,t,n){"use strict";var r=n("da84"),s=n("0366"),a=n("c65b"),i=n("7b0b"),o=n("9bdd"),c=n("e95a"),u=n("68ee"),f=n("07fa"),d=n("8418"),l=n("9a1f"),v=n("35a1"),h=r.Array;e.exports=function(e){var t=i(e),n=u(this),r=arguments.length,b=r>1?arguments[1]:void 0,p=void 0!==b;p&&(b=s(b,r>2?arguments[2]:void 0));var g,m,y,x,w,O,j=v(t),k=0;if(!j||this==h&&c(j))for(g=f(t),m=n?new this(g):h(g);g>k;k++)O=p?b(t[k],k):t[k],d(m,k,O);else for(x=l(t,j),w=x.next,m=n?new this:[];!(y=a(w,x)).done;k++)O=p?o(x,b,[y.value,k],!0):y.value,d(m,k,O);return m.length=k,m}},"4fad":function(e,t,n){var r=n("d039"),s=n("861d"),a=n("c6b6"),i=n("d86b"),o=Object.isExtensible,c=r((function(){o(1)}));e.exports=c||i?function(e){return!!s(e)&&((!i||"ArrayBuffer"!=a(e))&&(!o||o(e)))}:o},6062:function(e,t,n){"use strict";var r=n("6d61"),s=n("6566");r("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),s)},6566:function(e,t,n){"use strict";var r=n("9bf2").f,s=n("7c73"),a=n("e2cc"),i=n("0366"),o=n("19aa"),c=n("2266"),u=n("7dd0"),f=n("2626"),d=n("83ab"),l=n("f183").fastKey,v=n("69f3"),h=v.set,b=v.getterFor;e.exports={getConstructor:function(e,t,n,u){var f=e((function(e,r){o(e,v),h(e,{type:t,index:s(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=r&&c(r,e[u],{that:e,AS_ENTRIES:n})})),v=f.prototype,p=b(t),g=function(e,t,n){var r,s,a=p(e),i=m(e,t);return i?i.value=n:(a.last=i={index:s=l(t,!0),key:t,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=i),r&&(r.next=i),d?a.size++:e.size++,"F"!==s&&(a.index[s]=i)),e},m=function(e,t){var n,r=p(e),s=l(t);if("F"!==s)return r.index[s];for(n=r.first;n;n=n.next)if(n.key==t)return n};return a(v,{clear:function(){var e=this,t=p(e),n=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,n=p(t),r=m(t,e);if(r){var s=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=s),s&&(s.previous=a),n.first==r&&(n.first=s),n.last==r&&(n.last=a),d?n.size--:t.size--}return!!r},forEach:function(e){var t,n=p(this),r=i(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:n.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!m(this,e)}}),a(v,n?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),d&&r(v,"size",{get:function(){return p(this).size}}),f},setStrong:function(e,t,n){var r=t+" Iterator",s=b(t),a=b(r);u(e,t,(function(e,t){h(this,{type:r,target:e,state:s(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(t)}}},"67b2":function(e,t,n){},"6b75":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"6d61":function(e,t,n){"use strict";var r=n("23e7"),s=n("da84"),a=n("e330"),i=n("94ca"),o=n("6eeb"),c=n("f183"),u=n("2266"),f=n("19aa"),d=n("1626"),l=n("861d"),v=n("d039"),h=n("1c7e"),b=n("d44e"),p=n("7156");e.exports=function(e,t,n){var g=-1!==e.indexOf("Map"),m=-1!==e.indexOf("Weak"),y=g?"set":"add",x=s[e],w=x&&x.prototype,O=x,j={},k=function(e){var t=a(w[e]);o(w,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(m&&!l(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return m&&!l(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(m&&!l(e))&&t(this,0===e?0:e)}:function(e,n){return t(this,0===e?0:e,n),this})},_=i(e,!d(x)||!(m||w.forEach&&!v((function(){(new x).entries().next()}))));if(_)O=n.getConstructor(t,e,g,y),c.enable();else if(i(e,!0)){var C=new O,M=C[y](m?{}:-0,1)!=C,A=v((function(){C.has(1)})),S=h((function(e){new x(e)})),E=!m&&v((function(){var e=new x,t=5;while(t--)e[y](t,t);return!e.has(-0)}));S||(O=t((function(e,t){f(e,w);var n=p(new x,e,O);return void 0!=t&&u(t,n[y],{that:n,AS_ENTRIES:g}),n})),O.prototype=w,w.constructor=O),(A||E)&&(k("delete"),k("has"),g&&k("get")),(E||M)&&k(y),m&&w.clear&&delete w.clear}return j[e]=O,r({global:!0,forced:O!=x},j),b(O,e),m||n.setStrong(O,e,g),O}},"868e":function(e,t,n){},"9bdd":function(e,t,n){var r=n("825a"),s=n("2a62");e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(i){s(e,"throw",i)}}},a630:function(e,t,n){var r=n("23e7"),s=n("4df4"),a=n("1c7e"),i=!a((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:s})},bb2f:function(e,t,n){var r=n("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d092:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"photo-container",attrs:{to:{name:"user-main",params:{id:e.user.id}}}},[n("img",{directives:[{name:"show",rawName:"v-show",value:e.user.avatar,expression:"user.avatar"}],attrs:{src:e.user.avatar},on:{error:function(t){e.user.avatar=""}}})])},s=[],a=n("5530"),i={props:{initialUser:{type:Object,required:!0}},data:function(){return{user:{id:-1,avatar:""}}},watch:{initialUser:function(e){this.user=Object(a["a"])(Object(a["a"])({},this.user),e)}},created:function(){this.user=Object(a["a"])(Object(a["a"])({},this.user),this.initialUser)}},o=i,c=(n("01c8"),n("2877")),u=Object(c["a"])(o,r,s,!1,null,"34e062da",null);t["a"]=u.exports},d86b:function(e,t,n){var r=n("d039");e.exports=r((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},f183:function(e,t,n){var r=n("23e7"),s=n("e330"),a=n("d012"),i=n("861d"),o=n("1a2d"),c=n("9bf2").f,u=n("241c"),f=n("057f"),d=n("4fad"),l=n("90e3"),v=n("bb2f"),h=!1,b=l("meta"),p=0,g=function(e){c(e,b,{value:{objectID:"O"+p++,weakData:{}}})},m=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,b)){if(!d(e))return"F";if(!t)return"E";g(e)}return e[b].objectID},y=function(e,t){if(!o(e,b)){if(!d(e))return!0;if(!t)return!1;g(e)}return e[b].weakData},x=function(e){return v&&h&&d(e)&&!o(e,b)&&g(e),e},w=function(){O.enable=function(){},h=!0;var e=u.f,t=s([].splice),n={};n[b]=1,e(n).length&&(u.f=function(n){for(var r=e(n),s=0,a=r.length;s<a;s++)if(r[s]===b){t(r,s,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:f.f}))},O=e.exports={enable:w,fastKey:m,getWeakData:y,onFreeze:x};a[b]=!0},fb6a:function(e,t,n){"use strict";var r=n("23e7"),s=n("da84"),a=n("e8b5"),i=n("68ee"),o=n("861d"),c=n("23cb"),u=n("07fa"),f=n("fc6a"),d=n("8418"),l=n("b622"),v=n("1dde"),h=n("f36a"),b=v("slice"),p=l("species"),g=s.Array,m=Math.max;r({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var n,r,s,l=f(this),v=u(l),b=c(e,v),y=c(void 0===t?v:t,v);if(a(l)&&(n=l.constructor,i(n)&&(n===g||a(n.prototype))?n=void 0:o(n)&&(n=n[p],null===n&&(n=void 0)),n===g||void 0===n))return h(l,b,y);for(r=new(void 0===n?g:n)(m(y-b,0)),s=0;b<y;b++,s++)b in l&&d(r,s,l[b]);return r.length=s,r}})}}]);
//# sourceMappingURL=chunk-1e6da170.66b865a9.js.map