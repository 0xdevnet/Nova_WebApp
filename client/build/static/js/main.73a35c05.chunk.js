(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{138:function(e,t,i){},206:function(e,t){},208:function(e,t){},218:function(e,t){},220:function(e,t){},234:function(e,t){},236:function(e,t){},320:function(e,t){},322:function(e,t){},329:function(e,t,i){},33:function(e,t){},330:function(e,t,i){},331:function(e,t,i){"use strict";i.r(t);var n=i(15),s=i.n(n),r=i(128),c=i.n(r),o=(i(138),i(129)),d=i(130),l=i(133),a=i(132),h=i(131),p=i(10),j={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},x=Object(p.a)(Object(p.a)({},j),{},{justifyContent:"top",textAlign:"center"}),u={margin:"50px 0 0 0",width:"60%",height:"auto",borderRadius:"15px",boxShadow:"-5px -5px 10px #e3e3e4, 5px 5px 10px #ffffff"},b={fontSize:"2rem",margin:"20px 0 5px 0"},g={margin:"0 0 20px 0",width:"150px",padding:"0",fontSize:"0.75rem",letterSpacing:"1px"},m={width:"600px",height:"150px",display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",margin:"0",padding:"0"},O={display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",height:"100vh"},y={display:"flex",flexDirection:"column",alignItems:"left",justifyContent:"space-evenly",width:"75%",height:"25%",boxShadow:"-9px -9px 13px #dededf, 9px 9px 13px #ffffff",borderRadius:"15px"},f={display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",height:"25%"},v={cursor:"pointer",margin:"0",width:"35%",height:"70%",color:"white",border:"none",borderRadius:"5px",fontSize:"0.9rem"},w=i(0),S=function(e){return Object(w.jsx)("button",{style:(t=e.url,{marginRight:"15px",width:"100px",height:"100px",background:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",border:"none",borderRadius:"15px",color:"white",fontSize:"1rem",letterSpacing:"1px"}),children:e.type});var t},k=function(){return Object(w.jsxs)("div",{style:m,children:[Object(w.jsx)(S,{url:"https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",type:"Story"}),Object(w.jsx)(S,{url:"https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",type:"Portraits"}),Object(w.jsx)(S,{url:"https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",type:"Food"})]})},D=function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("img",{src:e.picture_url,style:u,alt:"profile_pic"}),Object(w.jsx)("h1",{style:b,children:"Jane Doe"}),Object(w.jsx)("p",{style:g,children:"Photographer / Travel Blogger"})]})},T=function(){return Object(w.jsxs)("div",{style:{height:"auto",width:"150px"},children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h5",{children:"Followers:"}),Object(w.jsx)("p",{style:{color:"#292929"},children:"4693"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h5",{children:"Total Deposit:"}),Object(w.jsx)("p",{style:{color:"#292929"},children:"192043 UST"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h5",{children:"NFT Dropped:"}),Object(w.jsx)("p",{style:{color:"#292929"},children:"7"})]})]})},C=function(){return Object(w.jsxs)("div",{style:x,children:[Object(w.jsx)(D,{picture_url:"https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}),Object(w.jsx)(T,{})]})},L=i(30),R=function(){var e=new L.MnemonicKey({mnemonic:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).TERRA_MNEMOMIC_KEY}),t=new L.LCDClient({chainID:"tequila-0004",URL:"https://tequila-lcd.terra.dev"}).wallet(e),i=new L.Extension;i.connect(),i.on("connect",(function(e){t}));return Object(w.jsxs)("div",{style:f,children:[Object(w.jsx)("button",{style:Object(p.a)(Object(p.a)({},v),{},{background:"lightblue"}),onClick:function(){var e=new L.MsgSend(t.key.accAddress,"terra15c03nmgaadrdy4tpy03fekgtd4psg0d0yac6mj",{uust:5e4});i.post({msgs:[e]})},children:"Deposit"}),Object(w.jsx)("button",{style:Object(p.a)(Object(p.a)({},v),{},{background:"pink"}),children:"Withdraw"})]})},I=function(){return Object(w.jsxs)("div",{style:{margin:"0",paddingLeft:"10%"},children:[Object(w.jsx)("h4",{style:{margin:"0 0 5px 0",padding:"0"},children:"[Lvl 1] Deposit UST to Subscribe"}),Object(w.jsx)("h6",{style:{margin:"0 0 15px 0",padding:"0",color:"grey"},children:"Mininum Deposit: 50 UST"}),Object(w.jsx)("h6",{style:{margin:"0",padding:"0",color:"grey"},children:"Your Current Deposit: 0 UST [rank: Ghost]"})]})},_=function(){return Object(w.jsxs)("div",{style:y,children:[Object(w.jsx)(I,{}),Object(w.jsx)(R,{})]})},A=function(){return Object(w.jsxs)("div",{style:y,children:[Object(w.jsxs)("div",{style:{margin:"0",padding:"0 10%"},children:[Object(w.jsx)("h4",{style:{margin:"0 0 5px 0",padding:"0"},children:"[Lvl 2] Stake NOVA for a chance to win NFT drops"}),Object(w.jsx)("h6",{style:{margin:"0 0 15px 0",padding:"0",color:"grey"},children:"Next drop in: 3 days"})]}),Object(w.jsx)("div",{style:f,children:Object(w.jsx)("button",{style:Object(p.a)(Object(p.a)({},v),{},{background:"#Ff6961",color:"white",width:"80%"}),children:"Coming Soon"})})]})},E=function(){return Object(w.jsxs)("div",{style:y,children:[Object(w.jsx)("div",{style:{margin:"0",padding:"0 10%"},children:Object(w.jsx)("h4",{style:{margin:"0 0 5px 0",padding:"0"},children:"[Lvl 3] Buy Jane's most exclusive content with LUNA"})}),Object(w.jsx)("div",{style:f,children:Object(w.jsx)("button",{style:Object(p.a)(Object(p.a)({},v),{},{background:"#FBDB48",color:"white",width:"80%"}),children:"Latest Bids"})})]})},N=function(){return Object(w.jsxs)("div",{style:O,children:[Object(w.jsx)(_,{}),Object(w.jsx)(A,{}),Object(w.jsx)(E,{})]})},B=(i(329),{display:"grid",placeItems:"center"}),F={width:"100vw",display:"grid",gridTemplateColumns:"1.5fr 4fr 2.5fr"},M=Object(w.jsx)("div",{style:{width:"100%",height:"100px",display:"grid",placeItems:"center",margin:"0",padding:"0"},children:Object(w.jsx)("div",{style:{width:"100%",height:"50%",backgroundColor:"#9bddff",display:"grid",placeItems:"center",borderRadius:"15px",color:"white",letterSpacing:"1px"},children:"Subscribe to see the contents"})}),U=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{style:j,children:[Object(w.jsx)("h3",{style:{width:"100%"},children:"Busan on the water"}),Object(w.jsx)("p",{style:{width:"95%"},children:"It's my first day in Busan! Long flight from NY but excited because I've been wanting to come here for a while. Also I heard that Terraform Labs is here... wen Busan?"}),Object(w.jsx)("img",{style:{width:"100%",height:"auto",borderRadius:"15px"},src:"https://images.pexels.com/photos/5309285/pexels-photo-5309285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"busan"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"Last look at Times Square"}),Object(w.jsx)("h6",{style:{width:"100%",textAlign:"right"},children:"14 hours ago"}),Object(w.jsx)("p",{children:"Lorem ipsum dolor, adipisicing elit. Dolorum dolor, consectetur sapiente exercitationem nam minima laborum ducimus ad saepe eveniet rem reiciendis possimus asperiores natus in praesentium odit, repellat nemo!"}),Object(w.jsx)("video",{width:"100%",height:"auto",style:{borderRadius:"15px"},controls:!0,children:Object(w.jsx)("source",{src:"/Videos/newyork.mp4",type:"video/mp4"})})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"Last look at Times Square"}),Object(w.jsx)("h6",{style:{width:"100%",textAlign:"right"},children:"14 hours ago"}),Object(w.jsx)("p",{children:"Lorem ipsum dolor, adipisicing elit. Dolorum dolor, consectetur sapiente exercitationem nam minima laborum ducimus ad saepe eveniet rem reiciendis possimus asperiores natus in praesentium odit, repellat nemo!"}),Object(w.jsx)("video",{width:"100%",height:"auto",style:{borderRadius:"15px"},controls:!0,children:Object(w.jsx)("source",{src:"/Videos/newyork.mp4",type:"video/mp4"})})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"Last look at Times Square"}),Object(w.jsx)("h6",{style:{width:"100%",textAlign:"right"},children:"14 hours ago"}),Object(w.jsx)("p",{children:"Lorem ipsum dolor, adipisicing elit. Dolorum dolor, consectetur sapiente exercitationem nam minima laborum ducimus ad saepe eveniet rem reiciendis possimus asperiores natus in praesentium odit, repellat nemo!"}),Object(w.jsx)("video",{width:"100%",height:"auto",style:{borderRadius:"15px"},controls:!0,children:Object(w.jsx)("source",{src:"/Videos/newyork.mp4",type:"video/mp4"})})]})]}),P=function(e){Object(l.a)(i,e);var t=Object(a.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).doNothing=function(){return null},e}return Object(d.a)(i,[{key:"render",value:function(){return Object(w.jsx)("div",{style:B,children:Object(w.jsxs)("div",{style:F,children:[Object(w.jsx)(C,{}),Object(w.jsxs)(h.a,{dataLength:10,next:this.doNothing,hasMore:!1,loader:null,style:{width:"auto",margin:"5% 0 0 0",padding:"0 5%",borderRadius:"30px 30px 0 0",boxShadow:"inset -9px -9px 13px #dededf, inset 9px 9px 13px #ffffff"},height:"95vh",children:[M,Object(w.jsx)("h3",{style:{margin:"0",padding:"0"},children:"Highlights"}),Object(w.jsx)(k,{}),Object(w.jsx)("h3",{style:{margin:"0",padding:"0"},children:"Posts"}),U]}),Object(w.jsx)(N,{})]})})}}]),i}(s.a.Component);i(330);function q(){return Object(w.jsx)("section",{className:"App",children:Object(w.jsx)(P,{})})}c.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(q,{})}),document.getElementById("root"))}},[[331,1,2]]]);
//# sourceMappingURL=main.73a35c05.chunk.js.map