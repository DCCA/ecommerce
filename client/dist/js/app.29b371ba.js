(function(t){function e(e){for(var s,n,c=e[0],l=e[1],o=e[2],d=0,p=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var l=a[c];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0221":function(t,e,a){},"0239":function(t,e,a){t.exports=a.p+"img/visa.8a0e88ff.svg"},"094d":function(t,e,a){},"09fa":function(t,e,a){t.exports=a.p+"img/amex.4aba993a.svg"},"16f6":function(t,e,a){},2112:function(t,e,a){t.exports=a.p+"img/mastercard.d6e96067.svg"},"22a7":function(t,e,a){t.exports=a.p+"img/arrowdown.b90bd4ab.svg"},"2f5d":function(t,e,a){"use strict";var s=a("4b4a"),i=a.n(s);i.a},3309:function(t,e,a){"use strict";var s=a("34d6"),i=a.n(s);i.a},"34d6":function(t,e,a){},"37ba":function(t,e,a){"use strict";var s=a("81ee"),i=a.n(s);i.a},"3b36":function(t,e,a){t.exports=a.p+"img/diners-club.1d6f1386.svg"},"3bfb":function(t,e,a){},"3ed8":function(t,e,a){},"3ef5":function(t,e,a){"use strict";var s=a("8cdb"),i=a.n(s);i.a},"46fd":function(t,e,a){},"48d2":function(t,e,a){"use strict";var s=a("3ed8"),i=a.n(s);i.a},"4b4a":function(t,e,a){},"51f2":function(t,e,a){t.exports=a.p+"img/search.b8ea9df2.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("router-view",{staticClass:"content"}),a("app-footer")],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header",class:{"is-home":t.isHome}},[s("div",{staticClass:"header__mobile-container",on:{click:function(e){return e.preventDefault(),t.openMenu(e)}}},[s("img",{staticClass:"header__menu-icon",attrs:{src:a("666f"),alt:"menu"}})]),s("div",{staticClass:"header__topnav",class:{active:t.menuIsActive}},[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),s("router-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1),s("h2",{staticClass:"header__logo"},[t._v("Orbital")]),t._m(0)])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header__left-icons"},[s("img",{staticClass:"header__search-icon",attrs:{src:a("51f2"),alt:"search"}}),s("img",{staticClass:"header__bicicle-icon",attrs:{src:a("7063"),alt:"cart"}})])}],l={data:function(){return{menuIsActive:!1}},computed:{isHome:function(){return"/"===this.$route.path}},methods:{openMenu:function(){return console.log("click"),this.menuIsActive=!this.menuIsActive}}},o=l,u=(a("a656"),a("2877")),d=Object(u["a"])(o,n,c,!1,null,"148c7f7b",null),p=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"footer__content-container"},[t._m(0),a("div",{staticClass:"footer__acordions-container"},[a("app-acordion-menu",{attrs:{title:"categorias",listItem:t.categoriasLinks}}),a("app-acordion-menu",{attrs:{title:"minha Conta",listItem:t.minhaAreaLinks}}),a("app-acordion-menu",{attrs:{title:"institucional",listItem:t.institucionalLinks}})],1),t._m(1),t._m(2)]),t._m(3)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"footer__social-list"},[a("li",[a("i",{staticClass:"fab fa-facebook-square"})]),a("li",[a("i",{staticClass:"fab fa-twitter"})]),a("li",[a("i",{staticClass:"fab fa-instagram"})]),a("li",[a("i",{staticClass:"fab fa-youtube"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer__info-containers"},[s("h3",{staticClass:"footer-titles"},[t._v("Formas de Pagamento")]),s("div",{staticClass:"footer__card-flags-container"},[s("img",{attrs:{src:a("0239"),alt:"visa"}}),s("img",{attrs:{src:a("3b36"),alt:"diners"}}),s("img",{attrs:{src:a("09fa"),alt:"amex"}}),s("img",{attrs:{src:a("8b36"),alt:"discover"}}),s("img",{attrs:{src:a("2112"),alt:"mastercard"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer__info-containers"},[s("h3",{staticClass:"footer-titles"},[t._v("Seguranca")]),s("img",{staticClass:"footer-icons",attrs:{src:a("dc36"),alt:"ebit"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer__copyright-container"},[a("p",[t._v("Orbital | 2018 - Todos os direitos reservados.")])])}],b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"acordions-title-container",on:{click:t.toggle}},[s("h3",[t._v(t._s(t.title))]),s("img",{attrs:{src:a("22a7"),alt:"arrow-down"}})]),s("ul",{staticClass:"acordion-list-links",class:{active:t.isActive}},t._l(t.listItem,(function(e,a){return s("li",{key:a},[t._v(" "+t._s(e.linkName)+" ")])})),0)])},_=[],v={data:function(){return{isActive:!1}},props:{title:{type:String,required:!0},listItem:{type:Array,required:!0}},methods:{toggle:function(){this.isActive=!this.isActive}}},g=v,h=(a("fb74"),Object(u["a"])(g,b,_,!1,null,"34c69917",null)),C=h.exports,k={data:function(){return{isActive:!1,categoriasLinks:[{linkName:"Capacetes"},{linkName:"Freios"},{linkName:"Rodas"},{linkName:"Pedais"},{linkName:"Sapatilhas"},{linkName:"Acessorios"}],minhaAreaLinks:[{linkName:"Meus Pedidos"},{linkName:"Minha Area"}],institucionalLinks:[{linkName:"Quem Somos"},{linkName:"Duvidas"},{linkName:"Termos"},{linkName:"Politica de Privacidade"}]}},methods:{toggle:function(){this.isActive=!this.isActive}},components:{appAcordionMenu:C}},y=k,w=(a("fcf3"),Object(u["a"])(y,m,f,!1,null,"e518a8a8",null)),x=w.exports,E={components:{appHeader:p,appFooter:x}},$=E,O=(a("5c0b"),Object(u["a"])($,i,r,!1,null,null,null)),j=O.exports,S=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("app-hero-image"),a("app-destaques"),a("app-categorias"),a("app-blog"),a("app-subscribe")],1)},T=[],A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-image__container",staticStyle:{"{backgroundImage":"}"}},[a("div",{staticClass:"hero-image__tagline-container"},[a("h1",[t._v(" a melhor "),a("br"),a("span",{staticClass:"bold"},[t._v(" performance pra "),a("br"),t._v("quem precisa ")])]),a("button",{staticClass:"btn-line"},[t._v("Ver Produtos")])])])}],P={},q=P,L=(a("48d2"),Object(u["a"])(q,A,N,!1,null,"7e7623b4",null)),I=L.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"destaques__container"},[t._m(0),a("div",{staticClass:"destaques__carouse-container"},[a("carousel",{attrs:{paginationEnabled:t.paginationEnabled,perPage:"1"}},t._l(t.cards,(function(t,e){return a("slide",{key:e},[a("app-destaques-card",{attrs:{title:t.title,publishDate:t.publishDate,price:t.price}})],1)})),1)],1),a("button",{staticClass:"btn-line"},[t._v("Ver Mais")])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v(" ultimos "),a("span",{staticClass:"bold"},[t._v("detaques")])])}],H=a("0a63"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("img",{staticClass:"card__images",attrs:{src:"https://keywordimg.com/260x260/random",alt:""}}),a("div",{staticClass:"card__details"},[a("h3",{staticClass:"title"},[t._v(t._s(t.title))]),a("p",{staticClass:"pub-date"},[t._v("Publicado: "+t._s(t.publishDate))]),a("p",{staticClass:"price"},[t._v("R$ "+t._s(t.price))])])])},V=[],B={props:{title:{type:String,required:!0},publishDate:{type:String,required:!0},price:{type:String,required:!0}}},J=B,R=(a("6627"),Object(u["a"])(J,F,V,!1,null,"13be67fe",null)),Q=R.exports,z={data:function(){return{paginationEnabled:!1,cards:[{title:"Title",publishDate:"20/20/2020",price:"32.900"},{title:"Title",publishDate:"20/20/2020",price:"32.900"},{title:"Title",publishDate:"20/20/2020",price:"32.900"},{title:"Title",publishDate:"20/20/2020",price:"32.900"},{title:"Title",publishDate:"20/20/2020",price:"32.900"}]}},components:{Carousel:H["Carousel"],Slide:H["Slide"],appDestaquesCard:Q}},G=z,K=(a("98e1"),Object(u["a"])(G,U,M,!1,null,"1837ff9c",null)),W=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categorias__container"},[t._m(0),a("div",{staticClass:"categorias__populares-grid"},t._l(t.categoriasCardList,(function(t,e){return a("app-categorias-card",{key:e,attrs:{cardData:t}})})),1),a("button",{staticClass:"btn-line"},[t._v("Ver Mais")])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v(" categorias "),a("span",{staticClass:"bold"},[t._v("populares")])])}],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categoria-card"},[a("img",{attrs:{src:t.cardData.imgUrl,alt:""}}),a("p",{staticClass:"categoria-card__title"},[t._v(t._s(t.cardData.title))])])},tt=[],et={props:{cardData:{type:Object,required:!0}}},at=et,st=(a("2f5d"),Object(u["a"])(at,Z,tt,!1,null,"99854ae4",null)),it=st.exports,rt={data:function(){return{categoriasCardList:[{title:"Title",imgUrl:"https://keywordimg.com/48x48/random"},{title:"Title",imgUrl:"https://keywordimg.com/48x48/random"},{title:"Title",imgUrl:"https://keywordimg.com/48x48/random"},{title:"Title",imgUrl:"https://keywordimg.com/48x48/random"},{title:"Title",imgUrl:"https://keywordimg.com/48x48/random"},{title:"Title",imgUrl:"https://keywordimg.com/48x48/random"}]}},components:{appCategoriasCard:it}},nt=rt,ct=(a("3309"),Object(u["a"])(nt,X,Y,!1,null,"147dbe9b",null)),lt=ct.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog__container"},[t._m(0),a("div",{staticClass:"blog__carousel-container"},[a("carousel",{attrs:{paginationEnabled:t.paginationEnabled,perPage:"1"}},t._l(t.blogCardsList,(function(t,e){return a("slide",{key:e},[a("app-blog-card",{attrs:{blogCardData:t}})],1)})),1)],1)])},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v(" blog "),a("span",{staticClass:"bold"},[t._v("saiba mais")])])}],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-card__container"},[a("div",{staticClass:"blog-card__image",style:{backgroundImage:"url(https://keywordimg.com/640x480/celebrate)"}}),a("div",{staticClass:"blog-card__details"},[a("h3",[t._v(t._s(t.blogCardData.title))]),a("a",{attrs:{href:t.blogCardData.imageUrl}},[t._v("+ ler materia completa")])])])},pt=[],mt={props:{blogCardData:{type:Object,required:!0}}},ft=mt,bt=(a("37ba"),Object(u["a"])(ft,dt,pt,!1,null,"8ba4057c",null)),_t=bt.exports,vt={data:function(){return{paginationEnabled:!1,blogCardsList:[{title:"NewTitle",imageUrl:"https://keywordimg.com/640x480/celebrate",link:"https://google.com"},{title:"NewTitle",imageUrl:"https://keywordimg.com/640x480/celebrate",link:"https://google.com"},{title:"NewTitle",imageUrl:"https://keywordimg.com/640x480/celebrate",link:"https://google.com"},{title:"NewTitle",imageUrl:"https://keywordimg.com/640x480/celebrate",link:"https://google.com"}]}},components:{Carousel:H["Carousel"],Slide:H["Slide"],appBlogCard:_t}},gt=vt,ht=(a("940e"),Object(u["a"])(gt,ot,ut,!1,null,"dc7e8c30",null)),Ct=ht.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subscribe__container"},[a("h2",[a("span",{staticClass:"bold"},[t._v("se inscreva e receba nossas novidades")])]),a("p",[t._v("Tudo sobre sua bike, eventos dicas e lancamentos")]),a("form",{staticClass:"subscribe__form"},[a("input",{attrs:{type:"text",name:"name",placeholder:"Name"}}),a("input",{attrs:{type:"text",name:"email",placeholder:"E-mail"}})]),a("button",{staticClass:"btn-line"},[t._v("Cadastrar")])])}],wt={},xt=wt,Et=(a("3ef5"),Object(u["a"])(xt,kt,yt,!1,null,"d0c14eb8",null)),$t=Et.exports,Ot={name:"Home",components:{appHeroImage:I,appDestaques:W,appCategorias:lt,appBlog:Ct,appSubscribe:$t}},jt=Ot,St=Object(u["a"])(jt,D,T,!1,null,null,null),Dt=St.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin__container"},[a("h1",[t._v("Admin")]),a("router-view"),a("router-link",{attrs:{to:{name:"Login"}}},[t._v("login")]),a("router-link",{attrs:{to:{name:"Signup"}}},[t._v("signup")])],1)},At=[],Nt={},Pt=Nt,qt=(a("b957"),Object(u["a"])(Pt,Tt,At,!1,null,"2701e112",null)),Lt=qt.exports,It=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Login")]),a("form",{staticClass:"pa4 black-80"},[a("div",{staticClass:"measure"},[a("label",{staticClass:"f6 b db mb2",attrs:{for:"email"}},[t._v("E-mail")]),a("input",{staticClass:"input-reset ba b--black-20 pa2 mb2 db w-100",attrs:{id:"email",type:"text","aria-describedby":"email-desc"}})]),a("div",{staticClass:"measure"},[a("label",{staticClass:"f6 b db mb2",attrs:{for:"password"}},[t._v("Password")]),a("input",{staticClass:"input-reset ba b--black-20 pa2 mb2 db w-100",attrs:{id:"password",type:"password","aria-describedby":"password-desc"}})]),a("div",{},[a("input",{staticClass:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",attrs:{type:"submit",value:"Log in"}})])])])}],Mt={},Ht=Mt,Ft=Object(u["a"])(Ht,It,Ut,!1,null,"9060f0b6",null),Vt=Ft.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Sign Up")]),a("form",{staticClass:"pa4 black-80"},[t._m(0),t._m(1),t._m(2),a("div",{},[a("input",{staticClass:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",attrs:{type:"submit",value:"Sign up"},on:{click:function(e){return e.preventDefault(),t.submitted(e)}}})])])])},Jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"measure"},[a("label",{staticClass:"f6 b db mb2",attrs:{for:"name"}},[t._v("Name")]),a("input",{staticClass:"input-reset ba b--black-20 pa2 mb2 db w-100",attrs:{id:"name",type:"text","aria-describedby":"name-desc"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"measure"},[a("label",{staticClass:"f6 b db mb2",attrs:{for:"email"}},[t._v("E-mail")]),a("input",{staticClass:"input-reset ba b--black-20 pa2 mb2 db w-100",attrs:{id:"email",type:"text","aria-describedby":"email-desc"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"measure"},[a("label",{staticClass:"f6 b db mb2",attrs:{for:"password"}},[t._v("Password")]),a("input",{staticClass:"input-reset ba b--black-20 pa2 mb2 db w-100",attrs:{id:"password",type:"password","aria-describedby":"password-desc"}})])}],Rt={methods:{submitted:function(){console.log("Clicked")}}},Qt=Rt,zt=Object(u["a"])(Qt,Bt,Jt,!1,null,"8584497c",null),Gt=zt.exports;s["a"].use(S["a"]);var Kt=[{path:"/",name:"Home",component:Dt},{path:"/admin",name:"Admin",component:Lt,children:[{path:"login",component:Vt,name:"Login"},{path:"sign-up",component:Gt,name:"Signup"}]}],Wt=new S["a"]({mode:"history",base:"/",routes:Kt}),Xt=Wt,Yt=a("2f62");s["a"].use(Yt["a"]);var Zt=new Yt["a"].Store({state:{isLoggedIn:!1},mutations:{},actions:{},modules:{}});a("da13");s["a"].config.productionTip=!1,new s["a"]({router:Xt,store:Zt,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},6627:function(t,e,a){"use strict";var s=a("3bfb"),i=a.n(s);i.a},"666f":function(t,e,a){t.exports=a.p+"img/hamburguer-menu.116b1565.svg"},7063:function(t,e,a){t.exports=a.p+"img/bicicle-icon.47c5fee9.svg"},"81ee":function(t,e,a){},"8b36":function(t,e,a){t.exports=a.p+"img/discover.40cb5746.svg"},"8cdb":function(t,e,a){},"940e":function(t,e,a){"use strict";var s=a("16f6"),i=a.n(s);i.a},"98e1":function(t,e,a){"use strict";var s=a("46fd"),i=a.n(s);i.a},"9c0c":function(t,e,a){},a656:function(t,e,a){"use strict";var s=a("0221"),i=a.n(s);i.a},b78c:function(t,e,a){},b957:function(t,e,a){"use strict";var s=a("b78c"),i=a.n(s);i.a},dc36:function(t,e,a){t.exports=a.p+"img/ebit.77d873f4.png"},fb74:function(t,e,a){"use strict";var s=a("fdc2"),i=a.n(s);i.a},fcf3:function(t,e,a){"use strict";var s=a("094d"),i=a.n(s);i.a},fdc2:function(t,e,a){}});
//# sourceMappingURL=app.29b371ba.js.map