(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login-index"],{3388:function(e,t,i){var o=i("6ea1");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("0dd16932",o,!0,{sourceMap:!1,shadowMode:!1})},"419b":function(e,t,i){"use strict";i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("de6c"),n={mixins:[o.goBack,o.jumpBackPage],data:function(){return{maxMobile:11,mobile:"",code:"",user_wx_id:"",verification:!0,timer:60,btnb:"btn btn-square btn-c btn-all",type:"",isWeixinBrowser:this.$common.isWeiXinBrowser()}},onLoad:function(e){e.user_wx_id&&(this.user_wx_id=e.user_wx_id,uni.setNavigationBarTitle({title:"绑定手机号"}))},computed:{rightMobile:function(){var e={};return this.mobile?/^1[3456789]{1}\d{9}$/gi.test(this.mobile)?e.status=!0:(e.status=!1,e.msg="手机号格式不正确"):(e.status=!1,e.msg="请输入手机号"),e},sendCodeBtn:function(){var e="btn btn-g";return this.mobile.length===this.maxMobile&&this.rightMobile.status?e+" btn-b":e},regButtonClass:function(){return this.mobile&&this.mobile.length===this.maxMobile&&this.code?this.btnb+" btn-b":this.btnb},logoImage:function(){return this.$store.state.config.shop_logo}},onShow:function(){var e=this,t=e.$db.get("userToken");if(t)return uni.switchTab({url:"/pages/member/index/index"}),!0;e.timer=parseInt(e.$db.get("timer")),null!=e.timer&&e.timer>0&&(e.countDown(),e.verification=!1)},methods:{sendCode:function(){var e=this;this.rightMobile.status?(this.$common.loadToShow("发送中..."),setTimeout((function(){e.$common.loadToHide(),e.$api.sms({mobile:e.mobile,code:"login"},(function(t){t.status?(e.timer=60,e.verification=!1,e.$common.successToShow(t.msg),e.countDown()):e.$common.errorToShow(t.msg)}))}),1e3)):this.$common.errorToShow(this.rightMobile.msg)},toReg:function(){this.$common.redirectTo("/pages/login/register/index")},countDown:function(){var e=this,t=setInterval((function(){e.timer--,uni.setStorage({key:"timer",data:e.timer,success:function(){}}),e.timer<=0&&(e.verification=!0,clearInterval(t))}),1e3)},login:function(){var e=this,t=this;if(t.rightMobile.status)if(t.code){var i={mobile:t.mobile,code:t.code},o=t.$db.get("invitecode");o&&(i.invitecode=o),t.$api.smsLogin(i,(function(i){i.status?(e.$db.set("userToken",i.data),t.redirectHandler()):t.$common.errorToShow(i.msg)}))}else t.$common.errorToShow("请输入短信验证码!");else t.$common.errorToShow(t.rightMobile.msg)},redirectHandler:function(){var e=this;this.$common.successToShow("登录成功!",(function(){e.$db.set("timer",0),e.$db.del("invitecode"),uni.navigateBack({delta:1})}))},toLogin:function(){uni.navigateTo({url:"../../login/login/index"})},showTopTips:function(){var e=this;if(""==e.mobile)return e.$common.errorToShow("请输入手机号码"),!1;if(""==this.code)return e.$common.errorToShow("请输入验证码"),!1;if(0==e.user_wx_id)return e.$common.errorToShow("登录失败，请稍后再试",(function(){uni.navigateBack({delta:1})})),!1;var t=2,i={mobile:e.mobile,code:e.code,platform:t,user_wx_id:e.user_wx_id},o=e.$db.get("invitecode");o&&(i.invitecode=o),e.$api.smsLogin(i,(function(t){t.status?(e.$db.set("userToken",t.data),e.redirectHandler()):e.$common.errorToShow(t.msg)}))},toBind:function(){var e=this;if(""==this.mobile)return this.$common.errorToShow("请输入手机号码"),!1;if(""==this.code)return this.$common.errorToShow("请输入验证码"),!1;var t={mobile:this.mobile,code:this.code,user_wx_id:this.user_wx_id},i=this.$db.get("invitecode");i&&(t.invitecode=i),this.$api.smsLogin(t,(function(t){t.status?(e.$db.set("userToken",t.data),e.redirectHandler()):e.$common.errorToShow(t.msg)}))},selectLoginType:function(){this.$common.redirectTo("./index1")},goAgreement:function(){var e=this.$store.state.config.user_agreement_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+e)},goPrivacy:function(){var e=this.$store.state.config.privacy_policy_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+e)},goForgetpwd:function(){this.$common.navigateTo("/pages/login/forget/forget")}}};t.default=n},"6c62":function(e,t,i){"use strict";i.r(t);var o=i("419b"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=n.a},"6ea1":function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-34825222]{height:calc(100vh - %?90?%);background-color:#fff;padding:%?0?% %?100?%}.login-t[data-v-34825222]{text-align:center;padding:%?50?% 0}.login-logo[data-v-34825222]{width:%?180?%;height:%?180?%;border-radius:%?20?%;background-color:#f8f8f8}.login-m[data-v-34825222]{margin-bottom:%?100?%}.login-item[data-v-34825222]{border-bottom:%?2?% solid #d0d0d0;overflow:hidden;padding:%?10?%;color:#333;margin-bottom:%?30?%}.login-item-input[data-v-34825222]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box}.login-item .btn[data-v-34825222]{border:none;width:40%;text-align:right;padding:0}.login-item .btn.btn-b[data-v-34825222]{background:none;color:#333!important}.login-b .btn[data-v-34825222]{color:#999}.btn-b[data-v-34825222]{color:#fff!important}.login-other[data-v-34825222]{margin-bottom:%?40?%}.login-other .item[data-v-34825222]{padding:%?20?% 0}.btn-square[data-v-34825222]{color:#333}.agreement[data-v-34825222]{margin:%?20?% 0;text-align:center}.agreement .color-o[data-v-34825222]{margin:0 %?10?%}.goforgetpwd[data-v-34825222]{width:100%;text-align:right}',""]),e.exports=t},bf13:function(e,t,i){"use strict";var o,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"login-t"},[i("v-uni-image",{staticClass:"login-logo",attrs:{src:e.logoImage,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"login-m"},[i("v-uni-view",{staticClass:"login-item"},[i("v-uni-input",{attrs:{type:"number",maxlength:e.maxMobile,placeholder:"请输入手机号码",focus:!0,"placeholder-class":"login-item-i-p fsz26"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),i("v-uni-view",{staticClass:"login-item flc"},[i("v-uni-input",{staticClass:"login-item-input",attrs:{"placeholder-class":"login-item-i-p fsz26",type:"text",placeholder:"请输入验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e.verification?i("v-uni-view",{class:e.sendCodeBtn,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode.apply(void 0,arguments)}}},[e._v("发送验证码")]):e._e(),e.verification?e._e():i("v-uni-view",{staticClass:"btn btn-g"},[e._v(e._s(e.timer)+" 秒后重新获取")])],1)],1),i("v-uni-view",{staticClass:"login-b"},[e.user_wx_id?i("v-uni-view",[i("v-uni-button",{class:e.regButtonClass,attrs:{"hover-class":"btn-hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toBind()}}},[e._v("登录")]),i("v-uni-view",{staticClass:"color-9 fsz24 agreement"},[e._v("登录即代表你同意"),i("v-uni-text",{staticClass:"color-o",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goAgreement()}}},[e._v("用户协议")]),e._v("和"),i("v-uni-text",{staticClass:"color-o",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPrivacy()}}},[e._v("隐私政策")])],1)],1):i("v-uni-view",[i("v-uni-button",{class:e.regButtonClass,attrs:{"hover-class":"btn-hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login()}}},[e._v("登录")]),i("v-uni-view",{staticClass:"color-9 fsz24 agreement"},[e._v("登录即代表你同意"),i("v-uni-text",{staticClass:"color-o",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goAgreement()}}},[e._v("用户协议")]),e._v("和"),i("v-uni-text",{staticClass:"color-o",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPrivacy()}}},[e._v("隐私政策")])],1),i("v-uni-view",{staticClass:"login-other flc"},[i("v-uni-view",{staticClass:"fz12 item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectLoginType.apply(void 0,arguments)}}},[e._v("密码登录")]),i("v-uni-view",{staticClass:"fz12 item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toReg.apply(void 0,arguments)}}},[e._v("注册")])],1)],1)],1)],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}))},d88e:function(e,t,i){"use strict";i.r(t);var o=i("bf13"),n=i("6c62");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("dd3e");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"34825222",null,!1,o["a"],s);t["default"]=c.exports},dd3e:function(e,t,i){"use strict";var o=i("3388"),n=i.n(o);n.a},de6c:function(e,t,i){"use strict";i("c975"),i("b64b"),Object.defineProperty(t,"__esModule",{value:!0}),t.tools=t.checkLogin=t.jumpBackPage=t.goBack=t.goods=t.orders=void 0;var o={mounted:function(){},methods:{orderDetail:function(e){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+e)},toPay:function(e){this.$common.navigateTo("/pages/goods/payment/index?order_id="+e+"&type=1")},toEvaluate:function(e){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+e)},showExpress:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=encodeURIComponent("code="+e+"&no="+t+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+o)}}};t.orders=o;var n={mounted:function(){},methods:{goodsDetail:function(e){this.$common.navigateTo("/pages/goods/index/index?id="+e)},goodsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="/pages/classify/index";Object.keys(e).length&&(t=this.$common.builderUrlParams(t,e)),this.$common.navigateTo(t)},groupDetail:function(e,t){this.$common.navigateTo("/pages/goods/index/group?id="+e+"&group_id="+t)},pintuanDetail:function(e,t){t?this.$common.navigateTo("/pages/goods/index/pintuan?id="+e+"&team_id="+t):this.$common.navigateTo("/pages/goods/index/pintuan?id="+e)}}};t.goods=n;var a={onBackPress:function(e){if("navigateBack"===e.from)return!1;var t=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return t.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var e=getCurrentPages();e.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};t.goBack=a;var s={methods:{handleBack:function(){var e=this.$store.state.redirectPage;console.log(e),this.$store.commit({type:"redirect",page:""});var t=["/pages/index/index","/pages/member/index/index"];t.indexOf(e)>-1?uni.switchTab({url:e}):e?uni.redirectTo({url:e}):uni.switchTab({url:"/pages/index/index"})}}};t.jumpBackPage=s;var r={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(e){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),800)}})}}};t.checkLogin=r;var c={methods:{copyData:function(e){var t=this;uni.setClipboardData({data:e,success:function(){t.$common.errorToShow("复制成功")}})}}};t.tools=c}}]);