(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b574c65"],{"26da":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"input-group"},[a("span",{staticClass:"input-container"},[a("span",{staticClass:"prefix"},[e._v(e._s(e.prefix))]),a("input",{class:{invalid:!e.isValid},attrs:{type:e.inputType,minlength:e.minlength,maxlength:e.maxlength,name:e.name,required:e.required},domProps:{value:e.value},on:{input:function(t){t.stopPropagation(),t.preventDefault(),e.value=t.target.value},change:function(t){return t.stopPropagation(),t.preventDefault(),e.inputChange(t.target.value)}}}),a("div",{staticClass:"input-status-bar"})]),a("label",{staticClass:"input-label"},[e._v(e._s(e.label))]),a("div",{staticClass:"input-status-info"},[a("div",{staticClass:"text",attrs:{title:e.errorMessage}},[e._v(" "+e._s(e.errorMessage)+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showLimit&&e.maxlength>0,expression:"showLimit && (maxlength > 0)"}],staticClass:"limit"},[e._v(" "+e._s(e.limitText)+" ")])])])},n=[],s=(a("a9e3"),a("caad"),a("99af"),a("498a"),{props:{prefix:{type:String,required:!1,default:""},label:{type:String,required:!0,default:""},inputType:{type:String,required:!0,default:"text"},minlength:{type:Number,required:!1,default:-1},maxlength:{type:Number,required:!1,default:-1},name:{type:String,required:!0,default:""},required:{type:Boolean,required:!1,default:!1},initialValue:{type:[String,Number],required:!1,default:""},errorMessage:{type:String,required:!1,default:""},showLimit:{type:Boolean,required:!1,default:!1},doTrim:{type:Boolean,required:!1,default:!0}},data:function(){return{value:"",isValid:!0}},computed:{limitText:function(){var e=["text","password"];return e.includes(this.inputType)&&this.maxlength>0?"".concat(this.value.length,"/").concat(this.maxlength):""}},watch:{initialValue:function(e){this.value=e},errorMessage:function(e){this.isValid=""===e}},created:function(){this.value=this.initialValue},methods:{inputChange:function(e){"string"===typeof e&&!0===this.doTrim&&(this.value=e.trim()),this.$emit("input-change",this.value)}}}),i=s,u=(a("f061"),a("2877")),o=Object(u["a"])(i,r,n,!1,null,"675fcf95",null);t["a"]=o.exports},"35cd":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"main",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"sign-up-heading"},[a("img",{staticClass:"logo-img",attrs:{src:e.LogoImg}}),a("h1",{staticClass:"sign-up-title"},[e._v(" 建立你的帳號 ")])]),a("div",{staticClass:"sign-up-content"},e._l(e.inputKeys,(function(t){return a("GeneralInput",e._b({key:t,attrs:{name:t,"error-message":e.error[t],"initial-value":e.data[t]},on:{"input-change":function(a){e.data[t]=a}}},"GeneralInput",e.inputConfig[t],!1))})),1),e._m(0),a("div",{staticClass:"cancel"},[a("router-link",{staticClass:"cancel",attrs:{to:"/signin"}},[e._v(" 取消 ")])],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sign-up-button"},[a("button",{staticClass:"sign-up",attrs:{type:"submit"}},[e._v(" 註冊 ")])])}],s=a("1da1"),i=(a("96cf"),a("b0c0"),a("ac1f"),a("00b4"),a("26da")),u=a("5684"),o=a.n(u),c=a("7696"),l=a("2708"),p=a("2fa3"),d=["account","name","email","password","passwordCheck"],m={account:{label:"帳號",inputType:"text",minlength:1,maxlength:20,required:!0},name:{label:"名稱",inputType:"text",maxlength:50},email:{label:"Email",inputType:"email",required:!0},password:{label:"密碼",inputType:"password",minlength:5,maxlength:20,required:!0},passwordCheck:{label:"密碼確認",inputType:"password",minlength:5,maxlength:20,required:!0}},g={name:"UserSignUp",components:{GeneralInput:i["a"]},mixins:[l["c"]],data:function(){return{LogoImg:o.a,data:{account:"",name:"",email:"",password:"",passwordCheck:""},error:{account:"",name:"",email:"",password:"",passwordCheck:""},inputKeys:d,inputConfig:m}},methods:{handleSubmit:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,n,s,i,u,o,l,d,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n=!0,t.error.account="",t.error.name="",t.error.message="",t.error.email="",t.error.password="",t.error.passwordCheck="",s=t.checkAccount(t.data.account),a=s.status,r=s.message,!1===a&&(t.error.account=r,n=!1),i=t.checkName(t.data.name),a=i.status,r=i.message,!1===a&&(t.error.name=r,n=!1),u=t.checkEmail(t.data.email),a=u.status,r=u.message,!1===a&&(t.error.email=r,n=!1),o=t.checkPassword(t.data.password),a=o.status,r=o.message,!1===a&&(t.error.password=r,n=!1),l=t.checkPassword(t.data.passwordCheck),a=l.status,r=l.message,!1===a?(t.error.passwordCheck=r,n=!1):t.data.password!==t.data.passwordCheck&&(t.error.passwordCheck="密碼不一致",n=!1),!1!==n){e.next=30;break}return e.abrupt("return");case 30:return e.next=32,c["a"].userSignUp({account:t.data.account,name:t.data.name,email:t.data.email,password:t.data.password,passwordCheck:t.data.passwordCheck});case 32:if(d=e.sent,m=d.data,"error"!==m.status){e.next=49;break}if(!/帳號/.test(m.message)){e.next=38;break}return t.error.account=m.message,e.abrupt("return");case 38:if(!/名稱/.test(m.message)){e.next=41;break}return t.error.name=m.message,e.abrupt("return");case 41:if(!/信箱/.test(m.message)){e.next=44;break}return t.error.email=m.message,e.abrupt("return");case 44:if(!/密碼/.test(m.message)){e.next=47;break}return t.error.password=m.message,e.abrupt("return");case 47:return t.error.account=m.message,e.abrupt("return");case 49:t.$router.push({name:"user-sign-in"}),e.next=56;break;case 52:e.prev=52,e.t0=e["catch"](0),console.error(e.t0),p["a"].fire({icon:"error",title:"目前無法註冊，請稍後再試"});case 56:case"end":return e.stop()}}),e,null,[[0,52]])})))()}}},h=g,f=(a("bb0b"),a("2877")),v=Object(f["a"])(h,r,n,!1,null,"8969b952",null);t["default"]=v.exports},"498a":function(e,t,a){"use strict";var r=a("23e7"),n=a("58a8").trim,s=a("c8d2");r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},5684:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARlSURBVHgB7VlbUhQxFD0ZeVTJzyyhXYG6AmEFwgqAUtA/YAXAChj+KNECVgCuAFyB4w7aHYyfKBDvvQkwj9w8eoYv5lRR03TSSU7uMzfAFFNM8SxgMEHYj1iknzdo4Z38WrRphrZrRI+ea3qqcYcf9Ns1X3GFCWFsInaNFjqHLVro9sOi81HTN1e4xr45FZKN0ZiIJ7BLj9uYBAxOxyHUiIjdIAkAew0kkEJNkt03x0SqEMVE7CYOEJMC2wLpP9nJL7KFLv2xbfTEXl6Q3QDvAfmNoWO+YAcFyCYiqjSLc/piMdxBDPcMC7gwHSGjj/UZFRE8R4zQLVbMN1wgE/lENnCpkOBd32nigUi6e/SzG2iqSSKvUICZnE5enRZHG3BI+hxUM9n1GyyTirWJ6FWIKC12j8ZmDJJpYQmFSEqEJLFGvU4GX4rOr4QWRypYkTdj4stDM7FX2iGvNKJ29hNJ2/qNimxODK1YoyzKjIi+JqN9q5B4QyQuMUzCLXBNbCwEg/WHsRdE3YoRJYJ5IVH1valZ7OZo1NcLiVkhUanjkY2JhIdfu/HOxPUqjkKcTQQqEZGG7ZuU1Uknwep0nhVXTNC4gZfYjsaPOZzEyOgSmR+a0NBuHSlRdy4hiUFUPicbHD7isr0Ul2ke1XZ0IrZvMjJU8jCdYLfNEfVL4wVWc7sO2emW1i9IxO9Y5f/lxG5fnQQNjNMGnIGGQTtth6TJCEuk1dfZRlRqXtH3NNqkLqk0ZdRO3dqC34WJGLz2T7VmgMFJypAk4m1vaOISiVgvShtWKUFzadwjSsRn2NVIw+MmDyBGpPeE0ogiYXtBF6ypFh9R9cxzVsmA88HZQUdtZWnrMamACOMG39W2Vr77DCLmQBh3+INCaKrVo13vBps4utoxJOKSwtNEn9g5JBg4NdWq1R2byfA2OrKSQklIrRLpbXhdGpEr6GhKxCWcidNjH86U979DL8NEbqTuFEarYcGBzy9HBRUSTb1MWOW1yF5Dn6CciMU62UW35BNVve7C2hIkwpOqKbMtrDs5EqdqM8UM+0HNvYbVq9ZqA6r7DR1JPfJ21h2HkyQkDWmplZlB9YrYbvyEGIDfkTrRjduXskhA0vRVdS5y148v9JSpmIj/agkhMk6n9+m09zZmE3SGWaY49RMZ6bkUIpgMn4kiziJdRSFb0dRMTm73aTVXFRPFuUS9uMZf2gBtrm1aR2TsNBE2xFu6AhizWu7LSvHTpKVdP36oqBQhq9JIYucrg15pcVkkMCNSYxvIC6Rcev1HTqJw4/JLpq6IxjVbNr6uUtfi+nAluZjxxeqmFXtX0DskQlleMqtkKrjGineVB7JoV+qsh3pVfhHj447GaudLpfxaYYPOEUavZkwEDcqm5XHEuUM2yBqThnPfOxOv/WoQo3ex5AyTAseKBbzS6mfJNWFM+EubPXrkm9wKJXA3vYcUQDsF6X0QkzDLB0h0dnkTVzoq8XKD19PuWu4JrqenmGKKZ4L/1ayJWixLovMAAAAASUVORK5CYII="},7696:function(e,t,a){"use strict";var r=a("5530"),n=a("2fa3");t["a"]={userSignUp:function(e){return n["b"].post("/users",Object(r["a"])({},e))},userSignIn:function(e){var t=e.account,a=e.password;return n["b"].post("/users/login",{account:t,password:a})},adminSignIn:function(e){var t=e.account,a=e.password;return n["b"].post("/admin/users/login",{account:t,password:a})}}},"7bd9":function(e,t,a){},bb0b:function(e,t,a){"use strict";a("f0dc")},c8d2:function(e,t,a){var r=a("5e77").PROPER,n=a("d039"),s=a("5899"),i="​᠎";e.exports=function(e){return n((function(){return!!s[e]()||i[e]()!==i||r&&s[e].name!==e}))}},f061:function(e,t,a){"use strict";a("7bd9")},f0dc:function(e,t,a){}}]);
//# sourceMappingURL=chunk-6b574c65.1e2cce04.js.map