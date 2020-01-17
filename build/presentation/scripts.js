/*! head.core - v1.0.2 */
(function(n,t){"use strict";function r(n){a[a.length]=n}function k(n){var t=new RegExp(" ?\\b"+n+"\\b");c.className=c.className.replace(t,"")}function p(n,t){for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}function tt(){var t,e,f,o;c.className=c.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,"");t=n.innerWidth||c.clientWidth;e=n.outerWidth||n.screen.width;u.screen.innerWidth=t;u.screen.outerWidth=e;r("w-"+t);p(i.screens,function(n){t>n?(i.screensCss.gt&&r("gt-"+n),i.screensCss.gte&&r("gte-"+n)):t<n?(i.screensCss.lt&&r("lt-"+n),i.screensCss.lte&&r("lte-"+n)):t===n&&(i.screensCss.lte&&r("lte-"+n),i.screensCss.eq&&r("e-q"+n),i.screensCss.gte&&r("gte-"+n))});f=n.innerHeight||c.clientHeight;o=n.outerHeight||n.screen.height;u.screen.innerHeight=f;u.screen.outerHeight=o;u.feature("portrait",f>t);u.feature("landscape",f<t)}function it(){n.clearTimeout(b);b=n.setTimeout(tt,50)}var y=n.document,rt=n.navigator,ut=n.location,c=y.documentElement,a=[],i={screens:[240,320,480,640,768,800,1024,1280,1440,1680,1920],screensCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!1},browsers:[{ie:{min:6,max:11}}],browserCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!0},html5:!0,page:"-page",section:"-section",head:"head"},v,u,s,w,o,h,l,d,f,g,nt,e,b;if(n.head_conf)for(v in n.head_conf)n.head_conf[v]!==t&&(i[v]=n.head_conf[v]);u=n[i.head]=function(){u.ready.apply(null,arguments)};u.feature=function(n,t,i){return n?(Object.prototype.toString.call(t)==="[object Function]"&&(t=t.call()),r((t?"":"no-")+n),u[n]=!!t,i||(k("no-"+n),k(n),u.feature()),u):(c.className+=" "+a.join(" "),a=[],u)};u.feature("js",!0);s=rt.userAgent.toLowerCase();w=/mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(s);u.feature("mobile",w,!0);u.feature("desktop",!w,!0);s=/(chrome|firefox)[ \/]([\w.]+)/.exec(s)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(msie) ([\w.]+)/.exec(s)||/(trident).+rv:(\w.)+/.exec(s)||[];o=s[1];h=parseFloat(s[2]);switch(o){case"msie":case"trident":o="ie";h=y.documentMode||h;break;case"firefox":o="ff";break;case"ipod":case"ipad":case"iphone":o="ios";break;case"webkit":o="safari"}for(u.browser={name:o,version:h},u.browser[o]=!0,l=0,d=i.browsers.length;l<d;l++)for(f in i.browsers[l])if(o===f)for(r(f),g=i.browsers[l][f].min,nt=i.browsers[l][f].max,e=g;e<=nt;e++)h>e?(i.browserCss.gt&&r("gt-"+f+e),i.browserCss.gte&&r("gte-"+f+e)):h<e?(i.browserCss.lt&&r("lt-"+f+e),i.browserCss.lte&&r("lte-"+f+e)):h===e&&(i.browserCss.lte&&r("lte-"+f+e),i.browserCss.eq&&r("eq-"+f+e),i.browserCss.gte&&r("gte-"+f+e));else r("no-"+f);r(o);r(o+parseInt(h,10));i.html5&&o==="ie"&&h<9&&p("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(n){y.createElement(n)});p(ut.pathname.split("/"),function(n,u){if(this.length>2&&this[u+1]!==t)u&&r(this.slice(u,u+1).join("-").toLowerCase()+i.section);else{var f=n||"index",e=f.indexOf(".");e>0&&(f=f.substring(0,e));c.id=f.toLowerCase()+i.page;u||r("root"+i.section)}});u.screen={height:n.screen.height,width:n.screen.width};tt();b=0;n.addEventListener?n.addEventListener("resize",it,!1):n.attachEvent("onresize",it)})(window);
/*! head.css3 - v1.0.0 */
(function(n,t){"use strict";function a(n){for(var r in n)if(i[n[r]]!==t)return!0;return!1}function r(n){var t=n.charAt(0).toUpperCase()+n.substr(1),i=(n+" "+c.join(t+" ")+t).split(" ");return!!a(i)}var h=n.document,o=h.createElement("i"),i=o.style,s=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),c="Webkit Moz O ms Khtml".split(" "),l=n.head_conf&&n.head_conf.head||"head",u=n[l],f={gradient:function(){var n="background-image:";return i.cssText=(n+s.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));"+n)+s.join("linear-gradient(left top,#eee,#fff);"+n)).slice(0,-n.length),!!i.backgroundImage},rgba:function(){return i.cssText="background-color:rgba(0,0,0,0.5)",!!i.backgroundColor},opacity:function(){return o.style.opacity===""},textshadow:function(){return i.textShadow===""},multiplebgs:function(){i.cssText="background:url(https://),url(https://),red url(https://)";var n=(i.background||"").match(/url/g);return Object.prototype.toString.call(n)==="[object Array]"&&n.length===3},boxshadow:function(){return r("boxShadow")},borderimage:function(){return r("borderImage")},borderradius:function(){return r("borderRadius")},cssreflections:function(){return r("boxReflect")},csstransforms:function(){return r("transform")},csstransitions:function(){return r("transition")},touch:function(){return"ontouchstart"in n},retina:function(){return n.devicePixelRatio>1},fontface:function(){var t=u.browser.name,n=u.browser.version;switch(t){case"ie":return n>=9;case"chrome":return n>=13;case"ff":return n>=6;case"ios":return n>=5;case"android":return!1;case"webkit":return n>=5.1;case"opera":return n>=10;default:return!1}}};for(var e in f)f[e]&&u.feature(e,f[e].call(),!0);u.feature()})(window);
/*! head.load - v1.0.3 */
(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);
/*
//# sourceMappingURL=/accelerator/lib/head.min.js.map
*/
function SlideList(t){var t=t||[];this.init(t)}Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},s=function(){return i.apply(this instanceof n&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,s.prototype=new n,s}),function(t,e){try{t.querySelector(":scope body")}catch(i){["querySelector","querySelectorAll"].forEach(function(i){var n=e[i];e[i]=function(e){if(/(^|,)\s*:scope/.test(e)){var s=this.id;this.id="ID_"+Date.now(),e=e.replace(/((^|,)\s*):scope/g,"$1#"+this.id);var r=t[i](e);return this.id=s,r}return n.call(this,e)}})}}(window.document,Element.prototype);var app=app||function(){"use strict";function t(){if(w.wrapper){var t=s(),e=app.config.get("maxScale"),i=app.config.get("minScale");w.slides.style.width=t.slideWidth+"px",w.slides.style.height=t.slideHeight+"px",y=Math.min(t.availableWidth/t.slideWidth,t.availableHeight/t.slideHeight),y=Math.max(y,i),y=Math.min(y,e),"undefined"==typeof w.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?c(w.slides,"translate(-50%, -50%) scale("+y+") translate(50%, 50%)"):w.slides.style.zoom=y,app.trigger("update:layout",{scale:y})}}function e(){return y}function i(){function t(){!window.Promise&&window.ES6Promise&&(window.Promise=window.ES6Promise.Promise),n.length&&head.js.apply(null,n),app.start.init()}function e(e){head.ready(e.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],function(){"function"==typeof e.callback&&e.callback.apply(this),0===--s&&t()})}var i=[],n=[],s=0,r=app.config.get("dependencies"),a=app.config.get("transition"),o=app.config.get("transitionSpeed"),p=app.config.get("monitoringAPI");a?w.wrapper.classList.add(a):w.wrapper.classList.add("linear"),o&&w.wrapper.setAttribute("data-transition-speed",o),app.start||r.unshift({src:"accelerator/js/core.js"}),window.touchy||r.push({src:"accelerator/lib/touchy.js"}),!window.ag&&p&&r.unshift({src:p}),window.Promise||r.unshift({src:"accelerator/lib/promise.min.js"});for(var l=0,c=r.length;l<c;l++){var d=r[l];d.condition&&!d.condition()||(d.async?n.push(d.src):i.push(d.src),e(d))}i.length?(s=i.length,head.js.apply(null,i)):t()}function n(){var t=w.slides.querySelectorAll(".slide");return t.length>0&&p(t).forEach(function(t,e){t.id&&(w[t.id]=t)}),t}function s(){var t=w.wrapper.offsetWidth,e=w.wrapper.offsetHeight,i=app.config.get();t-=e*i.margin,e-=e*i.margin;var n=i.width,s=i.height,r=20;return"string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*t),"string"==typeof s&&/%$/.test(s)&&(s=parseInt(s,10)/100*e),{availableWidth:t,availableHeight:e,slideWidth:n,slideHeight:s,slidePadding:r}}function r(e){var s=app.config.get();e&&app.config.add(e),e.setup&&e.setup(app.config.get()),app.env&&s[app.env]&&app.config.add(s[app.env]),!app.lang&&s.lang&&(app.lang=s.lang),t();n();app.config.add({cachedElements:w}),setTimeout(function(){i()},50)}function a(t,e){t=t||null,e=e||{},app.initialize=!1;window.location.port||null;w.theme=document.querySelector("#theme"),w.wrapper=document.querySelector(".accelerator"),w.slides=document.querySelector(".accelerator .slides"),w.template=document.querySelector(".accelerator .template"),app.queryParams=f(window.location.search),app.queryParams&&(app.queryParams.env&&(app.env=app.queryParams.env),app.queryParams.lang&&(app.lang=app.queryParams.lang),app.queryParams.mode&&(app.mode=app.queryParams.mode)),t?app.config.fetch(t,function(){r(e)}):r(e)}function o(t){return S.call(arguments,1).forEach(function(e){for(var i in e)t[i]=e[i]}),t}function p(t){return Array.prototype.slice.call(t)}function l(t){var e=0;if(t){var i=0;p(t.childNodes).forEach(function(t){"number"==typeof t.offsetTop&&t.style&&("absolute"===t.style.position&&(i+=1),e=Math.max(e,t.offsetTop+t.offsetHeight))}),0===i&&(e=t.offsetHeight)}return e}function c(t,e){t.style.WebkitTransform=e,t.style.MozTransform=e,t.style.msTransform=e,t.style.OTransform=e,t.style.transform=e}function d(){if(window.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1}function u(t,e){var i=d();if(!i)throw new Error("XMLHttpRequest or ActiveXObject is not available. Cannot get file.");i.open("GET",t),i.onreadystatechange=function(){4===i.readyState&&(i.onreadystatechange=function(){},i.status>=200&&i.status<300||304==i.status||0==i.status&&"file:"==window.location.protocol?e(null,i.responseText):400===i.status?e({error:"Could not locate file"},null):e({error:i.status},null))},i.send(null)}function h(t){var e,i=document.createElement("div"),n=i.style;return t.toLowerCase()in n?e="":"Webkit"+t in n?e="-webkit-":"Moz"+t in n?e="-moz-":"ms"+t in n?e="-ms-":"O"+t in n&&(e="-o-"),e}function f(t){return(t||document.location.search).replace(/(^\?)/,"").split("&").map(function(t){return t=t.split("="),this[t[0]]=t[1],this}.bind({}))[0]}function v(){function t(t){var e=_.template(t);return e()}return t}var g,m="1.4.7",w={},y=1,b=[],S=b.slice;return window.head||(g=document.createElement("script"),g.setAttribute("src","accelerator/lib/head.min.js"),document.head.appendChild(g)),window.addEventListener("resize",t,!1),setTimeout(function(){app.initialize&&app.initialize("config.json")},100),{initialize:a,layout:t,getScale:e,util:{extend:o,getAbsoluteHeight:l,toArray:p,transformElement:c,getFile:u,getBrowserPrefix:h,_templateParser:v},version:m}}();!function(){function t(t){var e=++s+"";return t?t+e:e}var e=[],i=e.push,n=e.slice,s=({}.toString,0),r=app.events={on:function(t,e,i){if(!o(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var n=this._events[t]||(this._events[t]=[]);return n.push({callback:e,context:i,ctx:i||this}),this},once:function(t,e,i){if(!o(this,"once",t,[e,i])||!e)return this;var n,s=this,r=function(){n||(n=!0,s.off(t,r),e.apply(this,arguments))};return r._callback=e,this.on(t,r,i)},off:function(t,e,i){var n,s,r,a,p,l,c,d;if(!this._events||!o(this,"off",t,[e,i]))return this;if(!t&&!e&&!i)return this._events=void 0,this;for(a=t?[t]:Object.keys(this._events),p=0,l=a.length;p<l;p++)if(t=a[p],r=this._events[t]){if(this._events[t]=n=[],e||i)for(c=0,d=r.length;c<d;c++)s=r[c],(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context)&&n.push(s);n.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=n.call(arguments,1);if(!o(this,"trigger",t,e))return this;var i=this._events[t],s=this._events.all;return i&&p(i,e),s&&p(s,arguments),this},stopListening:function(t,e,i){var n=this._listeningTo;if(!n)return this;var s=!e&&!i;i||"object"!=typeof e||(i=this),t&&((n={})[t._listenId]=t);for(var r in n)t=n[r],t.off(e,i,this),!s&&Object.keys(t._events).length||delete this._listeningTo[r];return this}},a=/\s+/,o=function(t,e,n,s){if(!n)return!0;var r;if("object"==typeof n){for(var o in n)r=[o,n[o]],i.apply(r,s),t[e].apply(t,r);return!1}if(a.test(n)){for(var p=n.split(a),l=0,c=p.length;l<c;l++)r=[p[l]],i.apply(r,s),t[e].apply(t,r);return!1}return!0},p=function(t,e){var i,n=-1,s=t.length,r=e[0],a=e[1],o=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a,o);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e)}},l={listenTo:"on",listenToOnce:"once"};Object.keys(l).forEach(function(e){var i=l[e];r[e]=function(e,n,s){var r=this._listeningTo||(this._listeningTo={}),a=e._listenId||(e._listenId=t("l"));return r[a]=e,s||"object"!=typeof n||(s=this),e[i](n,s,this),this}})}(),app.util.extend(app,app.events),app.config=function(){function t(t,e){for(var i in e)t[i]=e[i]}function e(t,e){var n=app.cache.get(t);n?(i(JSON.parse(n)),e()):app.util.getFile(t,function(n,s){var r;if(n)throw new Error("Unable to fetch configuration "+t,n);r=JSON.parse(s),r&&i(r),e()})}function i(e){t(p,e)}function n(t){return t?!!p[t]&&p[t]:p}function s(t,e){return!(!t||!e)&&(!(!p[t]||"object"!=typeof p[t]||!p[t][e])&&p[t][e])}function r(t,e){p[t]=e}function a(t,e,i){p[t]&&"object"==typeof p[t]?p[t][e]=i:(p[t]={},p[t][e]=i)}function o(t){p[t]&&i(p[t])}var p={paths:{slides:"slides/<id>/",modules:"modules/<id>/",scripts:"slides/<id>/<id>.js",styles:"slides/<id>/<id>.css",thumbs:"slides/<id>/<id>.png",placeholderThumb:"placeholder_thumb.png",references:"shared/references/<id>.pdf"},width:960,height:700,margin:.1,minScale:.2,maxScale:1,history:!1,keyboard:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,theme:null,transition:"linear",transitionSpeed:"default",backgroundTransition:"default",viewDistance:3,preload:!1,pathToSlides:"slides/<id>/",pathToModules:"modules/<id>/",monitoringAPI:"accelerator/lib/agnitio.js",dependencies:[],lazy:!1,remote:!1,editableTag:"data-ag-editable",csvHeaders:{fieldName:"field_name",originalContent:"original_value",localContent:"localized_value"},iPlanner:{lockedOrientation:null,bounce:!1}};return{fetch:e,add:i,get:n,pluck:s,set:r,update:a,storyboardSetup:o}}(),app.registry=function(){function t(t,e,i){!n[t]||i?(n[t]=e(app),app.registry.trigger("register",t)):window.console&&console.log("Registration of "+t+" ignored. It's already registered.")}function e(t){return!!n[t]}function i(t){return t?e(t)?n[t]:null:n}var n={},s={add:t,exist:e,get:i};return app.util.extend(s,app.events),s}(),app.register=app.registry.add,app.util.extend(app.registry,app.events),app.cache=function(){function t(t,e){s[t]=e}function e(t){return!!s[t]}function i(t){return t?e(t)?s[t]:void 0:s}function n(t){return e(t)&&(s[t]=null),!0}var s={};return{put:t,exist:e,get:i,remove:n}}(),app.remote=function(){function t(t){i=t.role,n=t.path||null,app.config.set("remote",!0)}function e(){if(window.ag&&i){var t=function(){};app.slideshow.on("update:current",function(t){ag.msg.send({name:"slideEnter",value:app.getPath()})}),app.slide.on("state:enter",function(t){ag.msg.send({name:"stateEnter",value:JSON.stringify(t)})}),app.slide.on("reset",function(t){ag.msg.send({name:"stateExit",value:JSON.stringify(t)})}),ag.on("goTo",function(t){app.slideshow.__load__(t)}),"contact"===i&&(app.removeNavListeners(),app.slideshow.load=t,app.slideshow.goTo=t,app.slideshow.step=t,app.slideshow.next=t,app.slideshow.prev=t,app.slideshow.left=t,app.slideshow.right=t,app.slideshow.up=t,app.slideshow.down=t,ag.on("enterState",function(t){var e=JSON.parse(t),i=app.slide.get(e.view);i&&i.goTo(e.id,e.data)}),ag.on("resetState",function(t){var e=JSON.parse(t),i=app.slide.get(e.view);i&&i.reset()})),n&&app.slideshow.__load__(n)}}var i,n;return window.ag&&window.ag.on&&ag.on("registerUser",function(e){t(e)}),{init:t,setup:e}}(),SlideList.prototype.init=function(t){this.list=t,this.current={h:0,v:0}},SlideList.prototype.size=function(){var t=[];return t=t.concat.apply(t,this.list),t.length},SlideList.prototype.get=function(t,e){var i;if(void 0===t&&(t=this.current.h,e=this.current.v),e=e||0,i=this.getType(t)){if("list"===i)return this.list[t][e];if(!e)return this.list[t]}},SlideList.prototype.getIndex=function(t){var e,i=this.list.indexOf(t);return t?i>-1?{h:i,v:0}:(this.list.forEach(function(n,s){"string"!=typeof n&&(i=n.indexOf(t),i>-1&&(e={h:s,v:i}))}),e):this.current},SlideList.prototype.getType=function(t){if(t>-1&&t<this.list.length)return"string"==typeof this.list[t]?"item":"list"},SlideList.prototype.inRange=function(t){return t>-1&&t<this.list.length},SlideList.prototype.isEqual=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},SlideList.prototype._set=function(t){this.current;this.current=t},SlideList.prototype.getList=function(){return this.list},SlideList.prototype.setList=function(t){var e,i=this.get();this.list=t,e=this.getIndex(i),this.inRange(this.current.h)&&e?this._set(e):this._set({h:0,v:0})},SlideList.prototype.goTo=function(t){var t=t||{h:0,v:0};"string"==typeof t&&(t=this.getIndex(t)),t.h=t.h||0,t.v=t.v||0,this.get(t.h,t.v)&&this._set(t)},SlideList.prototype.left=function(){var t={h:this.current.h-1,v:0};this.get(t.h)&&this._set(t)},SlideList.prototype.right=function(){var t={h:this.current.h+1,v:0};this.get(t.h)&&this._set(t)},SlideList.prototype.down=function(){var t={h:this.current.h,v:this.current.v+1};this.get(t.h,t.v)&&this._set(t)},SlideList.prototype.up=function(){var t={h:this.current.h,v:this.current.v-1};this.get(t.h,t.v)&&this._set(t)},SlideList.prototype.getUp=function(){var t={h:this.current.h,v:this.current.v-1},e=this.get(t.h,t.v);if(e)return t},SlideList.prototype.getDown=function(){var t={h:this.current.h,v:this.current.v+1},e=this.get(t.h,t.v);if(e)return t},SlideList.prototype.getRight=function(){var t={h:this.current.h+1,v:0},e=this.get(t.h,0);if(e)return t},SlideList.prototype.getLeft=function(){var t={h:this.current.h-1,v:0},e=this.get(t.h,0);if(e)return t},SlideList.prototype.getNeighbors=function(t){var e=[];return e[0]=this.getLeft(),e[1]=this.getUp(),e[2]=this.getRight(),e[3]=this.getDown(),e},SlideList.prototype.getNext=function(){var t,e={h:this.current.h,v:this.current.v+1},i={h:this.current.h+1,v:0},n=this.get(e.h,e.v);return n?e:(t=this.get(i.h,0))?i:void 0},SlideList.prototype.next=function(){var t=this.getNext();t&&this._set(t)},SlideList.prototype.previous=function(){var t,e={h:this.current.h,v:this.current.v-1},i={h:this.current.h-1,v:0},n=this.get(e.h,e.v);n?this._set(e):(t=this.getType(i.h),"item"===t?this._set(i):"list"===t&&(i.v=this.list[i.h].length-1,this._set(i)))},SlideList.prototype.gotoFirst=function(){this._set({h:0,v:0})},SlideList.prototype.gotoLast=function(){this._set({h:this.list.length-1,v:0})},SlideList.prototype.append=function(t){this.list.push(t)},SlideList.prototype.prepend=function(t){this.list.unshift(t),this._set({h:this.current.h+1,v:0})},SlideList.prototype.insert=function(t,e){this.getType(e.h);this.list.splice(e.h,0,t),e.h<=this.current.h&&this._set({h:this.current.h+1,v:0})},SlideList.prototype.insertNested=function(t,e){var i=this.getType(e.h);"list"===i&&"string"==typeof t&&(this.list[e.h].splice(e.v,0,t),e.h===this.current.h&&e.v<=this.current.v&&this._set({h:e.h,v:this.current.v+1}))},SlideList.prototype.replace=function(t,e){var i,n;"string"==typeof t?(i=t,t=this.getIndex(t)):i=this.get(t.h,t.v),n=this.getType(t.h),"list"===n&&"string"==typeof e?this.list[t.h].splice(t.v,1,e):"item"!==n&&"list"!==n||this.list.splice(t.h,1,e)},SlideList.prototype.remove=function(t){var e,i;"string"==typeof t?(e=t,t=this.getIndex(t)):e=this.get(t.h,t.v),i=this.getType(t.h),"list"===i&&void 0!==t.v?this.list[t.h].splice(t.v,1):"item"!==i&&"list"!==i||this.list.splice(t.h,1)},SlideList.prototype.move=function(t,e){var i,n,s,r;"string"==typeof t?(i=t,t=this.getIndex(t)):i=this.get(t.h,t.v),"string"==typeof e?(n=e,e=this.getIndex(e)):n=this.get(e.h,e.v),s=this.getType(t.h),r=this.getType(e.h),"item"===s&&"item"===r?(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list.splice(e.h,0,i)):"item"===s&&"list"===r?void 0!==e.v?(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list[e.h].splice(e.v,0,i)):(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list.splice(e.h,0,i)):"list"===s&&"item"===r?void 0!==t.v?(this.list[t.h].splice(t.v,1),this.list.splice(e.h,0,i)):(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list.splice(e.h,0,i)):"list"===s&&"list"===r&&(void 0!==e.v&&void 0!==t.v?(t.h===e.h&&t.v<e.v&&(e.v=e.v-1),this.list[t.h].splice(t.v,1),this.list[e.h].splice(e.v,0,i)):void 0===e.v&&void 0===t.v?(t.h<e.h&&(e.h=e.h-1),this.list.splice(t.h,1),this.list.splice(e.h,0,i)):void 0===e.v&&void 0!==t.v&&(this.list[t.h].splice(t.v,1),this.list.splice(e.h,0,i)))},app.model=function(){function t(t,e){var n=app.cache.get(t);e=e||function(){},n?(i(JSON.parse(n)),e()):app.util.getFile(t,function(n,s){if(n)throw new Error("Unable to fetch model "+t,n);i(JSON.parse(s)),e()})}function e(t){t=t||"local",app.model.trigger("save",{model:j,storage:t})}function i(t){if(!(t.slides&&t.structures&&t.storyboard))throw new Error("Presentation model is incorrectly formatted");j=t,app.model.trigger("set:model")}function n(){return j}function s(t){return!!j.slides[t]&&j.slides[t]}function r(t){return!!j.modules[t]&&j.modules[t]}function a(t){return j.slides[t]?j.slides[t]:!!j.modules[t]&&j.modules[t]}function o(t){return j.slides[t]?j.slides[t]:j.modules[t]?j.modules[t]:j.structures[t]?j.structures[t]:!!j.storyboards[t]&&j.storyboards[t]}function p(t){return!!j.structures[t]&&j.structures[t]}function l(t){return!t&&j.storyboard?j.storyboard:!(!j.storyboards||!j.storyboards[t])&&j.storyboards[t]}function c(t,e){if(!t)return!1;var i=p(t)||l(t);return i?i.content.indexOf(e):void 0}function d(t){return!!(j.slides[t]||j.structures[t]||j.modules[t]||j.storyboards[t])}function u(t){return!!j.slides[t]}function h(t){return!!j.structures[t]}function f(t){return!!j.storyboards[t]}function v(t){return!(!j.storyboards[t]||!j.storyboards[t].linear)}function g(t,e){j.storyboards[t]&&(j.storyboards[t].linear=e)}function m(t){var e=o(t);return!!e.shareable}function w(t){var e;j.slides[t]?e=j.slides[t]:j.structures[t]?e=j.structures[t]:j.storyboards[t]&&(e=j.storyboards[t]),e.shareable||(e.shareable={})}function y(t){var e;j.slides[t]?e=j.slides[t]:j.structures[t]?e=j.structures[t]:j.storyboards[t]&&(e=j.storyboards[t]),e.shareable&&delete e.shareable}function b(t,e){u(t)||(j.slides[t]=e)}function S(t,e){if(!e.name||!e.content)throw new Error("Name and content must be specified when adding structure");h(t)||(j.structures[t]=e)}function E(t,e){if(!e.name||!e.content)throw new Error("Name and content must be specified when adding storyboard");f(t)||(j.storyboards[t]=e)}function _(t){f(t)&&delete j.storyboards[t]}function L(t,e,i){var n=l(t)||p(t);b(e.id,e),n&&n.content.splice(i,0,e.id)}function x(t,e,i,n){var s=l(t);b(e.id,e),s&&s.content.splice(i,1,n)}function T(t,e,i){var n,s=l(t)||p(t);s&&(n=s.content,"string"==typeof n[i.h]?h(n[i.h])?(s=p(n[i.h]),s.content.splice(i.v,1)):n.splice(i.h,1):(n=n[i.h],n.splice(i.v,1)))}function k(t,e,i){var n=o(t);n&&n[e]&&(n[e]=i)}function P(t,e){var i=l(t)||p(t);i&&e&&(i.content=e,app.model.trigger("update:content",{id:t,content:e}))}var j={slides:{},modules:{},structures:{},storyboard:[],storyboards:{}};return{save:e,set:i,get:n,getSlide:s,getModule:r,getView:a,getItem:o,getStructure:p,getStoryboard:l,getSlidePosition:c,fetch:t,exist:d,hasSlide:u,hasStructure:h,hasStoryboard:f,isLinear:v,setLinear:g,isShareable:m,setShareable:w,removeShareable:y,addSlide:b,addStructure:S,addStoryboard:E,insertSlide:L,insertNested:x,removeSlide:T,update:k,updateContent:P,deleteStoryboard:_}}(),app.util.extend(app.model,app.events),app.slideshow=function(t){function e(e){var i=t.getStoryboard(e),n=i.content||[];n.length&&(B[e]={},n.forEach(function(i,n){t.hasStructure(i)&&(t.hasSlide(i)||(B[e][n]=i))}))}function i(e,i){i=i||t.getStoryboard(e);var n=i.content||[],s=n.slice(0);if(B[e]={},i)s.forEach(function(i,n){t.hasStructure(i)&&(t.hasSlide(i)||(s.splice(n,1,t.getStructure(i).content.slice(0)),B[e][n]=i))}),R[e]=new SlideList(s),app.dom.add(e,app.dom.get("wrapper")),app.dom.trigger("new:elements",{views:[{id:e,parent:"presentation"}]});else{if(i=t.getItem(e),!i)throw new Error('Not able to find content with id "'+e+'"');i.content?R[e]=new SlideList(i.content):R[e]=new SlideList([e])}if(R[e])return R[e]}function n(e){var n,s,r={},a={},o=b(e),c=o.slideshow,d=o.chapter,u=o.slide,h={h:0,v:0},f=!1;c!==F&&(s=app.view.get(F),f=!0,s&&s.onExit&&s.onExit(),app.slideshow.trigger("unload",{id:F})),F&&(r={index:l(),id:p(),classes:["present","past"]}),R[c]||i(c),R[c]&&(F=c,u&&!d?h=l(u):d&&!u?h.h=y(d,c):d&&u&&(t.isLinear(c)?h=l(u):(h.h=y(d,c),h.v=t.getSlidePosition(d,u),h.v=h.v>-1?h.v:0)),R[c].goTo(h),a={index:l(),id:p(),classes:["past future","present"]},f&&(app.slideshow.trigger("load",{id:c}),n=app.view.get(c),n&&n.onEnter&&n.onEnter()),app.slideshow.trigger("update:current",{current:a,prev:r}))}function s(t){n(t)}function r(t){var t=t||F;if(t)return R[t]}function a(t){var e=l();R[t.id]&&(i(t.id),g({h:0,v:0},e))}function o(){if(F)return F}function p(t,e){if(F)return R[F].get(t,e)}function l(t){if(F)return R[F].getIndex(t)}function c(){if(F)return R[F].list.length}function d(){if(F)return R[F].size()}function u(t){if(F)return R[F].getType(t)}function h(t,e){return JSON.stringify(t)===JSON.stringify(e)}function f(t,e,i){var n="",s="";return i||t.h===e.h&&(t.v>0||e.v>0)&&(n+="stack"),h(e,t)?(s+=" past future archived",n+=" present"):t.h<e.h?(s+=" past present stack archived",n+=" future"):t.h===e.h&&t.v<e.v?(s+=" past present archived",n+=" future"):(s+=t.h===e.h?" past present archived":" present future stack archived",n+=" past"),[s,n]}function v(t){var e=R[F].getNeighbors(),i=[],n=app.slideshow.getIndex(),s=R[F].getIndex(t.prevId),r=app.model.isLinear(F);e.forEach(function(e){var a,o;e&&!h(s,e)&&(a=R[F].get(e.h,e.v),o={index:e,id:a,classes:f(n,e,r)},a!==t.id&&i.push(o))}),app.slideshow.trigger("load:neighbors",{updates:i})}function g(t,e){var i,n,s=app.model.isLinear(F);i={index:t,id:R[F].get(),classes:f(t,t,s)},e&&(n={index:e,id:R[F].get(e.h,e.v),classes:f(t,e,s)}),app.slideshow.trigger("update:current",{current:i,prev:n})}function m(){var t=F,e=B[F][l().h]||null;return e&&(t+="/"+e),t+="/"+R[F].get()}function w(t,e,i){var n,s,i=i||F,r=app.model.isLinear(i);if(!R[i])throw new Error("Slideshow is not initialized. Use 'app.slideshow.init(id)' to initialize.");s=l(),r&&("right"===t&&(t="next"),"left"===t&&(t="previous")),R[i][t].apply(R[i],e),n=l(),g(n,s),R[i].isEqual.apply(R[i],[s,n])?("next"!==t&&"right"!==t||app.slideshow.trigger("slideshow:end",{id:i}),"down"===t&&app.slideshow.trigger("chapter:end",{id:i}),"previous"!==t&&"left"!==t||app.slideshow.trigger("slideshow:start",{id:i}),"up"===t&&app.slideshow.trigger("chapter:start",{id:i})):app.slideshow.trigger("navigate")}function y(e,i){if(!e)return-1;var i=i||F,n=t.getStoryboard(i);return n?n.content.indexOf(e):-1}function b(e){e=e||app.getPath();var i,n,s,r=e.split("/");return""===r[0]&&r.splice(0,1),i=r[0],r[2]?(n=r[1],s=r[2]):r[1]?t.hasStructure(r[1])&&!t.hasSlide(r[1])?(n=r[1],s=null):(n=null,s=r[1]):(n=null,s=null),{slideshow:i,chapter:n,slide:s}}function S(e){if(!e)return!1;var i=!0,n=b(e);return n.slideshow?(t.hasStoryboard(n.slideshow)||(i=!1),t.hasSlide(n.slideshow)&&(i=!0)):i=!1,n.chapter&&!t.hasStructure(n.chapter)&&(i=!1),n.slide&&!t.hasSlide(n.slide)&&(i=!1),i}function E(t,e,i){var n,s,i=i||F,r={h:0,v:0};if(e){if(n=y(e,i),n<0)return!1;if(r.h=n,s=R[i].list[n].indexOf(t),s<0)return!1;r.v=s}else if(s=R[i].getIndex(t))r=s;else{if(n=y(t,i),n<0)return!1;r.h=n}return w("goTo",[r],i),!0}function _(t,e){w(t,[],e)}function L(){_("next")}function x(){_("previous")}function T(){_("left")}function k(){_("right")}function P(){_("up")}function j(){_("down")}function I(){_("gotoFirst")}function N(){_("gotoLast")}function q(t,e,i){var i=i||F;R[i]&&R[i][t].apply(R[i],e)}function A(t,e){q("append",[t],e)}function M(t,e){q("prepend",[t],e)}function O(t,e,i){q("insert",[t,e],i)}function C(t,e,i){q("insertNested",[t,e],i)}function $(t,e,i){q("move",[t,e],i)}function H(t,e,i){q("replace",[t,e],i)}function z(t,e){q("remove",[t],e),p()?update({index:l(),id:p(),classes:["past future","present"]}):x()}if(!t)throw new Error("app.model module is required for app.slideshow");var s,R={},F="",B={};return app.listenTo(app.model,"update:content",a),app.on("enter:element",v),{init:i,load:s,__load__:n,inspect:r,getId:o,get:p,getIndex:l,getPath:m,getLength:c,getSize:d,getType:u,resolve:b,pathExist:S,updateChapterMap:e,goTo:E,step:_,next:L,prev:x,left:T,right:k,up:P,down:j,first:I,last:N,prepend:M,append:A,insert:O,insertNested:C,move:$,remove:z,replace:H}}(app.model),app.util.extend(app.slideshow,app.events),app.dom=function(t,e,i){function n(t){return t&&T[t]?T[t]:t?void 0:T}function s(t,e){e&&!T[t]&&(T[t]=e)}function r(){return P}function a(t){P=t}function o(t,e,i){var n=[];return t?(n=t.className.split(" "),e.forEach(function(t){var e=n.indexOf(t);e>-1&&n.splice(e,1)}),i.forEach(function(t){var e=n.indexOf(t);e===-1&&t&&n.push(t)}),n):[]}function p(){var t=app.slideshow.get(),e=O?O.id:null;M&&M.id===t||(O=M||null,M=T[t],$&&clearTimeout($),P.push(t),app.dom.trigger("element:enter",{id:t,prevId:e}),app.trigger("enter:element",{id:t,prevId:e}))}function l(t){$&&clearTimeout($),$=setTimeout(function(){p()},q)}function c(t){return new Promise(function(n,s){var r,a=t.id,o=t.model||{},p=t.type||"slide",l="",c=null,h=null,f=app.registry.get(a)||{},v=e.get("lazy");T[t.id]&&n(T[t.id]);var g=function(t){if(t&&"<"===t.trim().charAt(0)||n(null),app.lang){var e="module"===p?I:j;e=e.replace("<id>",a)+"translations/"+app.lang+".json";var i=app.cache.get(e);i&&(t=app.template(t,JSON.parse(i)))}else H&&(t=H(t));if(h=z.parse(t),c=h.querySelector("#"+a)||h,!c.tagName&&(c=document.createElement("article"),c.setAttribute("id",a),"slide"===p&&c.classList.add("slide"),c.appendChild(h),c.querySelector("title")))return console.error("Could not get template for "+a),void n(null);if(i){i=JSON.parse(i);var s=c.querySelectorAll("[data-ag-local]");app.util.toArray(s).forEach(function(t){var e=t.getAttribute("data-ag-local");i[e]&&(t.innerHTML=i[e])})}n(c)};f.hasOwnProperty("template")?g(f.template):(f.hasOwnProperty("templateUrl")?l=f.templateUrl:o.files&&o.files.templates&&(l=o.files.templates[0],/\.html$/.test(l)||(l=l.split("."),l[l.length-1]="html",l=l.join("."))),app.cache.exist(l)?g(app.cache.get(l)):l?i.getFile(l,function(t,e){t||!e?("slide"===p&&(c=document.createElement("div"),c.id=a,c.classList.add("slide"),c.innerHTML="<h2>Missing template: "+l+"</h2>"),n(c)):v?g(e):(r=u([{id:a}],!0),r.length?d(r).then(function(){g(e)}):g(e))}):n(null))})}function d(t){return new Promise(function(e,i){t.reduce(function(t,e){return t.indexOf(e)<0&&t.push(e),t},[]);head.load(t,function(){e()})})}function u(t,i){var n=[];return i=i||e.get("lazy"),i&&t.forEach(function(t){var e=t.id;if(t.getAttribute&&(e=t.getAttribute("data-module")||t.getAttribute("data-partial")),!k[e]){var i=app.model.getView(e)||null,s=[];i&&i.files&&(i.files.styles=i.files.styles||[],i.files.scripts=i.files.scripts||[],s=s.concat(i.files.styles),s=s.concat(i.files.scripts)),n=n.concat(s)}}),n}function h(t){return new Promise(function(e,i){var n=t.getAttribute("data-module")||t.getAttribute("data-partial"),s=app.model.getView(n),r=n+"_"+(new Date).getTime(),a=t.id||r,o=t.hasAttribute("data-module")?"module":"slide";c({id:n,model:s,type:o}).then(function(i){i&&(i.id&&i.removeAttribute("id"),t.appendChild(i)),t.id=a,T[a]=t,e({id:a,moduleId:n,el:i})},function(i){t.id=a,T[a]=t,e({id:a,moduleId:n,el:null})})})}function f(t){var e=Array.prototype.slice.call(t.querySelectorAll("[data-module]")),i=Array.prototype.slice.call(t.querySelectorAll("[data-partial]")),n=e.concat(i);return n}function v(t,e){var i,n=f(t);n.length&&(i=u(n),i.length?d(i).then(function(){n.forEach(function(t){h(t).then(function(t){t.el&&v(t.el,t.id),app.dom.trigger("new:elements",{views:[{id:t.id,scriptId:t.moduleId,parent:e,el:t.el}]})})})}):n.forEach(function(t){h(t).then(function(t){t.el&&v(t.el,t.id),app.dom.trigger("new:elements",{views:[{id:t.id,scriptId:t.moduleId,parent:e,el:t.el}]})})}))}function g(t,e){var i=n(t);e=e||T.slides,i&&(e.appendChild(i),app.dom.trigger("new:elements",{views:[{id:t}]}))}function m(t,e){e=e||T.slides;var i=T[t]||null;i&&e.removeChild(i),T[t]=null,k[t]=!1}function w(t){T[t]&&T[t].classList.add("archived")}function y(t,e,i){e=e||!1,i=i||T.slides,S(t).then(function(t){b(t.elements,t.views,e,i)})}function b(t,e,i,n){n.appendChild(t),app.dom.trigger("new:elements",{views:e}),i&&(E(),$&&clearTimeout($),$=setTimeout(function(){p()},q))}function S(t){return new Promise(function(e,i){var n=document.createDocumentFragment(),s=0,r=t.length,a=[],p=u(t)||[],l=function(){s+=1,s===r&&(p.length?d(p).then(function(){e({elements:n,views:a})}):e({elements:n,views:a}))},g=function(t,e){var i=f(t);i.length&&(r+=i.length,p=p.concat(u(i)),i.forEach(function(t){h(t).then(function(t){t.el&&v(t.el,t.id),a.push({id:t.id,scriptId:t.moduleId,parent:e}),l()},function(){l()})}))};t.forEach(function(t){var e=app.model.getSlide(t.id),i=[];k[t.id]?(T[t.id]&&t.classes&&(i=o(T[t.id],t.classes[0].split(" "),t.classes[1].split(" ")),T[t.id].className=i.join(" ")),l()):(k[t.id]=!0,c({id:t.id,model:e,type:"slide"}).then(function(e){return e?(t.classes&&(i=o(e,t.classes[0].split(" "),t.classes[1].split(" ")),e.className=i.join(" ")),T[t.id]=e,g(e,t.id),n.appendChild(e),a.push({id:t.id,parent:"presentation"}),void l()):new Error("Not able to get element for "+t.id)},function(e){l(),console.log("Not able to get element for",t.id)}))})})}function E(t){var t=t||app.slideshow.get(),e=T[t],i=e.getAttribute("data-state");C&&C.split(" ").forEach(function(t){document.documentElement.classList.remove(t)}),i&&(C=i,i.split(" ").forEach(function(t){document.documentElement.classList.add(t)}))}function _(t){var e=[];T[t.current.id]||y([t.current],!0);var i=function(t,e,i,n){if(!n){t.setAttribute("data-incorrect","ultra");var s=function(t){t.classList.contains("past")&&(t.classList.remove("past"),t.classList.add("future"))},r=function(t){t.classList.contains("future")&&(t.classList.remove("future"),t.classList.add("past"))},a=function(t){t.classList.contains("stack")||t.classList.add("stack")},o=function(t){t.classList.contains("stack")&&t.classList.remove("stack")};i.h>e.h?(o(t),s(t)):i.h<e.h?(o(t),r(t)):i.v<e.v?(a(t),r(t)):i.v>e.v&&(a(t),s(t))}},n=function(){l(t.current.id),e=o(T[t.current.id],t.current.classes[0].split(" "),t.current.classes[1].split(" ")),T[t.current.id].className=e.join(" "),E(t.current.id)},s=function(t){t?document.getElementById("presentation").setAttribute("data-transition-speed",app.config.get("transitionSpeed")):document.getElementById("presentation").setAttribute("data-transition-speed","ultra")};if(T[t.prev.id]&&(s(!0),e=o(T[t.prev.id],t.prev.classes[0].split(" "),t.prev.classes[1].split(" ")),T[t.prev.id].className=e.join(" ")),M&&T[t.current.id]){var r=new Date,a=T[t.current.id];if(r-A<400)s(!1),x&&clearTimeout(x),n();else{var c=t.prev.id==t.current.id;i(a,t.prev.index,t.current.index,c),x=setTimeout(function(){s(!0),a.removeAttribute("data-incorrect"),n()},20)}A=r}else T[t.current.id]&&($&&clearTimeout($),p(),E(t.current.id))}function L(t){var e,i=[],n=!1,s=t.updates.length,r=function(t){var e=T[t.id],n=[];e?(n=o(e,t.classes[0].split(" "),t.classes[1].split(" ")),e.className=n.join(" ")):(i.push(t),P.push(t.id))};for(e=0;e<s;e++)r(t.updates[e]);y(i,n)}if(!t||!e||!i)throw new Error("app.dom requires following modules to be loaded: app.slideshow, app.config, app.util");app.listenTo(app.slideshow,"update:current",function(t){_(t)}),app.listenTo(app.slideshow,"load:neighbors",function(t){L(t)});var x,T=e.get("cachedElements"),k={},P=[],j=e.pluck("paths","slides")||"slides/<id>/",I=e.pluck("paths","modules")||"modules/<id>/",N=e.get("transitionSpeed")||"default",q=800,A=(document.createElement("div"),new Date);T||(T={},T.theme=document.querySelector("#theme"),T.wrapper=document.querySelector(".accelerator"),T.slides=document.querySelector(".accelerator .slides"));var M,O,C,$;"default"!==N&&("fast"===N?q=300:"slow"===N&&(q=1100));var H=(function(){var t=document.createElement("div");return void 0!==t.style.transform?"transform":void 0!==t.style.webkitTransform?"-webkit-transform":void 0!==t.style.MozTransform?"-moz-transform":void 0!==t.style.msTransform?"-ms-transform":void 0!==t.style.OTransform?"-o-transform":"transform"}(),function(){var t=app.registry.get("templateParser");return t}()),z=function(){function t(t,e){if("string"!=typeof t)throw new TypeError("String expected");e||(e=document);var i=/<([\w:]+)/.exec(t);
if(!i)return e.createTextNode(t);t=t.replace(/^\s+|\s+$/g,"");var s=i[1];if("body"==s){var r=e.createElement("html");return r.innerHTML=t,r.removeChild(r.lastChild)}var a=n[s]||n._default,o=a[0],p=a[1],l=a[2],r=e.createElement("div");for(r.innerHTML=p+t+l;o--;)r=r.lastChild;if(r.firstChild==r.lastChild)return r.removeChild(r.firstChild);for(var c=e.createDocumentFragment();r.firstChild;)c.appendChild(r.removeChild(r.firstChild));return c}var e=document.createElement("div");e.innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';var i=!e.getElementsByTagName("link").length;e=void 0;var n={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:i?[1,"X<div>","</div>"]:[0,"",""]};return n.td=n.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],n.option=n.optgroup=[1,'<select multiple="multiple">',"</select>"],n.thead=n.tbody=n.colgroup=n.caption=n.tfoot=[1,"<table>","</table>"],n.text=n.circle=n.ellipse=n.line=n.path=n.polygon=n.polyline=n.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"],{parse:t}}();return{get:n,add:s,getElement:c,getHistory:r,setHistory:a,load:S,insert:y,remove:m,archive:w,render:g,resolveModules:v,parse:z.parse}}(app.slideshow,app.config,app.util),app.util.extend(app.dom,app.events),app.slide=app.view=app.module=function(t){function e(t,e){return Object.hasOwnProperty.call(t,e)}function i(t,e){var i=t?t[e]:void 0;return"function"==typeof i?t[e]():i}function n(t){var t=t||T;if(t)return k[t]}function s(t){if(!t)throw new Error("Need to supply slide id when creating new instance");var e=app.model.getView(t);if(e)return e}function r(t){t.views.length&&t.views.forEach(function(t){p(t)})}function a(t){return new Promise(function(e,i){k[t]?e(k[t]):app.dom.load([{id:t,classes:["present","future"]}]).then(function(t){e(t.views[0])})})}function o(t,e){var i,n=k[e.id];n&&(e.parent&&(i=k[e.parent],i||(i=k.presentation),n.states&&i._injectStates(e.id,n.states),n.parentId=e.parent,n.parent=i,i.children&&i.children.push(e.id)),n.onRender&&n.onRender(t),app.slide.trigger("slide:render",{id:e.id}))}function p(e){var i,n,s=t.get(e.id)||null,r={},a=e.scriptId||e.id;if(!k[e.id]){if(s||(s=document.getElementById(e.id)),r.el=s,r.id=e.id,r.scriptId=a,e.el&&(r.$el=e.el),n=app.registry.get(a)||{},n.children=[],n&&app.util.extend(r,n),i=_.extend(r),k[e.id]=new i,k[e.id].publish){k[e.id].props=app.util.extend({},k[e.id].publish);for(prop in k[e.id].props)k[e.id].props[prop]&&k[e.id].props[prop].push&&(k[e.id].props[prop]=k[e.id].props[prop][0])}else k[e.id].props={};app.util.toArray(s.attributes).forEach(function(t){var i=t.name.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()});k[e.id].props[i]=t.value||!0})}window.setTimeout(function(){o(s,e)})}function l(e,i){var n=e.id,s=k[n]||{},r=t.get(n)||null,i=i||!1;return T&&!i&&c(T),s&&(0===s._state&&r.classList.add("state-default"),s.onEnter&&s.onEnter(r),s.children&&s.children.length&&s.children.forEach(function(t){l({id:t},!0)})),i||(T=n,app.slide.trigger("slide:enter",e)),s}function c(e,i){var n=k[e]||{},s=t.get(e)||null,i=i||!1;return n&&(n.onExit&&n.onExit(s),n.children&&n.children.length&&n.children.forEach(function(t){c(t,!0)})),i||app.slide.trigger("slide:exit",{id:e}),n}function d(){var t;if(T)return t=k[T],!!t&&t.next()}function u(){var t;if(T)return t=k[T],!!t&&t.previous()}function h(t){var e;T&&(e=k[T],e.goTo(t))}function f(t){var e;T&&(e=k[T],e.toggle(t))}function v(){var t;T&&(t=k[T],t.reset())}function g(t,e){var i=k[t]||null;i&&(e||i.el.classList.contains("archived"))&&(i.children&&i.children.forEach(function(t){app.slide.remove(t,!0)}),i._removeElement())}var m=/^\s*</,w="undefined"!=typeof Element&&Element.prototype||{},y=w.addEventListener||function(t,e){return this.attachEvent("on"+t,e)},b=w.removeEventListener||function(t,e){return this.detachEvent("on"+t,e)},S=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},E=w.matches||w.webkitMatchesSelector||w.mozMatchesSelector||w.msMatchesSelector||w.oMatchesSelector||function(t){var e=(this.parentNode||document).querySelectorAll(t)||[];return~S(e,this)};app.extend=function(t,i){var n,s=this;n=t&&e(t,"constructor")?t.constructor:function(){return s.apply(this,arguments)},app.util.extend(n,s,i);var r=function(){this.constructor=n};return r.prototype=s.prototype,n.prototype=new r,t&&app.util.extend(n.prototype,t),n.__super__=s.prototype,n};var _=function(t){t&&Object.keys(t).forEach(function(e){x.indexOf(e)!==-1&&(this[e]=t[e])},this),this._elements={},this._ensureElement(),this._createStateMap(),this.initialize.apply(this,arguments)},L=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];if(app.util.extend(_.prototype,app.events,{initialize:function(){},_state:0,states:[],rotate:!1,_domEvents:[],$:function(t){var e="querySelectorAll";return this._elements[t]?this._elements[t]:("#"===t[0]&&(e="querySelector"),"<"===t[0]?app.dom.parse(t):(this._elements[t]=this.el[e](t),this._elements[t]))},getState:function(){return this.states[this._state-1]?this.states[this._state-1]:null},addState:function(t){t.id&&this.states.push(t),this._createStateMap()},stateIs:function(t){var e=this.states[this._state-1];return!(!e||e.id!==t)},stateIsnt:function(t){var e=this.states[this._state-1];return!e||e.id!==t},next:function(){return this._setState(this._state+1)},previous:function(){return this._setState(this._state-1)},goTo:function(t,e){var i;"string"==typeof t?(i=this._stateMap[t],i>0&&this._setState(i,e)):this._setState(t,e)},getIndex:function(t){return t?this._stateMap[t]?this._stateMap[t]:-1:this._state},reset:function(){this._setState(0)},toggle:function(t){var e=this._stateMap[t];e===this._state?this.reset():this.goTo(t)},_setState:function(t,e){var i,n=this._state,s={},r=this.states[t-1];if(t!==n)return this.states.length&&(r||0===t)?(i=r||{id:null},n&&(s=this.states[n-1],this.el.classList.remove("state-"+s.id),s.onExit&&s.onExit.bind(this)(i.id),0===t&&(this.el.classList.add("state-default"),this.trigger("reset",{id:s.id,next:i.id,view:this.id}),app.slide.trigger("reset",{id:s.id,next:i.id,view:this.id}))),this._state=t,0!==t&&(s.id=s.id||null,this.el.classList.remove("state-default"),this.el.classList.add("state-"+i.id),i.onEnter&&i.onEnter.bind(this)(s.id,e),this.trigger("state:enter",{id:i.id,previous:s.id,view:this.id,data:e}),app.slide.trigger("state:enter",{id:i.id,previous:s.id,view:this.id,data:e})),!0):!(!this.rotate||t!==this.states.length+1)&&(this._setState(1),!0)},_injectStates:function(t,e){var i=this._stateMap[t],n=this,s=1;i&&(e.forEach(function(e,r){n.states.splice(i+r-1,s,{id:t+"-"+e.id,onEnter:function(e,i){var n=app.slide.get(t);n.goTo(r+1)},onExit:function(e,i){var n=app.slide.get(t);n.reset()}}),0===r&&(s=0)}),this._createStateMap())},_createStateMap:function(){var t=this;this._stateMap={},this.states.forEach(function(e,i){e.id&&(t._stateMap[e.id]=i+1),e.include&&(t._stateMap[e.include]=i+1)})},_removeElement:function(){var e=this;this.onRemove&&this.onRemove(this.el),this.undelegateEvents(),Object.keys(this._elements).forEach(function(t){e._elements[t]=null}),t.remove(this.id,this.el.parentNode),k[this.id]=null},_setElement:function(t){if("string"==typeof t)if(m.test(t)){var e=document.createElement("div");e.innerHTML=t,this.el=e.firstChild}else this.el=document.querySelector(t);else this.el=t},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setAttributes:function(t){for(var e in t)e in this.el?this.el[e]=t[e]:this.el.setAttribute(e,t[e])},delegate:function(t,e,i){"function"==typeof e&&(i=e,e=null);var n=this.el,s=e?function(t){for(var s=t.target||t.srcElement;s&&s!=n;s=s.parentNode)E.call(s,e)&&(t.delegateTarget=s,i(t))}:i;return y.call(this.el,t,s,!1),this._domEvents.push({eventName:t,handler:s,listener:i,selector:e}),s},delegateEvents:function(t){if(!t&&!(t=i(this,"events")))return this;this.undelegateEvents();for(var e in t){var n=t[e];"function"!=typeof n&&(n=this[t[e]]?this[t[e]]:function(){});var s=e.match(L);this.delegate(s[1],s[2],n.bind(this))}return this},undelegate:function(t,e,i){if("function"==typeof e&&(i=e,e=null),this.el)for(var n=this._domEvents.slice(),s=0,r=n.length;s<r;s++){var a=n[s],o=!(a.eventName!==t||i&&a.listener!==i||e&&a.selector!==e);o&&(b.call(this.el,a.eventName,a.handler,!1),this._domEvents.splice(S(n,a),1))}return this},undelegateEvents:function(){if(this.el){for(var t=0,e=this._domEvents.length;t<e;t++){var i=this._domEvents[t];b.call(this.el,i.eventName,i.handler,!1)}this._domEvents.length=0}return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(this.el)this.setElement(i(this,"el"));else{var t=app.util.extend({},i(this,"attributes"));this.id&&(t.id=i(this,"id")),this.className&&(t["class"]=i(this,"className")),this.setElement(this._createElement(i(this,"tagName"))),this._setAttributes(t)}}}),_.extend=app.extend,!t)throw new Error("app.dom module is required for app.slide");var T,k={};return app.listenTo(t,"new:elements",r),app.listenTo(t,"element:enter",l),{get:n,getInstance:s,load:a,remove:g,views:k,enter:l,exit:c,next:d,prev:u,goTo:h,toggle:f,reset:v}}(app.dom),app.util.extend(app.slide,app.events),app.history=function(t){function e(t){a||(r=t?t+"&":"?",app.listenTo(app.slide,"slide:enter",s),app.listenTo(app.slide,"state:enter",i),app.listenTo(app.slide,"reset",n),a=!0)}function i(t){var e=app.slide.get();if(e&&e.stateIs(t.id)){var i={stateId:t.id,path:app.getPath()};window.history.replaceState(i,"",r+"path="+i.path+"&state="+t.id)}}function n(t){var e={stateId:"default",path:app.getPath()};window.history.replaceState(e,"",r+"path="+e.path)}function s(t){var e=app.slide.get().getState(),i={stateId:"default",path:app.getPath()};t.view&&(e=t);var n=r+"path="+i.path;e&&(i.stateId=e.id,n+="&state="+e.id),window.history.pushState(i,"",n)}if(!t)throw new Error("app.slide module is required for app.history");var r,a=!1;return window.addEventListener("popstate",function(t){t.state&&t.state.path!==app.getPath()&&app.goTo(t.state.path)}),{init:e,setStates:i}}(app.slide),app.template=function(){"use strict";var t={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},e=/.^/,i={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"};for(var n in i)i[i[n]]=n;var s=/\\|'|\r|\n|\t|\u2028|\u2029/g,r=function(n,r,a){t.variable=a;var o="__p+='"+n.replace(s,function(t){return"\\"+i[t]}).replace(t.escape||e,function(t,e){return"'+\n_.escape("+unescape(e)+")+\n'"}).replace(t.interpolate||e,function(t,e){return"'+\n("+unescape(e)+")+\n'"}).replace(t.evaluate||e,function(t,e){return"';\n"+unescape(e)+"\n;__p+='"})+"';\n";t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+o+"return __p;\n";var p=new Function(t.variable||"obj",o);if(r)return p(r);var l=function(t){return p.call(this,t)};return l.source="function("+(t.variable||"obj")+"){\n"+o+"}",l};return window._&&window._.template?window._.template:(window._={template:r},r)}(),app.msg=function(){function t(){var t=app.dom.get("wrapper"),e=document.createElement("ul");return e.classList.add("app-messages"),t.appendChild(e),e}function e(t,e){var i='<div class="notice-msg">'+e+"</div>";return i+='<div class="notice-accept"><button class="pure-button ag-button-success" onclick="app.msg.accept(\''+t+"')\">Got it!</button></div>"}function i(t,e){var i='<div class="confirm-msg">'+e+"</div>";return i+='<div class="confirm-cancel"><button class="pure-button ag-button-warning" onclick="app.msg.cancel(\''+t+"')\">Cancel</button></div>",i+='<div class="confirm-confirm"><button class="pure-button ag-button-success" onclick="app.msg.accept(\''+t+"')\">Confirm</button></div>"}function n(t){var e='<div class="notice-msg">'+t+"</div>";return e+='<div class="notice-accept"><button class="pure-button ag-button-success" onclick="app.msg.reload()">Refresh</button></div>'}function s(t){var e=document.getElementById("app-msg-"+t);app.msg.trigger("msg:confirmed",{id:t}),window.localStorage.setItem(t,!0),e&&u(e)}function r(t){var e=document.getElementById("app-msg-"+t);app.msg.trigger("msg:cancelled",{id:t}),e&&u(e)}function a(){window.location.reload()}function o(t,i){var n=window.localStorage.getItem(t);n||(i=e(t,i),h(t,i))}function p(t){var e="confirm_"+(new Date).getTime();return t=i(e,t),h(e,t),e}function l(t){t=n(t),f(t)}function c(t){f(t,"alert")}function d(t){f(t)}function u(t){t.classList.remove("active-msg"),setTimeout(function(){v.removeChild(t)},500)}function h(e,i,n){var s=document.createElement("li");s.id="app-msg-"+e,n&&s.classList.add(n+"-msg"),s.innerHTML=i,v||(v=t()),v.insertBefore(s,v.firstChild),setTimeout(function(){s.classList.add("active-msg")},100)}function f(e,i){var n=document.createElement("li");i&&n.classList.add(i+"-msg"),n.innerHTML=e,v||(v=t()),v.insertBefore(n,v.firstChild),setTimeout(function(){n.classList.add("active-msg")},100),setTimeout(function(){n.classList.remove("active-msg")},4e3),setTimeout(function(){v.removeChild(n)},4500)}var v;return{alert:c,notice:o,send:d,accept:s,confirm:p,update:l,cancel:r,reload:a}}(),app.util.extend(app.msg,app.events),app.$=function(){function t(t){t=t||"builder";var i="agnitio-info.js",n=window.location.pathname.match(/\/presentations\/([a-z0-9]+)\/index.html/);l=document.createElement("div"),l.setAttribute("id","builder-plugins"),document.body.appendChild(l),n&&n.length&&(p=n[1]),p&&(i="../viewer/js/agnitio-info.js"),window.CKEDITOR_BASEPATH="ckeditor/",a="https:"===window.location.protocol?"prod":"dev","prod"===a&&/sqa/.test(window.location.host)&&(a="qa"),head.load([i],function(){var i;window.agnitioInfo&&("Builder Online"===window.agnitioInfo.applicationName?i=window.agnitioInfo.socket[a]+"socket.io/socket.io.js":"Builder CLI"===window.agnitioInfo.applicationName&&(i=["http://"+(location.host||"localhost")+window.agnitioInfo.socket[a]+"socket.io/socket.io.js"],"develop"===t&&i.push("http://"+(location.host||"localhost").split(":")[0]+":35729/livereload.js")),i&&head.load(i,function(){e(t)}))})}function e(t){var e,i="?mode="+t;window.agnitioInfo.socket[a].length>1&&(e=window.agnitioInfo.socket[a]),app.lang&&(i+="&lang="+app.lang),o=app.$.socket=window.io(e),app.$.send=function(t,e){e=e||{},app.$.session&&app.$.session.user&&(e.user=app.$.session.user),p&&(e.pid=p),c&&(e.bundle=c),o.emit(t,e)},"builder"===t&&app.$.send("init:builder"),app.history.init(i),o.on("server:error",function(t){app.msg.alert(t.msg)}),o.on("server:confirmation",function(t){app.msg.alert(t.msg)}),o.on("load:plugins",function(t){app.$.trigger("load:plugins",t)}),o.on("initialize:builder",function(t){app.$.isBuilder=!0,document.childNodes[1].classList.add("mode-builder"),t.basePath&&(window.CKEDITOR_BASEPATH=t.basePath),t.tmpPath&&(app.$.tmpPath=t.tmpPath),app.$.trigger("load:plugins",t)})}function i(t){return new Promise(function(e,i){var n=app.registry.get(t);l=l||document.body,n&&!app.$[t]?(app.dom.insert([{id:t}],!1,l),e(!0)):app.$[t]?e(app.$[t]):i("No plugin named "+t+" is registered")})}function n(t,e){ag&&ag.msg.send({name:t,value:e})}function s(){var t={presentation:{styles:["accelerator/css/styles.css","templates/master/**/*.{css,styl}","modules/**/*.{css,styl}","slides/**/*.{css,styl}","shared/**/*.{css,styl}"],scripts:["accelerator/lib/head.min.js","accelerator/js/init.js","templates/master/**/*.{js,coffee}","modules/**/*.{js,html,json,coffee,md,jade}","slides/**/*.{js,html,json,coffee,md,jade}","slides/**/translations/*.json","shared/**/*.{js,html,json,coffee,md,jade}","config.json","presentation.json","references.json"]}},e=app.config.get("bundle")||t;return e}function r(t){t.data&&("string"==typeof t.data&&(t.data=JSON.parse(t.data)),app.$.trigger(t.data.name,t.data))}var a,o,p,l,c=s();return window.addEventListener("message",r,!1),{isBuilder:!1,init:t,load:i,send:n}}(),app.util.extend(app.$,app.events),app.$.on("load:plugins",function(t){t.files&&head.load(t.files,function(){setTimeout(function(){app.$.trigger("plugins:ready")},500)})}),app.$.on("navigate",function(t){t.data&&t.data.path&&app.goTo(t.data.path)}),function(){function t(t){var e=location.hash.substring(1);app.goTo(e)}function e(t){var e=(document.activeElement,!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable)),i=app.config.get("keyboard");if(!(e||t.shiftKey&&32!==t.keyCode||t.altKey||t.ctrlKey||t.metaKey)){if(app.isPaused&&[66,190,191].indexOf(t.keyCode)===-1)return!1;var n=!1;if(i&&"object"==typeof i)for(var s in i)if(parseInt(s,10)===t.keyCode){var r=i[s];"function"==typeof r?r.apply(null,[t]):"string"==typeof r&&"function"==typeof app[r]&&app[r].call(),n=!0}if(n===!1)switch(n=!0,t.keyCode){case 33:app.prev();break;case 34:app.next();break;case 37:app.slideshow.step("left");break;case 39:app.slideshow.step("right");break;case 38:app.slideshow.step("up");break;case 40:app.slideshow.step("down");break;case 36:app.slideshow.first();break;case 35:app.slideshow.last();break;case 32:t.shiftKey?app.prev():app.next();break;case 190:case 191:app.togglePause();break;case 70:app.fullScreen();break;default:n=!1}n&&t.preventDefault()}}function i(){document.addEventListener("swipeleft",app.slideshow.right),document.addEventListener("swiperight",app.slideshow.left),document.addEventListener("swipeup",app.slideshow.down),document.addEventListener("swipedown",app.slideshow.up)}function n(){document.removeEventListener("swipeleft",app.slideshow.right),document.removeEventListener("swiperight",app.slideshow.left),document.removeEventListener("swipeup",app.slideshow.down),document.removeEventListener("swipedown",app.slideshow.up)}function s(t){var e=app.config.get();app.model.isLinear(t.id)?(document.removeEventListener("swipeup",app.slideshow.down),document.removeEventListener("swipedown",app.slideshow.up)):e.touch&&(document.removeEventListener("swipeup",app.slideshow.down),document.removeEventListener("swipedown",app.slideshow.up),document.addEventListener("swipeup",app.slideshow.down),document.addEventListener("swipedown",app.slideshow.up))}function r(t,n){t&&document.addEventListener("keydown",e,!1),n&&i()}app.isPaused=!1,app.goTo=function(t,e){e&&app.slide.once("slide:enter",function(){app.slide.goTo(e)}),app.slideshow.load(t)},app.getPath=app.slideshow.getPath,app.addNavListeners=function(){var t=app.config.get(),e=app.slideshow.getId();r(t.keyboard,t.touch),s({id:e})},app.removeNavListeners=function(){document.removeEventListener("keydown",e,!1),n()},app.lock=function(){app.removeNavListeners(),app.trigger("locked")},app.unlock=function(){app.addNavListeners(),app.trigger("unlocked")},app.dispatchEvent=function(t,e){var i=document.createEvent("HTMLEvents",1,2),n=app.dom.get("wrapper")||document;i.initEvent(t,!0,!0),app.util.extend(i,e),n.dispatchEvent(i)},app.fullScreen=function(){var t=document.body,e=t.requestFullScreen||t.webkitRequestFullscreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullScreen;e&&e.apply(t)},app.togglePause=function(){var t=app.dom.get("wrapper");t.classList.toggle("paused"),app.isPaused=!app.isPaused,app.isPaused?n():i()},app.autoRun=function(t){setInterval(function(){app.next()},t)},app.next=function(){app.slide.next()||app.slideshow.step("next")},app.prev=function(){app.slide.prev()||app.slideshow.step("previous")},app.start=function(t,e,i,n){function a(){var a=e.get();app.queryParams&&app.queryParams.mode&&app.$.init(app.queryParams.mode),app.initialize?app.listenTo(i,"register",function(t){app.slide.enter({id:t},!0)}):(a.history&&app.history.init(),a.preload&&app.listenTo(n,"load",function(e){var i=[],n=[],s=app.slideshow.get(),r="past",a="future present";i=i.concat.apply(i,app.slideshow.inspect().list),i.forEach(function(e){var i=t.getSlide(e);i.id=i.id||e,e===s?(i.classes=["past future","present"],r="future",a="past present"):i.classes=[a,r],n.push(i)}),app.dom.insert(n)}),a.model=a.model||"presentation.json",r(a.keyboard,a.touch),app.listenTo(n,"load",s),app.model.once("set:model",function(t){var e=window.location.hash,i=(window.location.search,a.startPath||null);e&&e.length>2?i=e.replace("#",""):app.queryParams&&(app.queryParams.path&&app.slideshow.pathExist(app.queryParams.path)?i=app.queryParams.path:app.queryParams.slide&&(i=app.queryParams.slide.replace(/%2F/g,"/"))),app.start.at(i),app.dispatchEvent("ready"),app.trigger("presentation:ready"),app.dom.trigger("new:elements",{views:[{id:"presentation"}]}),a.autoSlide&&app.autoRun(a.autoSlide)}),/\.json$/.test(a.model)?t.fetch(a.model):"object"==typeof a.model?t.set(a.model):(slides=a.model.replace(/,/g," ").replace("  "," ").split(" "),t.set({slides:{},modules:{},structures:{},storyboard:["presentation"],storyboards:{presentation:{content:slides}}}))),window.ag&&window.ag.on&&(app.config.get("remote")?app.remote.setup():ag.on("registerUser",function(t){app.remote.init(t),app.remote.setup()}))}function o(e){var i,s=app.dom.get("slides"),r=app.queryParams.state||null;if(!e)if(app.model.hasStoryboard(app.env))e=app.env;else{if(i=t.getStoryboard(),!i||!i[0])throw new Error("No default storyboard or start path defined");e=i[0]}r?app.goTo(e,r):n.__load__(e),app.dom.resolveModules(app.dom.get("wrapper"),"accelerator"),s&&s.classList.remove("no-transition"),app.config.get("startPath")||app.config.set("startPath",e)}return{init:a,at:o}}(app.model,app.config,app.registry,app.slideshow),"onhashchange"in window&&(window.onhashchange=t)}();
app.register('ag-auto-menu', function() {
  var self;
  return {
    template: '<div class="menu-container"><ul class="menu"></ul></div>',
    current: '',
    fallback: '', // if no menu is built
    publish: {
      hide: false, // Should we initially hide menu?
      placement: ['top', 'bottom'], // top or bottom?
      exclude: '', // Some content that should not be in the menu?
      slideshows: '',
      binding: 77,
      trigger: ''
    },
    events: {
      "tap li": "navigate",
      "swipeleft": function(event) { event.stopPropagation(); },
      "swiperight": function(event) { event.stopPropagation(); }
    },
    states: [
      {
        id: 'hidden',
        onEnter: function() {
          if (this.props.placement === 'bottom') {
            app.util.transformElement(this.$el, 'translate(0,50px)');
          }
          else {
            app.util.transformElement(this.$el, 'translate(0,-50px)');
          }
        },
        onExit: function() {
          app.util.transformElement(this.$el, 'translate(0,0)');
        }
      }
    ],
    onRender: function(el) {
      self = this;
      self.pathLength = 2; // Default to menu of structures
      app.$.menu = this;
      if (this.props.hide) {
        this.hide();
        if (this.props.binding) {
          app.config.update('keyboard', parseInt(this.props.binding, 10), function() {
            app.$.trigger("toggle:menu");
          }) 
        }
      }
      app.$.on('toggle:menu', function() {
          this.toggle('hidden');
      }.bind(this));
      if (this.props.placement === 'bottom') el.classList.add('placement-bottom');
      // Are we using this menu with specific slideshows?
      if (this.props.slideshows) {
          this.props.slideshows.replace(/\s+/g, ''); // "one, two" => "one,two"
          this.props.slideshows = this.props.slideshows.split(',');
      }
      app.listenTo(app.slideshow, 'update:current', this.updateCurrent);
      app.listenTo(app.slideshow, 'load', function(data) {
        self.setup(data.id);
      });
      this.layout({scale: app.getScale()});
      app.on('update:layout', this.layout);
      this.setup();
    },
    hide: function() {
      this.goTo('hidden');
    },
    setup: function(id) {
     
        id = id || app.slideshow.getId();

        var slideshow = app.slideshow.resolve().slideshow;
        console.log(slideshow);
        var nope = ['default','Home-4-RUB'];
        if(nope.indexOf(slideshow)> -1)
        {
        $("nav,#footer").css("display","none");
            
        }
        else
        {
        var last_elem = $("div.icon").last();
        var picto = last_elem.find("div");

        if (slideshow == "aphinity") {
            picto.attr("id","reco");

        }else if (slideshow == "perjeta") {
          picto.attr("id","women");
        }else {
          picto.attr("id","pen-paper") ;
        }
        $("nav,#footer").css("display","");
        }




        if (!this.props.slideshows || this.props.slideshows.indexOf(id) > -1) {
            this.createLinks(id);
            this.updateCurrent();
        }
        else {
            this.removeLinks();
        }
        this.setTrigger();
    },
    setTrigger: function() {
      if (this.props.trigger) {
        var parts = this.props.trigger.split(' ');
        var e = parts[0];
        var selector = parts[1] || null;
        var el = document;
        if (selector) {
          el = document.body.querySelector(selector);
        }
        if (el) el.addEventListener(e, function() { self.toggle('hidden'); });
      }
    },
    createLinks: function(structure) {

      var list = this.$('.menu')[0];
      var structure = structure || app.slideshow.getId();

      var html = `<input type="checkbox" name="answer" id="a1">
      <label class="burger" for="a1">
        <div class="burger__item crossed">
          <div class="burger__item-line">
            <div class="tree `+structure+`"></div>  
          </div>
        </div>
      </label>
      <audio src="modules/ag-auto-menu/assets/Vol.mp3" autostart="true"  id="burger_sound" ></audio> 
      <audio src="modules/ag-auto-menu/assets/souffle_air.mp3" autostart="true"  id="burger_sound_retour" ></audio> 

      `;
      var chapter, links;
      var data = structure === 'storyboard' ? app.model.getStoryboard() : app.model.getStoryboard(structure);
      var pathPrefix = structure + '/';
      var excludedLinks = this.props.exclude.split(' ');

      if (data && data.content) {
        links = data.content;

        // If a single item in menu, let's try to dive down and get more links
        if (links.length === 1) {
          chapter = data.content[0];
          data = app.model.getStructure(chapter);
          if (data && data.content) {
            links = data.content;
            pathPrefix += chapter + '/';
            this.pathLength = 3;
          }
        }

      }

      if (!list) {
        list = document.createElement('ul');
        list.classList.add('menu');
        this.$el.appendChild(list);
      }
      else {
        list.innerHTML = '';
      }

      if (links) {
        links.forEach(function(item, i) {
          if (typeof item !== 'string') item = item[0];
          if (excludedLinks.indexOf(item) === -1) {
            var name = app.model.getItem(item).name;
            html += '<li data-goto="' + pathPrefix + item + '">' + name + '</li>';
          }
        });

        list.appendChild(app.dom.parse(html));
        this.createScroller(list);
      }
      // burgerssss
      
      
      function animBurger(){

        var checkbox = $("#a1") ;
        if(checkbox.is(":checked")) {
          $(".tree").addClass( "swing-in-top-fwd" ).removeClass( "swing-out-top-bck" );
          console.log("true");
          document.getElementById('burger_sound').play();
          document.getElementById('burger_sound').volume=0.2;


        }else {
          checkbox.prop("checked", true);
          $(".tree").addClass( "swing-out-top-bck" ).removeClass( "swing-in-top-fwd");
          setTimeout(function(){
            checkbox.prop("checked", false); 
            document.getElementById('burger_sound_retour').play();
            document.getElementById('burger_sound_retour').volume=0.2;

          },800);

        }

      }
      $("#a1").change(animBurger);

    },
    setFallback: function(html) {
        if (html) this.fallback = html;
    },
    removeLinks: function() {
      var list = this.$('.menu')[0];
      list.innerHTML = this.fallback;
    },
    /*************updateddddddd************** */
    updateCurrent: function() {
      var path = app.getPath();
      var parts = path.split('/');


      if (parts.length > 2 && self.pathLength === 2) path = parts[0] + '/' + parts[1];
      if (self.current) self.current.classList.remove('selected');
      self.current = self.el.querySelector('.menu [data-goto="' + path + '"]');
      if (self.current) self.current.classList.add('selected');

      /*************************/
      var slide = app.slideshow.resolve().slide;

      var pos = ['try_design1','NEO_DESIGN1','NEO_EFFICACY1'];
      console.log(pos);
      if(pos.indexOf(slide)> -1)
      {
        $("#posologie").css("display","");
  
      }
      else
      {
      $("#posologie").css("display","none");
      
      }

    },
    navigate: function(event) {
      var link = event.target;
      var path;

      if (link) {
        path = link.getAttribute('data-goto');
        if (path) {
          app.goTo(path);
         self.updateCurrent(); // Immediate update of menu
        }
        if (self.props.hide) app.$.trigger("toggle:menu");
      }
    },
    createScroller: function(menu) {
      // TODO: listen to window resize and update limits
      var widths = this.getWidth();
      var appWidth = app.dom.get('wrapper').getBoundingClientRect().width;
      var scrollLimit = appWidth - widths.menu;
      // No scroller necessary if menu isn't bigger than width of view
      if (scrollLimit < 0) {
        this.scroller = new Draggy(menu, {
          restrictY: true,
          limitsX: [scrollLimit, 0]
        });
      }
      else {
        this.scroller = null;
      }
    },
    getWidth: function() {
      var links = this.el.querySelectorAll('.menu li');
      var menuWidth = 0;
      var linkWidths = [];
      Array.prototype.slice.call(links).forEach(function(link) {
        var width = link.getBoundingClientRect().width;
        menuWidth += width;
        linkWidths.push(width);
      });
      return {
        menu: menuWidth,
        links: linkWidths
      }
    },
    layout: function(data) {
      // Only apply if zoom is supported
      if( typeof self.el.style.zoom !== 'undefined' && !navigator.userAgent.match( /(iphone|ipod|ipad|android)/gi ) ) {
        self.el.style.zoom = data.scale;
      }
      // Apply scale transform as a fallback
      else {
        app.util.transformElement( self.el, 'translate(-50%, -50%) scale('+ data.scale +') translate(50%, 50%)' );
      }
    }
  }
});
app.register('ag-indicators', function() {

	var self;

	return {
		publish: {
			type: ['circle', 'rectangle', 'square', 'line']
		},
		template: false,
		onRender: function(el) {
			self = this;
			app.listenTo(app.slideshow, 'load', this.build.bind(this));
			app.listenTo(app.slideshow, 'update:current', this.indicate.bind(this));
			this.el.classList.add('ag-indicators');
			if (this.props.type) this.el.classList.add('ag-indicators-' + this.props.type);
			this.build();
		},
		indicate: function() {
			var i = app.slideshow.getIndex();
			var previous = this.el.querySelector('.active');
			var current = this.el.querySelector('.indicator_' + i.h + '_' + i.v);
			if (previous) previous.classList.remove('active');
			if (current) current.classList.add('active');
			$(".ag-indicator-chapter").hide();
			$(".ag-indicator-chapter > .active").parent().show();
		},
		build: function() {
			var list = app.slideshow.inspect().list; // The raw list
			var isLinear = app.model.isLinear(app.slideshow.getId());
			var html = "";
			if (isLinear) {
				this.el.classList.add('ag-indicators-linear');
			}
			else {
				this.el.classList.remove('ag-indicators-linear');
			}
			list.forEach(function(item, i) {
				html += '<ul class="ag-indicator-chapter">';
				if (typeof item === 'string') {
					html += '<li class="indicator_' + i + '_0"></li>'
				}
				else {
					item.forEach(function(id, j) {
						html += '<li class="indicator_' + i + '_' + j + '"></li>'
					})
				}
				html += '</ul>';
			});
			this.el.innerHTML = html;
			this.indicate();
		}
	}

});
app.register("ag-overlay", function() {

  return {
    publish: {
        width: "80%",
        height: "80%",
        noBackground: false,
        noCloseBtn: false,
        content: "No content available",
        existe: false
    },
    events: {
        "tap": "close"
    },
    states: [
        {
            id: "ag-overlay-open",
            onEnter: function() {

              var slide;
              app.lock();
              if (this.slideId) {
                  setTimeout(function() {
                    slide = app.slide.get(this.slideId);
                    if (slide && slide.onEnter) slide.onEnter(app.dom.get(this.slideId));
                  }.bind(this),300);
              }
              app.trigger('open:overlay', {id: this.id, slideId: this.slideId}); 

            },
            onExit: function() {
              var slide;
              app.trigger('close:overlay', {id: this.id, slideId: this.slideId});
              app.unlock();
              if (this.slideId) {
                slide = app.slide.get(this.slideId);
                if (slide && slide.onExit) slide.onExit(app.dom.get(this.slideId));
                app.slide.remove(this.slideId, true);
              }
            }
        }
    ],
    close: function(event) {
        if (event.target.classList.contains('ag-overlay-close')) {
          $(".ag-overlay-x").removeClass("x-overlay");

            this.reset();
        }
        if (event.target.classList.contains('ag-close-x')) {
          this.reset();

      }
      if (event.target.classList.contains('x-overlay-rcp')) {
        this.reset();
    }
    },
    // Open provided HTML
    open: function(content) {
        content = content || this.props.content;
        console.log("open");
        this.props.existe=true;
        //test marwen & hajer
        var x = $("#overlay > .ag-overlay-x");
        x.hide();
                     

        if (content) {
            this.$('.ag-overlay-content')[0].innerHTML = content;
        }
        this.goTo('ag-overlay-open');
    },
    // Load a slide into the overlay
    load: function(slideId) {
      console.log("load");
      this.props.existe=false;  
      var x = $("#overlay > .ag-overlay-x");
      x.show();

    
      this.slideId = slideId;
      this.$('.ag-overlay-content')[0].innerHTML = "";
      // Need to remove slide if already loaded in presentation
      app.slide.remove(slideId, true);
      app.dom.insert([{id: slideId}], false, this.$('.ag-overlay-content')[0]);
      this.goTo('ag-overlay-open');
      // Fetch the slide but don't render it yet
      // app.slide.load(slideId).then(function(data) {
      //   console.log(data);
      //   this.slideId = slideId;
      //   app.dom.render(slideId, this.$('.ag-overlay-content')[0]);
      //   this.goTo('ag-overlay-open');
      // }.bind(this));
      // app.dom.insert([slideId], false, this.$('.ag-overlay-content')[0]);
      // this.slide = app.slide.get(slideId);
      // this.slideEl = app.dom.get(slideId);
    },
    setDimensions: function(width, height) {
      var contentEl = this.$('.ag-overlay-content')[0];
      var closeBtn = this.$('.ag-overlay-x')[0];
      var wMargin;
      var hMargin;
      var wUnit = "%";
      var hUnit = "%";
      // Assume percentage
      if (width < 101) {
        wMargin = (100 - width) / 2;
      }
      // otherwise treat as pixels
      {
        // Only supports % for now
      }
      // Assume percentage
      if (height < 101) {
        hMargin = (100 - height) / 2;
      }
      // otherwise treat as pixels
      {
        // Only supports % for now
      }

      if (contentEl) {
        contentEl.style.top = hMargin + hUnit;
        contentEl.style.bottom = hMargin + hUnit;
        contentEl.style.left = wMargin + wUnit;
        contentEl.style.right = wMargin + wUnit;
      }
      if (contentEl) {
        closeBtn.style.top = (hMargin - 1) + hUnit;
        closeBtn.style.right = (wMargin - 1) + wUnit;
      }

    },
    onRender: function(el) {
      var content = this.el.innerHTML;
      var html = '';
      var width = parseInt(this.props.width);
      var height = parseInt(this.props.height);
      if (!this.props.noBackground) {
        html = '<div class="ag-overlay-background ag-overlay-close"></div>';
      }
          html += '<div class="ag-overlay-content">';
              html += content;
          html += '</div>';
      if (!this.props.noCloseBtn) {
        html += '<div class="ag-overlay-x ag-overlay-close"></div>';
      }
                     


      // html += '</div>';
      this.el.innerHTML = html;
      this.setDimensions(width, height);
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {


    },
    onExit: function(el) {

    }
  }

});
app.register("aphinity_reco", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#button2_conc_popup1").addClass("i_am_here_anim");

    },
    onExit: function(el) {

    }
  }

});

function suivant_reco(){
  document.getElementById('reco1').style.transform="translateX(-150%)";
  document.getElementById('reco1').style.transitionDuration = "1s";

  document.getElementById('reco2').style.transform="translateX(0%)";
  document.getElementById('reco2').style.transitionDuration = "1s";
  document.getElementById('reco2').style.visibility="visible";

  $("#fleche2_reco").css("opacity","0");

  $("#fleche2_reco").css("opacity","1").addClass("fleche2_anim");

  $("#fleche1_reco").css("opacity","0");

  $("#fleche1_reco").css("opacity","1").addClass("fleche1_anim");


  $("#buttons_reco1").hide(); 
  $("#buttons_reco2").show(); 
}
function precedent_reco(){
  $("#fleche2_reco").css("opacity","0").removeClass("fleche2_anim");
  $("#fleche1_reco").css("opacity","0").removeClass("fleche1_anim");
  document.getElementById('reco2').style.transform="translateX(150%)";
  document.getElementById('reco2').style.transitionDuration = "1s";

  document.getElementById('reco1').style.transform="translateX(0%)";
  document.getElementById('reco1').style.transitionDuration = "1s";
  document.getElementById('reco1').style.visibility="visible";
  $("#buttons_reco2").hide(); 
  $("#buttons_reco1").show(); 

}
app.register("opening", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#forme_verte").css("opacity","0");
      $("#forme_blue").css("opacity","0");
      $("#perjeta_nom").css("opacity","0");
      $("#demi_cercle_1").css("opacity","0");
      $("#demi_cercle_2").css("opacity","0");
      $("#lamette_1").css("opacity","0");
      $("#lamette_2").css("opacity","0");
      $("#ref_op").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#forme_verte").css("opacity","1");
      $("#forme_verte").addClass("forme_verte_annim");

      $("#forme_blue").css("opacity","1");
      $("#forme_blue").addClass("forme_blue_annim");

      $("#perjeta_nom").css("opacity","1");
      $("#perjeta_nom").addClass("perjeta_nom_annim");

      $("#demi_cercle_1").css("opacity","1");
      $("#demi_cercle_1").addClass("demi_cercle_1_annim");

      $("#demi_cercle_2").css("opacity","1");
      $("#demi_cercle_2").addClass("demi_cercle_2_annim");
      
      $("#lamette_1").css("opacity","1");
      $("#lamette_1").addClass("lamette_1_annim");

      $("#lamette_2").css("opacity","1");
      $("#lamette_2").addClass("lamette_2_annim");

      $("#ref_op").css("opacity","1");
      $("#ref_op").addClass("ref_op_anim");

    },
    onExit: function(el) {
      $("#forme_verte").css("opacity","0");
      $("#forme_verte").removeClass("forme_verte_annim");

      $("#forme_blue").css("opacity","0");
      $("#forme_blue").removeClass("forme_blue_annim");

      $("#perjeta_nom").css("opacity","0");
      $("#perjeta_nom").removeClass("perjeta_nom_annim");

      $("#demi_cercle_1").css("opacity","0");
      $("#demi_cercle_1").removeClass("demi_cercle_1_annim");

      $("#demi_cercle_2").css("opacity","0");
      $("#demi_cercle_2").removeClass("demi_cercle_2_annim");

      $("#lamette_1").css("opacity","0");
      $("#lamette_1").removeClass("lamette_1_annim");

      $("#lamette_2").css("opacity","0");
      $("#lamette_2").removeClass("lamette_2_annim");

      $("#ref_op").css("opacity","0");
      $("#ref_op").addClass("ref_op_anim");

    }
  }

});
app.register("Home-4-RUB", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      // tryphaena
      $("#cercle_tryphaena").hide();
      $("#petale1_tryphaena").hide();
      $("#petale2_tryphaena").hide();
      $("#petale3_tryphaena").hide();
      $("#point_tryphaena").hide();

      // perjeta
      $("#petale1_perjeta").hide();
      $("#petale2_perjeta").hide();
      $("#cercle_perjeta").hide();
      $("#point_perjeta").hide();

      // neosphere
      $("#point_neosphere").hide();
      $("#cercle_neosphere").hide();
      $("#petale1_neosphere").hide();
      $("#petale2_neosphere").hide();
      $("#petale3_neosphere").hide();
      // aphinity

      $("#petale1_aphinity").hide();
      $("#cercle_aphinity").hide();
      $("#petale2_aphinity").hide();
      $("#petale3_aphinity").hide();
      $("#point_aphinity").hide();
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      // tryphaena
      $("#cercle_tryphaena").show();
      $("#cercle_tryphaena").addClass("cercle_tryphaena_annim");

      $("#petale1_tryphaena").show();
      $("#petale1_tryphaena").addClass("petale1_tryphaena_annim");

      $("#petale2_tryphaena").show();
      $("#petale2_tryphaena").addClass("petale2_tryphaena_annim");

      $("#petale3_tryphaena").show();
      $("#petale3_tryphaena").addClass("petale3_tryphaena_annim");

      $("#point_tryphaena").show();
      $("#point_tryphaena").addClass("point_tryphaena_annim");


      // perjeta
      $("#petale1_perjeta").show();
      $("#petale1_perjeta").addClass("petale1_perjeta_annim");

      $("#petale2_perjeta").show();
      $("#petale2_perjeta").addClass("petale2_perjeta_annim");

      $("#cercle_perjeta").show();
      $("#cercle_perjeta").addClass("cercle_perjeta_annim");

      $("#point_perjeta").show();
      $("#point_perjeta").addClass("point_perjeta_annim");


      // neosphere
      $("#point_neosphere").show();
      $("#point_neosphere").addClass("point_neosphere_annim");

      $("#cercle_neosphere").show();
      $("#cercle_neosphere").addClass("cercle_neosphere_annim");

      $("#petale1_neosphere").show();
      $("#petale1_neosphere").addClass("petale1_neosphere_annim");

      $("#petale2_neosphere").show();
      $("#petale2_neosphere").addClass("petale2_neosphere_annim");

      $("#petale3_neosphere").show();
      $("#petale3_neosphere").addClass("petale3_neosphere_annim");

      // aphinity
      $("#petale1_aphinity").show();
      $("#petale1_aphinity").addClass("petale1_aphinity_annim");

      $("#cercle_aphinity").show();
      $("#cercle_aphinity").addClass("cercle_aphinity_annim");

      $("#petale2_aphinity").show();
      $("#petale2_aphinity").addClass("petale2_aphinity_annim");

      $("#petale3_aphinity").show();
      $("#petale3_aphinity").addClass("petale3_aphinity_annim");

      $("#point_aphinity").show();
      $("#point_aphinity").addClass("point_aphinity_annim");


    },
    onExit: function(el) {
            // tryphaena
            $("#cercle_tryphaena").hide();
            $("#cercle_tryphaena").removeClass("point_tryphaena_annim");
      
            $("#petale1_tryphaena").hide();
            $("#petale1_tryphaena").removeClass("petale1_tryphaena_annim");
      
            $("#petale2_tryphaena").hide();
            $("#petale2_tryphaena").removeClass("petale2_tryphaena_annim");
      
            $("#petale3_tryphaena").hide();
            $("#petale3_tryphaena").removeClass("petale3_tryphaena_annim");
      
            $("#point_tryphaena").hide();
            $("#point_tryphaena").removeClass("point_tryphaena_annim");
      
      
            // perjeta
            $("#petale1_perjeta").hide();
            $("#petale1_perjeta").removeClass("petale1_perjeta_annim");
      
            $("#petale2_perjeta").hide();
            $("#petale2_perjeta").removeClass("petale2_perjeta_annim");
      
            $("#cercle_perjeta").hide();
            $("#cercle_perjeta").removeClass("cercle_perjeta_annim");
      
            $("#point_perjeta").hide();
            $("#point_perjeta").removeClass("point_perjeta_annim");
      
      
            // neosphere
            $("#point_neosphere").hide();
            $("#point_neosphere").removeClass("point_neosphere_annim");
      
            $("#cercle_neosphere").hide();
            $("#cercle_neosphere").removeClass("cercle_neosphere_annim");
      
            $("#petale1_neosphere").hide();
            $("#petale1_neosphere").removeClass("petale1_neosphere_annim");
      
            $("#petale2_neosphere").hide();
            $("#petale2_neosphere").removeClass("petale2_neosphere_annim");
      
            $("#petale3_neosphere").hide();
            $("#petale3_neosphere").removeClass("petale3_neosphere_annim");
      
            // aphinity
            $("#petale1_aphinity").hide();
            $("#petale1_aphinity").removeClass("petale1_aphinity_annim");
      
            $("#cercle_aphinity").hide();
            $("#cercle_aphinity").removeClass("cercle_aphinity_annim");
      
            $("#petale2_aphinity").hide();
            $("#petale2_aphinity").removeClass("petale2_aphinity_annim");
      
            $("#petale3_aphinity").hide();
            $("#petale3_aphinity").removeClass("petale3_aphinity_annim");
      
            $("#point_aphinity").hide();
            $("#point_aphinity").removeClass("point_aphinity_annim");
      
    }
  }

});
app.register("posologie_neo_efficacite1", function() {

   return {
     events: {

    },
    states: [],
   onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
   onEnter: function(el) {

   },
    onExit: function(el) {

    }
 }

});

 function suivant(){
  // document.getElementById('posologie1').style.display="none";
  //  document.getElementById('posologie2').style.display="block";
   document.getElementById('posologie1').style.transform="translateX(-150%)";
   document.getElementById('posologie1').style.transitionDuration = "1s";
   document.getElementById('posologie2').style.visibility="visible";
   document.getElementById('posologie2').style.transitionDelays= "ease-in";
   document.getElementById('posologie2').style.transform="translateX(0%)";
   document.getElementById('posologie2').style.transitionDuration = "1s";

 }
 function precedent(){
  //  document.getElementById('posologie2').style.display="none";
  //  document.getElementById('posologie1').style.display="block";

   document.getElementById('posologie2').style.transform="translateX(150%)";
   document.getElementById('posologie2').style.transitionDuration = "1s";
   document.getElementById('posologie1').style.visibility="visible";

   document.getElementById('posologie1').style.transform="translateX(0%)";
   document.getElementById('posologie1').style.transitionDuration = "1s";

}
app.register("welcome", function() {

  return {
    events: {
    },
    states: [
    ],
    onRender: function(el) {
      
  
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("APH_CONC1", function() {
var timer_aph ;
  return {
    events: {

    },
    states: [],
    onRender: function(el) {

    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
        var sound = document.getElementById('star_sound') ;
        sound.volume=0.2;
        sound.load();
        sound.play();
        setTimeout(function()
        {
          $("#star").addClass("jello-vertical");

          setTimeout(function(){        

            $("#star").removeClass("jello-vertical");
            setTimeout(() => {
              $("#star").addClass("jello-vertical");
            }, 70);            
          },300); 
        },450)



        $("#star").bind("doubleTap",function(){
      
          sound.load();
          var x = $(this) ;
          x.removeClass("jello-vertical");
          timer_aph = setTimeout(function(){
          sound.play();  
          x.addClass("jello-vertical");
        
          },100); 
          setTimeout(() => {
            $("#star").removeClass("jello-vertical");
            setTimeout(() => {
              $("#star").addClass("jello-vertical");
            }, 170);

          }, 300);
                    
 
  
          

        });

    },
    onExit: function(el) {
      if(timer_aph)
      clearTimeout(timer_aph);
      $("#star").removeClass("jello-vertical");


    }
  }

});


app.register("APH_CONC2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("APH_CONC3", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});

app.register("APH_DESIGN2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("APH_DESIGN1", function() {
  var aph_time1 ;
  var aph_time2 ;
  var aph_time3 ;
  return {
    events: {

    },
    states: [],
    onRender: function(el) {
       $("#aph-des1-elem1").css("opacity","0");
    
       $("#aph-des1-elem2").css("opacity","0");
       $("#aph-des1-elem3").css("opacity","0");
       $("#aph-des1-arrow1").css("opacity","0");
       $("#aph-des1-graph-text1").css("opacity","0");

       $("#aph-des1-elem4").css("opacity","0");
       $("#aph-des1-elem5").css("opacity","0");
       $("#aph-des1-arrow2").css("opacity","0");
       $("#aph-des1-graph-text2").css("opacity","0");


       $("#aph-des1-elem6").css("opacity","0");

    },
    onRemove: function(el) {
     
    },
    onEnter: function(el) {
      $("#aph-des1-elem1").css("opacity","1").addClass("fade-in-left");

      aph_time1 = setTimeout(function(){
        $("#aph-des1-elem2").css("opacity","1").addClass("fade-in-left");
        $("#aph-des1-elem3").css("opacity","1").addClass("fade-in-left");
        

        setTimeout(function(){
          $("#aph-des1-arrow1").css("opacity","1").addClass("fade-in-left");
          $("#aph-des1-graph-text1").css("opacity","1").addClass("fade-in-left");
        },100);
      
      },200);

      aph_time2 = setTimeout(function(){

        $("#aph-des1-elem4").css("opacity","1").addClass("fade-in-left");
        $("#aph-des1-elem5").css("opacity","1").addClass("fade-in-left");
        

       setTimeout(function(){
          $("#aph-des1-arrow2").css("opacity","1").addClass("fade-in-left");
          $("#aph-des1-graph-text2").css("opacity","1").addClass("fade-in-left");
        },100);
      
      },300);

      aph_time3 = setTimeout(function(){
      $("#aph-des1-elem6").css("opacity","1").addClass("fade-in-left");
     },400);
 


    },
    onExit: function(el) {

      if (aph_time3) {
        clearTimeout(aph_time3);
        aph_time3 = 0;
      }

        if (aph_time2) {
          clearTimeout(aph_time2);
          aph_time2 = 0;

        }

        if (aph_time1) {
          clearTimeout(aph_time1);
          aph_time1 = 0;

        }




      $("#aph-des1-elem1").css("opacity","0").removeClass("fade-in-left");
    
      $("#aph-des1-elem2").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-elem3").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-arrow1").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-graph-text1").css("opacity","0").removeClass("fade-in-left");

      $("#aph-des1-elem4").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-elem5").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-arrow2").css("opacity","0").removeClass("fade-in-left");
      $("#aph-des1-graph-text2").css("opacity","0").removeClass("fade-in-left");


      $("#aph-des1-elem6").css("opacity","0").removeClass("fade-in-left");
    }
  }

});
app.register("APH_DESIGN3", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("APH_EFF1", function() {
var src ; 

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
     src =  $("#aph-eff1-arrow").attr("src");
     $("#aph-eff1-arrow").hide();

    },
    onRemove: function(el) {
      
    },
    onEnter: function(el) {
      document.getElementById('fleche_sound').play();
      document.getElementById('fleche_sound').volume=0.1;

      $("#aph-eff1-arrow").attr("src",src);
      $("#aph-eff1-arrow").show();


    },
    onExit: function(el) {
      $("#aph-eff1-arrow").hide();
      $("#aph-eff1-arrow").attr("src","");
    }
  }

});
app.register("APH_EFF2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("APH_GROUP2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#aph-gr2-graph-courbe").css("opacity","0");
      $("#aph-gr2-graph-bloc").css("opacity","0");
      $("#aph-gr2-axe").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#aph-gr2-axe").css("opacity","1");
      graphAnimation("#aph-gr2-graph-courbe");
      $("#aph-gr2-graph-bloc").css("opacity","1").addClass("bounce-in-fwd");
    },
    onExit: function(el) {
      $("#aph-gr2-axe").css("opacity","0");
      $("#aph-gr2-graph-courbe").css("opacity","0");
      $("#aph-gr2-graph-bloc").css("opacity","0").removeClass("bounce-in-fwd");
    }
  }

});
app.register("APH_GROUP1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#aph-gr1-graph-courbe").css("opacity","0");
      $("#aph-gr1-graph-bloc").css("opacity","0");
      $("#aph-gr1-axe").css("opacity","0");
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      graphAnimation("#aph-gr1-graph-courbe");
      $("#aph-gr1-axe").css("opacity","1");
      $("#aph-gr1-graph-bloc").css("opacity","1").addClass("bounce-in-fwd");
    },
    onExit: function(el) {
      $("#aph-gr1-axe").css("opacity","0");
      $("#aph-gr1-graph-courbe").css("opacity","0");
      $("#aph-gr1-graph-bloc").css("opacity","0").removeClass("bounce-in-fwd");

    }
  }

});
app.register("APH_GROUP3", function() {
var aph_gr3_time;
  return {
    events: {

    },
    states: [],
    onRender: function(el) {
        $("#aph-gr3-arrow1").css("opacity","0");
        $("#aph-gr3-arrow2").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      document.getElementById('arrow_sound').volume=1;
      document.getElementById('arrow_sound').play();

      $("#aph-gr3-arrow2").css("opacity","1").addClass("slide-in-blurred-tr");
      aph_gr3_time= setTimeout(function(){

        $("#aph-gr3-arrow1").css("opacity","1").addClass("slide-in-blurred-top ");

      },50);

    },
    onExit: function(el) {
      if(aph_gr3_time) {
        clearTimeout(aph_gr3_time);
        aph_gr3_time = 0 ;
      }
      $("#aph-gr3-arrow1").css("opacity","0").removeClass("slide-in-blurred-top");
      $("#aph-gr3-arrow2").css("opacity","0").removeClass("slide-in-blurred-tr");

    }
  }

});
app.register("APH_GROUP5", function() {
  var element = document.getElementById("item");
  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      // $("#aph-gr5-courbe").css("opacity","0");
      $("polyline").each(function(){
        $(this).css("opacity","0");
         this.classList.remove("path");
       }); 
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      // graphAnimation("#aph-gr5-courbe");
       
       $("polyline").each(function(){
        $("polyline").css("opacity","1");
         this.classList.add("path");
       });
    },
    onExit: function(el) {
      // $("#aph-gr5-courbe").css("opacity","0");
      $("polyline").each(function(){
        $(this).css("opacity","0");
         this.classList.remove("path");
       }); 
       
      }
  }

});
app.register("APH_GROUP4", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#aph-gr4-courbe").css("opacity","0");
      $("#aph-gr4-graph").css("opacity","0");
      
  
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#aph-gr4-graph").css("opacity","1");
      graphAnimation("#aph-gr4-courbe");
     
    },
    onExit: function(el) {
      $("#aph-gr4-graph").css("opacity","0");
      $("#aph-gr4-courbe").css("opacity","0");
     
    }
  }

});
app.register("APH_QOL1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#aph-QOL-courbe").css("opacity","0");
      $("#aph-QOL-graph").css("opacity","0");
      
  
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#aph-QOL-graph").css("opacity","1");
      graphAnimation("#aph-QOL-courbe");
     
    },
    onExit: function(el) {
      $("#aph-QOL-graph").css("opacity","0");
      $("#aph-QOL-courbe").css("opacity","0");
     
    }
  }

});
app.register("APH_SECURITY1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("APH_SECURITY2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("APH_SECURITY3", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("APH_SECURITY4", function() {

  return {
    events: {
          
    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    },
    press:function(event){

    }
  }

});
app.register("NEO_CONC", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("NEO_DESIGN1", function() {
var neo_des1_timer1;
var neo_des1_timer2;
var neo_des1_timer3;
var timer_des1 = [];
  return {
    events: {
      
    },
    states: [],
    onRender: function(el) {

      $("#neo-des1-elem1").css("opacity","0");
      $("#neo-des1-elem8").css("opacity","0");
     
      $(".neo-ligne-1").each(function(){
        $(this).css("opacity","0");
      });

      
      $(".neo-ligne-2").each(function(){
        $(this).css("opacity","0");
      });
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#neo-des1-elem1").css("opacity","1").addClass("fade-in-left");


      neo_des1_timer1 = setTimeout(function(){
        $(".neo-ligne-1").each(function(index){
          var x = $(this) ;
          timer_des1.push(
            setTimeout(function(){
              x.css("opacity","1").addClass("slide-in-elliptic-top-fwd");
             },400 * index ));
          
        });
      },1000);

      neo_des1_timer2 = setTimeout(function(){
        $("#neo-des1-elem8").css("opacity","1").addClass("fade-in-top");
      },400*8);


      neo_des1_timer3 = setTimeout(function(){
        $(".neo-ligne-2").each(function(index){
          var x = $(this) ;
          timer_des1.push(
            setTimeout(function(){
            x.css("opacity","1").addClass("slide-in-elliptic-top-fwd");
        
           },400 * index )) ;
        });

      },400 * 11);


    },
    onExit: function(el) {
      for(var i = 0 ; i < timer_des1.length ; i++ ){

        clearTimeout(timer_des1[i]);
      }

      for(var i = 0 ; i <  timer_des1.length ; i++ ){
        timer_des1.shift();
    }
    
      if(neo_des1_timer1) {
        clearTimeout(neo_des1_timer1);
      }
      
      if(neo_des1_timer2) {
        clearTimeout(neo_des1_timer2);
      }
      
      if(neo_des1_timer3) {
        clearTimeout(neo_des1_timer3);
        
      }



   
      $("#neo-des1-elem1").css("opacity","0").removeClass("fade-in-left");
      $("#neo-des1-elem8").css("opacity","0").removeClass("fade-in-top");
     
      $(".neo-ligne-1").each(function(){
        $(this).css("opacity","0").removeClass("slide-in-elliptic-top-fwd");
      });

      
      $(".neo-ligne-2").each(function(){
        $(this).css("opacity","0").removeClass("slide-in-elliptic-top-fwd");
      });
    },

  }

});
app.register("NEO_DESIGN2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("NEO_EFFICACY1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $(".fill").each(function(){
          $(this).css("opacity","0");
      });
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {


    graphAnimation("#neo-eff1-bloc1");
    graphAnimation("#neo-eff1-bloc2");
    graphAnimation("#neo-eff1-bloc3");
    graphAnimation("#neo-eff1-bloc4");
    },
    onExit: function(el) {
      $(".fill").each(function(){
        $(this).css("opacity","0");
    });
    },

  }

});
app.register("NEO_EFFICACY2", function() {

  return {
    events: {


    },
    states: [],
    onRender: function(el) {
        $("#neo-eff2-axe").css("opacity","0");
        $("#neo-eff2-bloc").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#neo-eff2-bloc").css("opacity","1");
     graphAnimation("#neo-eff2-axe");
    },
    onExit: function(el) {
      $("#neo-eff2-axe").css("opacity","0");
      $("#neo-eff2-bloc").css("opacity","0");
    },

  }

});
app.register("NEO_EFFICACY4", function() {
 var neo_eff_timer ;
  return {
    events: {
 

    },
    states: [],
    onRender: function(el) {
      $("#bloc_vert1").css("opacity",0);
      $("#bloc_gris1").css("opacity",0);
      $("#bloc_gris2").css("opacity",0);
      $("#bloc_gris3").css("opacity",0);


      $("#texte_vert1").css("opacity",0);
      $("#texte_gris1").css("opacity",0);
      $("#texte_gris2").css("opacity",0);
      $("#texte_gris3").css("opacity",0);
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      graphAnimation("#bloc_vert1",2,"top");
      graphAnimation("#bloc_gris1",2,"top");
      graphAnimation("#bloc_gris2",2,"top");
      graphAnimation("#bloc_gris3",2,"top");

      neo_eff_timer = setTimeout(function(){
        $("#texte_vert1").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_gris1").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_gris2").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_gris3").addClass("slide-in-elliptic-bottom-fwd");
      }
      , 1500) ;
    },
    onExit: function(el) {
      if(neo_eff_timer) {
        clearTimeout(neo_eff_timer);
        neo_eff_timer = 0 ;
      }

      $("#bloc_vert1").css("opacity",0);
      $("#bloc_gris1").css("opacity",0);
      $("#bloc_gris2").css("opacity",0);
      $("#bloc_gris3").css("opacity",0);


      $("#texte_vert1").css("opacity",0);
      $("#texte_gris1").css("opacity",0);
      $("#texte_gris2").css("opacity",0);
      $("#texte_gris3").css("opacity",0);

      $("#texte_vert1").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris1").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris2").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris3").removeClass("slide-in-elliptic-bottom-fwd");

    },

  }

});
app.register("NEO_EFFICACY3", function() {

  return {
    events: {


    },
    states: [],
    onRender: function(el) {
      $("#neo-eff3-axe").css("opacity","0");
      $("#neo-eff3-bloc").css("opacity","0");
     
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#neo-eff3-bloc").css("opacity","1");
      graphAnimation("#neo-eff3-axe");
    },
    onExit: function(el) {
      $("#neo-eff3-bloc").css("opacity","0");
      $("#neo-eff3-axe").css("opacity","0");
    },

  }

});
app.register("NEO_SAFETY1", function() {
var timeouts = [];
var timer_safety1 ;
  return {
    events: {
      
    },
    states: [],
    onRender: function(el) {
      $(" .neo-safety1-header > img").each(function(){
        $(this).css("opacity","0");
      });

      // $("#contenu__NEO_SAFETY1").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

      // $("#contenu__NEO_SAFETY1").css("opacity","1");
      // $("#contenu__NEO_SAFETY1").addClass("fade-in-bottom ");
      
      // $(".neo-safety1-header").each(function(index){
      //       var x = $(this) ;

      //       timeouts.push(setTimeout(function(){
      //         x.css("opacity","1");
      //         x.addClass("slide-in-fwd-center");
      //       }, index*400));

      //   });
  

        timer_safety1 = setTimeout(function(){
        $(".neo-safety1-header > img").each(function(index){
            var x = $(this) ;
            timeouts.push(setTimeout(function(){
              x.css("opacity","1");
              x.addClass("fade-in-top");
            }, index*300));
        });
      },0.2);
    },
    onExit: function(el) {
      if(timer_safety1) {
        clearTimeout(timer_safety1);
      }
      for (var i=0; i<timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
      
      for (var i=0; i<timeouts.length; i++) {
        timeouts.shift();
      }


      $(".neo-safety1-header > img").each(function(){
        $(this).css("opacity","0");
        $(this).removeClass("fade-in-top ");
        
      });
      // $("#contenu__NEO_SAFETY1").removeClass("fade-in-bottom");
      // $("#contenu__NEO_SAFETY1").css("opacity","0");

      
    },

  }

});
app.register("NEO_SAFETY2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("NEO_SAFETY3", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("PER_CLINICAL1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
        $("#courbe1_perjeta_s7").css("opacity","0");
        $("#courbe2_perjeta_s7").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#courbe1_perjeta_s7").css("opacity","1");
      $("#courbe2_perjeta_s7").css("opacity","1");
      graphAnimation("#ligne1-courbe1_perjeta_s7");
      graphAnimation("#ligne2-courbe2_perjeta_s7");

    },
    onExit: function(el) {
      $("#courbe1_perjeta_s7").css("opacity","0");
      $("#courbe2_perjeta_s7").css("opacity","0");
      
      
    },

  }

});
app.register("PER_CLINICAL2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
        $("#bloc_perjeta_s9").css("opacity",0);
        $("#courbe_perjeta_s9").css("opacity",0);
        
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#courbe_perjeta_s9").css("opacity","1");
      graphAnimation("#bloc_perjeta_s9",1.5,"top");
      
        
    },
    onExit: function(el) {
      $("#courbe_perjeta_s9").css("opacity",0);
      
    },

  }

});
app.register("PER_CONC1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#colclusion_perjeta_s13").hide();
      $("#ref_perjeta_s13").hide();
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#colclusion_perjeta_s13").show();
      $("#colclusion_perjeta_s13").addClass("colclusion_perjeta_s13_anim");

      $("#ref_perjeta_s13").show();
      $("#ref_perjeta_s13").addClass("ref_perjeta_s13_anim");
    },
    onExit: function(el) {
      $("#colclusion_perjeta_s13").hide();
      $("#colclusion_perjeta_s13").removeClass("colclusion_perjeta_s13_anim");

      $("#ref_perjeta_s13").hide();
      $("#ref_perjeta_s13").removeClass("ref_perjeta_s13_anim");
    }
  }

});
app.register("PER_CONC2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("PER_EPIDEMIO1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#cercle_perjeta_s1").hide();
      $("#trait_perjeta_s1").hide();
      $("#texte_dans_cercle").hide();
      $("#trait_vert_perjeta_s1").hide(); 
    
    },
    onRemove: function(el) {

    },
    onEnter: function(el) {
      
      $("#texte_dans_cercle").removeClass("texte_dans_cercle_anim");
      $("#cercle_perjeta_s1").show();
      $("#cercle_perjeta_s1").addClass("cercle_perjeta_s1_anim");
      // document.getElementById('cercle_sound').play();

      $("#trait_perjeta_s1").show();
      $("#trait_perjeta_s1").addClass("trait_perjeta_s1_anim");

      setTimeout(function(){

        $("#texte_dans_cercle").show();
        $("#texte_dans_cercle").addClass("texte_dans_cercle_anim");
      },800);

      $("#trait_vert_perjeta_s1").show();
      $("#trait_vert_perjeta_s1").addClass("trait_vert_perjeta_s1_anim");
    },
    onExit: function(el) {
      $("#cercle_perjeta_s1").hide();
      $("#cercle_perjeta_s1").removeClass("cercle_perjeta_s1_anim");

      $("#trait_perjeta_s1").hide();
      $("#trait_perjeta_s1").removeClass("trait_perjeta_s1_anim");

      $("#texte_dans_cercle").hide();
      $("#texte_dans_cercle").removeClass("texte_dans_cercle_anim");

      $("#trait_vert_perjeta_s1").hide();
      $("#trait_vert_perjeta_s1").removeClass("trait_vert_perjeta_s1_anim");
    }
  }

});
app.register("PER_CONC3", function() {

  return {
    events: {
 
    },
    states: [],
    onRender: function(el) {
      $("#sousbloc1_perjeta_s14").css("opacity","0");
      $("#sousbloc2_perjeta_s14").css("opacity","0");

      $("#ligne_perjeta_s14").hide();
      $("#cycles_perjeta_s14").hide();
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
$
      graphAnimation("#sousbloc1_perjeta_s14",2,"left","graph-layer-bg");
      graphAnimation("#sousbloc2_perjeta_s14",2,"left","graph-layer-bg");

      $("#ligne_perjeta_s14").show();
      $("#ligne_perjeta_s14").addClass("ligne_perjeta_s14_anim");

      $("#cycles_perjeta_s14").show();
      $("#cycles_perjeta_s14").addClass("cycles_perjeta_s14_anim");

    },
    onExit: function(el) {
      $("#sousbloc1_perjeta_s14").css("opacity","0");
      $("#sousbloc2_perjeta_s14").css("opacity","0");

      $("#ligne_perjeta_s14").hide();
      $("#ligne_perjeta_s14").removeClass("ligne_perjeta_s14_anim");

      $("#cycles_perjeta_s14").hide();
      $("#cycles_perjeta_s14").removeClass("cycles_perjeta_s14_anim");
    }
  }

});
app.register("PER_EPIDEMIO2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("PER_EPIDEMIO3", function() {

  return {
    events: {


    },
    states: [],
    onRender: function(el) {
      $("#courbe_perjeta_s3").hide();
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#courbe_perjeta_s3").show();
      graphAnimation("#ligne_courbe_perjeta_s3");
    },
    onExit: function(el) {
      $("#courbe_perjeta_s3").hide();
    },

  }

});
app.register("PER_EPIDEMIO5", function() {
var x ;
  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#cerlce-3-s6").css("opacity","0");
      $("#cerlce-6-s6").css("opacity","0");

    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

      $("#cerlce-6-s6").css("opacity","1");
      $("#cerlce-3-s6").css("opacity","1");

      $("#cerlce-3-s6").addClass("cerlce-3-s6_anim");
      $("#cerlce-6-s6").addClass("cerlce-6-s6_anim");
      
      x=setInterval(function(){

        $("#cerlce-3-s6").removeClass("cerlce-3-s6_anim");
        $("#cerlce-6-s6").removeClass("cerlce-6-s6_anim");
 
        setTimeout(function(){
          $("#cerlce-3-s6").addClass("heartbeat");
          $("#cerlce-6-s6").addClass("heartbeat");
          
        },10)
      },3500);


    },
    onExit: function(el) {

     clearInterval(x);
      $("#cerlce-3-s6").css("opacity","0");
      $("#cerlce-3-s6").removeClass("cerlce-3-s6_anim");

      $("#cerlce-6-s6").css("opacity","0");
      $("#cerlce-6-s6").removeClass("cerlce-6-s6_anim");
    }
  }

});
app.register("PER_EPIDEMIO6", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#sous_bloc1_perjeta_s6").css("opacity","0");
      $("#sous_bloc2_perjeta_s6").css("opacity","0");
      $("#sous_bloc3_perjeta_s6").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#sous_bloc1_perjeta_s6").css("opacity","1");
      $("#sous_bloc1_perjeta_s6").addClass("sous_bloc1_perjeta_s6_anim");

      $("#sous_bloc2_perjeta_s6").css("opacity","1");
      $("#sous_bloc2_perjeta_s6").addClass("sous_bloc2_perjeta_s6_anim");

      $("#sous_bloc3_perjeta_s6").css("opacity","1");
      $("#sous_bloc3_perjeta_s6").addClass("sous_bloc3_perjeta_s6_anim");
    },
    onExit: function(el) {
      $("#sous_bloc1_perjeta_s6").css("opacity","0");
      $("#sous_bloc1_perjeta_s6").removeClass("sous_bloc1_perjeta_s6_anim");

      $("#sous_bloc2_perjeta_s6").css("opacity","0");
      $("#sous_bloc2_perjeta_s6").removeClass("sous_bloc2_perjeta_s6_anim");

      $("#sous_bloc3_perjeta_s6").css("opacity","0");
      $("#sous_bloc3_perjeta_s6").removeClass("sous_bloc3_perjeta_s6_anim");
    }
  }

});
app.register("PER_EPIDEMIO4", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      $("#courbe_perjeta_s5").css("opacity","0");
      $("#numero_courbe_perjeta_s5").css("opacity","0");
      $("#fleche1_courbe_perjeta_s5").css("opacity","0");
      $("#fleche2_courbe_perjeta_s5").css("opacity","0");

       
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {


      $("#courbe_perjeta_s5").css("opacity","1");
      graphAnimation("#ligne_courbe_perjeta_s5");


      $("#numero_courbe_perjeta_s5").css("opacity","1").addClass("numero_courbe_perjeta_s5_anim");

      $("#fleche1_courbe_perjeta_s5").css("opacity","1").addClass("fleche1_courbe_perjeta_s5_anim");

      $("#fleche2_courbe_perjeta_s5").css("opacity","1").addClass("fleche2_courbe_perjeta_s5_anim");

    },
    onExit: function(el) {
      $("#courbe_perjeta_s5").css("opacity","0");
      $("#numero_courbe_perjeta_s5").css("opacity","0").removeClass("numero_courbe_perjeta_s5_anim");

      $("#fleche1_courbe_perjeta_s5").css("opacity","0").removeClass("fleche1_courbe_perjeta_s5_anim");

      $("#fleche2_courbe_perjeta_s5").css("opacity","0").removeClass("fleche2_courbe_perjeta_s5_anim");
    },

  }

});
app.register("PER_PRAC1", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
     $("#icones_bloc1_schema_perjeta_s9").css("opacity","0");
      $("#icones_bloc2_schema_perjeta_s9").css("opacity","0");
     $("#icones_bloc3_schema_perjeta_s9").css("opacity","0");
      $("#soustitre1_bloc").css("opacity","0");
      $("#soustitre2_bloc").css("opacity","0");
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
     graphAnimation("#icones_bloc1_schema_perjeta_s9",2);
     graphAnimation("#icones_bloc2_schema_perjeta_s9",2.5);
     graphAnimation("#icones_bloc3_schema_perjeta_s9",3);

      $("#soustitre1_bloc").css("opacity","1");
      $("#soustitre1_bloc").addClass("soustitre1_bloc_anim");

      $("#soustitre2_bloc").css("opacity","1");
      $("#soustitre2_bloc").addClass("soustitre2_bloc_anim");
    },
    onExit: function(el) {
     $("#icones_bloc1_schema_perjeta_s9").css("opacity","0");
      $("#icones_bloc2_schema_perjeta_s9").css("opacity","0");
     $("#icones_bloc3_schema_perjeta_s9").css("opacity","0");


      $("#soustitre1_bloc").css("opacity","0");
      $("#soustitre1_bloc").removeClass("soustitre1_bloc_anim");

      $("#soustitre2_bloc").css("opacity","0");
      $("#soustitre2_bloc").removeClass("soustitre2_bloc_anim");
    },
    
  }

});
app.register("PER_PRAC2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {

      $("#titre_tableau_perjeta_s11").css("opacity","0");
      $("#contenu_tableau_perjeta_s11").css("opacity","0");

    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      $("#titre_tableau_perjeta_s11").css("opacity","1").addClass("fade-in-top");
      $("#contenu_tableau_perjeta_s11").css("opacity","1");


    },
    onExit: function(el) {


      $("#titre_tableau_perjeta_s11").css("opacity","0");
      $("#contenu_tableau_perjeta_s11").css("opacity","0");

      $("#titre_tableau_perjeta_s11").removeClass("fade-in-top");
    }
  }

});
app.register("PER_PRAC3", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
app.register("try_conc", function() {

  return {
    events: {
      "tap #titre_tryphaena_s7": "press",

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    },
    press:function(event){
      var overlay = app.view.get('overlay-demo');
      if (overlay) {
        overlay.load('conc_popup1');
        }
    }
  }

});
app.register("try_design1", function() {
var timeouts_try = [];
var try_des1 ;
  return {
    events: {
    },
    states: [],
    onRender: function(el) {
      $("#bloc1_neo_tryphaena_s1").css("opacity","0");
      $("#bloc2_neo_tryphaena_s1").css("opacity","0");
      $("#bloc3_neo_tryphaena_s1").css("opacity","0");

      $("#titre1_tryphaena_s1").hide();
      $("#titre2_tryphaena_s1").hide(); 


      $(".one-two-three-adj").each(function(){
          $(this).css("opacity","0");
      });
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
        graphAnimation("#bloc1_neo_tryphaena_s1",2,"left","graph-layer-bg");
        graphAnimation("#bloc2_neo_tryphaena_s1",2,"left","graph-layer-bg");
        graphAnimation("#bloc3_neo_tryphaena_s1",2,"left","graph-layer-bg");

        try_des1 =  setTimeout(function(){
            $(".one-two-three-adj").each(function(index){
                
                var x = $(this) ;
                timeouts_try.push(setTimeout(function(){
                  x.css("opacity","1");
                  x.addClass("fade-in-fwd");
                  },index * 500));
            });


    

        },1800);
        $("#titre1_tryphaena_s1").show();
        $("#titre1_tryphaena_s1").addClass("titre1_tryphaena_s1_anim");
  
        $("#titre2_tryphaena_s1").show();
        $("#titre2_tryphaena_s1").addClass("titre1_tryphaena_s1_anim");
    },
    onExit: function(el) {
      if(try_des1) {
        clearTimeout(try_des1);
      }
      
      for (var i=0; i<timeouts_try.length; i++) {
        if(timeouts_try[i]){
        clearTimeout(timeouts_try[i]);
      }
      }
      for (var i=0; i<timeouts_try.length; i++) {
        timeouts_try.shift();
      }
      $("#bloc1_neo_tryphaena_s1").css("opacity","0");
      $("#bloc2_neo_tryphaena_s1").css("opacity","0");
      $("#bloc3_neo_tryphaena_s1").css("opacity","0");

      
      $(".one-two-three-adj").each(function(){
        $(this).css("opacity","0");
        $(this).removeClass("fade-in-fwd");
    });
    $("#titre1_tryphaena_s1").hide();
    $("#titre1_tryphaena_s1").removeClass("titre1_tryphaena_s1_anim");

    $("#titre2_tryphaena_s1").hide();
    $("#titre2_tryphaena_s1").removeClass("titre2_tryphaena_s1_anim");
    },

  }

});
app.register("try_design2", function() {

  return {
    events: {

    },
    states: [],
    onRender: function(el) {
      
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
var aph_time1,aph_time2,aph_time3,aph_time4,aph_time5,aph_time6,aph_time7,aph_time8,aph_time9,aph_time10,aph_time11;

app.register("conc_popup1", function() {

 return {
     events: {

    },
     states: [],
     onRender: function(el) {
      $("#cadre1_schema_partie1_conc_popup1").hide();
      $("#tires_schema_partie1_conc_popup1").hide();
      $("#cadres_schema_partie1_conc_popup1").hide();
      $("#fleche_schema_partie1_conc_popup1").hide(); 


      $("#diag_conc_popup4").hide();
      $("#texte1_conc_popup4").hide();
      $("#fleche2_conc_popup4").hide();
      $("#cycle1_conc_popup4").hide(); 
      $("#medecin_conc_popup4").hide();
      $("#cycle2_conc_popup4").hide(); 
    
      $("#texte2_conc_popup4").hide();
      $("#texte3_conc_popup4").hide();
    },
    onRemove: function(el) {
        
     },
    onEnter: function(el) {
      $("#cadre1_schema_partie1_conc_popup1").show();
      $("#cadre1_schema_partie1_conc_popup1").addClass("fade-in-left");

      aph_time1 = setTimeout(function(){
      $("#tires_schema_partie1_conc_popup1").show();
      $("#tires_schema_partie1_conc_popup1").addClass("fade-in-left");
      },500);

      aph_time2 = setTimeout(function(){
      $("#cadres_schema_partie1_conc_popup1").show();
      $("#cadres_schema_partie1_conc_popup1").addClass("fade-in-left");
      },1200);

      aph_time3 = setTimeout(function(){
      $("#fleche_schema_partie1_conc_popup1").show();
      $("#fleche_schema_partie1_conc_popup1").addClass("fade-in-left");
      },1300);
      $("#button2_conc_popup1").addClass("i_am_here_anim");
     },



    onExit: function(el) {
      if (aph_time3) {
        clearTimeout(aph_time3);
        aph_time3 = 0;
      }

        if (aph_time2) {
          clearTimeout(aph_time2);
          aph_time2 = 0;

        }

        if (aph_time1) {
          clearTimeout(aph_time1);
          aph_time1 = 0;
        }
      $("#cadre1_schema_partie1_conc_popup1").hide();
      $("#cadre1_schema_partie1_conc_popup1").removeClass("fade-in-left");

      $("#tires_schema_partie1_conc_popup1").hide();
      $("#tires_schema_partie1_conc_popup1").removeClass("fade-in-left");

      $("#cadres_schema_partie1_conc_popup1").hide();
      $("#cadres_schema_partie1_conc_popup1").removeClass("fade-in-left");

      $("#fleche_schema_partie1_conc_popup1").hide();
      $("#fleche_schema_partie1_conc_popup1").removeClass("fade-in-left");
    
    
      /**************popup4*****************/ 
      $("#diag_conc_popup4").hide();
      $("#diag_conc_popup4").removeClass("fade-in-left");

      $("#texte1_conc_popup4").hide();
      $("#texte1_conc_popup4").removeClass("fade-in-left");

      $("#fleche2_conc_popup4").hide();
      $("#fleche2_conc_popup4").removeClass("fade-in-left");

      $("#cycle1_conc_popup4").hide();
      $("#cycle1_conc_popup4").removeClass("fade-in-left");

      $("#medecin_conc_popup4").hide();
      $("#medecin_conc_popup4").removeClass("fade-in-left");

      $("#cycle2_conc_popup4").hide();
      $("#cycle2_conc_popup4").removeClass("fade-in-left");

      $("#texte2_conc_popup4").hide();
      $("#texte2_conc_popup4").removeClass("fade-in-left");

      $("#texte3_conc_popup4").hide();
      $("#texte3_conc_popup4").removeClass("fade-in-left");
    }
 }

 });


function suiv1(){
  console.log (popup2_conclusion);


  document.getElementById('popup1_conclusion').style.transform="translateX(-150%)";
  document.getElementById('popup1_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup1_conclusion').style.overflow = "hidden";
  

  document.getElementById('popup2_conclusion').style.visibility="visible";
  document.getElementById('popup2_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup2_conclusion').style.transitionDuration = "1s";
  $("#cadre1_schema_partie1_conc_popup1").hide();
  $("#cadre1_schema_partie1_conc_popup1").removeClass("cadre1_schema_partie1_conc_popup1_anim");

  $("#tires_schema_partie1_conc_popup1").hide();
  $("#tires_schema_partie1_conc_popup1").removeClass("tires_schema_partie1_conc_popup1_anim");

  $("#cadres_schema_partie1_conc_popup1").hide();
  $("#cadres_schema_partie1_conc_popup1").removeClass("cadres_schema_partie1_conc_popup1_anim");

  $("#fleche_schema_partie1_conc_popup1").hide();
  $("#fleche_schema_partie1_conc_popup1").removeClass("fleche_schema_partie1_conc_popup1_anim");
  if (aph_time3) {
    clearTimeout(aph_time3);
    aph_time3 = 0;
  }

    if (aph_time2) {
      clearTimeout(aph_time2);
      aph_time2 = 0;

    }

    if (aph_time1) {
      clearTimeout(aph_time1);
      aph_time1 = 0;

    }

  

}
function suiv2(){
 
  document.getElementById('popup2_conclusion').style.transform="translateX(-150%)";
  document.getElementById('popup2_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup3_conclusion').style.visibility="visible";
  document.getElementById('popup3_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup3_conclusion').style.transitionDuration = "1s";


}
function suiv3(){

 var x = 500 ;
  document.getElementById('popup3_conclusion').style.transform="translateX(-150%)";
  document.getElementById('popup3_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup4_conclusion').style.visibility="visible";
  document.getElementById('popup4_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup4_conclusion').style.transitionDuration = "1s";

      /**************popup4*****************/ 

      aph_time4 = setTimeout(function(){
      $("#diag_conc_popup4").show();
      $("#diag_conc_popup4").addClass("fade-in-left");
      },500);

      aph_time5 = setTimeout(function(){

      $("#texte1_conc_popup4").show();
      $("#texte1_conc_popup4").addClass("fade-in-left");
      },x= x +200);

      aph_time6 = setTimeout(function(){

      $("#fleche2_conc_popup4").show();
      $("#fleche2_conc_popup4").addClass("fade-in-left");
      },x= x +200);

      aph_time7 = setTimeout(function(){

      $("#cycle1_conc_popup4").show();
      $("#cycle1_conc_popup4").addClass("fade-in-left");
      },x= x +200);
      aph_time8 = setTimeout(function(){

      $("#medecin_conc_popup4").show();
      $("#medecin_conc_popup4").addClass("fade-in-left");
      },x= x +200);

      aph_time9 = setTimeout(function(){

      $("#cycle2_conc_popup4").show();
      $("#cycle2_conc_popup4").addClass("fade-in-left");
      },x= x +200);
      aph_time10 = setTimeout(function(){

        $("#texte2_conc_popup4").show();
        $("#texte2_conc_popup4").addClass("fade-in-left");
        },x= x +200)
      aph_time11 = setTimeout(function(){

      $("#texte3_conc_popup4").show();
      $("#texte3_conc_popup4").addClass("fade-in-left");
      },x= x +200);


}


function prec1(){


  document.getElementById('popup2_conclusion').style.transform="translateX(150%)";
  document.getElementById('popup2_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup2_conclusion').style.overflow = "hidden";

  document.getElementById('popup1_conclusion').style.visibility="visible";
  document.getElementById('popup1_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup1_conclusion').style.transitionDuration = "1s";

  /******Animation schema***** */
  $("#cadre1_schema_partie1_conc_popup1").show();
  $("#cadre1_schema_partie1_conc_popup1").addClass("fade-in-left");

  aph_time1 = setTimeout(function(){
  $("#tires_schema_partie1_conc_popup1").show();
  $("#tires_schema_partie1_conc_popup1").addClass("fade-in-left");
  },500);

  aph_time2 = setTimeout(function(){
  $("#cadres_schema_partie1_conc_popup1").show();
  $("#cadres_schema_partie1_conc_popup1").addClass("fade-in-left");
  },1200);

  aph_time3 = setTimeout(function(){
  $("#fleche_schema_partie1_conc_popup1").show();
  $("#fleche_schema_partie1_conc_popup1").addClass("fade-in-left");
  },1300);
  

}


function prec2(){
  document.getElementById('popup3_conclusion').style.transform="translateX(150%)";
  document.getElementById('popup3_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup2_conclusion').style.visibility="visible";
  document.getElementById('popup2_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup2_conclusion').style.transitionDuration = "1s";


}
function prec3(){

  document.getElementById('popup4_conclusion').style.transform="translateX(150%)";
  document.getElementById('popup4_conclusion').style.transitionDuration = "1s";
  document.getElementById('popup3_conclusion').style.visibility="visible";
  document.getElementById('popup3_conclusion').style.transform="translateX(0%)";
  document.getElementById('popup3_conclusion').style.transitionDuration = "1s";


        /**************popup4*****************/ 


        if (aph_time4) {
          clearTimeout(aph_time4);
        }
      
          if (aph_time5) {
            clearTimeout(aph_time5);
      
          }
      
          if (aph_time6) {
            clearTimeout(aph_time6);
          }
          if (aph_time7) {
            clearTimeout(aph_time7);
          }
      
            if (aph_time8) {
              clearTimeout(aph_time8);
      
            }
      
            if (aph_time9) {
              clearTimeout(aph_time9);
            }
            if (aph_time10) {
              clearTimeout(aph_time10);
            }
      
              if (aph_time11) {
                clearTimeout(aph_time11);
      
              }


        $("#diag_conc_popup4").hide();
        $("#diag_conc_popup4").removeClass("fade-in-left");
  
        $("#texte1_conc_popup4").hide();
        $("#texte1_conc_popup4").removeClass("fade-in-left");
  
        $("#fleche2_conc_popup4").hide();
        $("#fleche2_conc_popup4").removeClass("fade-in-left");
  
        $("#cycle1_conc_popup4").hide();
        $("#cycle1_conc_popup4").removeClass("fade-in-left");
  
        $("#medecin_conc_popup4").hide();
        $("#medecin_conc_popup4").removeClass("fade-in-left");
  
        $("#cycle2_conc_popup4").hide();
        $("#cycle2_conc_popup4").removeClass("fade-in-left");
  
        $("#texte2_conc_popup4").hide();
        $("#texte2_conc_popup4").removeClass("fade-in-left");
  
        $("#texte3_conc_popup4").hide();
        $("#texte3_conc_popup4").removeClass("fade-in-left");
      

}
app.register("try_efficacy1", function() {
var try_eff1_timer ;
  return {
    events: {


    },
    states: [],
    onRender: function(el) {
      $("#bloc1_tryphaena_s3").css("opacity",0);
      $("#bloc2_tryphaena_s3").css("opacity",0);
      $("#bloc3_tryphaena_s3").css("opacity",0);
      
      $("#texte1_tryphaena_s3").css("opacity",0);
      $("#texte2_tryphaena_s3").css("opacity",0);
      $("#texte3_tryphaena_s3").css("opacity",0);
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      try_eff1_timer = setTimeout(function(){
      graphAnimation("#bloc1_tryphaena_s3");
      graphAnimation("#bloc2_tryphaena_s3");
      graphAnimation("#bloc3_tryphaena_s3");
      // graphAnimation("#texte1_tryphaena_s3",3);
      // graphAnimation("#texte2_tryphaena_s3",3);
      // graphAnimation("#texte3_tryphaena_s3",3);
    }
       ,0.5) ;
       try_eff1_timer = setTimeout(function(){
         $("#texte1_tryphaena_s3").addClass("slide-in-elliptic-left-fwd");
         $("#texte2_tryphaena_s3").addClass("slide-in-elliptic-left-fwd");
         $("#texte3_tryphaena_s3").addClass("slide-in-elliptic-left-fwd");
       }
       , 1500) ;
    },
    onExit: function(el) {
      if(try_eff1_timer){
        clearTimeout(try_eff1_timer);
      }
      $("#bloc1_tryphaena_s3").css("opacity",0);
      $("#bloc2_tryphaena_s3").css("opacity",0);
      $("#bloc3_tryphaena_s3").css("opacity",0);

      // $("#texte1_tryphaena_s3").css("opacity",0);
      // $("#texte2_tryphaena_s3").css("opacity",0);
      // $("#texte3_tryphaena_s3").css("opacity",0);


      $("#texte1_tryphaena_s3").removeClass("slide-in-elliptic-left-fwd");
       $("#texte2_tryphaena_s3").removeClass("slide-in-elliptic-left-fwd");
      $("#texte3_tryphaena_s3").removeClass("slide-in-elliptic-left-fwd");
    }

  }

});
app.register("try_efficacy2", function() {
var try_eff1_timer;
  return {
    events: {
      // "tap #courbe_tryphaena_s4": "press",

    },
    states: [],
    onRender: function(el) {
      $("#bloc_vert").css("opacity",0);
      $("#bloc_orange").css("opacity",0);
      $("#bloc_gris").css("opacity",0);

      $("#texte_vert").css("opacity",0);
      $("#texte_orange").css("opacity",0);
      $("#texte_gris").css("opacity",0);


      $("#texte_vert").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_orange").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris").removeClass("slide-in-elliptic-bottom-fwd");
   
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {
      graphAnimation("#bloc_vert",2,"top");
      graphAnimation("#bloc_orange",2,"top");
      graphAnimation("#bloc_gris",2,"top");
      try_eff2_timer= setTimeout(function(){
        $("#texte_vert").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_orange").addClass("slide-in-elliptic-bottom-fwd");
        $("#texte_gris").addClass("slide-in-elliptic-bottom-fwd");
      }
      , 1500) ;
    },
    onExit: function(el) {
      if(try_eff2_timer){
        clearTimeout(try_eff2_timer);
      }
      $("#bloc_vert").css("opacity",0);
      $("#bloc_orange").css("opacity",0);
      $("#bloc_gris").css("opacity",0);

      $("#texte_vert").css("opacity",0);
      $("#texte_orange").css("opacity",0);
      $("#texte_gris").css("opacity",0);

      $("#texte_vert").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_orange").removeClass("slide-in-elliptic-bottom-fwd");
      $("#texte_gris").removeClass("slide-in-elliptic-bottom-fwd");
   
    }
 }

});
app.register("try_safety2", function() {

  return {
    events: {


    },
    states: [],
    onRender: function(el) {
        $("#lignecourbe_safety2_s6").css("opacity","0");
        $("#courbe_safety2_s6").css("opacity","0");

    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

      setTimeout(() => $("#line_1").addClass("animation_courbe_o").css("opacity","1") ,0 );
      setTimeout(() => $("#line_2").addClass("animation_courbe_o").css("opacity","1") ,1000 );
      setTimeout(() => $("#line_3").addClass("animation_courbe_o").css("opacity","1") ,2000 );


      $("#lignecourbe_safety2_s6").css("opacity","1");
      $("#courbe_safety2_s6").css("opacity","1");
        graphAnimation("#lignecourbe_safety2_s6");
    },
    onExit: function(el) {
      
      $("#line_1").removeClass("animation_courbe_o");
      $("#line_2").removeClass("animation_courbe_o");
      $("#line_3").removeClass("animation_courbe_o");

      $("#lignecourbe_safety2_s6").css("opacity","0");
      $("#courbe_safety2_s6").css("opacity","0");
    },

  }

});
app.register("try_safety1", function() {
var try_saf1_timer = [];
  return {
    events: {


    },
    states: [],
    onRender: function(el) {
      $( ".one-two-three" ).each(function(){
        $(this).hide();
      });
    },
    onRemove: function(el) {
        
    },
    onEnter: function(el) {

      $( ".one-two-three" ).each(function(index) {
        var x = $(this) ;
        try_saf1_timer.push(        
          setTimeout(function(){
          x.show();
          x.addClass("fade-in-top");
        },index * 500));
    
      });

    },
    onExit: function(el) {
      for(var i=0; i < try_saf1_timer.length;i++) {
        clearTimeout(try_saf1_timer[i]);
      }
      for(var i=0; i < try_saf1_timer.length;i++) {
        try_saf1_timer.shift();
      }
      $( ".one-two-three" ).each(function(){
        $(this).hide();
      });
    },

  }

});
app.cache.put("modules/ag-auto-menu/model.json","{\r\n  \"name\": \"Agnitio Auto Menu\",\r\n  \"description\": \"Menu that automatically builds.\",\r\n  \"type\": \"global\",\r\n  \"files\": {\r\n    \"styles\": [\"modules/ag-auto-menu/ag-auto-menu.css\"],\r\n    \"scripts\": [\"modules/ag-auto-menu/ag-auto-menu.js\"]\r\n  },\r\n  \"dependencies\": [{\"global\": \"Draggy\", \"src\": \"accelerator/lib/draggy.js\"}],\r\n  \"version\": \"0.9.5\"\r\n}");
app.cache.put("modules/ag-indicators/model.json","{\r\n  \"name\": \"Agnitio Indicators\",\r\n  \"description\": \"Indicators of slides and current position.\",\r\n  \"type\": \"global\",\r\n  \"files\": {\r\n    \"styles\": [\"modules/ag-indicators/ag-indicators.css\"],\r\n    \"scripts\": [\"modules/ag-indicators/ag-indicators.js\"]\r\n  },\r\n  \"version\": \"0.9.5\"\r\n}");
app.cache.put("modules/ag-overlay/model.json","{\r\n  \"name\": \"Agnitio Overlay\",\r\n  \"type\": \"universal\",\r\n  \"description\": \"Creates an overlay to the presentation.\",\r\n  \"files\": {\r\n    \"styles\": [\"modules/ag-overlay/ag-overlay.css\"],\r\n    \"scripts\": [\"modules/ag-overlay/ag-overlay.js\"]\r\n  },\r\n  \"version\": \"0.5.2\"\r\n}");
app.cache.put("slides/aphinity_reco/aphinity_reco.html","<!doctype html>\r\n<html>\r\n\r\n<head>\r\n  <title>aphinity_reco</title>\r\n</head>\r\n\r\n<body>\r\n  <article id=\"aphinity_reco\" class=\"slide\">\r\n\r\n    \r\n    <div id=\"reco1\">\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div id=\"reco2\">\r\n\r\n      <div id=\"left_reco\">\r\n        <div id=\"form_reco\"></div>\r\n\r\n        <div id=\"tab1_reco\"></div>\r\n        <div id=\"tab2_reco\"></div>\r\n        <div id=\"tab3_reco\"></div>\r\n        <div id=\"tab4_reco\"></div>\r\n\r\n      </div>\r\n      <div id=\"right_reco\">\r\n\r\n        <div id=\"tab5_reco\"></div>\r\n        <div id=\"pyra_reco\"></div>\r\n      </div>\r\n      <div id=\"fleche1_reco\"></div>\r\n      <div id=\"fleche2_reco\"></div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n      <div id=\"button_reco_aph\">\r\n          <div id=\"buttons_reco1\"  class=\"btn_reco\">\r\n\r\n              <div id=\"button1_conc_popup1\"></div>\r\n              <div id=\"button2_conc_popup1\" onclick=\"suivant_reco()\" ></div>\r\n      \r\n          </div>\r\n          <div id=\"buttons_reco2\" style=\"display: none\" class=\"btn_reco\">\r\n      \r\n              <div id=\"button1_conc_popup2\" onclick=\"precedent_reco()\"></div>\r\n              <div id=\"button2_conc_popup4\"></div>\r\n      \r\n          </div>\r\n      </div>\r\n  </article>\r\n</body>\r\n\r\n</html>");
app.cache.put("slides/opening/opening.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Opening</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"opening\" class=\"slide\">\r\n        <div id=\"roche\"></div>\r\n\r\n        <div id=\"logo\">\r\n            <div id=\"demi_cercle_2\"></div>\r\n            <div id=\"lamette_2\"></div>\r\n            <div id=\"lamette_1\"></div>\r\n            <div id=\"demi_cercle_1\"></div>\r\n\r\n        </div>\r\n        <div id=\"perjeta_nom\"></div>\r\n\r\n        <div id=\"formes\">\r\n          <div id=\"forme_blue\"></div>\r\n          <div style=\"height: 100%; width: 100%;position: absolute\">\r\n            <div id=\"forme_verte\"></div>\r\n          </div>\r\n        </div>\r\n        <div id=\"ref_op\"></div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/Home-4-RUB/Home-4-RUB.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Menu avec 4 rubriques</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"Home-4-RUB\" class=\"slide\">\r\n        <div id=\"roche\"></div>\r\n        <div id=\"back_famille\"></div>\r\n\r\n        <div id=\"menu\">\r\n          <div id=\"tryphaena\">\r\n              <a href=\"javascript:app.goTo(\'tryphaena\');\"> \r\n              <div id=\"point_tryphaena\"></div>\r\n              <div id=\"cercle_tryphaena\"></div>\r\n              <div id=\"petale1_tryphaena\"></div>\r\n              <div id=\"petale2_tryphaena\"></div>\r\n              <div id=\"petale3_tryphaena\"></div>\r\n            </a>\r\n          </div>\r\n          <div id=\"perjeta\">\r\n            <a href=\"javascript:app.goTo(\'perjeta\');\">\r\n             <div id=\"petale1_perjeta\"></div>\r\n              <div id=\"petale2_perjeta\"></div>\r\n              <div id=\"cercle_perjeta\"></div>\r\n              <div id=\"point_perjeta\"></div>\r\n            </a>\r\n          </div>\r\n          <div id=\"neosphere\">\r\n            <a href=\"javascript:app.goTo(\'neosphere\');\">\r\n                <div id=\"cercle_neosphere\"></div>\r\n              <div id=\"point_neosphere\"></div>\r\n              <div id=\"petale1_neosphere\"></div>\r\n              <div id=\"petale2_neosphere\"></div>\r\n              <div id=\"petale3_neosphere\"></div>\r\n            </a>\r\n          </div>\r\n          <div id=\"aphinity\">\r\n              <a href=\"javascript:app.goTo(\'aphinity\');\">\r\n              <div id=\"petale1_aphinity\"></div>\r\n              <div id=\"cercle_aphinity\"></div>             \r\n              <div id=\"petale2_aphinity\"></div>\r\n              <div id=\"petale3_aphinity\"></div>\r\n              <div id=\"point_aphinity\"></div>\r\n            </a> \r\n          </div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/posologie_neo_efficacite1/posologie_neo_efficacite1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>posologie_neo_efficacite1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"posologie_neo_efficacite1\" class=\"slide\">\r\n\r\n      <div id=\"posologie1\">\r\n        <div id=\"buttons_posologie1\">\r\n            <div id=\"button1_posologie1\" ></div>\r\n            <div id=\"button2_posologie1\" onclick=\"suivant()\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"posologie2\">\r\n          <div id=\"buttons_posologie2\">\r\n            <div id=\"button1_posologie2\" onclick=\"precedent()\"></div>\r\n              <div id=\"button2_posologie2\"></div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/welcome/welcome.html","<!doctype html>\r\n<html>\r\n<head>\r\n    <title>Rainmaker - New Content</title>\r\n</head>\r\n<body>\r\n<article id=\"welcome\" class=\"slide\">\r\n	<table class=\"table table-striped table-bordered\" style=\"position: relative ; top: 10%;\">\r\n		<tr>\r\n		  <td>Tilt Left/Right [gamma]</td>\r\n		  <td id=\"doTiltLR\"></td>\r\n		</tr>\r\n		<tr>\r\n		  <td>Tilt Front/Back [beta]</td>\r\n		  <td id=\"doTiltFB\"></td>\r\n		</tr>\r\n		<tr>\r\n		  <td>Direction [alpha]</td>\r\n		  <td id=\"doDirection\"></td>\r\n		</tr>\r\n	  </table>\r\n	  \r\n	  <div class=\"container-welcome\" id=\"logoContainer\">\r\n		<img src=\"slides/welcome/assets/upload-icon.png\" id=\"imgLogo\">\r\n	  </div>\r\n	  \r\n	  \r\n</article>\r\n</body>\r\n</html>");
app.cache.put("slides/aphinity/APH_CONC1/APH_CONC1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Conclusions 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_CONC1\" class=\"slide aph-slide\">\r\n          <div id=\"aph-conc1-warpper\">\r\n              <div id=\"aph-conc1-title\"></div>\r\n              <div id=\"aph-conc1-bloc\">\r\n                <div id=\"aph-conc1-left-text\"></div>\r\n                <div id=\"aph-conc1-picto-right\">\r\n                  <div id=\"mug\">                  \r\n                    <div id=\"star\"></div>\r\n\r\n                    <!-- <div id=\"lum1\"></div>\r\n                    <div id=\"lum2\"></div> -->\r\n                </div>\r\n\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <audio src=\"slides/aphinity/APH_CONC1/assets/star_sound.mp3\" autostart=\"true\"  id=\"star_sound\" ></audio> \r\n\r\n    </article>\r\n\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_CONC2/APH_CONC2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Conclusions 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_CONC2\" class=\"slide aph-slide\">\r\n        <div id=\"aph-conc2-title\"></div>\r\n        <div id=\"aph-conc2-warpper\">\r\n            <div class=\"icon-bloc icon-bloc1_conc \" id=\"aph-conc2-bloc-text1\">\r\n\r\n            </div>\r\n            <div class=\"icon-bloc icon-bloc2_conc\" id=\"aph-conc2-bloc-text2\">\r\n\r\n            </div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_CONC3/APH_CONC3.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Conclusions 3</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_CONC3\" class=\"slide aph-slide\">\r\n        <div id=\"aph-conc3-title\"></div>\r\n        <div id=\"aph-conc3-warpper\">\r\n            <div id=\"aph-conc3-bloc-text1\"></div>\r\n            <div id=\"aph-conc3-bloc-text2\"></div>\r\n            <div id=\"aph-conc3-bloc-text3\"></div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_DESIGN2/APH_DESIGN2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Design de l’étude 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_DESIGN2\" class=\"slide aph-slide\">\r\n        <div id=\"aph-des2-warpper\">\r\n            <div id=\"aph-des2-text1\"></div>\r\n            <div id=\"aph-des2-table1\" onclick=\"popup(\'aph-des2-table1_overlay\',false)\"></div>\r\n        </div>\r\n        <div id=\"protocole\" onclick=\"popup(\'aph-des2-overlay\',false)\">\r\n          <div id=\"protocole_white\"></div>\r\n          <div id=\"protocole_green\"></div>\r\n          <div id=\"protocole_texte\"></div>\r\n\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_DESIGN1/APH_DESIGN1.html","<!doctype html>\r\n<html>\r\n\r\n<head>\r\n  <title>Design de l’étude 1</title>\r\n</head>\r\n\r\n<body>\r\n  <article id=\"APH_DESIGN1\" class=\"slide aph-slide\">\r\n    <div id=\"aph-des1-warpper\">\r\n      <div id=\"aph-des1-bloc-text\"></div>\r\n\r\n      <div id=\"aph-des1-graph\" onclick=\"popup(\'aph-des1-overlay\',false)\">\r\n        <div id=\"aph-des1-elem1\"></div>\r\n        <div id=\"aph-des1-center\">\r\n\r\n          <div id=\"aph-des1-center-left\">\r\n            <div id=\"aph-des1-elem2\"></div>\r\n            <div id=\"aph-des1-elem3\"></div>\r\n            <div id=\"aph-des1-arrow1\"></div>\r\n            <div id=\"aph-des1-graph-text1\"></div>\r\n          </div>\r\n          <div id=\"aph-des1-center-right\">\r\n            <div id=\"aph-des1-elem4\"></div>\r\n            <div id=\"aph-des1-elem5\"></div>\r\n            <div id=\"aph-des1-arrow2\"></div>\r\n            <div id=\"aph-des1-graph-text2\"></div>\r\n          </div>\r\n\r\n        </div>\r\n        <div id=\"aph-des1-elem6\"></div>\r\n      </div>\r\n    </div>\r\n\r\n  </article>\r\n</body>\r\n\r\n</html>");
app.cache.put("slides/aphinity/APH_DESIGN3/APH_DESIGN3.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Design de l’étude 3</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_DESIGN3\" class=\"slide aph-slide\">\r\n        <div id=\"aph-des2-warpper\">\r\n            <div id=\"aph-des3-bloc1\"></div>\r\n            <div id=\"aph-des3-bloc2\"></div>\r\n            <div id=\"aph-des3-text1\"></div>\r\n        </div>\r\n        <div id=\"dfs\" onclick=\"popup(\'aph-des3-overlay\',false)\">\r\n          <div id=\"dfs_white\"></div>\r\n          <div id=\"dfs_green\"></div>\r\n          <div id=\"dfs_texte\"></div>\r\n\r\n        </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_EFF1/APH_EFF1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Efficacité 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_EFF1\" class=\"slide aph-slide\">\r\n        <div id=\"aph-eff1-warpper\">\r\n            <div id=\"aph-eff1-text1\"></div>\r\n            <div id=\"aph-eff1-text2\"></div>\r\n            <div id=\"aph-eff1-text3\"></div>\r\n            <div id=\"aph-eff1-bloc-right\">\r\n                  <div id=\"aph-eff1-text\"></div>\r\n                  <!-- <div id=\"aph-eff1-arrow\"></div> -->\r\n                  <img src=\"slides/aphinity/APH_EFF1/assets/Green_arrow.gif\" id=\"aph-eff1-arrow\" alt=\"\">\r\n\r\n            </div>\r\n        </div> \r\n        <audio src=\"slides/aphinity/APH_EFF1/assets/flech_arrow.mp3\" autostart=\"true\"  id=\"fleche_sound\" ></audio> \r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_EFF2/APH_EFF2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Efficacité 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_EFF2\" class=\"slide aph-slide\">\r\n        <div id=\"aph-eff2-warpper\">\r\n          <div id=\"aph-eff2-text1\"></div>\r\n          <div id=\"aph-eff2-table1\" onclick=\"popup(\'aph-eff2-table1_overlay\',false)\"></div>\r\n          <div id=\"aph-eff2-bloc-text1\"></div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_GROUP2/APH_GROUP2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Analyse de sous-groupe 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_GROUP2\" class=\"slide aph-slide\">\r\n      <div id=\"aph-gr2-warpper\">\r\n        <div id=\"aph-gr2-bloc-text1\"> </div>\r\n        <div id=\"aph-gr2-graph\">\r\n            <div id=\"aph-gr2-axe\" onclick=\"popup(\'aph-gr2-overlay\',true)\">\r\n                <div id=\"aph-gr2-graph-courbe\"></div>\r\n                <div id=\"aph-gr2-graph-bloc\"></div>\r\n            </div>\r\n            <div id=\"aph-gr2-graph-text\">\r\n        \r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_GROUP1/APH_GROUP1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Analyse de sous-groupe 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_GROUP1\" class=\"slide aph-slide\">\r\n        <div id=\"aph-gr1-warpper\">\r\n            <div id=\"aph-gr1-bloc-text1\"> </div>\r\n            <div id=\"aph-gr1-graph\">\r\n                <div id=\"aph-gr1-axe\" onclick=\"popup(\'aph-gr1-overlay\',true)\">\r\n                    \r\n                    \r\n                   \r\n                   \r\n                    <div id=\"aph-gr1-axe-img\"></div>\r\n                    <div id=\"aph-gr1-graph-courbe\"></div>\r\n                    <div id=\"aph-gr1-graph-bloc\"></div>\r\n                </div>\r\n                <div id=\"aph-gr1-graph-text\">\r\n            \r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_GROUP3/APH_GROUP3.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Analyse de sous-groupe 3</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_GROUP3\" class=\"slide aph-slide\">\r\n        <div id=\"aph-gr3-warpper\">\r\n          <div id=\"aph-gr3-left\">\r\n            <div id=\"aph-gr3-text-container\">\r\n                  <div id=\"aph-gr3-title\"></div>\r\n                  <div id=\"aph-gr3-text\"></div>\r\n            </div>\r\n          </div>\r\n \r\n          <div id=\"aph-gr3-right\">\r\n              <div id=\"aph-gr3-arrow1\"></div>\r\n              <div id=\"aph-gr3-arrow2\"></div>\r\n              \r\n          </div>\r\n        </div>\r\n\r\n        <audio src=\"slides/aphinity/APH_GROUP3/assets/arrow_sound.mp3\" autostart=\"true\"  id=\"arrow_sound\" ></audio> \r\n\r\n\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_GROUP5/APH_GROUP5.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Analyse de sous-groupe 5</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_GROUP5\" class=\"slide aph-slide\">\r\n      <div id=\"aph-gr5-warpper\">\r\n        <div id=\"aph-gr5-title\"></div>\r\n        <div id=\"aph-gr5-graph\">\r\n             <div id=\"aph-gr5-courbe\">\r\n              <svg id=\"aph-gr5-courbe-svg\" xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 1760.01 886.12\">\r\n                <defs>\r\n                    <style>\r\n            .cls-1,.cls-2,.cls-3{\r\n            font-size:32.32px;font-weight:700;font-family: Sansation Regular;\r\n            }.cls-1{fill:#4f4e50;}.cls-2{fill:#00afaa;}.cls-3{fill:#f79720;}.cls-4,.cls-5{fill:none;stroke-miterlimit:10;stroke-width:4.04px;}.cls-4{stroke:#f79720;}.cls-5{stroke:#00afaa;}\r\n                    </style>\r\n                </defs>\r\n                <title>\r\n                    courbesvg\r\n                </title>\r\n                <text class=\"cls-1\" transform=\"translate(1197.53 212.81)\">\r\n                    3 ans\r\n                </text>\r\n                <text class=\"cls-1\" transform=\"translate(1522.6 223.57)\">\r\n                    4 ans\r\n                </text>\r\n                <text class=\"cls-2\" transform=\"translate(1197.53 251.85)\">\r\n                    94,8\r\n                </text>\r\n                <text class=\"cls-2\" transform=\"translate(1522.6 262.61)\">\r\n                    93,0\r\n                </text>\r\n                <text class=\"cls-3\" transform=\"translate(1197.53 303.01)\">\r\n                    94,4\r\n                </text>\r\n                <text class=\"cls-3\" transform=\"translate(1522.6 321.4)\">\r\n                    91,6\r\n                </text>\r\n                <polyline points=\"323.56 235 406.81 235 406.81 236.68 442.29 236.68 442.29 238.03 490.93 238.03 610.54 238.03 610.54 239.71 656.33 239.71 656.33 241.56 725.58 241.56 725.58 243.41 769.65 243.41 806.84 243.41 806.84 245.44 830.31 245.44 830.31 247.29 854.35 247.29 870.37 247.29 870.37 249.48 907.57 249.48 907.57 251.83 959.08 251.83 959.08 253.68 983.68 253.68 983.68 256.55 1039.2 256.55 1039.2 260.42 1115.31 260.42 1115.31 262.6 1147.36 262.6 1147.36 264.29 1196.58 264.29 1196.58 266.48 1252.09 266.48 1252.09 268.33 1287.57 268.33 1287.57 270.35 1317.9 270.35 1317.9 272.03 1348.81 272.03 1348.81 273.38 1372.84 273.38 1372.84 275.4 1411.76 275.4 1445.52 275.4 1445.52 277.92 1491.88 277.92 1491.88 280.28 1532.51 280.28 1532.51 283.48 1567.99 283.48 1567.99 285.5 1662.99 285.5\" class=\"cls-4 path\"/>\r\n                <polyline points=\"322.99 236.85 377.62 236.85 377.62 238.2 478.34 238.2 478.34 239.88 575.63 239.88 576.2 240.89 645.46 240.89 645.46 243.25 709.56 243.25 709.56 244.93 725.58 244.93 753.62 244.93 753.62 246.45 778.23 246.45 778.23 247.62 802.27 247.62 802.27 249.64 818.87 249.64 818.87 251.33 857.78 251.33 873.8 251.33 873.8 253.18 901.85 253.18 901.85 254.86 923.02 254.86 983.11 254.86 983.11 256.55 1051.22 256.55 1051.22 259.07 1154.23 259.07 1154.23 260.92 1171.4 260.92 1171.4 262.61 1220.04 262.61 1220.04 264.45 1290.43 264.45 1290.43 266.14 1332.78 266.14 1332.78 267.49 1379.14 267.49 1379.14 268.83 1403.75 268.83 1473.57 268.83 1473.57 271.19 1519.92 271.19 1519.92 273.04 1582.3 273.04 1582.3 275.23 1637.24 275.23 1637.24 277.08 1650.98 277.08 1650.98 279.78 1662.42 279.78\" class=\"cls-5 path\"/>\r\n            </svg>\r\n             </div> \r\n            <!-- <img id=\"aph-gr5-courbe\" src=\"http://localhost:3000/slides/aphinity/APH_GROUP5/assets/courbe.svg\" alt=\"test\"> -->\r\n\r\n        \r\n          </div>\r\n  </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_GROUP4/APH_GROUP4.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Analyse de sous-groupe 4</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_GROUP4\" class=\"slide aph-slide\">\r\n        <div id=\"aph-gr4-warpper\">\r\n              <div id=\"aph-gr4-title\"></div>\r\n              <div id=\"aph-gr4-graph\">\r\n                  <div id=\"aph-gr4-courbe\"></div>\r\n              </div>\r\n        </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_QOL1/APH_QOL1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Quality de vie 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_QOL1\" class=\"slide aph-slide\">\r\n      <div id=\"aph-QOL-warpper\">\r\n        <div id=\"aph-QOL-title\"></div>\r\n        <div id=\"aph-QOL-graph\" onclick=\"popup(\'aph-qol-overlay\',true)\">\r\n            <div id=\"aph-QOL-courbe\"></div>\r\n        </div>\r\n        <div id=\"aph-QOL-bloc-text\"></div>\r\n  </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_SECURITY1/APH_SECURITY1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Tolérance 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_SECURITY1\" class=\"slide aph-slide\">\r\n      <div id=\"aph-sec1-warpper\">\r\n              <div id=\"aph-sec2-title\"></div>\r\n              <div class=\"icon-bloc icon-bloc1\" id=\"aph-sec1-bloc-text1\">\r\n\r\n              </div>\r\n              <div class=\"icon-bloc icon-bloc2\"  id=\"aph-sec1-bloc-text2\">\r\n\r\n              </div>\r\n              <div class=\"icon-bloc icon-bloc3\"  id=\"aph-sec1-bloc-text3\">\r\n\r\n              </div>\r\n      </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_SECURITY2/APH_SECURITY2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Tolérance 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_SECURITY2\" class=\"slide aph-slide\">\r\n        <div id=\"aph-sec2-warpper\">\r\n            <div id=\"aph-sec2-table\" onclick=\"popup(\'aph-security2-table1_overlay\',false)\"></div>\r\n            <div id=\"aph-sec2-bloc-text1\"></div>\r\n\r\n        </div>\r\n\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_SECURITY3/APH_SECURITY3.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Tolérance 3</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_SECURITY3\" class=\"slide aph-slide\">\r\n        <div id=\"aph-sec3-warpper\">\r\n            <div id=\"aph-sec3-title1\"></div>\r\n            <div id=\"aph-sec3-title2\"></div>\r\n            <div id=\"aph-sec3-table1\"></div>\r\n            <div id=\"aph-sec3-bloc-text1\"></div>\r\n\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/aphinity/APH_SECURITY4/APH_SECURITY4.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Tolérance 4</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"APH_SECURITY4\" class=\"slide aph-slide\">\r\n        <div id=\"aph-sec4-warpper\">\r\n            <div id=\"aph-sec4-title1\"></div>\r\n            <div id=\"aph-sec4-title2\"></div>\r\n            <div id=\"aph-sec4-table1\" onclick=\"popup(\'aph-sec4-overlay\',false)\"></div>\r\n            <div id=\"aph-sec4-bloc-text1\"></div>\r\n\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/neosphere/NEO_CONC/NEO_CONC.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Conclusion</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"NEO_CONC\" class=\"slide\">\r\n        <div id=\"NEO_CONC-warpper\">\r\n\r\n          <div id=\"titre_NEO_CONC\"></div>\r\n          <div id=\"soustitre_NEO_CONC\"></div>\r\n\r\n        <div id=\"texte_NEO_CONC\">\r\n            <div id=\"icon1_NEO_CONC\"></div>\r\n            <div id=\"icon2_NEO_CONC\"></div>\r\n            <div id=\"icon3_NEO_CONC\"></div>\r\n            <div id=\"icon4_NEO_CONC\"></div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/neosphere/NEO_DESIGN1/NEO_DESIGN1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Design de l’étude 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"NEO_DESIGN1\" class=\"slide neo-slide\">\r\n        <div class=\"neo-des1-warpper\">\r\n          <div id=\"neo-des1-text1\"></div>\r\n          <div id=\"neo-des1-text2\"></div>\r\n\r\n\r\n          <div id=\"neo-des1-graph\" onclick=\"popup(\'popup_NEO_DESIGN1\',false)\">\r\n            <div class=\"neo-des1-column\" id=\"neo-des1-elem1\"></div>\r\n            <div class=\"neo-des1-column\" id=\"neo-des1-col2\" >\r\n              <div class=\"neo-des1-ligne neo-ligne-1\" id=\"neo-des1-elem2\"></div>\r\n              <div class=\"neo-des1-ligne neo-ligne-1\" id=\"neo-des1-elem3\"></div>\r\n              <div class=\"neo-des1-ligne neo-ligne-1\" id=\"neo-des1-elem4\"></div>\r\n              <div class=\"neo-des1-ligne neo-ligne-1\" id=\"neo-des1-elem5\"></div>\r\n              <div class=\"neo-des1-ligne neo-ligne-1\" id=\"neo-des1-elem6\"></div>\r\n              <div class=\"neo-des1-ligne neo-ligne-1\" id=\"neo-des1-elem7\"></div>\r\n            </div>\r\n\r\n            <div class=\"neo-des1-column\"id=\"neo-des1-warpper-elem8\" >\r\n                <div id=\"neo-des1-elem8\"></div>\r\n            </div>\r\n\r\n            <div class=\"neo-des1-column\" id=\"neo-des1-col3\">\r\n            <div class=\"neo-des1-ligne neo-ligne-2\" id=\"neo-des1-elem9\"></div>\r\n            <div class=\"neo-des1-ligne neo-ligne-2\" id=\"neo-des1-elem10\"></div>\r\n            <div class=\"neo-des1-ligne neo-ligne-2\" id=\"neo-des1-elem11\"></div>\r\n            <div class=\"neo-des1-ligne neo-ligne-2\" id=\"neo-des1-elem12\"></div>\r\n            <div class=\"neo-des1-ligne neo-ligne-2\" id=\"neo-des1-elem13\"></div>\r\n          </div>\r\n          </div>\r\n          <div id=\"neo-des1-text3\"></div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/neosphere/NEO_DESIGN2/NEO_DESIGN2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Design de l’étude 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"NEO_DESIGN2\" class=\"slide neo-slide\">\r\n      <div id=\"neo-des1-warpper\">\r\n            <div id=\"neo-des2-block1\">\r\n              <div id=\"neo-des2-text1\"></div>\r\n            </div>\r\n            <div id=\"neo-des2-block2\">\r\n                <div id=\"neo-des2-text2\"></div>\r\n            </div>\r\n      </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/neosphere/NEO_EFFICACY1/NEO_EFFICACY1.html","<!doctype html>\r\n<html>\r\n\r\n<head>\r\n  <title>Efficacité 1</title>\r\n</head>\r\n\r\n<body>\r\n  <article id=\"NEO_EFFICACY1\" class=\"slide neo-slide\">\r\n    <div id=\"neo-eff1-warpper\">\r\n      <div id=\"neo-eff1-text1\"></div>\r\n      <div id=\"neo-eff1-bloc\" onclick=\"popup(\'popup_NEO_EFFICACY1\',true)\">\r\n        <div id=\"neo-eff1-col4\">\r\n          <div class=\"neo-eff1-ligne\">\r\n            <div id=\"neo-eff1-bloc1\" class=\"fill\"></div>\r\n          </div>\r\n          <div class=\"neo-eff1-ligne\">\r\n            <div id=\"neo-eff1-bloc2\" class=\"fill\"></div>\r\n          </div>\r\n          <div class=\"neo-eff1-ligne\">\r\n            <div id=\"neo-eff1-bloc3\" class=\"fill\"></div>\r\n          </div>\r\n          <div class=\"neo-eff1-ligne\">\r\n            <div id=\"neo-eff1-bloc4\" class=\"fill\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n  </article>\r\n</body>\r\n\r\n</html>");
app.cache.put("slides/neosphere/NEO_EFFICACY2/NEO_EFFICACY2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Efficacité 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"NEO_EFFICACY2\" class=\"slide neo-slide\">\r\n          <div id=\"neo-eff2-warpper\">\r\n              <div id=\"neo-eff2-text1\"></div>\r\n              <div id=\"neo-eff2-bloc\" onclick=\"popup(\'popup_NEO_EFFICACY2\',true)\">\r\n                  <div id=\"neo-eff2-axe\">\r\n                    \r\n                  </div>\r\n\r\n              </div>\r\n              <div id=\"neo-eff2-text2\"></div>\r\n          </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/neosphere/NEO_EFFICACY4/NEO_EFFICACY4.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Efficacité 4</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"NEO_EFFICACY4\" class=\"slide\">\r\n        <div id=\"neo-eff4-warpper\">\r\n\r\n            <div id=\"titre_neosphere_s6\"></div>\r\n            <div id=courbe_neosphere_s6 onclick=\"popup(\'popup_NEO_EFFICACY4\',true)\">\r\n                <div id=\"blocgrid_neosphere_s6\">\r\n                    <div id=\"bloc1_neosphere_s6\">\r\n                        <div id=\"texte_vert1\"></div>\r\n                        <div id=\"bloc_vert1\"></div>\r\n                    </div>\r\n                    <div id=\"bloc2_neosphere_s6\">\r\n                        <div id=\"texte_gris1\"></div>\r\n                        <div id=\"bloc_gris1\"></div>\r\n                    </div>\r\n                    <div id=\"bloc3_neosphere_s6\">\r\n                        <div id=\"texte_gris2\"></div>\r\n                        <div id=\"bloc_gris2\"></div>\r\n                    </div>\r\n                    <div id=\"bloc4_neosphere_s6\">\r\n                        <div id=\"texte_gris3\"></div>\r\n                        <div id=\"bloc_gris3\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div id=\"ref_neosphere_s6\"></div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/neosphere/NEO_EFFICACY3/NEO_EFFICACY3.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Efficacité 3</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"NEO_EFFICACY3\" class=\"slide neo-slide\">\r\n        <div id=\"neo-eff3-warpper\">\r\n            <div id=\"neo-eff3-text1\"></div>\r\n            <div id=\"neo-eff3-bloc\" onclick=\"popup(\'popup_NEO_EFFICACY3\',true)\">\r\n                <div id=\"neo-eff3-axe\">\r\n                  \r\n                </div>\r\n\r\n            </div>\r\n            <div id=\"neo-eff3-text2\"></div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/neosphere/NEO_SAFETY1/NEO_SAFETY1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Tolérance 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"NEO_SAFETY1\" class=\"slide\">\r\n        <div id=\"NEO_SAFETY1-warpper\">\r\n\r\n                <div id=\"titre_NEO_SAFETY1\"></div>\r\n                <div id=\"soustitre_NEO_SAFETY1\"></div>\r\n\r\n            <div id=\"tableau__NEO_SAFETY1\" onclick=\"popup(\'popup_NEO_SAFETY1\',false)\">\r\n                <div id=\"entete__NEO_SAFETY1\">\r\n                    <div class=\"neo-safety1-header\" id=\"entete1__NEO_SAFETY1\">\r\n                        <img  src=\"slides\\neosphere\\NEO_SAFETY1\\assets\\1-09.png\"  class=\"img_tableau\" />\r\n                    </div>\r\n                    <div class=\"neo-safety1-header\" id=\"entete2__NEO_SAFETY1\">\r\n                        <img src=\"slides\\neosphere\\NEO_SAFETY1\\assets\\1-08.png\" class=\"img_tableau\"/>\r\n\r\n                    </div>\r\n                    <div class=\"neo-safety1-header\" id=\"entete3__NEO_SAFETY1\">\r\n                        <img src=\"slides\\neosphere\\NEO_SAFETY1\\assets\\1-07.png\" class=\"img_tableau\"/>\r\n\r\n                    </div>\r\n                    <div class=\"neo-safety1-header\" id=\"entete4__NEO_SAFETY1\">\r\n                        <img src=\"slides\\neosphere\\NEO_SAFETY1\\assets\\1-06.png\" class=\"img_tableau\"/>\r\n\r\n                    </div>\r\n                </div>\r\n                <div id=\"contenu__NEO_SAFETY1\"></div>\r\n            </div>\r\n    </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>\r\n");
app.cache.put("slides/neosphere/NEO_SAFETY2/NEO_SAFETY2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Tolérance 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"NEO_SAFETY2\" class=\"slide\">\r\n        <div id=\"NEO_SAFETY2-warpper\">\r\n\r\n          <div id=\"titre_NEO_SAFETY2\"></div>\r\n        <div id=\"texte_NEO_SAFETY2\">\r\n            <div id=\"icon_NEO_SAFETY2\"></div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/neosphere/NEO_SAFETY3/NEO_SAFETY3.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Tolérance 3</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"NEO_SAFETY3\" class=\"slide\">\r\n        <div id=\"NEO_SAFETY3-warpper\">\r\n\r\n          <div id=\"titre_NEO_SAFETY3\"></div>\r\n        <div id=\"texte_NEO_SAFETY3\">\r\n            <div id=\"icon_NEO_SAFETY3\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_CLINICAL1/PER_CLINICAL1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Essais cliniques 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_CLINICAL1\" class=\"slide\">\r\n        <div id=\"CLINICAL1\">\r\n            <div id=\"titre_perjeta_s7\" class=\"text-s8\"></div>\r\n            <div id=\"sous_titre_perjeta_s7\" class=\"text-s8\"></div>\r\n              <div id=\"courbes\">\r\n                  <div id=\"courbe1_perjeta_s7\" onclick=\"popup(\'popup1_PER_CLINICAL1\',true)\">\r\n                      <div id=\"ligne1-courbe1_perjeta_s7\"></div>\r\n                  </div>\r\n                  \r\n                  <div id=\"courbe2_perjeta_s7\" onclick=\"popup(\'popup2_PER_CLINICAL1\',true)\">\r\n                      <div id=\"ligne2-courbe2_perjeta_s7\"></div>\r\n                  </div>\r\n\r\n              </div>\r\n        </div>\r\n\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_CLINICAL2/PER_CLINICAL2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Essais cliniques 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_CLINICAL2\" class=\"slide\">\r\n        <div id=\"CLINICAL1\">\r\n          \r\n          <div id=\"titre_perjeta_s9\"></div>\r\n          <div id=\"courbe_perjeta_s9\" onclick=\"popup(\'popup2_PER_CLINICAL2\',true)\">\r\n            <div id=\"axes_perjeta_s9\"></div>\r\n            <div id=\"bloc_perjeta_s9\"></div>\r\n          </div>\r\n          <div id=\"texte_perjeta_slide_s9\"></div>\r\n        </div>\r\n                \r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_CONC1/PER_CONC1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Conclusion 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_CONC1\" class=\"slide\">\r\n        <div id=\"CONC1\">\r\n          <div id=\"colclusion_perjeta_s13\"></div>\r\n          <div id=\"ref_perjeta_s13\"></div>\r\n      </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_CONC2/PER_CONC2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Conclusion 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_CONC2\" class=\"slide\">\r\n        <div id=\"CONC2\">\r\n\r\n                <div id=\"titre_perjeta_s13\"></div>   \r\n                <div id=\"grid_perjeta_s13\">\r\n                    <div id=\"bloc1_grid_perjeta_s13\">\r\n                        <div id=\"soustitre1_perjeta_s13\"></div>\r\n                        <div id=\"gridlogos_perjeta_s13\">\r\n                            <div id=\"gridlogo1_perjeta_s13\"></div>\r\n                            <div id=\"gridlogo2_perjeta_s13\"></div>\r\n                            <div id=\"gridlogo3_perjeta_s13\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"bloc2_grid_perjeta_s13\">\r\n                        <div id=\"soustitre2_perjeta_s13\"></div>\r\n                        <div id=\"logo_perjeta_s13\"></div>\r\n                    </div>\r\n\r\n                </div>\r\n        </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_EPIDEMIO1/PER_EPIDEMIO1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Epidémiologie 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_EPIDEMIO1\" class=\"slide\">\r\n        <div id=\"EPIDEMIO1\">\r\n          <div id=\"titre_perjeta_s1\"></div>\r\n          <div id=\"sous_titre_perjeta_s1\"></div>\r\n          <div id=\"text_perjeta_s1\"></div>\r\n          <div id=\"schema_perjeta_s1\">\r\n    \r\n            <div id=\"trait_perjeta_s1\"></div>\r\n            \r\n            <div id=\"cercle_perjeta_s1\">\r\n                <audio src=\"slides/perjeta/PER_EPIDEMIO1/assets/fleche-1.mp3\" autostart=\"true\"  id=\"cercle_sound\" ></audio> \r\n\r\n                <div id=\"demi_cercle_perjeta_s1\"></div>\r\n                <div id=\"text_her_perjeta_s1\"></div>\r\n\r\n                <div id=\"texte_dans_cercle\">\r\n\r\n                  <div id=\"petit_text1_perjeta_s1\"></div>\r\n                  <div id=\"petit_text2_perjeta_s1\"></div>\r\n                  <div id=\"fleche1_perjeta_s1\"></div>\r\n                  <div id=\"fleche2_perjeta_s1\"></div>\r\n                </div>\r\n            </div>\r\n    \r\n            <div id=\"trait_vert_perjeta_s1\"></div>\r\n          </div>\r\n      </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_CONC3/PER_CONC3.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Conclusion 3</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_CONC3\" class=\"slide\">\r\n        <div id=\"CONC3\">\r\n\r\n          <div id=\"titre_perjeta_s14\"></div>  \r\n          <div id=\"sous_titre_perjeta_s14\"></div>      \r\n          <div id=\"texte_perjeta_s14\"></div>\r\n\r\n          <div id=\"bloc_perjeta_s14\">\r\n              <div id=\"sousbloc1_perjeta_s14\"></div>\r\n              <div id=\"sousbloc2_perjeta_s14\"></div>\r\n              <div id=\"ligne_perjeta_s14\"></div>\r\n              <div id=\"cycles_perjeta_s14\"></div>\r\n\r\n\r\n          </div>\r\n      </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_EPIDEMIO2/PER_EPIDEMIO2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Epidémiologie 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_EPIDEMIO2\" class=\"slide\">\r\n        <div id=\"EPIDEMIO2\">\r\n\r\n          <div id=\"titre_perjeta_s2\"></div>\r\n          <div id=\"gif_perjeta_s2\"></div>\r\n          <div id=\"texte_perjeta_s2\"></div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_EPIDEMIO3/PER_EPIDEMIO3.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Epidémiologie 3</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_EPIDEMIO3\" class=\"slide\">\r\n        <div id=\"EPIDEMIO3\">\r\n\r\n          <div id=\"titre_perjeta_s3\"></div>\r\n          <div id=\"texte_perjeta_s3\"></div>\r\n          <div id=\"courbe_perjeta_s3\" onclick=\"popup(\'popup_PER_EPIDEMIO3\',true)\" >\r\n              <div id=\"ligne_courbe_perjeta_s3\"></div>\r\n          </div>\r\n      </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_EPIDEMIO5/PER_EPIDEMIO5.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Epidémiologie 5</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_EPIDEMIO5\" class=\"slide\">\r\n        <div id=\"EPIDEMIO5\">\r\n\r\n            <div id=\"text-1-s6\"></div>\r\n            <div id=\"bloc-1-s6\" class=\"bloc-s6\">\r\n              <div class=\"elements\">\r\n                    <div id=\"element-1-s6\" class=\"element\"></div>\r\n                    <div id=\"element-2-s6\" class=\"element\"></div>\r\n                    <div id=\"element-3-s6\" class=\"element\">\r\n                    </div>\r\n\r\n              </div>\r\n            <div class=\"cercles\">\r\n                <div id=\"text_grid2\" class=\"texte_grid\">\r\n                    <div id=\"text1_cercle_1\"></div>\r\n                    <div id=\"text1_cercle_2\"></div>\r\n                    <div id=\"text1_cercle_3\"></div>\r\n                    <div id=\"text1_cercle_4\"></div>\r\n                </div>\r\n              <div id=\"cerlce-1-s6\" class=\"cercle\"></div>\r\n\r\n              <div id=\"cerlce-2-s6\" class=\"cercle\"></div>\r\n\r\n              <div id=\"cerlce-3-s6\" class=\"cercle cercle_grand\"></div>\r\n\r\n              <div id=\"cerlce-4-s6\" class=\"cercle cercle_enplace\"></div>\r\n            </div>\r\n      \r\n            </div>\r\n      \r\n            <!-- ------------------------- -->\r\n            <div id=\"bloc-2-s6\" class=\"bloc-s6\">\r\n                <div class=\"elements\">\r\n                    <div id=\"element-4-s6\" class=\"element\"></div>\r\n                    <div id=\"element-5-s6\" class=\"element\"></div>\r\n                    <div id=\"element-6-s6\" class=\"element \">\r\n                    </div>\r\n\r\n              </div>\r\n                <div class=\"cercles\">\r\n                    <div id=\"text_grid2\" class=\"texte_grid\">\r\n                    <div id=\"text1_cercle_5\"></div>\r\n                    <div id=\"text1_cercle_6\"></div>\r\n                    <div id=\"text1_cercle_7\"></div>\r\n                    <div id=\"text1_cercle_8\"></div>\r\n                  </div>\r\n\r\n                    <div id=\"cerlce-5-s6\" class=\"cercle\"></div>\r\n\r\n                    <div id=\"cerlce-6-s6\" class=\"cercle cercle_grand\"></div>\r\n\r\n                    <div id=\"cerlce-7-s6\" class=\"cercle cercle_enplace\"></div>\r\n\r\n \r\n                    <div id=\"cerlce-8-s6\" class=\"cercle \"></div>\r\n                </div>\r\n      \r\n      \r\n            </div>\r\n          </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_EPIDEMIO6/PER_EPIDEMIO6.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Epidémiologie 6</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_EPIDEMIO6\" class=\"slide\">\r\n            <div id=\"EPIDEMIO6\">\r\n\r\n                <div id=\"titre_perjeta_s6\"></div>     \r\n                <div id =\"bloc_perjeta_s6\">\r\n                    <div id =\"sous_bloc1_perjeta_s6\">\r\n                        <div id =\"picto1_sous_bloc1_perjeta_s6\"></div>\r\n\r\n                    </div>\r\n                    <div id =\"sous_bloc2_perjeta_s6\">\r\n                        <div id =\"picto2_sous_bloc2_perjeta_s6\"></div>\r\n\r\n                    </div>\r\n                    <div id =\"sous_bloc3_perjeta_s6\">\r\n                        <div id =\"picto3_sous_bloc3_perjeta_s6\"></div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_EPIDEMIO4/PER_EPIDEMIO4.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Epidémiologie 4</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_EPIDEMIO4\" class=\"slide\">\r\n        <div id=\"EPIDEMIO4\">\r\n\r\n          <div id=\"titre_perjeta_s5\"></div>\r\n          <div id=\"courbe_perjeta_s5\"  onclick=\"popup(\'popup_PER_EPIDEMIO4\',true)\">\r\n              <div id=\"ligne_courbe_perjeta_s5\"></div>\r\n              <div id=\"chiffres_courbe_perjeta_s5\">\r\n                <div id=\"fleche1_courbe_perjeta_s5\"></div>\r\n                <div id=\"numero_courbe_perjeta_s5\"></div>\r\n                <div id=\"fleche2_courbe_perjeta_s5\"></div>\r\n\r\n              </div>\r\n\r\n          </div>\r\n          <div id=\"texte_perjeta_s5\"></div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_PRAC1/PER_PRAC1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>En pratique 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_PRAC1\" class=\"slide\">\r\n        <div id=\"PRAC1\">\r\n\r\n          <div id=\"titre_perjeta_s10\"></div>\r\n          <div id=\"sous_titre_perjeta_s10\"></div>\r\n\r\n          <div id=\"schema_perjeta_s9\" onclick=\"popup(\'popup2_PER_PRAC1\',false)\">\r\n              <div id=\"titre_bloc_schema_perjeta_s9\">\r\n                  <div id=\"soustitre1_bloc\"></div>\r\n                  <div id=\"soustitre2_bloc\"></div>\r\n\r\n              </div>\r\n\r\n            <div id=\"bloc1_schema_perjeta_s9\">\r\n              <div id=\"icones_bloc1_schema_perjeta_s9\"></div>\r\n\r\n            </div>\r\n            <div id=\"bloc2_schema_perjeta_s9\">\r\n              <div id=\"icones_bloc2_schema_perjeta_s9\"></div>\r\n            </div>\r\n            <div id=\"bloc3_schema_perjeta_s9\">\r\n              <div id=\"icones_bloc3_schema_perjeta_s9\"></div>\r\n            </div>\r\n\r\n          </div>\r\n    </div>\r\n\r\n      </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_PRAC2/PER_PRAC2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>En pratique 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_PRAC2\" class=\"slide\">\r\n        <div id=\"PRAC2\">\r\n\r\n          <div id=\"titre_perjeta_s11\"></div>      \r\n          <div id=\"tableau_perjeta_s11\">\r\n            \r\n              <div id=\"contenu_tableau_perjeta_s11\">\r\n                  \r\n\r\n              </div>\r\n              <div id=\"titre_tableau_perjeta_s11\"></div>\r\n            \r\n          </div>\r\n          <div id=\"texte_perjeta_s11\"></div> \r\n      </div> \r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/perjeta/PER_PRAC3/PER_PRAC3.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>En pratique 3</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"PER_PRAC3\" class=\"slide\">\r\n        <div id=\"PRAC3\">\r\n\r\n            <div id=\"grid_perjeta_s12\">\r\n                <div id=\"sousgrid1_perjeta_s12\">\r\n                    <div id=\"picto1_perjeta_s12\"></div>  \r\n                </div>  \r\n\r\n                <div id=\"sousgrid2_perjeta_s12\">\r\n                    <div id=\"picto2_perjeta_s12\"></div>  \r\n                </div>  \r\n\r\n                <div id=\"sousgrid3_perjeta_s12\">\r\n                    <div id=\"picto3_perjeta_s12\"></div>  \r\n                </div>  \r\n            </div>\r\n        </div>  \r\n  \r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/tryphaena/try_conc/try_conc.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Conclusion</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"try_conc\" class=\"slide\">\r\n      <div id=\"try_conc_warpper\">\r\n            <div id=\"titre_tryphaena_s7\"></div>\r\n            <div id=\"soustitre_tryphaena_s7\"></div>\r\n            <div id=\"texte_tryphaena_s7\">\r\n                <div id=\"gif1_tryphaena_s7\"></div>\r\n                <div id=\"gif2_tryphaena_s7\"></div>\r\n                <div id=\"gif3_tryphaena_s7\"></div>\r\n                <div id=\"gif4_tryphaena_s7\"></div>\r\n\r\n\r\n            </div>\r\n      </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/tryphaena/try_design1/try_design1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Design de l\'etude 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"try_design1\" class=\"slide\">\r\n    <div id=\"try_design1_warpper\">\r\n        <div id=\"titre_tryphaena_s1\"></div>\r\n        <div id=\"soustitre_tryphaena_s1\"></div>\r\n        <div id=\"schema_tryphaena_s1\" onclick=\"popup(\'popup_try_design1\',false)\">\r\n          <div id=\"titre1_tryphaena_s1\"></div>\r\n          <div id=\"titre2_tryphaena_s1\"></div>\r\n        \r\n          <div id=\"bloc1_neo_tryphaena_s1\"></div>\r\n          <div class=\"one-two-three-adj\" id=\"bloc1_adj_tryphaena_s1\"></div>\r\n\r\n          <div id=\"bloc2_neo_tryphaena_s1\"></div>\r\n          <div class=\"one-two-three-adj\" id=\"bloc2_adj_tryphaena_s1\"></div>\r\n\r\n          <div id=\"bloc3_neo_tryphaena_s1\"></div>\r\n          <div class=\"one-two-three-adj\" id=\"bloc3_adj_tryphaena_s1\"></div>\r\n\r\n\r\n        </div>\r\n        <div id=\"texte_tryphaena_s1\"></div>\r\n    </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/tryphaena/try_design2/try_design2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Design de l\'etude 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"try_design2\" class=\"slide\">\r\n      <div id=\"try_design2_warpper\">\r\n        <div id=\"bloc1_tryphaena_s2\">\r\n            <div id=\"blocnote1_tryphaena_s2\"></div>\r\n            <div id=\"texte1_tryphaena_s2\"></div>\r\n\r\n        </div>\r\n        <div id=\"bloc2_tryphaena_s2\">\r\n            <div id=\"blocnote2_tryphaena_s2\"></div>\r\n            <div id=\"texte2_tryphaena_s2\"></div>\r\n        </div>\r\n\r\n      </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/tryphaena/conc_popup1/conc_popup1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>conc_popup1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"conc_popup1\" class=\"slide\">\r\n\r\n<!-- slide1 -->\r\n  <div id=\"popup1_conclusion\" >\r\n\r\n        <div id=\"titre_conc_popup1\" ></div>\r\n\r\n        <div id=\"contenu_conc_popup1\">\r\n          <div id=\"partie1_conc_popup1\">\r\n            <div id=\"titre_partie1_conc_popup1\"></div>\r\n            <div id=\"schema_partie1_conc_popup1\">\r\n                <div id=\"cadre1_schema_partie1_conc_popup1\"></div>\r\n                <div id=\"tires_schema_partie1_conc_popup1\"></div>\r\n                <div id=\"cadres_schema_partie1_conc_popup1\"></div>\r\n                <div id=\"fleche_schema_partie1_conc_popup1\"></div>\r\n\r\n            </div>\r\n          </div>\r\n          <div id=\"partie2_conc_popup1\">\r\n            <div id=\"titre_partie2_conc_popup1\"></div>\r\n            <div id=\"texte_partie2_conc_popup1\"></div>\r\n          </div>\r\n        </div>\r\n        <div id=\"ref_conc_popup1\"></div>\r\n\r\n        <div id=\"buttons_conc_popup1\">\r\n            <div id=\"button1_conc_popup1\"></div>\r\n              <div id=\"button2_conc_popup1\" onclick=\"suiv1()\"></div>\r\n        </div>\r\n    </div>\r\n<!-- slide2 -->\r\n  <div id=\"popup2_conclusion\" >\r\n\r\n        <div id=\"titre_conc_popup2\"></div>\r\n        <div id=\"soustitre_conc_popup2\"></div>\r\n        <div id=\"contenu_conc_popup2\"></div>\r\n        <div id=\"buttons_conc_popup1\">\r\n              <div id=\"button1_conc_popup2\"onclick=\"prec1()\"></div>\r\n\r\n            <div id=\"button2_conc_popup1\" onclick=\"suiv2()\"></div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n<!-- slide3 -->\r\n<div id=\"popup3_conclusion\" >\r\n\r\n  <div id=\"titre_conc_popup3\"></div>\r\n  <div id=\"soustitre_conc_popup3\"></div>\r\n  <div id=\"contenu_conc_popup3\"></div>\r\n\r\n  <div id=\"buttons_conc_popup1\">\r\n        <div id=\"button1_conc_popup2\"onclick=\"prec2()\"></div>\r\n      \r\n      <div id=\"button2_conc_popup1\"onclick=\"suiv3()\"></div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- slide4 -->\r\n  <div id=\"popup4_conclusion\" >\r\n\r\n\r\n    <div id=\"titre_conc_popup4\"></div>\r\n    <div id=\"soustitre_conc_popup4\"></div>\r\n\r\n    <div id=\"contenu_conc_popup4\">\r\n        <div id=\"diag_conc_popup4\"></div>\r\n        <div id=\"texte1_conc_popup4\"></div>\r\n        <div id=\"fleche2_conc_popup4\"></div>\r\n        <div id=\"cycle1_conc_popup4\"></div>\r\n        <div id=\"medecin_conc_popup4\"></div>\r\n        <div id=\"cycle2_conc_popup4\"></div>\r\n        <div id=\"texte2_conc_popup4\"></div>\r\n        <div id=\"texte3_conc_popup4\"></div>\r\n\r\n\r\n    </div>\r\n    <div id=\"texte_conc_popup4\"></div>\r\n\r\n    <div id=\"buttons_conc_popup1\">\r\n          <div id=\"button1_conc_popup2\"onclick=\"prec3()\"></div>\r\n\r\n        <div id=\"button2_conc_popup4\"></div>\r\n    </div>\r\n  </div>\r\n\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/tryphaena/try_efficacy1/try_efficacy1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Efficacité 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"try_efficacy1\" class=\"slide\">\r\n        <div id=\"try_efficacy1_warpper\">\r\n            <div id=\"titre_tryphaena_s3\"></div>\r\n\r\n            <div id =\"courbe_tryphaena_s3\">\r\n              <div id =\"partie1_tryphaena_s3\">\r\n                  <div id =\"texte1_tryphaena_s3\"></div>\r\n                  <div id =\"bloc1_tryphaena_s3\"></div>\r\n                  \r\n\r\n              </div>\r\n\r\n              <div id =\"partie2_tryphaena_s3\">\r\n                  <div id =\"texte2_tryphaena_s3\"></div>\r\n                  <div id =\"bloc2_tryphaena_s3\"></div>\r\n                  \r\n              </div>\r\n\r\n              <div id =\"partie3_tryphaena_s3\">\r\n                  <div id =\"texte3_tryphaena_s3\"></div>\r\n\r\n                  <div id =\"bloc3_tryphaena_s3\"></div>\r\n              </div>\r\n\r\n         </div>\r\n\r\n    </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/tryphaena/try_efficacy2/try_efficacy2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Efficacité 2</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"try_efficacy2\" class=\"slide\">\r\n        <div id=\"try_efficacy2_warpper\">\r\n\r\n          <div id=\"courbe_tryphaena_s4\">\r\n              <div id=\"blocgrid_tryphaena_s4\">\r\n\r\n                <div id=\"bloc1_tryphaena_s4\">\r\n                    <div id=\"texte_vert\"></div>\r\n                    <div id=\"bloc_vert\"></div>\r\n                </div>\r\n                <div id=\"bloc2_tryphaena_s4\">\r\n                    <div id=\"texte_orange\"></div>\r\n                    <div id=\"bloc_orange\"></div>\r\n                </div>\r\n                <div id=\"bloc3_tryphaena_s4\">\r\n                    <div id=\"texte_gris\"></div>\r\n                    <div id=\"bloc_gris\"></div>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n          <div id=\"ref_tryphaena_s4\"></div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/tryphaena/try_safety2/try_safety2.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Tolérance 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"try_safety2\" class=\"slide\">\r\n        <div id=\"try_safety2_warpper\">\r\n            <div id=\"titre_safety2_s6\"></div>\r\n            <div id=\"courbe_safety2_s6\" onclick=\"popup(\'popup_try_safety2\',true)\">\r\n                <div id=\"lignecourbe_safety2_s6\"></div>\r\n                <div id=\"line_3\" ></div>\r\n                \r\n                \r\n                <div id=\"line_1\" ></div>\r\n                <div id=\"line_2\" ></div>\r\n                \r\n            </div>\r\n            <div id=\"ref_safety2_s6\"></div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("slides/tryphaena/try_safety1/try_safety1.html","<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>Tolérance 1</title>\r\n  </head>\r\n  <body>\r\n    <article id=\"try_safety1\" class=\"slide\">\r\n        <div id=\"try_safety1_warpper\">\r\n            <div id=\"titre_safety1_s5\"></div>\r\n            <div id=\"tableau_safety1_s5\" onclick=\"popup(\'popup_try_safety1\',false)\">\r\n              <div id=\"entetes_try_safety1\">\r\n                  <div class=\"one-two-three\" id=\"entete1_try_safety1\"></div>\r\n                  <div class=\"one-two-three\" id=\"entete2_try_safety1\"></div>\r\n                  <div class=\"one-two-three\" id=\"entete3_try_safety1\"></div>\r\n\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </article>\r\n  </body>\r\n</html>");
app.cache.put("config.json","{}");
app.cache.put("presentation.json","{\r\n    \"slides\": {\r\n        \"welcome\": {\r\n            \"name\": \"Welcome\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/welcome/welcome.html\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/welcome/style.css\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/welcome/welcome.js\"\r\n                ]\r\n            },\r\n            \"type\": \"slide\"\r\n        },\r\n        \"opening\": {\r\n            \"id\": \"opening\",\r\n            \"name\": \"Page de garde\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/opening/opening.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/opening/opening.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/opening/opening.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"Home-4-RUB\": {\r\n            \"id\": \"Home-4-RUB\",\r\n            \"name\": \"Menu avec 4 rubriques\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/Home-4-RUB/Home-4-RUB.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/Home-4-RUB/Home-4-RUB.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/Home-4-RUB/Home-4-RUB.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_EPIDEMIO1\": {\r\n            \"id\": \"PER_EPIDEMIO1\",\r\n            \"name\": \"Epidémiologie 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO1/PER_EPIDEMIO1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO1/PER_EPIDEMIO1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO1/PER_EPIDEMIO1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_EPIDEMIO2\": {\r\n            \"id\": \"PER_EPIDEMIO2\",\r\n            \"name\": \"Epidémiologie 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO2/PER_EPIDEMIO2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO2/PER_EPIDEMIO2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO2/PER_EPIDEMIO2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_EPIDEMIO3\": {\r\n            \"id\": \"PER_EPIDEMIO3\",\r\n            \"name\": \"Epidémiologie 3\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO3/PER_EPIDEMIO3.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO3/PER_EPIDEMIO3.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO3/PER_EPIDEMIO3.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_EPIDEMIO4\": {\r\n            \"id\": \"PER_EPIDEMIO4\",\r\n            \"name\": \"Epidémiologie 4\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO4/PER_EPIDEMIO4.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO4/PER_EPIDEMIO4.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO4/PER_EPIDEMIO4.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_EPIDEMIO5\": {\r\n            \"id\": \"PER_EPIDEMIO5\",\r\n            \"name\": \"Epidémiologie 5\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO5/PER_EPIDEMIO5.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO5/PER_EPIDEMIO5.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO5/PER_EPIDEMIO5.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_EPIDEMIO6\": {\r\n            \"id\": \"PER_EPIDEMIO6\",\r\n            \"name\": \"Epidémiologie 6\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO6/PER_EPIDEMIO6.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO6/PER_EPIDEMIO6.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_EPIDEMIO6/PER_EPIDEMIO6.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_CLINICAL1\": {\r\n            \"id\": \"PER_CLINICAL1\",\r\n            \"name\": \"Essais cliniques 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_CLINICAL1/PER_CLINICAL1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_CLINICAL1/PER_CLINICAL1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_CLINICAL1/PER_CLINICAL1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_CLINICAL2\": {\r\n            \"id\": \"PER_CLINICAL2\",\r\n            \"name\": \"Essais cliniques 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_CLINICAL2/PER_CLINICAL2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_CLINICAL2/PER_CLINICAL2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_CLINICAL2/PER_CLINICAL2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_PRAC1\": {\r\n            \"id\": \"PER_PRAC1\",\r\n            \"name\": \"En pratique 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_PRAC1/PER_PRAC1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_PRAC1/PER_PRAC1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_PRAC1/PER_PRAC1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_PRAC2\": {\r\n            \"id\": \"PER_PRAC2\",\r\n            \"name\": \"En pratique 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_PRAC2/PER_PRAC2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_PRAC2/PER_PRAC2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_PRAC2/PER_PRAC2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_PRAC3\": {\r\n            \"id\": \"PER_PRAC3\",\r\n            \"name\": \"En pratique 3\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_PRAC3/PER_PRAC3.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_PRAC3/PER_PRAC3.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_PRAC3/PER_PRAC3.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_CONC1\": {\r\n            \"id\": \"PER_CONC1\",\r\n            \"name\": \"Conclusion 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_CONC1/PER_CONC1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_CONC1/PER_CONC1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_CONC1/PER_CONC1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_CONC2\": {\r\n            \"id\": \"PER_CONC2\",\r\n            \"name\": \"Conclusion 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_CONC2/PER_CONC2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_CONC2/PER_CONC2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_CONC2/PER_CONC2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"PER_CONC3\": {\r\n            \"id\": \"PER_CONC3\",\r\n            \"name\": \"Conclusion 3\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/perjeta/PER_CONC3/PER_CONC3.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/perjeta/PER_CONC3/PER_CONC3.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/perjeta/PER_CONC3/PER_CONC3.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_DESIGN1\": {\r\n            \"id\": \"NEO_DESIGN1\",\r\n            \"name\": \"Design de l’étude 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_DESIGN1/NEO_DESIGN1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_DESIGN1/NEO_DESIGN1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_DESIGN1/NEO_DESIGN1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_DESIGN2\": {\r\n            \"id\": \"NEO_DESIGN2\",\r\n            \"name\": \"Design de l’étude 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_DESIGN2/NEO_DESIGN2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_DESIGN2/NEO_DESIGN2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_DESIGN2/NEO_DESIGN2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_EFFICACY1\": {\r\n            \"id\": \"NEO_EFFICACY1\",\r\n            \"name\": \"Efficacité 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_EFFICACY1/NEO_EFFICACY1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_EFFICACY1/NEO_EFFICACY1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_EFFICACY1/NEO_EFFICACY1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_EFFICACY2\": {\r\n            \"id\": \"NEO_EFFICACY2\",\r\n            \"name\": \"Efficacité 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_EFFICACY2/NEO_EFFICACY2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_EFFICACY2/NEO_EFFICACY2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_EFFICACY2/NEO_EFFICACY2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_EFFICACY3\": {\r\n            \"id\": \"NEO_EFFICACY3\",\r\n            \"name\": \"Efficacité 3\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_EFFICACY3/NEO_EFFICACY3.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_EFFICACY3/NEO_EFFICACY3.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_EFFICACY3/NEO_EFFICACY3.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_EFFICACY4\": {\r\n            \"id\": \"NEO_EFFICACY4\",\r\n            \"name\": \"Efficacité 4\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_EFFICACY4/NEO_EFFICACY4.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_EFFICACY4/NEO_EFFICACY4.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_EFFICACY4/NEO_EFFICACY4.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_SAFETY1\": {\r\n            \"id\": \"NEO_SAFETY1\",\r\n            \"name\": \"Tolérance 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_SAFETY1/NEO_SAFETY1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_SAFETY1/NEO_SAFETY1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_SAFETY1/NEO_SAFETY1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_SAFETY2\": {\r\n            \"id\": \"NEO_SAFETY2\",\r\n            \"name\": \"Tolérance 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_SAFETY2/NEO_SAFETY2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_SAFETY2/NEO_SAFETY2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_SAFETY2/NEO_SAFETY2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_SAFETY3\": {\r\n            \"id\": \"NEO_SAFETY3\",\r\n            \"name\": \"Tolérance 3\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_SAFETY3/NEO_SAFETY3.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_SAFETY3/NEO_SAFETY3.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_SAFETY3/NEO_SAFETY3.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"NEO_CONC\": {\r\n            \"id\": \"NEO_CONC\",\r\n            \"name\": \"Conclusion\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/neosphere//NEO_CONC/NEO_CONC.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/neosphere//NEO_CONC/NEO_CONC.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/neosphere//NEO_CONC/NEO_CONC.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"try_design1\": {\r\n            \"id\": \"try_design1\",\r\n            \"name\": \"Design de l\'etude 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/tryphaena/try_design1/try_design1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/tryphaena/try_design1/try_design1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/tryphaena/try_design1/try_design1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"try_design2\": {\r\n            \"id\": \"try_design2\",\r\n            \"name\": \"Design de l\'etude 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/tryphaena/try_design2/try_design2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/tryphaena/try_design2/try_design2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/tryphaena/try_design2/try_design2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"try_efficacy1\": {\r\n            \"id\": \"try_efficacy1\",\r\n            \"name\": \"Efficacité 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/tryphaena/try_efficacy1/try_efficacy1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/tryphaena/try_efficacy1/try_efficacy1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/tryphaena/try_efficacy1/try_efficacy1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"try_efficacy2\": {\r\n            \"id\": \"try_efficacy2\",\r\n            \"name\": \"Efficacité 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/tryphaena/try_efficacy2/try_efficacy2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/tryphaena/try_efficacy2/try_efficacy2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/tryphaena/try_efficacy2/try_efficacy2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"try_safety1\": {\r\n            \"id\": \"try_safety1\",\r\n            \"name\": \"Tolérance 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/tryphaena/try_safety1/try_safety1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/tryphaena/try_safety1/try_safety1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/tryphaena/try_safety1/try_safety1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"try_safety2\": {\r\n            \"id\": \"try_safety2\",\r\n            \"name\": \"Tolérance 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/tryphaena/try_safety2/try_safety2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/tryphaena/try_safety2/try_safety2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/tryphaena/try_safety2/try_safety2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"try_conc\": {\r\n            \"id\": \"try_conc\",\r\n            \"name\": \"Conclusion\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/tryphaena/try_conc/try_conc.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/tryphaena/try_conc/try_conc.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/tryphaena/try_conc/try_conc.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"conc_popup1\": {\r\n            \"id\": \"conc_popup1\",\r\n            \"name\": \"conc_popup1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/tryphaena/conc_popup1/conc_popup1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/tryphaena/conc_popup1/conc_popup1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/tryphaena/conc_popup1/conc_popup1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_DESIGN1\": {\r\n            \"id\": \"APH_DESIGN1\",\r\n            \"name\": \"Design de l’étude 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_DESIGN1/APH_DESIGN1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_DESIGN1/APH_DESIGN1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_DESIGN1/APH_DESIGN1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_DESIGN2\": {\r\n            \"id\": \"APH_DESIGN2\",\r\n            \"name\": \"Design de l’étude 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_DESIGN2/APH_DESIGN2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_DESIGN2/APH_DESIGN2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_DESIGN2/APH_DESIGN2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_DESIGN3\": {\r\n            \"id\": \"APH_DESIGN3\",\r\n            \"name\": \"Design de l’étude 3\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_DESIGN3/APH_DESIGN3.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_DESIGN3/APH_DESIGN3.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_DESIGN3/APH_DESIGN3.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_EFF1\": {\r\n            \"id\": \"APH_EFF1\",\r\n            \"name\": \"Efficacité 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_EFF1/APH_EFF1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_EFF1/APH_EFF1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_EFF1/APH_EFF1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_EFF2\": {\r\n            \"id\": \"APH_EFF2\",\r\n            \"name\": \"Efficacité 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_EFF2/APH_EFF2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_EFF2/APH_EFF2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_EFF2/APH_EFF2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_GROUP1\": {\r\n            \"id\": \"APH_GROUP1\",\r\n            \"name\": \"Analyse de sous-groupe 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_GROUP1/APH_GROUP1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_GROUP1/APH_GROUP1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_GROUP1/APH_GROUP1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_GROUP2\": {\r\n            \"id\": \"APH_GROUP2\",\r\n            \"name\": \"Analyse de sous-groupe 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_GROUP2/APH_GROUP2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_GROUP2/APH_GROUP2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_GROUP2/APH_GROUP2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_GROUP3\": {\r\n            \"id\": \"APH_GROUP3\",\r\n            \"name\": \"Analyse de sous-groupe 3\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_GROUP3/APH_GROUP3.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_GROUP3/APH_GROUP3.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_GROUP3/APH_GROUP3.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_GROUP4\": {\r\n            \"id\": \"APH_GROUP4\",\r\n            \"name\": \"Analyse de sous-groupe 4\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_GROUP4/APH_GROUP4.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_GROUP4/APH_GROUP4.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_GROUP4/APH_GROUP4.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_GROUP5\": {\r\n            \"id\": \"APH_GROUP5\",\r\n            \"name\": \"Analyse de sous-groupe 5\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_GROUP5/APH_GROUP5.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_GROUP5/APH_GROUP5.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_GROUP5/APH_GROUP5.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_SECURITY1\": {\r\n            \"id\": \"APH_SECURITY1\",\r\n            \"name\": \"Tolérance 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_SECURITY1/APH_SECURITY1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_SECURITY1/APH_SECURITY1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_SECURITY1/APH_SECURITY1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_SECURITY2\": {\r\n            \"id\": \"APH_SECURITY2\",\r\n            \"name\": \"Tolérance 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_SECURITY2/APH_SECURITY2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_SECURITY2/APH_SECURITY2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_SECURITY2/APH_SECURITY2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_SECURITY3\": {\r\n            \"id\": \"APH_SECURITY3\",\r\n            \"name\": \"Tolérance 3\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_SECURITY3/APH_SECURITY3.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_SECURITY3/APH_SECURITY3.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_SECURITY3/APH_SECURITY3.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_SECURITY4\": {\r\n            \"id\": \"APH_SECURITY4\",\r\n            \"name\": \"Tolérance 4\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_SECURITY4/APH_SECURITY4.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_SECURITY4/APH_SECURITY4.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_SECURITY4/APH_SECURITY4.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_QOL1\": {\r\n            \"id\": \"APH_QOL1\",\r\n            \"name\": \"Quality de vie 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_QOL1/APH_QOL1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_QOL1/APH_QOL1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_QOL1/APH_QOL1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_CONC1\": {\r\n            \"id\": \"APH_CONC1\",\r\n            \"name\": \"Conclusions 1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_CONC1/APH_CONC1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_CONC1/APH_CONC1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_CONC1/APH_CONC1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_CONC2\": {\r\n            \"id\": \"APH_CONC2\",\r\n            \"name\": \"Conclusions 2\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_CONC2/APH_CONC2.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_CONC2/APH_CONC2.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_CONC2/APH_CONC2.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"APH_CONC3\": {\r\n            \"id\": \"APH_CONC3\",\r\n            \"name\": \"Conclusions 3\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity/APH_CONC3/APH_CONC3.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity/APH_CONC3/APH_CONC3.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity/APH_CONC3/APH_CONC3.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"posologie_neo_efficacite1\": {\r\n            \"id\": \"posologie_neo_efficacite1\",\r\n            \"name\": \"posologie_neo_efficacite1\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/posologie_neo_efficacite1/posologie_neo_efficacite1.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/posologie_neo_efficacite1/posologie_neo_efficacite1.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/posologie_neo_efficacite1/posologie_neo_efficacite1.css\"\r\n                ]\r\n            }\r\n        },\r\n        \"aphinity_reco\": {\r\n            \"id\": \"aphinity_reco\",\r\n            \"name\": \"aphinity_reco\",\r\n            \"files\": {\r\n                \"templates\": [\r\n                    \"slides/aphinity_reco/aphinity_reco.html\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"slides/aphinity_reco/aphinity_reco.js\"\r\n                ],\r\n                \"styles\": [\r\n                    \"slides/aphinity_reco/aphinity_reco.css\"\r\n                ]\r\n            }\r\n        }\r\n    },\r\n    \"modules\": {\r\n        \"ag-auto-menu\": {\r\n            \"name\": \"Agnitio Auto Menu\",\r\n            \"description\": \"Menu that automatically builds.\",\r\n            \"type\": \"global\",\r\n            \"files\": {\r\n                \"styles\": [\r\n                    \"modules/ag-auto-menu/ag-auto-menu.css\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"modules/ag-auto-menu/ag-auto-menu.js\"\r\n                ]\r\n            },\r\n            \"dependencies\": [\r\n                {\r\n                    \"global\": \"Draggy\",\r\n                    \"src\": \"accelerator/lib/draggy.js\"\r\n                }\r\n            ],\r\n            \"version\": \"0.9.5\"\r\n        },\r\n        \"ag-overlay\": {\r\n            \"name\": \"Agnitio Overlay\",\r\n            \"type\": \"universal\",\r\n            \"description\": \"Creates an overlay to the presentation.\",\r\n            \"files\": {\r\n                \"styles\": [\r\n                    \"modules/ag-overlay/ag-overlay.css\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"modules/ag-overlay/ag-overlay.js\"\r\n                ]\r\n            },\r\n            \"version\": \"0.5.2\"\r\n        },\r\n        \"ag-indicators\": {\r\n            \"name\": \"Agnitio Indicators\",\r\n            \"description\": \"Indicators of slides and current position.\",\r\n            \"type\": \"global\",\r\n            \"files\": {\r\n                \"styles\": [\r\n                    \"modules/ag-indicators/ag-indicators.css\"\r\n                ],\r\n                \"scripts\": [\r\n                    \"modules/ag-indicators/ag-indicators.js\"\r\n                ]\r\n            },\r\n            \"version\": \"0.9.5\"\r\n        }\r\n    },\r\n    \"structures\": {\r\n        \"perjeta_chap1\": {\r\n            \"name\": \"Epidémiologie\",\r\n            \"id\": \"perjeta_chap1\",\r\n            \"content\": [\r\n                \"PER_EPIDEMIO1\",\r\n                \"PER_EPIDEMIO2\",\r\n                \"PER_EPIDEMIO3\",\r\n                \"PER_EPIDEMIO4\",\r\n                \"PER_EPIDEMIO5\",\r\n                \"PER_EPIDEMIO6\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"perjeta_chap2\": {\r\n            \"name\": \"Essais Cliniques\",\r\n            \"id\": \"perjeta_chap2\",\r\n            \"content\": [\r\n                \"PER_CLINICAL1\",\r\n                \"PER_CLINICAL2\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"perjeta_chap3\": {\r\n            \"name\": \"En Pratique\",\r\n            \"id\": \"perjeta_chap3\",\r\n            \"content\": [\r\n                \"PER_PRAC1\",\r\n                \"PER_PRAC2\",\r\n                \"PER_PRAC3\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"perjeta_chap4\": {\r\n            \"name\": \"Conclusions\",\r\n            \"id\": \"perjeta_chap4\",\r\n            \"content\": [\r\n                \"PER_CONC1\",\r\n                \"PER_CONC2\",\r\n                \"PER_CONC3\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"neosphere_chap1\": {\r\n            \"name\": \"Design de l\'étude\",\r\n            \"id\": \"neosphere_chap1\",\r\n            \"content\": [\r\n                \"NEO_DESIGN1\",\r\n                \"NEO_DESIGN2\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"neosphere_chap2\": {\r\n            \"name\": \"Efficacité\",\r\n            \"id\": \"neosphere_chap2\",\r\n            \"content\": [\r\n                \"NEO_EFFICACY1\",\r\n                \"NEO_EFFICACY2\",\r\n                \"NEO_EFFICACY3\",\r\n                \"NEO_EFFICACY4\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"neosphere_chap3\": {\r\n            \"name\": \"Tolérance\",\r\n            \"id\": \"neosphere_chap3\",\r\n            \"content\": [\r\n                \"NEO_SAFETY1\",\r\n                \"NEO_SAFETY2\",\r\n                \"NEO_SAFETY3\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"neosphere_chap4\": {\r\n            \"name\": \"Conclusions\",\r\n            \"id\": \"neosphere_chap4\",\r\n            \"content\": [\r\n                \"NEO_CONC\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"tryphaena_chap1\": {\r\n            \"name\": \"Design de l\'étude\",\r\n            \"id\": \"tryphaena_chap1\",\r\n            \"content\": [\r\n                \"try_design1\",\r\n                \"try_design2\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"tryphaena_chap2\": {\r\n            \"name\": \"Efficacité\",\r\n            \"id\": \"tryphaena_chap2\",\r\n            \"content\": [\r\n                \"try_efficacy1\",\r\n                \"try_efficacy2\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"tryphaena_chap3\": {\r\n            \"name\": \"Tolérance\",\r\n            \"id\": \"tryphaena_chap3\",\r\n            \"content\": [\r\n                \"try_safety1\",\r\n                \"try_safety2\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"tryphaena_chap4\": {\r\n            \"name\": \"Conclusions\",\r\n            \"id\": \"tryphaena_chap4\",\r\n            \"content\": [\r\n                \"try_conc\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"aphinity_chap1\": {\r\n            \"name\": \"Design de l\'étude\",\r\n            \"id\": \"aphinity_chap1\",\r\n            \"content\": [\r\n                \"APH_DESIGN1\",\r\n                \"APH_DESIGN2\",\r\n                \"APH_DESIGN3\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"aphinity_chap2\": {\r\n            \"name\": \"Efficacité\",\r\n            \"id\": \"aphinity_chap2\",\r\n            \"content\": [\r\n                \"APH_EFF1\",\r\n                \"APH_EFF2\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"aphinity_chap3\": {\r\n            \"name\": \"Analyse de sous-<br>groupes\",\r\n            \"id\": \"aphinity_chap3\",\r\n            \"content\": [\r\n                \"APH_GROUP1\",\r\n                \"APH_GROUP2\",\r\n                \"APH_GROUP3\",\r\n                \"APH_GROUP4\",\r\n                \"APH_GROUP5\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"aphinity_chap4\": {\r\n            \"name\": \"Tolérance\",\r\n            \"id\": \"aphinity_chap4\",\r\n            \"content\": [\r\n                \"APH_SECURITY1\",\r\n                \"APH_SECURITY2\",\r\n                \"APH_SECURITY3\",\r\n                \"APH_SECURITY4\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"aphinity_chap5\": {\r\n            \"name\": \"Qualité de vie\",\r\n            \"id\": \"aphinity_chap5\",\r\n            \"content\": [\r\n                \"APH_QOL1\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        },\r\n        \"aphinity_chap6\": {\r\n            \"name\": \"Conclusions\",\r\n            \"id\": \"aphinity_chap6\",\r\n            \"content\": [\r\n                \"APH_CONC1\",\r\n                \"APH_CONC2\",\r\n                \"APH_CONC3\"\r\n            ],\r\n            \"type\": \"slideshow\",\r\n            \"shareable\": {}\r\n        }\r\n    },\r\n    \"storyboard\": [\r\n        \"default\",\r\n        \"perjeta\",\r\n        \"aphinity\"\r\n    ],\r\n    \"storyboards\": {\r\n        \"default\": {\r\n            \"content\": [\r\n                \"opening\",\r\n                \"Home-4-RUB\"\r\n            ],\r\n            \"name\": \"Welcome\"\r\n        },\r\n        \"perjeta\": {\r\n            \"content\": [\r\n                \"perjeta_chap1\",\r\n                \"perjeta_chap2\",\r\n                \"perjeta_chap3\",\r\n                \"perjeta_chap4\"\r\n            ],\r\n            \"name\": \"perjeta\"\r\n        },\r\n        \"neosphere\": {\r\n            \"content\": [\r\n                \"neosphere_chap1\",\r\n                \"neosphere_chap2\",\r\n                \"neosphere_chap3\",\r\n                \"neosphere_chap4\"\r\n            ],\r\n            \"name\": \"neosphere\"\r\n        },\r\n        \"tryphaena\": {\r\n            \"content\": [\r\n                \"tryphaena_chap1\",\r\n                \"tryphaena_chap2\",\r\n                \"tryphaena_chap3\",\r\n                \"tryphaena_chap4\"\r\n            ],\r\n            \"name\": \"tryphaena\"\r\n        },\r\n        \"aphinity\": {\r\n            \"content\": [\r\n                \"aphinity_chap1\",\r\n                \"aphinity_chap2\",\r\n                \"aphinity_chap3\",\r\n                \"aphinity_chap4\",\r\n                \"aphinity_chap5\",\r\n                \"aphinity_chap6\"\r\n            ],\r\n            \"name\": \"aphinity\"\r\n        }\r\n    }\r\n}");