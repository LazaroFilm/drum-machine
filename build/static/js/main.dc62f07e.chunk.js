(this["webpackJsonpreact-redux-playground"]=this["webpackJsonpreact-redux-playground"]||[]).push([[0],{36:function(e,t,a){e.exports=a(48)},41:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),u=(a(41),a(34),a(7)),m=a(22),l=Object(m.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),s=l.actions,i=(s.increment,s.decrement,s.incrementByAmount,l.reducer);a(8);var d=a(14),p=a(15),h=a(23),_=a(20),f=a(54),k=a(55);var v=function(e){Object(h.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:"Initial text"},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{bg:"light",expand:"lg"},r.a.createElement(f.a.Brand,null,"Dr(u/ea)m Machine"),r.a.createElement(k.a,{variant:"primary",id:"display"},this.state.text))}}]),a}(n.Component),b=Object(u.b)((function(e){return{}}))(v),y=a(50),C=a(51),E=a(52),w=a(53);var B={Q:{sound:"Chord 1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},W:{sound:"Chord 2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},E:{sound:"Chord 3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},A:{sound:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},S:{sound:"Open HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},D:{sound:"Closed HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},Z:{sound:"Punchy Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},X:{sound:"Side Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},C:{sound:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}},g=function(e){Object(h.a)(a,e);var t=Object(_.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"makeButton",value:function(e){return r.a.createElement(y.a,{className:"p-1"},r.a.createElement(C.a,{className:"drum-pad",id:e,variant:"primary btn-lg btn-block py-5",type:"submit",onClick:this.handleClick},e,r.a.createElement("audio",{className:"clip",id:"audioClip".concat(e),src:B[e].url,type:"audio/mpeg"})))}},{key:"handleClick",value:function(e){var t=e.target.id,a=document.getElementById("audioClip".concat(t));console.log("".concat(t," clicked!")),a.load(),a.play()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(E.a,null,r.a.createElement(w.a,null,this.makeButton("Q"),this.makeButton("W"),this.makeButton("E")),r.a.createElement(w.a,null,this.makeButton("A"),this.makeButton("S"),this.makeButton("D")),r.a.createElement(w.a,null,this.makeButton("Z"),this.makeButton("X"),this.makeButton("C"))))}}]),a}(n.Component),O=Object(u.b)((function(e){return{}}))(g);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(O,null))},j=(a(47),Object(m.a)({reducer:{counter:i}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:j,id:"drum-machine"},r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}}},[[36,1,2]]]);
//# sourceMappingURL=main.dc62f07e.chunk.js.map