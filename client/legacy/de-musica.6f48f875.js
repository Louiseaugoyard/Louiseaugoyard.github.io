import{_ as e,a as n,b as t,c as s,i as r,s as i,d as a,S as o,M as u,e as l,f as c,g as d,q as h,h as f,j as m,k as p,n as g,o as v,p as b,r as k,u as x,v as M,x as $,y,z as L,A as q,l as w,t as A,F as D,m as P,w as R,K as T,E as j}from"./client.a66f85ad.js";function E(e){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=n(e);if(s){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return t(this,r)}}function S(e,n,t){var s=e.slice();return s[2]=n[t],s[4]=t,s}function z(e){var n,t=e[2]+"";return{c:function(){n=l("p")},l:function(e){n=f(e,"P",{}),w(n).forEach(m)},m:function(e,s){k(e,n,s),n.innerHTML=t},p:function(e,s){1&s&&t!==(t=e[2]+"")&&(n.innerHTML=t)},d:function(e){e&&m(n)}}}function B(e){for(var n,t,s,r,i,a,o,u,d,h,g,x,M=e[1].title[e[0].language]+"",$=e[1].subtitle[e[0].language]+"",y=e[1].intro[e[0].language]+"",L=e[1].text[e[0].language],q=[],j=0;j<L.length;j+=1)q[j]=z(S(e,L,j));return{c:function(){n=l("img"),t=c(),s=l("h1"),r=A(M),i=c(),a=l("h2"),o=A($),u=c(),d=l("p"),h=A(y),g=c();for(var e=0;e<q.length;e+=1)q[e].c();x=D(),this.h()},l:function(e){n=f(e,"IMG",{src:!0,alt:!0,class:!0}),t=p(e),s=f(e,"H1",{id:!0,class:!0});var l=w(s);r=P(l,M),l.forEach(m),i=p(e),a=f(e,"H2",{id:!0,class:!0});var c=w(a);o=P(c,$),c.forEach(m),u=p(e),d=f(e,"P",{id:!0,class:!0});var v=w(d);h=P(v,y),v.forEach(m),g=p(e);for(var b=0;b<q.length;b+=1)q[b].l(e);x=D(),this.h()},h:function(){n.src!=="/images/rossignol-mobile.jpg"&&v(n,"src","/images/rossignol-mobile.jpg"),v(n,"alt","Eine Nachtigall in Pastell"),v(n,"class","pic-mobile"),v(s,"id","title"),v(s,"class","svelte-jl7vw0"),v(a,"id","subtitle"),v(a,"class","svelte-jl7vw0"),v(d,"id","intro"),v(d,"class","svelte-jl7vw0")},m:function(e,l){k(e,n,l),k(e,t,l),k(e,s,l),b(s,r),k(e,i,l),k(e,a,l),b(a,o),k(e,u,l),k(e,d,l),b(d,h),k(e,g,l);for(var c=0;c<q.length;c+=1)q[c].m(e,l);k(e,x,l)},p:function(e,n){if(1&n&&M!==(M=e[1].title[e[0].language]+"")&&R(r,M),1&n&&$!==($=e[1].subtitle[e[0].language]+"")&&R(o,$),1&n&&y!==(y=e[1].intro[e[0].language]+"")&&R(h,y),3&n){var t;for(L=e[1].text[e[0].language],t=0;t<L.length;t+=1){var s=S(e,L,t);q[t]?q[t].p(s,n):(q[t]=z(s),q[t].c(),q[t].m(x.parentNode,x))}for(;t<q.length;t+=1)q[t].d(1);q.length=L.length}},d:function(e){e&&m(n),e&&m(t),e&&m(s),e&&m(i),e&&m(a),e&&m(u),e&&m(d),e&&m(g),T(q,e),e&&m(x)}}}function H(e){var n,t,s,r,i;return document.title=n="Louise Augoyard | "+e[1].title[e[0].language],r=new u({props:{$$slots:{default:[B]},$$scope:{ctx:e}}}),{c:function(){t=l("meta"),s=c(),d(r.$$.fragment),this.h()},l:function(e){var n=h('[data-svelte="svelte-148br04"]',document.head);t=f(n,"META",{name:!0,content:!0}),n.forEach(m),s=p(e),g(r.$$.fragment,e),this.h()},h:function(){v(t,"name","description"),v(t,"content","Die Konzert-Lektüre De Musica verbindet Literatur für Harfe\r\n    Solo mit philosophischen Texten über Musik.")},m:function(e,n){b(document.head,t),k(e,s,n),x(r,e,n),i=!0},p:function(e,t){var s=M(t,1)[0];(!i||3&s)&&n!==(n="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=n);var a={};33&s&&(a.$$scope={dirty:s,ctx:e}),r.$set(a)},i:function(e){i||($(r.$$.fragment,e),i=!0)},o:function(e){y(r.$$.fragment,e),i=!1},d:function(e){m(t),e&&m(s),L(r,e)}}}function F(e,n,t){var s;q(e,j,(function(e){return t(0,s=e)}));return[s,{title:{de:"De Musica",fr:"De Musica",en:"De Musica"},subtitle:{de:"Konzertlektüre mit Musik und Philosophie",fr:"Concert-lecture musique & philosophie",en:"Concert for Children with Harp and Live Painting"},intro:{de:"Das Konzert De Musica verbindet Werke für Soloharfe mit der Lektüre von Auszügen aus philosophischen Texten über Natur und Sinn der Musik.",fr:"Le concert De Musica allie la performance d’œuvres pour harpe seule à la lecture d’extraits de textes philosophiques sur la nature et le sens de la musique.",en:"???"},text:{fr:["De l’Antiquité à nos jours, la musique a été l’objet de nombreuses réflexions et théories sur sa forme, ses symboles et sa signification. Les grands philosophes grecs voyaient dans l’accord des sons et des intervalles une représentation de l’harmonie céleste ; Rousseau considérait le chant comme l’expression la plus pure des passions de l’homme à l’état de nature ; pour les romantiques allemands, la musique instrumentale était le lieu privilégié de l’expression de sentiments ineffables.","Le programme comprend entre autres des œuvres de Bach, Beethoven, Fauré, Berio, et des textes de Platon, Rousseau, Adorno, Jankélévitch… Bien que les œuvres ne soient pas nécessairement contemporaines des textes lus et que les philosophes aient avant tout réfléchi sur la musique de leur temps, l’intemporalité des thèses développées permet de mettre en lumière des pièces de pays et d’époques très variés."],de:["Seit der Antike ist die Musik Gegenstand zahlreicher Gedanken und Theorien gewesen: zu ihrer Form, ihren Symbolen und ihrer Bedeutung. Die großen griechischen Philosophen sahen im Zusammenklang der Töne und Intervalle eine Representation der himmlischen Harmonie; für Rousseau war das Singen der reinste Ausdruck der menschlichen Leidenschaften; für die deutschen Romantiker war die Instrumentalmusik das privilegierte Medium für den Ausdruck unaussprechlicher Gefühle.","Auf dem Programm stehen unter anderem Werke von Bach, Beethoven, Fauré, Berio, und Texte von Platon, Rousseau, Adorno und Jankélévitch. Obwohl die musikalischen Werke nicht unbedingt aus derselben Zeit stammen wie die gelesenen Texte, und die Philosophen vor allem über die Musik ihrer eigenen Zeit nachgedacht haben, erlaubt es die Zeitlosigkeit der entwickelten Thesen, Stücke aus sehr unterschiedlichen Ländern und Epochen zu beleuchten."],en:["???"]}}]}var G=function(n){e(u,o);var t=E(u);function u(e){var n;return s(this,u),n=t.call(this),r(a(n),e,F,H,i,{}),n}return u}();export default G;
