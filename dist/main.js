!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("avaVueTradingViewComponent",[],n):"object"==typeof exports?exports.avaVueTradingViewComponent=n():t.avaVueTradingViewComponent=n()}("undefined"!=typeof self?self:this,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=59)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(33))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(2),o=e(6),i=e(15);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(2),o=e(19),i=e(7),c=e(18),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(35),o=e(17);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(0),o=e(24),i=e(1),c=e(25),u=e(30),a=e(49),s=o("wks"),f=r.Symbol,p=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=p("Symbol."+t)),s[t]}},function(t,n,e){var r=e(0),o=e(14).f,i=e(5),c=e(36),u=e(9),a=e(40),s=e(47);t.exports=function(t,n){var e,f,p,l,d,v=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in n){if(l=n[f],p=t.noTargetGet?(d=o(e,f))&&d.value:e[f],!s(h?f:v+(y?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(e,f,l,t)}}},function(t,n,e){var r=e(2),o=e(34),i=e(15),c=e(8),u=e(18),a=e(1),s=e(19),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=u(n,!0),s)try{return f(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2),o=e(3),i=e(20);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(22),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(9),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(24),o=e(25),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(39),o=e(22);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(42),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(1),o=e(8),i=e(28).indexOf,c=e(10);t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)!r(c,e)&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(8),o=e(44),i=e(45),c=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){},function(t,n,e){"use strict";var r=e(13),o=e(28).includes,i=e(48);r({target:"Array",proto:!0,forced:!e(54)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(3),o=e(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(0),o=e(5),i=e(1),c=e(9),u=e(21),a=e(37),s=a.get,f=a.enforce,p=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),f(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!l&&t[n]&&(s=!0):delete t[n],s?t[n]=e:o(t,n,e)):s?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},function(t,n,e){var r,o,i,c=e(38),u=e(0),a=e(4),s=e(5),f=e(1),p=e(23),l=e(10),d=u.WeakMap;if(c){var v=new d,h=v.get,y=v.has,g=v.set;r=function(t,n){return g.call(v,t,n),n},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var m=p("state");l[m]=!0,r=function(t,n){return s(t,m,n),n},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(21),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n){t.exports=!1},function(t,n,e){var r=e(1),o=e(41),i=e(14),c=e(6);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||u(t,f,a(n,f))}}},function(t,n,e){var r=e(26),o=e(43),i=e(46),c=e(7);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(27),o=e(11).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(29),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(3),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==s||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(12),o=e(50),i=e(6),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,n,e){var r=e(30);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r,o=e(7),i=e(51),c=e(11),u=e(10),a=e(53),s=e(20),f=e(23),p=f("IE_PROTO"),l=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=r?function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=s("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete v.prototype[c[e]];return v()};u[p]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[p]=t):e=v(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(2),o=e(6),i=e(7),c=e(52);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(27),o=e(11);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(26);t.exports=r("document","documentElement")},function(t,n,e){var r=e(2),o=e(3),i=e(1),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],s=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:a,p=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,f,p)}))}},function(t,n,e){"use strict";var r=e(13),o=e(56),i=e(17);r({target:"String",proto:!0,forced:!e(58)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(57);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,e){var r=e(4),o=e(16),i=e(12)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){var r=e(12)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,e){"use strict";e.r(n);e(31),e(32),e(55);function r(t,n,e,r,o,i,c,u){var a,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(t,n){return a.call(n),f(t,n)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,a):[a]}return{exports:t,options:s}}var o=r({name:"VueTradingView",data:()=>({container_id:"vue-trading-view"}),props:{options:Object},methods:{canUseDOM:()=>"undefined"!=typeof window&&window.document&&window.document.createElement,getScriptElement:()=>document.getElementById("tradingview-widget-script"),updateOnloadListener(t){const n=this.getScriptElement(),e=n.onload;return n.onload=()=>{e(),t()}},scriptExists(){return null!==this.getScriptElement()},appendScript(t){if(!this.canUseDOM())return void t();if(this.scriptExists())return"undefined"==typeof TradingView?void this.updateOnloadListener(t):void t();const n=document.createElement("script");n.id="tradingview-widget-script",n.type="text/javascript",n.async=!0,n.src="https://s3.tradingview.com/tv.js",n.onload=t,document.getElementsByTagName("head")[0].appendChild(n)},initWidget(){"undefined"!=typeof TradingView&&new window.TradingView.widget(Object.assign({container_id:this.container_id},this.options))}},mounted(){this.appendScript(this.initWidget)}},(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.container_id}})}),[],!1,null,null,null).exports,i=r({data:function(){return{}},props:{options:{type:Object,required:!0}},mounted:function(){this.options.container_id&&delete this.options.container_id},components:{VueTradingView:o}},(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tradingview-widget-container"},[n("vue-trading-view",{attrs:{options:this.options}})],1)}),[],!1,null,null,null).exports,c=r({props:{src:{type:String,default:"https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"},options:{type:Object}},data:function(){return{script_id:"trading-view-widget-script"}},mounted:function(){var t=document.createElement("script");t.id=this.script_id,t.type="text/javascript",t.async=!0,t.src=this.src,t.innerHTML=JSON.stringify(this.options),t.onload=onload,t.innerHTML=JSON.stringify(this.options),this.$refs.decimalScripts.appendChild(t)}},(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tradingview-widget-container"},[this._t("default"),this._v(" "),n("div",{ref:"decimalScripts"})],2)}),[],!1,null,null,null).exports,u=r({props:{src:{type:String,required:!0},options:{type:Object,required:!0}},data:function(){return{component:void 0}},created:function(){this.component=this.isTV()?i:c},methods:{isTV:function(){return this.src.includes("tv.js")}},components:{TV:i,EmbdedWidget:c}},(function(){var t=this.$createElement;return(this._self._c||t)(this.component,{tag:"component",attrs:{src:this.src,options:this.options}})}),[],!1,null,null,null).exports,a={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.componentName;null==t.prototype.$ava&&(t.prototype.$ava={}),t.prototype.$ava.trading_view={},t.component(e||"trading-view",u)}};"undefined"!=typeof window&&window.Vue&&(window.Vue.use(a),a.installed&&(a.installed=!1));n.default=a}]).default}));