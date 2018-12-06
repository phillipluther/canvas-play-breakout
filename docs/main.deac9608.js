parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"yyhW":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function t(){e(this,t),this.el=document.createElement("canvas"),this.context=this.el.getContext("2d"),window.addEventListener("resize",this.resize.bind(this)),this.resize(),document.body.appendChild(this.el)}return n(t,[{key:"resize",value:function(){var e=window,t=e.innerHeight,n=e.innerWidth,i=n>t?t:n;this.el.setAttribute("width",i),this.el.setAttribute("height",i)}}]),t}();exports.default=i;
},{}],"Mi16":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function t(n){e(this,t),this.canvas=n,this.context=n.getContext("2d"),this.lives=3,this.score=0}return n(t,[{key:"draw",value:function(){var e=this.canvas,t=this.context,n=this.score,o=this.lives;t.font="1.25rem monospace",t.fillStyle="#994900",t.fillText("Score: ".concat(n),40,30),t.fillText("Lives: ".concat(o),e.width-150,30)}}]),t}();exports.default=o;
},{}],"z4pB":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function i(e){t(this,i),this.canvas=e,this.context=e.getContext("2d"),this.radius=10,this.speed=6,this.x=e.width/2,this.y=e.height-50,this.movingRight=!0,this.movingDown=!1}return e(i,[{key:"setNextPosition",value:function(){var t=this.movingRight,i=this.movingDown,e=this.speed,n=this.x,s=this.y,o=t?n+e:n-e,a=i?s+e:s-e;this.x=o,this.y=a}},{key:"draw",value:function(){this.setNextPosition();var t=this.context,i=this.x,e=this.y,n=this.radius;t.beginPath(),t.arc(i,e,n,0,2*Math.PI),t.fillStyle="#f90",t.fill(),t.closePath()}}]),i}();exports.default=n;
},{}],"I1Dc":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function i(e){var n=this;t(this,i),this.canvas=e,this.context=e.getContext("2d"),this.speed=8,this.width=100,this.height=15,this.offset=30,this.x=(e.width-this.width)/2,this.y=e.height-this.height-this.offset,this.movingLeft=!1,this.movingRight=!1,window.addEventListener("keydown",function(t){var i=t.key;"ArrowLeft"===i?n.movingLeft=!0:"ArrowRight"===i&&(n.movingRight=!0)}),window.addEventListener("keyup",function(t){var i=t.key;"ArrowLeft"===i?n.movingLeft=!1:"ArrowRight"===i&&(n.movingRight=!1)})}return e(i,[{key:"draw",value:function(){var t=this.canvas,i=this.context,e=this.x,n=this.y,h=this.speed,o=this.movingLeft,s=this.movingRight,r=this.width,a=this.height,f=e;if(o&&(f=e-h>0?e-h:0),s){var v=t.width-r;f=e+h<v?e+h:v}i.beginPath(),i.rect(f,n,r,a),i.fillStyle="#f90",i.fill(),i.closePath(),this.x=f}}]),i}();exports.default=n;
},{}],"sFYt":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function e(i,r,a){t(this,e),this.canvas=i,this.context=i.getContext("2d"),this.offsetX=40,this.offsetY=60,this.brickPad=10,this.brickHeight=30,this.toClear=r*a,this.layout=this.createLayout(r,a)}return i(e,[{key:"createLayout",value:function(t,e){for(var i=this.offsetX,r=this.offsetY,a=this.brickPad,o=this.brickHeight,n=this.canvas.width-2*i-t*a,f=Math.floor(n/t),s=[],c=0;c<t;){var h=0;for(s[c]||(s[c]=[]);h<e;){var u={width:f,height:o,cleared:!1,x:c*(f+a)+i,y:h*(o+a)+r};s[c][h]=u,h++}c++}return s}},{key:"draw",value:function(){var t=this.context;this.layout.forEach(function(e){e.forEach(function(e){var i=e.cleared,r=e.x,a=e.y,o=e.width,n=e.height;i||(t.beginPath(),t.rect(r,a,o,n),t.fillStyle="#f90",t.fill(),t.closePath())})})}}]),e}();exports.default=r;
},{}],"hmjp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(o,i,n,t){var e=o.canvas,a=o.movingRight,r=o.movingDown,v=o.x,g=o.y,d=o.radius,c=i.x,h=i.y,u=i.width,f=e.width;(a&&v>f-d?o.movingRight=!1:!a&&v<d&&(o.movingRight=!0),r)?g>h&&g<h+3&&(v>c&&v<c+u)&&(o.movingDown=!1):g<d&&(o.movingDown=!0);n.layout.forEach(function(i){i.forEach(function(i){if(!i.cleared){var e=i.x,a=i.y,r=i.width,d=i.height;v>e&&v<e+r&&(g>a&&g<a+d)&&(i.cleared=!0,n.toClear--,o.movingDown=!o.movingDown,t&&t(i))}})})};exports.default=o;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e,r=i(require("./constructors/Canvas")),t=i(require("./constructors/Hud")),n=i(require("./constructors/Ball")),a=i(require("./constructors/Paddle")),l=i(require("./constructors/Bricks")),o=i(require("./logic/handle-collisions"));function i(e){return e&&e.__esModule?e:{default:e}}var u=new r.default,c=new t.default(u.el),d=new n.default(u.el),s=new a.default(u.el),w=new l.default(u.el,8,5);function f(){e=window.requestAnimationFrame(f),u.context.clearRect(0,0,u.el.width,u.el.height),d.draw(),s.draw(),w.draw(),c.draw(),(0,o.default)(d,s,w,function(){c.score+=100}),d.y>u.el.height+d.radius&&(c.lives>0?(c.lives--,d=new n.default(u.el)):(window.cancelAnimationFrame(e),alert("Game over!"),window.location.reload())),0===w.toClear&&(window.cancelAnimationFrame(e),alert("You win!"),window.location.reload())}f();
},{"./constructors/Canvas":"yyhW","./constructors/Hud":"Mi16","./constructors/Ball":"z4pB","./constructors/Paddle":"I1Dc","./constructors/Bricks":"sFYt","./logic/handle-collisions":"hmjp"}]},{},["epB2"], null)
//# sourceMappingURL=/main.deac9608.map