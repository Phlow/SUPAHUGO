(self.AMP=self.AMP||[]).push({n:"amp-instagram",v:"1903141753530",f:(function(AMP,_){
var f,k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var q={a:!0},t={};try{t.__proto__=q;n=t.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=m;var v;function w(a,b){var c=void 0,g=a,r=b;var d=function(a){try{return r(a)}catch(l){throw self.reportError(l),l;}};var e=x(),h=!1;c&&(h=c.capture);g.addEventListener("message",d,e?c:h);return function(){g&&g.removeEventListener("message",d,e?c:h);d=g=r=null}}function x(){if(void 0!==v)return v;v=!1;try{var a={get capture(){v=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return v};var y=Object.prototype.toString;self.log=self.log||{user:null,dev:null,userForEmbed:null};var z=self.log;function A(a,b){return w(a,b)};function B(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var C,E="Webkit webkit Moz moz ms O o".split(" ");function F(a,b){for(var c in b){var g=a,r=b[c];var d=g.style;var e=c;if(B(e,"--"))d=e;else{C||(C=Object.create(null));var h=C[e];if(!h){h=e;if(void 0===d[e]){var p=e.charAt(0).toUpperCase()+e.slice(1);b:{for(var l=0;l<E.length;l++){var D=E[l]+p;if(void 0!==d[D]){p=D;break b}}p=""}void 0!==d[p]&&(h=p)}C[e]=h}d=h}d&&(g.style[d]=r)}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function G(a){var b;try{return JSON.parse(a)}catch(c){b&&b(c)}};function H(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;a.h="";a.j=null;a.l="";a.m=null;return a}var I=AMP.BaseElement;H.prototype=k(I.prototype);H.prototype.constructor=H;if(u)u(H,I);else for(var J in I)if("prototype"!=J)if(Object.defineProperties){var K=Object.getOwnPropertyDescriptor(I,J);K&&Object.defineProperty(H,J,K)}else H[J]=I[J];H.w=I.prototype;f=H.prototype;
f.preconnectCallback=function(a){this.preconnect.url("https://www.instagram.com",a);this.preconnect.url("https://instagram.fsnc1-1.fna.fbcdn.net",a)};f.renderOutsideViewport=function(){return!1};
f.buildCallback=function(){var a=this.element.getAttribute("data-shortcode")||this.element.getAttribute("shortcode"),b=this.element;if(!z.user)throw Error("failed to call initLogConstructor");this.h=z.user.assert(a,"The data-shortcode attribute is required for <amp-instagram> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.l=this.element.hasAttribute("data-captioned")?"captioned/":""};
f.createPlaceholderCallback=function(){var a=this.win.document.createElement("div");a.setAttribute("placeholder","");var b=this.win.document.createElement("amp-img");b.setAttribute("noprerender","");b.setAttribute("src","https://www.instagram.com/p/"+encodeURIComponent(this.h)+"/media/?size=l");b.setAttribute("layout","fill");b.setAttribute("referrerpolicy","origin");this.propagateAttributes(["alt"],b);this.element.hasAttribute("data-default-framing")&&this.element.classList.add("amp-instagram-default-framing");
F(b,{top:"0 px",bottom:"0 px",left:"0 px",right:"0 px"});a.appendChild(b);return a};f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
f.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("iframe");this.c=b;this.j=A(this.win,this.o.bind(this));b.setAttribute("scrolling","no");b.setAttribute("frameborder","0");b.setAttribute("allowtransparency","true");b.setAttribute("title","Instagram: "+this.element.getAttribute("alt"));b.src="https://www.instagram.com/p/"+encodeURIComponent(this.h)+"/embed/"+this.l+"?cr=1&v=9";this.applyFillContent(b);this.element.appendChild(b);F(b,{opacity:0});return this.m=this.loadPromise(b).then(function(){a.getVsync().mutate(function(){F(b,
{opacity:1})})})};f.o=function(a){var b=this;if("https://www.instagram.com"==a.origin&&a.source==this.c.contentWindow){var c=a.data;if(c&&("[object Object]"===y.call(c)||B(c,"{"))&&(a="[object Object]"===y.call(c)?c:G(c),void 0!==a&&"MEASURE"==a.type&&a.details)){var g=a.details.height;this.getVsync().measure(function(){b.c&&b.c.offsetHeight!==g&&b.changeHeight(g)})}}};f.unlayoutOnPause=function(){return!0};
f.unlayoutCallback=function(){if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.m=this.c=null}this.j&&this.j();return!0};(function(a){a.registerElement("amp-instagram",H,"amp-instagram.amp-instagram-default-framing{border:1px solid #dbdbdb!important}\n/*# sourceURL=/extensions/amp-instagram/0.1/amp-instagram.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-instagram-0.1.js.map

