(this.webpackJsonpisense=this.webpackJsonpisense||[]).push([[0],{38:function(e,a,t){e.exports=t.p+"static/media/login.fef9453a.gif"},41:function(e,a,t){e.exports=t.p+"static/media/gif1.cec4d8e7.gif"},42:function(e,a,t){e.exports=t.p+"static/media/logo.6224ca36.png"},43:function(e,a,t){e.exports=t.p+"static/media/spotify.b1644e5d.png"},44:function(e,a,t){e.exports=t.p+"static/media/video.52820f2b.mp4"},46:function(e,a,t){e.exports=t.p+"static/media/audio.861d4bdd.mp3"},51:function(e,a,t){e.exports=t(82)},59:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),s=t(17),c=(t(59),t(45)),i=t(3),u=t(38),m=t.n(u),p=function(){var e=Object(i.e)();return r.a.createElement("footer",{className:"col-12 text-center"},r.a.createElement("div",{className:"footer-div mb-3"},r.a.createElement("span",null,"a falta de presen\xe7a n\xe3o ser\xe1 suprida. e essa falta nos faz lembrar o que somos: somos feitos uns dos outros.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("span",null,"um convite bem incomum mas com bastante carinho de"," ",r.a.createElement("span",{onClick:function(){return e.push("/iSense/list")}},"roger")," para voc\xea. :)"),r.a.createElement("div",null,r.a.createElement("img",{src:m.a,className:"img-fluid gif-2"}))))},d=t(12),f=t.n(d),E=t(15),v=t(13),b=t(39),g=t.n(b).a.create({baseURL:"https://eduardo-chaves.outsystemscloud.com/ApiCenter/rest/Cadastrados"}),h=t(40),x=t(21),N=t(22),k=function e(){var a=this;Object(h.a)(this,e),this.showMessage=function(e){a.snack.enqueueSnackbar(e,{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"left"},action:r.a.createElement("button",{className:"btn",onClick:function(){return a.snack.closeSnackbar()}},r.a.createElement(x.a,{color:"#fff",icon:N.b}))})},this.snack={closeSnackbar:Object(s.b)().closeSnackbar,enqueueSnackbar:Object(s.b)().enqueueSnackbar}},w=function(){var e=(new k).showMessage,a=r.a.useState(""),t=Object(v.a)(a,2),n=t[0],o=t[1],l=r.a.useState(""),s=Object(v.a)(l,2),c=s[0],i=s[1],u=r.a.useState(""),m=Object(v.a)(u,2),p=m[0],d=m[1],b=r.a.useState(""),h=Object(v.a)(b,2),x=h[0],N=h[1],w=r.a.useState(""),y=Object(v.a)(w,2),S=y[0],O=y[1];function q(){return(q=Object(E.a)(f.a.mark((function a(t){var r,l;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),a.prev=1,n&&c&&p&&x&&S){a.next=5;break}return e("por favor, preencha todos os campos..."),a.abrupt("return");case 5:return r={name:n,address:c,brownieOrPudding:p,userInstagram:x,telephoneNumber:S},a.next=8,g.post("/NovoCadastro",r);case 8:if(l=a.sent,200===l.status){a.next=13;break}return e("n\xe3o foi poss\xedvel cadastrar..."),a.abrupt("return");case 13:o(""),i(""),d(""),N(""),O(""),e("sua escolha foi registrada. valeu!"),a.next=25;break;case 21:a.prev=21,a.t0=a.catch(1),console.error(a.t0),e("falha na requisi\xe7\xe3o!");case 25:case"end":return a.stop()}}),a,null,[[1,21]])})))).apply(this,arguments)}return r.a.createElement("form",{onSubmit:function(e){return q.apply(this,arguments)},className:"form text-md-right"},r.a.createElement("div",null,r.a.createElement("span",null,"nome::::::::"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("span",null,"endere\xe7o::::::::"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("span",null,"brownie ou pudim::::::::"),r.a.createElement("input",{type:"text",value:p,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("span",null,"user intagram::::::::"),r.a.createElement("input",{type:"text",value:x,onChange:function(e){return N(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("span",null,"telefone celular::::::::"),r.a.createElement("input",{type:"text",value:S,onChange:function(e){return O(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"button-submit mt-2"},r.a.createElement("span",{className:"text-button"},"{enviar}")))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"what"},"como funciona?"),r.a.createElement("ul",{className:"list mt-4"},r.a.createElement("li",null,"1. voc\xea precisa ser convidado por um de nossos colaboradores partindo disso podemos ir para segunda instru\xe7\xe3o."),r.a.createElement("li",null,"2. iSense uma experi\xeancia completamente on-line em reflexo das recomenda\xe7\xf5es sanit\xe1rias do minist\xe9rio da sa\xfade para todo o pa\xeds."),r.a.createElement("li",null,"3. bolos de anivers\xe1rio s\xe3o uma del\xedcia, n\xe3o \xe9 mesmo? nosso servi\xe7o conta com uma entrega domiciliar de um kit experience. no kit voc\xea recebra um pote de brownie ou pudim (voc\xea pode escolher) \xe9 uma velinha. para voc\xea aproveitar ainda mais sua experi\xeancia durante nosso encontro on-line.",r.a.createElement("ul",{className:"sub-list"},r.a.createElement("li",null,"- como acontecera as entregas?"),r.a.createElement("li",null,"\u2022 as entregas come\xe7aram ao s\xe1bado ( dia 30 ) apartir das 08:00 para termos certeza que todos iram receber a tempo o seu kit."),r.a.createElement("li",null,"\u2022 nosso colaborador estar\xe1 devidamente precavido com roupas especiais e sem nenhum contato interpessoal e nenhum contato com os transportes p\xfablicos durante o trajeto."))),r.a.createElement("li",null,"4. apos receber seu kit n\xe3o coma! espere at\xe9 nosso encontro que ir\xe1 acontecer via plataforma Google Hangouts \xe1s 23:50.",r.a.createElement("ul",{className:"sub-list"},r.a.createElement("li",null,"- Google Hangouts oque \xe9?",r.a.createElement("br",null),"uma plataforma de chamada de video do google, como o skype, zoom..."),r.a.createElement("li",null,"\u2022 voc\xea pode baixar o app do Hangouts no seu celular ou entrar pelo notebook ou desktop"),r.a.createElement("li",null,"\u2022 o link da chamada de v\xeddeo ser\xe1 enviado pelo WhatsApp minutos antes do nosso encontro acontecer ( \xe1s 23:45 )"))),r.a.createElement("li",{className:"last"},"5. ufa, agora j\xe1 sabemos oque \xe9 o iSense e como ele fuciona. nosso colaborador s\xf3 precisa de alguns dados para realizar a entrega do seu kit experience. vamos l\xe1?",r.a.createElement("br",null),"ps: * preencher at\xe9 sexta ( dia 29 ) \xe0s 17h para nosso colaborador organizar o itiner\xe1rio *")))},S=t(41),O=t.n(S),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-12 text-center explanation"},r.a.createElement("div",null,r.a.createElement("span",null,"iSense e um servi\xe7o que atende as novas defici\xeancias de uma sociedade em quarentena. uma experi\xeancia audiovisual parcialmente virtual simulada em um futuro dist\xf3pico. iSense \xe9 um servi\xe7o que proporciona uma experi\xeancia de festa totalmente on-line para o cliente visando a sa\xfade e as recomenda\xe7\xf5es sanit\xe1rias do minist\xe9rio da sa\xfade como prioridade em reflexo ao isolamento social."))),r.a.createElement("div",{className:"col-12 text-center mt-3 gif1-container"},r.a.createElement("img",{src:O.a,className:"img-fluid gif1"})))},j=t(42),C=t.n(j),z=t(43),H=t.n(z),I=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row mt-5 row-container"},r.a.createElement("div",{className:"col-lg-7 col-md-6 text-center text-md-right"},r.a.createElement("img",{src:C.a,alt:"iSense",className:"img-fluid logotipo"})),r.a.createElement("div",{className:"col-lg-5 col-md-6 mt-4 title-container"},r.a.createElement("span",{className:"title"},"uma playlist minha feita para voc\xea::::: ouve a\xed, \xe9 s\xf3 clicar"),r.a.createElement("a",{href:"https://open.spotify.com/playlist/630vKXlmE4hOlREeHuQ4b3?si=621Q_tZHQxSDipI94CGEgw",rel:"noreferrer"},r.a.createElement("img",{src:H.a,alt:"Spotify",className:"img-fluid spotify"})))))},D=t(44),G=t.n(D),A=function(){return r.a.createElement("div",{className:"row row-video-container"},r.a.createElement("section",{className:"col-md-6"},r.a.createElement("video",{className:"img-fluid video",controls:!0,autoPlay:!0},r.a.createElement("source",{src:G.a,type:"video/mp4"}))),r.a.createElement("section",{className:"col-md-6 mt-3 mt-md-0"},r.a.createElement("div",{className:"intro"},r.a.createElement("span",null,"todos n\xf3s fomos pegos de surpresa.",r.a.createElement("br",null),"uma quarentena s\xfabita e emergencial",r.a.createElement("br",null),"nos afastou daquilo que mal sab\xedamos",r.a.createElement("br",null),"que sentir\xedamos falta.",r.a.createElement("br",null),r.a.createElement("br",null),"n\xe3o houve tempo para juntarmos reservas,",r.a.createElement("br",null),"registrarmos lembran\xe7as ou darmos",r.a.createElement("br",null),"abra\xe7os de despedidas."))))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement("div",{className:"container"},r.a.createElement(A,null),r.a.createElement(q,null),r.a.createElement("div",{className:"col-12 p-md-5"},r.a.createElement(y,null),r.a.createElement(w,null)),r.a.createElement(p,null)))},M=t(48),P=function(){var e=r.a.useState([]),a=Object(v.a)(e,2),t=a[0],n=a[1],o=(new k).showMessage;function l(){return s.apply(this,arguments)}function s(){return(s=Object(E.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("/GetCadastrados");case 3:if(200===(a=e.sent).status){e.next=7;break}return o("falha ao buscar a lista de usu\xe1rios!"),e.abrupt("return");case 7:n(Object(M.a)(a.data)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),o("falha na requisi\xe7\xe3o!");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function c(){return(c=Object(E.a)(f.a.mark((function e(a){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.id,e.prev=1,e.next=4,g.delete("/RemoveCadastroById?IdCadastro=".concat(t));case 4:if(200===e.sent.status){e.next=8;break}return o("n\xe3o foi poss\xedvel excluir..."),e.abrupt("return");case 8:o("item excluido com sucesso!"),l(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),o("falha na requisi\xe7\xe3o...");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function i(e){var a=e.data;return r.a.createElement("div",{className:"col-lg-4 col-md-6"},r.a.createElement("div",{className:"list-item"},r.a.createElement("span",null,"nome:::"),r.a.createElement("p",null,a.name),r.a.createElement("span",null,"endere\xe7o::::"),r.a.createElement("p",null,a.address),r.a.createElement("span",null,"brownie ou pudim:::::::"),r.a.createElement("p",null,a.brownieOrPudding),r.a.createElement("span",null,"user instagram::::"),r.a.createElement("p",null,a.userInstagram),r.a.createElement("span",null,"telefone celular:::::"),r.a.createElement("p",null,a.telephoneNumber),r.a.createElement(x.a,{icon:N.a,className:"trash",onClick:function(){return function(e){return c.apply(this,arguments)}(a)}})))}return r.a.useEffect((function(){l()}),[]),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row p-2"},t.map((function(e,a){return r.a.createElement(i,{key:a,data:e})}))))},Q=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{exact:!0,path:"/iSense",component:F}),r.a.createElement(i.a,{path:"/iSense/list",component:P}))},R=t(46);new Audio(t.n(R).a).autoplay=!0;var B=function(){return r.a.createElement(s.a,{maxSnack:2,autoHideDuration:2e3,dense:!1,preventDuplicate:!0,anchorOrigin:{vertical:"center",horizontal:"center"}},r.a.createElement(Q,null))},J=t(47);t.n(J).a.config(),l.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.038b6f39.chunk.js.map