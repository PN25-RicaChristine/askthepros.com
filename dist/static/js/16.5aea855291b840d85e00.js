webpackJsonp([16],{488:function(t,o,n){n(675);var a=n(329)(n(580),n(748),"data-v-67477f52",null);t.exports=a.exports},500:function(t,o,n){n(504);var a=n(329)(n(502),n(505),"data-v-79004f1a",null);t.exports=a.exports},501:function(t,o,n){"use strict";o.a={primary:"#01009A",darkPrimary:"#01004E",secondary:"#F3E4A7",warning:"#F1BF14"}},502:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["onClick","icon","text","styles","icon_position"]}},503:function(t,o,n){o=t.exports=n(471)(),o.push([t.i,".dialogueBTN[data-v-79004f1a]{outline:none!important;box-shadow:none!important;border:0;border-radius:40px;font-weight:500;height:45px;padding-left:20px;padding-right:20px;min-width:150px}","",{version:3,sources:["D:/vue/askthepros.com/src/modules/generic/roundedBtn.vue"],names:[],mappings:"AACA,8BAA8B,uBAAwB,0BAA2B,SAAW,mBAAmB,gBAAgB,YAAY,kBAAkB,mBAAmB,eAAe,CAC9L",file:"roundedBtn.vue",sourcesContent:["\n.dialogueBTN[data-v-79004f1a]{outline:none !important;box-shadow:none !important;border:0px;border-radius:40px;font-weight:500;height:45px;padding-left:20px;padding-right:20px;min-width:150px\n}\n"],sourceRoot:""}])},504:function(t,o,n){var a=n(503);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(472)("ed38191a",a,!0)},505:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("button",{staticClass:"btn dialogueBTN",style:t.styles,on:{click:t.onClick}},["left"==t.icon_position?n("i",{class:t.icon,staticStyle:{"margin-right":"10px"}}):t._e(),t._v("\n  "+t._s(t.text)+" \n  "),"right"==t.icon_position?n("i",{class:t.icon,staticStyle:{"margin-left":"20px"}}):t._e()])},staticRenderFns:[]}},580:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=n(500),e=n.n(a),r=n(501),i=n(52);o.default={data:function(){return{colors:r.a,count1:0,count2:0,count3:0,brand1:"",brand2:"",brand3:""}},components:{roundedBtn:e.a},methods:{connectMedia:function(){i.a.push("/user/channels")},automationSettings:function(){i.a.push("/user/channels/automation")},save:function(){console.log("save::::")},charCount:function(){this.count1=this.brand1.length}}}},631:function(t,o,n){o=t.exports=n(471)(),o.push([t.i,'.holder[data-v-67477f52]{width:96%;margin-left:2%;margin-right:2%;margin-bottom:20vh;float:left;color:#272727;min-height:100vh}.button[data-v-67477f52]{border-bottom-right-radius:0!important}.button2[data-v-67477f52],.button[data-v-67477f52]{color:#01009a!important;border:1px solid #01009a!important}h3[data-v-67477f52]{font-weight:700}.textArea[data-v-67477f52]{width:100%;border:.25px solid #ccc;box-sizing:border-box;border-radius:5px;padding:10px}[data-v-67477f52]{box-sizing:border-box}.column[data-v-67477f52]{float:left;width:50%;padding-left:20px;padding-right:20px;position:relative}.row[data-v-67477f52]:after{content:"";display:table;clear:both}.char-count[data-v-67477f52]{font-size:12px;float:right;color:#84868b}.btnn[data-v-67477f52]{margin-top:40px}',"",{version:3,sources:["D:/vue/askthepros.com/src/modules/channels/Branding.vue"],names:[],mappings:"AACA,yBAAyB,UAAU,eAAe,gBAAgB,mBAAmB,WAAW,cAAc,gBAAgB,CAC7H,AACD,yBAAyB,sCAAyC,CACjE,AACD,mDAAmD,wBAAyB,kCAAmC,CAC9G,AACD,oBAAoB,eAAgB,CACnC,AACD,2BAA2B,WAAW,wBAAyB,sBAAsB,kBAAkB,YAAY,CAClH,AACD,kBAAmB,qBAAqB,CACvC,AACD,yBAAyB,WAAW,UAAU,kBAAkB,mBAAmB,iBAAiB,CACnG,AACD,4BAA4B,WAAW,cAAc,UAAU,CAC9D,AACD,6BAA6B,eAAe,YAAY,aAAa,CACpE,AACD,uBAAuB,eAAe,CACrC",file:"Branding.vue",sourcesContent:['\n.holder[data-v-67477f52]{width:96%;margin-left:2%;margin-right:2%;margin-bottom:20vh;float:left;color:#272727;min-height:100vh\n}\n.button[data-v-67477f52]{border-bottom-right-radius:0px !important\n}\n.button[data-v-67477f52],.button2[data-v-67477f52]{color:#01009A !important;border:1px solid #01009A !important\n}\nh3[data-v-67477f52]{font-weight:bold\n}\n.textArea[data-v-67477f52]{width:100%;border:0.25px solid #ccc;box-sizing:border-box;border-radius:5px;padding:10px\n}\n*[data-v-67477f52]{box-sizing:border-box\n}\n.column[data-v-67477f52]{float:left;width:50%;padding-left:20px;padding-right:20px;position:relative\n}\n.row[data-v-67477f52]:after{content:"";display:table;clear:both\n}\n.char-count[data-v-67477f52]{font-size:12px;float:right;color:#84868B\n}\n.btnn[data-v-67477f52]{margin-top:40px\n}\n'],sourceRoot:""}])},675:function(t,o,n){var a=n(631);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(472)("47044153",a,!0)},748:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"holder"},[n("h3",{staticStyle:{"margin-top":"25px","font-size":"25px"}},[t._v("Social Media Integration")]),t._v(" "),n("p",[t._v("Connect to your social media channels, then setup your branding and choose your automation.")]),t._v(" "),n("div",{staticStyle:{"margin-top":"3%"}},[n("roundedBtn",{staticClass:"button",attrs:{onClick:t.connectMedia,text:"Social Media Channels",styles:{backgroundColor:"white",outlineColor:t.colors.darkPrimary,color:"white",width:"15%",borderTopRightRadius:"0px !important",borderBotttomLeftRadius:"0px !important"}}}),t._v(" "),n("roundedBtn",{staticClass:"button1",attrs:{text:"Branding",styles:{backgroundColor:t.colors.darkPrimary,color:"white",outlineColor:t.colors.darkPrimary,width:"15%",borderTopLeftRadius:"0px !important",borderBottomLeftRadius:"0px !important",borderTopRightRadius:"0px !important",borderBottomRightRadius:"0px !important",marginLeft:"-5px"}}}),t._v(" "),n("roundedBtn",{staticClass:"button2",attrs:{onClick:t.automationSettings,text:"Automation Settings",styles:{backgroundColor:"white",outlineColor:t.colors.darkPrimary,color:"white",width:"15%",borderTopLeftRadius:"0px !important",borderBottomLeftRadius:"0px !important",marginLeft:"-5px"}}})],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("h3",{staticStyle:{"margin-top":"20px","font-size":"20px"}},[t._v("Add Branding.")]),t._v(" "),n("p",[t._v("These “branding footers” will be added to the end of your social media posts.   They should be one or two short sentences and incorporate your brand name and location. ")]),t._v(" "),t._m(0),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.brand1,expression:"brand1"}],staticClass:"textArea",attrs:{rows:"5",placeholder:"Write your branding footer content here..."},domProps:{value:t.brand1},on:{keyup:function(o){return t.charCount()},input:function(o){o.target.composing||(t.brand1=o.target.value)}}}),t._v(" "),n("span",{staticClass:"char-count"},[t._v("Character Count: "+t._s(t.count1))]),t._v(" "),t._m(1),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.brand2,expression:"brand2"}],staticClass:"textArea",attrs:{rows:"5",placeholder:"Write your branding footer content here..."},domProps:{value:t.brand2},on:{input:function(o){o.target.composing||(t.brand2=o.target.value)}}}),t._v(" "),n("span",{staticClass:"char-count"},[t._v("Character Count: "+t._s(t.count2))]),t._v(" "),t._m(2),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.brand3,expression:"brand3"}],staticClass:"textArea",attrs:{rows:"5",placeholder:"Write your branding footer content here..."},domProps:{value:t.brand3},on:{input:function(o){o.target.composing||(t.brand3=o.target.value)}}}),t._v(" "),n("span",{staticClass:"char-count"},[t._v("Character Count: "+t._s(t.count3))]),t._v(" "),n("roundedBtn",{class:"btnn",attrs:{onClick:t.save,text:"Save",styles:{backgroundColor:"#01004E",color:"white"}}})],1),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",{staticClass:"pl-0 mt-5"},[n("b",[t._v("Branding Footer 1")])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",{staticClass:"pl-0 mt-4"},[n("b",[t._v("Branding Footer 2")])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",{staticClass:"pl-0 mt-4"},[n("b",[t._v("Branding Footer 3")])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"column",staticStyle:{"background-color":"#01004E",color:"white","text-align":"center",padding:"30px","border-top-right-radius":"22.5px","border-top-left-radius":"22.5px"}},[n("span",[t._v("Branding Preview here")])])}]}}});
//# sourceMappingURL=16.5aea855291b840d85e00.js.map