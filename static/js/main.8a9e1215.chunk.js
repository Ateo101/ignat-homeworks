(this["webpackJsonpignat-homeworks"]=this["webpackJsonpignat-homeworks"]||[]).push([[0],{17:function(e,t,n){e.exports={btn:"Greeting_btn__3kp0R",error:"Greeting_error__1mawF",filled:"Greeting_filled__fN3is",errorMsg:"Greeting_errorMsg__3pTjh"}},20:function(e,t,n){e.exports={default:"SuperButton_default__3uy9_",red:"SuperButton_red__2pT7w",disabled:"SuperButton_disabled__2Y7LP"}},21:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1BDfs",errorInput:"SuperInputText_errorInput__1nD96",error:"SuperInputText_error__35Z6E"}},22:function(e,t,n){e.exports={blue:"HW4_blue__ocY1o",column:"HW4_column__Mvmm7",testSpanError:"HW4_testSpanError__fcn7K"}},26:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1lfgR",spanClassName:"SuperCheckbox_spanClassName__2b__O"}},27:function(e,t,n){e.exports={dark:"HW12_dark__3bspC","dark-text":"HW12_dark-text__1275B",red:"HW12_red__1181B","red-text":"HW12_red-text__1F5Jb",some:"HW12_some__1txfj","some-text":"HW12_some-text__1tMys",ateo:"HW12_ateo__2lkeY"}},30:function(e,t,n){e.exports={App:"App_App__15s9T"}},33:function(e,t,n){e.exports={range:"SuperRange_range__3OW0f"}},39:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(18),a=n.n(r),s=(n(39),n(30)),i=n.n(s),o=n(12),j=(n(40),n(4)),l=n(6),d=n(20),u=n.n(d),b=n(0),O=["red","className","disabled"],h=function(e){var t=e.red,n=e.className,c=e.disabled,r=Object(l.a)(e,O),a="".concat(c?u.a.disabled:t?u.a.red:u.a.default," ").concat(n);return Object(b.jsx)("button",Object(j.a)({className:a},r))};var x=function(){return Object(b.jsxs)("div",{className:"dropdown-menu",children:[Object(b.jsx)(h,{className:"dropbtn",style:{marginLeft:"10px"},children:"Menu"}),Object(b.jsxs)("div",{className:"dropdown-content",children:[Object(b.jsx)("div",{className:"nav",children:Object(b.jsx)(o.b,{to:"/pre-junior",children:"Pre Junior"})}),Object(b.jsx)("div",{className:"nav",children:Object(b.jsx)(o.b,{to:"/junior",children:"Junior"})}),Object(b.jsx)("div",{className:"nav",children:Object(b.jsx)(o.b,{to:"/junior-plus",children:"Junior+"})})]})]})},p=n(3);n(47);var m=function(e){return Object(b.jsxs)("div",{className:"Message",children:[Object(b.jsx)("div",{className:"message-avatar",children:Object(b.jsx)("img",{src:e.avatar})}),Object(b.jsxs)("div",{className:"message-container",children:[Object(b.jsx)("div",{className:"message-username",children:e.name}),Object(b.jsx)("div",{className:"message-text",children:e.message}),Object(b.jsx)("div",{className:"message-time",children:e.time})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",g="some text",_="22:00";var C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 1",Object(b.jsx)(m,{avatar:f,name:v,message:g,time:_}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},k=n(2);var N=function(e){return Object(b.jsxs)("div",{style:{marginLeft:"10px"},children:[Object(b.jsx)("div",{children:e.affair.name}),Object(b.jsx)("div",{children:e.affair.priority}),Object(b.jsx)(h,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var t=e.data.map((function(t){return Object(b.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",textAlign:"center"},children:t}),Object(b.jsxs)("div",{style:{margin:"10px 0 0 10px"},children:[Object(b.jsx)(h,{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)(h,{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)(h,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)(h,{onClick:function(){e.setFilter("low")},children:"Low"})]})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(c.useState)(w),t=Object(k.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(k.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 2",Object(b.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},T=n(16),E=n(17),H=n.n(E),A=n(21),F=n.n(A),I=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],W=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(l.a)(e,I),d="".concat(F.a.error," ").concat(i||""),u="".concat(a&&F.a.errorInput," ").concat(s||F.a.superInput);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(j.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:u},o)),a&&Object(b.jsx)("span",{className:d,children:a})]})},M=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s=t?H.a.filled:H.a.error;return Object(b.jsxs)("div",{children:[Object(b.jsx)(W,{value:t,onChange:n,className:s,placeholder:"Type your name..."}),Object(b.jsx)("span",{className:H.a.errorMsg,children:r}),Object(b.jsx)(h,{onClick:c,className:H.a.btn,children:"add"}),Object(b.jsx)("span",{children:a})]})},D=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(k.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(k.a)(o,2),l=j[0],d=j[1],u="Users: ".concat(t.length);return Object(b.jsx)(M,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){""!==s?(alert("Hello ".concat(s," !")),n(s),d("")):d("Error! Please enter a valid name.")},error:l,totalUsers:u})},B=n(53);var P=function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 3",Object(b.jsx)(D,{users:n,addUserCallback:function(e){var t=[{_id:Object(B.a)(),name:e}].concat(Object(T.a)(n));r(t),console.log(t)}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},G=n(22),J=n.n(G),L=n(26),R=n.n(L),U=["type","onChange","onChangeChecked","className","spanClassName","children"],Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(l.a)(e,U),s="".concat(R.a.checkbox," ").concat(c||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(b.jsx)("span",{className:R.a.spanClassName,children:r})]})};var K=function(){var e=Object(c.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(k.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 4",Object(b.jsxs)("div",{className:J.a.column,children:[Object(b.jsx)(W,{value:n,onChangeText:r,onEnter:s,error:a,spanClassName:J.a.testSpanError}),Object(b.jsx)(W,{className:J.a.blue}),Object(b.jsxs)("div",{style:{margin:"10px 0"},children:[Object(b.jsx)(h,{children:"default"}),Object(b.jsx)(h,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(h,{disabled:!0,children:"disabled"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(Y,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(Y,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},X=(n(48),["autoFocus","onBlur","onEnter","spanProps"]),Z=["children","onDoubleClick","className"],q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(l.a)(e,X),s=Object(c.useState)(!1),i=Object(k.a)(s,2),o=i[0],d=i[1],u=r||{},O=u.children,h=u.onDoubleClick,x=u.className,p=Object(l.a)(u,Z),m=x?"editable-span".concat(" ",x):"editable-span";return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(W,Object(j.a)({autoFocus:!0,onBlur:function(e){t&&t(e),d(!1)},onEnter:function(){n&&n(),d(!1)}},a)):Object(b.jsx)("span",Object(j.a)(Object(j.a)({onDoubleClick:function(e){h&&h(e),d(!0)},className:m},p),{},{children:O||a.value}))})};function z(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}z("test",{x:"A",y:1});$("test",{x:"",y:0});var Q=function(){var e=Object(c.useState)(""),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 6",Object(b.jsxs)("div",{className:"hw-6",children:[Object(b.jsx)("div",{children:Object(b.jsx)(q,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text...",className:"test-span"}})}),Object(b.jsx)(h,{onClick:function(){z("editable-span-value",n)},children:"save"}),Object(b.jsx)(h,{onClick:function(){r($("editable-span-value",""))},children:"restore"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var V=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{}),Object(b.jsx)(S,{}),Object(b.jsx)(P,{}),Object(b.jsx)(K,{}),Object(b.jsx)(Q,{})]})},ee=["options","onChange","onChangeOption"],te=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,r=Object(l.a)(e,ee),a=[t?t.map((function(e,t){return Object(b.jsx)("option",{children:e},t)})):[]];return Object(b.jsx)("select",Object(j.a)(Object(j.a)({onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},r),{},{children:a}))},ne=["type","name","options","value","onChange","onChangeOption"],ce=function(e){e.type;var t=e.name,n=e.options,c=(e.value,e.onChange),r=e.onChangeOption,a=(Object(l.a)(e,ne),function(e){c&&c(e),r&&r(e.currentTarget.value)}),s=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:t,value:e,onChange:a}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:s})},re=["x","y","z"];var ae=function(){var e=Object(c.useState)(re[1]),t=Object(k.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 7",Object(b.jsx)("div",{children:Object(b.jsx)(te,{options:re,value:n,onChangeOption:r})}),Object(b.jsx)("div",{children:Object(b.jsx)(ce,{name:"radio",options:re,value:n,onChangeOption:r})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},se=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(T.a)(e).sort((function(e,t){return e.name<t.name?-1:1})):Object(T.a)(e).sort((function(e,t){return e.name>t.name?-1:1}));case"check":return e.filter((function(e){return e.age>=t.age}));default:return e}},ie=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var oe=function(){var e=Object(c.useState)(ie),t=Object(k.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(b.jsxs)("div",{children:[e.name,", ",e.age]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 8",a,Object(b.jsx)("div",{style:{display:"inline-block"},children:Object(b.jsx)(h,{onClick:function(){return r(se(ie,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("div",{style:{display:"inline-block"},children:Object(b.jsx)(h,{onClick:function(){return r(se(ie,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(b.jsx)("div",{style:{display:"inline-block"},children:Object(b.jsx)(h,{onClick:function(){return r(se(ie,{type:"check",age:18}))},children:"check age"})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var je=function(){var e=Object(c.useState)(0),t=Object(k.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),s=Object(k.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(!1),l=Object(k.a)(j,2),d=l[0],u=l[1],O=i&&i.getDate(),x=i&&i.getMonth(),p=i&&i.getFullYear(),m=i&&i.getHours(),f=i&&i.getMinutes(),v=i&&i.getSeconds(),g=function(){o(new Date),window.clearTimeout(n)},_=i?"Time: ".concat(m,":").concat(f,":").concat(v):"",C="Date: ".concat(O,".").concat(x,".").concat(p);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)},children:_}),d&&Object(b.jsx)("div",{children:C}),Object(b.jsx)(h,{onClick:function(){g();var e=window.setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"}),Object(b.jsx)(h,{onClick:g,children:"stop"})]})};var le=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 9",Object(b.jsx)(je,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},de=n(11),ue={loading:!1},be=function(e){return{type:"LOADING",isLoading:e}};var Oe=function(){var e=Object(de.c)((function(e){return e.loading})),t=Object(de.b)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 10",e.loading?Object(b.jsx)("div",{children:Object(b.jsx)("img",{width:"70px",src:"https://cutewallpaper.org/21/loading-gif-transparent-background/PolyRNN-Demo.gif"})}):Object(b.jsx)("div",{children:Object(b.jsx)(h,{onClick:function(){t(be(!0)),window.setTimeout((function(){return t(be(!1))}),2e3),console.log("loading...")},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},he=n(33),xe=n.n(he),pe=["type","onChange","onChangeRange","className"],me=function(e){e.type;var t=e.onChange,n=e.onChangeRange,c=e.className,r=Object(l.a)(e,pe),a="".concat(xe.a.range," ").concat(c||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(j.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:a},r))})},fe=n(34);var ve=function(){var e=Object(c.useState)(0),t=Object(k.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(100),s=Object(k.a)(a,2),i=s[0],o=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"--- homework 11",Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(me,{onChangeRange:function(e){r(e)},value:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(fe.a,{onChange:function(e){r(e[0]),o(e[1])},values:[n<=i?n:i,i>=n?i:n],min:0,max:100})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ge=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(ae,{}),Object(b.jsx)(oe,{}),Object(b.jsx)(le,{}),Object(b.jsx)(Oe,{}),Object(b.jsx)(ve,{})]})},_e=n(27),Ce=n.n(_e),ke={currentTheme:"ateo"},Ne=["ateo","dark","red","some"];var ye=function(){var e=Object(de.c)((function(e){return e.theme})),t=Object(de.b)();return Object(b.jsxs)("div",{className:Ce.a[e.currentTheme],children:[Object(b.jsx)("hr",{}),Object(b.jsx)("span",{className:Ce.a[e+"-text"],children:"--- homework 12"}),Object(b.jsx)("div",{children:Object(b.jsx)(te,{options:Ne,onChangeOption:function(e){t(function(e){return{type:"CHANGE-THEME",theme:e}}(e))}})}),Object(b.jsx)("hr",{})]})};var we=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(ye,{})})};var Se=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Te="/pre-junior",Ee="/junior",He="/junior-plus";var Ae=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(p.d,{children:[Object(b.jsx)(p.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(p.a,{to:Te})}}),Object(b.jsx)(p.b,{path:Te,render:function(){return Object(b.jsx)(V,{})}}),Object(b.jsx)(p.b,{path:Ee,render:function(){return Object(b.jsx)(ge,{})}}),Object(b.jsx)(p.b,{path:He,render:function(){return Object(b.jsx)(we,{})}}),Object(b.jsx)(p.b,{render:function(){return Object(b.jsx)(Se,{})}})]})})};var Fe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(x,{}),Object(b.jsx)(Ae,{})]})})};var Ie=function(){return Object(b.jsxs)("div",{className:i.a.App,children:[Object(b.jsx)("div",{children:"--- react homeworks:"}),Object(b.jsx)(Fe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=n(28),Me=Object(We.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return"LOADING"===t.type?Object(j.a)(Object(j.a)({},e),{},{loading:t.isLoading}):e},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;return"CHANGE-THEME"===t.type?Object(j.a)(Object(j.a)({},e),{},{currentTheme:t.theme}):e}}),De=Object(We.b)(Me),Be=De;window.store=De,a.a.render(Object(b.jsx)(de.a,{store:Be,children:Object(b.jsx)(Ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.8a9e1215.chunk.js.map