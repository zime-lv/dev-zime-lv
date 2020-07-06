(this["webpackJsonplocal-currency-client"]=this["webpackJsonplocal-currency-client"]||[]).push([[55],{422:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(35),l=a(180),u=a(22),o=a(2),i=a(11),c=a(30),d=a(14),p=a(12),m=a(177),y=a(487),E=a(309),g=a(369),f=a(115),v=a(116),b=a(117),h=a(83),P=a(45),B=a(36),k=a(49),C=a(84);t.default=function(e){var t=Object.assign({namespace:"MyBusiness",paddingBody:"20px 0 0 0"},e),a=t.barrelGetters,K=a.userBusinesses,w=a.countBusinesses,D=a.businessesPerPage,T=a.activePageBusinesses,_=a.userBusinessesLoaded,S=a.activeBusiness,O=a.activeBusinessID,I=a.businessPurposes,j=a.countBusinessPurposes,A=a.businessPurposesPerPage,x=a.activePageBusinessPurposes,N=a.activeBusinesPurpose,R=a.activePurposeProperty,H=a.purposeShareholders,F=a.activePurposeData,L=a.accountNumber,z=t.barrelSetters,q=z.setRedirectTo,J=z.setResponseProps,G=z.setBusinessPurposes,M=z.setActiveBusiness,V=z.setActiveBusinesPurpose,Q=z.setActivePurposeProperty,U=z.setActivePageBusinessPurposes,W=z.setActivePurposeData,X=z.setPurposeRegistrationTitle,Y=z.setPurposeRegistrationDescription,Z=z.setPurposeRegistrationKeywords,$=z.setClearRefs,ee=t.barrelFunctions,te=ee.getBusinesses,ae=ee.getBusinessPurposes,ne=ee.getPurposeShareholders,se=ee.sendRequest,re=ee.showRequestStatus,le=ee.formatDate,ue=ee.copyToClipboard,oe=ee.findPurposes,ie=Object(p.a)([t.namespace]).t,ce=Object(n.useRef)(null),de=(Object(n.useRef)(null),[]),pe=[],me=0,ye=0;null!==K&&Object.keys(K).map((function(a,n){return de[n]=[],pe[n]=[],null!==I&&Object.keys(I).map((function(c,d){return me++,I[c].business_id===K[a].business_id&&(de[n][d]=s.a.createElement(r.a.Item,{action:!0,key:I[c].purpose_id,eventKey:I[c].purpose_id,style:{cursor:"default"},onClick:function(){return function(e){var t=e.eventKey,a=e.purposeID;J(null),ne(a,t)}({eventKey:d,purposeID:I[c].purpose_id})}},s.a.createElement("span",{style:{whiteSpace:"nowrap",cursor:"pointer"}},I[c].title),s.a.createElement("span",{style:{float:"right"}},s.a.createElement(m.a,{onClick:function(e){X(null!==I[c].title?I[c].title:""),Y(null!==I[c].description?I[c].description:""),Z(null!==I[c].keywords?I[c].keywords:""),W(JSON.stringify(I[c])),V("addPurpose"),e.stopPropagation()},fontSize:"small",style:{color:"var(--dark)",cursor:"pointer"}}))),pe[n][d]=s.a.createElement(l.a.Pane,{key:I[c].purpose_id,eventKey:I[c].purpose_id},s.a.createElement(u.a,{defaultActiveKey:null!==R?R:"purpose_id"},s.a.createElement(k.default,{title:ie("Purpose ID"),eventkey:"purpose_id",active:R,paddingBody:t.paddingBody,onClick:function(){return Q("purpose_id")}},s.a.createElement(C.default,Object.assign({value:I[c].purpose_id},e))),s.a.createElement(k.default,{title:ie("Purpose Shareholders"),eventkey:"shareholders",active:R,paddingBody:t.paddingBody,onClick:function(){return Q("shareholders")}},s.a.createElement(s.a.Fragment,null,s.a.createElement(b.default,Object.assign({},e,{purposeID:I[c].purpose_id})),"undefined"!==typeof H&&null!==H&&Object.keys(H).map((function(t,a){if(H[t].purpose_id===I[c].purpose_id){var n=H[t].purpose_id,r=H[t],l=r.shareholder_id,u=r.firstname,o=r.lastname,i=r.roles,d=r.share;ye++;var p=null!==i?i.split(","):[];return s.a.createElement(h.default,Object.assign({},e,{key:a,id:a,shareholder:l,purpose:n,firstname:u,lastname:o,share:d,roles:p}))}return""})),re("get purpose shareholders / SELECT shares",ye,ie("Loading shareholders..."),ie("No shareholders"),"finished"))),s.a.createElement(k.default,{title:ie("Purpose Status"),eventkey:"productStatus",active:R,paddingBody:t.paddingBody,onClick:function(e){var t=I;t[c].status=0===I[c].status?1:0,G(JSON.stringify(t));var a={};return a.purpose_id=I[c].purpose_id,a.purpose_status=I[c].status,se({req:"change purpose status",data:a})}},s.a.createElement(o.a,null,"undefined"===typeof H||null===H&&s.a.createElement(o.a.Text,null,ie("To publish, please add at least one shareholder"),s.a.createElement("br",null),s.a.createElement("br",null)),"undefined"!==typeof H&&null!==H&&s.a.createElement(o.a.Check,{type:"switch",custom:!0,disabled:"undefined"===typeof H||null===H,label:ie(0===I[c].status?"Not published":"Published"),checked:1===I[c].status,onChange:function(e){console.log(e)}}))),s.a.createElement(i.a,{bg:"light"},s.a.createElement(u.a.Toggle,{as:i.a.Header,style:{cursor:"default"},eventKey:"title",onClick:function(){return Q("title")}},s.a.createElement("span",{style:{cursor:"pointer"}},ie("Purpose Title"))),s.a.createElement(u.a.Collapse,{eventKey:"title"},s.a.createElement(i.a.Body,null,s.a.createElement(i.a.Text,null,I[c].title)))),s.a.createElement(i.a,{bg:"light"},s.a.createElement(u.a.Toggle,{as:i.a.Header,style:{cursor:"default"},eventKey:"description",onClick:function(){return Q("description")}},s.a.createElement("span",{style:{cursor:"pointer"}},ie("Purpose Description"))),s.a.createElement(u.a.Collapse,{eventKey:"description"},s.a.createElement(i.a.Body,null,s.a.createElement(i.a.Text,null,I[c].description)))),s.a.createElement(i.a,{bg:"light"},s.a.createElement(u.a.Toggle,{as:i.a.Header,style:{cursor:"default"},eventKey:"keywords",onClick:function(){return Q("keywords")}},s.a.createElement("span",{style:{cursor:"pointer"}},ie("Purpose Keywords"))),s.a.createElement(u.a.Collapse,{eventKey:"keywords"},s.a.createElement(i.a.Body,null,s.a.createElement(i.a.Text,null,I[c].keywords))))))),ye=0,!0})),!0}));var Ee=s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{defaultActiveKey:null===S&&_?"myBusinesses":S},null!==K&&Object.keys(K).map((function(t,a){var n=new Date(K[t].created),o=le(n,{month:"long",day:"numeric",year:"numeric"});return s.a.createElement(i.a,{key:a},s.a.createElement(u.a.Toggle,{as:i.a.Header,eventKey:a,style:{cursor:"pointer"},onClick:function(){return function(e){var t=e.eventKey,a=e.businessID;S===t?(M(null),U(null)):(J(null),ae(a,t,1))}({eventKey:a,businessID:K[t].business_id})}},s.a.createElement(y.a,{style:{color:"var(--dark)"}})," ",K[t].title),s.a.createElement(u.a.Collapse,{eventKey:a},s.a.createElement(i.a.Body,null,s.a.createElement(l.a.Container,{id:"left-tabs-example",defaultActiveKey:null!==N?N:"aboutBusiness"},s.a.createElement(c.a,{style:{marginBottom:"1.2rem"}},s.a.createElement(d.a,null,s.a.createElement(B.default,Object.assign({advancedSearch:!1,placeholder:ie("Find purposes..."),captionAdvancedSearch:ie("Advanced search"),onSubmit:oe},e)))),s.a.createElement(c.a,null,s.a.createElement(d.a,{sm:5},s.a.createElement(r.a,{variant:"flush"},s.a.createElement(r.a.Item,{action:!0,eventKey:"aboutBusiness",style:{cursor:"default"},onClick:function(e){W(null),V(null),e.stopPropagation()}},s.a.createElement("span",{style:{whiteSpace:"nowrap",cursor:"pointer"}},ie("About")),s.a.createElement("span",{style:{float:"right"}},s.a.createElement(E.a,{onClick:function(e){$(!0),W(null),V("addPurpose"),e.stopPropagation()},fontSize:"small",style:{color:"var(--dark)",cursor:"pointer"}}))),de[a]),null!==j&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(P.default,Object.assign({},e,{size:"sm",countItems:j,itemsPerPage:A,active:x,onClick:function(e){return ae(O,0,e)}}))),re("get business purposes / SELECT purposes",me,ie("Loading purposes..."),ie("No purposes"),"finished")),s.a.createElement(d.a,{sm:7},s.a.createElement(l.a.Content,null,s.a.createElement(l.a.Pane,{eventKey:"aboutBusiness"},s.a.createElement(u.a,{defaultActiveKey:"businessID"},s.a.createElement(i.a,null,s.a.createElement(u.a.Toggle,{as:i.a.Header,style:{cursor:"pointer"},eventKey:"businessID"},ie("Business ID")),s.a.createElement(u.a.Collapse,{eventKey:"businessID"},s.a.createElement(i.a,{border:"light"},s.a.createElement(i.a.Body,null,s.a.createElement(i.a.Text,null,s.a.createElement("input",{ref:ce,className:"no-focus",readOnly:!0,style:{border:0,width:"13rem",background:"Transparent"},type:"text",defaultValue:K[t].business_id}),document.queryCommandSupported("copy")&&s.a.createElement("span",{style:{float:"right",marginLeft:"0.25rem"}},s.a.createElement("button",{className:"button-transparent",onClick:function(){return ue(ce)}},s.a.createElement(g.a,{style:{color:"var(--dark)"}})))))))),s.a.createElement(i.a,null,s.a.createElement(u.a.Toggle,{as:i.a.Header,style:{cursor:"pointer"},eventKey:"businessDescription"},ie("Business Description")),s.a.createElement(u.a.Collapse,{eventKey:"businessDescription"},s.a.createElement(i.a,{border:"light"},s.a.createElement(i.a.Body,null,s.a.createElement(i.a.Text,null,""!==K[t].description?K[t].description:s.a.createElement("span",{className:"text-center text-muted"},ie("No description"))))))),s.a.createElement(i.a,null,s.a.createElement(u.a.Toggle,{as:i.a.Header,style:{cursor:"pointer"},eventKey:"businessCreationDate"},ie("Business Created")),s.a.createElement(u.a.Collapse,{eventKey:"businessCreationDate"},s.a.createElement(i.a,{border:"light"},s.a.createElement(i.a.Body,null,s.a.createElement(i.a.Text,null,o))))))),pe[a],s.a.createElement(l.a.Pane,{eventKey:"addPurpose"},s.a.createElement(u.a,{defaultActiveKey:"newPurpose"},s.a.createElement(i.a,null,s.a.createElement(u.a.Toggle,{as:i.a.Header,eventKey:"newPurpose",style:{cursor:"default"}},ie(null===F?"New Purpose":"Edit Purpose")),s.a.createElement(u.a.Collapse,{eventKey:"newPurpose"},s.a.createElement(i.a.Body,null,s.a.createElement(v.default,Object.assign({},e,{businessID:K[t].business_id,id:null!==F?F.id:null,purposeID:null!==F?F.purpose_id:null,title:null!==F?F.title:"",description:null!==F?F.description:"",category:null!==F?F.category:"",subcategory:null!==F?F.subcategory:"",subcategory2:null!==F?F.subcategory2:"",keywords:null!==F?F.keywords:""}))))))))))))))})),s.a.createElement(i.a,null,s.a.createElement(u.a.Toggle,{as:i.a.Header,eventKey:"addBusiness",style:{cursor:"pointer"},onClick:function(){return M("addBusiness"!==S?"addBusiness":null)}},s.a.createElement("span",null,s.a.createElement(E.a,{style:{color:"var(--dark)",fontSize:"1.2rem",paddingBottom:"0.2rem"}}),"\xa0",ie("Add Business"))),s.a.createElement(u.a.Collapse,{eventKey:"addBusiness"},s.a.createElement(i.a.Body,null,s.a.createElement(f.default,e))))),null!==K&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(P.default,Object.assign({},e,{size:"md",countItems:w,itemsPerPage:D,active:T,onClick:function(e){return te(e)}}))));return null===L&&q("/sign-out"),s.a.createElement(s.a.Fragment,null,Ee)}}}]);
//# sourceMappingURL=55.cca10f12.chunk.js.map