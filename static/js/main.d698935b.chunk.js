(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),s=a.n(o),l=a(8),c=a(9),u=a(11),i=a(10),m=a(12),d=a(51),p=a.n(d),_=a(3),h=a(17),g=a.n(h),f=a(4),v=a.n(f),b=a(18),E=a.n(b);function C(e){var t,a=e.children,n=e.onClick,o=e.type,s=e.theme,l=e.disabled,c=e.smallOnPhone;return r.a.createElement("button",{className:g()(E.a.button,(t={},Object(_.a)(t,E.a["button_theme_".concat(s)],!0),Object(_.a)(t,E.a.button_smallOnPhone,c),t)),type:o,onClick:n,disabled:l},a)}C.defaultProps={children:"",onClick:v.a,type:"button",theme:"default",disabled:!1};var y=C,k=a(6),O=a.n(k);function L(e){var t=e.children,a=e.isAuth,n=e.onLogout;return r.a.createElement("div",{className:O.a.wrapper},r.a.createElement("div",{className:O.a.header},r.a.createElement("h1",{className:O.a.title},"ChatUp"),a&&r.a.createElement("div",{className:O.a.logoutButton},r.a.createElement(y,{theme:"gray",onClick:n,smallOnPhone:!0},"Log Out"))),r.a.createElement("div",{className:O.a.content},r.a.createElement("div",{className:O.a.inner},t)))}L.defaultProps={isAuth:!1};var w=L,N=a(52),x=a.n(N);function j(e){var t=e.children;return r.a.createElement("div",{className:x.a.wrapper},t)}j.defaultProps={children:null};var M=j,P=a(1),S=a.n(P),B=a(28),I=a.n(B);function A(e){var t=e.id,a=e.name,n=e.label,o=e.placeholder,s=e.type,l=e.value,c=e.onChange;return r.a.createElement("label",{htmlFor:t},n&&r.a.createElement("span",{className:I.a.label},n),r.a.createElement("input",{className:I.a.input,type:s,id:t,name:a,value:l,onChange:c,placeholder:o}))}A.defaultProps={label:"",placeholder:"",type:"text",value:"",onChange:v.a};var F=A,R=a(5),U=a.n(R),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={login:"",password:"",error:""},a.setError=function(e){return a.setState({error:e})},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(_.a)({error:""},t,n))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.login,r=t.password;if(S()(n)||S()(r))return a.setError("Fill in login and password!");a.setError(""),a.props.onLogin({password:r,name:n})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.login,a=e.password,n=e.error;return r.a.createElement("div",{className:U.a.wrapper},r.a.createElement("h2",{className:U.a.title},"Log In To ChatUp!"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:U.a.form},r.a.createElement("div",{className:U.a.formRow},r.a.createElement(F,{id:"login",label:"Login:",name:"login",value:t,onChange:this.handleChange,placeholder:"Love"})),r.a.createElement("div",{className:U.a.formRow},r.a.createElement(F,{id:"password",type:"password",label:"Password:",name:"password",value:a,onChange:this.handleChange,placeholder:"0tT0N0V@"}))),r.a.createElement("div",{className:U.a.buttonWrapper},r.a.createElement(y,{type:"submit"},"Log In"),n&&r.a.createElement("div",{className:U.a.error},n))))}}]),t}(n.PureComponent),D=a(53),W=a(62),J=a(54),K=a.n(J),G=a(55),V=a.n(G);function z(e){var t=e.name,a=e.placeholder,n=e.value,o=e.onChange;return r.a.createElement("textarea",{className:V.a.textarea,name:t,value:n,onChange:o,placeholder:a})}z.defaultProps={label:"",placeholder:"",value:"",onChange:v.a};var H=z,Y=a(19),Z=a.n(Y);function q(e){var t=e.text,a=e.author,n=e.incoming;return r.a.createElement("div",{className:g()(Z.a.message,Object(_.a)({},Z.a.message_incoming,n))},r.a.createElement("div",{className:Z.a.author},a,":"),t)}q.defaultProps={incoming:!1};var Q=q,X=a(56),$=a.n(X),ee=function(e){var t=e.data,a=e.onSubmit,n=e.onCancel,o=function(e){return function(){n(e)}};return t.map(function(e,t){var n=0===t;return r.a.createElement("div",{key:t,className:$.a.button},r.a.createElement(y,{theme:n?"red":"default",onClick:n?a:o(e)},e))})},te=a(63),ae=a(57),ne=a.n(ae),re=function(e){var t=Object(te.a)(e.data,2),a=t[0],n=t[1],o=e.onClick,s=function(e){return function(){o(e)}};return function(){for(var e=[],t=a;t<=n;t++)e.push(r.a.createElement("div",{key:t,className:ne.a.button},r.a.createElement(y,{onClick:s(t)},t)));return e}()},oe=["Monday","Tuesday","Wednesday","Thursday","Friday"],se=function(e){var t=new Date(e).getDay();0!==t&&6!==t||(t=1);var a=t-1,n=oe.slice(a),r=oe.slice(0,a);return n.concat(r)},le=a(58),ce=a.n(le),ue=function(e){var t=e.data,a=e.onClick,n=se(t),o=function(e){return function(){a(e)}};return n.map(function(e){return r.a.createElement("div",{key:e,className:ce.a.button},r.a.createElement(y,{onClick:o(e)},e))})},ie=a(59),me=a.n(ie),de=a(60),pe=a.n(de),_e={height:"200px",width:"100%"},he=function(){return r.a.createElement("div",{className:pe.a.marker})},ge=function(e){var t=e.data,a=e.defaultZoom;return r.a.createElement("div",{style:_e},r.a.createElement(me.a,{bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:"/chatUp",REACT_APP_SOCKET_URL:"https://demo-chat-server.on.ag/"}).REACT_APP_GOOGLE_API_KEY||""},defaultCenter:t,defaultZoom:a},r.a.createElement(he,{lat:t.lat,lng:t.lng})))};ge.defaultProps={defaultZoom:11};var fe={complete:{type:"complete",title:"Complete this conversation?",component:ee},rate:{type:"rate",title:"Please rate your experience:",component:re},date:{type:"date",title:"Pick a date:",component:ue},map:{type:"map",title:"Here we are:",component:ge}},ve=a(61),be=a.n(ve),Ee={},Ce=function(e){var t=e.type,a=e.data,n=e.onSelect,o=e.onLogout,s=fe[t].component,l=fe[t].title;return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("h3",{className:be.a.title},l),r.a.createElement(s,Object.assign({},function(){switch(t){case fe.date.type:case fe.rate.type:return{onClick:n};case fe.complete.type:return{onCancel:n,onSubmit:o};default:return Ee}}(),{data:a})))};Ce.defaultProps={title:"",onSelect:v.a,onLogout:v.a};var ye=Ce,ke="message",Oe="command",Le=a(2),we=a.n(Le),Ne=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).scrollToBottom=function(){a.messagesContainer&&a.messagesContainer.current&&(a.messagesContainer.current.scrollTop=a.messagesContainer.current.scrollHeight)},a.updateMessages=function(e){a.setState(function(t){return{messages:[].concat(Object(W.a)(t.messages),[Object(D.a)({},e,{id:K()()})])}}),a.scrollToBottom()},a.clearMessageInput=function(){return a.setState({message:""})},a.handleMessageChange=function(e){a.setState({message:e.target.value})},a.createMessage=function(e){return{message:e,author:a.props.user.name}},a.addMessage=function(e){var t=a.props.socket,n=a.createMessage(e);a.updateMessages(n),t.emit(ke,n)},a.handleMessageSend=function(e){e.preventDefault();var t=a.state.message;S()(t)||(a.addMessage(t),a.clearMessageInput())},a.handleCommandClick=function(){a.props.socket.emit(Oe)},a.handleSelectCommand=function(e){return function(t){var n=a.state.messages;a.setState({messages:n.filter(function(t){return t.id!==e})},function(){a.addMessage(t)})}},a.renderMessages=function(){var e=a.props,t=e.user.name,n=e.onLogout,o=a.state.messages;return S()(o)?r.a.createElement("span",{className:we.a.description},"Start conversation..."):o.map(function(e){var o=e.author,s=e.message,l=e.command,c=e.id;if(!S()(s))return r.a.createElement("div",{key:c,className:we.a.message},r.a.createElement(Q,{text:s,author:o,incoming:o!==t}));if(!S()(l)){var u=l.type,i=l.data;return r.a.createElement("div",{key:c,className:we.a.message},r.a.createElement(ye,{type:u,data:i,onSelect:a.handleSelectCommand(c),onLogout:n}))}return null})},a.state={message:"",messages:[]},a.messagesContainer=r.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.socket;e.on(ke,this.updateMessages),e.on(Oe,this.updateMessages)}},{key:"componentWillUnmount",value:function(){this.props.socket.removeAllListeners(),this.messagesContainer=null}},{key:"render",value:function(){var e=this.state.message;return r.a.createElement("div",{className:we.a.wrapper},r.a.createElement("div",{className:we.a.messages,ref:this.messagesContainer},this.renderMessages()),r.a.createElement("div",{className:we.a.formWrapper},r.a.createElement("form",{onSubmit:this.handleMessageSend},r.a.createElement("div",{className:we.a.controls},r.a.createElement(H,{type:"text",id:"message",name:"message",value:e,onChange:this.handleMessageChange,placeholder:"Message..."}),r.a.createElement("button",{type:"submit",disabled:!e,className:we.a.submitButton},">")),r.a.createElement("div",{className:we.a.luckyBtn},r.a.createElement(y,{onClick:this.handleCommandClick},'"I\'m Feeling Lucky"')))))}}]),t}(n.PureComponent),xe="https://demo-chat-server.on.ag/",je=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={socket:null,user:null},a.handleLogin=function(e){a.setState({user:e,socket:p()(xe)})},a.handleLogout=function(){a.state.socket.close(),a.setState({user:null,socket:null})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.socket,a=e.user,n=!S()(a);return r.a.createElement(w,{isAuth:n,onLogout:this.handleLogout},r.a.createElement(M,null,n?r.a.createElement(Ne,{socket:t,user:a,onLogout:this.handleLogout}):r.a.createElement(T,{onLogin:this.handleLogin})))}}]),t}(n.Component);a(125),a(126);s.a.render(r.a.createElement(je,null),document.getElementById("root"))},18:function(e,t,a){e.exports={button:"Button_button__1DuDf",button_theme_default:"Button_button_theme_default__1kEsI",button_theme_red:"Button_button_theme_red__12ne8",button_theme_gray:"Button_button_theme_gray__8xU26",button_smallOnPhone:"Button_button_smallOnPhone__3kf3E"}},19:function(e,t,a){e.exports={message:"Message_message__1lJPV",message_incoming:"Message_message_incoming__3e5_B",author:"Message_author__Qogzt",fadeIn:"Message_fadeIn__3rjwE"}},2:function(e,t,a){e.exports={wrapper:"Chat_wrapper__1TDJ6",messages:"Chat_messages__3hPYy",description:"Chat_description__1ibM8",message:"Chat_message__1Rprk",fadeIn:"Chat_fadeIn__3uNbO",formWrapper:"Chat_formWrapper__mOEJO",controls:"Chat_controls__3AJv6",submitButton:"Chat_submitButton__3cwHA",luckyBtn:"Chat_luckyBtn__GMb4K"}},28:function(e,t,a){e.exports={label:"Input_label__3x9b9",input:"Input_input__b7kk-"}},5:function(e,t,a){e.exports={wrapper:"LoginForm_wrapper__3ahXj",title:"LoginForm_title__3pzcL",form:"LoginForm_form__sfLfb",formRow:"LoginForm_formRow__2YQzO",error:"LoginForm_error__3tfUx",buttonWrapper:"LoginForm_buttonWrapper__OI7fq"}},52:function(e,t,a){e.exports={wrapper:"Container_wrapper__2xd3e"}},55:function(e,t,a){e.exports={textarea:"Textarea_textarea__1_y4f"}},56:function(e,t,a){e.exports={button:"CompleteCommand_button__2xS46"}},57:function(e,t,a){e.exports={button:"RateCommand_button__1mWFq"}},58:function(e,t,a){e.exports={button:"DateCommand_button__2xevk"}},6:function(e,t,a){e.exports={wrapper:"Layout_wrapper__3Wr_O",header:"Layout_header__1OV_i",title:"Layout_title__3xdK-",logoutButton:"Layout_logoutButton__iheCU",content:"Layout_content__3pIaG",inner:"Layout_inner__1Rrgj"}},60:function(e,t,a){e.exports={marker:"MapCommand_marker__1OLIF"}},61:function(e,t,a){e.exports={title:"Command_title__UBUvX"}},64:function(e,t,a){e.exports=a(127)},95:function(e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.d698935b.chunk.js.map