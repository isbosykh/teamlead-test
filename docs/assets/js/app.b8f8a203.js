(function(t){function e(e){for(var n,a,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},i={app:0},r=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/teamlead-test/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"344a":function(t,e,s){},"3dc4":function(t,e,s){"use strict";var n=s("bb36"),i=s.n(n);i.a},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id="4678"},5452:function(t,e,s){"use strict";var n=s("af35"),i=s.n(n);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view",{staticClass:"view"})],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{attrs:{type:"is-blue","mobile-burger":!1}},[s("template",{slot:"brand"},[s("div",{staticClass:"column"},[s("div",{staticClass:"columns is-mobile"},[s("div",{staticClass:"wrapper"},["posts"===t.path||"users"===t.path?s("b-navbar-item",{attrs:{tag:"div"}},[s("DropdownSelect",{attrs:{options:t.options,path:t.path}})],1):t._e()],1),s("b-navbar-item",{attrs:{tag:"div"}},[s("div",{staticClass:"buttons"},["writer"===t.role?s("b-button",{staticClass:"button is-blue",attrs:{tag:"router-link",to:{name:"new-post"}}},[t._v(" Новый пост ")]):t._e(),s("b-button",{staticClass:"button is-blue",attrs:{tag:"router-link",to:{name:"users"}}},[t._v(" Пользователи ")]),s("b-button",{staticClass:"button is-blue",attrs:{tag:"router-link",to:{name:"main"}}},[t._v(" К постам ")]),t.isAuth?s("b-button",{staticClass:"button is-blue",on:{click:t.logout}},[t._v("Выйти")]):s("b-button",{staticClass:"button is-blue",attrs:{tag:"router-link",to:{name:"auth"}}},[t._v(" Войти ")])],1)])],1)])])],2)},o=[],c=(s("a4d3"),s("4de4"),s("4160"),s("b0c0"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("2fa7")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-field",[s("b-select",{attrs:{placeholder:"Posts amount"},on:{input:function(e){return t.changePaginate(t.postsAmount)}},model:{value:t.postsAmount,callback:function(e){t.postsAmount=e},expression:"postsAmount"}},t._l(t.options,(function(e,n){return s("option",{key:n,domProps:{value:e}},[t._v(t._s(e))])})),0)],1)},l=[],d={name:"DropdownSelect",props:{options:Array,path:String},data:function(){return{postsAmount:void 0}},methods:{changePaginate:function(t){"users"===this.path?(this.$store.commit("users/changeSortOptions",{paginate:t}),this.$store.dispatch("users/updateUsers")):"posts"===this.path&&(this.$store.commit("posts/changeSortOptions",{paginate:t}),this.$store.dispatch("posts/updatePosts"))}}},p=d,f=s("2877"),h=Object(f["a"])(p,u,l,!1,null,"6a8edb7f",null),b=h.exports,m=s("2f62");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function j(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(Object(s),!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var v={name:"Header",components:{DropdownSelect:b},data:function(){return{postsAmount:void 0,options:[1,5,10,20]}},computed:j({isAuth:function(){return this.$store.getters["user/isAuth"]}},Object(m["b"])("user",["role"]),{path:function(){return this.$route.name}}),methods:{logout:function(){this.$store.dispatch("user/logout"),"posts"!==this.$route.name&&this.$router.push({name:"posts"})}}},y=v,_=(s("5452"),Object(f["a"])(y,a,o,!1,null,null,null)),O=_.exports,k={name:"app",components:{Header:O}},w=k,$=(s("5c0b"),Object(f["a"])(w,i,r,!1,null,null,null)),x=$.exports,P=(s("0d03"),s("d3b7"),s("25f0"),s("3ca3"),s("ddb0"),s("2b3d"),"http://localhost:3000");function C(t,e){return t=new URL(t),e=Object.assign({},e),Object.keys(e).forEach((function(s){return t.searchParams.append(s,e[s])})),fetch(t,{method:"GET"}).then((function(t){return t.json()}))}function E(t){return fetch(t,{method:"DELETE"}).then((function(t){return t.json()}))}function U(t,e){return fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()}))}function A(t,e){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()}))}function S(t){return Promise.all([C("".concat(P,"/posts"),t),C("".concat(P,"/posts"))]).then((function(t){return{count:t[1].length,items:t[0]}}))}function z(t){return A("".concat(P,"/posts"),t)}function F(t){return U("".concat(P,"/posts/").concat(t.id),t)}function D(t){return E("".concat(P,"/posts/").concat(t))}function T(t){return Promise.all([C("".concat(P,"/users"),t),C("".concat(P,"/users"))]).then((function(t){return{count:t[1].length,items:t[0]}}))}function N(t){return E("".concat(P,"/users/").concat(t))}function L(t){return C("".concat(P,"/users?login=").concat(t))}function M(t){return A("".concat(P,"/users"),t)}var R={namespaced:!0,state:{profile:{}},mutations:{updateUser:function(t,e){t.profile=e},resetUser:function(t){t.profile={}}},actions:{login:function(t,e){var s=t.commit,n=e.login,i=e.password;return L(n).then((function(t){return t=t[0],t?t.password.toString()!==i?(t.error="Пароль не пароль",t):(s("updateUser",t),t):{error:"Логин не логин"}}))},logout:function(t){var e=t.commit;e("resetUser")},register:function(t,e){var s=t.commit;return M(e).then((function(t){return t?(s("updateUser",t),t):{error:"Неизвестная ошибка"}}))}},getters:{isAuth:function(t){return!!t.profile.id},role:function(t){return t.profile.role}},modules:{}},q=(s("a434"),{namespaced:!0,state:{users:[],amount:0,sortOptions:{paginate:10,page:1}},mutations:{updateUsers:function(t,e){t.users=e},updateAmount:function(t,e){t.amount=e},deleteUser:function(t,e){t.users.splice(e,1)},changeSortOptions:function(t,e){t.sortOptions=Object.assign(t.sortOptions,e),this.dispatch("users/updateUsers")}},actions:{updateUsers:function(t){var e=t.commit,s=t.state,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.sortOptions.page,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.sortOptions.paginate;return T({_page:n,_limit:i}).then((function(t){return e("updateUsers",t.items),e("updateAmount",t.count),t}))},deleteUser:function(t,e){var s=t.commit;return N(e.id).then((function(t){return s("deleteUser",e.index),t}))}},getters:{users:function(t){return t.users},amount:function(t){return t.users.length}}}),H=(s("e01a"),s("d28b"),{namespaced:!0,state:{posts:[],amount:0,sortOptions:{page:1,paginate:10}},mutations:{addPost:function(t,e){t.posts.push(e)},updatePosts:function(t,e){t.posts=e},updateAmount:function(t,e){t.amount=e},updatePost:function(t,e){t.post=e},deletePost:function(t,e){t.posts.splice(e,1)},changeSortOptions:function(t,e){t.sortOptions=Object.assign(t.sortOptions,e)}},actions:{updatePosts:function(t){var e=t.commit,s=t.state,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.sortOptions.page,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.sortOptions.paginate;return S({_page:n,_limit:i}).then((function(t){e("updatePosts",t.items),e("updateAmount",t.count)}))},createPost:function(t,e){var s=t.commit;return z(e).then((function(t){if(t)return s("addPost",t),t}))},deletePost:function(t,e){var s=t.commit,n=e.id,i=e.index;return D(n).then((function(t){return s("deletePost",i),t}))},updatePost:function(t,e){var s=t.commit;return F(e).then((function(t){if(t)return s("addPost",t),t}))}},getters:{post:function(t){return function(e){var s=!0,n=!1,i=void 0;try{for(var r,a=t.posts[Symbol.iterator]();!(s=(r=a.next()).done);s=!0){var o=r.value;if(o.id===e)return o}}catch(c){n=!0,i=c}finally{try{s||null==a.return||a.return()}finally{if(n)throw i}}}},posts:function(t){return t.posts},paginate:function(t){return t.sortOptions.paginate},amount:function(t){return t.amount}}});n["a"].use(m["a"]);var I=new m["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{user:R,posts:H,users:q}}),J=s("8c4f"),G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth-modal-wrapper"},["login"===t.path?s("div",{staticClass:"column is-6-mobile is-6-tablet is-3-desktop is-8-mobile is-multiline field"},[s("b-field",[s("b-input",{attrs:{type:"email","use-html5-validation":!1,placeholder:"Email",maxlength:"30"},model:{value:t.loginField,callback:function(e){t.loginField=e},expression:"loginField"}})],1),s("b-field",{attrs:{type:{"is-danger":0!==t.errors.length?t.errors:void 0},message:0!==t.errors.length?t.errors:void 0}},[s("b-input",{attrs:{type:"password",maxlength:"30",placeholder:"Пароль"},model:{value:t.passwordField,callback:function(e){t.passwordField=e},expression:"passwordField"}})],1),s("b-button",{staticClass:"button margin-bottom",attrs:{expanded:"",type:"is-blue"},on:{click:t.login}},[t._v("Вход")]),s("b-button",{staticClass:"button",attrs:{expanded:"",type:"is-blue",tag:"router-link",to:{name:"register"}}},[t._v("К регистрации")])],1):t._e(),"register"===t.path?s("div",{staticClass:"column is-6-mobile is-6-tablet is-3-desktop is-8-mobile is-multiline field"},[s("b-field",[s("b-input",{attrs:{type:"email","use-html5-validation":!1,placeholder:"Email",maxlength:"30"},model:{value:t.loginField,callback:function(e){t.loginField=e},expression:"loginField"}})],1),s("b-field",{attrs:{type:{"is-danger":0!==t.errors.length?t.errors:void 0},message:0!==t.errors.length?t.errors:void 0}},[s("b-input",{attrs:{type:"password",maxlength:"30",placeholder:"Пароль"},model:{value:t.passwordField,callback:function(e){t.passwordField=e},expression:"passwordField"}})],1),s("b-button",{staticClass:"button margin-bottom",attrs:{expanded:"",type:"is-blue"},on:{click:t.register}},[t._v("Регистрация")]),s("b-button",{staticClass:"button",attrs:{expanded:"",tag:"router-link",type:"is-blue",to:{name:"login"}}},[t._v("К логину")])],1):t._e()])},V=[],Z={name:"Authorization",data:function(){return{loginField:"",passwordField:"",errors:[]}},computed:{isAuth:function(){return this.$store.getters["user/isAuth"]},path:function(){return this.$route.name}},beforeRouteUpdate:function(t,e,s){this.loginField="",this.passwordField="",this.errors=[],s()},methods:{isValid:function(){return this.errors=[],0===this.passwordField.length?(this.errors.push("Поле пароля не может быть пустым"),!1):0===this.loginField.length?(this.errors.push("Поле логина не может быть пустым"),!1):0===this.errors.length||void 0},login:function(){var t=this;this.isValid()&&(this.errors=[],this.$store.dispatch("user/login",{login:this.loginField,password:this.passwordField}).then((function(e){e&&(e.error?t.errors=e.error:t.$router.push({name:"main"}))})))},register:function(){var t=this;this.isValid()&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.loginField)&&(this.errors=[],this.$store.dispatch("user/register",{login:this.loginField,password:this.passwordField,role:"reader"}).then((function(e){e&&(e.error?t.errors=e.error:t.$router.push({name:"main"}))})))}}},B=Z,K=(s("897c"),Object(f["a"])(B,G,V,!1,null,"6f097b2d",null)),Q=K.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-view"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)},X=[],Y={name:"Main",components:{},computed:{}},tt=Y,et=Object(f["a"])(tt,W,X,!1,null,"d9f23b3c",null),st=et.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-mobile is-centered"},[s("div",{staticClass:"column is-5-widescreen is-6-tablet is-10-mobile is-multiline"},[s("div",{staticClass:"notification is-white"},[s("div",{staticClass:"edit"},[s("b-input",{attrs:{type:"text",placeholder:"Заголовок",maxlength:"30"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),s("b-input",{attrs:{type:"textarea",placeholder:"Описание",maxlength:"200"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),s("footer",[s("div",{staticClass:"buttons"},[s("b-button",{staticClass:"is-success",attrs:{disabled:0===t.title.length||0===t.description.length,"icon-left":"check-square"},on:{click:t.save}},[t._v("Сохранить")])],1)])])])])},it=[],rt=s("c1df"),at=s.n(rt),ot={name:"NewPost",data:function(){return{title:"",description:""}},mounted:function(){"writer"!==this.$store.getters["user/role"]&&this.$router.push({name:"main"})},methods:{save:function(){var t={title:this.title,description:this.description,createdAt:at()().format(),updateAt:at()().format(),claps:0,userId:this.$store.state.user.profile.id};this.$store.dispatch("posts/createPost",t),this.$router.push({name:"main"})}}},ct=ot,ut=(s("9e3d"),Object(f["a"])(ct,nt,it,!1,null,"5c3982bf",null)),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.list?s("List",{key:t.page,attrs:{list:t.list,current:t.page,options:{amount:t.amount,paginate:t.paginate},namespace:"posts"},on:{"update:current":function(e){t.page=e}},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item,n=t.index;return[s("Post",{attrs:{index:n,data:e}})]}}],null,!1,742718313)}):t._e()},pt=[],ft=(s("e25e"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"columns is-mobile is-centered padding-bottom"},[s("b-pagination",{staticClass:"is-centered",attrs:{total:t.options.amount,current:t.current_,"per-page":t.options.paginate},on:{"update:current":function(e){t.current_=e}}})],1),s("div",{staticClass:"columns is-mobile is-centered"},[t.list?s("ul",{staticClass:"column is-8-widescreen is-12-tablet is-10-mobile is-multiline"},[s("transition-group",{attrs:{name:"fade"}},t._l(t.list,(function(e,n){return s("li",{key:n,staticClass:"padding-bottom"},[t._t("default",null,{index:n,item:e})],2)})),0)],1):t._e()])])}),ht=[],bt=(s("a9e3"),{name:"List",components:{},props:{list:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){}},current:{type:Number,default:1}},computed:{current_:{get:function(){return this.current},set:function(t){this.$emit("update:current",t)}}}}),mt=bt,gt=Object(f["a"])(mt,ft,ht,!1,null,"431c74f7",null),jt=gt.exports,vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.data?s("div",{staticClass:"columns is-mobile is-centered padding-bottom"},[s("div",{staticClass:"content column is-6-fullhd is-6-tablet is-10-mobile notification is-white"},[t.editable?t._e():s("h2",{staticClass:"title is-5"},[t._v(t._s(t.data.title))]),t.editable?t._e():s("p",{staticClass:"is-7"},[t._v(t._s(t.data.description))]),t.editable?s("div",{staticClass:"edit"},[s("b-input",{attrs:{type:"text",maxlength:"30"},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}}),s("b-input",{attrs:{type:"textarea",maxlength:"200"},model:{value:t.data.description,callback:function(e){t.$set(t.data,"description",e)},expression:"data.description"}})],1):t._e(),s("footer",[s("div",{staticClass:"date"},[t._v(" "+t._s(t.createDate(t.data.updateAt))+" ")]),s("div",{staticClass:"buttons is-grouped"},[t.editable?s("b-button",{staticClass:"is-success is-hidden-touch",attrs:{"icon-left":"check-square"},on:{click:t.edit}},[t._v("Сохранить")]):t._e(),"writer"===t.role?s("b-button",{staticClass:"is-light is-hidden-touch",attrs:{"icon-left":"edit"},on:{click:t.makeEditable}},["edit"===this.$route.name?s("span",[t._v("Отмена")]):s("span",[t._v("Изменить")])]):t._e(),"writer"===t.role?s("b-button",{staticClass:"is-danger is-hidden-touch",attrs:{"icon-left":"trash-alt"},on:{click:t.del}},[t._v("Удалить")]):t._e(),"writer"!==t.role?s("b-button",{staticClass:"is-light",attrs:{disabled:"reader"!==t.role,"icon-left":"sign-language"},on:{click:t.clap}},[t._v(t._s(t.data.claps))]):t._e(),t.editable?s("b-button",{staticClass:"is-success is-hidden-desktop",attrs:{"icon-left":"check-square"},on:{click:t.edit}}):t._e(),"writer"===t.role?s("b-button",{staticClass:"is-light is-hidden-desktop",attrs:{"icon-left":"edit"},on:{click:t.makeEditable}}):t._e(),"writer"===t.role?s("b-button",{staticClass:"is-danger is-hidden-desktop",attrs:{"icon-left":"trash-alt"},on:{click:t.del}}):t._e()],1)])])]):t._e()},yt=[],_t={name:"Post",props:{data:{type:Object,default:function(){return this.$store.getters["posts/post"](this.$route.params.id)}},index:Number},data:function(){return{editable:!1,title:"",description:""}},mounted:function(){"edit"===this.$route.name&&("writer"!==this.role&&this.$router.push({name:"main"}),this.editable=!0)},computed:{role:function(){return this.$store.getters["user/role"]}},methods:{createDate:function(t){return at.a.locale("ru"),at()(new Date(t)).fromNow()},makeEditable:function(){"edit"!==this.$route.name?this.$router.push({name:"edit",params:{id:this.data.id}}):this.$router.push({name:"main"}),this.editable=!this.editable,this.title=this.data.title,this.description=this.data.description},clap:function(){return this.data.claps+=1,this.$store.dispatch("posts/updatePost",this.data)},del:function(){this.$store.dispatch("posts/deletePost",{id:this.data.id,index:this.index})},edit:function(){var t=Object.assign({},this.data,{updateAt:at()(Date.now()).format()});this.editable=!this.editable,this.$store.dispatch("posts/updatePost",t),this.$router.push({name:"posts"})}}},Ot=_t,kt=(s("e248"),Object(f["a"])(Ot,vt,yt,!1,null,"0c1337a3",null)),wt=kt.exports;function $t(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function xt(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?$t(Object(s),!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):$t(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var Pt={name:"Posts",components:{List:jt,Post:wt},computed:xt({list:function(){return this.$store.getters["posts/posts"]}},Object(m["c"])("posts",["amount"]),{paginate:function(){return this.$store.getters["posts/paginate"]},page:{get:function(){return parseInt(this.$route.params.page)||1},set:function(t){this.$router.push({name:"posts",params:{page:t}})}}}),methods:{updatePosts:function(t){this.$store.dispatch("posts/updatePosts",t.page)}},beforeRouteEnter:function(t,e,s){s((function(e){e.updatePosts(t.params)}))},beforeRouteUpdate:function(t,e,s){var n=this;this.$nextTick((function(){return n.updatePosts(t.params)})),s()}},Ct=Pt,Et=Object(f["a"])(Ct,dt,pt,!1,null,null,null),Ut=Et.exports,At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.list?s("List",{key:t.page,attrs:{list:t.list,current:t.page,options:{amount:t.amount,paginate:t.paginate},namespace:"posts"},on:{"update:current":function(e){t.page=e}},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item,n=t.index;return[s("User",{attrs:{index:n,data:e}})]}}],null,!1,2423829216)}):t._e()},St=[],zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-mobile is-centered padding-bottom"},[t.data?s("div",{staticClass:"column is-6-fullhd is-6-tablet is-10-mobile notification is-white"},[s("header",{staticClass:"title is-5"},[s("p",{staticClass:"is-7"},[t._v(t._s(t.data.login))])]),s("div",{staticClass:"content"},[s("div",[t._v(t._s(t.data.role))])]),s("div",{staticClass:"buttons is-grouped is-right"},["writer"===t.role?s("b-button",{staticClass:"is-light",attrs:{"icon-left":"edit"},on:{click:t.makeEditable}},["edit"===this.$route.name?s("span",[t._v("Отмена")]):s("span",[t._v("Изменить")])]):t._e(),"writer"===t.role?s("b-button",{staticClass:"is-danger",attrs:{"icon-left":"trash-alt"},on:{click:t.del}},[t._v("Удалить")]):t._e()],1)]):t._e()])},Ft=[],Dt={name:"User",props:{data:{type:Object,default:function(){return this.$store.getters["users/user"](this.$route.params.id)}},index:Number},computed:{role:function(){return this.$store.getters["user/role"]}},methods:{makeEditable:function(){"edit"!==this.$route.name?this.$router.push({name:"edit",params:{id:this.data.id}}):this.$router.push({name:"main"}),this.editable=!this.editable,this.title=this.data.title,this.description=this.data.description},del:function(){this.$store.dispatch("users/deleteUser",{id:this.data.id,index:this.index})},edit:function(){this.data.updateAt=at()(Date.now()).format(),this.editable=!this.editable,this.$store.dispatch("posts/updatePost",this.data),this.$router.push({name:"main"})}}},Tt=Dt,Nt=(s("3dc4"),Object(f["a"])(Tt,zt,Ft,!1,null,"6bc251dd",null)),Lt=Nt.exports,Mt={name:"Users",components:{List:jt,User:Lt},computed:{list:function(){return this.$store.getters["users/users"]},amount:function(){return this.$store.getters["users/amount"]},paginate:function(){return this.$store.state["users"].sortOptions.paginate},page:{get:function(){return parseInt(this.$route.params.page)||1},set:function(t){this.$router.push({name:"users",params:{page:t}})}}},methods:{updateUsers:function(t){this.$store.dispatch("users/updateUsers",t.page)}},beforeRouteEnter:function(t,e,s){s((function(e){e.updateUsers(t.params)}))},beforeRouteUpdate:function(t,e,s){var n=this;this.$nextTick((function(){return n.updateUsers(t.params)})),s()}},Rt=Mt,qt=Object(f["a"])(Rt,At,St,!1,null,"403de25e",null),Ht=qt.exports;n["a"].use(J["a"]);var It=new J["a"]({mode:"history",base:"/teamlead-test/",routes:[{path:"/",name:"main",component:st,redirect:{name:"posts"},children:[{path:"posts/:page?",name:"posts",component:Ut},{path:"posts/edit/:id",name:"edit",component:wt},{path:"users",name:"users",component:Ht,children:[{path:"edit/:id",name:"edit"}]}]},{path:"/auth",name:"auth",component:Q,redirect:{name:"login"},children:[{path:"login",name:"login"},{path:"register",name:"register"}]},{path:"/new-post",name:"new-post",component:lt}]}),Jt=It,Gt=s("289d");s("5abe");n["a"].use(Gt["a"],{defaultIconPack:"fas"}),n["a"].config.productionTip=!1,new n["a"]({store:I,router:Jt,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),i=s.n(n);i.a},"897c":function(t,e,s){"use strict";var n=s("344a"),i=s.n(n);i.a},"9c0c":function(t,e,s){},"9e3d":function(t,e,s){"use strict";var n=s("f262"),i=s.n(n);i.a},af35:function(t,e,s){},bb36:function(t,e,s){},e248:function(t,e,s){"use strict";var n=s("ffc5"),i=s.n(n);i.a},f262:function(t,e,s){},ffc5:function(t,e,s){}});
//# sourceMappingURL=app.b8f8a203.js.map