(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login"],{"063e":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("e0c9")),o={components:{mIcon:a.default},props:{type:String,value:String,placeholder:String,clearable:{type:[Boolean,String],default:!1},displayable:{type:[Boolean,String],default:!1},focus:{type:[Boolean,String],default:!1}},model:{prop:"value",event:"input"},data:function(){return{showPassword:!1,isFocus:!1}},computed:{inputType:function(){var t=this.type;return"password"===t?"text":t},clearable_:function(){return"false"!==String(this.clearable)},displayable_:function(){return"false"!==String(this.displayable)},focus_:function(){return"false"!==String(this.focus)}},methods:{clear:function(){this.$emit("input","")},display:function(){this.showPassword=!this.showPassword},onFocus:function(){this.isFocus=!0},onBlur:function(){var t=this;this.$nextTick((function(){t.isFocus=!1}))},onInput:function(t){this.$emit("input",t.target.value)}}};e.default=o},"420e":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),o=i(n("549d")),r=(i(n("a893")),{components:{mInput:o.default},data:function(){return{showInvite:1,providerList:[],hasProvider:!1,account:"",password:"",yzm:"",checkYzm:"",positionTop:0}},onLoad:function(){this.getInviteType()},methods:{goRegister:function(){this.$Router.push({name:"register"})},getInviteType:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.invite_code_required({});case 2:n=e.sent,"success"==n.msg&&(t.showInvite=n.data.invite_code_required,t.showInvite);case 4:case"end":return e.stop()}}),e)})))()},postLogin:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.$api.login({username:t.account,password:t.password,google:t.yzm});case 3:i=e.sent,"成功"==i.msg&&uni.setStorage({key:"userInfo",data:i.data,success:function(){uni.showToast({title:"登录成功!",icon:"none",success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout((function(){n.$Router.replaceAll({name:"index"})}),1e3);case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()})}});case 5:case"end":return e.stop()}}),e)})))()},login:function(){var t=!1,e="请输入账户名!";""==this.account?e="请输入账户名!":""==this.password?e="请输入密码!":t=!0,t?(uni.showLoading(),this.postLogin()):uni.showToast({title:e,icon:"none"})}}});e.default=r},"49e1":function(t,e,n){"use strict";n.r(e);var i=n("420e"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"4aaf":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".m-input-input[data-v-91255912]{border-bottom:%?1?% solid grey;padding-bottom:%?20?%}.m-input-view[data-v-91255912]{position:relative}.m-input-input[data-v-91255912]::-webkit-input-placeholder{font-size:10px}.m-input-input[data-v-91255912]::placeholder{font-size:10px}.m-input-icon[data-v-91255912]{position:absolute;right:20px;top:0}",""]),t.exports=e},"518c":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-564b7dc6]{padding-top:%?100?%;padding-left:%?60?%;padding-right:%?60?%}.login_title[data-v-564b7dc6]{margin-bottom:%?20?%;font-weight:600;font-size:%?40?%}.login_prompt[data-v-564b7dc6]{color:grey;font-size:%?30?%}.input-row[data-v-564b7dc6]{margin-top:%?40?%}.m-input[data-v-564b7dc6]{margin-bottom:%?40?%}.registered-view[data-v-564b7dc6]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;text-align:right;margin-top:%?20?%}.registered[data-v-564b7dc6]{font-size:%?20?%}",""]),t.exports=e},"549d":function(t,e,n){"use strict";n.r(e);var i=n("f1b5"),a=n("9777");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("bae4");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"91255912",null,!1,i["a"],r);e["default"]=u.exports},"5bb9":function(t,e,n){"use strict";n.r(e);var i=n("fdb4"),a=n("49e1");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6b4a");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"564b7dc6",null,!1,i["a"],r);e["default"]=u.exports},"6b4a":function(t,e,n){"use strict";var i=n("fc4c"),a=n.n(i);a.a},9777:function(t,e,n){"use strict";n.r(e);var i=n("063e"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},bae4:function(t,e,n){"use strict";var i=n("ef4a"),a=n.n(i);a.a},ef4a:function(t,e,n){var i=n("4aaf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5493a8d6",i,!0,{sourceMap:!1,shadowMode:!1})},f1b5:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"m-input-view"},[n("v-uni-input",{staticClass:"m-input-input",attrs:{focus:t.focus_,type:t.inputType,value:t.value,placeholder:t.placeholder,password:"password"===t.type&&!t.showPassword},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)}}}),t.clearable_&&!t.displayable_&&t.value.length?n("v-uni-view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:"#666666",type:"clear",size:"20"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}})],1):t._e(),t.displayable_?n("v-uni-view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:t.showPassword?"#666666":"#cccccc",type:"eye",size:"20"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.display.apply(void 0,arguments)}}})],1):t._e()],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},fc4c:function(t,e,n){var i=n("518c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7d925128",i,!0,{sourceMap:!1,shadowMode:!1})},fdb4:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"login_title"},[t._v("Hello!")]),n("v-uni-view",{staticClass:"login_prompt"},[t._v("你要相信,选择本没有对错,越努力,越幸福")]),n("v-uni-view",{staticClass:"input-group"},[n("v-uni-view",{staticClass:"input-row"},[n("m-input",{staticClass:"m-input",attrs:{type:"text",clearable:!0,placeholder:"请输入账户名"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),n("v-uni-view",{staticClass:"input-row"},[n("m-input",{attrs:{type:"password",displayable:!0,placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.showInvite,expression:"showInvite == 1"}],staticClass:"input-row",staticStyle:{position:"relative"}},[n("m-input",{attrs:{type:"text",placeholder:"请输入谷歌验证码"},model:{value:t.yzm,callback:function(e){t.yzm=e},expression:"yzm"}})],1)],1),n("v-uni-view",{staticClass:"registered-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRegister.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"registered"},[t._v("注册账号")])],1),n("v-uni-view",{staticClass:"login_button-view"},[n("v-uni-button",{staticClass:"login_button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login()}}},[t._v("登录")])],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))}}]);