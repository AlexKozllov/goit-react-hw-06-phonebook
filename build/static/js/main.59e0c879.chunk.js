(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={contactForm:"contactForm_contactForm__3uv3A",addBtn:"contactForm_addBtn__LOAy1"}},21:function(t,e,n){t.exports={enter:"shiftAlert_enter__11sE_",enterActive:"shiftAlert_enterActive__Hh5Y4",exit:"shiftAlert_exit__2mzm4",exitActive:"shiftAlert_exitActive__3SeTm"}},24:function(t,e,n){t.exports={listItem:"contactList_listItem__jUK2v",itemName:"contactList_itemName__3jcol"}},25:function(t,e,n){t.exports={wrapper:"app_wrapper__29B5M",headerPhoneboo:"app_headerPhoneboo__OoGDO"}},28:function(t,e,n){t.exports={box:"alert_box__MvL2F"}},30:function(t,e,n){t.exports={enter:"shiftAnimation_enter__2F-oP",enterActive:"shiftAnimation_enterActive__2oOYM",exit:"shiftAnimation_exit__2azpU",exitActive:"shiftAnimation_exitActive__3VZFB"}},31:function(t,e,n){t.exports={findField:"filter_findField__1fQrE","fade-enter":"filter_fade-enter__2LQ6c","fade-enter-active":"filter_fade-enter-active__1WmjS","fade-exit":"filter_fade-exit__3ebLN","fade-exit-active":"filter_fade-exit-active__2m8VH"}},32:function(t,e,n){t.exports={enter:"scaleAnimation_enter__QF7jG",enterActive:"scaleAnimation_enterActive__1sxcv",exit:"scaleAnimation_exit__X5aen",exitActive:"scaleAnimation_exitActive__-aMDc"}},33:function(t,e,n){t.exports={appear:"shiftAppear_appear__1xIKI",appearActive:"shiftAppear_appearActive__1uSa1"}},43:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var a,i=n(1),c=n(0),r=n(5),s=n.n(r),o=(n(43),n(14)),l=n(15),u=n(17),m=n(16),j=n(53),b=n(7),d=n(54),h=n(28),x=n.n(h),f=function(t){var e=t.text;return Object(i.jsxs)("div",{className:x.a.box,children:[Object(i.jsx)("h4",{children:"Warning!"}),Object(i.jsx)("p",{children:e})]})},_=n(20),p=n.n(_),O=n(21),v=n.n(O),A=n(6),C=n(8),F=Object(C.b)("@phBook/addContacts"),y=Object(C.b)("@phBook/removeContact"),N=Object(C.b)("@phBook/setFilter"),g={name:"",number:"",validateForm:!0,isExistContact:!1},k=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state=g,t.handleInput=function(e){var n=e.target,a=n.name,i=n.value;t.setState(Object(b.a)({},a,i))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.addContacts,a=t.state,i=a.name,c=a.number;t.validateForm()&&(n({id:Object(d.a)(),name:i,number:c}),t.setState(g))},t.onCheckUnique=function(e){var n=!!t.props.listContacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}));return n?t.setState({isExistContact:!0}):t.setState({isExistContact:!1}),!n},t.validateForm=function(){var e=t.state,n=e.name,a=e.number;return n&&a?(n&&a&&t.setState({validateForm:!0}),t.onCheckUnique(n)):(t.setState({validateForm:!1}),!1)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.isExistContact,e=this.state,n=e.name,a=e.number,c=e.validateForm;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j.a,{in:t,classNames:v.a,timeout:250,unmountOnExit:!0,children:Object(i.jsx)(f,{text:"Contact is already exist"})}),Object(i.jsx)(j.a,{in:!c,classNames:v.a,timeout:250,unmountOnExit:!0,children:Object(i.jsx)(f,{text:"Some filed is empty"})}),Object(i.jsxs)("form",{className:p.a.contactForm,onSubmit:this.handleSubmit,children:[Object(i.jsxs)("label",{children:["Name",Object(i.jsx)("input",{type:"text",name:"name",value:n,onChange:this.handleInput})]}),Object(i.jsxs)("label",{children:["Number",Object(i.jsx)("input",{type:"tel",name:"number",value:a,onChange:this.handleInput})]}),Object(i.jsx)("button",{className:p.a.addBtn,type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component),w={addContacts:F},E=Object(A.b)((function(t,e){return{listContacts:t.contacts.items}}),w)(k),S=n(55),L=n(24),I=n.n(L),B=n(30),U=n.n(B),P=n(31),q=n.n(P),M={setFilter:N},V=Object(A.b)(null,M)((function(t){var e=t.filterValue,n=t.setFilter;return Object(i.jsxs)("form",{className:q.a.findField,children:[Object(i.jsx)("h3",{children:"Find contacts by name"}),Object(i.jsx)("input",{value:e,onChange:function(t){var e=t.target.value;n(e)}})]})})),D=n(32),Q=n.n(D),z={removeContact:y},G=Object(A.b)((function(t,e){return{listContacts:t.contacts.items,filter:t.contacts.filter}}),z)((function(t){var e=t.listContacts,n=t.filter,a=t.removeContact,c=function(t){return t?e.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())})):e}(n);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j.a,{in:e.length>1,classNames:Q.a,timeout:250,unmountOnExit:!0,children:Object(i.jsx)(V,{filterValue:n})}),Object(i.jsx)(S.a,{component:"ul",children:c.map((function(t){return Object(i.jsx)(j.a,{classNames:U.a,timeout:250,children:Object(i.jsxs)("li",{className:I.a.listItem,children:[Object(i.jsx)("span",{className:I.a.itemName,children:t.name})," ",Object(i.jsx)("span",{children:t.number}),Object(i.jsx)("button",{type:"button",onClick:function(){a(t.id)},children:"\xd7"})]})},t.id)}))})]})})),H=n(25),J=n.n(H),K=n(33),W=n.n(K),Y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isExistContact:!1},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.isExistContact;return Object(i.jsxs)("div",{className:J.a.wrapper,children:[Object(i.jsx)(j.a,{in:!0,appear:!0,classNames:W.a,timeout:500,unmountOnExit:!0,children:Object(i.jsx)("h1",{className:J.a.headerPhoneboo,children:"Phonebook"})}),Object(i.jsx)(E,{handlerInput:this.handlerInput,onCheckUnique:this.onCheckUnique,isExistContact:t}),Object(i.jsx)(G,{})]})}}]),n}(c.Component),T=n(2),X=n(26),Z=n(34),R=n.n(Z),$=n(12),tt=n(36),et=n(9),nt=Object(C.c)({items:[],filter:""},(a={},Object(b.a)(a,F,(function(t,e){return Object(et.a)(Object(et.a)({},t),{},{items:[e.payload].concat(Object(tt.a)(t.items))})})),Object(b.a)(a,y,(function(t,e){return Object(et.a)(Object(et.a)({},t),{},{items:t.items.filter((function(t){return t.id!==e.payload}))})})),Object(b.a)(a,N,(function(t,e){return Object(et.a)(Object(et.a)({},t),{},{filter:e.payload})})),a)),at=Object(T.c)({contacts:nt}),it={key:"myContacts",storage:R.a,whitelist:["contacts"]},ct=Object(C.a)({reducer:Object(X.a)(it,at),middleware:[$.a]}),rt=Object(X.b)(ct),st=n(35);s.a.render(Object(i.jsx)(A.a,{store:ct,children:Object(i.jsx)(st.a,{loading:null,persistor:rt,children:Object(i.jsx)(Y,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.59e0c879.chunk.js.map