(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["limitless-app"]=t():e["limitless-app"]=t()})(window,(function(){return function(e){function t(t){for(var c,r,o=t[0],u=t[1],i=t[2],f=0,l=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);b&&b(t);while(l.length)l.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(c=!1)}c&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},a={app:0},s=[];function r(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-1cef9b5b":"b19b8cac","chunk-2d210feb":"5432b895","chunk-45021666":"6dc4fba6"}[e]+".js"}function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=a[e]=[t,c]}));t.push(n[2]=c);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=r(e);var i=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+s+")",i.name="ChunkLoadError",i.type=c,i.request=s,n[1](i)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp_limitless"]=window["webpackJsonp_limitless"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var b=i;return s.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"086e":function(e,t,n){},"31c2":function(e,t,n){"use strict";n.r(t);var c=n("a18c"),a={routes:c["b"][0].children},s={SET_ROUTES:function(e,t){e.routes=t}},r={};t["default"]={state:a,mutations:s,actions:r}},"365c":function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return v}));n("d3b7");var c=n("5530"),a=n("bc3a"),s=n.n(a),r=s.a.create({withCredentials:!1,timeout:5e3});r.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e.data}),(function(e){return e.response?console.log("响应错误"):e.request?console.log("请求错误"):console.log("请求未发出，取消了"),Promise.reject(e)}));var o=function(e,t){return r.get(e,{params:t})},u=function(e,t,n){return r(Object(c["a"])(Object(c["a"])({},n),{},{url:e,method:"post",data:t}))},i="http://134.175.16.92:2555",f=function(e){return u("".concat(i,"/battle_task"),e)},b=function(e){return o("".concat(i,"/battle_task/").concat(e,"/status"))},l=function(e){return o("".concat(i,"/battle_task/").concat(e,"/stop"))},j={taskStart:f,taskStatus:b,taskStop:l},d="http://www.yunyingxiaowu.com:8088",m=function(){return o("".concat(d,"/foodie-api/gameChara/queryMapList"))},p=function(e){return u("".concat(d,"/foodie-api/gamepassport/login"),e)},O=function(e){return o("".concat(d,"/foodie-api/gamepassport/getGameCharacter"),e)},h=function(e){return o("".concat(d,"/foodie-api/gamepassport/getGameCharacterActivity"),e)},g=function(e){return u("".concat(d,"/foodie-api/gameCharaEquip/getCharaEquip"),e)},v={queryMapList:m,login:p,getGameCharacter:O,getGameCharacterActivity:h,getCharaEquip:g}},4678:function(e,t,n){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("d2a2");var c=n("98c5"),a=(n("b6e5"),n("55f1")),s=(n("e1f5"),n("5efb")),r=(n("50ac"),n("9a63")),o=(n("1815"),n("e32c")),u=(n("04f3"),n("ed3b")),i=(n("ee33"),n("a79d")),f=(n("c721"),n("3af3")),b=(n("a71a"),n("b558")),l=(n("0723"),n("0020")),j=(n("02cf"),n("9839")),d=(n("8b88"),n("681b")),m=(n("380f"),n("f64c")),p=(n("e260"),n("e6cf"),n("cca6"),n("a79df"),n("7a23"));function O(e,t){var n=Object(p["G"])("router-view");return Object(p["B"])(),Object(p["j"])(n)}n("b03e");const h={};h.render=O;var g=h,v=n("a18c"),y=(n("4160"),n("b64b"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("5502")),k={accountList:function(e){return e.account.accountList},currentAccount:function(e){return e.account.currentAccount},permission_routes:function(e){return e.permission.routes}},w=k,_=n("d307"),x={};_.keys().forEach((function(e){x[e.replace(/(\.\/|\.js)/g,"")]=_(e).default})),Object.keys(x).forEach((function(e){x[e]["namespaced"]=!0}));var C=Object(y["a"])({modules:x,getters:w}),A=Object(p["i"])(g);A.use(C).use(v["a"]).use(c["a"]).use(a["a"]).use(s["a"]).use(r["a"]).use(o["a"]).use(u["a"]).use(i["a"]).use(f["a"]).use(b["a"]).use(l["a"]).use(i["a"]).use(j["b"]).use(d["a"]).use(m["a"]).mount("#app")},"61c5":function(e,t,n){"use strict";n.r(t);n("d3b7");var c=n("365c"),a={accountList:[],currentAccount:{}},s={SET_ACCOUNT_LIST:function(e,t){e.accountList=t},SET_CURRENT_ACCOUNT:function(e,t){e.currentAccount=t}},r={changeAccount:function(e,t){var n=e.commit,a=t.username,s=t.password;return new Promise((function(e,t){c["b"].login({username:a,password:s}).then((function(t){var c=t.data;console.log(t),n("SET_CURRENT_ACCOUNT",c),e(c)})).catch((function(e){t(e)}))}))},addAcccount:function(e,t){var n=e.commit,c=e.state,a=c.accountList;a.push(t),n("SET_ACCOUNT_LIST",a)}};t["default"]={state:a,mutations:s,actions:r}},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return S}));n("d3b7");var c=n("6c02"),a=(n("b0c0"),n("7a23")),s=Object(a["m"])("div",{style:{height:"64px"}},null,-1),r=Object(a["m"])("h1",{style:{color:"#fff","font-size":"0.2rem"}},"永无止境PLUS",-1),o={style:{color:"#fff","font-size":"0.2rem"}},u=Object(a["l"])(" 账户管理 "),i=Object(a["m"])("span",null," 版权所有 © 2021 Andy ",-1),f=Object(a["m"])("a",{href:"https://beian.miit.gov.cn/",target:"_blank",title:"苏ICP备18027276号"},[Object(a["m"])("span",null,"苏ICP备18027276号")],-1);function b(e,t,n,c,b,l){var j=Object(a["G"])("router-link"),d=Object(a["G"])("a-menu-item"),m=Object(a["G"])("a-menu"),p=Object(a["G"])("a-layout-sider"),O=Object(a["G"])("a-col"),h=Object(a["G"])("a-button"),g=Object(a["G"])("a-row"),v=Object(a["G"])("a-layout-header"),y=Object(a["G"])("router-view"),k=Object(a["G"])("a-layout-content"),w=Object(a["G"])("a-layout-footer"),_=Object(a["G"])("a-layout"),x=Object(a["G"])("AccountSetting");return Object(a["B"])(),Object(a["j"])(a["b"],null,[Object(a["m"])(_,null,{default:Object(a["Q"])((function(){return[Object(a["m"])(p,{breakpoint:"lg","collapsed-width":"0",width:"100"},{default:Object(a["Q"])((function(){return[s,Object(a["m"])(m,{theme:"dark",mode:"inline",selectedKeys:e.chooseRoute,"onUpdate:selectedKeys":t[1]||(t[1]=function(t){return e.chooseRoute=t}),style:{borderRight:0}},{default:Object(a["Q"])((function(){return[(Object(a["B"])(!0),Object(a["j"])(a["b"],null,Object(a["F"])(e.permission_routes,(function(e){return Object(a["B"])(),Object(a["j"])(d,{key:e.path},{default:Object(a["Q"])((function(){return[Object(a["m"])(j,{to:e.path},{default:Object(a["Q"])((function(){return[Object(a["l"])(Object(a["I"])(e.name),1)]})),_:2},1032,["to"])]})),_:2},1024)})),128))]})),_:1},8,["selectedKeys"])]})),_:1}),Object(a["m"])(_,null,{default:Object(a["Q"])((function(){return[Object(a["m"])(v,null,{default:Object(a["Q"])((function(){return[Object(a["m"])(g,null,{default:Object(a["Q"])((function(){return[Object(a["m"])(O,{xs:{span:8,offset:0},sm:{span:8,offset:0},md:{span:8,offset:0},lg:{span:12,offset:6},xl:{span:12,offset:6}},{default:Object(a["Q"])((function(){return[r]})),_:1}),Object(a["m"])(O,{xs:{span:10,offset:0},sm:{span:10,offset:0},md:{span:10,offset:0},lg:{span:3,offset:0},xl:{span:3,offset:0}},{default:Object(a["Q"])((function(){return[Object(a["m"])("span",o,"当前账户: "+Object(a["I"])(e.nickName),1)]})),_:1}),Object(a["m"])(O,{xs:{span:4,offset:0},sm:{span:4,offset:0},md:{span:4,offset:0},lg:{span:3,offset:0},xl:{span:3,offset:0}},{default:Object(a["Q"])((function(){return[Object(a["m"])(h,{type:"primary",onClick:e.showSetting},{default:Object(a["Q"])((function(){return[u]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),Object(a["m"])(k,{style:{"min-height":"85vh"}},{default:Object(a["Q"])((function(){return[Object(a["m"])(y)]})),_:1}),Object(a["m"])(w,null,{default:Object(a["Q"])((function(){return[i,f]})),_:1})]})),_:1})]})),_:1}),Object(a["m"])(x,{visiable:e.visiable,onCancel:e.closeSetting},null,8,["visiable","onCancel"])],64)}var l=Object(a["m"])("h3",{style:{"text-align":"center"}},"账户列表",-1),j={class:"account-list"},d=Object(a["l"])("设为当前"),m=Object(a["m"])("h3",{style:{"text-align":"center"}},"新增账户",-1),p=Object(a["l"])("确认"),O=Object(a["l"])("清空账号");function h(e,t,n,c,s,r){var o=Object(a["G"])("a-button"),u=Object(a["G"])("a-col"),i=Object(a["G"])("a-divider"),f=Object(a["G"])("a-input"),b=Object(a["G"])("a-form-item"),h=Object(a["G"])("a-form"),g=Object(a["G"])("a-row"),v=Object(a["G"])("a-modal");return Object(a["B"])(),Object(a["j"])(v,{visible:e.props.visiable,title:"账户管理",footer:null,width:"90vh",breakpoint:"lg"},{default:Object(a["Q"])((function(){return[Object(a["m"])(g,null,{default:Object(a["Q"])((function(){return[Object(a["m"])(u,{xs:24,sm:24,md:24,lg:10,xl:10},{default:Object(a["Q"])((function(){return[l,Object(a["R"])(Object(a["m"])("span",null,"尚无账户",512),[[a["N"],e.accountList&&0==e.accountList.length]]),Object(a["m"])("ul",j,[(Object(a["B"])(!0),Object(a["j"])(a["b"],null,Object(a["F"])(e.accountList,(function(t){return Object(a["B"])(),Object(a["j"])("li",{key:t.charaId},[Object(a["l"])(Object(a["I"])(t.nickName)+" ",1),Object(a["R"])(Object(a["m"])(o,{style:{float:"right"},size:"small",onClick:function(n){return e.changeAccount(t)}},{default:Object(a["Q"])((function(){return[d]})),_:2},1032,["onClick"]),[[a["N"],t.nickName!=e.currentAccount]])])})),128))])]})),_:1}),Object(a["m"])(u,{xs:0,sm:0,md:0,lg:2,xl:2},{default:Object(a["Q"])((function(){return[Object(a["m"])(i,{type:"vertical",style:{height:"100%"}})]})),_:1}),Object(a["m"])(u,{xs:24,sm:24,md:24,lg:10,xl:10},{default:Object(a["Q"])((function(){return[m,Object(a["m"])(h,{width:"100%",model:e.account,labelAlign:"right",labelCol:{xs:{span:10},sm:{span:10},md:{span:10},lg:{span:4},xl:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:20},xl:{span:20}}},{default:Object(a["Q"])((function(){return[Object(a["m"])(b,{label:"账户名",name:"username"},{default:Object(a["Q"])((function(){return[Object(a["m"])(f,{value:e.account.username,"onUpdate:value":t[1]||(t[1]=function(t){return e.account.username=t}),placeholder:"账号"},null,8,["value"])]})),_:1}),Object(a["m"])(b,{label:"密码",name:"password"},{default:Object(a["Q"])((function(){return[Object(a["m"])(f,{value:e.account.password,"onUpdate:value":t[2]||(t[2]=function(t){return e.account.password=t}),type:"password",placeholder:"密码"},null,8,["value"])]})),_:1})]})),_:1},8,["model"]),Object(a["m"])(o,{type:"primary",style:{width:"8em",float:"right"},onClick:e.addAccount},{default:Object(a["Q"])((function(){return[p]})),_:1},8,["onClick"]),Object(a["m"])(o,{type:"primary",style:{width:"8em","margin-left":"1px"},onClick:e.clearAccount},{default:Object(a["Q"])((function(){return[O]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["visible"])}n("45fc");var g=n("5530"),v=(n("96cf"),n("1da1")),y=(n("380f"),n("f64c")),k=n("5502"),w=n("365c"),_=Object(a["n"])({name:"AccountSetting",props:{visiable:Boolean},setup:function(e){var t=Object(k["b"])(),n=Object(a["D"])({accounts:[]}),c=function(){localStorage.getItem("accounts")&&(t.state.account.accountList=JSON.parse(localStorage.getItem("accounts")))};c();var s=Object(a["E"])(t.state.account.accountList||[]),r=Object(a["E"])(t.state.account.currentAccount.nickName),o=Object(a["D"])({username:"",password:""}),u=function(e){t.dispatch("account/changeAccount",e),y["a"].info("账号已切换成："+e.nickName),E.push("/welcome")},i=function(){t.state.account.accountList=[],localStorage.setItem("accounts","")},f=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n.accounts=t.state.account.accountList,c=n.accounts.some((function(e){if(e.username==o.username)return!0})),!c){e.next=7;break}y["a"].info("账号已存在。请重新输入！！"),e.next=18;break;case 7:return e.next=9,w["b"].login(o);case 9:if(a=e.sent,200==a.status){e.next=13;break}return y["a"].error(a.msg),e.abrupt("return");case 13:t.dispatch("account/addAcccount",Object(g["a"])(Object(g["a"])({},o),{},{nickName:a.data.nickname,charaId:a.data.charaId})),y["a"].info('账号："'+a.data.nickname+'"已添加成功'),n.accounts=t.state.account.accountList,localStorage.setItem("accounts",JSON.stringify(n.accounts)),console.log(a);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return Object(a["O"])((function(){return t.state.account.accountList}),(function(e){return s.value=e}),{deep:!0}),{props:e,accountList:s,currentAccount:r,account:o,addAccount:f,accounts:n,changeAccount:u,clearAccount:i,checkAccounts:c}}});n("b939");_.render=h;var x=_,C=Object(a["n"])({name:"Layout",components:{AccountSetting:x},mounted:function(){var e=document.getElementsByTagName("html")[0],t=document.body.clientWidth||document.documentElement.clientWidth;e.style.fontSize=(Math.abs(t-1980)/1.7+t)/1980*100+"px"},setup:function(){var e=Object(k["b"])(),t=e.getters,n=t.currentAccount,c=t.permission_routes,s=Object(a["E"])(n?n.nickName:"无"),r=Object(a["E"])([c[0].path]),o=Object(a["E"])(!1),u=function(){o.value=!0},i=function(){o.value=!1};return Object(a["O"])((function(){return e.state.account.currentAccount}),(function(e){return s.value=e.nickname})),{nickName:s,permission_routes:c,chooseRoute:r,visiable:o,showSetting:u,closeSetting:i}}});C.render=b;var A=C,S=[{path:"/",component:A,redirect:"/welcome",children:[{path:"/welcome",name:"欢迎",component:function(){return n.e("chunk-2d210feb").then(n.bind(null,"b9ec"))}},{path:"/basic-info",name:"基础信息",component:function(){return n.e("chunk-45021666").then(n.bind(null,"51d1"))}},{path:"/offline",name:"离线战斗",component:function(){return n.e("chunk-1cef9b5b").then(n.bind(null,"0eaa"))}}]}],z=Object(c["a"])({history:Object(c["b"])("/"),routes:S}),E=t["a"]=z},b03e:function(e,t,n){"use strict";n("ce7a")},b939:function(e,t,n){"use strict";n("086e")},ce7a:function(e,t,n){},d307:function(e,t,n){var c={"./account.js":"61c5","./permission.js":"31c2"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=s,e.exports=a,a.id="d307"}})}));
//# sourceMappingURL=app-0a4a5.js.map