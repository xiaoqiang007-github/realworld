(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{408:function(e,t,r){"use strict";r.r(t);r(53),r(22),r(28),r(65),r(66);var n=r(4),o=r(25),l=(r(52),r(32),r(93)),c=function(data){return Object(l.b)({url:"/api/users/login",method:"POST",data:data})},m=function(data){return Object(l.b)({url:"/api/users",method:"POST",data:data})},d=r(54);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={name:"loginIndex",middleware:"login",data:function(){return{user:{username:"zwq",email:"2467776065@qq.com",password:"123456"},errors:{}}},computed:{isLogin:function(){return"login"===this.$route.name}},methods:v(v({},Object(d.b)({addUser:"user/addUser"})),{},{login:function(){console.log("login")},submit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("submit",e,t.user,c),r.prev=1,n=t.isLogin?c:m,console.log("fn",n),r.next=6,n({user:{username:t.user.username,email:t.user.email,password:t.user.password}});case 6:o=r.sent,data=o.data,console.log("data",data.user),t.$store.commit("user/addUser",data.user),t.$router.push("/"),t.errors="",r.next=18;break;case 14:r.prev=14,r.t0=r.catch(1),console.log(r.t0.response),console.log("err",JSON.stringify(r.t0));case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()}})},O=r(40),component=Object(O.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v(e._s(e.isLogin?"Sign in":"Sign up"))]),e._v(" "),r("p",{staticClass:"text-xs-center"},[e.isLogin?r("nuxt-link",{attrs:{to:"/"}},[e._v("Have an account?")]):r("nuxt-link",{attrs:{to:"/login"}},[e._v("Need an account?")])],1),e._v(" "),r("ul",{staticClass:"error-messages"},e._l(e.errors,(function(t,n){return r("li",{key:n},[e._v(e._s(t))])})),0),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e.isLogin?e._e():r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",required:"",placeholder:"Your Name"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",required:"",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            "+e._s(e.isLogin?"Sign in":"Sign up")+"\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);