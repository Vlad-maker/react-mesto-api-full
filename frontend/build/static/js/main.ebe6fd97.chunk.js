(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(18),r=n.n(s),i=(n(30),n(22)),l=n(3),u=n(19),p=n(20),j=new(function(){function e(t){Object(u.a)(this,e),this._url=t.url}return Object(p.a)(e,[{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"content-type":"application/json"}}).then(this._checkStatus)}},{key:"receiveCardsFromServer",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"content-type":"application/json"}}).then(this._checkStatus)}},{key:"uploadCardsToServer",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"content-type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._checkStatus)}},{key:"editUserInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"content-type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"content-type":"application/json"}}).then(this._checkStatus)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"content-type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkStatus)}},{key:"setLike",value:function(e,t){return t?fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"content-type":"application/json"}}).then(this._checkStatus):fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"content-type":"application/json"}}).then(this._checkStatus)}},{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({url:"https://top.mestop.nomoredomains.club"}),d=n(2),h=n.p+"static/media/logo.a307e1c4.svg",_=n(8);var b=function(e){var t=Object(d.h)();return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),e.loggedIn?Object(a.jsxs)("div",{className:"header__auth",children:[Object(a.jsx)("p",{className:"header__email",children:e.headerEmail}),Object(a.jsx)("a",{className:"header__title",onClick:e.logOut,children:"\u0412\u044b\u0439\u0442\u0438"})]}):"/sign-in"===t.pathname?Object(a.jsx)(_.b,{className:"header__text",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}):Object(a.jsx)(_.b,{className:"header__text",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})},m=Object(c.createContext)();var O=function(e){var t=Object(c.useContext)(m),n=e.card.owner===t._id,o=e.card.likes.some((function(e){return e===t._id})),s="cards__delete ".concat(n?"":"cards__delete_inactive"),r="cards__like ".concat(o?"cards__like_active":"");return Object(a.jsxs)("div",{className:"cards__item",children:[Object(a.jsx)("img",{className:"cards__img",src:e.card.link,alt:"",onClick:function(){e.CardClick(e.card)}}),Object(a.jsx)("button",{className:s,type:"button",onClick:function(){e.onCardDelete(e.card._id)}}),Object(a.jsxs)("div",{className:"cards__info",children:[Object(a.jsx)("h2",{className:"cards__text",children:e.card.name}),Object(a.jsxs)("div",{className:"cards__container",children:[Object(a.jsx)("button",{className:r,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("p",{className:"cards__like_number",children:e.card.likes.length})]})]})]})};var f=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__author",children:["\xa9",(new Date).getFullYear(),". Vlad-maker"]})})},x=function(e){var t=Object(c.useContext)(m),n=t.name,o=t.avatar,s=t.about;return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar_block",children:[Object(a.jsx)("img",{className:"profile__image",src:o,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("button",{className:"profile__avatar",onClick:e.onEditAvatar})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__button",children:[Object(a.jsx)("h1",{className:"profile__author",children:n}),Object(a.jsx)("button",{className:"profile__edit profile__edit_open_popup",type:"button",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile__description",children:s})]}),Object(a.jsx)("button",{className:"profile__add",type:"button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(a.jsx)(O,{card:t,CardClick:e.onCardClick,onCardLike:e.handleCardLike,onCardDelete:e.handleCardDelete},t._id)}))}),Object(a.jsx)(f,{})]})};var g=function(e){var t=o.a.useState(""),n=Object(l.a)(t,2),c=n[0],s=n[1],r=o.a.useState(""),i=Object(l.a)(r,2),u=i[0],p=i[1];return Object(a.jsx)("section",{className:"login",children:Object(a.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.handleLoginUser(u,c)},children:[Object(a.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsx)("input",{placeholder:"Email",type:"email",className:"login__input",name:"email",value:c,onChange:function(e){s(e.target.value)}}),Object(a.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",className:"login__input",name:"password",value:u,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"login__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})})};var v=function(e){var t=o.a.useState(""),n=Object(l.a)(t,2),c=n[0],s=n[1],r=o.a.useState(""),i=Object(l.a)(r,2),u=i[0],p=i[1];return Object(a.jsx)("section",{className:"register",children:Object(a.jsxs)("form",{className:"register__form",onSubmit:function(t){t.preventDefault(),e.handleRegisterUser(u,c)},children:[Object(a.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsx)("input",{placeholder:"Email",type:"email",className:"register__input",name:"email",value:c,onChange:function(e){s(e.target.value)}}),Object(a.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",className:"register__input",name:"password",value:u,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"register__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsxs)("span",{className:"register__text",children:["\u0415\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"," ",Object(a.jsx)(_.b,{className:"register__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var N=function(e){return Object(a.jsx)("section",{className:"popup photo ".concat(e.card.status?"popup_opened":""),children:Object(a.jsxs)("div",{className:"photo__container",children:[Object(a.jsx)("img",{className:"photo__image",src:e.card.links,alt:""}),Object(a.jsx)("p",{className:"photo__title",children:e.card.title}),Object(a.jsx)("button",{type:"reset",className:"popup__close photo__close",onClick:e.onClose})]})})};var k=function(e){return Object(a.jsx)("section",{className:"popup ".concat(e.name," ").concat(e.isOpen?"popup_opened":""),id:"edit__popup",children:Object(a.jsxs)("form",{method:"POST",className:"popup__container",name:e.name,children:[Object(a.jsx)("h2",{className:"popup__heading",children:e.title}),e.children,Object(a.jsx)("button",{type:"reset",className:"popup__close",onClick:e.onClose})]})})},C=function(e){var t=o.a.useState(""),n=Object(l.a)(t,2),s=n[0],r=n[1],i=o.a.useState(""),u=Object(l.a)(i,2),p=u[0],j=u[1],d=Object(c.useContext)(m);o.a.useEffect((function(e){r(d.name),j(d.about)}),[d]);return Object(a.jsxs)(k,{name:"popup",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{id:"name-input",type:"text",name:"name",className:"popup__text popup__text_name_input",required:!0,maxLength:"40",minLength:"2",value:s||"",onChange:function(e){r(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"name-input-error"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{id:"job-input",type:"text",name:"job",className:"popup__text popup__text_job_input",required:!0,maxLength:"200",minLength:"2",value:p||"",onChange:function(e){j(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"job-input-error"})]}),Object(a.jsx)("button",{type:"submit",className:"popup__button popup__button_form_save",onClick:function(t){t.preventDefault(),e.onUpdateUser(s,p)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})},S=n(23),y=n(24),A=function(e){var t=e.component,n=Object(y.a)(e,["component"]);return Object(a.jsx)(d.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(S.a)({},n)):Object(a.jsx)(d.a,{to:"/sign-in"})}})},w=n.p+"static/media/ok.1b6082f8.svg",E=n.p+"static/media/cancel.df8eddf6.svg";var I=function(e){return Object(a.jsx)("section",{className:"tool ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"tool__container",children:[Object(a.jsx)("button",{className:"tool__button",type:"reset",onClick:e.onClose}),Object(a.jsx)("div",{className:"tool__image",children:e.loadingOk?Object(a.jsx)("img",{src:w,alt:"ok"}):Object(a.jsx)("img",{src:E,alt:"error"})}),Object(a.jsx)("span",{className:"tool__text",children:e.loadingOk?e.cool:e.error})]})})},P=function(e){var t=Object(c.useRef)("");return Object(a.jsxs)(k,{name:"popup__avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{type:"url",id:"url-input-avatar",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__text popup__text_avatar",required:!0,ref:t}),Object(a.jsx)("span",{className:"popup__error",id:"url-input-error"})]}),Object(a.jsx)("button",{type:"submit",className:"popup__button popup__button_avatar_form",onClick:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value),t.current.value=""},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})},L=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),u=i[0],p=i[1];return Object(a.jsxs)(k,{name:"popup_cards",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{type:"text",id:"input-name",value:o,name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__text popup__text_name_cards",required:!0,maxLength:"30",minLength:"2",onChange:function(e){s(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"input-name-error"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{type:"url",id:"url-input",name:"link",value:u,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__text popup__text_job_cards",required:!0,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"url-input-error"})]}),Object(a.jsx)("button",{type:"submit",className:"popup__button popup__button_save_form",onClick:function(t){t.preventDefault(),e.onAddPlace(o,u),s(""),p("")},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})},T="https://top.mestop.nomoredomains.club",D=function(e,t,n){return fetch("".concat(T,"/").concat(n),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))},U=function(e){var t=new d.g,n=o.a.useState(!1),c=Object(l.a)(n,2),s=c[0],r=c[1],u=o.a.useState(!1),p=Object(l.a)(u,2),h=p[0],_=p[1],O=o.a.useState(!1),f=Object(l.a)(O,2),S=f[0],y=f[1],w=o.a.useState(!1),E=Object(l.a)(w,2),U=E[0],B=E[1],z=o.a.useState({}),F=Object(l.a)(z,2),J=F[0],q=F[1],G=o.a.useState({}),R=Object(l.a)(G,2),H=R[0],M=R[1],V=o.a.useState([]),Y=Object(l.a)(V,2),K=Y[0],Q=Y[1],W=o.a.useState(!1),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=o.a.useState(!0),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=o.a.useState(""),oe=Object(l.a)(ce,2),se=oe[0],re=oe[1],ie=o.a.useState(!1),le=Object(l.a)(ie,2),ue=le[0],pe=le[1],je=o.a.useState(""),de=Object(l.a)(je,2),he=de[0],_e=de[1];function be(){_(!1),y(!1),r(!1),B(!1),pe(!1),q({})}return o.a.useEffect((function(){Z&&Promise.all([j.getInfo(),j.receiveCardsFromServer()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];M(n),Q(a)})).catch((function(e){console.log(e)}))}),[Z]),o.a.useEffect((function(e){var n,a=localStorage.getItem("jwt");a&&(n=a,fetch("".concat(T,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))).then((function(e){e.email&&(re(e.email),$(!0),t.push("/"))})).catch((function(e){return console.log(e)}))})),Object(a.jsx)(m.Provider,{value:H,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(b,{headerEmail:se,loggedIn:Z,logOut:function(){localStorage.removeItem("jwt"),$(!1),t.push("/sign-in")}}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(A,{exact:!0,path:"/",loggedIn:Z,component:x,onEditProfile:function(){y(!0)},onAddPlace:function(){r(!0)},onEditAvatar:function(){_(!0)},onCardClick:function(e){q({status:!0,title:e.name,links:e.link})},cards:K,setCards:Q,handleCardLike:function(e){var t=e.likes.some((function(e){return e===H._id}));j.setLike(e._id,!t).then((function(t){var n=K.map((function(n){return n._id===e._id?t:n}));Q(n)})).catch((function(e){return console.log(e)}))},handleCardDelete:function(e){_e(e),pe(!0)}}),Object(a.jsx)(d.b,{path:"/sign-in",children:Object(a.jsx)(g,{handleLoginUser:function(e,n){D(e,n,"signin").then((function(e){e&&(localStorage.setItem("jwt",e.token),console.log(e.token),$(!0),t.push("/"))})).catch((function(e){return console.log(e)}))}})}),Object(a.jsx)(d.b,{path:"/sign-up",children:Object(a.jsx)(v,{handleRegisterUser:function(e,n){ae(!0),D(e,n,"signup").then((function(e){e&&(B(!0),t.push("/sign-in"))})).catch((function(e){400===e.status&&console.log(e),ae(!1),B(!0)}))}})}),Object(a.jsx)(d.b,{exact:!0,path:"/",children:Z?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)(d.a,{to:"/sign-in"})})]}),Object(a.jsx)(C,{isOpen:S,onClose:be,onUpdateUser:function(e,t){j.editUserInfo(e,t).then((function(e){M(e),be()}))}}),Object(a.jsx)(L,{isOpen:s,onClose:be,onAddPlace:function(e,t){j.uploadCardsToServer(e,t).then((function(e){Q([e].concat(Object(i.a)(K))),be()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(N,{card:J,onClose:be}),Object(a.jsxs)(k,{isOpen:ue,onClose:be,name:"delete__cards",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",children:[Object(a.jsx)("button",{className:"popup__button popup__delete_button",type:"button",onClick:function(){j.deleteCard(he).then((function(e){var t=K.filter((function(e){return he!==e._id}));Q(t),be()})).catch((function(e){return console.log(e)}))},children:"\u0414\u0430"}),Object(a.jsx)("button",{type:"button",className:"popup__close popup__delete_close_button"})]}),Object(a.jsx)(P,{isOpen:h,onClose:be,onUpdateAvatar:function(e){j.editAvatar(e).then((function(e){M(e),be()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(I,{isOpen:U,onClose:be,loadingOk:ne,cool:"\u0412\u044b \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",error:"\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(_.a,{children:Object(a.jsx)(U,{})})}),document.getElementById("root")),B()}},[[36,1,2]]]);
//# sourceMappingURL=main.ebe6fd97.chunk.js.map