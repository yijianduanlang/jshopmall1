(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register-index"],{"00bf":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-49029dfc]{height:calc(100vh - %?90?%);background-color:#fff;padding:%?0?% %?100?%}.reg-t[data-v-49029dfc]{text-align:center;padding:%?50?% 0}.reg-logo[data-v-49029dfc]{width:%?180?%;height:%?180?%;border-radius:%?20?%;background-color:#f8f8f8}.reg-m[data-v-49029dfc]{margin-bottom:%?100?%}.reg-item[data-v-49029dfc]{border-bottom:%?2?% solid #d0d0d0;overflow:hidden;padding:%?10?%;color:#333;margin-bottom:%?30?%}.reg-item .btn[data-v-49029dfc]{border:none;width:40%;text-align:right}.reg-item .btn.btn-b[data-v-49029dfc]{background:none;color:#333!important}.reg-item-input[data-v-49029dfc]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.reg-b .btn[data-v-49029dfc]{color:#fff}.registered-item[data-v-49029dfc]{overflow:hidden;width:100%}.registered[data-v-49029dfc]{float:right}.btn-square[data-v-49029dfc]{color:#333;height:%?80?%;line-height:%?80?%;padding:0;font-size:%?24?%}.agreement[data-v-49029dfc]{margin:%?20?% 0;text-align:center}.agreement .color-o[data-v-49029dfc]{margin:0 %?10?%}',""]),e.exports=t},"19cb":function(e,t,i){"use strict";i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("de6c"),o={mixins:[n.goBack],data:function(){return{maxMobile:11,mobile:"",code:"",pwd:"",verification:!0,timer:60,btnb:"btn btn-c btn-square btn-all"}},onLoad:function(e){var t=this;t.timer=parseInt(t.$db.get("timer")),null!=t.timer&&t.timer>0&&(t.countDown(),t.verification=!1),e.invitecode&&this.$db.set("invitecode",e.invitecode)},computed:{rightMobile:function(){var e={};return this.mobile?/^1[3456789]{1}\d{9}$/gi.test(this.mobile)?e.status=!0:(e.status=!1,e.msg="手机号格式不正确"):(e.status=!1,e.msg="请输入手机号"),e},regButtonClass:function(){return this.mobile&&11===this.mobile.length&&this.pwd&&this.code?this.btnb+" btn-b":this.btnb},sendCodeBtn:function(){var e="btn btn-g";return this.mobile.length===this.maxMobile&&this.rightMobile.status?e+" btn-b":e},logoImage:function(){return this.$store.state.config.shop_logo}},onShow:function(){var e=this,t=e.$db.get("userToken");if(t&&""!=t)return uni.switchTab({url:"/pages/member/index/index"}),!0;e.timer=parseInt(e.$db.get("timer")),null!=e.timer&&e.timer>0&&(e.countDown(),e.verification=!1)},methods:{sendCode:function(){var e=this;this.rightMobile.status?(this.$common.loadToShow("发送中..."),setTimeout((function(){e.$common.loadToHide(),e.$api.sms({mobile:e.mobile,code:"login"},(function(t){t.status?(e.timer=60,e.verification=!1,e.$common.successToShow(t.msg),e.countDown(),e.btnb="btn btn-square btn-all btn-b"):e.$common.errorToShow(t.msg)}))}),1e3)):this.$common.errorToShow(this.rightMobile.msg)},countDown:function(){var e=this,t=setInterval((function(){e.timer--,uni.setStorage({key:"timer",data:e.timer,success:function(){}}),e.timer<=0&&(e.verification=!0,clearInterval(t))}),1e3)},toReg:function(){var e=this;if(this.rightMobile.status)if(this.code)if(this.pwd){var t={mobile:this.mobile,code:this.code,password:this.pwd},i=this.$db.get("invitecode");i&&(t.invitecode=i),this.$api.smsLogin(t,(function(t){t.status?(e.$db.set("userToken",t.data),e.$common.successToShow("注册成功",(function(){e.$db.del("uuid"),e.$db.del("invitecode");var t=e.$store.state.redirectPage?e.$store.state.redirectPage:"/pages/member/index/index";e.$store.commit({type:"redirect",page:""}),uni.reLaunch({url:t})}))):e.$common.errorToShow(t.msg)}))}else this.$common.errorToShow("请输入登录密码");else this.$common.errorToShow("请输入短信验证码");else this.$common.errorToShow(this.rightMobile.msg)},toLogin:function(){this.$common.redirectTo("/pages/login/login/index1")},goAgreement:function(){var e=this.$store.state.config.user_agreement_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+e)},goPrivacy:function(){var e=this.$store.state.config.privacy_policy_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+e)}}};t.default=o},"265f":function(e,t,i){"use strict";i.r(t);var n=i("19cb"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"79cf":function(e,t,i){"use strict";i.r(t);var n=i("ce4b5"),o=i("265f");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("e3d9");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"49029dfc",null,!1,n["a"],s);t["default"]=c.exports},ce4b5:function(e,t,i){"use strict";var n,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"reg-t"},[i("v-uni-image",{staticClass:"reg-logo",attrs:{src:e.logoImage,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"reg-m"},[i("v-uni-view",{staticClass:"reg-item"},[i("v-uni-input",{attrs:{type:"number",maxlength:e.maxMobile,placeholder:"请输入手机号码",focus:!0,"placeholder-class":"login-item-i-p fsz26"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),i("v-uni-view",{staticClass:"reg-item flc"},[i("v-uni-input",{staticClass:"reg-item-input",attrs:{"placeholder-class":"login-item-i-p fsz26",type:"text",placeholder:"请输入验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e.verification?i("v-uni-view",{class:e.sendCodeBtn,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode.apply(void 0,arguments)}}},[e._v("发送验证码")]):e._e(),e.verification?e._e():i("v-uni-view",{staticClass:"btn btn-g"},[e._v(e._s(e.timer)+" 秒后重新获取")])],1),i("v-uni-view",{staticClass:"reg-item"},[i("v-uni-input",{staticClass:"login-item-input",attrs:{password:!0,"placeholder-class":"login-item-i-p fsz26",type:"text",placeholder:"请输入密码"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1)],1),i("v-uni-view",{staticClass:"reg-b"},[i("v-uni-button",{class:e.regButtonClass,attrs:{"hover-class":"btn-hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toReg()}}},[e._v("注册")]),i("v-uni-view",{staticClass:"color-9 fsz24 agreement"},[e._v("注册即代表你同意"),i("v-uni-text",{staticClass:"color-o",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goAgreement()}}},[e._v("用户协议")]),e._v("和"),i("v-uni-text",{staticClass:"color-o",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPrivacy()}}},[e._v("隐私政策")])],1)],1),i("v-uni-view",{staticClass:"registered-item"},[i("v-uni-view",{staticClass:"btn btn-g btn-square registered",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toLogin.apply(void 0,arguments)}}},[e._v("已有账号，立即登录")])],1)],1)},a=[];i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},d5ab:function(e,t,i){var n=i("00bf");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("0575345c",n,!0,{sourceMap:!1,shadowMode:!1})},de6c:function(e,t,i){"use strict";i("c975"),i("b64b"),Object.defineProperty(t,"__esModule",{value:!0}),t.tools=t.checkLogin=t.jumpBackPage=t.goBack=t.goods=t.orders=void 0;var n={mounted:function(){},methods:{orderDetail:function(e){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+e)},toPay:function(e){this.$common.navigateTo("/pages/goods/payment/index?order_id="+e+"&type=1")},toEvaluate:function(e){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+e)},showExpress:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=encodeURIComponent("code="+e+"&no="+t+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+n)}}};t.orders=n;var o={mounted:function(){},methods:{goodsDetail:function(e){this.$common.navigateTo("/pages/goods/index/index?id="+e)},goodsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="/pages/classify/index";Object.keys(e).length&&(t=this.$common.builderUrlParams(t,e)),this.$common.navigateTo(t)},groupDetail:function(e,t){this.$common.navigateTo("/pages/goods/index/group?id="+e+"&group_id="+t)},pintuanDetail:function(e,t){t?this.$common.navigateTo("/pages/goods/index/pintuan?id="+e+"&team_id="+t):this.$common.navigateTo("/pages/goods/index/pintuan?id="+e)}}};t.goods=o;var a={onBackPress:function(e){if("navigateBack"===e.from)return!1;var t=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return t.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var e=getCurrentPages();e.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};t.goBack=a;var s={methods:{handleBack:function(){var e=this.$store.state.redirectPage;console.log(e),this.$store.commit({type:"redirect",page:""});var t=["/pages/index/index","/pages/member/index/index"];t.indexOf(e)>-1?uni.switchTab({url:e}):e?uni.redirectTo({url:e}):uni.switchTab({url:"/pages/index/index"})}}};t.jumpBackPage=s;var r={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(e){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),800)}})}}};t.checkLogin=r;var c={methods:{copyData:function(e){var t=this;uni.setClipboardData({data:e,success:function(){t.$common.errorToShow("复制成功")}})}}};t.tools=c},e3d9:function(e,t,i){"use strict";var n=i("d5ab"),o=i.n(n);o.a}}]);