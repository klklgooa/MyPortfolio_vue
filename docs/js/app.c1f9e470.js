(function(){"use strict";var l={7997:function(l,n,t){var r=t(9242),e=t(3396);const a={class:"container"};function i(l,n,t,r,i,d){const u=(0,e.up)("Header"),o=(0,e.up)("Nav"),s=(0,e.up)("router-view"),c=(0,e.up)("Article"),_=(0,e.up)("Footer");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e.Wm)(u),(0,e._)("div",a,[(0,e.Wm)(o),(0,e.Wm)(s),(0,e.Wm)(c)]),(0,e.Wm)(_)])}const d=l=>((0,e.dD)("data-v-eaf34742"),l=l(),(0,e.Cn)(),l),u={id:"header_span"},o={id:"music_details"},s=d((()=>(0,e._)("summary",null,"Music",-1))),c={style:{float:"left"}},_=d((()=>(0,e._)("label",{for:"Milky"},"mStone_Milky ",-1))),p=d((()=>(0,e._)("label",{for:"Gatron"},"Gatron_Brown",-1))),f=d((()=>(0,e._)("label",{for:"Meteor"},"SP-star_Meteor_white",-1)));function g(l,n,t,a,i,d){const g=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("header",null,[(0,e._)("span",u,[(0,e.Wm)(g,{to:"/"},{default:(0,e.w5)((()=>[(0,e.Uk)("Inchan's  Portpolio")])),_:1})]),(0,e._)("details",o,[s,(0,e._)("ul",c,[(0,e._)("li",null,[(0,e._)("div",null,[(0,e.wy)((0,e._)("input",{type:"radio",id:"Milky",name:"music1",value:"../music/Milky.mp3","onUpdate:modelValue":n[0]||(n[0]=l=>i.selectedMusic=l)},null,512),[[r.G2,i.selectedMusic]]),_])]),(0,e._)("li",null,[(0,e._)("div",null,[(0,e.wy)((0,e._)("input",{type:"radio",id:"Gatron",name:"music2",value:"../music/Gatron.mp3","onUpdate:modelValue":n[1]||(n[1]=l=>i.selectedMusic=l)},null,512),[[r.G2,i.selectedMusic]]),p])]),(0,e._)("li",null,[(0,e._)("div",null,[(0,e.wy)((0,e._)("input",{type:"radio",id:"Meteor",name:"music3",value:"../music/Meteor_white.mp3","onUpdate:modelValue":n[2]||(n[2]=l=>i.selectedMusic=l)},null,512),[[r.G2,i.selectedMusic]]),f])])]),(0,e._)("span",null,[(0,e._)("input",{id:"play_button",class:"music_button",type:"button",value:"Play",onClick:n[3]||(n[3]=(...n)=>l.check&&l.check(...n))}),(0,e._)("input",{id:"stop_button",class:"music_button",type:"button",value:"Stop",onClick:n[4]||(n[4]=(...n)=>l.stop&&l.stop(...n))})])])])}var b={data(){return{selectedMusic:null,audio:new Audio}},methods:{playMusic(){this.selectedMusic&&(this.audio.src=this.selectedMusic,this.audio.load(),this.audio.play())},stopMusic(){this.audio.pause()}}},v=t(89);const m=(0,v.Z)(b,[["render",g],["__scopeId","data-v-eaf34742"]]);var h=m;const y=l=>((0,e.dD)("data-v-76228bb6"),l=l(),(0,e.Cn)(),l),k={id:"nav_ul"},w=y((()=>(0,e._)("div",{class:"nav_div"},"나의 소개",-1))),D=y((()=>(0,e._)("div",{class:"nav_div"},"프로젝트",-1))),C=y((()=>(0,e._)("div",{class:"nav_div"},"나의 경력",-1))),I=y((()=>(0,e._)("div",{class:"nav_div"},"목표",-1)));function x(l,n,t,r,a,i){const d=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("nav",null,[(0,e._)("ul",k,[(0,e._)("li",null,[(0,e.Wm)(d,{to:"/introduction"},{default:(0,e.w5)((()=>[w])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(d,{to:"/project"},{default:(0,e.w5)((()=>[D])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(d,{to:"/career"},{default:(0,e.w5)((()=>[C])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(d,{to:"/vision"},{default:(0,e.w5)((()=>[I])),_:1})])])])}var M={};const A=(0,v.Z)(M,[["render",x],["__scopeId","data-v-76228bb6"]]);var G=A,U=t(7139);const S=["innerHTML"];function O(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("article",null,[(0,e._)("h2",null,(0,U.zw)(t.title),1),(0,e._)("div",{innerHTML:t.body},null,8,S)])}var Z={props:{title:String,body:String}};const j=(0,v.Z)(Z,[["render",O],["__scopeId","data-v-1a702489"]]);var W=j;const H=l=>((0,e.dD)("data-v-7c1eddd3"),l=l(),(0,e.Cn)(),l),L=H((()=>(0,e._)("i",null,[(0,e.Uk)(" Copyright 2023. 황인찬 all rights reserved. "),(0,e._)("br"),(0,e.Uk)(" 연락처 : 010-5413-0707 ")],-1))),T=[L];function E(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("footer",null,T)}var Q={};const P=(0,v.Z)(Q,[["render",E],["__scopeId","data-v-7c1eddd3"]]);var V=P,F={components:{Header:h,Nav:G,Article:W,Footer:V}};const K=(0,v.Z)(F,[["render",i]]);var N=K,z=t(2483);const Y=l=>((0,e.dD)("data-v-4cf1834a"),l=l(),(0,e.Cn)(),l),R={class:"container-fluid main-section overflow-hidden"},B={class:"container"},J={class:"row"},q={class:"col-md-6 col-12"},X={class:"banner-left"},$=Y((()=>(0,e._)("h1",null,"꿈꾸는 개발자...",-1))),ll=["src"],nl=Y((()=>(0,e._)("p",{style:{border:"0px","font-size":"25px","font-family":"sans-serif"}}," Inchan Hwang ",-1))),tl=Y((()=>(0,e._)("h3",{class:"typing"},"A Dreaming Developer. . .",-1))),rl=Y((()=>(0,e._)("p",null," Hello, I'm Hwang Inchan, dreaming of becoming a developer. I am currently in my third year of Gachon University and I am learning web programs. ",-1))),el=Y((()=>(0,e._)("div",{class:"col-md-6 col-12"},[(0,e._)("div",{class:"banner-top"})],-1)));function al(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",R,[(0,e._)("div",B,[(0,e._)("div",J,[(0,e._)("div",q,[(0,e._)("div",X,[$,(0,e._)("img",{class:"index_face",src:a.indexFace,alt:"keyard"},null,8,ll),nl,tl,rl])]),el])])])}var il={data(){return{indexFace:t(6202)}}};const dl=(0,v.Z)(il,[["render",al],["__scopeId","data-v-4cf1834a"]]);var ul=dl;const ol={id:"project"},sl=["onClick"];function cl(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",ol,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.projects,((l,n)=>((0,e.wg)(),(0,e.iD)("button",{key:n,onClick:l=>i.contentChange(n)},(0,U.zw)(l.tab),9,sl)))),128)),((0,e.wg)(),(0,e.j4)((0,e.LL)(i.currentComponent),{userInfo:t.userInfo},null,8,["userInfo"]))])}const _l=l=>((0,e.dD)("data-v-62b70b9d"),l=l(),(0,e.Cn)(),l),pl=_l((()=>(0,e._)("h1",null,"Javascript를 이용한 동적 페이지",-1))),fl={href:"https://klklgooa.github.io/"},gl=["src"],bl=_l((()=>(0,e._)("h2",null,"Click!",-1))),vl=_l((()=>(0,e._)("br",null,null,-1))),ml=_l((()=>(0,e._)("br",null,null,-1))),hl=_l((()=>(0,e._)("br",null,null,-1))),yl=["src"],kl=_l((()=>(0,e._)("br",null,null,-1))),wl=_l((()=>(0,e._)("br",null,null,-1))),Dl=_l((()=>(0,e._)("br",null,null,-1))),Cl=_l((()=>(0,e._)("br",null,null,-1))),Il=_l((()=>(0,e._)("fieldset",null,[(0,e._)("legend",null,"Keyard 프로젝트 개요"),(0,e._)("ul",null,[(0,e._)("li",null,"키보드 커스텀의 요소"),(0,e._)("li",null,"스위치 윤활, 흡음재 세팅, 원리 & 분석"),(0,e._)("li",null,"Javascript로 구현한 타건음 컨텐츠"),(0,e._)("li",null,"타건음 컨텐츠"),(0,e._)("li",null,"reset.css 파일에 모든 html파일이 공통으로 적용되어야 하는 속성과 속성값들을 초기화")])],-1)));function xl(l,n,r,a,i,d){return(0,e.wg)(),(0,e.iD)("div",null,[pl,(0,e._)("a",fl,[(0,e._)("img",{id:"keyard_logo",src:t(8109),alt:"hdiary"},null,8,gl)]),bl,vl,ml,hl,(0,e._)("div",null,[(0,e._)("img",{class:"keyard_1",src:t(7273),alt:"keyard"},null,8,yl),(0,e.Uk)("  ")]),kl,wl,Dl,Cl,Il])}var Ml={name:"Keyard"};const Al=(0,v.Z)(Ml,[["render",xl],["__scopeId","data-v-62b70b9d"]]);var Gl=Al;const Ul=l=>((0,e.dD)("data-v-3f44eb84"),l=l(),(0,e.Cn)(),l),Sl=Ul((()=>(0,e._)("h1",null,"건강관리 Android 어플리케이션",-1))),Ol=["src"],Zl=Ul((()=>(0,e._)("p",null,"Hdiary",-1))),jl=["src"],Wl=["src"],Hl=["src"],Ll=["src"],Tl=["src"],El=["src"],Ql=Ul((()=>(0,e._)("br",null,null,-1))),Pl=Ul((()=>(0,e._)("br",null,null,-1))),Vl=Ul((()=>(0,e._)("br",null,null,-1))),Fl=Ul((()=>(0,e._)("br",null,null,-1))),Kl=Ul((()=>(0,e._)("fieldset",null,[(0,e._)("legend",null,"Hdiary 프로젝트 개요"),(0,e._)("ul",null,[(0,e._)("li",null,"이메일 형식의 회원관리"),(0,e._)("li",null,"사용자들의 관심을 끌고 유용한 정보들을 자연스럽게 제공하는 AutoScroll banner 사용"),(0,e._)("li",null,"BMI 계산 기능으로 자신의 체형을 객관적으로 판단, 만보기 기능으로 활동량 측정"),(0,e._)("li",null,"약 먹는 시간, 운동 시간, 비타민 섭취 확인 알림을 함으로써 건강하고 규칙적인 생활습관 유지"),(0,e._)("li",null,"현재 걸음 수와 목표치의 %를 바 형태로 보여주는 만보기 기능")])],-1)));function Nl(l,n,r,a,i,d){return(0,e.wg)(),(0,e.iD)("div",null,[Sl,(0,e._)("img",{src:t(3783),alt:"hdiary"},null,8,Ol),Zl,(0,e._)("div",null,[(0,e._)("img",{class:"hdiary_img",src:t(2742),alt:"hdiary"},null,8,jl),(0,e.Uk)("  "),(0,e._)("img",{class:"hdiary_img",src:t(1542),alt:"hdiary"},null,8,Wl),(0,e._)("img",{class:"hdiary_img",src:t(7875),alt:"hdiary"},null,8,Hl),(0,e._)("img",{class:"hdiary_img",src:t(8076),alt:"hdiary"},null,8,Ll),(0,e._)("img",{class:"hdiary_img",src:t(5771),alt:"hdiary"},null,8,Tl),(0,e._)("img",{class:"hdiary_img",src:t(3245),alt:"hdiary"},null,8,El)]),Ql,Pl,Vl,Fl,Kl])}var zl={name:"Hdiary"};const Yl=(0,v.Z)(zl,[["render",Nl],["__scopeId","data-v-3f44eb84"]]);var Rl=Yl;const Bl=l=>((0,e.dD)("data-v-52f6ee0f"),l=l(),(0,e.Cn)(),l),Jl=Bl((()=>(0,e._)("h1",null,"Witty(React 기반 Web Application)",-1))),ql=["src"],Xl=Bl((()=>(0,e._)("br",null,null,-1))),$l=Bl((()=>(0,e._)("br",null,null,-1))),ln=Bl((()=>(0,e._)("br",null,null,-1))),nn=["src"],tn=Bl((()=>(0,e._)("br",null,null,-1))),rn=Bl((()=>(0,e._)("br",null,null,-1))),en=Bl((()=>(0,e._)("br",null,null,-1))),an=Bl((()=>(0,e._)("fieldset",null,[(0,e._)("legend",null,"witty 프로젝트 개요"),(0,e._)("ul",null,[(0,e._)("li",null,"이메일 형식의 회원관리"),(0,e._)("li",null,"피드(게시물)마다 '좋아요'기능"),(0,e._)("li",null,"개인 프로필 커스텀 기능"),(0,e._)("li",null,"팔로우 한 사람들의 피드를 CardView 형태로 보여줌"),(0,e._)("li",null,"피드에 답글을 적을 수 있는 부가 기능")])],-1)));function dn(l,n,r,a,i,d){return(0,e.wg)(),(0,e.iD)("div",null,[Jl,(0,e._)("img",{class:"witty_logo",src:t(7729),alt:"witty"},null,8,ql),Xl,$l,ln,(0,e._)("div",null,[(0,e.Uk)("   "),(0,e._)("img",{class:"witty_img",src:t(2107),alt:"witty"},null,8,nn)]),tn,rn,en,an])}var un={name:"Witty"};const on=(0,v.Z)(un,[["render",dn],["__scopeId","data-v-52f6ee0f"]]);var sn=on,cn={props:{userInfo:Object},data(){return{index:0}},methods:{contentChange(l){this.index=l}},computed:{projects(){return[{tab:"Keyard",component:Gl},{tab:"Hdiary",component:Rl},{tab:"Witty",component:sn}]},currentComponent(){return this.projects[this.index].component}}};const _n=(0,v.Z)(cn,[["render",cl],["__scopeId","data-v-c1406ad0"]]);var pn=_n;const fn={id:"vision"},gn=["onClick"];function bn(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",fn,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.visions,((l,n)=>((0,e.wg)(),(0,e.iD)("button",{key:n,onClick:l=>i.contentChange(n)},(0,U.zw)(l.tab),9,gn)))),128)),((0,e.wg)(),(0,e.j4)((0,e.LL)(i.currentComponent),{userInfo:t.userInfo},null,8,["userInfo"]))])}const vn=l=>((0,e.dD)("data-v-6ed54dd2"),l=l(),(0,e.Cn)(),l),mn=vn((()=>(0,e._)("h1",null,"현재 능력치 그래프",-1))),hn=vn((()=>(0,e._)("br",null,null,-1))),yn=vn((()=>(0,e._)("br",null,null,-1))),kn=vn((()=>(0,e._)("br",null,null,-1))),wn=vn((()=>(0,e._)("br",null,null,-1))),Dn=vn((()=>(0,e._)("br",null,null,-1))),Cn=vn((()=>(0,e._)("hr",null,null,-1))),In=vn((()=>(0,e._)("h1",null,"목표 능력치 그래프",-1))),xn=vn((()=>(0,e._)("br",null,null,-1))),Mn=vn((()=>(0,e._)("br",null,null,-1)));function An(l,n,t,r,a,i){const d=(0,e.up)("PolarArea");return(0,e.wg)(),(0,e.iD)("div",null,[mn,hn,yn,(0,e._)("div",null,[(0,e.Wm)(d,{data:l.presentdata,style:{position:"relative",height:"500px"}},null,8,["data"])]),kn,wn,Dn,Cn,In,xn,Mn])}var Gn={};const Un=(0,v.Z)(Gn,[["render",An],["__scopeId","data-v-6ed54dd2"]]);var Sn=Un;const On=l=>((0,e.dD)("data-v-934af300"),l=l(),(0,e.Cn)(),l),Zn=On((()=>(0,e._)("h1",null,"유망 직업 및 분야",-1))),jn=["src"],Wn=["src"],Hn=["src"],Ln=["src"],Tn=["src"],En=["src"],Qn=On((()=>(0,e._)("fieldset",null,[(0,e._)("legend",null,"목표를 위한 준비"),(0,e._)("ol",null,[(0,e._)("li",null,"자격증 준비(SQLD, 리눅스 마스터, 정보통신기사)"),(0,e._)("li",null,"포트폴리오(백엔드 웹 개발 및 인턴 경험)"),(0,e._)("li",null,"코딩 테스트(다양한 알고리즘 공부, 프로그래머스, 백준)"),(0,e._)("li",null,"어학 능력(논문 해석이 가능하고 의사소통에 필요한 영어회화)"),(0,e._)("li",null,"현업 직무 이해 능력(지원 할 회사의 직종에 대한 이해와 노력)")])],-1)));function Pn(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",null,[Zn,(0,e._)("img",{class:"field_img",src:a.field1,alt:"field"},null,8,jn),(0,e._)("img",{class:"field_img",src:a.field2,alt:"field"},null,8,Wn),(0,e._)("img",{class:"field_img",src:a.field3,alt:"field"},null,8,Hn),(0,e._)("img",{class:"field_img",src:a.field4,alt:"field"},null,8,Ln),(0,e._)("img",{class:"field_img",src:a.field5,alt:"field"},null,8,Tn),(0,e._)("img",{class:"field_img",src:a.field6,alt:"field"},null,8,En),Qn])}var Vn=t.p+"img/field1.6e01e761.png",Fn=t.p+"img/field2.9ec50bf2.png",Kn=t.p+"img/field3.082dcb2c.png",Nn=t.p+"img/field4.05dd3a88.png",zn=t.p+"img/field5.ecaa45c6.png",Yn=t.p+"img/field6.f4a23535.png",Rn={data(){return{field1:Vn,field2:Fn,field3:Kn,field4:Nn,field5:zn,field6:Yn}}};const Bn=(0,v.Z)(Rn,[["render",Pn],["__scopeId","data-v-934af300"]]);var Jn=Bn;const qn=l=>((0,e.dD)("data-v-703fd670"),l=l(),(0,e.Cn)(),l),Xn=qn((()=>(0,e._)("h1",null,"Ssafy(Samsung SW Academy For Youth)",-1))),$n={href:"https://www.ssafy.com"},lt=["src"],nt=qn((()=>(0,e._)("h2",null,"Click!",-1))),tt=qn((()=>(0,e._)("br",null,null,-1))),rt=qn((()=>(0,e._)("br",null,null,-1))),et=qn((()=>(0,e._)("br",null,null,-1))),at=["src"],it=qn((()=>(0,e._)("br",null,null,-1))),dt=qn((()=>(0,e._)("br",null,null,-1))),ut=qn((()=>(0,e._)("br",null,null,-1))),ot=["src"],st=qn((()=>(0,e._)("br",null,null,-1))),ct=qn((()=>(0,e._)("br",null,null,-1))),_t=qn((()=>(0,e._)("br",null,null,-1))),pt=qn((()=>(0,e._)("fieldset",null,[(0,e._)("legend",null,"Ssafy의 개요"),(0,e._)("ul",null,[(0,e._)("li",null,"최고 수준의 교육을 제공합니다."),(0,e._)("li",null,"맞춤형 교육을 제공합니다."),(0,e._)("li",null,"자기주도적 학습을 지향합니다."),(0,e._)("li",null,"취업 경쟁력을 높일 수 있는 효율적인 취업지원 서비스를 제공합니다."),(0,e._)("li",null," 고용노동부의 취업지원 노하우를 기반으로 교육생에게 최적의 일자리 정보를 제공 ")])],-1)));function ft(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",null,[Xn,(0,e._)("a",$n,[(0,e._)("img",{class:"ssafy_logo",src:a.ssafy1,alt:"ssafy"},null,8,lt)]),nt,tt,rt,et,(0,e._)("img",{class:"ssafy_img",src:a.ssafy2,alt:"ssafy"},null,8,at),it,dt,ut,(0,e._)("img",{class:"ssafy_img",src:a.ssafy3,alt:"ssafy"},null,8,ot),st,ct,_t,pt])}var gt=t.p+"img/ssafy1.b6433fab.png",bt=t.p+"img/ssafy2.5574c9ec.png",vt=t.p+"img/ssafy3.b14b922e.png",mt={data(){return{ssafy1:gt,ssafy2:bt,ssafy3:vt}}};const ht=(0,v.Z)(mt,[["render",ft],["__scopeId","data-v-703fd670"]]);var yt=ht,kt={props:{userInfo:Object},data(){return{index:0}},methods:{contentChange(l){this.index=l}},computed:{visions(){return[{tab:"Ability",component:Sn},{tab:"Field",component:Jn},{tab:"Ssafy",component:yt}]},currentComponent(){return this.visions[this.index].component}}};const wt=(0,v.Z)(kt,[["render",bn],["__scopeId","data-v-04fb7ead"]]);var Dt=wt;const Ct={id:"career"},It=["onClick"];function xt(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",Ct,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.careers,((l,n)=>((0,e.wg)(),(0,e.iD)("button",{key:n,onClick:l=>i.contentChange(n)},(0,U.zw)(l.tab),9,It)))),128)),((0,e.wg)(),(0,e.j4)((0,e.LL)(i.currentComponent),{userInfo:t.userInfo},null,8,["userInfo"]))])}var Mt=t.p+"img/deep1.b5924605.png",At=t.p+"img/deep2.d7427431.png",Gt=t.p+"img/deep3.1bbd1a70.png",Ut=t.p+"img/deep5.5db86f45.png",St=t.p+"img/deep6.b01566f2.png",Ot=t.p+"img/deep4.c7410cac.png";const Zt=(0,e.uE)('<h1>딥러닝 스쿨</h1><img class="poster" src="'+Mt+'" alt="keyard"><br><br><br><br><hr><h1>8월 4일 Infinitt</h1><h3>유방암 검사 AI모델</h3><img class="images" src="'+At+'" alt="keyard"><img class="images" src="'+Gt+'" alt="keyard"><br><br><br><br><hr><h1>8월 7일 Neurophet</h1><h3>뇌종양 검사 AI모델</h3><img class="images" src="'+Ut+'" alt="keyard"><br><br><br><br><hr><h1>8월 8일 Deepnoid</h1><h3>Mnist 데이터 활용</h3><img class="images" src="'+St+'" alt="keyard"><br><br><br><br><hr><br><br><img class="images" src="'+Ot+'" alt="keyard"><br><br><br><br><fieldset><legend>딥러닝 스쿨 개요</legend><ul><li>AI활용 의학분야 회사들의 교육</li><li>각 회사의 임원이나 실무 담당자의 커리큘럼에 따름</li><li>AI모델 적용한 의학 프로그램 소개 및 회사의 비전 요약</li><li>회사들의 의학 데모프로그램 직접 체험</li><li>Google Colab 환경으로 간단한 의학 AI 생성 및 결과 도출</li></ul></fieldset>',40),jt=[Zt];function Wt(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",null,jt)}var Ht={name:"DeepLearning"};const Lt=(0,v.Z)(Ht,[["render",Wt]]);var Tt=Lt;const Et=(0,e.uE)('<h1 data-v-e72f082a>MSTC</h1><fieldset data-v-e72f082a><legend data-v-e72f082a>MSTC 개요</legend><ul data-v-e72f082a><li data-v-e72f082a> 개요 </li><p class="career_p" data-v-e72f082a> (주)엠에스티씨는 현대모비스 연구개발본부의 협력사로서 자동차 AVN, AUDIO 소프트웨어 검증 및 평가, 개발 지원을 주 사업으로 하고있습니다. AVN시스템 소프트웨어의 안정성과 신뢰성 확보를 위한 소프트웨어 검증뿐만 아니라 차종 개발 소프트웨어 설계를 동시에 수행할 수 있는 우수한 경쟁력을 확보하고 있는 기업입니다. </p><li data-v-e72f082a> Software </li><p class="career_p" data-v-e72f082a> 차종 개발 소프트웨어 설계와 AVN시스팀 검증/평가를 통해 높은 품질과 완성도 높은 차량 생산에 일조하고 있습니다. IT 및 소프트웨어 전장 장비 확대로 실시간 네비게이션, 원격 차량 제어 및 관리뿐만 아니라 미디어 스트리밍의 영역까지 다루고 있습니다. </p><li data-v-e72f082a>Testing</li><p class="career_p" data-v-e72f082a> QA Quality Assurance 개발 과정에서의 QA는 개발 마무리 단계에서 필수로 진행해야 하는 업무입니다. 품질 관리를 통해 이슈 Bug 예방을 목표로 합니다. 소프트웨어 품질 보증 및 효과적인 SQA 구현을 위해 지속적으로 노력합니다. - QA 전략 수립 및 단계별 진행 상황 관리 / 품질 기준 수립- 서비스 기획 단계부터 양산에 걸친 품질 관리 활동 수행- 자기주도적 경험 기반 검증 수행- 신규 OS 출시, 신규 디바이스 출시, 정책 변경 등 외부 플랫폼 변경 사항 대응- 이슈 대응 및 관리 </p></ul></fieldset><br data-v-e72f082a><br data-v-e72f082a><fieldset data-v-e72f082a><legend data-v-e72f082a>인턴십</legend><ul data-v-e72f082a><li data-v-e72f082a>정업검증팀 소속 인트라넷 보안 교육</li><li data-v-e72f082a>내비게이션 Dummy H/U 설치 및 소켓 결합의 이해</li><li data-v-e72f082a>READY MODE, ACC MODE, ON MODE, START MODE 로직 이해</li><li data-v-e72f082a>Top level Test case 검증 방법</li><li data-v-e72f082a>향지에 따른 내비게이션 버전 설정</li></ul></fieldset><br data-v-e72f082a><br data-v-e72f082a><br data-v-e72f082a><br data-v-e72f082a><br data-v-e72f082a><br data-v-e72f082a>',11),Qt=[Et];function Pt(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",null,Qt)}var Vt={name:"Mstc"};const Ft=(0,v.Z)(Vt,[["render",Pt],["__scopeId","data-v-e72f082a"]]);var Kt=Ft;const Nt=l=>((0,e.dD)("data-v-0f24c430"),l=l(),(0,e.Cn)(),l),zt=Nt((()=>(0,e._)("h1",null,"우아한 테크 코스",-1))),Yt=Nt((()=>(0,e._)("h3",null,"풀스택 프로그램",-1))),Rt=["src"],Bt=Nt((()=>(0,e._)("br",null,null,-1))),Jt=Nt((()=>(0,e._)("br",null,null,-1))),qt=Nt((()=>(0,e._)("br",null,null,-1))),Xt=Nt((()=>(0,e._)("br",null,null,-1))),$t=Nt((()=>(0,e._)("br",null,null,-1))),lr=Nt((()=>(0,e._)("fieldset",null,[(0,e._)("legend",null,"테크 코스 개요"),(0,e._)("ol",null,[(0,e._)("li",null,"프로그래밍 기본, 자바 및 코드 개선 교육"),(0,e._)("li",null,"스프링 프레임워크 기반 웹 프로그래밍 및 DB설계"),(0,e._)("li",null,"프로세스 기반 협업 팀 프로젝트. 기획, 구현, 배포"),(0,e._)("li",null,"대용량 서비스 데이터 처리 및 아키텍처 설계"),(0,e._)("li",null,"취업 및 진로 준비. 개발자 레벨에 따라 진로 정하기")])],-1)));function nr(l,n,r,a,i,d){return(0,e.wg)(),(0,e.iD)("div",null,[zt,Yt,(0,e._)("img",{class:"wooimages",src:t(8972),alt:"woo1"},null,8,Rt),(0,e.Uk)("  "),Bt,Jt,qt,Xt,$t,lr])}var tr={name:"Wooa"};const rr=(0,v.Z)(tr,[["render",nr],["__scopeId","data-v-0f24c430"]]);var er=rr,ar={props:{userInfo:Object},data(){return{index:0}},methods:{contentChange(l){this.index=l}},computed:{careers(){return[{tab:"DeepLearning",component:Tt},{tab:"Mstc",component:Kt},{tab:"Wooa",component:er}]},currentComponent(){return this.careers[this.index].component}}};const ir=(0,v.Z)(ar,[["render",xt],["__scopeId","data-v-69e038d8"]]);var dr=ir;const ur=l=>((0,e.dD)("data-v-c50c6e82"),l=l(),(0,e.Cn)(),l),or=["onClick"],sr=ur((()=>(0,e._)("br",null,null,-1))),cr=ur((()=>(0,e._)("br",null,null,-1)));function _r(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.intros,((l,n)=>((0,e.wg)(),(0,e.iD)("button",{key:n,onClick:l=>i.contentChange(n)},(0,U.zw)(l.tab),9,or)))),128)),sr,cr,((0,e.wg)(),(0,e.j4)((0,e.LL)(i.currentComponent),{userInfo:t.userInfo},null,8,["userInfo"]))])}var pr=t.p+"img/id_photo.d065e003.png";const fr=l=>((0,e.dD)("data-v-1b93e996"),l=l(),(0,e.Cn)(),l),gr={id:"resume"},br=fr((()=>(0,e._)("span",{class:"resume_span"},"1.기초 자료",-1))),vr=fr((()=>(0,e._)("table",null,[(0,e._)("tr",null,[(0,e._)("td",{rowspan:"6",id:"id_photo_td"},[(0,e._)("img",{class:"id_photo",src:pr,alt:"woo1"})]),(0,e._)("td",{"background-color":"lightGray"},"성 명"),(0,e._)("td",null,"황인찬"),(0,e._)("td",{"background-color":"lightGray"},"한 문"),(0,e._)("td",null,"黃仁贊")]),(0,e._)("tr",null,[(0,e._)("td",{"background-color":"lightGray"},"주민등록번호"),(0,e._)("td",{colspan:"3"},"970310-1080000")]),(0,e._)("tr",null,[(0,e._)("td",{"background-color":"lightGray"},"E-mail"),(0,e._)("td",{colspan:"3"},"klklgooa@naver.com")]),(0,e._)("tr",null,[(0,e._)("td",{"background-color":"lightGray"},"전화번호"),(0,e._)("td",null,"02-404-0000"),(0,e._)("td",{"background-color":"lightGray"},"휴대폰"),(0,e._)("td",null,"010-5413-0707")]),(0,e._)("tr",null,[(0,e._)("td",{"background-color":"lightGray"},"우편번호"),(0,e._)("td",null,"324234"),(0,e._)("td",{"background-color":"lightGray"},"비상연락처"),(0,e._)("td",null,"112")]),(0,e._)("tr",null,[(0,e._)("td",{"background-color":"lightGray"},"주소"),(0,e._)("td",{colspan:"3"},"서울시 송파구 송파대로345")])],-1))),mr=fr((()=>(0,e._)("br",null,null,-1))),hr=fr((()=>(0,e._)("span",{class:"resume_span"},"2.학력사항",-1))),yr=fr((()=>(0,e._)("table",null,[(0,e._)("tr",null,[(0,e._)("th",{"background-color":"lightGray"},"기간"),(0,e._)("th",{"background-color":"lightGray"},"상세내용"),(0,e._)("th",{"background-color":"lightGray"},"비고")]),(0,e._)("tr",null,[(0,e._)("td",null,"2004.03.02~2010.02.24"),(0,e.Uk)(),(0,e._)("td",null,"잠실초등학교"),(0,e.Uk)(),(0,e._)("td",null,"졸업")]),(0,e._)("tr",null,[(0,e._)("td",null,"2010.03.02~2013.02.24"),(0,e.Uk)(),(0,e._)("td",null,"잠실중학교"),(0,e.Uk)(),(0,e._)("td",null,"졸업")]),(0,e._)("tr",null,[(0,e._)("td",null,"2013.03.02~2016.02.24"),(0,e.Uk)(),(0,e._)("td",null,"잠실고등학교"),(0,e.Uk)(),(0,e._)("td",null,"졸업")]),(0,e._)("tr",null,[(0,e._)("td",null,"2021.03.02~"),(0,e.Uk)(),(0,e._)("td",null,"가천대학교"),(0,e.Uk)(),(0,e._)("td",null,"재학")])],-1))),kr=fr((()=>(0,e._)("br",null,null,-1))),wr=fr((()=>(0,e._)("span",{class:"resume_span"},"3. 경력사항",-1))),Dr=fr((()=>(0,e._)("table",null,[(0,e._)("tr",null,[(0,e._)("th",{"background-color":"lightGray"},"기간"),(0,e._)("th",{"background-color":"lightGray"},"회사")]),(0,e._)("tr",null,[(0,e._)("td",null,"2022.06.24~2022.07.24"),(0,e.Uk)(),(0,e._)("td",null,"MSTC")]),(0,e._)("tr",null,[(0,e._)("td",null,"~"),(0,e.Uk)(),(0,e._)("td")]),(0,e._)("tr",null,[(0,e._)("td",null,"~"),(0,e.Uk)(),(0,e._)("td")]),(0,e._)("tr",null,[(0,e._)("td",null,"~"),(0,e.Uk)(),(0,e._)("td")])],-1))),Cr=fr((()=>(0,e._)("br",null,null,-1))),Ir=fr((()=>(0,e._)("span",{class:"resume_span"},"4. 개인능력 및 장단점",-1))),xr=fr((()=>(0,e._)("table",null,[(0,e._)("tr",{height:"30"},[(0,e._)("td",{rowspan:"4","background-color":"lightGray"},"자격증 및 포상"),(0,e._)("td",{colspan:"3"},"정보처리기사"),(0,e._)("td",{colspan:"1"},"한국산업인력공단")]),(0,e._)("tr",{height:"30"},[(0,e._)("td",{colspan:"3"},"운전면허증"),(0,e._)("td",{colspan:"1"},"서울시경찰청")]),(0,e._)("tr",{height:"30"},[(0,e._)("td",{colspan:"3"},"네트워크관리사2급"),(0,e._)("td",{colspan:"1"},"한국정보통신자격협회")]),(0,e._)("tr",{height:"30"},[(0,e._)("td",{colspan:"3"},"SQL Developer"),(0,e._)("td",{colspan:"1"},"데이터자격검정")]),(0,e._)("tr",{height:"30"},[(0,e._)("td",{rowspan:"3","background-color":"lightGray"},"컴퓨터능력"),(0,e._)("td",{colspan:"2"},"JAVA"),(0,e._)("td",{"background-color":"lightGray"},"상/중/하"),(0,e._)("td",null,"상")]),(0,e._)("tr",{height:"30"},[(0,e._)("td",{colspan:"2"},"Spring"),(0,e._)("td",{"background-color":"lightGray"},"상/중/하"),(0,e._)("td",null,"상")]),(0,e._)("tr",{height:"30"},[(0,e._)("td",{colspan:"2"},"React"),(0,e._)("td",{"background-color":"lightGray"},"상/중/하"),(0,e._)("td",null,"상")]),(0,e._)("tr",{height:"30"},[(0,e._)("td",{rowspan:"2","background-color":"lightGray"},"취미"),(0,e._)("td",{colspan:"2"},"낚시"),(0,e._)("td",{"background-color":"lightGray"},"특기"),(0,e._)("td",null,"글짓기")])],-1))),Mr=fr((()=>(0,e._)("div",{id:"pledge"},[(0,e._)("br"),(0,e.Uk)("위의 사실이 틀림이 없음을 서약합니다."),(0,e._)("br"),(0,e.Uk)(" 작성일 2023년 10월 25일"),(0,e._)("br"),(0,e.Uk)(" 작성자 (인) ")],-1))),Ar=[br,vr,mr,hr,yr,kr,wr,Dr,Cr,Ir,xr,Mr];function Gr(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",gr,Ar)}var Ur={name:"Resume"};const Sr=(0,v.Z)(Ur,[["render",Gr],["__scopeId","data-v-1b93e996"]]);var Or=Sr;const Zr={id:"selfIntro"},jr=(0,e.uE)('<div class="division" data-v-10dbf176><h1 data-v-10dbf176>자기 소개서</h1><p data-v-10dbf176>   어릴 적부터 잘 따르던 형이 컴퓨터에 관심을 가지고 컴퓨터공학과에 진학하는 모습을 봐 왔습니다. 소프트웨어 개발에 흥미를 갖게 된 계기는 형의 졸업 작품을 접하고 그 시스템에 재미를 느끼면서부터였습니다. 아두이노를 활용한 지문 인식 보안 장치였는데 당시 대학 전공을 선택하지 못했던 상황에서 소프트웨어에 대해 상당한 매력을 느끼게 되었습니다. 그 후 컴퓨터소프트웨어 전공으로 진로를 정하여 소프트웨어 개발자를 목표로 지식을 쌓아 왔습니다. 하지만 대학교 1학년 재학 기간 동안 진로에 대해 잠시 방황하던 시기가 있었습니다. 소프트웨어 개발에 뛰어들기 위해 배워야 할 분야는 넓었고 전공 지식을 습득하는 과정도 힘겨웠습니다. 그 후 군 입대를 하고 진로와 인생에 대한 생각을 소프트웨어 개발직에 종사하는 동기와 공유하며 소프트웨어에 대한 비전과 논리적 사고에 자신 있던 저를 발견하였습니다. 전역 후에는 소홀했던 성적 관리에 대해 꼼꼼하고 성실히 임하여 좋은 성적을 받을 수 있게 되었습니다. </p></div><br data-v-10dbf176><br data-v-10dbf176><br data-v-10dbf176><br data-v-10dbf176><div class="division" data-v-10dbf176><h1 data-v-10dbf176>장점 및 특기사항</h1><p data-v-10dbf176>   일의 완성도를 높이기 위해서는 몰입과 책임감이 중요하다고 생각합니다. <br data-v-10dbf176> 저는 관심이 적거나 수동적으로 맡은 업무라도 해결하는 과정에서 작은 성취를 느끼며 자연스럽게 몰입하는 특성이 있습니다. 그리고 프로젝트팀장을 맡아 책임감의 중요성을 느낀 경험이 있었습니다. 프로젝트 주제를 선정하고 개발 분야를 나눠 본격적인 개발이 시작되었지만 한 명의 팀원이 갑작스럽게 프로젝트에서 빠지게 되었습니다. 팀이 해체될 위기에 처해있었지만 앞서 개발 주제 선정에 저의 의견을 믿고 동의해 준 팀원들에게 고마움을 느꼈었습니다. 고마움은 프로젝트와 팀원들에 대한 책임감으로 전환되어 다시 팀을 이끌어가야 한다는 의지를 만들어 냈습니다. 그 후 적극 팀원들을 설득하여 다시 효율적으로 분야를 나눠 개발에 착수하고 완만하게 프로젝트를 마치게 되었습니다. </p></div><br data-v-10dbf176><br data-v-10dbf176><br data-v-10dbf176><br data-v-10dbf176><div class="division" data-v-10dbf176><h1 data-v-10dbf176>특기</h1><p data-v-10dbf176>   자동차 SW에 대한 QA 및 테스트 업무는 꼼꼼함과 책임감이 중요하다고 생각합니다.<br data-v-10dbf176> 자동차 소프트웨어는 운전자에게 자동차 제어에 대한 편의를 제공해 줄 뿐만 아니라 최적의 내비게이션 경로 설정으로 시간적인 효율을 가져다줍니다. 이러한 점에서 소프트웨어의 정교함과 오류를 방지하는 테스트가 사용자의 편의에 직결된다고 생각합니다. 저는 1년 6개월 동안 고깃집 계산업무와 서빙을 맡은 아르바이트 경험이 있습니다. 일 처리가 빠르지는 않았지만 완벽함을 추구하고 꼼꼼함을 지향하기 때문에 기기의 입력 실수를 한 적이 없었습니다. 그리고 고객들의 클레임 해결에도 적극 나서서 책임감을 인정받아 보너스를 받은 경험도 있었습니다. 결과적으로 저의 특성과 성격이 QA 및 테스트 업무에 대해 특화되어 있다고 생각하고 입사하게 된다면 저의 장점들이 MSTC에 도움이 될 것으로 생각합니다. </p></div><br data-v-10dbf176><br data-v-10dbf176><br data-v-10dbf176>',14),Wr=[jr];function Hr(l,n,t,r,a,i){return(0,e.wg)(),(0,e.iD)("div",Zr,Wr)}var Lr={name:"SelfIntro"};const Tr=(0,v.Z)(Lr,[["render",Hr],["__scopeId","data-v-10dbf176"]]);var Er=Tr,Qr={props:{userInfo:Object},data(){return{index:0}},methods:{contentChange(l){this.index=l}},computed:{intros(){return[{tab:"이력서",component:Or},{tab:"자기소개서",component:Er}]},currentComponent(){return this.intros[this.index].component}}};const Pr=(0,v.Z)(Qr,[["render",_r],["__scopeId","data-v-c50c6e82"]]);var Vr=Pr;const Fr=[{path:"/",component:ul},{path:"/project",component:pn},{path:"/vision",component:Dt},{path:"/career",component:dr},{path:"/introduction",component:Vr,meta:{requiresAuth:!0}}],Kr=(0,z.p7)({history:(0,z.PO)(),routes:Fr});var Nr=Kr;const zr=(0,r.ri)(N);zr.use(Nr).mount("#app")},3783:function(l,n,t){l.exports=t.p+"img/hdiary_1.24b6626c.png"},2742:function(l,n,t){l.exports=t.p+"img/hdiary_2.ef30593e.png"},1542:function(l,n,t){l.exports=t.p+"img/hdiary_3.d22d1b94.png"},7875:function(l,n,t){l.exports=t.p+"img/hdiary_4.900db038.png"},8076:function(l,n,t){l.exports=t.p+"img/hdiary_5.898e46f5.png"},5771:function(l,n,t){l.exports=t.p+"img/hdiary_6.6188d1b4.png"},3245:function(l,n,t){l.exports=t.p+"img/hdiary_7.0a4c88a4.png"},6202:function(l,n,t){l.exports=t.p+"img/index_face.1c290f18.png"},7273:function(l,n,t){l.exports=t.p+"img/keyard_1.e58bd252.png"},8109:function(l,n,t){l.exports=t.p+"img/keyard_2.5bce768d.png"},2107:function(l,n,t){l.exports=t.p+"img/witty2.4efbabc3.png"},7729:function(l,n,t){l.exports=t.p+"img/witty3.cd686232.png"},8972:function(l,n,t){l.exports=t.p+"img/woo1.b241fdae.png"}},n={};function t(r){var e=n[r];if(void 0!==e)return e.exports;var a=n[r]={exports:{}};return l[r].call(a.exports,a,a.exports,t),a.exports}t.m=l,function(){var l=[];t.O=function(n,r,e,a){if(!r){var i=1/0;for(s=0;s<l.length;s++){r=l[s][0],e=l[s][1],a=l[s][2];for(var d=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(l){return t.O[l](r[u])}))?r.splice(u--,1):(d=!1,a<i&&(i=a));if(d){l.splice(s--,1);var o=e();void 0!==o&&(n=o)}}return n}a=a||0;for(var s=l.length;s>0&&l[s-1][2]>a;s--)l[s]=l[s-1];l[s]=[r,e,a]}}(),function(){t.n=function(l){var n=l&&l.__esModule?function(){return l["default"]}:function(){return l};return t.d(n,{a:n}),n}}(),function(){t.d=function(l,n){for(var r in n)t.o(n,r)&&!t.o(l,r)&&Object.defineProperty(l,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(l){if("object"===typeof window)return window}}()}(),function(){t.o=function(l,n){return Object.prototype.hasOwnProperty.call(l,n)}}(),function(){t.p="https://klklgooa.github.io/MyPortfolio_vue/"}(),function(){var l={143:0};t.O.j=function(n){return 0===l[n]};var n=function(n,r){var e,a,i=r[0],d=r[1],u=r[2],o=0;if(i.some((function(n){return 0!==l[n]}))){for(e in d)t.o(d,e)&&(t.m[e]=d[e]);if(u)var s=u(t)}for(n&&n(r);o<i.length;o++)a=i[o],t.o(l,a)&&l[a]&&l[a][0](),l[a]=0;return t.O(s)},r=self["webpackChunkmidterm_vue"]=self["webpackChunkmidterm_vue"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7997)}));r=t.O(r)})();
//# sourceMappingURL=app.c1f9e470.js.map