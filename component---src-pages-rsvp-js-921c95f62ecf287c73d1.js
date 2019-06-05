(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(185),l=a(189),i=(a(200),a(201)),c=a.n(i),o=(a(190),a(203)),m=a.n(o),u=a(7),d=a.n(u),h=function(e){return r.a.createElement("div",{className:"form__footer"},e.renderFooter())},v=function(e){return r.a.createElement("div",{className:"form__body"},r.a.createElement("div",{className:"form__controls"},r.a.createElement("div",{className:"control__textbox-group"},r.a.createElement("label",{className:"control__textbox-label",htmlFor:"fullName"},0===e.guestNum?"Guest Name":"Guest "+e.guestNum+"'s name"),r.a.createElement("input",{className:"control__textbox-input",type:"text",id:"fullName",name:"fullName",value:e.guestNameValue,onChange:e.handleChange}),e.isInvalidName&&r.a.createElement("p",{className:"is-error"},"Guest name is required.")),r.a.createElement("fieldset",{className:"control__checkbox-fieldset"},r.a.createElement("legend",{className:"control__checkbox-legend"},"Which events will this guest be attending?"),r.a.createElement("div",{className:"control__checkbox-group"},r.a.createElement("input",{className:"control__checkbox-input",type:"checkbox",id:"attend-1",name:"attendingCeremony",defaultChecked:e.attendingCeremonyValue,onChange:e.handleChange}),r.a.createElement("label",{className:"control__checkbox-description",htmlFor:"attend-1"},r.a.createElement("span",{className:"control__checkbox-label"},"Ceremony & Brunch Reception"),r.a.createElement("br",null),r.a.createElement("span",{className:"control__checkbox-caption"},"11am, Queens Botanical Garden"))),r.a.createElement("div",{className:"control__checkbox-group"},r.a.createElement("input",{className:"control__checkbox-input",type:"checkbox",id:"attend-2",name:"attendingBanquet",defaultChecked:e.attendingBanquetValue,onChange:e.handleChange}),r.a.createElement("label",{className:"control__checkbox-description",htmlFor:"attend-2"},r.a.createElement("span",{className:"control__checkbox-label"},"Banquet Dinner"),r.a.createElement("br",null),r.a.createElement("span",{className:"control__checkbox-caption"},"6pm, Royal Queen")))),r.a.createElement("div",{className:"control__textbox-group"},r.a.createElement("label",{className:"control__textbox-label",htmlFor:"dietaryRestrictions"},"Any dietary restrictions?"),r.a.createElement("label",{className:"control__textbox-caption",htmlFor:"dietaryRestrictions"},"For example: vegetarian, seafood allergy, etc."),r.a.createElement("input",{className:"control__textbox-input",type:"text",id:"dietaryRestrictions",name:"dietaryRestrictions",value:e.dietaryRestrictionsValue,onChange:e.handleChange}))),r.a.createElement(h,{renderFooter:e.renderFooter}))},g=function(e){return r.a.createElement("div",{className:"guest"},r.a.createElement("div",{className:"guest__heading"},r.a.createElement("span",{className:"guest__title"},e.personInfo.fullName),r.a.createElement("button",{className:"form-btn form-btn--edit",type:"button",onClick:function(t){return e.handleEdit(t,e.personInfo,e.guestNum)}},"Edit",r.a.createElement("svg",{width:"11",height:"11",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M6.54 3.74l.51.52-5.03 5.03h-.5v-.51l5.02-5.04zm2-3.34a.56.56 0 0 0-.39.16L7.14 1.58l2.08 2.08 1.02-1.02a.55.55 0 0 0 0-.78L8.94.56a.55.55 0 0 0-.4-.16zm-2 1.77L.4 8.32v2.08h2.08l6.15-6.14-2.09-2.09z",fill:"#A2C3D4",fillRule:"nonzero"})))),r.a.createElement("p",{className:"guest__detail"},e.personInfo.dietaryRestrictions),r.a.createElement("div",{className:"guest__attendance"},e.renderGuestChoice(e.personInfo.attendingCeremony),r.a.createElement("span",{className:"guest__event"},e.personInfo.attendingCeremony?"Attending":"Not attending"," Ceremony & Brunch Reception")),r.a.createElement("div",{className:"guest__attendance"},e.renderGuestChoice(e.personInfo.attendingBanquet),r.a.createElement("span",{className:"guest__event"},e.personInfo.attendingBanquet?"Attending":"Not attending"," Banquet Dinner")))},E=function(e){return r.a.createElement("div",{className:"form__body"},r.a.createElement("div",{className:"form__guest-summary"},e.guestInfo.map(function(t,a){return r.a.createElement(g,{key:t.id,personInfo:t,handleEdit:e.handleEdit,renderGuestChoice:e.renderGuestChoice,guestNum:a+1})}),r.a.createElement("button",{className:"form-btn form-btn--white form-btn__add-guest",type:"button",onClick:e.handleAddGuest},r.a.createElement("div",{className:"form-btn__body"},r.a.createElement("svg",{width:"22",height:"16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M14 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H8zm-3-3V8h3V6H5V3H3v3H0v2h3v3h2z",fill:"#153048",fillRule:"nonzero"})),"Add another guest")),e.isSubmissionError&&r.a.createElement("p",{className:"is-error"},"There was an error. Please try submitting again.")),r.a.createElement(h,{renderFooter:e.renderFooter}))},f=function(e){return r.a.createElement("div",{className:"form__body"},r.a.createElement("div",{className:"form__result"},r.a.createElement("span",{className:"result__emoji"},"🎉"),r.a.createElement("p",{className:"result__title"},"We've received your RSVP for"),r.a.createElement("ul",{className:"result__guest-list"},e.guestInfo.map(function(e){return r.a.createElement("li",{className:"result__guest-item",key:e.id},r.a.createElement("div",{className:"result__guest-item-body"},r.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M8 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm0 10c2.7 0 5.8 1.29 6 2H2c.23-.72 3.31-2 6-2zM8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"#000",fillRule:"nonzero"})),e.fullName))}))),r.a.createElement(h,{renderFooter:e.renderFooter}))},p=a(204);a(207).polyfill(),a(209);var _=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={fullName:"",attendingCeremony:!1,attendingBanquet:!1,dietaryRestrictions:"",guestList:[],display:"showForm",isInvalidName:!1,isSubmissionError:!1,isLoading:!1,isEdit:!1,editGuestNum:0},t.buildRequestBody=function(e){var t=e.guestList,a=t[0];return{fullName:a.fullName,attendingCeremony:a.attendingCeremony,attendingBanquet:a.attendingBanquet,dietaryRestrictions:a.dietaryRestrictions,guests:t.slice(1)}},t.buildGuest=function(e){var t=e.fullName,a=e.attendingCeremony,n=e.attendingBanquet,r=e.dietaryRestrictions;return""===r&&(r="No dietary restrictions"),{fullName:t,attendingCeremony:a,attendingBanquet:n,dietaryRestrictions:r,id:p.v1()}},t.handleSubmit=function(){var e=m()(c.a.mark(function e(a){var n,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t.setState({isLoading:!0}),n=t.buildRequestBody(t.state),e.prev=3,e.next=6,fetch("https://shptockpog.execute-api.us-east-1.amazonaws.com/dev/responses/accept",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)});case 6:if((r=e.sent).ok){e.next=9;break}throw Error(r.statusText);case 9:return e.next=11,r.json();case 11:s=e.sent,console.log(s),t.setState({isSubmissionError:!1,isLoading:!1,display:"showResult"}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0),t.setState({isSubmissionError:!0,isLoading:!1});case 20:case"end":return e.stop()}},e,null,[[3,16]])}));return function(t){return e.apply(this,arguments)}}(),t.handleAddGuest=function(){t.setState({fullName:"",attendingCeremony:!1,attendingBanquet:!1,dietaryRestrictions:"",isEdit:!1,editGuestNum:0,display:"showForm"})},t.handleRemoveGuest=function(){var e=t.state.editGuestNum-1,a=[].concat(t.state.guestList);a.splice(e,1),t.setState({guestList:a,isEdit:!1,editGuestNum:0,display:"showSummary"})},t.handleNext=function(){var e=""===t.state.fullName.trim();switch(t.setState({isInvalidName:e}),e){case!1:var a=t.buildGuest(t.state);switch(t.state.isEdit){case!0:var n=t.state.editGuestNum-1,r=[].concat(t.state.guestList);r.splice(n,1,a),t.setState(function(e){return{guestList:r,isEdit:!1,editGuestNum:0,display:"showSummary"}});break;case!1:t.setState(function(e){return{guestList:[].concat(e.guestList,[a]),isEdit:!1,editGuestNum:0,display:"showSummary"}})}default:return}},t.handleEdit=function(e,a,n){var r=a.fullName,s=a.attendingCeremony,l=a.attendingBanquet,i=a.dietaryRestrictions;"No dietary restrictions"===i&&(i=""),console.dir(a),console.warn(s),console.warn(l),console.warn(i),t.setState({fullName:r,attendingCeremony:s,attendingBanquet:l,dietaryRestrictions:i,isEdit:!0,editGuestNum:n,display:"showForm"})},t.handleChange=function(e){var a,n="";"checkbox"===e.target.type?(n=e.target.name,console.warn("check"),console.warn(n),t.setState(function(e){var t;return console.warn(e),(t={})[n]=!e[n],t})):(n=e.target.name,t.setState(((a={})[n]=e.target.value,a)))},t.isAttending=function(){if(t.state.guestList.length){var e=t.state.guestList[0];return e.attendingBanquet||e.attendingCeremony}},t.renderHeaderSubtitle=function(){var e=t.state.guestList.length,a=t.isAttending(),n=t.state.editGuestNum;switch(t.state.display){case"showSummary":switch(e){case 1:return"You've added 1 person to your party so far.";default:return"You've added "+e+" people to your party so far."}case"showResult":switch(a){case!0:return"Hurray! Can't wait to see you on the big day!"}case"showForm":switch(t.state.isEdit){case!0:return"Guest "+n}default:return"Jan and Olivia's celebration on June 30th, 2019"}},t.renderFooter=function(){var e=1===t.state.editGuestNum;switch(t.state.display){case"showForm":switch(t.state.isEdit){case!0:switch(e){case!1:return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"form-btn form-btn--white form-btn__remove",type:"button",onClick:t.handleRemoveGuest},"Remove this guest"),r.a.createElement("button",{className:"form-btn",type:"button",onClick:t.handleNext},"Continue",r.a.createElement("svg",{width:"16",height:"8",xmlns:"http://www.w3.org/2000/svg",className:"icon-arrow"},r.a.createElement("path",{d:"M12.01 3.05H0v2h12.01v3l3.99-4-3.99-4v3z",fill:"#FFF",fillRule:"nonzero"}))))}default:return r.a.createElement("button",{className:"form-btn",type:"button",onClick:t.handleNext},"Continue",r.a.createElement("svg",{width:"16",height:"8",xmlns:"http://www.w3.org/2000/svg",className:"icon-arrow"},r.a.createElement("path",{d:"M12.01 3.05H0v2h12.01v3l3.99-4-3.99-4v3z",fill:"#FFF",fillRule:"nonzero"})))}case"showSummary":switch(t.state.isLoading){case!0:return r.a.createElement("button",{className:"form-btn is-loading",type:"button"},r.a.createElement("svg",{width:"31",height:"5",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{fill:"#FFF",fillRule:"evenodd"},r.a.createElement("circle",{cx:"2.5",cy:"2.5",r:"2.5"}),r.a.createElement("circle",{cx:"15.5",cy:"2.5",r:"2.5"}),r.a.createElement("circle",{cx:"28.5",cy:"2.5",r:"2.5"}))));case!1:return r.a.createElement("button",{className:"form-btn",type:"submit"},"Send RSVP",r.a.createElement("svg",{width:"16",height:"8",xmlns:"http://www.w3.org/2000/svg",className:"icon-arrow"},r.a.createElement("path",{d:"M12.01 3.05H0v2h12.01v3l3.99-4-3.99-4v3z",fill:"#FFF",fillRule:"nonzero"})))}case"showResult":return r.a.createElement("a",{className:"result__link",href:"/"},r.a.createElement("button",{className:"form-btn",type:"button"},"Wedding details",r.a.createElement("svg",{width:"16",height:"8",xmlns:"http://www.w3.org/2000/svg",className:"icon-arrow"},r.a.createElement("path",{d:"M12.01 3.05H0v2h12.01v3l3.99-4-3.99-4v3z",fill:"#FFF",fillRule:"nonzero"}))))}},t.renderGuestChoice=function(e){return e?r.a.createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",className:"guest__choice-icon"},r.a.createElement("path",{d:"M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42z",fill:"#A2C3D4",fillRule:"nonzero"})):r.a.createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",className:"guest__choice-icon"},r.a.createElement("path",{d:"M10 0a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 18a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16zm3.59-13L10 8.59 6.41 5 5 6.41 8.59 10 5 13.59 6.41 15 10 11.41 13.59 15 15 13.59 11.41 10 15 6.41 13.59 5z",fill:"#DE8787",fillRule:"nonzero"}))},t.renderComponents=function(){switch(t.state.display){case"showForm":return r.a.createElement(v,{handleChange:t.handleChange,handleNext:t.handleNext,guestNameValue:t.state.fullName,dietaryRestrictionsValue:t.state.dietaryRestrictions,attendingCeremonyValue:t.state.attendingCeremony,attendingBanquetValue:t.state.attendingBanquet,guestNum:t.state.editGuestNum,isInvalidName:t.state.isInvalidName,renderFooter:t.renderFooter});case"showSummary":return r.a.createElement(E,{guestInfo:t.state.guestList,handleAddGuest:t.handleAddGuest,handleEdit:t.handleEdit,isSubmissionError:t.state.isSubmissionError,renderGuestChoice:t.renderGuestChoice,renderFooter:t.renderFooter});case"showResult":return r.a.createElement(f,{guestInfo:t.state.guestList,renderFooter:t.renderFooter})}},t}return d()(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form__header"},r.a.createElement("h1",{className:"header__title"},"Rsvp"),r.a.createElement("p",{className:"header__subtitle"},this.renderHeaderSubtitle())),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderComponents()))},t}(r.a.Component),N=a(186);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(N.Helmet,null,r.a.createElement("title",null,"jan & olivia"),r.a.createElement("link",{rel:"icon",href:"/favicon/favicon-32.png",sizes:"32x32"}),r.a.createElement("link",{rel:"icon",href:"/favicon/favicon-57.png",sizes:"57x57"}),r.a.createElement("link",{rel:"icon",href:"/favicon/favicon-76.png",sizes:"76x76"}),r.a.createElement("link",{rel:"icon",href:"/favicon/favicon-96.png",sizes:"96x96"}),r.a.createElement("link",{rel:"icon",href:"/favicon/favicon-128.png",sizes:"128x128"}),r.a.createElement("link",{rel:"icon",href:"/favicon/favicon-192.png",sizes:"192x192"}),r.a.createElement("link",{rel:"icon",href:"/favicon/favicon-228.png",sizes:"228x228"}),r.a.createElement("link",{rel:"shortcut icon",sizes:"196x196",href:"/favicon/favicon-196.png"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"/favicon/favicon-120.png",sizes:"120x120"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"/favicon/favicon-152.png",sizes:"152x152"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"/favicon/favicon-180.png",sizes:"180x180"}),r.a.createElement("meta",{name:"msapplication-TileColor",content:"#FFFFFF"}),r.a.createElement("meta",{name:"msapplication-TileImage",content:"/favicon/favicon-144.png"}),r.a.createElement("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"})),r.a.createElement(l.a,null),r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",{className:"navbar__links"},r.a.createElement("li",null,r.a.createElement("a",{className:"navbar__link",href:"/#a-story"},r.a.createElement("span",{className:"navbar__ordinal"},"01"),r.a.createElement("div",{className:"navbar__divider"}),r.a.createElement("div",{className:"navbar__label"},r.a.createElement("span",{className:"navbar__title"},"How We Got Here"),r.a.createElement("span",{className:"navbar__text"},"A Story")))),r.a.createElement("li",{className:"navbar__link-divider"}),r.a.createElement("li",null,r.a.createElement("a",{className:"navbar__link",href:"/#the-plan"},r.a.createElement("span",{className:"navbar__ordinal"},"02"),r.a.createElement("div",{className:"navbar__divider"}),r.a.createElement("div",{className:"navbar__label"},r.a.createElement("span",{className:"navbar__title"},"What's Going Down"),r.a.createElement("span",{className:"navbar__text"},"The Plan")))),r.a.createElement("li",null,r.a.createElement("a",{className:"navbar__link",href:"/#the-venues"},r.a.createElement("span",{className:"navbar__ordinal"},"03"),r.a.createElement("div",{className:"navbar__divider"}),r.a.createElement("div",{className:"navbar__label"},r.a.createElement("span",{className:"navbar__title"},"Where is it"),r.a.createElement("span",{className:"navbar__text"},"Venue Details")))),r.a.createElement("li",{className:"navbar__link-divider"}),r.a.createElement("li",null,r.a.createElement("a",{className:"navbar__link navbar__link--active",href:"/rsvp"},r.a.createElement("span",{className:"navbar__ordinal"},"04"),r.a.createElement("div",{className:"navbar__divider"}),r.a.createElement("div",{className:"navbar__label"},r.a.createElement("span",{className:"navbar__title"},"You Coming?"),r.a.createElement("span",{className:"navbar__text"},"RSVP")))),r.a.createElement("li",{className:"navbar__link-divider"}),r.a.createElement("li",null,r.a.createElement("a",{className:"navbar__link",href:"https://www.amazon.com/wedding/share/jan-and-olivia",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"navbar__ordinal"},"05"),r.a.createElement("div",{className:"navbar__divider"}),r.a.createElement("div",{className:"navbar__label"},r.a.createElement("span",{className:"navbar__title"},"A Wishlist of Sorts"),r.a.createElement("span",{className:"navbar__text"},"Registry")))))),r.a.createElement("img",{className:"logo logo--small",src:"/janandolivia_logo.svg",alt:"Jan and Olivia are getting married!"}),r.a.createElement(_,null))}}}]);
//# sourceMappingURL=component---src-pages-rsvp-js-921c95f62ecf287c73d1.js.map