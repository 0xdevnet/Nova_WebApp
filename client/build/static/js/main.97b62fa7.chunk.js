(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,i){},202:function(e,t){},204:function(e,t){},214:function(e,t){},216:function(e,t){},230:function(e,t){},232:function(e,t){},316:function(e,t){},318:function(e,t){},325:function(e,t,i){},326:function(e,t,i){},327:function(e,t,i){"use strict";i.r(t);var n=i(17),s=i.n(n),c=i(128),r=i.n(c),o=(i(134),i(8)),l={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},d={display:"grid",placeItems:"center"},a={width:"100vw",display:"grid",gridTemplateColumns:"1.5fr 4fr 2.5fr"},p=Object(o.a)(Object(o.a)({},l),{},{justifyContent:"top",textAlign:"center"}),h={margin:"50px 0 0 0",width:"60%",height:"auto",borderRadius:"15px",boxShadow:"-5px -5px 10px #e3e3e4, 5px 5px 10px #ffffff"},j={fontSize:"2rem",margin:"20px 0 5px 0"},x={margin:"0 0 20px 0",width:"150px",padding:"0",fontSize:"0.75rem",letterSpacing:"1px"},u={width:"auto",margin:"5% 0 0 0",padding:"0 5%",borderRadius:"30px 30px 0 0",boxShadow:"inset -9px -9px 13px #dededf, inset 9px 9px 13px #ffffff"},b={width:"600px",height:"150px",display:"flex",flexDirection:"row",justifyContent:"left",alignItems:"center",margin:"0",padding:"0"},g=Object(o.a)(Object(o.a)({},l),{},{marginBottom:"50px"}),m={width:"100%",margin:"0"},f={width:"100%",margin:"25px 0 25px 0"},y={width:"100%",height:"auto",borderRadius:"15px"},O={display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",height:"100vh"},w={display:"flex",flexDirection:"column",alignItems:"left",justifyContent:"space-evenly",width:"75%",height:"25%",boxShadow:"-9px -9px 13px #dededf, 9px 9px 13px #ffffff",borderRadius:"15px"},v={display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",height:"25%"},S={cursor:"pointer",margin:"0",width:"35%",height:"70%",color:"white",border:"none",borderRadius:"5px",fontSize:"0.9rem"},D=i(0),I=function(e){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("img",{src:e.picture_url,style:h,alt:"profile_pic"}),Object(D.jsx)("h1",{style:j,children:"Jane Doe"}),Object(D.jsx)("p",{style:x,children:"Photographer / Travel Blogger"})]})},k=function(){return Object(D.jsxs)("div",{style:{height:"auto",width:"150px"},children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("h5",{children:"Followers:"}),Object(D.jsx)("p",{style:{color:"#292929"},children:"4693"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h5",{children:"Total Deposit:"}),Object(D.jsx)("p",{style:{color:"#292929"},children:"192043 UST"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h5",{children:"NFT Dropped:"}),Object(D.jsx)("p",{style:{color:"#292929"},children:"7"})]})]})},C=function(){return Object(D.jsxs)("div",{style:p,children:[Object(D.jsx)(I,{picture_url:"https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}),Object(D.jsx)(k,{})]})},T=i(30),R=function(){var e=new T.MnemonicKey({mnemonic:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).TERRA_MNEMOMIC_KEY}),t=new T.LCDClient({chainID:"tequila-0004",URL:"https://tequila-lcd.terra.dev"}).wallet(e),i=new T.Extension;i.connect(),i.on("connect",(function(e){t}));return Object(D.jsxs)("div",{style:v,children:[Object(D.jsx)("button",{style:Object(o.a)(Object(o.a)({},S),{},{background:"lightblue"}),onClick:function(){var e=new T.MsgSend(t.key.accAddress,"terra15c03nmgaadrdy4tpy03fekgtd4psg0d0yac6mj",{uust:5e4});i.post({msgs:[e]})},children:"Deposit"}),Object(D.jsx)("button",{style:Object(o.a)(Object(o.a)({},S),{},{background:"pink"}),children:"Withdraw"})]})},_=function(){return Object(D.jsxs)("div",{style:{margin:"0",paddingLeft:"10%"},children:[Object(D.jsx)("h4",{style:{margin:"0 0 5px 0",padding:"0"},children:"[Lvl 1] Deposit UST to Subscribe"}),Object(D.jsx)("h6",{style:{margin:"0 0 15px 0",padding:"0",color:"grey"},children:"Mininum Deposit: 50 UST"}),Object(D.jsx)("h6",{style:{margin:"0",padding:"0",color:"grey"},children:"Your Current Deposit: 0 UST [rank: Ghost]"})]})},L=function(){return Object(D.jsxs)("div",{style:w,children:[Object(D.jsx)(_,{}),Object(D.jsx)(R,{})]})},E=function(){return Object(D.jsxs)("div",{style:w,children:[Object(D.jsxs)("div",{style:{margin:"0",padding:"0 10%"},children:[Object(D.jsx)("h4",{style:{margin:"0 0 5px 0",padding:"0"},children:"[Lvl 2] Stake MINE for a chance to win NFT drops"}),Object(D.jsx)("h6",{style:{margin:"0 0 15px 0",padding:"0",color:"grey"},children:"Next drop in: 3 days"})]}),Object(D.jsx)("div",{style:v,children:Object(D.jsx)("button",{style:Object(o.a)(Object(o.a)({},S),{},{background:"#Ff6961",color:"white",width:"80%"}),children:"Coming Soon"})})]})},B=function(){return Object(D.jsxs)("div",{style:w,children:[Object(D.jsx)("div",{style:{margin:"0",padding:"0 10%"},children:Object(D.jsx)("h4",{style:{margin:"0 0 5px 0",padding:"0"},children:"[Lvl 3] Buy Jane's most exclusive content with LUNA"})}),Object(D.jsx)("div",{style:v,children:Object(D.jsx)("button",{style:Object(o.a)(Object(o.a)({},S),{},{background:"#FBDB48",color:"white",width:"80%"}),children:"Latest Bids"})})]})},M=function(){return Object(D.jsxs)("div",{style:O,children:[Object(D.jsx)(L,{}),Object(D.jsx)(E,{}),Object(D.jsx)(B,{})]})},N=i(129),A=function(e){return Object(D.jsx)("button",{style:(t=e.url,{marginRight:"15px",width:"100px",height:"100px",background:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",border:"none",borderRadius:"15px",color:"white",fontSize:"1rem",letterSpacing:"1px"}),children:e.type});var t},F=function(){return Object(D.jsxs)("div",{style:b,children:[Object(D.jsx)(A,{url:"https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",type:"Story"}),Object(D.jsx)(A,{url:"https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",type:"Portraits"}),Object(D.jsx)(A,{url:"https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",type:"Food"})]})},P=function(){return Object(D.jsx)("div",{style:{width:"100%",height:"100px",display:"grid",placeItems:"center",margin:"0",padding:"0"},children:Object(D.jsx)("div",{style:{width:"100%",height:"50%",backgroundColor:"#9bddff",display:"grid",placeItems:"center",borderRadius:"15px",color:"white",letterSpacing:"1px",cursor:"pointer"},children:"Subscribe to see the contents"})})},U=function(e){return Object(D.jsxs)("div",{style:g,children:[Object(D.jsx)("h2",{style:m,children:e.title}),Object(D.jsx)("p",{style:f,children:e.desc}),"/Videos/newyork.mp4"===e.img?Object(D.jsx)("video",{width:"100%",height:"auto",style:{borderRadius:"15px"},controls:!0,children:Object(D.jsx)("source",{src:e.img,type:"video/mp4"})}):Object(D.jsx)("img",{style:y,src:e.img,alt:"img_bubble"})]})},z=[{title:"Busan on the Water",desc:"It's my first day in Busan! Long flight from NY but excited because I've been wanting to come here for a while. Also I heard that Terraform Labs is here... wen Busan?",img:"https://images.pexels.com/photos/5309285/pexels-photo-5309285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{title:"Last Night in Manhattan",desc:"All the memories I made in Manhattan, this was a truly a life-changing experience. I will miss you concrete jungle.",img:"/Videos/newyork.mp4"},{title:"Pacific Palisades",desc:"I toured my dream home a month ago, just wanted to share to yall",img:"https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}].map((function(e,t){return Object(D.jsx)(U,{title:e.title,desc:e.desc,img:e.img},t)})),K=function(){return null},W=function(){return Object(D.jsxs)(N.a,{dataLength:10,next:K,hasMore:!1,loader:null,style:u,height:"95vh",children:[Object(D.jsx)(P,{}),Object(D.jsx)("h3",{style:{margin:"25px 0"},children:"Highlights"}),Object(D.jsx)(F,{}),Object(D.jsx)("h3",{style:{margin:"25px 0"},children:"Posts"}),z]})},H=(i(325),function(){return Object(D.jsx)("div",{style:d,children:Object(D.jsxs)("div",{style:a,children:[Object(D.jsx)(C,{}),Object(D.jsx)(W,{}),Object(D.jsx)(M,{})]})})});i(326);function J(){return Object(D.jsx)("section",{className:"App",children:Object(D.jsx)(H,{})})}r.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(J,{})}),document.getElementById("root"))},33:function(e,t){}},[[327,1,2]]]);
//# sourceMappingURL=main.97b62fa7.chunk.js.map