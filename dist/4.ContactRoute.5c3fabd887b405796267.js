webpackJsonp([4],{116:[1053,66,23],119:[1060,67,305,304,236,28,66],283:function(e,t,a){(function(e){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Contact=void 0;var n=a(16),s=l(n),c=a(17),o=l(c),u=a(18),r=l(u),d=a(20),m=l(d),i=a(19),f=l(i),p=a(3),g=l(p),E=t.Contact=function(t){function a(){return(0,o["default"])(this,a),(0,m["default"])(this,(0,s["default"])(a).apply(this,arguments))}return(0,f["default"])(a,t),(0,r["default"])(a,[{key:"componentDidMount",value:function(){function t(t){t=e.trim(t),e("#sendingMessage").fadeOut(),"success"===t?(e("#successMessage").fadeIn().delay(c).fadeOut(),e("#senderName").val(""),e("#senderEmail").val(""),e("#message").val(""),e("#content").delay(c+500).fadeTo("slow",1)):(e("#failureMessage").fadeIn().delay(c).fadeOut(),e("#contactForm").delay(c+500).fadeIn())}function a(){var a=e(this);return e("#senderName").val()&&e("#senderEmail").val()&&e("#message").val()?(e("#sendingMessage").fadeIn(),a.show(),e.ajax({url:a.attr("action")+"?ajax=true",type:a.attr("method"),data:a.serialize(),success:t})):(e("#incompleteMessage").fadeIn().delay(c).fadeOut(),a.fadeOut().delay(c).fadeIn()),!1}function l(){e("#contactForm").show().submit(a).addClass("positioned")}if(e("#senderHuman").length>0){var n=Math.ceil(10*Math.random())+1,s=Math.ceil(10*Math.random())+1;document.getElementById("senderHuman").placeholder=n+" + "+s+" = ?",document.getElementById("checkHuman_a").value=n,document.getElementById("checkHuman_b").value=s}var c=2e3;e(l)}},{key:"render",value:function(){return g["default"].createElement("div",{id:"contact",className:"pt100 pb100 bg-grad-stellar"},g["default"].createElement("div",{className:"container"},g["default"].createElement("div",{className:"row"},g["default"].createElement("div",{className:"col-md-6"},g["default"].createElement("div",{className:"row"},g["default"].createElement("div",{className:"col-md-12 mb50"},g["default"].createElement("h1",{className:"font-size-normal color-light"},g["default"].createElement("small",{className:"color-light"},"Contact Me"),"Drop me a Message"),g["default"].createElement("h5",{className:"color-light"},"Please feel free to ask anything. I will reply any message",g["default"].createElement("br",null),"as soon as possible.")),g["default"].createElement("div",{className:"col-md-3 col-sm-3 col-xs-12"},g["default"].createElement("span",{className:"fa-map-o color-light fa fs-55"}),g["default"].createElement("h5",{className:"color-light"},g["default"].createElement("strong",null,"Address")),g["default"].createElement("p",{className:"color-light"},"G. Jevremova 11000 Belgrade")),g["default"].createElement("div",{className:"col-md-3 col-sm-3 col-xs-12"},g["default"].createElement("span",{className:"fa-phone color-light fa fs-55"}),g["default"].createElement("h5",{className:"color-light"},g["default"].createElement("strong",null,"Phone")),g["default"].createElement("p",{className:"color-light"},g["default"].createElement("a",{href:"tel:+381605582422",className:"color-light"},"+381 60 558 24 22"))),g["default"].createElement("div",{className:"col-md-3 col-sm-3 col-xs-12"},g["default"].createElement("span",{className:"fa-envelope-o color-light fa fs-55"}),g["default"].createElement("h5",{className:"color-light"},g["default"].createElement("strong",null,"Email")),g["default"].createElement("p",{className:"color-light"},g["default"].createElement("a",{href:"mailto:info@frontenddot.com",className:"color-light"},"info@frontenddot.com"))))),g["default"].createElement("div",{className:"col-md-6"},g["default"].createElement("div",{className:"contact contact-us-one"},g["default"].createElement("div",{className:"col-sm-12 col-xs-12 text-center mb20"},g["default"].createElement("h4",{className:"pb25 bb-solid-1 text-uppercase"},"Get in Touch",g["default"].createElement("small",{className:"text-lowercase"},"If you like web forms :)"))),g["default"].createElement("form",{name:"contactform",id:"contactForm",method:"post",action:"/php/send.php"},g["default"].createElement("div",{className:"form-group col-md-6 col-sm-6 col-xs-12"},g["default"].createElement("input",{type:"text",name:"senderName",id:"senderName",className:"input-md input-rounded form-control",placeholder:"fullname",maxLength:"100",required:""})),g["default"].createElement("div",{className:"form-group col-md-6 col-sm-6 col-xs-12"},g["default"].createElement("input",{type:"email",name:"senderEmail",id:"senderEmail",className:"input-md input-rounded form-control",placeholder:"email address",maxLength:"100",required:""})),g["default"].createElement("div",{className:"form-group col-md-6 col-sm-6 col-xs-12"},g["default"].createElement("input",{type:"url",name:"senderWebsite",id:"senderWebsite",className:"input-md input-rounded form-control",placeholder:"http://",maxLength:"100"})),g["default"].createElement("div",{className:"form-group col-md-6 col-sm-6 col-xs-12"},g["default"].createElement("input",{type:"text",name:"senderHuman",id:"senderHuman",className:"input-md input-rounded form-control",placeholder:"",required:""}),g["default"].createElement("input",{type:"hidden",name:"checkHuman_a",id:"checkHuman_a"}),g["default"].createElement("input",{type:"hidden",name:"checkHuman_b",id:"checkHuman_b"})),g["default"].createElement("div",{className:"form-group col-md-12 col-sm-12 col-xs-12"},g["default"].createElement("textarea",{className:"form-control",name:"message",id:"message",rows:"7",required:""})),g["default"].createElement("div",{className:"form-group col-md-12 col-sm-12 col-xs-12"},g["default"].createElement("button",{type:"submit",name:"sendMessage",id:"sendMessage",className:"button button-md button-block button-grad-stellar"},"Send Message")),g["default"].createElement("div",{id:"sendingMessage",className:"statusMessage sending-message"},g["default"].createElement("p",null,"Sending your message. Please wait...")),g["default"].createElement("div",{id:"successMessage",className:"statusMessage success-message"},g["default"].createElement("p",null,"Thanks for sending your message! We'll get back to you shortly.")),g["default"].createElement("div",{id:"failureMessage",className:"statusMessage failure-message"},g["default"].createElement("p",null,"There was a problem sending your message. Please try again.")),g["default"].createElement("div",{id:"incompleteMessage",className:"statusMessage"},g["default"].createElement("p",null,"Please complete all the fields in the form before sending."))))))))}}]),a}(g["default"].Component);t["default"]=E}).call(t,a(11))},284:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(283),s=l(n);t["default"]=s["default"]},297:function(e,t,a){e.exports={"default":a(299),__esModule:!0}},298:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var n=a(296),s=l(n);t["default"]=function(e,t,a){return t in e?(0,s["default"])(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},299:function(e,t,a){a(323),a(325),a(326),a(324),e.exports=a(25).Promise},300:83,303:[1054,67,307,306,45,318,322],305:245,306:[1055,81,23],307:[1056,45],308:[1057,23],309:[1058,28,119,66],312:function(e,t,a){var l=a(68);e.exports=function(e,t,a){for(var n in t)a&&e[n]?e[n]=t[n]:l(e,n,t[n]);return e}},313:function(e,t,a){"use strict";var l=a(28),n=a(25),s=a(59),c=a(57),o=a(23)("species");e.exports=function(e){var t="function"==typeof n[e]?n[e]:l[e];c&&t&&!t[o]&&s.f(t,o,{configurable:!0,get:function(){return this}})}},316:[1059,45,115,23],322:[1061,116,23,81,25],324:[1062,117,28,67,116,58,80,115,300,303,316,119,309,23,312,118,313,25,308],428:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0];return{type:d,payload:e}}function s(){var e=arguments.length<=0||void 0===arguments[0]?f:arguments[0],t=arguments[1],a=i[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.doubleAsync=t.COUNTER_INCREMENT=void 0;var c=a(298),o=l(c),u=a(297),r=l(u);t.increment=n,t["default"]=s;var d=t.COUNTER_INCREMENT="ContactRoute.COUNTER_INCREMENT",m=t.doubleAsync=function(){return function(e,t){return new r["default"](function(a){setTimeout(function(){e(n(t().counter)),a()},200)})}},i=(t.actions={increment:n,doubleAsync:m},(0,o["default"])({},d,function(e,t){return e+t.payload})),f=0},617:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ContactRoute=void 0;var n=a(3),s=l(n),c=a(284),o=l(c),u=t.ContactRoute=function(){return s["default"].createElement("div",null,s["default"].createElement(o["default"],null))};t["default"]=u},618:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(94),s=a(428),c=a(617),o=l(c),u={increment:function(){return(0,s.increment)(1)},doubleAsync:s.doubleAsync},r=function(e){return{counter:e.counter}};t["default"]=(0,n.connect)(r,u)(o["default"])}});