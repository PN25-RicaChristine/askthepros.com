webpackJsonp([29],{523:function(e,t,n){n(817);var a=n(342)(n(687),n(901),"data-v-ece3a9ba",null);e.exports=a.exports},687:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(70),o=n(56);t.default={data:function(){return{user:a.a.user}},mounted:function(){if(new RegExp(/\?.+=.*/g).test(window.location.href)&&(localStorage.getItem("login_with")||localStorage.getItem("connect_with")))this.loginCallBack(),this.connectCallback();else try{o.a.go(-1)}catch(e){}},methods:{loginCallBack:function(){if(new RegExp(/\?.+=.*/g).test(window.location.href)&&localStorage.getItem("login_with")){var e=window.location.href,t=e.substring(e.indexOf("?")+1);console.log("logging in..."),this.APIRequest("social_lite/authenticate/"+localStorage.getItem("login_with")+"/callback?"+t,{},function(e){console.log("logged in: ",e),localStorage.removeItem("login_with"),localStorage.setItem("usertoken",e.token),a.a.hash("hide",e.login_type),a.a.setUser(e.user),a.a.checkAuthentication(),o.a.push("/dashboard")},function(e){localStorage.removeItem("login_with"),console.log("Verifying authentication error! ",e)})}},connectCallback:function(){if(new RegExp(/\?.+=.*/g).test(window.location.href)&&localStorage.getItem("connect_with")){var e=window.location.href,t=e.substring(e.indexOf("?")+1),n=localStorage.getItem("connect_with");this.APIRequest("social_lite/account/"+n+"/callback?"+t,{id:this.user.userID},function(e){console.log("connect response: ",e),localStorage.removeItem("connect_with"),o.a.push("/channels")},function(e){o.a.push("/channels"),localStorage.removeItem("connect_with"),console.log("Verifying authentication error! ",e)})}}}}},760:function(e,t,n){t=e.exports=n(499)(),t.push([e.i,'.authentication[data-v-ece3a9ba]{position:fixed;top:0;left:0;min-width:100vw;min-height:100vh;z-index:10;padding-top:80px}.center[data-v-ece3a9ba]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)!important}.loader[data-v-ece3a9ba]{margin-top:30px;position:relative;font-size:14px;background:#fff;color:#fff;text-transform:uppercase;font-weight:700;letter-spacing:5px}.loader span[data-v-ece3a9ba]{color:#fff;mix-blend-mode:difference}.loader[data-v-ece3a9ba]:before{content:"";position:absolute;top:0;left:0;width:30px;height:100%;background:#000;animation:animate 3s linear infinite}.loading[data-v-ece3a9ba]{width:50%;margin:0 auto;border:5px solid #f3f3f3;border-radius:50%;border-top:5px solid #01009a;width:40px;height:40px;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes animate{0%{left:0}50%{left:calc(100% - 30px)}to{left:0}}',"",{version:3,sources:["C:/xampp/htdocs/askthepros.com/src/modules/generic/authentication.vue"],names:[],mappings:"AACA,iCAAiC,eAAe,MAAM,OAAO,gBAAgB,iBAAiB,WAAW,gBAAgB,CACxH,AACD,yBAAyB,kBAAkB,QAAQ,SAAS,wCAA0C,CACrG,AACD,yBAAyB,gBAAgB,kBAAkB,eAAe,gBAAgB,WAAW,yBAAyB,gBAAiB,kBAAkB,CAChK,AACD,8BAA8B,WAAW,yBAAyB,CACjE,AACD,gCAAgC,WAAW,kBAAkB,MAAM,OAAO,WAAW,YAAY,gBAAgB,oCAAoC,CACpJ,AACD,0BAA0B,UAAU,cAAc,yBAAyB,kBAAkB,6BAA6B,WAAW,YAAY,iCAAiC,CACjL,AACD,gBACA,GAAG,sBAAsB,CACxB,AACD,GAAK,uBAAwB,CAC5B,CACA,AACD,mBACA,GAAG,MAAM,CACR,AACD,IAAI,sBAAsB,CACzB,AACD,GAAK,MAAM,CACV,CACA",file:"authentication.vue",sourcesContent:["\n.authentication[data-v-ece3a9ba]{position:fixed;top:0;left:0;min-width:100vw;min-height:100vh;z-index:10;padding-top:80px\n}\n.center[data-v-ece3a9ba]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) !important\n}\n.loader[data-v-ece3a9ba]{margin-top:30px;position:relative;font-size:14px;background:#fff;color:#fff;text-transform:uppercase;font-weight:bold;letter-spacing:5px\n}\n.loader span[data-v-ece3a9ba]{color:#fff;mix-blend-mode:difference\n}\n.loader[data-v-ece3a9ba]:before{content:'';position:absolute;top:0;left:0;width:30px;height:100%;background:#000;animation:animate 3s linear infinite\n}\n.loading[data-v-ece3a9ba]{width:50%;margin:0 auto;border:5px solid #f3f3f3;border-radius:50%;border-top:5px solid #01009A;width:40px;height:40px;animation:spin 1s linear infinite\n}\n@keyframes spin{\n0%{transform:rotate(0deg)\n}\n100%{transform:rotate(360deg)\n}\n}\n@keyframes animate{\n0%{left:0\n}\n50%{left:calc(100% - 30px)\n}\n100%{left:0\n}\n}\n"],sourceRoot:""}])},817:function(e,t,n){var a=n(760);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(500)("37445bae",a,!0)},901:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid authentication bg-white"},[n("div",{staticClass:"center"},[n("div",{staticClass:"loading"}),e._v(" "),n("div",{staticClass:"loader"},[n("span",[e._v("Authenticating")])])])])}]}}});
//# sourceMappingURL=29.5f4f918cfe6e57b715bb.js.map