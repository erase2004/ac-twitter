(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10c24946"],{"08b7":function(t,e,s){},2441:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"site-nav"},[s("div",{staticClass:"main-part"},[s("router-link",{staticClass:"logo",attrs:{to:{name:"homepage"}}},[s("icon",{attrs:{"icon-name":"logo"}})],1),s("section",{staticClass:"nav-container"},[s("router-link",{staticClass:"nav-link link-group",class:{active:["homepage","tweet"].includes(t.$route.name)},attrs:{to:{name:"homepage"}}},[s("icon",{attrs:{"icon-name":"home","icon-class":"mr-20"}}),s("div",{staticClass:"link-text"},[t._v(" 首頁 ")])],1),s("router-link",{staticClass:"nav-link link-group",class:{active:["user-tweets","user-replies","user-likes"].includes(t.$route.name)}&&t.$route.params.id===t.currentUser.id,attrs:{to:{name:"user-main",params:{id:t.currentUser.id}}}},[s("icon",{attrs:{"icon-name":"user","icon-class":"mr-20"}}),s("div",{staticClass:"link-text"},[t._v(" 個人資料 ")])],1),s("router-link",{staticClass:"nav-link link-group",attrs:{to:{name:"notification"}}},["notification"===t.$route.name?s("icon",{attrs:{"icon-name":"notification-bell-fill","icon-class":"mr-20"}}):s("icon",{attrs:{"icon-name":"notification-bell","icon-class":"mr-20"}}),s("div",{staticClass:"link-text"},[t._v(" 通知 ")])],1),s("router-link",{staticClass:"nav-link link-group",attrs:{to:{name:"chatroom"}}},["chatroom"===t.$route.name?s("icon",{attrs:{"icon-name":"email-2-fill","icon-class":"mr-20"}}):s("icon",{attrs:{"icon-name":"email-2","icon-class":"mr-20 icon-fix"}}),s("div",{staticClass:"link-text"},[t._v(" 公開聊天室 ")])],1),s("router-link",{staticClass:"nav-link link-group",attrs:{to:{name:"direct-message"}}},["direct-message"===t.$route.name?s("icon",{attrs:{"icon-name":"email-2-fill","icon-class":"mr-20"}}):s("icon",{attrs:{"icon-name":"email-2","icon-class":"mr-20 icon-fix"}}),s("div",{staticClass:"link-text"},[t._v(" 私人訊息 ")])],1),s("router-link",{staticClass:"nav-link link-group",attrs:{to:{name:"user-setting"}}},[s("icon",{attrs:{"icon-name":"setting","icon-class":"mr-20"}}),s("div",{staticClass:"link-text"},[t._v(" 設定 ")])],1)],1),s("button",{staticClass:"btn-control btn-tweet",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.openModal.apply(null,arguments)}}},[t._v(" 推文 ")])],1),s("div",{staticClass:"link-group logout-part"},[s("icon",{attrs:{"icon-name":"logout","icon-class":"mr-20"}}),s("div",{staticClass:"link-text",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.logout.apply(null,arguments)}}},[t._v(" 登出 ")])],1),s("portal",{attrs:{to:"modals"}},[s("TweetModal",{attrs:{order:1,show:t.show},on:{close:t.closeModal}})],1)],1)},a=[],r=s("5530"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[s("div",{staticClass:"modal show tweet-modal",attrs:{tabindex:"-1",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("icon",{staticClass:"icon-close cursor-pointer",attrs:{"icon-name":"cross"},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.close.apply(null,arguments)}}})],1),s("div",{staticClass:"modal-body"},[s("TweetBox",{attrs:{"error-message":t.errorMessage},on:{"after-tweet":function(e){return t.handleNewTweet(e)},"update-error":function(e){t.errorMessage=e}}})],1)])])]),s("div",{staticClass:"modal-backdrop show"})])])},o=[],c=(s("b0c0"),s("a9e3"),s("769e")),l={components:{TweetBox:c["a"]},props:{show:{type:Boolean,required:!0,default:!1}},data:function(){return{errorMessage:""}},watch:{show:function(t,e){!1===t&&(this.errorMessage="")}},methods:{close:function(){this.$emit("close")},handleNewTweet:function(t){var e=this.$route;"homepage"===e.name||"user-tweets"===e.name&&t.userData.id===Number(e.params.id)?(this.$store.commit("produceTweet",t),this.close()):(this.close(),this.$router.push({name:"homepage"}))}}},u=l,d=(s("59f9"),s("2877")),m=Object(d["a"])(u,i,o,!1,null,"c8c3e3aa",null),p=m.exports,f=s("2f62"),v={components:{TweetModal:p},data:function(){return{show:!1}},computed:Object(r["a"])({},Object(f["b"])(["currentUser"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push({name:"user-sign-in"})},openModal:function(){this.show=!0},closeModal:function(){this.show=!1}}},h=v,g=(s("e0f2"),Object(d["a"])(h,n,a,!1,null,"30fa0aee",null));e["a"]=g.exports},"2fa2":function(t,e,s){},3519:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container"},[s("SiteNav"),s("ListNav",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" 上線使用者("+t._s(t.users.length)+") ")]},proxy:!0},{key:"list",fn:function(){return[s("div",{staticClass:"list-container"},t._l(t.users,(function(e){return s("div",{key:e.id,staticClass:"list-group"},[s("UserThumbnail",{staticClass:"avatar",attrs:{"initial-user":e}}),s("div",{staticClass:"name"},[t._v(" "+t._s(t.emptyName(e.name,e.account))+" ")]),s("div",{staticClass:"account"},[t._v(" "+t._s(t._f("addPrefix")(e.account))+" ")])],1)})),0)]},proxy:!0}])}),s("MessageRoom",[s("span",{staticClass:"room-title"},[t._v("公開聊天室")])])],1)},a=[],r=s("2909"),i=s("d092"),o=s("2441"),c=s("7fc4"),l=s("1b2d"),u=s("2708"),d={components:{SiteNav:o["a"],ListNav:c["a"],MessageRoom:l["default"],UserThumbnail:i["a"]},mixins:[u["a"],u["b"]],sockets:{userListUpdate:function(t){console.log("user list update"),console.log(t),this.users=Object(r["a"])(t.onlineUsers)}},data:function(){return{users:[]}}},m=d,p=(s("d46c"),s("2877")),f=Object(p["a"])(m,n,a,!1,null,"6a7c2077",null);e["default"]=f.exports},4540:function(t,e,s){},"59f9":function(t,e,s){"use strict";s("8402")},"5fe5":function(t,e,s){"use strict";s("9980")},6783:function(t,e,s){"use strict";s("a4d3"),s("e01a");var n=s("2fa3");e["a"]={get:function(t){var e=t.tweetId;return n["b"].get("/tweets/".concat(e))},getAll:function(){return n["b"].get("/tweets")},getReplies:function(t){var e=t.tweetId;return n["b"].get("/tweets/".concat(e,"/replies"))},post:function(t){var e=t.description;return n["b"].post("/tweets",{description:e})},postReply:function(t){var e=t.tweetId,s=t.comment;return n["b"].post("/tweets/".concat(e,"/replies"),{comment:s})},like:function(t){var e=t.tweetId;return n["b"].post("/tweets/".concat(e,"/like"))},unlike:function(t){var e=t.tweetId;return n["b"].post("/tweets/".concat(e,"/unlike"))}}},"769e":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"tweet-input-box"},[s("section",{staticClass:"avatar-part"},[s("UserThumbnail",{attrs:{"initial-user":t.currentUser}})],1),s("section",{staticClass:"input-part"},[s("textarea",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:t.description,expression:"description",modifiers:{trim:!0,lazy:!0}}],attrs:{placeholder:"有什麼新鮮事？",maxlength:"140"},domProps:{value:t.description},on:{change:function(e){t.description=e.target.value.trim()},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),s("div",{staticClass:"control-part"},[s("span",{staticClass:"error-message",attrs:{title:"error"}},[t._v(t._s(t.error))]),s("button",{staticClass:"btn-control btn-tweet",attrs:{disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.tweet.apply(null,arguments)}}},[t._v(" 推文 ")])])])])},a=[],r=s("1da1"),i=s("5530"),o=(s("96cf"),s("a4d3"),s("e01a"),s("d9e2"),s("d092")),c=s("2708"),l=s("6783"),u=s("2f62"),d=s("2fa3"),m={components:{UserThumbnail:o["a"]},mixins:[c["c"]],props:{errorMessage:{type:String,required:!1,default:""}},data:function(){return{description:"",error:"",isProcessing:!1}},computed:Object(i["a"])({},Object(u["b"])(["currentUser"])),watch:{errorMessage:function(t){console.log(t),this.error=t}},methods:{tweet:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,n,a,r,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,s=t.checkTweet(t.description),n=s.status,a=s.message,t.error="",!1!==n){e.next=7;break}return t.error=a,t.$emit("update-error",t.error),e.abrupt("return");case 7:return t.$emit("update-error",t.error),t.isProcessing=!0,e.next=11,l["a"].post({description:t.description});case 11:if(r=e.sent,i=r.data,"success"===i.status){e.next=15;break}throw new Error(i.status);case 15:o=i.tweetData,t.$emit("after-tweet",{id:o.id,userData:t.currentUser,description:t.description,replyAmount:0,likeAmount:0,userLiked:!1,createdAt:new Date}),t.description="",e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](0),console.log(e.t0),d["a"].fire({icon:"error",title:"發推失敗，請稍後再試"});case 24:return e.prev=24,t.isProcessing=!1,e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[0,20,24,27]])})))()}}},p=m,f=(s("a88e"),s("2877")),v=Object(f["a"])(p,n,a,!1,null,"f15bbad6",null);e["a"]=v.exports},"7fc4":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"user-list"},[s("div",{staticClass:"list-header"},[t._t("header")],2),s("div",{staticClass:"list-body"},[t._t("list")],2)])},a=[],r=(s("5fe5"),s("2877")),i={},o=Object(r["a"])(i,n,a,!1,null,"4b89ca4c",null);e["a"]=o.exports},8402:function(t,e,s){},9980:function(t,e,s){},a88e:function(t,e,s){"use strict";s("08b7")},d46c:function(t,e,s){"use strict";s("4540")},e0f2:function(t,e,s){"use strict";s("2fa2")}}]);
//# sourceMappingURL=chunk-10c24946.6c530fec.js.map