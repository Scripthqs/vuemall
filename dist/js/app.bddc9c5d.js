(function(t){function e(e){for(var n,r,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var s=o[r];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},i={app:0},a=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d55bb20":"a8bb0cb1","chunk-49bfa9c7":"3c804e5f","chunk-4ab981aa":"924e05e9","chunk-7daeea95":"f20a6094","chunk-436d2b20":"aa1fc1c0","chunk-c933e780":"0f6a5dab"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o=i[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(t);var l=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(u);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuemall/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var f=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"01e1":function(t,e,o){"use strict";o("98fb")},1829:function(t,e,o){"use strict";o("3d90")},"1f92":function(t,e,o){t.exports=o.p+"img/cart_active.3857810e.svg"},"3d90":function(t,e,o){var n=o("ff9f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("1fd4db79",n,!0,{sourceMap:!1,shadowMode:!1})},4897:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[o("div",[t._v(t._s(t.message))])])},i=[],a={name:"Toast",props:{},data:function(){return{message:"",isShow:!1,timer:null}},methods:{show:function(t,e){var o=this;this.isShow=!0,this.message=t,clearTimeout(this.timer),this.timer=setTimeout((function(){o.isShow=!1,o.message=""}),e)}}},r=a,c=(o("01e1"),o("2877")),s=Object(c["a"])(r,n,i,!1,null,"319d6dab",null);e["a"]=s.exports},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("keep-alive",{attrs:{exclude:"Detail"}},[o("router-view")],1),t.isDetail?t._e():o("main-tab-bar")],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tab-bar",[n("tab-bar-item",{attrs:{path:"/home",activeColor:"#ff5777"}},[n("img",{attrs:{slot:"item-icon",src:o("9443"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:o("b508"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),n("tab-bar-item",{attrs:{path:"/category",activeColor:"#ff5777"}},[n("img",{attrs:{slot:"item-icon",src:o("57cd"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:o("a5ef"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),n("tab-bar-item",{attrs:{path:"/cart",activeColor:"#ff5777"}},[n("img",{attrs:{slot:"item-icon",src:o("d1c9"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:o("1f92"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),n("tab-bar-item",{attrs:{path:"/profile",activeColor:"#ff5777"}},[n("img",{attrs:{slot:"item-icon",src:o("e55d"),alt:""},slot:"item-icon"}),n("img",{attrs:{slot:"item-icon-active",src:o("d151"),alt:""},slot:"item-icon-active"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},c=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},l=[],u={name:"TabBar"},f=u,d=(o("1829"),o("2877")),p=Object(d["a"])(f,s,l,!1,null,"fac4e2ae",null),b=p.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?o("div",[t._t("item-icon-active")],2):o("div",[t._t("item-icon")],2),o("div",{style:t.activeStyle},[t._t("item-text")],2)])},m=[],v=(o("ac1f"),o("5319"),{name:"TabBarItem",data:function(){return{}},props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$route.path!=this.path&&this.$router.replace(this.path)}}}),g=v,x=(o("9348"),Object(d["a"])(g,h,m,!1,null,"18b6d788",null)),y=x.exports,w={name:"MainTabBar",components:{TabBar:b,TabBarItem:y}},k=w,_=Object(d["a"])(k,r,c,!1,null,"70c33071",null),z=_.exports,C={name:"App",components:{MainTabBar:z},data:function(){return{isDetail:!1}},updated:function(){-1!==this.$route.path.indexOf("/detail")?this.isDetail=!0:this.isDetail=!1}},T=C,L=(o("d640"),Object(d["a"])(T,i,a,!1,null,"163b5b82",null)),O=L.exports,j=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),M=function(){return Promise.all([o.e("chunk-2d55bb20"),o.e("chunk-4ab981aa")]).then(o.bind(null,"b3d7"))},S=function(){return Promise.all([o.e("chunk-2d55bb20"),o.e("chunk-7daeea95")]).then(o.bind(null,"bb51"))},$=function(){return o.e("chunk-c933e780").then(o.bind(null,"c228"))},P=function(){return o.e("chunk-436d2b20").then(o.bind(null,"3b42"))},E=function(){return Promise.all([o.e("chunk-2d55bb20"),o.e("chunk-49bfa9c7")]).then(o.bind(null,"6ab7"))};n["a"].use(j["a"]);var B=[{path:"/",redirect:"/home"},{path:"/home",component:M},{path:"/category",component:S},{path:"/cart",component:$},{path:"/profile",component:P},{path:"/detail/:iid",component:E}],A=new j["a"]({routes:B}),U=A,D=o("2f62"),H=o("b85c"),G=(o("7db0"),{addCounter:function(t,e){t.cartList[e].count++},addGoods:function(t,e){e.count=1,e.checked=!0,t.cartList.push(e)},changeChecked:function(t,e){t.cartList[e].checked=!t.cartList[e].checked},changeAllChecked:function(t){if(0!==t.cartList.length)if(t.cartList.find((function(t){return!t.checked}))){var e,o=Object(H["a"])(t.cartList);try{for(o.s();!(e=o.n()).done;){var n=e.value;n.checked=!0}}catch(c){o.e(c)}finally{o.f()}}else{var i,a=Object(H["a"])(t.cartList);try{for(a.s();!(i=a.n()).done;){var r=i.value;r.checked=!1}}catch(c){a.e(c)}finally{a.f()}}}}),I={addCart:function(t,e){return new Promise((function(o,n){for(var i=!1,a=0;a<t.state.cartList.length;a++)if(t.state.cartList[a].iid===e.iid){i=!0,t.commit("addCounter",a),o("已存在商品，数量+1");break}i||(t.commit("addGoods",e),o("添加至购物车成功！"))}))},clickCheck:function(t,e){t.commit("changeChecked",e)},allCheckClick:function(t){t.commit("changeAllChecked")}},N={},J={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};n["a"].use(D["a"]);var q={cartList:[]},F=new D["a"].Store({state:q,getters:J,mutations:G,actions:I,modules:N}),Y=o("4897"),K={},Q=K;K.install=function(t){var e=t.extend(Y["a"]),o=new e;o.$mount(document.createElement("div")),document.body.appendChild(o.$el),t.prototype.$toast=o};var R=o("fe3c"),V=o.n(R),W=o("caf9"),X=o("5d17");n["a"].component("Scroll",X["a"]),n["a"].config.productionTip=!1,n["a"].prototype.$bus=new n["a"],n["a"].use(Q),V.a.attach(document.body),n["a"].use(W["a"],{loading:o("bc5e"),error:o("bc5e")}),new n["a"]({router:U,store:F,render:function(t){return t(O)}}).$mount("#app")},"57cd":function(t,e,o){t.exports=o.p+"img/category.11368804.svg"},"5d17":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"wrapper",staticClass:"wrapper"},[o("div",{staticClass:"content"},[t._t("default")],2)])},i=[],a=(o("a9e3"),o("1fba")),r={name:"Scroll",data:function(){return{scroll:null}},props:{probeType:{type:Number,default:0},pullUpLoad:{type:Boolean,default:!1}},mounted:function(){var t=this;this.scroll=new a["a"](this.$refs.wrapper,{click:!0,probeType:this.probeType,pullUpLoad:this.pullUpLoad}),2!==this.probeType&&3!==this.probeType||this.scroll.on("scroll",(function(e){t.$emit("scroll",e)})),this.pullUpLoad&&this.scroll.on("pullingUp",(function(){t.$emit("pullingUp")}))},methods:{scrollTo:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;this.scroll&&this.scroll.scrollTo(t,e,o)},finishPullingUp:function(){this.scroll&&this.scroll.finishPullUp()},refresh:function(){this.scroll&&this.scroll.refresh()}}},c=r,s=o("2877"),l=Object(s["a"])(c,n,i,!1,null,"927a7556",null);e["a"]=l.exports},6120:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,"/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-.625vw}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""]),t.exports=e},"6ff5":function(t,e,o){var n=o("24fb"),i=o("b28b");e=n(!1),e.i(i),e.push([t.i,".main-tab-bar[data-v-163b5b82]{z-index:9999}",""]),t.exports=e},"896f":function(t,e,o){var n=o("a21b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("1f8a8a2a",n,!0,{sourceMap:!1,shadowMode:!1})},9348:function(t,e,o){"use strict";o("896f")},9443:function(t,e,o){t.exports=o.p+"img/home.43fd8010.svg"},"98fb":function(t,e,o){var n=o("c7ed");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("31cb4ce7",n,!0,{sourceMap:!1,shadowMode:!1})},a21b:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".tab-bar-item[data-v-18b6d788]{flex:1;text-align:center;height:15.3125vw;background-color:#f6f6f6;font-size:4.375vw}.tab-bar-item img[data-v-18b6d788]{width:7.5vw;height:7.5vw;margin-top:.9375vw;margin-bottom:.625vw;vertical-align:top}",""]),t.exports=e},a5ef:function(t,e,o){t.exports=o.p+"img/category_active.e3dac1fb.svg"},b28b:function(t,e,o){var n=o("24fb"),i=o("6120");e=n(!1),e.i(i),e.push([t.i,'*{touch-action:pan-y}:root{--color-text:#666;--color-high-text:#ff5777;--color-tint:#ff8198;--color-background:#fff;--font-size:4.375vw;--line-height:1.5}*,:after,:before{margin:0;padding:0;box-sizing:border-box}body{font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;background:var(--color-background);width:100vw}a,body{color:var(--color-text)}a{text-decoration:none}.clear-fix:after{clear:both;content:"";display:block;width:0;height:0;visibility:hidden}.clear-fix{zoom:1}.arrow-right{border-top:1px solid #999;border-left:1px solid #999;width:2.8125vw;height:2.8125vw;background-color:transparent;transform:rotate(135deg);display:inline-block;margin-left:.1rem}.left{float:left}.right{float:right}',""]),t.exports=e},b508:function(t,e,o){t.exports=o.p+"img/home_active.74d1cc4d.svg"},bc5e:function(t,e,o){t.exports=o.p+"img/placeholder.48bcea0d.png"},c7ed:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".toast[data-v-319d6dab]{position:fixed;z-index:99999;top:50%;left:50%;transform:translate(-50%,-50%);background-color:rgba(0,0,0,.65);padding:1.5625vw 3.125vw;border-radius:1.5625vw;text-align:center;color:#fff}",""]),t.exports=e},d151:function(t,e,o){t.exports=o.p+"img/profile_active.3ba58f85.svg"},d1c9:function(t,e,o){t.exports=o.p+"img/cart.fbc81098.svg"},d640:function(t,e,o){"use strict";o("f0f3")},e55d:function(t,e,o){t.exports=o.p+"img/profile.c2b75dfe.svg"},f0f3:function(t,e,o){var n=o("6ff5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("54ef069f",n,!0,{sourceMap:!1,shadowMode:!1})},ff9f:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,"#tab-bar[data-v-fac4e2ae]{display:flex;position:absolute;left:0;right:0;bottom:0;box-shadow:0 -1px 1.5625vw rgba(0,0,0,.15)}",""]),t.exports=e}});
//# sourceMappingURL=app.bddc9c5d.js.map