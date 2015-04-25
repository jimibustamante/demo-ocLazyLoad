!function(n,e,t){"use strict";function o(n,t,o){c.directive(n,["$parse","$swipe",function(c,i){var u=75,a=.3,r=30;return function(s,l,h){function f(n){if(!v)return!1;var e=Math.abs(n.y-v.y),o=(n.x-v.x)*t;return d&&u>e&&o>0&&o>r&&a>e/o}var v,d,g=c(h[n]),p=["touch"];e.isDefined(h.ngSwipeDisableMouse)||p.push("mouse"),i.bind(l,{start:function(n,e){v=n,d=!0},cancel:function(n){d=!1},end:function(n,e){f(n)&&s.$apply(function(){l.triggerHandler(o),g(s,{$event:e})})}},p)}}])}var c=e.module("ngTouch",[]);c.factory("$swipe",[function(){function n(n){var e=n.touches&&n.touches.length?n.touches:[n],t=n.changedTouches&&n.changedTouches[0]||n.originalEvent&&n.originalEvent.changedTouches&&n.originalEvent.changedTouches[0]||e[0].originalEvent||e[0];return{x:t.clientX,y:t.clientY}}function t(n,t){var o=[];return e.forEach(n,function(n){var e=c[n][t];e&&o.push(e)}),o.join(" ")}var o=10,c={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(e,c,i){var u,a,r,s,l=!1;i=i||["mouse","touch"],e.on(t(i,"start"),function(e){r=n(e),l=!0,u=0,a=0,s=r,c.start&&c.start(r,e)});var h=t(i,"cancel");h&&e.on(h,function(n){l=!1,c.cancel&&c.cancel(n)}),e.on(t(i,"move"),function(e){if(l&&r){var t=n(e);if(u+=Math.abs(t.x-s.x),a+=Math.abs(t.y-s.y),s=t,!(o>u&&o>a))return a>u?(l=!1,void(c.cancel&&c.cancel(e))):(e.preventDefault(),void(c.move&&c.move(t,e)))}}),e.on(t(i,"end"),function(e){l&&(l=!1,c.end&&c.end(n(e),e))})}}}]),c.config(["$provide",function(n){n.decorator("ngClickDirective",["$delegate",function(n){return n.shift(),n}])}]),c.directive("ngClick",["$parse","$timeout","$rootElement",function(n,t,o){function c(n,e,t,o){return Math.abs(n-t)<g&&Math.abs(e-o)<g}function i(n,e,t){for(var o=0;o<n.length;o+=2)if(c(n[o],n[o+1],e,t))return n.splice(o,o+2),!0;return!1}function u(n){if(!(Date.now()-s>d)){var e=n.touches&&n.touches.length?n.touches:[n],t=e[0].clientX,o=e[0].clientY;1>t&&1>o||h&&h[0]===t&&h[1]===o||(h&&(h=null),"label"===n.target.tagName.toLowerCase()&&(h=[t,o]),i(l,t,o)||(n.stopPropagation(),n.preventDefault(),n.target&&n.target.blur()))}}function a(n){var e=n.touches&&n.touches.length?n.touches:[n],o=e[0].clientX,c=e[0].clientY;l.push(o,c),t(function(){for(var n=0;n<l.length;n+=2)if(l[n]==o&&l[n+1]==c)return void l.splice(n,n+2)},d,!1)}function r(n,e){l||(o[0].addEventListener("click",u,!0),o[0].addEventListener("touchstart",a,!0),l=[]),s=Date.now(),i(l,n,e)}var s,l,h,f=750,v=12,d=2500,g=25,p="ng-click-active";return function(t,o,c){function i(){d=!1,o.removeClass(p)}var u,a,s,l,h=n(c.ngClick),d=!1;o.on("touchstart",function(n){d=!0,u=n.target?n.target:n.srcElement,3==u.nodeType&&(u=u.parentNode),o.addClass(p),a=Date.now();var e=n.touches&&n.touches.length?n.touches:[n],t=e[0].originalEvent||e[0];s=t.clientX,l=t.clientY}),o.on("touchmove",function(n){i()}),o.on("touchcancel",function(n){i()}),o.on("touchend",function(n){var t=Date.now()-a,h=n.changedTouches&&n.changedTouches.length?n.changedTouches:n.touches&&n.touches.length?n.touches:[n],g=h[0].originalEvent||h[0],p=g.clientX,m=g.clientY,w=Math.sqrt(Math.pow(p-s,2)+Math.pow(m-l,2));d&&f>t&&v>w&&(r(p,m),u&&u.blur(),e.isDefined(c.disabled)&&c.disabled!==!1||o.triggerHandler("click",[n])),i()}),o.onclick=function(n){},o.on("click",function(n,e){t.$apply(function(){h(t,{$event:e||n})})}),o.on("mousedown",function(n){o.addClass(p)}),o.on("mousemove mouseup",function(n){o.removeClass(p)})}}]),o("ngSwipeLeft",-1,"swipeleft"),o("ngSwipeRight",1,"swiperight")}(window,window.angular);