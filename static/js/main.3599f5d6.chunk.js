(this["webpackJsonpzime-lv"]=this["webpackJsonpzime-lv"]||[]).push([[0],{32:function(e,a,t){e.exports=t(55)},37:function(e,a,t){},38:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),m=(t(37),t(38),t(23),t(16)),s=t(11),o=t(8),i=t(21),u=t(29);i.a.use(u.a).use(o.b).init({fallbackLng:"lv",debug:!1,ns:["LogIn","SignUp"],defaultNS:"LogIn",interpolation:{escapeValue:!1},react:{wait:!1,withRef:!1,bindI18n:"languageChanged loaded",bindStore:"added removed",nsMode:"default"}});var d=i.a,p=function(){return l.a.createElement("div",null,l.a.createElement("select",{id:"languageSelector",className:"selectpicker","data-width":"fit",onChange:function(e){var a;a=e.target.value,d.changeLanguage(a)}},[{id:1,language:"Latvie\u0161u",code:"lv"},{id:2,language:"English",code:"en"}].map((function(e){return l.a.createElement("option",{key:e.id,value:e.code},e.language)}))))};d.on("languageChanged",(function(e){var a,t;a="languageSelector",t=e,document.getElementById(a).value=t}));var E=function(){var e=Object(o.c)("LogIn").t;return l.a.createElement("form",null,l.a.createElement("h3",null,e("Sign In")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,e("Email address")),l.a.createElement("input",{type:"email",className:"form-control",placeholder:e("Enter email")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,e("Password")),l.a.createElement("input",{type:"password",className:"form-control",placeholder:e("Enter password")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},e("Remember me")))),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:function(){console.log("LogIn")}},e("Submit")),l.a.createElement("p",{className:"forgot-password text-right"},l.a.createElement(o.a,{i18nKey:"Forgot password"},"Forgot ",l.a.createElement("a",{href:"#"},"password?"))))},g=function(){var e=Object(o.c)("SignUp").t;return l.a.createElement("form",null,l.a.createElement("h3",null,e("Sign Up")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,e("First name")),l.a.createElement("input",{type:"text",className:"form-control",placeholder:e("First name")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,e("Last name")),l.a.createElement("input",{type:"text",className:"form-control",placeholder:e("Last name")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,e("Email address")),l.a.createElement("input",{type:"email",className:"form-control",placeholder:e("Enter email")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,e("Password")),l.a.createElement("input",{type:"password",className:"form-control",placeholder:e("Enter password")})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},e("Sign Up")),l.a.createElement("p",{className:"forgot-password text-right"},l.a.createElement(o.a,{i18nKey:"SignUp:Already registered"},"Already registered ",l.a.createElement("a",{href:"/sign-in"},"sign in?"))))},v=function(){var e=Object(o.c)("Home").t;return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement(m.b,{className:"navbar-brand",to:"/sign-in"},e("Logo")),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/sign-in"},e("Login"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/sign-up"},e("Sign up"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("div",{className:"nav-link"},l.a.createElement(p,null))))))),l.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-light"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("div",{className:"nav-link"},(new Date).getFullYear())))),l.a.createElement("div",{className:"auth-wrapper"},l.a.createElement("div",{className:"auth-inner"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:E}),l.a.createElement(s.a,{path:"/sign-in",component:E}),l.a.createElement(s.a,{path:"/sign-up",component:g}))))))},b=(t(54),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"lds-hourglass"})))});c.a.render(l.a.createElement(n.Suspense,{fallback:l.a.createElement(b,null)},l.a.createElement(v,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3599f5d6.chunk.js.map