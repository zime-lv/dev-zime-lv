(this["webpackJsonplocal-currency-client"]=this["webpackJsonplocal-currency-client"]||[]).push([[35,51,59],{464:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),l=n(24),s=n(47);t.default=function(e){var t=Object.assign({namespace:"Viewer",refs:[]},e),n=t.barrelGetters,a=n.helpPath3,i=n.contactMessageCardsCount,u=n.contactMessageCardsAttributes,f=t.barrelFunctions.setHelpPath;Object(c.a)([t.namespace]).t;return null===u?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{defaultActiveKey:a},Array(i).fill().map((function(e,n){return r.a.createElement(s.default,{key:n,title:"undefined"!==typeof u[n]?u[n].title:"",eventkey:"undefined"!==typeof u[n]?u[n].eventkey:"",active:a,onClick:function(){var e;"undefined"!==typeof(e=u[n])&&f(3,a===e.eventkey?"":e.eventkey)}},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:t.refs[n],style:{}})))}))))}},471:function(e,t,n){"use strict";n.r(t);n(568);var a=n(0),r=n.n(a),c=n(13),l=n(464);t.default=function(e){for(var t=Object.assign({namespace:"Viewer",marginTop:0},e),n=t.barrelGetters.articles,a=t.barrelSetters,s=a.setContactMessage,i=a.setContactMessageCardsCount,u=a.setContactMessageCardsAttributes,f=t.barrelFunctions,o=f.getFileLinkFromURI,m=f.getArrayObject,d=(Object(c.a)([t.namespace]).t,r.a.createRef()),p=[],g=[],y=0;y<20;y++)p[y]=r.a.createRef();return r.a.useEffect((function(){var e=o(),t=m(n,"link",e),a="undefined"!==typeof t&&null!==t?t.text:"",r=0;-1===a.indexOf("<newcard />")?d.current.innerHTML=a:a.split("<newcard />").map((function(e,t){if(0===t)d.current.innerHTML=e;else{if(null!==p[t-1].current){var n=(new DOMParser).parseFromString(e,"text/xml").getElementsByTagName("ul")[0].attributes.title.nodeValue,a=n;g[t-1]={title:n,eventkey:a},p[t-1].current.innerHTML=e}r++}}));s(a),i(r),u(JSON.stringify(g))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:d,style:{marginTop:t.marginTop}}),r.a.createElement(l.default,Object.assign({refs:p},e)))}},568:function(e,t,n){}}]);
//# sourceMappingURL=35.0a978a3b.chunk.js.map